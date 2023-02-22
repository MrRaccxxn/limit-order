import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers"
import "hardhat-deploy";
import "hardhat-gas-reporter";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    localhost: {
      live: false,
      saveDeployments: true,
      chainId: 31337,
      deploy: ['localhost/'],
      tags: ["local"]
    },
    hardhat: {
      live: false,
      saveDeployments: true,
      chainId: 31337,
      deploy: ['hardhat/'],
      tags: ["test", "local"]
    },
    arbitrumGoerli: {
      chainId: 421613,
      url: `https://arb-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.WALLET_PRIVATE_KEY || ''],
      deploy: ['arbitrum-goerli/'],
      tags: ["staging"]
    }
  },
  namedAccounts: {
    deployer: {
      default: 0
    },
  },
  paths: {
    deploy: 'deploy',
    deployments: 'deployments',
    imports: 'imports'
  },
  gasReporter: {
    token: 'ETH',
    currency: 'USD',
    gasPrice: 100,
    maxMethodDiff: 10,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || ''
  }
};

export default config;
