const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Voting = await ethers.getContractFactory("Voting");
  const voting = await Voting.deploy(); // <- This must be awaited

  await voting.waitForDeployment(); // This is the correct way in latest Hardhat/Ethers

  console.log("Voting contract deployed to:", voting.target); // Use `voting.target` for address
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
