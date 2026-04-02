import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "hero",
  kicker: "Phần 1",
  title: "Cú Mở Đầu",
  headline: "Vấn đề không phải AI viết code. Vấn đề là code không có cấu trúc.",
  headlineWidth: "wide",
  summary: "Một nền mã nguồn rối, khó tin, khó bảo trì. Vấn đề không nằm ở AI, mà nằm ở việc thiếu phương pháp.",
  proof: ["Logic rối", "Patch chồng patch", "Không có cấu trúc đáng tin"],
  image: "/assets/cold-open-code-chaos.png",
  imagePriority: true,
  imageSize: "large",
});
