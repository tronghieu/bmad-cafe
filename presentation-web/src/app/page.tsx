import Presentation from '@/components/Presentation';
import { HeroSlide } from '@/components/slides/HeroSlide';
import { VibeCodingSlide } from '@/components/slides/VibeCodingSlide';
import { ProblemSlide } from '@/components/slides/ProblemSlide';
import { ShiftSlide } from '@/components/slides/ShiftSlide';
import { DefinitionSlide } from '@/components/slides/DefinitionSlide';
import { VirtualSquadSlide } from '@/components/slides/VirtualSquadSlide';
import { AgentCodeSlide } from '@/components/slides/AgentCodeSlide';
import { LifecycleSlide } from '@/components/slides/LifecycleSlide';
import { ShardingSlide } from '@/components/slides/ShardingSlide';
import { CascadeSlide } from '@/components/slides/CascadeSlide';
import { ScalableIntelligenceSlide } from '@/components/slides/ScalableIntelligenceSlide';
import { BrownfieldSlide } from '@/components/slides/BrownfieldSlide';
import { BenefitsSlide } from '@/components/slides/BenefitsSlide';
import { ProsSlide } from '@/components/slides/ProsSlide';
import { ConsSlide } from '@/components/slides/ConsSlide';
import { ExperienceSlide } from '@/components/slides/ExperienceSlide';

export default function Home() {
  return (
    <Presentation>
      <HeroSlide />
      <VibeCodingSlide />
      <ProblemSlide />
      <ShiftSlide />
      <DefinitionSlide />
      <VirtualSquadSlide />
      <AgentCodeSlide />
      <LifecycleSlide />
      <ShardingSlide />
      <CascadeSlide />
      <ScalableIntelligenceSlide />
      <BrownfieldSlide />
      <BenefitsSlide />
      <ProsSlide />
      <ConsSlide />
      <ExperienceSlide />
    </Presentation>
  );
}
