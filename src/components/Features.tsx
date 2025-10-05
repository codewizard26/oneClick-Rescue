export function Features() {
    const items = [
        {
            title: "Cross-chain asset discovery",
            desc: "Scan major chains to identify token balances and estimate USD value.",
        },
        {
            title: "Optimized recovery plan",
            desc: "Swap and shift routes designed to minimize fees and slippage.",
        },
        {
            title: "Powered by SideShift.ai",
            desc: "Fast, non-custodial cross-chain shifts for reliable asset consolidation.",
        },
        {
            title: "Security-first",
            desc: "Client-side signing only. No private key handling. Full transparency.",
        },
    ];
    return (
        <section className="mt-14">
            <h2 className="text-lg font-semibold">Why OneClick Rescue</h2>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((it) => (
                    <div key={it.title} className="glass rounded-lg p-4">
                        <div className="font-medium">{it.title}</div>
                        <p className="text-sm text-white/70 mt-1">{it.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}


