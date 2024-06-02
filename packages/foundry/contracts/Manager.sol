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
    function runAgent(string memory query, uint8 max_iterations) external returns (uint i);
    function getMessageHistoryContents(uint agentId) external view returns (string[] memory);
    function getMessageHistoryRoles(uint agentId) external view returns (string[] memory);
}

contract Manager {
    INFT public nft;
    IAgent public agent;
    IERC20 public token;

    uint8 public maxIterations = 5;
    uint256 public agentRunId;

    event AgentRunCreated(address indexed owner, uint indexed runId);
    event MintedNFT(address indexed owner);

    constructor(INFT _nft, IAgent _agent, IERC20 _token) {
        nft = _nft;
        agent = _agent;
        token = _token;
    }

    function queryAgent(string memory query) external {
        agentRunId = agent.runAgent(query, maxIterations);
        emit AgentRunCreated(msg.sender, agentRunId);
    }

    function mintNFT(string memory uri) external {
        nft.safeMint(msg.sender, uri);
        emit MintedNFT(msg.sender);
    }

    function setMaxIterations(uint8 _maxIterations) external {
        maxIterations = _maxIterations;
    }

    function getLastMessageHistory() public view returns (string[] memory) {
        return agent.getMessageHistoryContents(agentRunId);
    }
}