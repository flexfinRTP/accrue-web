//SPDX-License-Identifier: MIT
pragma solidity 0.7.4;

import "@0xsequence/erc-1155/contracts/tokens/ERC1155/ERC1155.sol";

contract LicenseNFT is ERC1155 { // took away , Ownable for comilation to work.
	using SafeMath for uint;

	// declarations

	// struct?

	// mappings

	// Objects balances

	// events
	// event Mint(address _)
	// constructor
	// constructor(uint memory _id) {
	// 	mint(_id);
	// }

	// FUNCTIONS
	/****************************************|
    |            Minting Functions           |
    |_______________________________________*/

	/**
	 * notice Mint _amount of tokens of a given id
	 *  _to      The address to mint tokens to
	 *  _id      Token id to mint
	 * _amount  The amount to be minted
	 *  _data    Data to pass if receiver is contract
	 */

	// mint License NFT function
	function _mint(
		address _to,
		uint _id,
		uint _amount,
		bytes memory _data
	) internal {
		// Add _amount
		balances[_to][_id] = balances[_to][_id].add(_amount);

		// Emit event
		emit TransferSingle(msg.sender, address(0x0), _to, _id, _amount);

		// Calling onReceive method if recipient is contract
		_callonERC1155Received(address(0x0), _to, _id, _amount, gasleft(), _data);
	}
}