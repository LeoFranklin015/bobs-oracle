"use client";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
  useReadContract,
  useWatchContractEvent,
} from "wagmi";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Badge } from "@/components/ui/badge";
import { abi, contractAddress } from "../lib/constants";
import { ethers } from "ethers";

export default function Home() {
  const account = useAccount();

  const { writeContractAsync, error, data: hash } = useWriteContract();
  const interfac = new ethers.Interface(abi);

  const [api, setApi] = useState("");
  const [key, setkey] = useState("");
  const [value, setValue] = useState(0);
  const {
    error: readError,
    data: actualValue,
    refetch,
  } = useReadContract({
    abi: abi,
    address: contractAddress,
    functionName: "values",
    args: [value],
  });
  useEffect(() => {
    refetch();
  }, [value]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const args = [api, key];
    const data = await writeContractAsync({
      abi: abi,
      address: contractAddress,
      functionName: "request",
      args: args,
    });
    console.log(data);
    if (error) {
      console.error("Error requesting: ", error);
    }

    console.log(" args: ", args, account?.address);
  };

  useWatchContractEvent({
    abi: abi,
    address: contractAddress,
    eventName: "RequestMade",
    onLogs(logs: any) {
      console.log("new logs :", Number(logs[0].args.id));
      setValue(Number(logs[0].args.id));
    },
  });

  const {
    data: recipt,
    isFetched: fetched,
    isLoading: loading,
  } = useWaitForTransactionReceipt({
    hash,
  });

  return (
    <main className="container flex min-h-screen flex-col items-center p-10">
      <div className="absolute top-5 right-5 flex gap-4">
        <ConnectButton />
        <ModeToggle />
      </div>
      <div className="relative flex place-items-center">
        {/* <Image
          className="relative mr-10"
          src="/giphy.gif"
          alt="Karma Logo"
          width={180}
          height={180}
          priority
        /> */}
        <div className="mr-10">
          <div className="text-3xl font-bold">Bubs Oracle</div>
          <div className="text-lg ">Oracle service for Bubs testnet</div>
        </div>
      </div>

      <section className="lg:max-w-5xl lg:w-full mt-12">
        <div className="ring-1 ring-zinc-700 rounded-xl p-8 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label>Oracle Address</label>
            {/* <input
              type="text"
              placeholder="0x"
              className="border border-zinc-700 p-4 rounded-lg"
            /> */}
            <div className="border border-zinc-700 p-4 rounded-lg">
              {" "}
              0x2c8CEc9B25DbFEAC623b42CbAb268A4409Fe73E1
            </div>
            <label>API</label>
            <input
              type="text"
              placeholder="Enter your API"
              className="border border-zinc-700 p-4 rounded-lg"
              value={api}
              onChange={(e) => setApi(e.target.value)}
            />
            <label>key</label>
            <input
              type="text"
              placeholder="Enter your API key"
              className="border border-zinc-700 p-4 rounded-lg"
              value={key}
              onChange={(e) => setkey(e.target.value)}
            />
            <button
              type="submit"
              className="bg-white text-black p-4 rounded-lg"
            >
              Request
            </button>
          </form>
        </div>
        <div className="ring-1 ring-zinc-700 rounded-xl p-8 w-full mt-10">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Response</div>
            <div>
              <Badge
                className={
                  loading ? "bg-red-600" : fetched ? "bg-green-500" : ""
                }
              >
                {loading ? "fetching" : fetched ? "fetched" : "Request"}
              </Badge>
            </div>
          </div>
          {hash && <div className="text-white">Transaction Hash: {hash}</div>}
          {loading && <div className="text-white">Loading...</div>}

          {fetched && <div>Value :{JSON.stringify(actualValue)}</div>}
          {readError && <div>Value :{JSON.stringify(readError)}</div>}
        </div>
      </section>
    </main>
  );
}
