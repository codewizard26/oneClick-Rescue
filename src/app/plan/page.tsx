"use client";

import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useAccount } from "wagmi";
import { useSearchParams } from "next/navigation";

type MockAsset = {
    chain: string;
    symbol: string;
    amount: number;
    usd: number;
    urgency: "high" | "medium" | "low";
};

function PlanInner() {
    const { address } = useAccount();
    const params = useSearchParams();
    const safe = params.get("safe") ?? "";
    const [assets, setAssets] = useState<MockAsset[]>([]);

    useEffect(() => {
        // Mock discovery
        const discovered: MockAsset[] = [
            { chain: "Ethereum", symbol: "USDC", amount: 1200, usd: 1200, urgency: "high" },
            { chain: "Polygon", symbol: "MATIC", amount: 900, usd: 500, urgency: "medium" },
            { chain: "BSC", symbol: "BNB", amount: 1.2, usd: 300, urgency: "low" },
        ];
        setAssets(discovered);
    }, []);

    const total = useMemo(() => assets.reduce((s, a) => s + a.usd, 0), [assets]);

    return (
        <div className="min-h-screen p-6 sm:p-10 max-w-5xl mx-auto flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Recovery Plan</h1>
                <Link href="/" className="text-sm text-indigo-400 hover:underline">
                    ← Back
                </Link>
            </div>
            <div className="text-sm text-white/70">
                Compromised wallet: {address ? address : "Not connected"}
                <br />
                Destination (safe): {safe || "—"}
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                    <div className="font-medium">Discovered Assets</div>
                    <div className="text-sm">Total ≈ ${total.toLocaleString()}</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {assets.map((a, idx) => (
                        <div key={idx} className="rounded-md border border-white/10 p-3">
                            <div className="flex items-center justify-between">
                                <div className="font-medium">{a.symbol}</div>
                                <span
                                    className={
                                        a.urgency === "high"
                                            ? "text-red-400"
                                            : a.urgency === "medium"
                                                ? "text-yellow-300"
                                                : "text-green-300"
                                    }
                                >
                                    {a.urgency}
                                </span>
                            </div>
                            <div className="text-sm text-white/70">{a.chain}</div>
                            <div className="text-sm">{a.amount} • ≈ ${a.usd.toLocaleString()}</div>
                            <div className="mt-2 text-xs text-white/70">
                                Route: Swap to SideShift supported token → Shift to safe chain
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end">
                <Link
                    href={`/progress?safe=${encodeURIComponent(safe)}`}
                    className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-500"
                >
                    One-Click Rescue
                </Link>
            </div>
        </div>
    );
}

export default function PlanPage() {
    return (
        <Suspense fallback={<div className="p-6 sm:p-10">Loading plan…</div>}>
            <PlanInner />
        </Suspense>
    );
}


