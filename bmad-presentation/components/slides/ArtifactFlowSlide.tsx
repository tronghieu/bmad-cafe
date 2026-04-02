import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "systems",
  kicker: "Phần 5",
  title: "Dòng Chảy Tài Liệu",
  headline: "Trong BMAD, tài liệu đi trước mã nguồn.",
  summary: "Brief, PRD, kiến trúc, đầu việc, và kiểm thử tạo nền cho bước triển khai.",
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
  visualVariant: "systems-flow",
});
