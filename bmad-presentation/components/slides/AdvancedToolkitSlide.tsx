import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "contrast",
  kicker: "Phần 5",
  title: "Bộ Công Cụ Mở Rộng",
  headline: "Sau khi nắm được quy trình cốt lõi, BMAD còn có thêm các lớp mở rộng để tăng chiều sâu và khả năng tùy biến.",
  summary:
    "Slide này không nói về luồng chính. Nó chỉ giới thiệu các extension giúp đào sâu tư duy, mở rộng theo domain, hoặc dựng thêm agent riêng.",
  bullets: [
    "Advanced Elicitation: đào sâu chất lượng suy nghĩ và phản biện",
    "Expansion Packs: thêm đội ngũ chuyên biệt theo domain",
    "BMad Builder: tạo agent hoặc workflow riêng cho bối cảnh của đội",
    "Party Mode là một extension nổi bật nên được tách thành một slide riêng",
  ],
  proof: ["Không thay quy trình cốt lõi", "Dùng khi đã nắm nền tảng", "Mở rộng theo nhu cầu"],
});
