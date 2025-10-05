"use client";

import Link from "next/link";
import { ConnectBar } from "@/components/ConnectBar";

export function Hero() {
    return (
        <section className="pt-10 sm:pt-16">
            <ConnectBar />
            <div className="mt-10 grid gap-8 md:grid-cols-5 items-center">
                <div className="md:col-span-3">
                    <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                        one click rescue
                    </h1>
                    <p className="mt-4 text-white/70 max-w-prose">
                        Emergency cross-chain wallet recovery powered by SideShift.ai. Detect
                        assets, generate an optimized plan, and consolidate to a safe wallet
                        — in one click.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <Link href="#start" className="btn-primary">Start Rescue</Link>
                        <a href="https://sideshift.ai" target="_blank" className="btn-secondary">Learn about SideShift</a>
                    </div>
                    <div className="mt-6 text-xs text-white/60">
                        No custody. No private keys. All transactions are signed client-side.
                    </div>
                </div>
                <div className="md:col-span-2">
                    <div className="glass rounded-xl p-5">
                        <div className="text-sm text-white/70">Success metrics</div>
                        <div className="mt-3 grid grid-cols-2 gap-3 text-center">
                            <div className="rounded-lg border border-white/10 p-4">
                                <div className="text-3xl font-semibold">&lt;5m</div>
                                <div className="text-xs text-white/60">Recovery time</div>
                            </div>
                            <div className="rounded-lg border border-white/10 p-4">
                                <div className="text-3xl font-semibold">90%+</div>
                                <div className="text-xs text-white/60">Assets recovered</div>
                            </div>
                            <div className="rounded-lg border border-white/10 p-4">
                                <div className="text-3xl font-semibold">≤3</div>
                                <div className="text-xs text-white/60">User steps</div>
                            </div>
                            <div className="rounded-lg border border-white/10 p-4">
                                <div className="text-3xl font-semibold">4+</div>
                                <div className="text-xs text-white/60">Chains supported</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


