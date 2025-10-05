"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useMemo } from "react";

export function ConnectBar() {
    const { address, isConnected } = useAccount();
    const { connectors, connect, status: connectStatus, error } = useConnect();
    const { disconnect } = useDisconnect();

    const label = useMemo(() => {
        if (connectStatus === "pending") return "Connecting...";
        if (isConnected && address)
            return `${address.slice(0, 6)}...${address.slice(-4)}`;
        return "Connect Wallet";
    }, [connectStatus, isConnected, address]);

    return (
        <div className="flex items-center justify-between w-full">
            <div className="text-xl font-semibold">OneClick Rescue</div>
            <div className="flex items-center gap-2">
                {isConnected ? (
                    <button
                        className="px-3 py-2 rounded bg-gray-800 text-white hover:bg-gray-700"
                        onClick={() => disconnect()}
                    >
                        {label}
                    </button>
                ) : (
                    <div className="flex gap-2">
                        {connectors.map((c) => (
                            <button
                                key={c.uid}
                                className="px-3 py-2 rounded bg-gray-900 text-white hover:bg-gray-800"
                                onClick={() => connect({ connector: c })}
                                disabled={!c.ready}
                                title={!c.ready ? "Connector not ready" : c.name}
                            >
                                {c.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            {error ? (
                <p className="text-red-500 text-sm mt-2">{error.message}</p>
            ) : null}
        </div>
    );
}


