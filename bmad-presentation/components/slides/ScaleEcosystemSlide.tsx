import { createSceneSlide } from "@/components/slides/create-scene-slide";
import { ScaleLadderBoard } from "@/components/slide-boards";

export default createSceneSlide({
  kind: "editorial",
  kicker: "Phần 7",
  title: "Quy Mô Và Mở Rộng",
  headline: "BMAD có nhiều mức áp dụng và lớp mở rộng.",
  headlineWidth: "wide",
  summary:
    "BMAD không phải một gói duy nhất. Có thể chọn mức đầu tư phù hợp theo bài toán, rồi mở rộng thêm khi đội đã nắm phần cốt lõi.",
  proof: ["Chọn theo quy mô", "Chọn theo rủi ro", "Mở rộng theo nhu cầu"],
  visualContent: (
    <ScaleLadderBoard
      levels={[
        { title: "Quick Flow", description: "Cho việc nhỏ, nhịp ngắn, cần vào nhanh.", icon: "rocket", tone: "ember" },
        { title: "BMAD Chuẩn", description: "Cho feature nhiều bước cần review và bàn giao rõ.", icon: "workflow", tone: "sky" },
        { title: "Enterprise", description: "Cho hệ thống cần governance, traceability, và kiểm soát cao.", icon: "shield", tone: "gold" },
      ]}
      addons={[
        { title: "Advanced Elicitation", description: "Đào sâu chất lượng suy nghĩ và chất lượng quyết định.", icon: "lightbulb", tone: "plum" },
        { title: "Expansion Packs / Builder", description: "Mở rộng theo domain khi đội đã nắm phần cốt lõi.", icon: "layers", tone: "sage" },
      ]}
    />
  ),
});
