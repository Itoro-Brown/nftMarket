// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.9;

// This is the standard implementation of ERC721, this is used in NFT minting and creations
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

//This contract inherits the properties of ERC721
contract Nftee is ERC721 {
    constructor() ERC721("BlockChainFreak", "BCF") {
        // In the constructor here the name and the symbol of the Nft is being declared. The constructor is
        //being called before any other code is runned
        _mint(msg.sender, 1);
        _mint(msg.sender, 2);
        _mint(msg.sender, 3);
        _mint(msg.sender, 4);
        _mint(msg.sender, 5);
    }
}
