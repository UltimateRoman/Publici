import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { useAccountBalance, useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const [balances, setBalances] = useState<{ [key: string]: string }>({});
  const { address } = useAccount();
  const { balance } = useAccountBalance(address);
  const [imageLink, setImageLink] = useState<string>("");
  const [generatedFlag, setGeneratedFlag] = useState<boolean>(false);

  const { data: usdtBalance } = useScaffoldContractRead({
    contractName: "USDT",
    functionName: "balanceOf",
    args: [address],
  });

  const { writeAsync: writeManager } = useScaffoldContractWrite({
    contractName: "Manager",
    functionName: "queryAgent",
    args: [`Generate an image that represents a crypto portfolio which depicts the crypto holdings of the account holder in ETH
      and USDT tokens. The image should be generated in a way that it can be minted as an NFT. The account has a balance of ${balance} 
      ETH and ${usdtBalance} USDT. Depict the balances along with their total USD value`],
  });

  const { writeAsync: mintNFT } = useScaffoldContractWrite({
    contractName: "Manager",
    functionName: "mintNFT",
    args: [`{"name": "Publici Portfolio Snapshot", "image": "${imageLink}", "description": "A snapshot of the current portfolio holdings of the account holder"}`],
  });

  const { data: messageHistory } = useScaffoldContractRead({
    contractName: "Manager",
    functionName: "getLastMessageHistory",
  });

  useEffect(() => {
    const formattedBalance = balance ? Number(balance) : 0;
    setBalances({
      GAL: formattedBalance.toString(),
    });
  }, [balance]);

  useEffect(() => {
    if (messageHistory && Array.isArray(messageHistory) && generatedFlag === true) {
      const links = messageHistory.filter(item => item.includes("http")).map(item => item.replace(/"/g, ""));
      setImageLink(links[links.length - 1]);
    }
  }, [messageHistory]);

  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-2">
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white shadow-lg rounded-lg p-8 w-96">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold">Portfolio</h2>
              <div className="mt-4">
                <div className="mt-4">
                    <div key="0" className="flex justify-between border-b py-2">
                      <span>ETH: </span>
                      <span>{balance}</span>
                    </div> 
                    {
                      usdtBalance &&
                      <div key="1" className="flex justify-between border-b py-2">
                        <span>USDT: </span>
                        <span>{(Number(usdtBalance) / 10**18).toString()}</span>
                      </div>
                    }
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                className="btn btn-primary mb-4 text-white"
                onClick={async () => {
                  try {
                    await writeManager();
                    setGeneratedFlag(true);
                  } catch (error) {
                    console.error("Error generating image:", error);
                  }
                }}
              >
                Generate
              </button>
              <div className="border rounded-lg p-4 mb-4 h-64 flex justify-center items-center overflow-hidden">
                {imageLink != "" ? (
                  <img src={imageLink} alt="Generated Image" className="max-w-full max-h-full object-contain" />
                ) : (
                  <span>[Generated Image]</span>
                )}
              </div>

              <button
                className="btn btn-secondary text-white"
                onClick={async () => {
                  try {
                    await mintNFT();
                  } catch (error) {
                    console.error("Error minting NFT:", error);
                  }
                }}
              >
                Mint NFT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
