one click rescue – Emergency Cross-Chain Wallet Recovery (Frontend)

Tech stack: Next.js (App Router, TS), Tailwind, wagmi, viem, TanStack Query.

Quick start

1) Prereqs
- Node 18+
- WalletConnect Project ID (optional for QR modal): create at `https://cloud.walletconnect.com` and set the env var below

2) Install

```bash
npm i
```

3) Env

Create `.env.local` with:

```bash
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
```

4) Run

```bash
npm run dev
```

Open `http://localhost:3000`.

Pages

- `/` Landing: connect compromised wallet (read-only), input safe wallet
- `/plan` Plan: mock asset discovery and route preview
- `/progress` Progress: simulated execution with mock tx links
- `/report` Report: summary and printable audit trail

Notes

- All blockchain actions are mocked for the first-round demo. No private keys handled; wagmi is wired for wallet connection only.
- SideShift.ai integration is represented as steps; real API calls to be added server-side in a later phase.
