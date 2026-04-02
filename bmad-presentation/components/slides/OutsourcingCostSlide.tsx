import { createSceneSlide } from "@/components/slides/create-scene-slide";
import { ComparisonMatrixBoard } from "@/components/slide-boards";

export default createSceneSlide({
  kind: "contrast",
  kicker: "Phần 2",
  title: "Khác Biệt Cốt Lõi",
  headline: "Khác biệt nằm ở cách giữ ngữ cảnh thành hệ thống.",
  summary:
    "Khác biệt không nằm ở model mạnh hay yếu. Một bên ưu tiên tốc độ tương tác trong session hiện tại; bên kia ưu tiên ngữ cảnh bền vững, task boundary rõ ràng, và khả năng review xuyên suốt.",
  proof: ["Khác nhau ở cấu trúc", "Khác nhau ở review", "Khác nhau ở repeatability"],
  visualContent: (
    <ComparisonMatrixBoard
      leftTitle="Vibe Coding"
      rightTitle="Context Engineering"
      rows={[
        {
          label: "Source of truth",
          left: "Chat history",
          right: "Artifact / file đầu ra",
        },
        {
          label: "Decision memory",
          left: "Conversation tạm thời",
          right: "Tài liệu có thể rà soát",
        },
        {
          label: "Task boundary",
          left: "Một session rộng",
          right: "Nhiều bước có phạm vi hẹp",
        },
        {
          label: "Reviewability",
          left: "Khó kiểm tra xuyên suốt",
          right: "Dễ review và lặp lại",
        },
      ]}
    />
  ),
});
