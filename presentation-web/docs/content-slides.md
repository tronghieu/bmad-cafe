# BMAD sharing

## 01 — What is BMAD

> **B**uild · **M**ap · **A**ct · **D**eliver

**BMAD** is a **structured AI-driven software development methodology** — a framework that orchestrates specialized **AI agents** through a **defined workflow** to take a product from idea to shipped code.

**Two primary flows:**

- **Full Flow** — new products, complex features, stakeholder alignment via PRD + Architecture
- **Quick Flow** — small/medium changes, isolated features, brownfield additions

---

## 02 — Project context

### Do This Before Anything Else

`project-context.md` grounds every agent in your project's patterns, conventions, and rules — before they touch any code.

**Without it:** agents ask generic questions, miss existing conventions.
**With it:** agents ask informed, specific questions grounded in what was found.

**Generate it:**
```
/bmad-bmm-generate-project-context
```

**What it captures:** implementation rules · code patterns · tech stack · test patterns

> Always create Project Context before any Quick Flow work. It takes minutes and saves significant back-and-forth.

---

## 03 — Full flow

```
1-Analysis → 2-Planning → 3-Solutioning → 4-Implementation
```

| **Phase** | **Agent** | **Key Output** |
| --- | --- | --- |
| **1-Analysis** | Mary 📊 Analyst | Product Brief |
| **2-Planning** | John 📋 PM | PRD + UX Design |
| **3-Solutioning** | Winston 🏗️ Architect | Architecture + Epics & Stories |
| **4-Implementation** | Bob 🏃 SM + Amelia 💻 Dev | Shipped, reviewed code |

**Use Full Flow when:**
- Building something new or significantly complex
- Stakeholder alignment is needed
- Mis-scoping early = wasted weeks

> The full flow has 18+ steps. For smaller work, there's a better path.

---

## 04 — Quick flow

**Skip the Ceremony, Go Straight to Code**

Quick Flow replaces 3 phases and 18+ steps with **4 focused steps, 1 agent**.

| **Full Flow** | **Quick Flow** |
| --- | --- |
| 18+ steps, 3+ agents | 4 steps, 1 agent |
| Brief → PRD → Architecture → Epics | Understand → Investigate → Generate → Review |
| Multiple output files | 1 file: `tech-spec-{slug}.md` |

**Three workflows:**

```
Quick Spec  →  tech-spec-{slug}.md  →  Quick Dev  →  Adversarial Review  →  Shipped Code
```

> Quick Flow asks: **"What code needs to change, and exactly how?"**

---

## 05 — Quick spec

**Command:** `/bmad-bmm-quick-spec` → **Output:** `tech-spec-{slug}.md`

Turns a feature idea into a **self-contained spec** a dev agent can implement without extra context.

```
Step 1: Understand  →  Step 2: Investigate  →  Step 3: Generate  →  Step 4: Review & Finalize
```

| **Step** | **Goal** | **Output** |
| --- | --- | --- |
| **Understand** | Define what needs to change and why | `tech-spec-wip.md` created |
| **Investigate** | Map technical constraints in the codebase | Files, patterns, stack confirmed |
| **Generate** | Produce ordered task list + Acceptance Criteria | Full implementation plan |
| **Review** | Iterate until "Ready for Development" standard is met | `tech-spec-{slug}.md` finalized |

**Ready for Development** = Actionable · Logical · Testable · Complete · Self-Contained

---

## 06 — Quick spec vs Claude plan mode

| **Dimension** | **Quick Spec** | **Claude `/plan`** |
| --- | --- | --- |
| **Output** | Persistent spec file saved to disk | Ephemeral — lives only in conversation |
| **Code investigation** | Dedicated deep-read step | Ad-hoc — depends on what you ask |
| **Fresh-agent ready** | Yes — self-contained handoff | No — tied to current context window |
| **Adversarial review** | Built-in before implementation | Not available |
| **Resume support** | Detects WIP, offers to resume | Starts from scratch |

**Use Quick Spec when:** you need a durable artifact, a second agent will implement, or the feature needs investigation first.

**Use Claude Plan when:** the change is trivial and you'll implement it immediately in the same session.

---

## 07 — Quick dev

**Command:** `/bmad-bmm-quick-dev`

Executes implementation **autonomously** — ships code, writes tests, runs built-in adversarial review.

**Two modes:**
- **Mode A (recommended):** Provide `tech-spec-{slug}.md` → skips context gathering, straight to execution
- **Mode B:** Describe the task in plain text → gathers context first, then executes

**Execution flow:**
```
Mode Detection → Execute (autonomous) → Self-Check → Adversarial Review → Resolve Findings → Done
```

**Step 5 — Adversarial Code Review:** full `git diff` reviewed by severity (Critical → High → Medium → Low). Zero findings = suspicious, re-analyzes.

**Step 6 — Resolve:** `[W]` Walk through · `[F]` Fix automatically · `[S]` Skip

---

## 08 — Review workflow

**Command:** `/bmad-review-adversarial-general`

A structured **cynical critique** that surfaces weaknesses, gaps, and risks before they become bugs.

**When it runs:**
- After Quick Spec → `[R]` in Step 4 review menu
- After Quick Dev → automatically in Step 5
- Standalone → any spec, doc, or code diff

**What it surfaces:** missing edge cases · ambiguous requirements · risky assumptions · broken logic

**Findings:** ordered Critical → High → Medium → Low, each labeled with ID, Severity, Validity.

> Zero findings is **suspicious** — the reviewer re-analyzes before accepting a clean result.

**Tip:** For better information asymmetry, use a **different high-quality LLM** for validation.

---

## 09 — Checkpoint Preview

**Command:** `/bmad-checkpoint-preview`

LLM-assisted **human-in-the-loop review** — makes sense of a change, focuses attention where it matters, and helps you test effectively.

**When to run it:**
- After any significant code change — before merging or shipping
- Mid-sprint to stay aligned with the original intent
- Before a PR review to give your reviewer the best context

**What it surfaces:**
- Summary of what changed and why
- Key areas needing human attention
- Suggested test scenarios to validate the change

> Run `/bmad-checkpoint-preview` before your PR review to give reviewers the right context at a glance.

---

## 10 — Notes & Tips

**Run each step in a fresh context window**
BMAD communicates via files, not conversation memory. Mixing steps in one long session = context bloat and degraded quality.

**Generate project context first**
`/bmad-bmm-generate-project-context` — prevents the most common source of wasted back-and-forth.

**Archive specs after each sprint**
BMAD does not auto-archive. Move or archive `tech-spec-*.md` files manually at sprint close.

**Use `/bmad-help` when stuck**
Analyzes your current state, detects which phase you're in, recommends the right next step.

**Core commands:**

| `/bmad-help` | Get help at any stage |
| `/bmad-bmm-generate-project-context` | Generate project context |
| `/bmad-bmm-quick-spec` | Quick Spec only |
| `/bmad-bmm-quick-dev` | Quick Dev only |
| `/bmad-agent-bmm-quick-flow-solo-dev` | Full Quick Flow (QS + QD) |

**Further reading:** [docs.bmad-method.org](https://docs.bmad-method.org/how-to/customize-bmad/) · [github.com/bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD)
