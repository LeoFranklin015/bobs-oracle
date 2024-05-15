// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "hardhat/console.sol";

contract Oracle {
    address public oracleOwner;
    address public oracleCaller;

    struct Request {
        uint id;
        string url;
        string path;
        string value;
        address caller;
        bytes4 callback;
    }

    uint public currentId = 1;
    mapping(uint => Request) public requests;

    event Requested(
        uint id,
        string url,
        string path,
        address caller
    );

    constructor() {
        oracleOwner = msg.sender;
        oracleCaller = msg.sender;
    }

    function setCaller(address caller) public {
        require(msg.sender == oracleOwner, "Only the owner can set the caller");
        oracleCaller = caller;
    }

    function request(
        string memory url,
        string memory path,
        bytes4 callbackFunction
    ) public returns (uint) {
        requests[currentId] = Request(
            currentId,
            url,
            path,
            "",
            msg.sender,
            callbackFunction
        );
        console.log("New Request Id %s", currentId);
        emit Requested(currentId, url, path, msg.sender);
        currentId += 1;
        return currentId - 1;
    }

    function fullfillRequest(uint id, string memory value) public {
        Request storage request = requests[id];
        require(
            msg.sender == oracleCaller,
            "Only the caller can update the request"
        );
        request.value = value;
        (bool success, ) = request.caller.call(
            abi.encodeWithSelector(request.callback, request.id, request.value)
        );
        require(success, "Callback failed");
    }

    function getOracleOwner() public view returns (address) {
        return oracleOwner;
    }

    function getOracleCaller() public view returns (address) {
        return oracleCaller;
    }

    function getRequests(uint id) public view returns (Request memory) {
        return requests[id];
    }

    function getCurrentId() public view returns (uint) {
        return currentId;
    }

    function getRequestsValue(uint id) public view returns (string memory) {
        return requests[id].value;
    }

    function getRequestsCaller(uint id) public view returns (address) {
        return requests[id].caller;
    }

    function getRequestsCallback(uint id) public view returns (bytes4) {
        return requests[id].callback;
    }
}
