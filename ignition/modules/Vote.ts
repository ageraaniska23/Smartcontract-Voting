import { ethers } from "hardhat";


async function main() {
  const Web3Vote = await ethers.deployContract('Vote');
  await Web3Vote.waitForDeployment();
  const User =  await Web3Vote.getAddress();
  console.log('depploy succes!!!!')
  console.log("for verify : npx hardhat verify <address> --network bsctestnet")
  console.log(`Contract : ${User}`);

}

main().catch((error) =>{
  console.error(error);
  process.exitCode = 1;
});

// https://amoy.polygonscan.com/address/0xc5d696438F8Cc0A8Cea675d8bced3f30c14E2dAf#code