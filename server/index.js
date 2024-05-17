const express = require("express");
const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();

const {
  hardhatClient,
  walletClient,
  bubsSepoliaClient,
  bubsSepoliawalletClient,
} = require("./clients");
const oracleABI = require("../contracts/deployments/localhost/Oracle.json");
const bubsOracleABI = require("../contracts/deployments/bubs/Oracle.json");
const { parseAbi, decodeEventLog } = require("viem");
const {
  convertSolidityAbiToHumanReadable,
  externalAPICall,
} = require("./utils");

let hardhatOracleContract = {
  address: oracleABI.address,
  abi: oracleABI.abi,
};

let bubsOracleContract = {
  address: bubsOracleABI.address,
  abi: bubsOracleABI.abi,
};

async function fullFillContract(id, value) {
  console.log("From the wallet of:", bubsSepoliawalletClient.account.address);
  const hash = await bubsSepoliawalletClient.writeContract({
    address: bubsOracleContract.address,
    abi: bubsOracleContract.abi,
    functionName: "fullfillRequest",
    args: [id, value],
  });
  console.log(`Fulfilling request with id: ${id} with value: ${value}`);
  console.log(`Transaction hash: ${hash}`);
}

console.log(
  `Watching for events on contract: ${bubsOracleContract.address} using the account: ${bubsSepoliawalletClient.account.address}`
);
bubsSepoliaClient.watchEvent({
  address: bubsOracleContract.address,
  events: parseAbi(convertSolidityAbiToHumanReadable(bubsOracleContract.abi)),
  onLogs: async (logs) => {
    for (let i = 0; i < logs.length; i++) {
      let log = logs[i];
      if (log.eventName == "Requested") {
        let decodedLog = decodeEventLog({
          abi: bubsOracleContract.abi,
          data: log.data,
          topics: log.topics,
        });
        console.log(decodedLog.args);
        const data = await externalAPICall(
          decodedLog.args.url,
          decodedLog.args.path
        );
        console.log(
          `Fetching ${decodedLog.args.path} from ${decodedLog.args.url}`
        );
        // console.log(data);
        await fullFillContract(parseInt(decodedLog.args.id), data);
      }
    }
  },
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
