import { ethers, network } from "hardhat"
import {
  developmentChains,
} from "../helper-hardhat-config"
import * as fs from "fs"
import { moveBlocks } from "../utils/move-blocks"

export async function createRequest(args: any[]) {
  const oracle = await ethers.getContract("Oracle")
  const oracleUser = await ethers.getContract("OracleUser")

  console.log('Creating request...')
  await oracleUser.request("https://jsonplaceholder.typicode.com/posts/100", "title", {
    gasLimit: 2000000,
    value: ethers.utils.parseEther("0.1"),
  })
  console.log('Request created to oracle...')

  if (developmentChains.includes(network.name)) {
    await moveBlocks(2)
  }
}

createRequest([])
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
