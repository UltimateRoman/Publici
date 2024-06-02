import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { useAccountBalance, useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const [balances, setBalances] = useState<{ [key: string]: string }>({});
  const { address } = useAccount();
  const [imageLink, setImageLink] = useState<string[]>([]);
  const { balance } = useAccountBalance(address);

  const { writeAsync: writeManager } = useScaffoldContractWrite({
    contractName: "Manager",
    functionName: "queryAgent",
    args: [`I have ${balance} amount of GAL in my wallet, Generate me an Image to depict my Portfolio`],
  });

  const { writeAsync: mintNFT } = useScaffoldContractWrite({
    contractName: "Manager",
    functionName: "mintNFT",
    args: [imageLink[0]],
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
    if (messageHistory && Array.isArray(messageHistory)) {
      const links = messageHistory.filter(item => item.includes("http")).map(item => item.replace(/"/g, ""));
      setImageLink(links);
    }
  }, [messageHistory]);

  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white shadow-lg rounded-lg p-8 w-96">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold">Portfolio</h2>
              <div className="mt-4">
                <div className="mt-4">
                  {Object.entries(balances).map(([token, amount]) => (
                    <div key={token} className="flex justify-between border-b py-2">
                      <span>{token}:</span>
                      <span>{amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                className="btn btn-primary mb-4"
                onClick={async () => {
                  try {
                    await writeManager();
                  } catch (error) {
                    console.error("Error generating image:", error);
                  }
                }}
              >
                Generate
              </button>
              <div className="border rounded-lg p-4 mb-4 h-64 flex justify-center items-center overflow-hidden">
                {imageLink.length > 0 ? (
                  <img src={imageLink[0]} alt="Generated Image" className="max-w-full max-h-full object-contain" />
                ) : (
                  <span>[Image]</span>
                )}
              </div>

              <button
                className="btn btn-secondary"
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
