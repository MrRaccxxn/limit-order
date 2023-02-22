
import hre from "hardhat";

async function main() {
    console.log("************************************************************************************************************************\n")
    const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

    const lockedAmount = hre.ethers.utils.parseEther("0.01");

    const Lock = await hre.ethers.getContractFactory("Lock");
    const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

    await lock.deployed();

    console.log("************************************************************************************************************************\n")

    console.log(
        `Lock with 0.01 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});