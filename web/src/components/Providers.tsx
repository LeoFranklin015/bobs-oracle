"use client";
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import {
  mainnet,
  optimism,
  arbitrum,
  sepolia,
  optimismSepolia,
  arbitrumSepolia,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();

const bubsSepolia = {
  id: 2125031,
  name: "Bubs testnet",
  network: "Bubs testnet",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    public: { http: ["https://bubs-sepolia.rpc.caldera.xyz/http/"] },
    default: { http: ["https://bubs-sepolia.rpc.caldera.xyz/http/"] },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://bubs-sepolia.explorer.caldera.xyz//" },
  },
  testnet: true,
}

const config = getDefaultConfig({
  appName: "Bubs Oracle",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
  chains: [
    // mainnet,
    // optimism,
    // arbitrum,
    // sepolia,
    // optimismSepolia,
    // arbitrumSepolia,
    bubsSepolia
  ],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#111111",
            accentColorForeground: "white",
            borderRadius: "medium",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
