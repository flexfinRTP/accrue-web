// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.5;
contract WavePortal {
    uint256 totalWaves;

    event NewWave(address indexed from, uint256 timestamp, string message);

    struct Wave {
        address waver; // The address of the user who waved.
        string message; // The message the user sent.
        uint256 timestamp; // The timestamp when the user waved.
    }

    Wave[] waves; //Holds all the waves ever sent

    constructor() payable {
        // console.log(
        //     "Hello from the blockchain. Follow me down the rabbit hole!"
        // );
    }

    function wave(string memory _message) public {
        //string _message. the message our user sends us from the frontend!
        totalWaves += 1;
        // console.log("%s has waved!", msg.sender);

        waves.push(Wave(msg.sender, _message, block.timestamp));

        emit NewWave(msg.sender, block.timestamp, _message);

        uint256 prizeAmount = 0.0001 ether; //init prize amount
        require(
            prizeAmount <= address(this).balance,
            "Trying to withdraw more money than the contract has."
        );
        (bool success, ) = (msg.sender).call{value: prizeAmount}("");
        require(success, "Failed to withdraw money from contract.");
    }

    /*
     * getAllWaves will return the struct array waves[]
     * Able to retrieve the waves from our website!
     */
    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        // console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}