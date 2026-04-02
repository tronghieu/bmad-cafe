import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "systems",
  kicker: "Phần 5",
  title: "Vòng Lặp C.O.R.E.",
  headline: "BMAD buộc quá trình làm việc phải có bước đề xuất, phản biện, và tinh chỉnh.",
  summary: "Đề xuất -> phản biện -> tinh chỉnh là vòng lặp giúp giảm trả lời vội và tăng kiểm tra chéo.",
  proof: ["Đề xuất", "Phản biện", "Tinh chỉnh"],
  visualLabel: "Ảnh trừu tượng hỗ trợ cho vòng chữ và sơ đồ nhịp lặp",
  image: "/assets/core-reflection-loop.png",
  visualVariant: "systems-core",
});
