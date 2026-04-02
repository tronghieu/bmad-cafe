import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "contrast",
  kicker: "Phần 2",
  title: "Tác Động Trong Outsourcing",
  headline: "Khi quy trình thiếu cấu trúc, tác động không chỉ nằm ở mã nguồn mà còn ở chi phí vận hành.",
  summary: "Làm lại, tăng ca, vào việc chậm, và bàn giao kém chất lượng đều ảnh hưởng trực tiếp đến biên lợi nhuận và niềm tin.",
  bullets: [
    "Làm lại khiến estimate mất giá trị",
    "Bàn giao đầy lỗi khiến đội vận hành khổ sở",
    "Thiếu tài liệu khiến việc vào đội cực kỳ chậm",
  ],
  proof: ["Biên lợi nhuận thấp hơn", "Vào việc chậm hơn", "Khách hàng kém tin tưởng"],
});
