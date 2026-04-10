# Chainless Product Truth

> Source of truth for what Chainless is, does, and does NOT do.
> Derived from the chainless-app codebase (April 2026). Use this to fact-check all blog content.

---

## What Chainless Is

Chainless is a **mobile app** (React Native / Expo, iOS and Android) that serves as a **self-custodial digital wealth platform** for the Brazilian market. It combines:

- A multichain crypto wallet (non-custodial, powered by Notus infrastructure)
- PIX on/off ramp (buy and sell crypto with Brazilian PIX)
- DeFi yield strategies (passive income)
- Liquidity pool provisioning (Uniswap V3)
- A debit card (powered by Gnosis Pay)
- Token swapping (cross-chain and same-chain)
- Tax reporting tools for Brazilian users

**Primary language:** Portuguese (PT-BR). The app UI is in Portuguese.
**Primary market:** Brazil.

---

## Core Architecture

### Wallet / Custody Model

- **Account Abstraction wallet** powered by **Notus** (notus.team) as infrastructure provider
- Users authenticate via **social login** (Google, Apple) through **Web3Auth**
- The wallet is a smart contract wallet (account abstraction), NOT a traditional EOA wallet
- **MPC + social login architecture:** A seed phrase IS generated and exists, but the user doesn't need to write it down or store it. Social login acts as a bridge, enabling recoverability without the user managing 12 words. The seed phrase can be exported if the user wants full manual control. This is true self-custody: MPC distributes key fragments, social login provides the recovery path.
- Users **can export their private key** (available in Settings > Account Information > Export Private Key)
- Biometric authentication (fingerprint) is available
- The app uses the term "autocustódia" (self-custody) — the user controls the wallet through their email/social login
- The wallet is technically an account abstraction wallet where gas fees are sponsored/managed by Chainless (gasless transactions for the user)

### Supported Blockchains

The app is multichain, supporting:

1. **Polygon** (primary chain — most operations happen here)
2. **Arbitrum**
3. **Base**
4. **Optimism**
5. **BSC (BNB Smart Chain)**
6. **Avalanche**
7. **Ethereum** (mainnet)
8. **Gnosis** (for the card feature)

### NOT natively supported (but bridged both ways):

- **Bitcoin network** — BTC is bridged to wBTC on EVM chains. Users can send BTC in, it gets wrapped, and they can unwrap and send BTC out. Full round-trip supported.
- **Solana network** (SOL is available as wSOL on Polygon only)
- **XRP Ledger** (XRP is available as Binance-Peg XRP on BSC only)

---

## Features — What Chainless Actually Does

### 1. Portfolio / Home

- Net worth overview
- Token balances with privacy toggle
- Transaction history / activity feed
- Currency preference (BRL/USD display)

### 2. Token Management (Buy / Sell / Swap / Send / Receive)

- **Buy crypto:** Purchase tokens with PIX (BRL → crypto). Entry point for fiat.
- **Sell crypto:** Sell tokens and withdraw to PIX (crypto → BRL).
- **Swap:** Same-chain and cross-chain token swaps. Powered by aggregators: **Enso, Odos, Paraswap** (same-chain); **Li.FI, Rango, XY** (cross-chain).
- **Send:** Send crypto to external wallets. Supports chain selection.
- **Receive:** Display wallet address + QR code for receiving.
- **Token discovery:** Token listing with market data, price charts, search.

### 3. PIX Integration

- **PIX Deposit:** Convert BRL to stablecoins (USDC, USDT) via PIX. Provider: **Transfero** (USDC) or **4P Finance** (USDT).
- **PIX Withdrawal:** Convert stablecoins back to BRL and receive via PIX.
- **QR Code Payments:** Scan PIX QR codes or paste "copia-e-cola" to pay directly from crypto balance.
- **PIX Keys:** Manage PIX keys (CPF, CNPJ, Email).
- **PIX Limits:** Transaction limits with warnings.
- **PIX deposit fee:** R$0.52 flat per deposit.
- **KYC required** for PIX: Document upload + liveness check via Notus KYC.

### 4. Earn — Yield (Passive Income)

The "Investir" (Invest) tab offers:

- **Passive Income in USD:** Deposit USDC into Aave on Base chain. Earn lending yield in USD.
- **Passive Income in BRL:** Deposit BRZ into a yield strategy on Polygon. Earn yield in BRL.
- **Tokenized Gold:** Access to a tokenized gold token (PAXG-like) on Polygon.

**Yield details:**
- Uses **Aave protocol** (specifically mentioned in app FAQ and code). The app previously also used Compound and may have supported DAI/USDT on Polygon, but some yield tokens have been removed.
- Chainless charges **0.2% fee** on invest and **0.2% on redeem** + network gas margin.
- **No lock-up period** — withdraw anytime.
- Yield is variable, driven by Aave lending market demand.

**IMPORTANT — What the blog says vs. reality:**
- The blog mentions Compound and Lido extensively. The app code only shows **Aave** integration and a **BRZ yield** strategy. There is NO evidence of Lido (ETH staking) or Compound integration in the current codebase.
- The blog claims "3-12% range" yields — the app FAQ says APY is dynamic and based on 30-day averages.
- The blog mentions "180+ assets" — the app does support many tokens via aggregators, but this number is not verified in code.

### 5. Earn — Liquidity Pools

- Powered by **Uniswap V3** on Polygon.
- Users can add liquidity to token pairs, set price ranges, collect fees.
- Supports: pool discovery, add liquidity (single or both tokens), position management, rebalancing, redeem, fee collection.
- Risk disclosure is included.

### 6. Card (Debit Card)

- Powered by **Gnosis Pay** — a crypto debit card.
- Separate KYC process for card activation.
- Features: card management (physical + virtual), transaction history, top-up, withdraw balance, spending limits, cashback.
- **Cashback** is paid in GNO tokens. Users can redeem cashback or increase it by buying/holding more GNO.
- Card operates on Gnosis chain with USDC.e (bridged USDC).
- Up to 5 active cards.
- Spending limit configuration available.

### 7. Account & Settings

- Export private key (with audit logging)
- Notification preferences
- Help center (powered by DevRev)
- Referral system (create code, share via email, track rewards)
- **Tax report:** Generate and schedule monthly tax reports for Brazilian tax obligations.
- Legal document signing (terms, privacy).
- Account closure with grace period.

### 8. Engagement

- **Referrals:** Create referral code, share, earn rewards.
- **Quests:** Gamified rewards system with withdrawals.
- **Learn More:** Educational content within the app.

---

## What Chainless Does NOT Do

### Not offered / Not in the codebase:

1. **No trading** — No order book, no limit orders, no spot trading. Only swaps.
2. **No leverage / margin trading** — Zero margin, futures, or derivatives.
3. **No NFTs** — No NFT marketplace, minting, or display.
4. **No staking (native)** — Despite the blog mentioning "staking Ethereum via Lido," there is NO Lido integration or ETH staking in the current codebase.
5. **No native Solana or XRP support** — Only wrapped versions on EVM chains.
7. **No fiat bank account** — Chainless is NOT a bank. PIX integration goes through providers (Transfero, 4P Finance), not a bank account.
8. **No insurance / deposit protection** — Self-custodial means no FDIC/FGC equivalent.
8. **No advanced DeFi** — No yield farming across multiple protocols, no auto-compounding vaults, no strategy optimization. The yield is straightforward Aave lending.
9. **No Compound integration** — Despite blog claims. Only Aave is integrated.
10. **No Lido / ETH staking** — Despite blog claims. Not in the codebase.
11. **No multi-language support** — App is PT-BR only (though the blog exists in EN and PT-BR).

### Coming Soon (next release)

- **BTC-collateralized loans:** Users will be able to use BTC as collateral to borrow USDC via Aave, at low interest rates. BTC is bridged in (native BTC → wBTC), used as collateral on Aave, and can be bridged back out. Full round-trip. Blog content may reference this as upcoming but should NOT present it as a live feature until released.

---

## Monetization

Based on code analysis:

1. **Yield fees:** 0.2% on invest + 0.2% on redeem
2. **PIX deposit fee:** R$0.52 per deposit
3. **Swap spread/margin:** Price impact limits and gas margin on swaps
4. **Card fees:** Via Gnosis Pay partnership (transaction fees, potential card fees)
5. **Network gas margin:** Chainless advances gas fees and charges a margin

---

## Technical Infrastructure

| Component | Provider |
|-----------|----------|
| Wallet infrastructure | Notus (notus.team) |
| Account abstraction | Notus smart accounts |
| Auth / Social login | Web3Auth (Google, Apple) |
| PIX on/off ramp | Transfero (USDC), 4P Finance (USDT) |
| Swap aggregators | Enso, Odos, Paraswap |
| Cross-chain bridges | Li.FI, Rango, XY |
| Yield protocol | Aave (on Base for USD, on Polygon for BRZ) |
| Liquidity pools | Uniswap V3 (Polygon) |
| Debit card | Gnosis Pay (Gnosis chain) |
| KYC | Notus KYC Standard |
| Support | DevRev |
| Analytics | Firebase Analytics |

---

## Key Facts for Blog Content Accuracy

1. **Self-custody claim is fully valid.** It's an MPC + account abstraction wallet with social login. A seed phrase IS generated and exportable, but users don't need to manage it — social login provides the recovery bridge. This is true self-custody with better UX, not a compromise.
2. **"MPC wallet" claim is accurate.** MPC distributes key fragments across multiple parties. Social login (Web3Auth) acts as the authentication and recovery layer. The combination means: self-custody (user holds the keys), no single point of failure (MPC), and no seed phrase management burden (social login recovery).
3. **Aave is the only confirmed yield protocol.** Blog mentions of Compound and Lido are NOT reflected in the codebase.
4. **Yield tokens exist for USD (Base chain) and BRL (Polygon chain).** Some older yield tokens on Polygon (USDC, DAI, USDT) have been removed.
5. **The card is a Gnosis Pay card**, not a Chainless-branded card. Cashback is in GNO tokens.
6. **PIX is deeply integrated** — deposit, withdraw, QR code payments.
7. **Tax reporting is built in** — users can generate tax reports, which is a significant feature for Brazilian users.
8. **Referral program is active** with code sharing and reward tracking.
