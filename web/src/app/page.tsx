"use client";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const account = useAccount();

  useEffect(() => {}, []);

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
          <form className="flex flex-col gap-4">
            <label>Oracle Address</label>
            <input
              type="text"
              placeholder="0x"
              className="border border-zinc-700 p-4 rounded-lg"
            />
            <label>API</label>
            <input
              type="text"
              placeholder="Enter your API"
              className="border border-zinc-700 p-4 rounded-lg"
            />
            <label>API key</label>
            <input
              type="text"
              placeholder="Enter your API key"
              className="border border-zinc-700 p-4 rounded-lg"
            />
            <button
              type="submit"
              className="bg-white text-black p-4 rounded-lg"
            >
              Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
