import { createSceneSlide } from "@/components/slides/create-scene-slide";
import { FeatureGridBoard } from "@/components/slide-boards";

export default createSceneSlide({
  kind: "editorial",
  kicker: "Phần 3",
  title: "BMAD Là Gì",
  headline: "BMAD tổ chức làm việc với AI bằng vai trò, artifact, và kiểm soát.",
  headlineWidth: "wide",
  summary:
    "BMAD tổ chức công việc với AI theo vai trò, artifact rõ ràng cho từng bước, checkpoint kiểm soát, khả năng truy vết, và một vòng đời đủ chặt để review được.",
  proof: ["Vai trò rõ ràng", "Tài liệu rõ ràng", "Con người giữ quyền quyết định"],
  visualContent: (
    <FeatureGridBoard
      items={[
        {
          title: "Agent chuyên biệt",
          description: "Mỗi vai trò giữ một phạm vi hẹp hơn và đầu ra cụ thể hơn.",
          icon: "team",
          tone: "ember",
        },
        {
          title: "Vòng đời bốn giai đoạn",
          description: "Phân tích, kế hoạch, giải pháp, triển khai được tách rõ.",
          icon: "workflow",
          tone: "sage",
        },
        {
          title: "Artifact cho từng bước",
          description: "Quyết định không bị nhốt trong một phiên chat duy nhất.",
          icon: "file",
          tone: "sky",
        },
        {
          title: "Kỹ thuật tổ chức ngữ cảnh",
          description: "Nạp đúng phần ngữ cảnh, đúng lúc, đúng phạm vi.",
          icon: "layers",
          tone: "gold",
        },
        {
          title: "Phản biện và kiểm soát",
          description: "Con người giữ quyền duyệt trade-off và kiểm chứng đầu ra.",
          icon: "review",
          tone: "plum",
        },
      ]}
    />
  ),
});
