# Bubs Oracle: Empowering Decentralized Applications on the Bubs Testnet

#### About the Product
Bubs Oracle provides smart contracts with external data, allowing them to interact with data outside their native blockchain environment. Oracles can be used to fetch various types of data, such as financial data, weather conditions, or even random number generation, which can then be used to trigger smart contract execution based on predefined conditions.

Currently Bubs oracle supports "GET" Request to external APIs. The Oracle contract is currently deployed on the Bubs Testnet and can be deployed on any network with ease in a single command. The Oracle contract is written in solidity and the Backend is built in NodeJS using viem library.



Bubs Oracle is an innovative service designed to bridge the gap between smart contracts and the vast world of external data. Built for the Bubs Testnet, it empowers your decentralized applications (dApps) to interact with critical information residing outside their native blockchain environment.

## Unlocking External Data for Smart Contract Functionality

Traditionally, smart contracts operate within a closed loop, limited to the data stored on the blockchain. Bubs Oracle changes this game by enabling them to:

### Fetch Crucial Data
Utilize GET requests to retrieve valuable data points from external APIs. This opens doors to integrating:

- **Market Prices:** Integrate live market data for various assets, enabling dynamic price updates within your dApp.
- **Weather Conditions:** Trigger smart contract actions based on real-time weather conditions.
- **Random Number Generation:** Introduce an element of chance into your dApps by fetching verifiable random numbers from external sources.

### Customizable Data Feeds
Bubs Oracle isn't limited to financial data. It allows you to integrate any relevant data feed that enhances your dApp's functionalities.

## Built for the Bubs Ecosystem

- **Seamless Integration:** Designed specifically for the Bubs Testnet, Bubs Oracle ensures a smooth and efficient integration process with your smart contracts.
- **Decentralized and Secure:** Unlike centralized oracles, Bubs Oracle leverages the power of blockchain technology. This eliminates the risk of manipulation and ensures the integrity of the retrieved data.
- **Effortless Deployment:** Deploying Bubs Oracle on any network is a breeze, requiring just a single command. This allows you to quickly set up your oracle infrastructure for your dApp.

## Benefits of Integrating Bubs Oracle

- **Enhanced dApp Functionality:** Unlock a wider range of possibilities for your dApps by incorporating valuable external data.
- **Decentralized Decision-Making:** Empower your dApps to make autonomous decisions based on reliable and tamper-proof data.
- **Improved User Experience:** Provide users with a richer and more interactive experience by integrating relevant external data into your dApps.

## Bubs Oracle: The Foundation for Powerful dApps on Bubs Testnet

By integrating Bubs Oracle, you can build robust and feature-rich dApps on the Bubs Testnet. With its ease of use, secure data feeds, and versatility, Bubs Oracle is the perfect partner for your innovative decentralized application development. Start building the future of dApps on Bubs Testnet today!




Follow the readme.md to deploy your own oracle.

#### Tech Stack

- Node
- Nextjs
- Wagmi
- Viem
- Solidity
- Hardhat

#### Get Started

- Navigate to Server Folder
 ```bash 
yarn install

```
- Enter the necesary details such as privateKey and Oracle Address 
 ```bash 
yarn start

```
This will start the server 


- navigate to web folder
```bash 
yarn install

```
- Enter the project id in env
```bash 
yarn run dev

```


- Open the site at localhost:3000
- Enter the API and key of the value you want to get.
- Example
```ts
API : https://jsonplaceholder.typicode.com/posts/1
key : title 
```

this will request and fetch a title from the endpoint 
