import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import verify from "../helper-functions"
import { networkConfig, developmentChains } from "../helper-hardhat-config"
import { ethers } from "hardhat"

const deployOracle: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const [owner] = await hre.ethers.getSigners()


  log("----------------------------------------------------")
  log("Deploying Oracle and waiting for confirmations...")
  console.log(`Owner address: ${owner.address}`)
  const oracle = await deploy("Oracle", {
    from: deployer,
    args: [],
    log: true,
    // we need to wait if on a live network so we can verify properly
    waitConfirmations: networkConfig[network.name]?.blockConfirmations || 1,
  })
  log(`Oracle at ${oracle.address}`)
  if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
    await verify(oracle.address, [])
  }
}

export default deployOracle
deployOracle.tags = ["all", "oracle"]
