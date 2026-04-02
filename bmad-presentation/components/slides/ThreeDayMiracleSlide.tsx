import { createSceneSlide } from "@/components/slides/create-scene-slide";
import { FeatureGridBoard } from "@/components/slide-boards";

export default createSceneSlide({
  kind: "editorial",
  kicker: "Phần 1",
  title: "Vì Sao Nó Nhanh",
  headline: "Ý tưởng đi thẳng thành kết quả.",
  summary:
    "Vibe coding hấp dẫn vì gần như không có độ trễ giữa ý tưởng, câu lệnh, và kết quả. Nó đặc biệt hợp cho prototype, script ngắn, và exploratory work.",
  proof: ["Ít ceremony", "Vòng lặp ngắn", "Rất hợp để khám phá"],
  visualContent: (
    <FeatureGridBoard
      items={[
        {
          title: "Bắt đầu gần như ngay lập tức",
          description: "Không cần dựng nhiều cấu trúc trước khi thử ý tưởng đầu tiên.",
          icon: "rocket",
          tone: "ember",
        },
        {
          title: "Dễ thử nhiều hướng",
          description: "Có thể đổi prompt, đổi hướng giải quyết, rồi xem phản hồi ngay.",
          icon: "shuffle",
          tone: "sky",
        },
        {
          title: "Hợp với việc khám phá",
          description: "Prototype, spike, script ngắn, hoặc test nhanh một giả thuyết.",
          icon: "lightbulb",
          tone: "gold",
        },
      ]}
    />
  ),
});
