import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "systems",
  kicker: "Phần 5",
  title: "Dòng Chảy Tài Liệu",
  headline: "BMAD là một hệ tạo tài liệu trước khi trở thành hệ viết mã.",
  summary: "Tài liệu đi trước mã nguồn: brief, PRD, kiến trúc, đầu việc, kiểm thử, rồi mới tới triển khai.",
  proof: [
    "project-brief.md",
    "PRD.md",
    "architecture.md",
    "các file đầu việc",
    "kiểm thử",
    "minh chứng rà soát",
  ],
  visualLabel: "Ưu tiên sơ đồ ở phía trước, ảnh nền chỉ hỗ trợ",
  image: "/assets/slide-15.png",
  visualVariant: "systems-flow",
});
