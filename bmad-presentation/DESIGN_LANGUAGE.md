# BMAD Presentation Website: Design Language

## Intent

This website should feel like a **slide-by-slide interactive presentation**, not a landing page and not a PDF trapped inside a browser.

The visual goal is to express BMAD as:

- disciplined
- intelligent
- trustworthy
- modern
- high-craft

The website should make developers feel that BMAD is a serious operating model for AI-native software work, not a flashy AI toy.

---

## Core Direction

### Chosen Aesthetic

**Quiet Luxury Tech, light editorial systems**

This means:

- light, spacious, editorial surfaces
- clean system logic and diagram clarity
- restrained but confident typography
- subtle technical motifs
- almost no decorative excess
- motion that guides attention rather than performs for its own sake

This direction is intentionally anti-SaaS-template and anti-generic-AI-aesthetic.

It should avoid:

- purple gradients
- glassmorphism cliches
- neon sci-fi UI
- dashboard card spam
- loud motion everywhere

---

## Emotional Register

The presentation should move through three emotional modes:

1. **Tension**
   Used in the hook and problem sections. The audience should feel the discomfort of chaotic AI-assisted development.

2. **Clarity**
   Used in the BMAD overview, agent team, process, and quality sections. This is where order, hierarchy, and confidence take over.

3. **Conviction**
   Used in the proof and closing sections. The audience should leave with the sense that BMAD is practical, credible, and worth piloting.

---

## Visual Personality

The site should feel like a fusion of:

- a premium editorial product story
- a software architecture brief
- a carefully directed conference talk

If someone remembers only one thing about the design, it should be:

**"This feels calm, expensive, and technically serious."**

---

## Color System

### Primary Palette

- `--bone-50: #f7f1e8`
- `--bone-100: #efe6da`
- `--paper: #fcfaf6`
- `--ink-900: #181512`
- `--ink-700: #3f3934`
- `--ink-500: #6b645d`
- `--ember-600: #b34c2e`
- `--ember-500: #c86141`
- `--ember-200: #e9c2b2`
- `--line: rgba(24, 21, 18, 0.10)`
- `--panel: rgba(255, 252, 246, 0.78)`

### Usage Rules

- `bone/paper` are the dominant surfaces.
- `ink` is used for typography, diagrams, rules, and serious structure.
- `ember` is reserved for tension, highlights, progress, warnings, and narrative pivot points.
- Ember should feel precise, not loud. If too much red appears, the design loses its quiet authority.

### Sectional Behavior

- Hook and problem slides can carry slightly more ember contrast.
- Method and process slides should stay mostly bone + ink.
- Proof slides can reintroduce ember for metric emphasis.
- Closing should return to calm bone + ink with one restrained ember accent.

---

## Typography

Because the content is in Vietnamese, typography must prioritize:

- clean rendering of diacritics
- stable rhythm in long sentences
- elegant headline contrast without breaking readability

### Recommended Pairing

- **Display / Headline:** `Source Serif 4`
- **Body / UI / Labels:** `Be Vietnam Pro`

### Why This Pairing

- `Source Serif 4` gives editorial intelligence without becoming ornamental.
- `Be Vietnam Pro` is clean, contemporary, and naturally suited to Vietnamese text.
- Together they create a restrained editorial voice with technical polish.

### Typographic Rules

- Headlines should be short, deliberate, and given air.
- Body text should remain compact, quiet, and highly readable.
- Labels, captions, and metadata should rely on body type, not a third font.
- Monospace should be used sparingly for file names, commands, and artifact references.

### Monospace Recommendation

- `IBM Plex Mono`

Use only for:

- commands
- file names
- code fragments
- system references

---

## Spatial System

### Density

**Balanced**

Most slides should feel spacious, but several technical slides are allowed to become denser where explanation demands it.

### Layout Principles

- Favor large margins and deliberate alignment.
- Avoid center-everything layouts except in rare dramatic moments.
- Use asymmetry with discipline.
- Let one dominant region lead, with one supporting region.
- Slides should feel composed like editorial spreads, not app screens.

### Core Grid

- one broad content frame
- internal multi-column grid for structure
- generous left and right padding
- visible rhythm between heading, support text, proof, and visual

---

## Slide Archetypes

The site should not treat all slides the same. Use a small number of repeatable slide types.

### 1. Hero Slide

Used for:

- slide 1
- slide 2
- slide 27

Behavior:

- dominant headline
- one supporting visual or image
- minimal extra text
- strongest motion restraint

### 2. Contrast Slide

Used for:

- slide 5
- slide 7
- slide 13

Behavior:

- split logic
- side-by-side comparison
- explicit labels
- no decorative clutter

### 3. Systems Slide

Used for:

- slide 12
- slide 14
- slide 15
- slide 16
- slide 17
- slide 19

Behavior:

- diagrams, connectors, flows, sequences
- clear layering
- careful use of ember as guide rails
- strongest use of mini-animate for staged explanation

### 4. Case Slide

Used for:

- slide 21
- slide 22
- slide 23
- slide 24

Behavior:

- one core proof per slide
- supporting metric cluster
- optional image or artifact snapshot
- business translation always visible

### 5. Transitional Editorial Slide

Used for:

- slide 3
- slide 10
- slide 25
- slide 26

Behavior:

- typography-led
- minimal visual weight
- used to reset tempo

---

## Motion Language

The site should have **mini animation**, not animation theater.

### Motion Principles

- motion reveals hierarchy
- motion should support understanding
- nothing should bounce
- no gratuitous zooms
- no floaty startup nonsense

### Approved Motion Types

- fade in
- soft rise
- stagger reveal
- line draw
- connector trace
- mask reveal
- number count-up
- light crossfade between slide states

### Motion Tempo

- fast enough to feel alive
- slow enough to feel expensive

Suggested feel:

- entrances: subtle and controlled
- metric reveals: crisp
- diagram reveals: sequential
- page transitions: smooth but not theatrical

### Motion Distribution

- Hook slides: stronger reveal contrast
- Process slides: sequential, instructional motion
- Proof slides: metric-led motion
- Closing slides: almost still

---

## Image Strategy

Images are not the message. They are **supporting visual anchors**.

### Rules

- Prefer square imagery for flexible layout placement.
- Use images as mood, metaphor, or atmosphere.
- Keep real content in copy, diagrams, metrics, and artifacts.
- Avoid fake dashboards, fake UI, fake labels, and fake infographic text inside generated imagery.

### Best Uses

- hero emotional anchor
- conceptual metaphor
- visual pause between dense sections
- subtle business atmosphere

### Poor Uses

- replacing process diagrams
- replacing proof tables
- replacing actual artifact examples
- trying to summarize an entire slide with one image

---

## Surface and Texture

The site should not be flat-white and sterile.

Use restrained texture:

- paper-toned backgrounds
- faint grain
- soft panel translucency
- hairline rules
- quiet shadow depth

The texture should be almost invisible at first glance, but it should make the interface feel physical and composed.

---

## Component Language

Each recurring UI element should have a clear visual role.

### Heading Block

- large serif headline
- compact supporting paragraph
- small section label in sans

### Proof Block

- metric or claim
- compact qualifier
- optional source label

### System Diagram

- thin rules
- disciplined nodes
- ember only for active emphasis

### Artifact Card

- paper-like panel
- monospace metadata
- editorial title hierarchy
- not a generic app card

### Caption / Annotation

- quiet
- useful
- never ornamental filler

---

## Recommended Interaction Feel

Because this is slide-by-slide, navigation should feel like:

- deliberate forward movement
- chaptered progression
- clean state change
- no accidental scrolling chaos

The audience should feel that each slide is a composed frame with a specific job.

---

## What Should Be Memorable

If the design succeeds, people should remember:

- the calm confidence of the layout
- the quality of the type
- the precision of the diagrams
- the restraint of the motion
- the sense that BMAD is serious, not gimmicky

---

## Design Statement

**Build the BMAD presentation site like an editorially directed systems experience: light, precise, restrained, and quietly premium. Let typography and structure do the heavy lifting. Let motion guide the eye. Let images support the story, never replace it.**
