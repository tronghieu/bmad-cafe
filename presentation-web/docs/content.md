# BMAD sharing

## 01 — What is BMAD

###
> **B**uild · **M**ap · **A**ct · **D**eliver
> 

**BMAD** is a **structured AI-driven software development methodology** — a framework that orchestrates specialized **AI agents** through a **defined workflow** to take a product from idea to shipped code.
(2 key points: Specialized AI Agents & Defined Workflow)

### **It has two primary flows**

- **Full Flow** — for new products, complex features, or when you need stakeholder alignment via a PRD + Architecture doc
- **Quick Flow** — for small/medium changes, isolated features, brownfield additions where the full ceremony is overkill

## Why do we need BMAD?
Summarize [why-bmad](./why-bmad.md)

## 02 — Project context

### **Do This Before Anything Else**

`project-context.md` is a lean, LLM-optimized file that grounds every agent in your project's patterns, conventions, and rules — before they ask any questions or touch any code.

---

### **Why It Matters**

Without project context, agents ask generic questions and may miss conventions already established in your codebase.

With project context, agents ask **informed, specific questions** grounded in what was found.

---

### **How to Generate It**

```
/bmad-bmm-generate-project-context
```

**Agent:** Mary (📊 Business Analyst)

The agent scans your existing codebase and produces a concise `project-context.md` containing:

- Critical implementation rules
- Code patterns and naming conventions
- Tech stack and architectural decisions
- Test patterns

---

### **How Quick Flow Uses It**

| **When** | **What happens** |
| --- | --- |
| **Quick Spec starts** | Loads `project-context.md` automatically before any user interaction |
| **Quick Dev starts** | Loads `project-context.md` in Step 1 before any implementation |
| **File not found** | Re-checks during Step 2 (code investigation) |

---

### **Key Note from the Field**

> Always create your Project Context before doing any Quick Flow work. It takes a few minutes and saves significant back-and-forth later.
> 

**Output location:** configured in `_bmad/bmm/config.yaml` → `output_folder`

---

## 03 — Full flow

### **Four Phases, Specialist Agents**

```
1-Analysis → 2-Planning → 3-Solutioning → 4-Implementation
```

---

### **Phase Overview**

| **Phase** | **Key Workflows** | **Agent** | **Required?** |
| --- | --- | --- | --- |
| **1-Analysis** | Brainstorm, Market Research, Create Brief | Mary (📊 Analyst) | No |
| **2-Planning** | Create PRD, Validate PRD, Create UX | John (📋 PM) | **Yes** |
| **3-Solutioning** | Architecture, Epics & Stories, Readiness Check | Winston (🏗️ Architect) | **Yes** |
| **4-Implementation** | Sprint Planning → Create Story → Dev Story → Code Review | Bob (🏃 SM) + Amelia (💻 Dev) | **Yes** |

---

### **The Full Flow Story**

1. **Analyst** explores the domain and shapes the idea into a product brief
2. **PM** turns the brief into a detailed PRD (Product Requirements Document)
3. **Architect** designs the technical solution and breaks work into epics & stories
4. **Scrum Master** plans the sprint and prepares each story for development
5. **Developer** implements each story with tests and code review

---

### **When to Use the Full Flow**

- Building something **new or significantly complex**
- You need **stakeholder alignment** — the PRD serves as the shared artifact
- Multiple teams need to work from the **same specification**
- The scope is large enough that **mis-scoping early = wasted weeks**

---

### **3.1 — Phase 1: Analysis (📊 Analyst)**

**Agent:** Mary (📊 Analyst) · **Required:** No

This phase explores the problem space and shapes the initial product idea. It's optional but highly valuable for new products or unfamiliar domains.

#### **Workflows**

| **Workflow** | **Command** | **Output** |
| --- | --- | --- |
| **Brainstorming** | `/bmad-brainstorming` | Generates new product ideas through structured ideation |
| **Market Research** | `/bmad-market-research` | Investigates market landscape and competition |
| **Domain Research** | `/bmad-domain-research` | Deep-dives into domain knowledge and industry patterns |
| **Technical Research** | `/bmad-technical-research` | Researches technical feasibility and technology options |
| **Product Brief** | `/bmad-product-brief` | Shapes the initial product idea into a structured brief |

#### **Key Output**

- Product Brief document defining the product vision, target users, and high-level goals

---

### **3.2 — Phase 2: Planning (📋 PM)**

**Agent:** John (📋 PM) · **Required:** Yes

This phase transforms the product idea into a detailed, stakeholder-aligned specification. The PRD is the single source of truth for all subsequent phases.

#### **Workflows**

| **Workflow** | **Command** | **Output** |
| --- | --- | --- |
| **Create PRD** | `/bmad-create-prd` | Produces a detailed Product Requirements Document |
| **Validate PRD** | `/bmad-validate-prd` | Checks PRD for completeness, clarity, and consistency |
| **UX Design** | `/bmad-create-ux-design` | Designs user experience patterns and flows |

#### **Key Outputs**

- PRD: comprehensive product requirements with user stories, acceptance criteria, and constraints
- UX Design: user flows, interaction patterns, and design specifications

---

### **3.3 — Phase 3: Solutioning (🏗️ Architect)**

**Agent:** Winston (🏗️ Architect) · **Required:** Yes

This phase translates requirements into a technical solution design and breaks the work into implementable units.

#### **Workflows**

| **Workflow** | **Command** | **Output** |
| --- | --- | --- |
| **Architecture Design** | `/bmad-create-architecture` | Creates architecture decision records (ADRs) |
| **Epics & Stories** | `/bmad-create-epics-and-stories` | Breaks requirements into epics and user stories |
| **Implementation Readiness Check** | `/bmad-check-implementation-readiness` | Validates PRD/UX/Architecture alignment |

#### **Key Outputs**

- Architecture documents with technical decisions, system design, and data models
- Epic and story breakdown ready for sprint planning
- Readiness report confirming all artifacts align

---

### **3.4 — Phase 4: Implementation (💻 Dev + 🏃 SM)**

**Agents:** Bob (🏃 Scrum Master) + Amelia (💻 Developer) · **Required:** Yes

This phase executes the implementation plan through structured sprints, with built-in quality gates and review cycles.

#### **Workflows**

| **Workflow** | **Command** | **Output** |
| --- | --- | --- |
| **Sprint Planning** | `/bmad-sprint-planning` | Creates sprint plan and status tracking |
| **Story Development** | `/bmad-dev-story` | Implements individual stories with tests |
| **Code Review** | `/bmad-code-review` | Adversarial code review to find issues |
| **QA Automation** | `/bmad-qa-generate-e2e-tests` | Generates end-to-end automated tests |
| **Retrospective** | `/bmad-retrospective` | Post-sprint review extracting lessons learned |

#### **Key Outputs**

- Sprint tracking documents
- Implemented and tested code for each story
- Code review findings and resolutions
- E2E test suites
- Retrospective learnings for continuous improvement

---

> The full flow has 18+ steps. For smaller work, there's a better path.
> 

---

## 04 — Quick flow

 **Quick Flow — The Lean Path**

### **Skip the Ceremony, Go Straight to Code**

Quick Flow is the **lightweight path** in BMAD for small, well-scoped changes where you already know *what* to build and just need the *how*.

---

### **When to Use Quick Flow**

- Adding a feature to an **established brownfield codebase**
- The "what" is already clear — you just need the "how"
- **Small, well-scoped change** (a few files, a few days of work)
- You want to skip product planning and go straight to implementation context

---

### **What Quick Flow Compresses**

Quick Flow replaces the full flow's **3 phases** (Analysis + Planning + Solutioning) with **4 focused steps** handled by one agent.

| **Full Flow** | **Quick Flow** |
| --- | --- |
| 18+ steps, 3+ agents | 4 steps, 1 agent |
| Brief → PRD → Architecture → Epics | Understand → Investigate → Generate → Review |
| Multiple output files | 1 file: `tech-spec-{slug}.md` |

---

> Quick Flow asks: *"**What code needs to change, and exactly how?"***  <br> Full Flow asks: "**What product should we build, for whom, and why?**"
>


---

### **Quick Flow = Three Workflows**

```
Quick Spec (QS)  →  tech-spec-{slug}.md  →  Quick Dev (QD)  →  Adversarial Review  →  Shipped Code
```

| **Workflow** | **Command** | **What it does** |
| --- | --- | --- |
| **Quick Spec** | `/bmad-bmm-quick-spec` | Turns a feature idea into an implementation-ready spec |
| **Quick Dev** | `/bmad-bmm-quick-dev` | Implements the spec end-to-end with tests and built-in code review |
| **Adversarial Review** | `/bmad-review-adversarial-general` | Cynical critique of spec or code to surface weaknesses before finalizing |

Both QS and QD are handled by a **single agent**: Barry (🚀 Quick Flow Solo Dev)

> Use `/bmad-help` at any point to ask what to do next or get unstuck.
> 

---

## 05 — Quick spec

### **From Feature Idea to Implementation-Ready Spec**

**Command:** `/bmad-bmm-quick-spec` **Output:** `tech-spec-{slug}.md`

Quick Spec turns a feature idea into a **self-contained specification** that a dev agent can implement without any additional context.

---

### **The 4-Step Flow**

```
Step 1: Understand  →  Step 2: Investigate  →  Step 3: Generate  →  Step 4: Review & Finalize
```

---

### **Step 1 — Understand**

**Goal:** Define the requirement delta — what needs to change and why.

- Quick orient scan (< 30 seconds) — skims planning docs and existing code
- Asks **informed questions** grounded in what was found (not generic questions)
- Captures: Title, Slug, Problem Statement, Solution, In-Scope, Out-of-Scope
- Creates `tech-spec-wip.md`
- **Checkpoint:** `[A]` Advanced Elicitation / `[P]` Party Mode / `[C]` Continue

---

### **Step 2 — Investigate**

**Goal:** Map technical constraints and anchor points in the codebase.

- Deep-reads relevant files and directories
- Identifies: tech stack, files to modify/create, code patterns, test patterns
- If no relevant code exists: documents "Clean Slate" and identifies target directories
- Confirms all findings with the user
- **Checkpoint:** `[A]` / `[P]` / `[C]` Continue

---

### **Step 3 — Generate**

**Goal:** Produce the implementation plan from the technical mapping.

- Ordered task list — each task has an exact file path and action, dependency-first
- Acceptance Criteria in **Given/When/Then** format covering happy path + edge cases
- Dependencies, testing strategy (unit + integration + manual), notes and risks
- Automatically proceeds to Step 4

---

### **Step 4 — Review & Finalize**

**Goal:** Iterate until the spec meets the "Ready for Development" standard.

- Presents full spec: task count, AC count, files affected
- Review menu: `[E]` Edit / `[Q]` Questions / `[A]` Advanced Elicitation / `[R]` Adversarial Review / `[C]` Approve
- On approval: renames `tech-spec-wip.md` → `tech-spec-{slug}.md`
- Recommends running implementation in a **fresh context window**

---

### **"Ready for Development" Standard**

| **Criterion** | **What It Means** |
| --- | --- |
| **Actionable** | Every task has a specific file path and explicit action |
| **Logical** | Tasks ordered by dependency — lowest level first |
| **Testable** | All ACs use Given/When/Then covering happy path + edge cases |
| **Complete** | All investigation findings inlined — no placeholders or TBD |
| **Self-Contained** | A fresh agent can implement without reading conversation history |

---

## 06 — Quick spec vs Claude plan mode

### **Two Ways to Plan — Very Different Results**

Both produce a plan before touching code. But they serve different purposes.

---

### **Side-by-Side Comparison**

| **Dimension** | **Quick Spec** | **Claude Plan (`/plan`)** |
| --- | --- | --- |
| **Output** | Persistent spec file saved to disk | Ephemeral — lives only in the conversation |
| **Code investigation** | Dedicated step that deep-reads relevant files | Ad-hoc — depends on what you ask |
| **Discovery process** | Step-by-step with checkpoints and informed questions | Single pass, can miss edge cases |
| **Fresh-agent ready** | Self-contained — a new agent can implement without conversation history | Tied to the current context window |
| **Handoff** | Hands off cleanly to Quick Dev via `tech-spec-{slug}.md` | Cannot be handed off cleanly |
| **Adversarial review** | Built-in `[R]` option before committing to implementation | Not available |
| **Resume support** | Detects WIP file and offers to resume | Starts from scratch each time |

---

### **When to Use Quick Spec**

- You want a **durable, persistent artifact** saved to disk
- A **second agent** will implement the feature (different session)
- The feature touches existing code that needs **investigation first**
- You want **checkpoints** to review and adjust before implementation begins

---

### **When to Use Claude Plan**

- The change is **small enough to implement immediately** in the same context window
- **No handoff** is needed — you'll implement it yourself, right now
- The feature is trivial and you don't need enforced quality gates

---

> Quick Spec shines for brownfield work where you need to understand what exists before deciding what to change.
> 

---

## 07 — Quick dev

### **Autonomous Implementation from Spec to Shipped Code**

**Command:** `/bmad-bmm-quick-dev`

Quick Dev executes implementation tasks autonomously — either from a Quick Spec file or from direct instructions. It ships code, writes tests, and runs a built-in adversarial code review before handing back to you.

---

#### **Two Execution Modes**

| **Mode** | **When** | **Path** |
| --- | --- | --- |
| **Mode A: Tech-Spec** | You provide `tech-spec-{slug}.md` | Skips context gathering, goes straight to execution |
| **Mode B: Direct** | You describe the task in plain text | Gathers context first, builds a plan, then executes |

**Mode A is the recommended path** — run Quick Spec first, then hand the spec to Quick Dev in a fresh context.

---

### **The 6-Step Flow (Mode A)**

```
Step 1: Mode Detection
  └─ Step 3: Execute (autonomous, no stops between tasks)
        └─ Step 4: Self-Check
              └─ Step 5: Adversarial Code Review
                    └─ Step 6: Resolve Findings → Done
```

---

### **Step 3 — Execute**

Implements all tasks **autonomously without stopping** between them.

For each task:

1. Read relevant files and review patterns
2. Write code following existing conventions
3. Write tests and run them; fix failures before continuing
4. Mark task complete, move to next immediately

Only halts when truly blocked (3 consecutive failures, unresolvable ambiguity).

---

### **Step 5 — Adversarial Code Review**

- Builds a full diff of all changes via `git diff {baseline_commit}`
- Runs the adversarial review task on the entire diff
- Findings ordered by severity: Critical → High → Medium → Low
- Zero findings is treated as **suspicious** — re-analyzes before accepting

---

### **Step 6 — Resolve Findings**

| **Option** | **Action** |
| --- | --- |
| `[W]` Walk through | Discuss each finding one by one |
| `[F]` Fix automatically | Auto-fix all real findings, skip noise |
| `[S]` Skip | Acknowledge and proceed without changes |

---

### **The Recommended Full Quick Flow**

```
Fresh session 1: /bmad-bmm-quick-spec  →  tech-spec-{slug}.md

Fresh session 2: /bmad-bmm-quick-dev tech-spec-{slug}.md  →  Shipped code
```

---

## 08 — Review workflow

**Adversarial Review**

### **Cynical Critique Before You Ship**

**Command:** `/bmad-review-adversarial-general`

The adversarial review is a structured critique workflow that finds weaknesses, gaps, and risks in a spec or implemented code — before they become bugs or rework.

---

### **When to Run It**

| **Stage** | **What gets reviewed** | **Triggered by** |
| --- | --- | --- |
| **After Quick Spec** | The `tech-spec-{slug}.md` spec file | Step 4 review menu → `[R]` |
| **After Quick Dev** | The full git diff of all changes | Step 5 (built-in, runs automatically) |
| **Standalone** | Any spec, doc, or code diff | `/bmad-review-adversarial-general` |

---

### **What It Does**

- Takes the spec or diff as input
- Reviews it from an adversarial (cynical, skeptical) perspective
- Surfaces: missing edge cases, ambiguous requirements, risky assumptions, broken logic
- Orders findings by severity: **Critical → High → Medium → Low**
- Labels each: ID, Severity, Validity, Description

> Zero findings is treated as **suspicious** — the reviewer re-analyzes rather than accepting a clean result.
> 

---

### **Resolving Findings (in Quick Dev Step 6)**

| **Option** | **Action** |
| --- | --- |
| `[W]` Walk through | Discuss each finding one by one — fix / skip / discuss |
| `[F]` Fix automatically | Auto-fix all "real" findings, skip noise |
| `[S]` Skip | Acknowledge findings and proceed without changes |

---

### **Recommended Review Strategy**

- Run adversarial review **on the spec** before handing to Quick Dev
- Quick Dev runs adversarial review **on the code diff** automatically in Step 5
- For validation workflows, consider using a **different high-quality LLM** for better information asymmetry

---

### **Related Help**

```
/bmad-help          — ask what to do next at any stage
/bmad-party-mode    — invite all agents to critique the current state together
```

---

## 09 — Notes & Tips

 **Lessons from the Field**

---

### **Run Each Step in a Fresh Context Window**

BMAD communicates via files — not conversation memory. Each workflow step is designed to be **self-contained**.

- Quick Spec in session 1 → saves `tech-spec-{slug}.md`
- Quick Dev in session 2 → loads the spec file fresh

> Mixing steps in the same long conversation leads to context bloat and degraded agent quality.
> 

---

### **Generate Project Context First**

Before starting any Quick Flow work:

```
/bmad-bmm-generate-project-context
```

This one step prevents the most common source of wasted back-and-forth — agents asking questions your codebase already answers.

---

### **Spec Maintenance: Archive After Each Sprint**

BMAD does not auto-archive completed specs. You must manually move or archive files after completing a sprint.

> Consider creating a simple skill or convention to handle this, or archive manually at sprint close.
> 

---

### **Use `/bmad-help` When Stuck**

```
/bmad-help
```

At any point in any workflow, ask the BMAD help system what to do next. It analyzes your current state, detects which phase you're in, and recommends the right next step.

---

### **Quick Reference: Core Commands**

| **Task** | **Command** |
| --- | --- |
| Get help | `/bmad-help` |
| Generate project context | `/bmad-bmm-generate-project-context` |
| Start Quick Flow (both QS + QD) | `/bmad-agent-bmm-quick-flow-solo-dev` |
| Quick Spec only | `/bmad-bmm-quick-spec` |
| Quick Dev only | `/bmad-bmm-quick-dev` |
| Code review | `/bmad-bmm-code-review` |

---

**Working with Multiple Repositories/Microservices**

An efficient approach is to consolidate multiple repositories into a single workspace using Git submodules, then document the functionality of each repository. This helps Claude understand the system structure and collaborate more effectively, similar to how a development team works across multiple services.

### **Further Reading**

- BMAD Docs: [https://docs.bmad-method.org/how-to/customize-bmad/](https://docs.bmad-method.org/how-to/customize-bmad/)
- Github: [https://github.com/bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD)