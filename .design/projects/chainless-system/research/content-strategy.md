# Content Strategy: Fees Page Microcopy and Tone
> Phase: research | Project: chainless-system | Generated: 2026-04-07
---

## 1. Voice Application

The brand voice is Confident, Defiant, Warm, Clear (60/40 premium/rebel). For a fees page, this translates to:

- **Confident:** State fees plainly, without hedging or apologetic language. No "unfortunately we charge..." or "a small fee of..."
- **Defiant:** Position transparency as a deliberate choice. "Sem taxas ocultas" is a subtle jab at competitors who bury fees.
- **Warm:** Acknowledge the user's intelligence. No patronizing explanations of basic concepts.
- **Clear:** Every fee must be unambiguous. No asterisks leading to fine print. No "may apply" language.

## 2. Page Header Copy

**Overline:** `Taxas`
**H1 (serif, display):** `Tabela de Taxas`
**Introductory paragraph:** A single sentence establishing the transparency posture.

Candidate intro:
> "Todas as taxas cobradas pela Chainless estao descritas abaixo. Sem asteriscos, sem letras miudas."

This is brief, defiant, and warm. The second sentence is the rebel edge — it differentiates from competitors without naming them.

Alternative (more neutral):
> "A Chainless cobra taxas exclusivamente pela utilizacao da interface tecnologica. Abaixo, a lista completa."

This echoes the regulatory page's language (section 3.3) and connects fees to the technology-licensing model.

## 3. Fee Item Microcopy

### Terminology Decisions

| Concept | Recommended Term | Avoid |
|---------|-----------------|-------|
| PIX deposit | Deposito PIX | Deposito via PIX, Entrada PIX |
| PIX withdrawal | Saque PIX | Retirada PIX, Saque via PIX |
| Swap | Swap (compra, venda e conversao de cripto) | Negociacao, Trading |
| Yield | Investimento em renda | Staking, Lending, Renda passiva |
| Liquidity pool creation | Criacao de Pool de Liquidez | Abrir pool, Iniciar pool |
| External transfer | Transferencia para wallets externas | Envio externo, Saque cripto |

"Swap" is kept in English because it is the established term in the Brazilian crypto lexicon. "Pool de Liquidez" likewise — these are not translated in practice.

### Fee Value Formatting

- Fixed fees: `R$ 2,90` (Brazilian formatting, comma as decimal separator)
- Percentage fees: `0,7%` (no space before %)
- Free items: `Sem taxa` (not "Gratis", not "R$ 0,00" — "Sem taxa" is warmer and more definitive)
- Conditional percentage: `0,5% sobre o valor movimentado` (condition follows the percentage)

## 4. Gas Fee Section

This needs special treatment because it is an externality, not a Chainless-set fee.

**Section heading (h2):** `Taxa de gas`

**Explanatory copy (2-3 paragraphs):**

Paragraph 1 — What it is:
> "A taxa de gas e um custo inerente as redes blockchain, cobrado por validadores para processar transacoes. Nao e uma taxa da Chainless."

Paragraph 2 — How Chainless handles it:
> "A Chainless utiliza Account Abstraction para que voce nao precise pagar gas diretamente. O custo de gas e absorvido pela Chainless e refletido na cotacao efetiva da transacao."

Paragraph 3 — Where to see it:
> "O valor estimado de gas e exibido na tela de Detalhes da Transacao antes da confirmacao."

This structure follows the Clear principle: what, how, where.

## 5. Conditional Fee Explanations

Several fees have conditions (e.g., "0,5% na conversao de BRZ/USDC para criptos da Pool"). These conditions should appear as secondary text within the fee cell, not as footnotes.

**Pattern:**
```
dt: Criacao de Pool de Liquidez
dd: 0,5%
dd (secondary): na conversao de BRZ/USDC para criptos da Pool
```

Or in table form:
```
Service: Criacao de Pool de Liquidez
Fee: 0,5%
Note: na conversao de BRZ/USDC para criptos da Pool
```

Inline conditions avoid the trust-eroding pattern of footnotes and asterisks.

## 6. Closing Statement

A brief closing line reinforces completeness:

> "Esta e a lista completa de taxas da Chainless. Em caso de alteracao, esta pagina sera atualizada com antecedencia."

This mirrors the regulatory page's commitment to transparency and preempts the "what about hidden fees?" anxiety.

## 7. Tone Calibration

The fees page is NOT a legal document (like termos-de-uso). It is an informational page. The tone should be:

- Closer to the marketing site than the legal pages.
- Sentences shorter than legal prose. No legalese.
- Active voice throughout. "A Chainless cobra..." not "E cobrada pela Chainless..."
- No conditional mood. "A taxa e..." not "A taxa podera ser..."
