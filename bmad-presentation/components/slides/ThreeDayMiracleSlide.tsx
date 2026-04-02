import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "hero",
  kicker: "Phần 1",
  title: "Ba Ngày",
  headline: "Tốc độ cao chỉ có ý nghĩa khi vẫn giữ được khả năng kiểm soát.",
  summary: "FoodInsight là ví dụ cho việc rút ngắn thời gian triển khai nhưng vẫn giữ được dấu vết và phạm vi rõ ràng.",
  proof: ["29 đầu việc", "~5000 dòng mã", "~20 giờ công người", "~3 ngày"],
  visualLabel: "Hình gợi cảm giác nén thời gian giao hàng",
  image: "/assets/foodinsight-delivery-speed.png",
  imagePriority: true,
});
