"use client";

import { createConfig, http } from "wagmi";
import { mainnet, polygon, bsc, arbitrum, avalanche } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { walletConnect } from "wagmi/connectors";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

const availableConnectors = [
    injected({
        target: "metaMask",
    }),
    ...(projectId
        ? [
            walletConnect({
                projectId,
                showQrModal: true,
            }),
        ]
        : []),
];

export const wagmiConfig = createConfig({
    chains: [mainnet, polygon, bsc, arbitrum, avalanche],
    connectors: availableConnectors,
    transports: {
        [mainnet.id]: http(),
        [polygon.id]: http(),
        [bsc.id]: http(),
        [arbitrum.id]: http(),
        [avalanche.id]: http(),
    },
});


