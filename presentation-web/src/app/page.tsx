import Presentation from '@/components/Presentation';
import { HeroSlide } from '@/components/slides/HeroSlide';
import { SpeakerSlide } from '@/components/slides/SpeakerSlide';
import { SectionHeadingSlide } from '@/components/slides/SectionHeadingSlide';
import { WhatIsBmadSlide } from '@/components/slides/WhatIsBmadSlide';
import { WhyBmadSlide } from '@/components/slides/WhyBmadSlide';
import { ProjectContextSlide } from '@/components/slides/ProjectContextSlide';
import { FullFlowOverviewSlide } from '@/components/slides/FullFlowOverviewSlide';
import { FullFlowDiagramSlide } from '@/components/slides/FullFlowDiagramSlide';
import { QuickFlowOverviewSlide } from '@/components/slides/QuickFlowOverviewSlide';
import { QuickSpecSlide } from '@/components/slides/QuickSpecSlide';
import { QuickSpecVsPlanSlide } from '@/components/slides/QuickSpecVsPlanSlide';
import { QuickDevSlide } from '@/components/slides/QuickDevSlide';
import { ReviewWorkflowSlide } from '@/components/slides/ReviewWorkflowSlide';
import { ReviewPromptSlide } from '@/components/slides/ReviewPromptSlide';
import { CodeReviewSlide } from '@/components/slides/CodeReviewSlide';
import { CheckpointPreviewSlide } from '@/components/slides/CheckpointPreviewSlide';
import { NotesTipsSlide } from '@/components/slides/NotesTipsSlide';
import { ImplementationFlowInMFWSlide } from '@/components/slides/ImplementationFlowInMFWSlide';
import { ThanksSlide } from '@/components/slides/ThanksSlide';
import { ChallengesSlide } from '@/components/slides/ChallengesSlide';

export default function Home() {
  return (
    <Presentation>
      <HeroSlide />
      <SpeakerSlide />
      <SectionHeadingSlide
        number="01"
        title="What is BMAD?"
        subtitle="A structured AI-driven software development methodology."
        variant="secondary"
      />
      <WhatIsBmadSlide />
      <WhyBmadSlide />
      <SectionHeadingSlide
        number="02"
        title="Project Context"
        subtitle="Do this before anything else."
        variant="accent"
      />
      <ProjectContextSlide />
      <SectionHeadingSlide
        number="03"
        title="Full Flow"
        subtitle="What product should we build, for whom, and why?"
        variant="secondary"
      />
      <FullFlowOverviewSlide />
      <FullFlowDiagramSlide />
      <SectionHeadingSlide
        number="04"
        title="Quick Flow"
        subtitle="What code needs to change, and exactly how."
        variant="accent"
      />
      <QuickFlowOverviewSlide />
      <QuickSpecSlide />
      <QuickSpecVsPlanSlide />
      <QuickDevSlide />
      <SectionHeadingSlide
        number="05"
        title="Review Workflow"
        subtitle="Adversarial review & code review before you ship."
        variant="secondary"
      />
      <ReviewWorkflowSlide />
      <ReviewPromptSlide />
      <CodeReviewSlide />
      <CheckpointPreviewSlide />
      <SectionHeadingSlide
        number="07"
        title="Notes & Tips"
        subtitle="Lessons from the field."
        variant="secondary"
      />
      <NotesTipsSlide />
      <ChallengesSlide />
      <ThanksSlide />
    </Presentation>
  );
}
