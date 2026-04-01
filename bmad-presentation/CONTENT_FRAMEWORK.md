# BMAD Method: Agentic Engineering Presentation Framework

**Duration:** 60 - 80 Minutes (67 min content + Q&A)  
**Format:** Interactive Presentation Website  
**Audience:** Developers at a tech outsourcing company  
**Core Message:** BMAD does not replace developers. It upgrades them into AI orchestrators working with structure, artifacts, and guardrails.  
**Narrative Arc:** Hook -> Pain -> Overview -> Heroes -> Method -> Proof -> Action  
**Slides:** 27 (~2.5 min average per slide)

---

## Strategic Framing

- BMAD should be presented as a **spec-driven development method**, not as a bundle of prompts.
- The core contrast is **vibe coding vs agentic engineering**.
- The strongest BMAD themes are: specialized agents, artifact-driven workflow, context engineering, quality gates, and traceability.
- The role of the human should stay explicit throughout: humans set direction, approve tradeoffs, define guardrails, and verify outputs.
- Large productivity claims must be anchored to named case studies, not stated as universal guarantees.

---

## ACT 1: THE HOOK (~7 min, 3 slides)

**Theme:** *Shock, relevance, and immediate reframing*

| # | Slide Title | Updated Content | ~Time |
|---|---|---|---|
| 1 | **Cold Open** | Open on ugly AI-generated spaghetti code and the question: *"Who wrote this? ...You did. Three days ago."* The point is not that AI is bad. The point is that unstructured AI work creates code nobody wants to maintain. | 2 min |
| 2 | **The 3-Day Miracle** | Tease the FoodInsight case: 29 stories, ~5000 LOC, ~20 human hours, ~3 days. Frame it carefully: *"This is not autopilot. This is what happens when AI is given structure."* | 2.5 min |
| 3 | **Roadmap + "You Won't Lose Your Job"** | Show the 7-part journey and disarm fear early: *"BMAD does not turn developers into spectators. It turns them into orchestrators, reviewers, and system-level decision makers."* | 2.5 min |

---

## ACT 2: THE PROBLEM (~10 min, 4 slides)

**Theme:** *Why current AI coding breaks down in real software work*

| # | Slide Title | Updated Content | ~Time |
|---|---|---|---|
| 4 | **Vibe Coding: The Reality** | Tell the short story: day 1 looks magical, week 2 becomes patching, week 4 nobody trusts the code. Emphasize that vibe coding is great for prototypes, weak for maintainable systems. | 2.5 min |
| 5 | **3 Project Killers** | Define the three failure modes clearly: **Context Drift** = the AI forgets earlier constraints, **Hallucination Debt** = fake logic and bad assumptions accumulate, **No Architecture** = code grows without a durable blueprint. | 2.5 min |
| 6 | **The Real Cost for Outsourcing** | Translate the three killers into delivery pain: rework, bug-heavy handoff, slow onboarding, weak client trust, and expensive maintenance. | 2.5 min |
| 7 | **The Shift** | Reframe the discipline change: from talking to one general AI in a long chat, to orchestrating a team of specialized agents through artifacts and checkpoints. | 2.5 min |

---

## ACT 3: BMAD OVERVIEW (~8 min, 3 slides)

**Theme:** *What BMAD is before we zoom in*

| # | Slide Title | Updated Content | ~Time |
|---|---|---|---|
| 8 | **BMAD Overview** | Define BMAD as a structured method for agile AI-driven development that replaces black-box prompting with explicit artifacts, specialized roles, and versioned collaboration. | 3 min |
| 9 | **5 Pillars** | Introduce the five pillars as: **Specialized Agents**, **4-Phase Lifecycle**, **Artifact Contracts**, **Context Engineering**, and **Reflection + Governance** through C.O.R.E. and review gates. | 2.5 min |
| 10 | **Zoom-in Preview** | Set up the rest of the talk: *"We will look at the team, the workflow, the controls, and finally the proof that this works in practice."* | 2.5 min |

---

## ACT 4: THE WHO — Agent Team (~8 min, 3 slides)

**Theme:** *Meet the AI workforce and the artifact handoff chain*

| # | Slide Title | Updated Content | ~Time |
|---|---|---|---|
| 11 | **Meet the Core Team** | Present the delivery chain accurately: Mary (Analyst), John (PM), Winston (Architect), Sarah/PO, Bob (Scrum Master), Amelia (Developer), Quinn (QA). Mention the Orchestrator/BMad Master as a facilitation layer, not the main delivery artifact owner. | 2.5 min |
| 12 | **Planning -> Execution** | Show the artifact handoff: Brief -> PRD -> Architecture -> Sharded stories -> Code -> QA evidence. Emphasize that BMAD moves context through documents, not memory alone. | 3 min |
| 13 | **Why Specialization Wins** | Make the logic explicit: smaller scope per agent means tighter context, clearer responsibility, fewer hallucinations, and more reviewable output. | 2.5 min |

---

## ACT 5: THE HOW — Process + Advanced Power + Quality (~17 min, 7 slides)

**Theme:** *How BMAD actually works*

| # | Slide Title | Updated Content | ~Time |
|---|---|---|---|
| 14 | **4-Phase Lifecycle** | Explain the four phases as a sequence of questions: **Why** (Analysis), **What** (Planning), **How** (Solutioning), **Build and Verify** (Implementation). | 2 min |
| 15 | **Artifact Flow** | Expand the artifact chain into the real BMAD flow: `project-brief.md -> PRD.md -> architecture.md -> epic/story files -> code/tests/review artifacts`. | 2.5 min |
| 16 | **Context Engineering** | Explain BMAD's context strategy carefully: step-file architecture and focused artifact loading are the default discipline; document sharding is a key technique when large docs become unreliable or expensive to load. | 2.5 min |
| 17 | **C.O.R.E. Engine** | Present C.O.R.E. as the reflection loop behind BMAD: **Proposal -> Critique -> Refinement**. The value is not automation for its own sake, but forcing better thinking before and during execution. | 2.5 min |
| 18 | **Advanced Toolkit** | Frame advanced features as accelerators on top of the method: **Advanced Elicitation**, **Party Mode**, **Expansion Packs**, **BMad Builder**. Make it clear these extend BMAD; they do not replace the core workflow. | 2 min |
| 19 | **Quality: 4 Layers of Protection** | Teach the quality stack as a control system: **Readiness Gates**, **Adversarial Review**, **TDD and Continuous Validation**, **Traceability and Audit Trail**. | 3 min |
| 20 | **A Dev's Day with BMAD** | Bring it back to practice: pick one story, load focused context, implement within guardrails, run tests, receive QA review, commit evidence. BMAD embeds quality into the normal loop. | 2.5 min |

---

## ACT 6: THE PROOF (~10 min, 4 slides)

**Theme:** *Three kinds of proof: structure, speed, and scale*

| # | Slide Title | Updated Content | ~Time |
|---|---|---|---|
| 21 | **Case 1: QuickBuy — How It Works** | Use QuickBuy to answer: *"What does BMAD produce?"* Focus on the artifact chain and the clarity of handoff from planning to implementation. | 2.5 min |
| 22 | **Case 2: FoodInsight — How Fast** | Use FoodInsight to answer: *"How much can structured AI compress delivery?"* Anchor the case to its specifics: edge AI, Raspberry Pi, YOLO11, 29 stories, ~20 human hours, ~3 days. | 2.5 min |
| 23 | **Case 3: Software Archaeology — How It Scales** | Use Software Archaeology to answer: *"Can BMAD help with large, messy, existing systems?"* Emphasize legacy understanding, faster onboarding, and traceable modernization. | 2.5 min |
| 24 | **The Pattern: ROI for Outsourcing** | Synthesize the cases into outsourcing value: faster delivery, clearer artifacts, lower rework, better audits, easier onboarding, stronger client confidence. | 2.5 min |

---

## ACT 7: FUTURE + ECOSYSTEM + CTA (~7 min, 3 slides)

**Theme:** *How teams adopt BMAD without pretending everything is enterprise-scale*

| # | Slide Title | Updated Content | ~Time |
|---|---|---|---|
| 25 | **Scale & Ecosystem** | Show that BMAD is not one-size-fits-all: Quick Flow for small work, standard BMAD for product features, Enterprise for heavily governed systems. Then show extension through expansion packs and builder tools. | 2.5 min |
| 26 | **Get Started Now** | Keep the CTA operational: install, choose the right track, create the first brief/spec, and let the team see BMAD through one controlled pilot rather than a full rewrite. | 2 min |
| 27 | **Closing** | Land the talk with disciplined optimism: *"The future is not developers versus AI. It is disciplined humans leading structured AI systems."* | 2.5 min |

---

## Detailed Slide Content

### Slide 1 — Cold Open
- **Goal:** Make the audience feel the pain of uncontrolled AI coding in under 10 seconds.
- **Takeaway:** The problem is not AI-generated code. The problem is unstructured AI-generated code.
- **Supporting Detail:** Use a visually ugly code sample with inconsistent naming, duplicated logic, and obvious confusion. Do not explain BMAD yet.
- **Proof / Evidence:** If real code cannot be shown, use a synthetic example labeled internally as illustrative only.
- **Speaker Angle:** Slightly accusatory, then empathetic. The line should feel uncomfortably familiar, not insulting.
- **Image Direction:** Messy AI code filling the screen, visually hard to trust.
- **AI Image Prompt:** `A dark cinematic scene of a laptop screen filled with chaotic AI-generated source code, tangled logic, duplicated functions, warning symbols, high contrast, realistic developer workspace, no readable text, no logos, 16:9`

### Slide 2 — The 3-Day Miracle
- **Goal:** Prove that the alternative is not "slow and bureaucratic"; it can also be fast.
- **Takeaway:** Structure is what makes AI speed usable.
- **Supporting Detail:** Introduce FoodInsight as a case where AI agents handled much of the mechanical work while humans directed and validated.
- **Proof / Evidence:** Case-specific numbers only: 29 stories, ~5000 LOC, ~20 human hours, ~3 days, edge AI system with Raspberry Pi and YOLO11.
- **Speaker Angle:** Impressive, but disciplined. Avoid implying BMAD always produces this speed.
- **Image Direction:** A before/after or compressed timeline from conventional delivery to structured AI-led delivery.
- **AI Image Prompt:** `A split-screen transformation showing a long traditional software delivery timeline on one side and a compressed AI-orchestrated delivery flow on the other, modern engineering atmosphere, subtle hardware and code cues, no readable text, 16:9`

### Slide 3 — Roadmap + "You Won't Lose Your Job"
- **Goal:** Remove fear so the audience can listen rationally.
- **Takeaway:** BMAD changes the developer role upward, not outward.
- **Supporting Detail:** State that humans still define scope, architecture, constraints, approval, and quality judgment.
- **Proof / Evidence:** Link back to BMAD's human-amplification philosophy from the notebook.
- **Speaker Angle:** Calm, direct, not defensive.
- **Image Direction:** Minimal roadmap layout plus a strong line about the developer's new role.
- **AI Image Prompt:** `A premium editorial tech presentation scene showing a developer moving from coding alone to orchestrating a structured AI team, clean composition, optimistic but serious tone, no readable text, 16:9`

### Slide 4 — Vibe Coding: The Reality
- **Goal:** Make the failure mode concrete.
- **Takeaway:** Vibe coding is great for demos, dangerous as a default delivery method.
- **Supporting Detail:** Narrate the arc: first prompt works, second prompt patches, tenth prompt corrupts the system.
- **Proof / Evidence:** Show one example of iterative patching producing inconsistent code or broken assumptions.
- **Speaker Angle:** Honest, not dismissive. Respect why developers do it.
- **Image Direction:** A progression from clean excitement to growing chaos.
- **AI Image Prompt:** `A visual sequence of a developer chatting with an AI assistant as code evolves from clean prototype to unstable patchwork, increasing visual chaos across the frame, cinematic software engineering style, no readable text, 16:9`

### Slide 5 — 3 Project Killers
- **Goal:** Name the core BMAD problem set.
- **Takeaway:** Context drift, hallucination debt, and missing architecture are not random bugs; they are structural failure modes.
- **Supporting Detail:** Give one sentence and one recognizable symptom for each.
- **Proof / Evidence:** Context drift = ignored earlier constraint, hallucination debt = fabricated dependency or logic, no architecture = every fix collides with another part.
- **Speaker Angle:** Diagnostic, like naming a disease before treatment.
- **Image Direction:** Three collapsing forces or dominoes knocking each other over.
- **AI Image Prompt:** `An abstract enterprise illustration of three collapsing system risks represented as domino cascades: context drift, hallucination debt, and missing architecture, dramatic but clean, no readable text, 16:9`

### Slide 6 — The Real Cost for Outsourcing
- **Goal:** Tie BMAD to business pain, not just engineering aesthetics.
- **Takeaway:** Poor AI discipline destroys margins and trust in outsourcing.
- **Supporting Detail:** Rework kills estimates, undocumented AI code slows onboarding, unstable output damages client confidence.
- **Proof / Evidence:** Use common outsourcing pain points rather than overclaiming precise percentages unless sourced.
- **Speaker Angle:** Commercial and operational.
- **Image Direction:** Delivery pressure, bugs, and handoff friction affecting a client-facing team.
- **AI Image Prompt:** `A polished enterprise software delivery scene showing stressed developers, bug reports, delayed handoff, and a concerned client review meeting, trustworthy corporate style, no readable text, 16:9`

### Slide 7 — The Shift
- **Goal:** Introduce BMAD as a change in operating model.
- **Takeaway:** The shift is from prompting a chatbot to orchestrating an engineered workflow.
- **Supporting Detail:** Show the contrast between ephemeral chat history and durable artifacts.
- **Proof / Evidence:** Contrast table: improvisational, black-box, drifting context versus structured, versioned, auditable.
- **Speaker Angle:** Crisp reframing.
- **Image Direction:** Side-by-side contrast between casual AI chat and structured multi-agent workflow.
- **AI Image Prompt:** `A split composition contrasting informal chat-based coding on one side with a structured artifact-driven multi-agent engineering workflow on the other, premium tech editorial style, no readable text, 16:9`

### Slide 8 — BMAD Overview
- **Goal:** Give the audience a stable one-sentence definition.
- **Takeaway:** BMAD is a structured, agile-aligned method for building software with AI through artifacts, agents, and guardrails.
- **Supporting Detail:** Mention open-source nature, but keep the definition focused on the method.
- **Proof / Evidence:** Prefer the NotebookLM infographic or a simple diagram over too much copy.
- **Speaker Angle:** Foundational and precise.
- **Image Direction:** High-level visual overview of BMAD components.
- **AI Image Prompt:** `A clean high-level ecosystem diagram of a structured AI-driven software development method, showing agents, documents, review loops, and delivery flow, elegant enterprise infographic style, no readable text, 16:9`

### Slide 9 — 5 Pillars
- **Goal:** Give the audience a mental model they can remember.
- **Takeaway:** BMAD rests on five mutually reinforcing ideas, not one magic trick.
- **Supporting Detail:** Pillars should be explained as: specialized agents, lifecycle discipline, artifact contracts, context engineering, and reflection plus governance.
- **Proof / Evidence:** Each pillar gets one short line and one practical consequence.
- **Speaker Angle:** Structural and memorable.
- **Image Direction:** Five strong pillars or five connected modules supporting one system.
- **AI Image Prompt:** `A modern conceptual illustration of five connected pillars supporting an AI-native software engineering system, modular geometric composition, premium infographic feel, no readable text, 16:9`

### Slide 10 — Zoom-in Preview
- **Goal:** Reset attention before the deep dive.
- **Takeaway:** The rest of the talk will answer who works, how it works, and why it matters.
- **Supporting Detail:** Use this as a transition, not as a content-heavy slide.
- **Proof / Evidence:** No evidence needed; this is a framing slide.
- **Speaker Angle:** Brief and directional.
- **Image Direction:** Three-part preview: team, workflow, proof.
- **AI Image Prompt:** `A sleek editorial triptych composition hinting at team roles, process flow, and proof metrics, clean visual hierarchy, no readable text, 16:9`

### Slide 11 — Meet the Core Team
- **Goal:** Make BMAD feel like a real delivery team, not abstract terminology.
- **Takeaway:** BMAD assigns narrow roles so each agent can work with sharper context and clearer responsibility.
- **Supporting Detail:** Show each core role and its main artifact or decision area.
- **Proof / Evidence:** Mary -> Brief, John -> PRD, Winston -> Architecture, Sarah/PO -> alignment and sharding, Bob -> stories, Amelia -> code, Quinn -> QA.
- **Speaker Angle:** Practical and human.
- **Image Direction:** Team lineup with each role visually distinct.
- **AI Image Prompt:** `A panoramic illustration of seven specialized AI delivery roles working as one engineering team, each character distinct by function but visually cohesive, modern enterprise style, no readable text, 16:9`

### Slide 12 — Planning -> Execution
- **Goal:** Show that BMAD moves through artifacts, not hand-wavy memory.
- **Takeaway:** Every downstream action is grounded in an upstream artifact.
- **Supporting Detail:** Walk the chain from project brief to PRD to architecture to story to code to QA.
- **Proof / Evidence:** Use file names and handoff verbs, not just agent names.
- **Speaker Angle:** Concrete and procedural.
- **Image Direction:** A relay race of documents becoming implementation.
- **AI Image Prompt:** `An elegant systems flow showing documents passing from analysis to planning to architecture to stories to implementation and QA, glowing nodes and clean connective lines, no readable text, 16:9`

### Slide 13 — Why Specialization Wins
- **Goal:** Justify the multi-agent design.
- **Takeaway:** One general AI session is broad but shallow; specialized agents are narrower but more reliable.
- **Supporting Detail:** Emphasize smaller context surface, clearer role contracts, and stronger reviewability.
- **Proof / Evidence:** Tie back to reduced hallucination and better artifact quality.
- **Speaker Angle:** Rational, not theatrical.
- **Image Direction:** Compare one overloaded brain to a coordinated specialist team.
- **AI Image Prompt:** `A conceptual comparison between one overloaded general intelligence and a coordinated team of focused specialist intelligences, premium editorial technology illustration, no readable text, 16:9`

### Slide 14 — 4-Phase Lifecycle
- **Goal:** Give the audience BMAD's primary operating sequence.
- **Takeaway:** BMAD moves from why to what to how to build-and-verify.
- **Supporting Detail:** Analysis creates strategic clarity, Planning creates requirement clarity, Solutioning creates technical clarity, Implementation turns one story at a time into validated output.
- **Proof / Evidence:** Use the exact phase names consistently.
- **Speaker Angle:** Clear and didactic.
- **Image Direction:** A four-stage flow with strong directional movement.
- **AI Image Prompt:** `A polished four-stage workflow diagram for AI-driven product delivery, moving from analysis to planning to solutioning to implementation, modern enterprise design, no readable text, 16:9`

### Slide 15 — Artifact Flow
- **Goal:** Show what BMAD actually produces before code.
- **Takeaway:** BMAD is an artifact engine as much as it is a coding method.
- **Supporting Detail:** Highlight that durable docs reduce ambiguity and give each agent a clean source of truth.
- **Proof / Evidence:** Mention brief, PRD, architecture, stories, tests, QA artifacts, and Git history.
- **Speaker Angle:** Operational and evidence-focused.
- **Image Direction:** Documents flowing into code and QA evidence.
- **AI Image Prompt:** `An isometric pipeline of software planning documents transforming into implementation stories, tests, code, and QA evidence, sophisticated information design, no readable text, 16:9`

### Slide 16 — Context Engineering
- **Goal:** Explain why BMAD agents stay more aligned than generic chat sessions.
- **Takeaway:** BMAD manages context deliberately instead of hoping the model remembers everything.
- **Supporting Detail:** Step-file architecture loads fresh, focused instructions; sharding helps when large documents become unreliable or too expensive.
- **Proof / Evidence:** Use the ideas of just-in-time loading and smaller context footprints. Avoid implying sharding is mandatory in every scenario.
- **Speaker Angle:** Technical, accurate, not hypey.
- **Image Direction:** Large monolithic document broken into focused shards feeding exact tasks.
- **AI Image Prompt:** `A visual metaphor of a large software specification being intelligently split into precise modular context packets feeding implementation tasks, elegant systems aesthetic, no readable text, 16:9`

### Slide 17 — C.O.R.E. Engine
- **Goal:** Explain the philosophical heart of BMAD.
- **Takeaway:** BMAD forces reflection, not just generation.
- **Supporting Detail:** Proposal, critique, and refinement happen before and during execution, guided by humans and specialized agents.
- **Proof / Evidence:** Anchor this as the antidote to first-thought bias.
- **Speaker Angle:** Conceptual but grounded.
- **Image Direction:** A recursive loop that visibly improves an idea through each pass.
- **AI Image Prompt:** `A premium conceptual illustration of a recursive improvement loop moving through proposal, critique, and refinement, glowing circular flow, intelligent systems feel, no readable text, 16:9`

### Slide 18 — Advanced Toolkit
- **Goal:** Expand the audience's sense of BMAD without losing the main thread.
- **Takeaway:** BMAD has advanced capabilities, but they sit on top of the core method.
- **Supporting Detail:** Advanced Elicitation sharpens thinking, Party Mode enables multi-agent discussion, Expansion Packs add domain-specific teams, BMad Builder creates custom agents.
- **Proof / Evidence:** Present each as one sentence plus one use case.
- **Speaker Angle:** Exciting but contained.
- **Image Direction:** A modular toolbox or expandable ecosystem around the BMAD core.
- **AI Image Prompt:** `A futuristic modular toolkit orbiting a central AI engineering core, representing advanced reasoning, multi-agent collaboration, domain packs, and builder tools, polished enterprise illustration, no readable text, 16:9`

### Slide 19 — Quality: 4 Layers of Protection
- **Goal:** Show why BMAD output is more governable.
- **Takeaway:** BMAD does not rely on one final review; it layers protection across the workflow.
- **Supporting Detail:** Gates stop bad planning, adversarial review hunts for bugs, TDD validates behavior, traceability preserves evidence.
- **Proof / Evidence:** Use a simple example such as an adversarial review catching an XSS risk before merge.
- **Speaker Angle:** Serious, enterprise-ready.
- **Image Direction:** Concentric or layered protection around code and artifacts.
- **AI Image Prompt:** `A visual metaphor of four protective layers around a software system: planning gates, adversarial review, testing, and traceability, sleek enterprise security aesthetic, no readable text, 16:9`

### Slide 20 — A Dev's Day with BMAD
- **Goal:** Remove the feeling that BMAD is too heavy for real use.
- **Takeaway:** BMAD changes the work rhythm, but still feels like shipping software one story at a time.
- **Supporting Detail:** Morning story selection, focused context load, implementation, test pass, QA review, commit with evidence.
- **Proof / Evidence:** Show the loop as practical, not ceremonial.
- **Speaker Angle:** Grounded and reassuring.
- **Image Direction:** A day-in-the-life sequence across one engineer's workflow.
- **AI Image Prompt:** `A realistic day-in-the-life montage of a developer orchestrating AI-assisted story delivery through planning context, coding, testing, review, and commit, modern product engineering style, no readable text, 16:9`

### Slide 21 — Case 1: QuickBuy — How It Works
- **Goal:** Demonstrate BMAD as a delivery structure.
- **Takeaway:** BMAD's first proof is organizational clarity.
- **Supporting Detail:** Walk through the generated artifacts and the continuity from business brief to QA output.
- **Proof / Evidence:** Use screenshots or excerpts of actual artifacts if available.
- **Speaker Angle:** Concrete and demonstrative.
- **Image Direction:** A case-study board showing artifacts in sequence.
- **AI Image Prompt:** `A polished case-study composition showing an e-commerce project flowing from brief and PRD to architecture, stories, code, and QA review, board-like layout, no readable text, 16:9`

### Slide 22 — Case 2: FoodInsight — How Fast
- **Goal:** Demonstrate speed with credible scope.
- **Takeaway:** BMAD can compress delivery dramatically when the workflow is structured and the human role stays supervisory.
- **Supporting Detail:** Show the system scope: edge device, backend, and PWA. Stress that humans still provided oversight and judgment.
- **Proof / Evidence:** 29 stories, 98 story points, ~5000 LOC, ~20 human hours, ~3 days.
- **Speaker Angle:** Strong proof, carefully qualified.
- **Image Direction:** Edge AI food detection plus compressed delivery metrics.
- **AI Image Prompt:** `An enterprise-grade edge AI food monitoring scene with a smart camera, object detection overlays, and an adjacent compressed delivery timeline, modern technical visual, no readable text, 16:9`

### Slide 23 — Case 3: Software Archaeology — How It Scales
- **Goal:** Show BMAD applies to messy brownfield work, not just greenfield demos.
- **Takeaway:** BMAD helps teams understand and restructure complex existing systems.
- **Supporting Detail:** Emphasize onboarding acceleration, faster system comprehension, and traceable modernization.
- **Proof / Evidence:** Use sourced numbers carefully and identify them as case-specific estimates where needed.
- **Speaker Angle:** Enterprise and architectural.
- **Image Direction:** A tangled legacy system mapped into clear flows and knowledge layers.
- **AI Image Prompt:** `A sophisticated visualization of a chaotic legacy software system being mapped into clear architecture, dependencies, and traceable flows, modern systems-analysis style, no readable text, 16:9`

### Slide 24 — The Pattern: ROI for Outsourcing
- **Goal:** Convert three stories into one business pattern.
- **Takeaway:** BMAD creates delivery speed with more evidence and less chaos.
- **Supporting Detail:** Translate results into outsourcing outcomes: more throughput, lower rework, easier onboarding, and better client trust.
- **Proof / Evidence:** Keep the language directional unless exact KPI baselines are available.
- **Speaker Angle:** Boardroom-ready.
- **Image Direction:** A clean ROI board showing trust, speed, quality, and auditability.
- **AI Image Prompt:** `A premium enterprise data-story visual showing the combined business impact of faster delivery, cleaner handoff, auditability, and client trust, polished editorial dashboard style, no readable text, 16:9`

### Slide 25 — Scale & Ecosystem
- **Goal:** Prevent the audience from assuming BMAD is always heavyweight.
- **Takeaway:** BMAD adapts its rigor to the size and risk of the work.
- **Supporting Detail:** Quick Flow for small changes, BMAD for product work, Enterprise for heavily governed systems; then show domain expansion through packs and builder tools.
- **Proof / Evidence:** Mention the scale-adaptive tracks and ecosystem examples.
- **Speaker Angle:** Flexible and pragmatic.
- **Image Direction:** A ladder or continuum from quick fix to enterprise with ecosystem branches.
- **AI Image Prompt:** `A visual scale from lightweight software fixes to full enterprise engineering governance, with modular ecosystem branches for domain-specific teams, premium infographic style, no readable text, 16:9`

### Slide 26 — Get Started Now
- **Goal:** Convert curiosity into a safe first step.
- **Takeaway:** Start with one controlled pilot, not a company-wide proclamation.
- **Supporting Detail:** Install, choose track, create the first brief/spec, and run a small contained workflow.
- **Proof / Evidence:** Use the install command and starter resources, but frame adoption as an experiment with guardrails.
- **Speaker Angle:** Practical and low-friction.
- **Image Direction:** Terminal command, starter workflow, and onboarding momentum.
- **AI Image Prompt:** `A sleek terminal-inspired onboarding scene showing a software team beginning a structured AI workflow, subtle command-line cues, polished product atmosphere, no readable text, 16:9`

### Slide 27 — Closing
- **Goal:** End on a memorable principle, not a product pitch.
- **Takeaway:** The future belongs to teams that combine human judgment with disciplined AI systems.
- **Supporting Detail:** Reframe BMAD as the bridge from AI toys to AI tools.
- **Proof / Evidence:** No new evidence; this is synthesis and invitation.
- **Speaker Angle:** Confident, reflective, forward-looking.
- **Image Direction:** Calm, credible ending visual with human and AI aligned around delivery.
- **AI Image Prompt:** `A cinematic closing scene showing human developers and AI systems working in disciplined alignment toward a shared software delivery goal, elegant and optimistic, no readable text, 16:9`

---

## NotebookLM Assets Available

| Asset | Type | Recommended Use |
|---|---|---|
| BMAD Agentic Engineering | Slide deck (PDF) | Reference for previous BMAD framing and narrative beats |
| Phuong phap phan mem BMad | Infographic | Slide 8 overview |
| Phan tich BMAD trong Ky nguyen AI | Mind map | Broad BMAD structure and terminology |
| C.O.R.E: Trai Tim He Sinh Thai BMAD | Mind map | Slide 17 explanation |
| Quy trinh Phat trien voi BMAD | Mind map | Slide 15 artifact flow |
| Ky Nguyen BMAD: Quy Trinh Huong AI | Mind map | Slide 18 and Slide 25 ecosystem framing |

---

## Case Studies and Claim Discipline

| Claim Type | Recommendation |
|---|---|
| General value claim | Safe: BMAD improves structure, traceability, and reviewability |
| Speed claim | Anchor to named case studies only |
| Enterprise claim | Emphasize governance, evidence trail, and auditability, not magic autonomy |
| Human role claim | Always state that humans still direct, constrain, and verify |
| Sharding claim | Present as a key BMAD context technique, especially useful when docs become too large or tool/model reliability drops |

---

## Quality Assurance Framework (Slide 19 Deep Content)

| Layer | Mechanism | Presentation Message |
|---|---|---|
| **1. Readiness Gates** | Implementation readiness checks, role-specific checklists, story DoD | Bad planning should fail before code starts |
| **2. Adversarial Review** | Forced bug-finding review, edge-case hunting, cross-model critique | AI should not be allowed to praise itself unchallenged |
| **3. TDD + Continuous Validation** | Tests, regression checks, implementation verification | Behavior is verified continuously, not only at the end |
| **4. Traceability** | Versioned artifacts, guardrails, review evidence, merge-readiness packs | Clients and teams can trace decisions from requirement to code |

---

*Framework v0.6 — 27 slides, updated with BMAD-specific content detail and image prompts*  
*Revised using NotebookLM research on BMAD Method*
