import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"

const deployEditorContract: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  console.log("************************************************************************************************************************\n")
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("0.01");

  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();
  console.log(`deployed to ${lock.address}`);
  console.log("************************************************************************************************************************\n")
}

export default deployEditorContract;
deployEditorContract.id = 'lock_contract'
deployEditorContract.tags = ["Lock"]