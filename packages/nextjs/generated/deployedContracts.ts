const contracts = {
  696969: [
    {
      name: "galadrielDevnet",
      chainId: "696969",
      contracts: {
        USDT: {
          address: "0xB1403f6B528a6002f9D948Fcc488e400117d61a2",
          abi: [
            {
              type: "constructor",
              inputs: [
                {
                  name: "initialOwner",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "DOMAIN_SEPARATOR",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "allowance",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "spender",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "approve",
              inputs: [
                {
                  name: "spender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "balanceOf",
              inputs: [
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "decimals",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint8",
                  internalType: "uint8",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "eip712Domain",
              inputs: [],
              outputs: [
                {
                  name: "fields",
                  type: "bytes1",
                  internalType: "bytes1",
                },
                {
                  name: "name",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "version",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "chainId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "verifyingContract",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "salt",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "extensions",
                  type: "uint256[]",
                  internalType: "uint256[]",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "mint",
              inputs: [
                {
                  name: "to",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "amount",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "name",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "nonces",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "owner",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "permit",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "spender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "deadline",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "v",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "r",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "s",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "renounceOwnership",
              inputs: [],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "symbol",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "totalSupply",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "transfer",
              inputs: [
                {
                  name: "to",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "transferFrom",
              inputs: [
                {
                  name: "from",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "value",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "transferOwnership",
              inputs: [
                {
                  name: "newOwner",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "event",
              name: "Approval",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "spender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "value",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "EIP712DomainChanged",
              inputs: [],
              anonymous: false,
            },
            {
              type: "event",
              name: "OwnershipTransferred",
              inputs: [
                {
                  name: "previousOwner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "newOwner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "Transfer",
              inputs: [
                {
                  name: "from",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "to",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "value",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "error",
              name: "ECDSAInvalidSignature",
              inputs: [],
            },
            {
              type: "error",
              name: "ECDSAInvalidSignatureLength",
              inputs: [
                {
                  name: "length",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
            {
              type: "error",
              name: "ECDSAInvalidSignatureS",
              inputs: [
                {
                  name: "s",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              type: "error",
              name: "ERC20InsufficientAllowance",
              inputs: [
                {
                  name: "spender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "allowance",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "needed",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
            {
              type: "error",
              name: "ERC20InsufficientBalance",
              inputs: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "balance",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "needed",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
            {
              type: "error",
              name: "ERC20InvalidApprover",
              inputs: [
                {
                  name: "approver",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              type: "error",
              name: "ERC20InvalidReceiver",
              inputs: [
                {
                  name: "receiver",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              type: "error",
              name: "ERC20InvalidSender",
              inputs: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              type: "error",
              name: "ERC20InvalidSpender",
              inputs: [
                {
                  name: "spender",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              type: "error",
              name: "ERC2612ExpiredSignature",
              inputs: [
                {
                  name: "deadline",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
            {
              type: "error",
              name: "ERC2612InvalidSigner",
              inputs: [
                {
                  name: "signer",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "owner",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              type: "error",
              name: "InvalidAccountNonce",
              inputs: [
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "currentNonce",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
            {
              type: "error",
              name: "InvalidShortString",
              inputs: [],
            },
            {
              type: "error",
              name: "OwnableInvalidOwner",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              type: "error",
              name: "OwnableUnauthorizedAccount",
              inputs: [
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              type: "error",
              name: "StringTooLong",
              inputs: [
                {
                  name: "str",
                  type: "string",
                  internalType: "string",
                },
              ],
            },
          ],
        },
        Agent: {
          address: "0x67Fc3C95dC59C10101AEc68aAcfD245dF3E231FF",
          abi: [
            {
              type: "constructor",
              inputs: [
                {
                  name: "initialOracleAddress",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "systemPrompt",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "agentRuns",
              inputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "owner",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "responsesCount",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "max_iterations",
                  type: "uint8",
                  internalType: "uint8",
                },
                {
                  name: "is_finished",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getMessageHistoryContents",
              inputs: [
                {
                  name: "agentId",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "string[]",
                  internalType: "string[]",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getMessageHistoryRoles",
              inputs: [
                {
                  name: "agentId",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "string[]",
                  internalType: "string[]",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "isRunFinished",
              inputs: [
                {
                  name: "runId",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "onOracleFunctionResponse",
              inputs: [
                {
                  name: "runId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "response",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "errorMessage",
                  type: "string",
                  internalType: "string",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "onOracleOpenAiLlmResponse",
              inputs: [
                {
                  name: "runId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "response",
                  type: "tuple",
                  internalType: "struct IOracle.OpenAiResponse",
                  components: [
                    {
                      name: "id",
                      type: "string",
                      internalType: "string",
                    },
                    {
                      name: "content",
                      type: "string",
                      internalType: "string",
                    },
                    {
                      name: "functionName",
                      type: "string",
                      internalType: "string",
                    },
                    {
                      name: "functionArguments",
                      type: "string",
                      internalType: "string",
                    },
                    {
                      name: "created",
                      type: "uint64",
                      internalType: "uint64",
                    },
                    {
                      name: "model",
                      type: "string",
                      internalType: "string",
                    },
                    {
                      name: "systemFingerprint",
                      type: "string",
                      internalType: "string",
                    },
                    {
                      name: "object",
                      type: "string",
                      internalType: "string",
                    },
                    {
                      name: "completionTokens",
                      type: "uint32",
                      internalType: "uint32",
                    },
                    {
                      name: "promptTokens",
                      type: "uint32",
                      internalType: "uint32",
                    },
                    {
                      name: "totalTokens",
                      type: "uint32",
                      internalType: "uint32",
                    },
                  ],
                },
                {
                  name: "errorMessage",
                  type: "string",
                  internalType: "string",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "oracleAddress",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "prompt",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "runAgent",
              inputs: [
                {
                  name: "query",
                  type: "string",
                  internalType: "string",
                },
                {
                  name: "max_iterations",
                  type: "uint8",
                  internalType: "uint8",
                },
              ],
              outputs: [
                {
                  name: "i",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setOracleAddress",
              inputs: [
                {
                  name: "newOracleAddress",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "event",
              name: "AgentRunCreated",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "runId",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "OracleAddressUpdated",
              inputs: [
                {
                  name: "newOracleAddress",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
          ],
        },
        PubliciNFT: {
          address: "0x81998f683E40dca0015CD7320CfC6979168AB25b",
          abi: [
            {
              type: "constructor",
              inputs: [
                {
                  name: "defaultAdmin",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "minter",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "DEFAULT_ADMIN_ROLE",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "MINTER_ROLE",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "approve",
              inputs: [
                {
                  name: "to",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "tokenId",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "balanceOf",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getApproved",
              inputs: [
                {
                  name: "tokenId",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getRoleAdmin",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "grantRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "hasRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "isApprovedForAll",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "operator",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "name",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "ownerOf",
              inputs: [
                {
                  name: "tokenId",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "address",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "renounceRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "callerConfirmation",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "revokeRole",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "safeMint",
              inputs: [
                {
                  name: "to",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "uri",
                  type: "string",
                  internalType: "string",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "safeTransferFrom",
              inputs: [
                {
                  name: "from",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "tokenId",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "safeTransferFrom",
              inputs: [
                {
                  name: "from",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "tokenId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "data",
                  type: "bytes",
                  internalType: "bytes",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setApprovalForAll",
              inputs: [
                {
                  name: "operator",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "approved",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "supportsInterface",
              inputs: [
                {
                  name: "interfaceId",
                  type: "bytes4",
                  internalType: "bytes4",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "bool",
                  internalType: "bool",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "symbol",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "tokenByIndex",
              inputs: [
                {
                  name: "index",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "tokenOfOwnerByIndex",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "index",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "tokenURI",
              inputs: [
                {
                  name: "tokenId",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [
                {
                  name: "",
                  type: "string",
                  internalType: "string",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "totalSupply",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "transferFrom",
              inputs: [
                {
                  name: "from",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "to",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "tokenId",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "event",
              name: "Approval",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "approved",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "tokenId",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "ApprovalForAll",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "operator",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "approved",
                  type: "bool",
                  indexed: false,
                  internalType: "bool",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "BatchMetadataUpdate",
              inputs: [
                {
                  name: "_fromTokenId",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
                {
                  name: "_toTokenId",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "MetadataUpdate",
              inputs: [
                {
                  name: "_tokenId",
                  type: "uint256",
                  indexed: false,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleAdminChanged",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "previousAdminRole",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "newAdminRole",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleGranted",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "sender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "RoleRevoked",
              inputs: [
                {
                  name: "role",
                  type: "bytes32",
                  indexed: true,
                  internalType: "bytes32",
                },
                {
                  name: "account",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "sender",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "Transfer",
              inputs: [
                {
                  name: "from",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "to",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "tokenId",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "error",
              name: "AccessControlBadConfirmation",
              inputs: [],
            },
            {
              type: "error",
              name: "AccessControlUnauthorizedAccount",
              inputs: [
                {
                  name: "account",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "neededRole",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              type: "error",
              name: "ERC721EnumerableForbiddenBatchMint",
              inputs: [],
            },
            {
              type: "error",
              name: "ERC721IncorrectOwner",
              inputs: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "tokenId",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "owner",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              type: "error",
              name: "ERC721InsufficientApproval",
              inputs: [
                {
                  name: "operator",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "tokenId",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
            {
              type: "error",
              name: "ERC721InvalidApprover",
              inputs: [
                {
                  name: "approver",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              type: "error",
              name: "ERC721InvalidOperator",
              inputs: [
                {
                  name: "operator",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              type: "error",
              name: "ERC721InvalidOwner",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              type: "error",
              name: "ERC721InvalidReceiver",
              inputs: [
                {
                  name: "receiver",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              type: "error",
              name: "ERC721InvalidSender",
              inputs: [
                {
                  name: "sender",
                  type: "address",
                  internalType: "address",
                },
              ],
            },
            {
              type: "error",
              name: "ERC721NonexistentToken",
              inputs: [
                {
                  name: "tokenId",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
            {
              type: "error",
              name: "ERC721OutOfBoundsIndex",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  internalType: "address",
                },
                {
                  name: "index",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
          ],
        },
        Manager: {
          address: "0xFe2015aD0c526b5FE44e6098Ef741FfaA2BaE27F",
          abi: [
            {
              type: "constructor",
              inputs: [
                {
                  name: "_nft",
                  type: "address",
                  internalType: "contract INFT",
                },
                {
                  name: "_agent",
                  type: "address",
                  internalType: "contract IAgent",
                },
                {
                  name: "_token",
                  type: "address",
                  internalType: "contract IERC20",
                },
              ],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "agent",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "contract IAgent",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "agentRunId",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "getLastMessageHistory",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "string[]",
                  internalType: "string[]",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "maxIterations",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "uint8",
                  internalType: "uint8",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "mintNFT",
              inputs: [
                {
                  name: "uri",
                  type: "string",
                  internalType: "string",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "nft",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "contract INFT",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "queryAgent",
              inputs: [
                {
                  name: "query",
                  type: "string",
                  internalType: "string",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "setMaxIterations",
              inputs: [
                {
                  name: "_maxIterations",
                  type: "uint8",
                  internalType: "uint8",
                },
              ],
              outputs: [],
              stateMutability: "nonpayable",
            },
            {
              type: "function",
              name: "token",
              inputs: [],
              outputs: [
                {
                  name: "",
                  type: "address",
                  internalType: "contract IERC20",
                },
              ],
              stateMutability: "view",
            },
            {
              type: "event",
              name: "AgentRunCreated",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
                {
                  name: "runId",
                  type: "uint256",
                  indexed: true,
                  internalType: "uint256",
                },
              ],
              anonymous: false,
            },
            {
              type: "event",
              name: "MintedNFT",
              inputs: [
                {
                  name: "owner",
                  type: "address",
                  indexed: true,
                  internalType: "address",
                },
              ],
              anonymous: false,
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
