import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "hero",
  kicker: "Phần 1",
  title: "Cú Mở Đầu",
  headline: "Mã do AI tạo ra không phải vấn đề. Vấn đề là mã do AI tạo ra nhưng không có cấu trúc.",
  summary: "Một nền mã nguồn rối, khó tin, khó bảo trì. Vấn đề không nằm ở AI, mà nằm ở việc thiếu phương pháp.",
  proof: ["Logic rối", "Hành vi trùng lặp", "Không có cấu trúc đáng tin"],
  visualLabel: "Hỗn loạn trong mã nguồn như một tín hiệu cảnh báo",
  image: "/assets/cold-open-code-chaos.png",
  imagePriority: true,
});
