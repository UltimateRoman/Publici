const contracts = {
  696969: [
    {
      name: "galadrielDevnet",
      chainId: "696969",
      contracts: {
        Agent: {
          address: "0x37f02a0eF022Abd9a3E8604a8089f2c9317AC7E0",
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
      },
    },
  ],
} as const;

export default contracts;
