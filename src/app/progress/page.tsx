"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type Step = {
    id: string;
    label: string;
    status: "pending" | "running" | "done" | "error";
    txUrl?: string;
};

export default function ProgressPage() {
    const params = useSearchParams();
    const safe = params.get("safe") ?? "";
    const [steps, setSteps] = useState<Step[]>([
        { id: "discover", label: "Confirm assets", status: "done" },
        { id: "swap", label: "Swap to SideShift-compatible tokens", status: "pending" },
        { id: "shift", label: "Shift cross-chain via SideShift.ai", status: "pending" },
        { id: "transfer", label: "Transfer to safe wallet", status: "pending" },
    ]);

    useEffect(() => {
        // Simulate execution progression
        let i = 0;
        const interval = setInterval(() => {
            setSteps((prev) => {
                const next = [...prev];
                const runningIndex = next.findIndex((s) => s.status === "running");
                if (runningIndex !== -1) {
                    next[runningIndex] = { ...next[runningIndex], status: "done", txUrl: "https://explorer.example/tx/mock" };
                    if (runningIndex + 1 < next.length) {
                        next[runningIndex + 1] = { ...next[runningIndex + 1], status: "running" };
                    }
                    return next;
                }
                const firstPending = next.findIndex((s) => s.status === "pending");
                if (firstPending !== -1) {
                    next[firstPending] = { ...next[firstPending], status: "running" };
                }
                return next;
            });
            i++;
            if (i > 6) clearInterval(interval);
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    const allDone = useMemo(() => steps.every((s) => s.status === "done"), [steps]);

    return (
        <div className="min-h-screen p-6 sm:p-10 max-w-5xl mx-auto flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Rescue Progress</h1>
                <Link href="/" className="text-sm text-indigo-400 hover:underline">
                    ← Back
                </Link>
            </div>
            <div className="text-sm text-white/70">Destination (safe): {safe || "—"}</div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col gap-3">
                {steps.map((s) => (
                    <div key={s.id} className="flex items-center justify-between border border-white/10 rounded-md p-3">
                        <div className="flex items-center gap-3">
                            <span
                                className={
                                    s.status === "done"
                                        ? "w-3 h-3 rounded-full bg-green-400"
                                        : s.status === "running"
                                            ? "w-3 h-3 rounded-full bg-yellow-300 animate-pulse"
                                            : "w-3 h-3 rounded-full bg-white/30"
                                }
                            />
                            <div className="font-medium">{s.label}</div>
                        </div>
                        {s.txUrl ? (
                            <a href={s.txUrl} target="_blank" className="text-xs text-indigo-300 underline">
                                View tx
                            </a>
                        ) : null}
                    </div>
                ))}
            </div>
            <div className="flex justify-end">
                <Link
                    href={`/report?safe=${encodeURIComponent(safe)}`}
                    className={`px-4 py-2 rounded ${allDone ? "bg-green-600 hover:bg-green-500" : "bg-gray-600 opacity-60"} text-white`}
                >
                    {allDone ? "View Final Report" : "Processing..."}
                </Link>
            </div>
        </div>
    );
}


