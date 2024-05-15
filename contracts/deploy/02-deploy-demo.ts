import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import verify from "../helper-functions"
import { networkConfig, developmentChains } from "../helper-hardhat-config"
import { ethers } from "hardhat"

const deployDemo: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const [owner] = await hre.ethers.getSigners()


  log("----------------------------------------------------")
  log("Deploying Demo Contract and waiting for confirmations...")
  const oracle = await ethers.getContract("Oracle")
  const oracleUser = await deploy("OracleUser", {
    from: deployer,
    args: [oracle.address],
    log: true,
    // we need to wait if on a live network so we can verify properly
    waitConfirmations: networkConfig[network.name]?.blockConfirmations || 1,
  })
  log(`Oracle User at ${oracleUser.address}`)
  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await verify(oracleUser.address, [oracle.address])
  }
}

export default deployDemo
deployDemo.tags = ["all", "oracle"]
