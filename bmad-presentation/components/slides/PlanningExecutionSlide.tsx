import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "systems",
  kicker: "Phần 4",
  title: "Bàn Giao Qua Artifact",
  headline: "Ngữ cảnh được chuyển qua tài liệu, không bị nhốt trong một phiên chat.",
  summary:
    "BMAD không kỳ vọng một phiên AI giữ hết mọi quyết định từ đầu đến cuối. Tài liệu đi trước mã nguồn, và chuỗi bàn giao vận hành qua Brief -> PRD -> Kiến trúc -> Story -> Mã nguồn -> Minh chứng QA.",
  proof: [
    "project-brief.md",
    "PRD.md",
    "architecture.md",
    "các file đầu việc",
    "kiểm thử",
    "minh chứng rà soát",
  ],
  visualLabel: "Ưu tiên sơ đồ ở phía trước, ảnh nền chỉ hỗ trợ",
  image: "/assets/artifact-flow-pipeline.png",
  imageSize: "xlarge",
  visualVariant: "systems-flow",
});
