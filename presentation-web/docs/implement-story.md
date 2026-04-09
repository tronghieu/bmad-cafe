# Implementing Stories in BMad

## Overview

Story implementation in BMad follows a systematic, context-rich process that ensures developers have everything they need for flawless execution. The process spans from story creation (with comprehensive context gathering) through implementation and code review.

---

## The Story Implementation Cycle

```
[CS] Create Story → [DS] Dev Story → [CR] Code Review
                        ↑                    ↓
                        └────── fixes ───────┘
```

---

## Phase 1: Create Story Context

**Workflow:** `bmad-bmm-create-story` | **Menu Code:** [CS] | **Agent:** Bob (🏃 Scrum Master)

### Purpose

Creates a comprehensive story file that serves as the ultimate implementation guide for developers. This step is critical because it prevents common LLM developer mistakes like reinventing wheels, using wrong libraries, breaking existing patterns, or implementing vague requirements.

### Context Gathering Process

The Create Story workflow performs **exhaustive artifact analysis** to build a complete picture:

#### 1. **Epics File Analysis**
- Epic objectives and business value
- All stories in the epic for cross-story context
- Specific story requirements and user story statement
- Acceptance criteria (BDD format)
- Technical requirements and constraints
- Dependencies on other stories/epics

#### 2. **Architecture Analysis** ✅ **YES - Reads Technical Architecture**
The workflow extensively reads and analyzes the architecture document:

- **Technical Stack:** Languages, frameworks, libraries with specific versions
- **Code Structure:** Folder organization, naming conventions, file patterns
- **API Patterns:** Service structure, endpoint patterns, data contracts
- **Database Schemas:** Tables, relationships, constraints relevant to the story
- **Security Requirements:** Authentication patterns, authorization rules
- **Performance Requirements:** Caching strategies, optimization patterns
- **Testing Standards:** Testing frameworks, coverage expectations, test patterns
- **Deployment Patterns:** Environment configurations, build processes
- **Integration Patterns:** External service integrations, data flows

#### 3. **Previous Story Intelligence** (if story_num > 1)
- Dev notes and learnings from the previous story
- Review feedback and corrections needed
- Files created/modified and their patterns
- Testing approaches that worked/didn't work
- Problems encountered and solutions found
- Code patterns established

#### 4. **Git Intelligence**
- Last 5 commit titles for recent work patterns
- Analysis of recent commits for:
  - Files created/modified
  - Code patterns and conventions used
  - Library dependencies added/changed
  - Architecture decisions implemented
  - Testing approaches used

#### 5. **Web Research**
- Latest stable versions of libraries/frameworks
- Current API documentation and breaking changes
- Security vulnerabilities or updates
- Performance improvements or deprecations
- Best practices for current versions

#### 6. **Project Context**
- Coding standards from `project-context.md`
- Project-wide patterns and conventions

### Story File Output

**Location:** `_bmad-output/implementation-artifacts/{epic}-{story}-{title}.md`

**Key Sections:**
- **Story Requirements:** User story, acceptance criteria
- **Dev Agent Guardrails:** Architecture compliance rules
- **Technical Requirements:** Specific tech stack requirements
- **Library/Framework Requirements:** Versions and usage patterns
- **File Structure Requirements:** Where to create/modify files
- **Testing Requirements:** Test coverage expectations
- **Previous Story Intelligence:** Learnings from prior work
- **Git Intelligence Summary:** Recent patterns to follow
- **Latest Tech Information:** Current versions and best practices

**Status:** Set to `ready-for-dev`

---

## Phase 2: Implement Story

**Workflow:** `bmad-bmm-dev-story` | **Menu Code:** [DS] | **Agent:** Amelia (💻 Developer)

### Implementation Philosophy

- **Red-Green-Refactor:** TDD cycle for all implementations
- **Zero deviation:** Follow story file tasks/subtasks exactly
- **Continuous execution:** No pausing for "milestones" - complete the entire story
- **Architecture compliance:** Strictly follow patterns from Dev Notes

### Step-by-Step Process

#### **1. Story Discovery & Loading**
- Finds next `ready-for-dev` story from `sprint-status.yaml`
- Reads **complete story file** with all context
- Loads `project-context.md` for coding standards
- Extracts Dev Notes section (architecture, learnings, technical specs)
- Identifies first incomplete task

#### **2. Load Context**
- Story requirements and acceptance criteria
- Dev Agent Guardrails from story file
- Architecture compliance rules
- Project-wide coding patterns

#### **3. Detect Review Continuation**
- Checks for "Senior Developer Review (AI)" section
- If exists: prioritizes review follow-up tasks marked `[AI-Review]`
- Extracts action items and severity levels
- Resumes from where code review left off

#### **4. Mark Story In-Progress**
- Updates story status in `sprint-status.yaml` to `in-progress`
- Indicates development has started

#### **5. Implement Task (Red-Green-Refactor)**

For **each task/subtask** in the story file:

##### 🔴 **RED Phase: Write Failing Tests**
```
1. Write tests for the task/subtask functionality FIRST
2. Run tests to confirm they FAIL
3. Validates test correctness before implementation
```

##### 🟢 **GREEN Phase: Minimal Implementation**
```
1. Implement MINIMAL code to make tests pass
2. Run tests to confirm they now PASS
3. Handle error conditions and edge cases per task spec
```

##### 🔵 **REFACTOR Phase: Improve Code**
```
1. Improve code structure while keeping tests green
2. Follow architecture patterns from Dev Notes
3. Ensure coding standards compliance
```

**Critical Rules:**
- ❌ **NEVER** implement anything not in a task/subtask
- ❌ **NEVER** proceed to next task until current is complete AND tests pass
- ✅ **ALWAYS** execute continuously until story complete or HALT condition
- ✅ **ALWAYS** document approach in Dev Agent Record

#### **6. Author Comprehensive Tests**
- **Unit tests:** Business logic and core functionality
- **Integration tests:** Component interactions
- **E2E tests:** Critical user flows (when required)
- **Edge cases:** Error handling scenarios from Dev Notes

#### **7. Run Validations**
- Run **all existing tests** (check for regressions)
- Run **new tests** (verify correctness)
- Run **linting and code quality checks**
- Validate **ALL acceptance criteria** are satisfied

#### **8. Mark Task Complete**

**Validation Gates (ALL must pass):**
- ✅ All tests for this task EXIST and PASS 100%
- ✅ Implementation matches task specification exactly
- ✅ All related acceptance criteria satisfied
- ✅ No regressions in full test suite

**For Review Follow-ups:**
- Mark task in "Review Follow-ups (AI)" section as `[x]`
- Mark corresponding action item in "Senior Developer Review" as `[x]`
- Add resolution note to Dev Agent Record

**Only then:**
- Mark task checkbox with `[x]`
- Update File List with all changed files
- Add completion notes to Dev Agent Record
- **Loop back to Step 5** for next task

#### **9. Story Completion**

**Final Validation:**
- Verify ALL tasks and subtasks marked `[x]`
- Run full regression suite
- Confirm File List includes every changed file
- Execute definition-of-done checklist:
  - All tasks complete
  - All acceptance criteria satisfied
  - Comprehensive test coverage
  - All tests passing
  - Code quality checks passing
  - File List complete
  - Dev Agent Record contains notes
  - Change Log has summary

**Status Update:**
- Update story Status to: `review`
- Update `sprint-status.yaml` to: `review`

#### **10. Completion Communication**
- Summarize accomplishments
- Provide story file path and status
- Offer explanations based on user skill level
- Suggest next steps (typically: run code review)

---

## Phase 3: Code Review

**Workflow:** `bmad-bmm-code-review` | **Menu Code:** [CR] | **Agent:** Amelia (💻 Developer)

### Review Process

- **Adversarial review** finds issues, gaps, and improvements
- Creates action items in story file under "Senior Developer Review (AI)" section
- Adds "Review Follow-ups (AI)" subsection to Tasks/Subtasks

### Outcomes

**If Issues Found:**
- Status: `changes-requested` or `blocked`
- Action items added with severity levels (High/Med/Low)
- Developer runs [DS] again to address issues
- Dev Story workflow detects review continuation and prioritizes fixes

**If Approved:**
- Status: `done` in sprint-status.yaml
- Proceed to next story [CS] or epic retrospective [ER]

---

## Key Files Reference

| **File** | **Purpose** |
|----------|-------------|
| `_bmad-output/planning-artifacts/epics.md` | Epic and story definitions with BDD criteria |
| `_bmad-output/planning-artifacts/architecture.md` | Technical architecture decisions |
| `_bmad-output/implementation-artifacts/sprint-status.yaml` | Sprint tracking and story status |
| `_bmad-output/implementation-artifacts/{story-key}.md` | Individual story implementation guide |
| `docs/project-context.md` | Project-wide coding standards and patterns |

---

## Does It Read Technical Architecture?

✅ **YES - Extensively**

The Create Story workflow (Step 3: Architecture Analysis) systematically reads and analyzes the entire architecture document to extract:

1. **Technical decisions** that must be followed
2. **Code patterns** to replicate
3. **Library versions** to use
4. **File structure** to maintain
5. **Testing standards** to apply
6. **Security requirements** to implement
7. **Performance patterns** to follow

This analysis is embedded into the story file's **Dev Agent Guardrails** section, ensuring the developer agent cannot deviate from architectural decisions during implementation.

---

## Quick Start Commands

```bash
# Create next story with comprehensive context
/bmad-bmm-create-story

# Implement the story (automatically finds ready-for-dev)
/bmad-bmm-dev-story

# Run adversarial code review
/bmad-bmm-code-review

# Check sprint progress anytime
/bmad-bmm-sprint-status
```

---

## Best Practices

1. **Always run Create Story first** - Never start implementation without comprehensive context
2. **Trust the story file** - Dev agent should follow tasks/subtasks exactly as written
3. **Use different LLMs** - Implement with one model, review with another for better quality
4. **Fresh context windows** - Start each workflow in a clean conversation for best results
5. **Let it complete** - Don't interrupt Dev Story workflow; it runs continuously until done

---

## Common Pitfalls Prevented

The BMad story implementation process prevents these common issues:

- ❌ Reinventing wheels (checks previous work)
- ❌ Using wrong libraries (validates against architecture)
- ❌ Breaking existing patterns (analyzes git history)
- ❌ Vague implementations (comprehensive acceptance criteria)
- ❌ Missing tests (enforces red-green-refactor)
- ❌ Regression bugs (full test suite validation)
- ❌ Outdated approaches (web research for latest versions)
- ❌ Inconsistent code style (project-context.md enforcement)

---

## Related Workflows

- **[SP] Sprint Planning:** Initialize sprint and prepare all stories
- **[SS] Sprint Status:** Check progress anytime
- **[QA] QA Automation:** Generate additional E2E test coverage
- **[ER] Epic Retrospective:** Review completed epic and extract learnings
- **[CC] Correct Course:** Handle major changes during implementation

---

## Summary

Story implementation in BMad is a **context-rich, systematic process** that:

1. ✅ **Reads architecture extensively** during Create Story
2. ✅ **Follows red-green-refactor** TDD discipline
3. ✅ **Enforces continuous implementation** until completion
4. ✅ **Validates comprehensively** before marking complete
5. ✅ **Integrates review feedback** seamlessly into dev cycle

The result: **Flawless implementations** that follow architecture, maintain quality, and deliver on acceptance criteria.

---

## Visual Workflow Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        BMAD STORY IMPLEMENTATION CYCLE                      │
└─────────────────────────────────────────────────────────────────────────────┘

                                    START
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  PHASE 1: CREATE STORY (CS)                                                 │
│  Agent: Bob 🏃 (Scrum Master)                                               │
│  Command: /bmad-bmm-create-story                                            │
├─────────────────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────┐                                                   │
│  │ Context Gathering:   │                                                   │
│  ├──────────────────────┤                                                   │
│  │ 1. Epics File        │ → Requirements, AC, Dependencies                  │
│  │ 2. Architecture ✅   │ → Tech stack, patterns, standards                 │
│  │ 3. Previous Story    │ → Learnings, patterns, problems                   │
│  │ 4. Git Intelligence  │ → Recent commits, conventions                     │
│  │ 5. Web Research      │ → Latest versions, best practices                 │
│  │ 6. Project Context   │ → Coding standards                                │
│  └──────────────────────┘                                                   │
│                 │                                                            │
│                 ▼                                                            │
│  📄 Story File Created                                                      │
│  Status: ready-for-dev                                                      │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  PHASE 2: IMPLEMENT STORY (DS)                                              │
│  Agent: Amelia 💻 (Developer)                                               │
│  Command: /bmad-bmm-dev-story                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  1. Load Story & Context                                                    │
│     └─→ Story file + Dev Notes + Guardrails                                │
│                │                                                             │
│                ▼                                                             │
│  2. Check for Review Continuation                                           │
│     └─→ Prioritize [AI-Review] tasks if exists                             │
│                │                                                             │
│                ▼                                                             │
│  3. Mark Story: in-progress                                                 │
│                │                                                             │
│                ▼                                                             │
│  ╔═══════════════════════════════════════════════════════════╗             │
│  ║  FOR EACH TASK/SUBTASK:                                  ║             │
│  ╠═══════════════════════════════════════════════════════════╣             │
│  ║                                                           ║             │
│  ║  🔴 RED: Write Failing Tests                             ║             │
│  ║     └─→ Write tests FIRST                                ║             │
│  ║     └─→ Confirm they FAIL                                ║             │
│  ║                                                           ║             │
│  ║  🟢 GREEN: Minimal Implementation                        ║             │
│  ║     └─→ Make tests PASS                                  ║             │
│  ║     └─→ Handle edge cases                                ║             │
│  ║                                                           ║             │
│  ║  🔵 REFACTOR: Improve Code                               ║             │
│  ║     └─→ Follow architecture patterns                     ║             │
│  ║     └─→ Keep tests green                                 ║             │
│  ║                                                           ║             │
│  ║  ✅ Validation Gates:                                    ║             │
│  ║     ├─ All tests pass                                    ║             │
│  ║     ├─ Matches specification                             ║             │
│  ║     ├─ AC satisfied                                      ║             │
│  ║     └─ No regressions                                    ║             │
│  ║                                                           ║             │
│  ║  ✓ Mark task [x]                                         ║             │
│  ║  ✓ Update File List                                      ║             │
│  ║  ✓ Add Dev Agent Record notes                            ║             │
│  ║                                                           ║             │
│  ║  └─→ Loop to next task ──┐                               ║             │
│  ╚══════════════════════════│═══════════════════════════════╝             │
│                             │                                              │
│                             └─────────┐                                    │
│                                       ▼                                    │
│  4. Final Validation                (ALL TASKS COMPLETE)                   │
│     ├─ All tasks marked [x]                                                │
│     ├─ Full regression suite passes                                        │
│     ├─ File List complete                                                  │
│     └─ Definition-of-done checklist                                        │
│                │                                                            │
│                ▼                                                            │
│  5. Mark Story: review                                                     │
│     Update sprint-status.yaml                                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  PHASE 3: CODE REVIEW (CR)                                                  │
│  Agent: Amelia 💻 (Developer)                                               │
│  Command: /bmad-bmm-code-review                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Adversarial Review Process:                                                │
│  ├─ Find issues, gaps, improvements                                         │
│  ├─ Create action items (High/Med/Low severity)                             │
│  ├─ Add "Senior Developer Review (AI)" section                              │
│  └─ Add "Review Follow-ups (AI)" to Tasks                                   │
│                                                                              │
│                ┌──────────────────┬──────────────────┐                      │
│                ▼                  ▼                  ▼                      │
│         Issues Found        Minor Issues        Approved ✅                │
│                │                  │                  │                      │
│                ▼                  ▼                  │                      │
│    Status: changes-requested  or blocked             │                      │
│                │                  │                  │                      │
│                └──────────┬───────┘                  │                      │
│                           │                          │                      │
└───────────────────────────┼──────────────────────────┼───────────────────────┘
                            │                          │
                            │                          ▼
                            │                   Status: done
                            │                          │
                            │                          ▼
                            │                   Next Story [CS]
                            │                     or Epic [ER]
                            │
                            └─────┐
                                  │
                                  ▼
                    ┌─────────────────────────────┐
                    │  🔄 FIXES CYCLE             │
                    │  Back to Dev Story (DS)     │
                    │  Detects review context     │
                    │  Prioritizes [AI-Review]    │
                    └─────────────────────────────┘
                                  │
                                  │
                                  └────────┐
                                           │
                  (loops back to Phase 2)  │
                                           │
                                           ▼
                                    [DS] Dev Story


═══════════════════════════════════════════════════════════════════════════════

KEY PRINCIPLES:

✅ Context-Rich:  Comprehensive context gathering prevents common mistakes
✅ TDD Discipline: Red-Green-Refactor for every task
✅ Zero Deviation: Follow story file tasks exactly
✅ Continuous Execution: Complete entire story without pausing
✅ Architecture Compliance: Strictly follow patterns from Dev Notes
✅ Validation Gates: All checks must pass before proceeding
✅ Seamless Review Integration: Feedback flows back into dev cycle

═══════════════════════════════════════════════════════════════════════════════
```
