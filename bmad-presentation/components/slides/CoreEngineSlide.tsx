import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "systems",
  kicker: "Phần 5",
  title: "Vòng Lặp C.O.R.E.",
  headline: "Đề xuất, phản biện, rồi tinh chỉnh.",
  summary:
    "Đề xuất -> phản biện -> tinh chỉnh là vòng lặp cốt lõi của BMAD. Nó giúp giảm trả lời vội và tăng kiểm tra chéo trước khi đi tiếp.",
  proof: ["Đề xuất", "Phản biện", "Tinh chỉnh"],
  visualLabel: "Ảnh trừu tượng hỗ trợ cho vòng chữ và sơ đồ nhịp lặp",
  image: "/assets/core-reflection-loop.png",
  imageSize: "large",
  visualVariant: "systems-core",
});
