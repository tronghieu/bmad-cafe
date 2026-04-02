# BMAD Method Presentation Framework

**Duration:** 60 - 80 Minutes (core talk + Q&A)  
**Format:** Interactive slide-by-slide presentation website  
**Audience:** Developers and technical teams exploring structured ways to build software with AI  
**Language:** Vietnamese presentation copy  
**Core Message:** BMAD does not replace developers. It gives software teams a more structured way to work with AI through roles, documents, checkpoints, and human review.  
**Narrative Arc:** Hook -> Problem -> Overview -> Heroes -> Method -> Proof -> Action  
**Implemented Deck Size:** 37 slides total

### Current Deck Structure

- 1 opening title slide
- 7 section divider slides
- 27 core content slides
- 1 Q&A slide
- 1 thank-you slide

---

## Strategic Framing

- BMAD should be presented as a **structured development method**, not as a bundle of prompts.
- The core contrast is **vibe coding vs context engineering**.
- The strongest BMAD themes are: specialized agents, workflow dựa trên artifact, context engineering, quality gates, and traceability.
- The role of the human should stay explicit throughout: humans set direction, approve tradeoffs, define guardrails, and verify outputs.
- Large productivity claims must be anchored to named case studies, not stated as universal guarantees.
- AI-generated images should be used sparingly. Only hero or concept-heavy slides should get bespoke visuals; most slides should rely on typography, diagrams, screenshots, or real artifacts.
- In this deck, an image is **supporting atmosphere or metaphor**, not the carrier of the full argument. Every slide still needs explicit copy, proof, and structure.
- The implemented copy should stay **technical, precise, and low-hype**. Avoid slogans, magic-language, or marketing tone.

---

## Implementation Alignment Review

### What Stayed Aligned

- The implemented deck still follows the same 7-act narrative arc from the original framework.
- The 27 core slides still cover the same BMAD concepts: problem framing, BMAD overview, agent roles, artifact handoff, context engineering, C.O.R.E., quality layers, case studies, and adoption path.
- The same 9 slides still use bespoke supporting AI-generated visuals.
- The implementation keeps the rule that images are supporting visuals, not the main carrier of meaning.

### What Changed During Implementation

- The rendered deck now includes **extra structural slides**: one opening title slide, seven section-divider slides, plus Q&A and thank-you closing slides.
- Slide copy was rewritten in **Vietnamese** and adjusted to be less theatrical and more engineering-oriented.
- Several slide titles were renamed for clarity in presentation mode.
- Asset filenames were changed from numeric order to **descriptive kebab-case names**.
- The live deck is now the source of truth for phrasing tone; it is more restrained than this original framework draft.

### Main Content Deltas to Keep in Mind

- The framework draft uses more English and more “keynote language”; the implementation uses more operational Vietnamese and less hype.
- The original draft says BMAD should be framed as **spec-driven development**; the implementation softened that into **a structured way of working with AI through roles, documents, and checkpoints**.
- The case-study framing in the implementation is more conservative: speed claims are still present, but the copy now emphasizes scope, control, traceability, and engineering discipline.
- The closing message in the implementation is less manifesto-like and more practical: AI is useful when placed inside a structured process with human responsibility.

---

## Visual Asset Strategy

### Core Rule

- A custom image should **support** the slide, not replace it.
- The image should provide mood, metaphor, or visual texture while the actual message stays in text, diagrams, metrics, or artifacts.
- Prompts should avoid trying to encode the entire slide meaning into one image.
- Prefer **square compositions (1:1)** for generated images so they can be reused flexibly across different slide layouts.
- For hero images, prefer compositions with **clear negative space** for headline, subhead, and proof overlays.
- Avoid putting pseudo-infographics, fake UI, or embedded labels into the generated image. Those should be added in the presentation itself.

### Slides That Merit Custom AI Images

- Slide 1 — **Cú Mở Đầu** -> `cold-open-code-chaos.png`
- Slide 2 — **Ba Ngày** -> `foodinsight-delivery-speed.png`
- Slide 7 — **Sự Chuyển Dịch** -> `prompting-to-orchestration-shift.png`
- Slide 11 — **Đội Hình Cốt Lõi** -> `core-agent-team.png`
- Slide 15 — **Dòng Chảy Tài Liệu** -> `artifact-flow-pipeline.png`
- Slide 16 — **Kỹ Thuật Tổ Chức Ngữ Cảnh** -> `context-engineering-shards.png`
- Slide 17 — **Vòng Lặp C.O.R.E.** -> `core-reflection-loop.png`
- Slide 19 — **Chất Lượng: 4 Lớp Phòng Thủ** -> `quality-layered-defense.png`
- Slide 24 — **Mẫu Số Chung** -> `outsourcing-roi-pattern.png`

### Slides That Should Prefer Non-AI Visuals

- Use **typography-first layouts** for slides 3, 10, 27.
- Use **tables, contrasts, and concise diagrams** for slides 5, 6, 9, 13, 14, 18, 25.
- Use **real artifacts, code excerpts, file trees, QA evidence, and screenshots** for slides 4, 8, 12, 20, 21, 22, 23, 26.

---

## Implemented Slide List

### Structural Slides

| Render Order | Slide | Purpose |
|---|---|---|
| 1 | **BMAD Method** | Opening title slide |
| 2 | **Mở Bài** | Section divider |
| 6 | **Vấn Đề** | Section divider |
| 11 | **Tổng Quan** | Section divider |
| 15 | **Đội Hình** | Section divider |
| 19 | **Phương Pháp** | Section divider |
| 27 | **Minh Chứng** | Section divider |
| 32 | **Hành Động** | Section divider |
| 36 | **Hỏi & Đáp** | Q&A slide |
| 37 | **Cảm ơn** | Final thank-you slide |

---

## ACT 1: VIBE CODING VÀ ĐIỂM GÃY (~7 min, 3 core slides)

**Theme:** *Vì sao vibe coding hấp dẫn lúc đầu nhưng dễ mất kiểm soát khi scope tăng*

| # | Slide Title | Updated Content | ~Time |
|---|---|---|---|
| 1 | **Cú Mở Đầu** | Frame the problem as uncontrolled AI-generated code: the issue is not AI itself, but lack of structure, reviewability, and maintenance discipline. | 2 min |
| 2 | **Vì Sao Vibe Coding Hấp Dẫn** | Acknowledge the strengths fairly: fast start, low setup, short feedback loops, and strong fit for prototypes, experiments, and small tasks. | 2.5 min |
| 3 | **Điểm Gãy Của Vibe Coding** | Show where it stops scaling: chat history becomes unreliable, patching accumulates, control effort rises, and the work leaves few durable artifacts behind. | 2.5 min |

---

## ACT 2: VIBE CODING VS CONTEXT ENGINEERING (~10 min, 4 core slides)

**Theme:** *Two operating models for working with AI in software delivery*

| # | Slide Title | Updated Content | ~Time |
|---|---|---|---|
| 4 | **Vibe Coding Là Gì** | Define vibe coding neutrally as rapid AI-assisted coding driven by continuous conversation and low upfront structure. | 2.5 min |
| 5 | **Context Engineering Là Gì** | Define context engineering as organizing the right context, at the right time, for the right scope through artifact, roles, and controlled steps. | 2.5 min |
| 6 | **So Sánh Tổng Quan** | Compare the two models across source of context, decision memory, task boundaries, review style, and repeatability. | 2.5 min |
| 7 | **Khi Nào Mỗi Cách Phù Hợp** | Show that vibe coding is useful for quick exploration, while context engineering is stronger when work needs stability, coordination, and reviewability. | 2.5 min |

---

## ACT 3: BMAD OVERVIEW (~8 min, 3 core slides)

**Theme:** *What BMAD is before we zoom in*

| # | Slide Title | Updated Content | ~Time |
|---|---|---|---|
| 8 | **Tổng Quan Về BMAD** | Define BMAD as a structured method built on roles, documents, context discipline, and traceability. | 3 min |
| 9 | **Năm Trụ Cột** | Present the five pillars as specialized agents, lifecycle discipline, clear artifacts for each step, context engineering, and reflection plus governance. | 2.5 min |
| 10 | **Nhìn Gần Hơn** | Set up the rest of the talk around team structure, workflow, control points, and practical proof. | 2.5 min |

---

## ACT 4: THE WHO — Agent Team (~8 min, 3 core slides)

**Theme:** *Meet the AI workforce and the handoff chain through artifacts*

| # | Slide Title | Updated Content | ~Time |
|---|---|---|---|
| 11 | **Đội Hình Cốt Lõi** | Present the delivery chain accurately: Mary (Analyst), John (PM), Winston (Architect), Sarah/PO, Bob (Scrum Master), Amelia (Developer), Quinn (QA). | 2.5 min |
| 12 | **Từ Lập Kế Hoạch Đến Thực Thi** | Show the handoff through artifacts: Brief -> PRD -> Architecture -> Story -> Code -> QA evidence. | 3 min |
| 13 | **Vì Sao Chuyên Biệt Hóa Hiệu Quả** | Make the logic explicit: smaller scope per role means tighter context, clearer responsibility, and more reviewable output. | 2.5 min |

---

## ACT 5: THE HOW — Process + Advanced Power + Quality (~17 min, 7 core slides)

**Theme:** *How BMAD actually works*

| # | Slide Title | Updated Content | ~Time |
|---|---|---|---|
| 14 | **Vòng Đời 4 Giai Đoạn** | Explain the four phases as analysis, planning, solutioning, and implementation. | 2 min |
| 15 | **Dòng Chảy Tài Liệu** | Expand the BMAD flow as `project-brief.md -> PRD.md -> architecture.md -> story files -> code/tests/review artifacts`. | 2.5 min |
| 16 | **Kỹ Thuật Tổ Chức Ngữ Cảnh** | Explain step-file architecture, focused artifact loading, and document sharding when large docs become unreliable. | 2.5 min |
| 17 | **Vòng Lặp C.O.R.E.** | Present C.O.R.E. as a reflection loop: Proposal -> Critique -> Refinement. | 2.5 min |
| 18 | **Bộ Công Cụ Mở Rộng** | Frame Advanced Elicitation, Party Mode, Expansion Packs, and BMad Builder as optional extensions on top of the method. | 2 min |
| 19 | **Chất Lượng: 4 Lớp Phòng Thủ** | Teach the quality stack as readiness gates, adversarial review, TDD + validation, and traceability. | 3 min |
| 20 | **Một Ngày Làm Việc Với BMAD** | Bring it back to daily practice: choose one story, load focused context, implement, test, receive QA review, and commit evidence. | 2.5 min |

---

## ACT 6: THE PROOF (~10 min, 4 core slides)

**Theme:** *Three kinds of proof: structure, speed, and scale*

| # | Slide Title | Updated Content | ~Time |
|---|---|---|---|
| 21 | **Ca 1: QuickBuy — Khả Năng Quan Sát** | Use QuickBuy to show BMAD as a delivery structure with visible artifacts and clearer handoff. | 2.5 min |
| 22 | **Ca 2: FoodInsight — Tốc Độ** | Use FoodInsight to anchor speed claims to a concrete scope: edge AI, Raspberry Pi, YOLO11, 29 stories, ~20 human hours, ~3 days. | 2.5 min |
| 23 | **Ca 3: Khảo Cổ Phần Mềm — Hệ Thống Cũ** | Use Software Archaeology to show BMAD helping with legacy understanding, onboarding, and traceable modernization. | 2.5 min |
| 24 | **Mẫu Số Chung** | Synthesize the cases into a broader engineering pattern: faster delivery, clearer artifacts, lower rework, easier onboarding, and stronger trust in the output. | 2.5 min |

---

## ACT 7: FUTURE + ECOSYSTEM + CTA (~7 min, 3 core slides)

**Theme:** *How teams adopt BMAD without pretending everything is enterprise-scale*

| # | Slide Title | Updated Content | ~Time |
|---|---|---|---|
| 25 | **Quy Mô Và Hệ Sinh Thái** | Show that BMAD is not one-size-fits-all: Quick Flow for small work, BMAD standard for product features, Enterprise for heavily governed systems. | 2.5 min |
| 26 | **Bắt Đầu Ngay** | Keep the CTA operational: install, choose the right track, create the first brief/spec, and run one controlled pilot. | 2 min |
| 27 | **Kết Lại** | End on a practical message: AI is more useful when it sits inside a structured workflow with human responsibility. | 2.5 min |

---

## Detailed Slide Content

> Note: this section still documents the **27 core conceptual slides**. The live deck uses the updated Vietnamese render titles listed in the act tables above, plus structural wrapper slides such as the opening title, section dividers, Q&A, and thank-you.

### Slide 1 — Cold Open
- **Goal:** Make the audience feel the pain of uncontrolled AI coding in under 10 seconds.
- **Takeaway:** The problem is not AI-generated code. The problem is unstructured AI-generated code.
- **Supporting Detail:** Use a visually ugly code sample with inconsistent naming, duplicated logic, and obvious confusion. Do not explain BMAD yet.
- **Proof / Evidence:** If real code cannot be shown, use a synthetic example labeled internally as illustrative only.
- **Speaker Angle:** Slightly accusatory, then empathetic. The line should feel uncomfortably familiar, not insulting.
- **Image Direction:** Background mood image only. The accusation and takeaway must still come from slide copy.
- **AI Image Prompt:** `A dark cinematic developer workspace with one laptop showing messy, chaotic source code, moody lighting, high contrast, realistic but restrained detail, generous negative space for headline overlay, no readable text, no logos, square 1:1 composition`

### Slide 2 — Why Vibe Coding Feels Good
- **Goal:** Be fair before criticizing.
- **Takeaway:** Vibe coding is attractive because it minimizes setup and turns ideas into working output quickly.
- **Supporting Detail:** Call out short feedback loops, low ceremony, and strong usefulness for prototypes, scripts, and exploratory work.
- **Proof / Evidence:** Use recognizable situations: UI experiments, code spikes, one-off automation, quick debugging attempts.
- **Speaker Angle:** Respectful and balanced.
- **Preferred Visual Source:** Typography-first comparison of where vibe coding shines, supported by a few concise examples.

### Slide 3 — The Breaking Point of Vibe Coding
- **Goal:** Show why the same method becomes fragile as work grows.
- **Takeaway:** When scope expands, chat-driven coding loses reliability because decisions are no longer durable or easy to review.
- **Supporting Detail:** Focus on drifting constraints, patch accumulation, rising control effort, and lack of artifacts that survive beyond the session.
- **Proof / Evidence:** Use one concrete arc: early prompts help, later prompts fight each other, and the operator spends more time steering than building.
- **Speaker Angle:** Technical and direct.
- **Preferred Visual Source:** Use a reconstructed chat-plus-diff sequence or a native progression diagram showing how small success turns into instability.

### Slide 4 — What Vibe Coding Optimizes For
- **Goal:** Define vibe coding without reducing it to a joke.
- **Takeaway:** Vibe coding optimizes for speed of interaction, not long-lived shared context.
- **Supporting Detail:** Explain it as coding through continuous conversation, with the chat session acting as the primary memory and coordination layer.
- **Proof / Evidence:** Show characteristics such as low upfront structure, broad session scope, and heavy dependence on operator steering.
- **Speaker Angle:** Neutral and descriptive.
- **Preferred Visual Source:** Use a concise table or stacked comparison cards.

### Slide 5 — What Context Engineering Optimizes For
- **Goal:** Introduce the alternative model clearly before naming BMAD.
- **Takeaway:** Context engineering organizes the right context, at the right time, for the right task boundary.
- **Supporting Detail:** Artifacts hold decisions, steps narrow scope, and roles or workflows keep context loading deliberate.
- **Proof / Evidence:** Use concepts such as `project brief`, `PRD`, `architecture`, `story`, `review evidence`, or focused step files.
- **Speaker Angle:** Precise and explanatory.
- **Preferred Visual Source:** Use a native diagram that shows context being partitioned and loaded intentionally rather than remembered informally.

### Slide 6 — Vibe Coding vs Context Engineering
- **Goal:** Make the distinction memorable in one frame.
- **Takeaway:** The biggest difference is not model quality; it is how context is organized, preserved, and reviewed.
- **Supporting Detail:** Compare source of truth, decision memory, task boundaries, review timing, and repeatability.
- **Proof / Evidence:** Use a direct table with clear contrasts such as `chat history vs artifacts` and `single broad session vs scoped steps`.
- **Speaker Angle:** Crisp and comparative.
- **Image Direction:** The image should only support the contrast. The actual comparison must still live in a native table or diagram.
- **AI Image Prompt:** `A split-scene editorial technology background, one side loose and chaotic, the other side orderly and structured, clean premium composition with strong contrast and clear negative space for overlay text, no readable text, square 1:1 composition`

### Slide 7 — When Each Model Fits
- **Goal:** Avoid turning the talk into BMAD propaganda.
- **Takeaway:** Vibe coding is useful for exploration; context engineering is stronger when work needs stability, coordination, and durable review.
- **Supporting Detail:** Put prototypes, spikes, and short-lived tasks on one side; multi-step features, shared systems, and review-heavy work on the other.
- **Proof / Evidence:** Use practical scenarios rather than ideology.
- **Speaker Angle:** Balanced and pragmatic.
- **Preferred Visual Source:** A side-by-side fit matrix or decision table.

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
- **AI Image Prompt:** `A cohesive enterprise illustration of a coordinated software delivery team with seven distinct specialist archetypes, calm and credible, arranged to leave room for role labels and captions, no readable text, square 1:1 composition`

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
- **AI Image Prompt:** `A refined isometric background scene of documents and software artifacts moving through a clean pipeline, minimal and elegant, subdued enough to support overlaid labels and arrows, no readable text, square 1:1 composition`

### Slide 16 — Context Engineering
- **Goal:** Explain why BMAD agents stay more aligned than generic chat sessions.
- **Takeaway:** BMAD manages context deliberately instead of hoping the model remembers everything.
- **Supporting Detail:** Step-file architecture loads fresh, focused instructions; sharding helps when large documents become unreliable or too expensive.
- **Proof / Evidence:** Use the ideas of just-in-time loading and smaller context footprints. Avoid implying sharding is mandatory in every scenario.
- **Speaker Angle:** Technical, accurate, not hypey.
- **Image Direction:** The image should act as metaphor only. The actual explanation of step-files, sharding, and context loading must stay in deck text/diagram form.
- **AI Image Prompt:** `An elegant conceptual background of a large technical document separating into smaller modular units flowing toward focused implementation work, clean systems aesthetic, generous negative space for explanatory overlays, no readable text, square 1:1 composition`

### Slide 17 — C.O.R.E. Engine
- **Goal:** Explain the philosophical heart of BMAD.
- **Takeaway:** BMAD forces reflection, not just generation.
- **Supporting Detail:** Proposal, critique, and refinement happen before and during execution, guided by humans and specialized agents.
- **Proof / Evidence:** Anchor this as the antidote to first-thought bias.
- **Speaker Angle:** Conceptual but grounded.
- **Image Direction:** Use the image to create memory and atmosphere; the explicit `Proposal -> Critique -> Refinement` loop should still be built as deck typography or diagram.
- **AI Image Prompt:** `A premium abstract background suggesting recursive reflection and iterative improvement, circular motion, intelligent systems atmosphere, elegant glow, open composition for overlay labels, no readable text, square 1:1 composition`

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
- **AI Image Prompt:** `A sleek enterprise background image suggesting layered protection around a software system, clean concentric forms, trust and rigor, spacious composition for overlay labels and explanations, no readable text, square 1:1 composition`

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

### Slide 24 — The Pattern: Shared Engineering Value
- **Goal:** Convert three stories into one engineering pattern.
- **Takeaway:** BMAD creates speed with more evidence, clearer handoff, and less chaos.
- **Supporting Detail:** Translate the cases into practical outcomes: more throughput, lower rework, easier onboarding, and higher trust in the result.
- **Proof / Evidence:** Keep the language directional unless exact KPI baselines are available.
- **Speaker Angle:** Strategic but still engineering-focused.
- **Image Direction:** If used, the image should simply elevate the synthesis. The actual pattern should be communicated through text, stats, and a clear comparison diagram.
- **AI Image Prompt:** `A polished enterprise editorial background evoking software delivery performance, trust, and strategic value, sophisticated boardroom-tech atmosphere, clean negative space for KPI and summary overlays, no readable text, square 1:1 composition`

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

*Framework v0.8 — revised to de-emphasize outsourcing framing and strengthen the early comparison between vibe coding and context engineering*  
*Updated after implementation review against the current React presentation build, the source presentation web, and NotebookLM research on BMAD Method*
