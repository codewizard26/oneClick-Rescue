import Link from "next/link";

export function Steps() {
    const steps = [
        { n: 1, t: "Connect compromised wallet (read-only)" },
        { n: 2, t: "Enter safe destination wallet" },
        { n: 3, t: "Review optimized cross-chain plan" },
        { n: 4, t: "Execute one-click rescue" },
    ];
    return (
        <section id="start" className="mt-14 glass rounded-xl p-6">
            <h2 className="text-lg font-semibold">Get started in minutes</h2>
            <ol className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {steps.map((s) => (
                    <li key={s.n} className="rounded-lg border border-white/10 p-4">
                        <div className="text-sm text-white/60">Step {s.n}</div>
                        <div className="font-medium mt-1">{s.t}</div>
                    </li>
                ))}
            </ol>
            <div className="mt-6 flex gap-3">
                <Link href="/" className="btn-secondary">Connect wallet</Link>
                <Link href="/plan" className="btn-primary">Generate plan</Link>
            </div>
        </section>
    );
}


