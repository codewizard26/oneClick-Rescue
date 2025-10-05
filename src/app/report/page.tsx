"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ReportInner() {
    const params = useSearchParams();
    const safe = params.get("safe") ?? "";

    return (
        <div className="min-h-screen p-6 sm:p-10 max-w-4xl mx-auto flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Rescue Report</h1>
                <Link href="/" className="text-sm text-indigo-400 hover:underline">
                    ← Home
                </Link>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 flex flex-col gap-3">
                <div className="font-medium">Summary</div>
                <ul className="list-disc pl-5 text-sm text-white/80">
                    <li>Total assets consolidated: ≈ $2,000</li>
                    <li>Chains covered: Ethereum, Polygon, BSC</li>
                    <li>Destination wallet: {safe || "—"}</li>
                    <li>Time to completion: ~3m 40s</li>
                </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                <div className="font-medium mb-2">Audit Trail</div>
                <div className="text-sm text-white/80 space-y-1">
                    <div>1. Swapped MATIC → USDC (Polygon) – tx: explorer/polygon/0xmock...</div>
                    <div>2. Shifted USDC (Polygon) → USDC (Ethereum) via SideShift – ref: #mock</div>
                    <div>3. Transferred consolidated USDC → safe wallet – tx: explorer/eth/0xmock...</div>
                </div>
            </div>

            <div className="flex justify-end gap-3">
                <button
                    onClick={() => window.print()}
                    className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700"
                >
                    Print / Save PDF
                </button>
                <Link href="/" className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500 text-white">
                    Start New Rescue
                </Link>
            </div>
        </div>
    );
}

export default function ReportPage() {
    return (
        <Suspense fallback={<div className="p-6 sm:p-10">Preparing report…</div>}>
            <ReportInner />
        </Suspense>
    );
}


