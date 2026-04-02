import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "contrast",
  kicker: "Phần 5",
  title: "Mở Rộng",
  headline: "BMAD còn có các lớp mở rộng sau phần cốt lõi.",
  summary:
    "Slide này không nói về luồng chính. Nó giới thiệu các extension dùng sau khi đã nắm phần cốt lõi, để đào sâu tư duy, mở rộng theo domain, hoặc dựng thêm agent riêng.",
  bullets: [
    "Advanced Elicitation: đào sâu chất lượng suy nghĩ và phản biện",
    "Expansion Packs: thêm đội ngũ chuyên biệt theo domain",
    "BMad Builder: tạo agent hoặc workflow riêng cho bối cảnh của đội",
    "Party Mode là một extension nổi bật nên được tách thành một slide riêng",
  ],
  proof: ["Không thay quy trình cốt lõi", "Dùng khi đã nắm nền tảng", "Mở rộng theo nhu cầu"],
});
