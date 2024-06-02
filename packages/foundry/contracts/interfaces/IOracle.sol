// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

interface IOracle {

    struct Content {
        string contentType;
        string value;
    }

    struct Message {
        string role;
        Content [] content;
    }

    struct OpenAiRequest {
        string model;
        int8 frequencyPenalty;
        string logitBias;
        uint32 maxTokens;
        int8 presencePenalty;
        string responseFormat;
        uint seed;
        string stop;
        uint temperature;
        uint topP;
        string tools;
        string toolChoice;
        string user;
    }

    struct OpenAiResponse {
        string id;
        string content;
        string functionName;
        string functionArguments;
        uint64 created;
        string model;
        string systemFingerprint;
        string object;
        uint32 completionTokens;
        uint32 promptTokens;
        uint32 totalTokens;
    }

    struct GroqRequest {
        string model;
        int8 frequencyPenalty;
        string logitBias;
        uint32 maxTokens;
        int8 presencePenalty;
        string responseFormat;
        uint seed;
        string stop;
        uint temperature;
        uint topP;
        string user;
    }

    struct GroqResponse {
        string id;
        string content;
        uint64 created;
        string model;
        string systemFingerprint;
        string object;
        uint32 completionTokens;
        uint32 promptTokens;
        uint32 totalTokens;
    }

    struct KnowledgeBaseQueryRequest {
        string cid;
        string query;
        uint32 num_documents;
    }

    function createLlmCall(
        uint promptId
    ) external returns (uint);

    function createGroqLlmCall(
        uint promptId,
        GroqRequest memory request
    ) external returns (uint);

    function createOpenAiLlmCall(
        uint promptId,
        OpenAiRequest memory request
    ) external returns (uint);

    function createFunctionCall(
        uint functionCallbackId,
        string memory functionType,
        string memory functionInput
    ) external returns (uint i);

    function createKnowledgeBaseQuery(
        uint kbQueryCallbackId,
        string memory cid,
        string memory query,
        uint32 num_documents
    ) external returns (uint i);
}