"use client";

import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Steps } from "@/components/Steps";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [safeAddress, setSafeAddress] = useState("");
  return (
    <div className="min-h-screen p-6 sm:p-10 max-w-5xl mx-auto flex flex-col gap-8">
      <Hero />
      <Features />
      <section className="glass rounded-lg p-6 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Emergency Cross-Chain Wallet Recovery</h1>
        <p className="text-sm text-white/70">
          Connect your compromised wallet (read-only) and set a destination safe
          wallet to consolidate assets using SideShift.ai.
        </p>
        <label className="text-sm font-medium" htmlFor="safeAddress">
          Safe destination wallet address
        </label>
        <input
          id="safeAddress"
          placeholder="0x..."
          value={safeAddress}
          onChange={(e) => setSafeAddress(e.target.value)}
          className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="flex gap-3">
          <Link
            href={`/plan?safe=${encodeURIComponent(safeAddress)}`}
            className="btn-primary disabled:opacity-50"
          >
            Generate Plan
          </Link>
        </div>
      </section>
      <Steps />
      <Footer />
    </div>
  );
}
