// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface INFT {
    function safeMint(address to, string memory uri) external;
    function balanceOf(address owner) external view returns (uint256 balance);
    function ownerOf(uint256 tokenId) external view returns (address);
    function tokenURI(uint256 tokenId) external view returns (string memory);
}

interface IAgent {
    function prompt() external view returns (string memory);
    function agentRuns(uint) external view returns (AgentRun memory);
    function agentRunCount() external view returns (uint);
    function runAgent(string memory query, uint8 max_iterations) external returns (uint i);
}

contract Manager {
    INFT public nft;
    IAgent public agent;
    IERC20 public token;

    uint256 public agentRunCount;

    constructor(INFT _nft, IAgent _agent, IERC20 _token) {
        nft = _nft;
        agent = _agent;
        token = _token;
    }

    function portfolioMint(string memory uri) external {
        uint256 ethBalance = msg.sender.balance;
        uint256 usdtBalance = token.balanceOf(msg.sender);

        
    }
}