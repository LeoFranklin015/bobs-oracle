import { ethers, network } from "hardhat"
import {
    developmentChains,
} from "../helper-hardhat-config"
import * as fs from "fs"
import { moveBlocks } from "../utils/move-blocks"

export async function viewFullfil(args: any[]) {
    const oracleUser = await ethers.getContract("OracleUser")

    console.log('Viewing request...')
    let value = await oracleUser.values("2")
    console.log(`Value for requestId 2: ${value}`)

    if (developmentChains.includes(network.name)) {
        await moveBlocks(2)
    }
}

viewFullfil([])
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
