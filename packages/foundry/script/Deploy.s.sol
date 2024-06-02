//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../contracts/Agent.sol";
import "../contracts/Manager.sol";
import "../contracts/PubliciNFT.sol";
import "../contracts/mocks/USDT.sol";
import "./DeployHelpers.s.sol";

contract DeployScript is ScaffoldETHDeploy {
    error InvalidPrivateKey(string);

    function run() external {
        uint256 deployerPrivateKey = setupLocalhostEnv();
        if (deployerPrivateKey == 0) {
            revert InvalidPrivateKey(
                "You don't have a deployer account. Make sure you have set DEPLOYER_PRIVATE_KEY in .env or use `yarn generate` to generate a new random account"
            );
        }
        vm.startBroadcast(deployerPrivateKey);
        USDT usdt = new USDT(vm.addr(deployerPrivateKey));
        console.logString(
            string.concat(
                "USDT deployed at: ",
                vm.toString(address(usdt))
            )
        );
        Agent agent = new Agent(
            0x4168668812C94a3167FCd41D12014c5498D74d7e,
            "You are a helpful assistant"
        );
        console.logString(
            string.concat(
                "Agent deployed at: ",
                vm.toString(address(agent))
            )
        );
        PubliciNFT nft = new PubliciNFT(
            vm.addr(deployerPrivateKey),
            vm.addr(deployerPrivateKey)
        );
        console.logString(
            string.concat(
                "PubliciNFT deployed at: ",
                vm.toString(address(nft))
            )
        );
        Manager manager = new Manager(
            INFT(address(nft)),
            IAgent(address(agent)),
            IERC20(address(usdt))
        );
        console.logString(
            string.concat(
                "Manager deployed at: ",
                vm.toString(address(manager))
            )
        );
        bytes32 MINTER_ROLE = keccak256("MINTER_ROLE");
        nft.grantRole(MINTER_ROLE, address(manager));
        vm.stopBroadcast();

        /**
         * This function generates the file containing the contracts Abi definitions.
         * These definitions are used to derive the types needed in the custom scaffold-eth hooks, for example.
         * This function should be called last.
         */
        exportDeployments();
    }

    function test() public {}
}
