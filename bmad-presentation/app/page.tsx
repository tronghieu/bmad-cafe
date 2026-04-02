import { Presentation } from "@/components/presentation";
import {
  BmadTradeoffsSlide,
  BmadOverviewSlide,
  ClosingSlide,
  ColdOpenSlide,
  ContextEngineeringSlide,
  CoreEngineSlide,
  CoreTeamSlide,
  DevsDaySlide,
  FoodInsightSlide,
  GetStartedSlide,
  LifecycleSlide,
  OpeningTitleSlide,
  OutsourcingCostSlide,
  PartyModeSlide,
  PlanningExecutionSlide,
  ProjectKillersSlide,
  QASlide,
  QualityLayersSlide,
  QuickBuySlide,
  RoadmapRoleShiftSlide,
  RoiPatternSlide,
  ScaleEcosystemSlide,
  SpeakerIntroSlide,
  ShiftSlide,
  SoftwareArchaeologySlide,
  ThankYouSlide,
  ThreeDayMiracleSlide,
  VibeCodingRealitySlide,
} from "@/components/slides";

export default function HomePage() {
  return (
    <Presentation>
      <OpeningTitleSlide />
      <SpeakerIntroSlide />
      <ColdOpenSlide />
      <ThreeDayMiracleSlide />
      <RoadmapRoleShiftSlide />
      <VibeCodingRealitySlide />
      <ProjectKillersSlide />
      <OutsourcingCostSlide />
      <ShiftSlide />
      <BmadOverviewSlide />
      <CoreTeamSlide />
      <PlanningExecutionSlide />
      <LifecycleSlide />
      <ContextEngineeringSlide />
      <CoreEngineSlide />
      <QualityLayersSlide />
      <DevsDaySlide />
      <QuickBuySlide />
      <FoodInsightSlide />
      <SoftwareArchaeologySlide />
      <RoiPatternSlide />
      <PartyModeSlide />
      <BmadTradeoffsSlide />
      <ScaleEcosystemSlide />
      <GetStartedSlide />
      <ClosingSlide />
      <QASlide />
      <ThankYouSlide />
    </Presentation>
  );
}
