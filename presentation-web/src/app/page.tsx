import Presentation from '@/components/Presentation';
import { HeroSlide } from '@/components/slides/HeroSlide';
import { IntroSlide } from '@/components/slides/IntroSlide';
import { AgendaSlide } from '@/components/slides/AgendaSlide';
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
import { SectionHeadingSlide } from '@/components/slides/SectionHeadingSlide';
import { CapigoProjectSlide } from '@/components/slides/CapigoProjectSlide';

export default function Home() {
  return (
    <Presentation>
      <HeroSlide />
      <IntroSlide />
      <AgendaSlide />
      <SectionHeadingSlide 
        number="01" 
        title="Giới thiệu về BMAD Method" 
        subtitle="Kỷ luật & Cấu trúc là nền tảng của tự do trong lập trình Agentic."
        variant="secondary"
      />
      <VibeCodingSlide />
      <ProblemSlide />
      <ShiftSlide />
      <DefinitionSlide />
      <VirtualSquadSlide />
      <AgentCodeSlide />
      <LifecycleSlide />
      {/* <ShardingSlide /> */}
      <CascadeSlide />
      {/* <ScalableIntelligenceSlide /> */}
      {/* <BrownfieldSlide /> */}
      <BenefitsSlide />
      <ProsSlide />
      <ConsSlide />
      <SectionHeadingSlide 
        number="02" 
        title="Chia sẻ kinh nghiệm áp dụng" 
        subtitle="Từ lý thuyết đến thực thi - Hành trình tối ưu hóa với AI Agent."
        variant="accent"
      />
      <CapigoProjectSlide />
    </Presentation>
  );
}
