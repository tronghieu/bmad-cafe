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
- AI-generated images should be used sparingly. Only hero or concept-heavy slides should get bespoke visuals; most slides should rely on typography, diagrams, screenshots, or real artifacts.
- In this deck, an image is **supporting atmosphere or metaphor**, not the carrier of the full argument. Every slide still needs explicit copy, proof, and structure.

---

## Visual Asset Strategy

### Core Rule

- A custom image should **support** the slide, not replace it.
- The image should provide mood, metaphor, or visual texture while the actual message stays in text, diagrams, metrics, or artifacts.
- Prompts should avoid trying to encode the entire slide meaning into one image.
- For hero images, prefer compositions with **clear negative space** for headline, subhead, and proof overlays.
- Avoid putting pseudo-infographics, fake UI, or embedded labels into the generated image. Those should be added in the presentation itself.

### Slides That Merit Custom AI Images

- Slide 1 — **Cold Open**
- Slide 2 — **The 3-Day Miracle**
- Slide 7 — **The Shift**
- Slide 11 — **Meet the Core Team**
- Slide 15 — **Artifact Flow**
- Slide 16 — **Context Engineering**
- Slide 17 — **C.O.R.E. Engine**
- Slide 19 — **Quality: 4 Layers of Protection**
- Slide 24 — **The Pattern: ROI for Outsourcing**

### Slides That Should Prefer Non-AI Visuals

- Use **typography-first layouts** for slides 3, 10, 27.
- Use **tables, contrasts, and concise diagrams** for slides 5, 6, 9, 13, 14, 18, 25.
- Use **real artifacts, code excerpts, file trees, QA evidence, and screenshots** for slides 4, 8, 12, 20, 21, 22, 23, 26.

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
- **Image Direction:** Background mood image only. The accusation and takeaway must still come from slide copy.
- **AI Image Prompt:** `A dark cinematic developer workspace with one laptop showing messy, chaotic source code, moody lighting, high contrast, realistic but restrained detail, generous negative space for headline overlay, no readable text, no logos, 16:9`

### Slide 2 — The 3-Day Miracle
- **Goal:** Prove that the alternative is not "slow and bureaucratic"; it can also be fast.
- **Takeaway:** Structure is what makes AI speed usable.
- **Supporting Detail:** Introduce FoodInsight as a case where AI agents handled much of the mechanical work while humans directed and validated.
- **Proof / Evidence:** Case-specific numbers only: 29 stories, ~5000 LOC, ~20 human hours, ~3 days, edge AI system with Raspberry Pi and YOLO11.
- **Speaker Angle:** Impressive, but disciplined. Avoid implying BMAD always produces this speed.
- **Image Direction:** Use the image as a dramatic backdrop; the concrete metrics should remain separate as typography or stats blocks.
- **AI Image Prompt:** `A sleek cinematic technology backdrop suggesting acceleration and compression of software delivery, subtle motion lines, engineering atmosphere, abstract timeline energy, generous negative space for metrics overlay, no readable text, 16:9`

### Slide 3 — Roadmap + "You Won't Lose Your Job"
- **Goal:** Remove fear so the audience can listen rationally.
- **Takeaway:** BMAD changes the developer role upward, not outward.
- **Supporting Detail:** State that humans still define scope, architecture, constraints, approval, and quality judgment.
- **Proof / Evidence:** Link back to BMAD's human-amplification philosophy from the notebook.
- **Speaker Angle:** Calm, direct, not defensive.
- **Preferred Visual Source:** Typography-first roadmap, chapter navigation, and one strong framing statement about the developer's evolving role.

### Slide 4 — Vibe Coding: The Reality
- **Goal:** Make the failure mode concrete.
- **Takeaway:** Vibe coding is great for demos, dangerous as a default delivery method.
- **Supporting Detail:** Narrate the arc: first prompt works, second prompt patches, tenth prompt corrupts the system.
- **Proof / Evidence:** Show one example of iterative patching producing inconsistent code or broken assumptions.
- **Speaker Angle:** Honest, not dismissive. Respect why developers do it.
- **Preferred Visual Source:** Use a real or reconstructed sequence of chat snippets, code diffs, and resulting mess rather than a synthetic hero image.

### Slide 5 — 3 Project Killers
- **Goal:** Name the core BMAD problem set.
- **Takeaway:** Context drift, hallucination debt, and missing architecture are not random bugs; they are structural failure modes.
- **Supporting Detail:** Give one sentence and one recognizable symptom for each.
- **Proof / Evidence:** Context drift = ignored earlier constraint, hallucination debt = fabricated dependency or logic, no architecture = every fix collides with another part.
- **Speaker Angle:** Diagnostic, like naming a disease before treatment.
- **Preferred Visual Source:** A simple three-column comparison or domino diagram built natively in the presentation.

### Slide 6 — The Real Cost for Outsourcing
- **Goal:** Tie BMAD to business pain, not just engineering aesthetics.
- **Takeaway:** Poor AI discipline destroys margins and trust in outsourcing.
- **Supporting Detail:** Rework kills estimates, undocumented AI code slows onboarding, unstable output damages client confidence.
- **Proof / Evidence:** Use common outsourcing pain points rather than overclaiming precise percentages unless sourced.
- **Speaker Angle:** Commercial and operational.
- **Preferred Visual Source:** KPI-style cost framing, icons, and short evidence statements are stronger than a generic business illustration.

### Slide 7 — The Shift
- **Goal:** Introduce BMAD as a change in operating model.
- **Takeaway:** The shift is from prompting a chatbot to orchestrating an engineered workflow.
- **Supporting Detail:** Show the contrast between ephemeral chat history and durable artifacts.
- **Proof / Evidence:** Contrast table: improvisational, black-box, drifting context versus structured, versioned, auditable.
- **Speaker Angle:** Crisp reframing.
- **Image Direction:** The image should only reinforce the contrast. The actual comparison must still be shown with labels or a table on top.
- **AI Image Prompt:** `A split-scene editorial technology background, one side loose and chaotic, the other side orderly and structured, clean premium composition with strong contrast and clear negative space for overlay text, no readable text, 16:9`

### Slide 8 — BMAD Overview
- **Goal:** Give the audience a stable one-sentence definition.
- **Takeaway:** BMAD is a structured, agile-aligned method for building software with AI through artifacts, agents, and guardrails.
- **Supporting Detail:** Mention open-source nature, but keep the definition focused on the method.
- **Proof / Evidence:** Prefer the NotebookLM infographic or a simple diagram over too much copy.
- **Speaker Angle:** Foundational and precise.
- **Preferred Visual Source:** Use the existing NotebookLM infographic or a custom diagram derived from it.

### Slide 9 — 5 Pillars
- **Goal:** Give the audience a mental model they can remember.
- **Takeaway:** BMAD rests on five mutually reinforcing ideas, not one magic trick.
- **Supporting Detail:** Pillars should be explained as: specialized agents, lifecycle discipline, artifact contracts, context engineering, and reflection plus governance.
- **Proof / Evidence:** Each pillar gets one short line and one practical consequence.
- **Speaker Angle:** Structural and memorable.
- **Preferred Visual Source:** A native five-pillar diagram or five-card system is preferable to an AI-generated metaphor.

### Slide 10 — Zoom-in Preview
- **Goal:** Reset attention before the deep dive.
- **Takeaway:** The rest of the talk will answer who works, how it works, and why it matters.
- **Supporting Detail:** Use this as a transition, not as a content-heavy slide.
- **Proof / Evidence:** No evidence needed; this is a framing slide.
- **Speaker Angle:** Brief and directional.
- **Preferred Visual Source:** Use a minimal chapter preview with text and simple symbols only.

### Slide 11 — Meet the Core Team
- **Goal:** Make BMAD feel like a real delivery team, not abstract terminology.
- **Takeaway:** BMAD assigns narrow roles so each agent can work with sharper context and clearer responsibility.
- **Supporting Detail:** Show each core role and its main artifact or decision area.
- **Proof / Evidence:** Mary -> Brief, John -> PRD, Winston -> Architecture, Sarah/PO -> alignment and sharding, Bob -> stories, Amelia -> code, Quinn -> QA.
- **Speaker Angle:** Practical and human.
- **Image Direction:** Use the image as a team panorama behind role labels or cards. The roles and artifacts should still be rendered as editable deck content.
- **AI Image Prompt:** `A panoramic enterprise illustration of a coordinated software delivery team with seven distinct specialist archetypes, visually cohesive, calm and credible, arranged to leave room for role labels and captions, no readable text, 16:9`

### Slide 12 — Planning -> Execution
- **Goal:** Show that BMAD moves through artifacts, not hand-wavy memory.
- **Takeaway:** Every downstream action is grounded in an upstream artifact.
- **Supporting Detail:** Walk the chain from project brief to PRD to architecture to story to code to QA.
- **Proof / Evidence:** Use file names and handoff verbs, not just agent names.
- **Speaker Angle:** Concrete and procedural.
- **Preferred Visual Source:** A native flow diagram with actual artifact names is better than an illustrative image.

### Slide 13 — Why Specialization Wins
- **Goal:** Justify the multi-agent design.
- **Takeaway:** One general AI session is broad but shallow; specialized agents are narrower but more reliable.
- **Supporting Detail:** Emphasize smaller context surface, clearer role contracts, and stronger reviewability.
- **Proof / Evidence:** Tie back to reduced hallucination and better artifact quality.
- **Speaker Angle:** Rational, not theatrical.
- **Preferred Visual Source:** Use a contrast table or split-frame comparison with role cards and responsibility boundaries.

### Slide 14 — 4-Phase Lifecycle
- **Goal:** Give the audience BMAD's primary operating sequence.
- **Takeaway:** BMAD moves from why to what to how to build-and-verify.
- **Supporting Detail:** Analysis creates strategic clarity, Planning creates requirement clarity, Solutioning creates technical clarity, Implementation turns one story at a time into validated output.
- **Proof / Evidence:** Use the exact phase names consistently.
- **Speaker Angle:** Clear and didactic.
- **Preferred Visual Source:** A clean native four-stage lifecycle diagram with explicit phase names.

### Slide 15 — Artifact Flow
- **Goal:** Show what BMAD actually produces before code.
- **Takeaway:** BMAD is an artifact engine as much as it is a coding method.
- **Supporting Detail:** Highlight that durable docs reduce ambiguity and give each agent a clean source of truth.
- **Proof / Evidence:** Mention brief, PRD, architecture, stories, tests, QA artifacts, and Git history.
- **Speaker Angle:** Operational and evidence-focused.
- **Image Direction:** Use the image as a soft conceptual backdrop only if needed; the actual artifact chain should be drawn natively as a diagram.
- **AI Image Prompt:** `A refined isometric background scene of documents and software artifacts moving through a clean pipeline, minimal and elegant, subdued enough to support overlaid labels and arrows, no readable text, 16:9`

### Slide 16 — Context Engineering
- **Goal:** Explain why BMAD agents stay more aligned than generic chat sessions.
- **Takeaway:** BMAD manages context deliberately instead of hoping the model remembers everything.
- **Supporting Detail:** Step-file architecture loads fresh, focused instructions; sharding helps when large documents become unreliable or too expensive.
- **Proof / Evidence:** Use the ideas of just-in-time loading and smaller context footprints. Avoid implying sharding is mandatory in every scenario.
- **Speaker Angle:** Technical, accurate, not hypey.
- **Image Direction:** The image should act as metaphor only. The actual explanation of step-files, sharding, and context loading must stay in deck text/diagram form.
- **AI Image Prompt:** `An elegant conceptual background of a large technical document separating into smaller modular units flowing toward focused implementation work, clean systems aesthetic, generous negative space for explanatory overlays, no readable text, 16:9`

### Slide 17 — C.O.R.E. Engine
- **Goal:** Explain the philosophical heart of BMAD.
- **Takeaway:** BMAD forces reflection, not just generation.
- **Supporting Detail:** Proposal, critique, and refinement happen before and during execution, guided by humans and specialized agents.
- **Proof / Evidence:** Anchor this as the antidote to first-thought bias.
- **Speaker Angle:** Conceptual but grounded.
- **Image Direction:** Use the image to create memory and atmosphere; the explicit `Proposal -> Critique -> Refinement` loop should still be built as deck typography or diagram.
- **AI Image Prompt:** `A premium abstract background suggesting recursive reflection and iterative improvement, circular motion, intelligent systems atmosphere, elegant glow, open composition for overlay labels, no readable text, 16:9`

### Slide 18 — Advanced Toolkit
- **Goal:** Expand the audience's sense of BMAD without losing the main thread.
- **Takeaway:** BMAD has advanced capabilities, but they sit on top of the core method.
- **Supporting Detail:** Advanced Elicitation sharpens thinking, Party Mode enables multi-agent discussion, Expansion Packs add domain-specific teams, BMad Builder creates custom agents.
- **Proof / Evidence:** Present each as one sentence plus one use case.
- **Speaker Angle:** Exciting but contained.
- **Preferred Visual Source:** Use a modular feature map or icon grid rather than a generated illustration.

### Slide 19 — Quality: 4 Layers of Protection
- **Goal:** Show why BMAD output is more governable.
- **Takeaway:** BMAD does not rely on one final review; it layers protection across the workflow.
- **Supporting Detail:** Gates stop bad planning, adversarial review hunts for bugs, TDD validates behavior, traceability preserves evidence.
- **Proof / Evidence:** Use a simple example such as an adversarial review catching an XSS risk before merge.
- **Speaker Angle:** Serious, enterprise-ready.
- **Image Direction:** The image should communicate protection and trust, but the four layers themselves should still be explicitly named in the slide content.
- **AI Image Prompt:** `A sleek enterprise background image suggesting layered protection around a software system, clean concentric forms, trust and rigor, spacious composition for overlay labels and explanations, no readable text, 16:9`

### Slide 20 — A Dev's Day with BMAD
- **Goal:** Remove the feeling that BMAD is too heavy for real use.
- **Takeaway:** BMAD changes the work rhythm, but still feels like shipping software one story at a time.
- **Supporting Detail:** Morning story selection, focused context load, implementation, test pass, QA review, commit with evidence.
- **Proof / Evidence:** Show the loop as practical, not ceremonial.
- **Speaker Angle:** Grounded and reassuring.
- **Preferred Visual Source:** Use a day timeline with concrete actions, files, and review checkpoints.

### Slide 21 — Case 1: QuickBuy — How It Works
- **Goal:** Demonstrate BMAD as a delivery structure.
- **Takeaway:** BMAD's first proof is organizational clarity.
- **Supporting Detail:** Walk through the generated artifacts and the continuity from business brief to QA output.
- **Proof / Evidence:** Use screenshots or excerpts of actual artifacts if available.
- **Speaker Angle:** Concrete and demonstrative.
- **Preferred Visual Source:** Real BMAD artifacts, file snapshots, and excerpted QA evidence should drive this slide.

### Slide 22 — Case 2: FoodInsight — How Fast
- **Goal:** Demonstrate speed with credible scope.
- **Takeaway:** BMAD can compress delivery dramatically when the workflow is structured and the human role stays supervisory.
- **Supporting Detail:** Show the system scope: edge device, backend, and PWA. Stress that humans still provided oversight and judgment.
- **Proof / Evidence:** 29 stories, 98 story points, ~5000 LOC, ~20 human hours, ~3 days.
- **Speaker Angle:** Strong proof, carefully qualified.
- **Preferred Visual Source:** Prefer real project screenshots, architecture snippets, and metrics layout. Only use AI imagery if no real visual exists.

### Slide 23 — Case 3: Software Archaeology — How It Scales
- **Goal:** Show BMAD applies to messy brownfield work, not just greenfield demos.
- **Takeaway:** BMAD helps teams understand and restructure complex existing systems.
- **Supporting Detail:** Emphasize onboarding acceleration, faster system comprehension, and traceable modernization.
- **Proof / Evidence:** Use sourced numbers carefully and identify them as case-specific estimates where needed.
- **Speaker Angle:** Enterprise and architectural.
- **Preferred Visual Source:** Use system maps, dependency graphs, or real modernization artifacts rather than a synthetic hero visual.

### Slide 24 — The Pattern: ROI for Outsourcing
- **Goal:** Convert three stories into one business pattern.
- **Takeaway:** BMAD creates delivery speed with more evidence and less chaos.
- **Supporting Detail:** Translate results into outsourcing outcomes: more throughput, lower rework, easier onboarding, and better client trust.
- **Proof / Evidence:** Keep the language directional unless exact KPI baselines are available.
- **Speaker Angle:** Boardroom-ready.
- **Image Direction:** If used, the image should simply elevate the business tone. The actual ROI pattern should be communicated through text, stats, and a clear synthesis diagram.
- **AI Image Prompt:** `A polished enterprise editorial background evoking software delivery performance, trust, and strategic value, sophisticated boardroom-tech atmosphere, clean negative space for KPI and summary overlays, no readable text, 16:9`

### Slide 25 — Scale & Ecosystem
- **Goal:** Prevent the audience from assuming BMAD is always heavyweight.
- **Takeaway:** BMAD adapts its rigor to the size and risk of the work.
- **Supporting Detail:** Quick Flow for small changes, BMAD for product work, Enterprise for heavily governed systems; then show domain expansion through packs and builder tools.
- **Proof / Evidence:** Mention the scale-adaptive tracks and ecosystem examples.
- **Speaker Angle:** Flexible and pragmatic.
- **Preferred Visual Source:** Use a clean scale ladder or maturity model diagram built in the deck.

### Slide 26 — Get Started Now
- **Goal:** Convert curiosity into a safe first step.
- **Takeaway:** Start with one controlled pilot, not a company-wide proclamation.
- **Supporting Detail:** Install, choose track, create the first brief/spec, and run a small contained workflow.
- **Proof / Evidence:** Use the install command and starter resources, but frame adoption as an experiment with guardrails.
- **Speaker Angle:** Practical and low-friction.
- **Preferred Visual Source:** Use the actual install command, QR code, and starter path as the visual.

### Slide 27 — Closing
- **Goal:** End on a memorable principle, not a product pitch.
- **Takeaway:** The future belongs to teams that combine human judgment with disciplined AI systems.
- **Supporting Detail:** Reframe BMAD as the bridge from AI toys to AI tools.
- **Proof / Evidence:** No new evidence; this is synthesis and invitation.
- **Speaker Angle:** Confident, reflective, forward-looking.
- **Preferred Visual Source:** End with strong typography and a final principle, not a fresh image.

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
