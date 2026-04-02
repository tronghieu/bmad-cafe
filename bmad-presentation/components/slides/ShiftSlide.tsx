import { createSceneSlide } from "@/components/slides/create-scene-slide";
import { ComparisonMatrixBoard } from "@/components/slide-boards";

export default createSceneSlide({
  kind: "contrast",
  kicker: "Phần 2",
  title: "Khi Nào Dùng Gì",
  headline: "Dùng vibe coding để khám phá. Dùng context engineering để vận hành.",
  headlineWidth: "wide",
  summary:
    "Không phải một bên đúng tuyệt đối và bên kia sai tuyệt đối. Vibe coding hợp để khám phá nhanh; context engineering hợp khi công việc cần ổn định, phối hợp, và kiểm soát được.",
  proof: ["Chọn theo loại việc", "Chọn theo phạm vi", "Chọn theo mức rủi ro"],
  visualContent: (
    <ComparisonMatrixBoard
      leftTitle="Vibe Coding"
      rightTitle="Context Engineering"
      rows={[
        {
          label: "Phù hợp nhất",
          left: "Prototype, spike, script ngắn",
          right: "Feature nhiều bước, hệ thống dùng chung",
        },
        {
          label: "Tối ưu cho",
          left: "Tốc độ khám phá",
          right: "Ổn định, review, traceability",
        },
        {
          label: "Không nên kỳ vọng",
          left: "Quyết định bền vững",
          right: "Ceremony nhẹ như chat",
        },
      ]}
    />
  ),
});
