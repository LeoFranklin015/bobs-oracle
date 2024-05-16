const { createPublicClient, http, parseAbi, createWalletClient, defineChain } = require("viem");
const { privateKeyToAccount } = require("viem/accounts")
const { hardhat } = require("viem/chains")
require("dotenv").config();


const bubsSepoliaChain = defineChain({
    id: 2125031,
    name: "Bubs testnet",
    network: "Bubs testnet",
    iconBackground: "#fff",
    nativeCurrency: {
        decimals: 18,
        name: "ETH",
        symbol: "ETH",
    },
    rpcUrls: {
        public: { http: ["https://bubs-sepolia.rpc.caldera.xyz/http/"] },
        default: { http: ["https://bubs-sepolia.rpc.caldera.xyz/http/"] },
    },
    blockExplorers: {
        default: { name: "Explorer", url: "https://bubs-sepolia.explorer.caldera.xyz//" },
    },
    testnet: true,
})

const hardhatClient = createPublicClient({
    transport: http('http://localhost:8545'),
})

const walletClient = createWalletClient({
    chain: hardhat,
    transport: http('http://localhost:8545'),
    account: privateKeyToAccount(process.env.PRIVATE_KEY)
})

const bubsSepoliaClient = createPublicClient({
    chain: bubsSepoliaChain,
    transport: http('https://bubs-sepolia.rpc.caldera.xyz/http'),
})

const bubsSepoliawalletClient = createWalletClient({
    chain: bubsSepoliaChain,
    transport: http('https://bubs-sepolia.rpc.caldera.xyz/http'),
    account: privateKeyToAccount(process.env.PRIVATE_KEY)
})

module.exports = {
    hardhatClient,
    walletClient,
    bubsSepoliaClient,
    bubsSepoliawalletClient
}