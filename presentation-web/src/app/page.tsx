import Presentation from '@/components/Presentation';
import { HeroSlide, VibeCodingSlide, ProblemSlide, ShiftSlide } from '@/components/slides/intro';
import { DefinitionSlide, VirtualSquadSlide, AgentCodeSlide, LifecycleSlide } from '@/components/slides/concepts';
import { ShardingSlide, CascadeSlide, ScalableIntelligenceSlide, BrownfieldSlide, BenefitsSlide, ExperienceSlide } from '@/components/slides/details';

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
      <ExperienceSlide />
    </Presentation>
  );
}
