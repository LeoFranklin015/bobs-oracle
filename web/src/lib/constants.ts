export const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "oracle",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "fullfillRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "url",
        type: "string",
      },
      {
        internalType: "string",
        name: "path",
        type: "string",
      },
    ],
    name: "request",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "values",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const contractAddress = "0xa9D91ad719B84c1483f2e756b91cb6a5d9B67C0f";
