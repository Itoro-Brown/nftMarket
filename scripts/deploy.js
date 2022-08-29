const hre = require("hardhat");

async function main() {
  // This is the syntax that is being used in deploying contracts when using the hardhat frame work
  const nfteecontract = await hre.ethers.getContractFactory("Nftee");
  const deployedcontract = await nfteecontract.deploy();
  await deployedcontract.deployed();

  //Here the address where the contract is deployed to is being printed out, This is also known as the
  // Contract address.
  console.log(`This contract is deployed to ${deployedcontract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
