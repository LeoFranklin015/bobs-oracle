// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "./Oracle.sol";

contract OracleUser {
    address oracleAddress;
    mapping(uint => string) public values;

    constructor(address oracle) {
        oracleAddress = oracle;
    }

    function request(
        string memory url,
        string memory path
    ) public payable returns (uint) {
        Oracle oracle = Oracle(oracleAddress);
        // return only the return value from the oracle
        uint id = oracle.request(url, path, this.fullfillRequest.selector);
        return id;
    }

    function fullfillRequest(uint id, string memory value) public {
        require(msg.sender == oracleAddress, "Only the oracle can update the request");
        values[id] = value;
    }
}
