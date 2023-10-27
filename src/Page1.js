import { ConnectKitButton } from "connectkit";
import React from "react";
import { useAccount } from "wagmi";
import { getContract, getWalletClient } from "@wagmi/core";
import abi from "./artifacts/contracts/stakeYard.sol/Storage.json";
import { usePublicClient } from "wagmi";

const Page1 = () => {
  const { address } = useAccount();
  const publicClient = usePublicClient();

  const contractInstance = async () => {
    const walletClient = await getWalletClient();
    console.log(walletClient);

    const contract = getContract({
      address: "0x3984A4975D1cc8b45c5363d40763E2914842EdC8",
      abi: abi.abi,
      publicClient,
    });
    console.log(contract);

    const retrieve = await contract.read.retrieve();
    console.log(retrieve);
  };

  return (
    <div>
      <ConnectKitButton />
      Hello from page
      <h1> {address}</h1>
      <button onClick={() => contractInstance()}>click</button>
    </div>
  );
};

export default Page1;
