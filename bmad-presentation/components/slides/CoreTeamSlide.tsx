import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "hero",
  kicker: "Phần 4",
  title: "Đội Hình Cốt Lõi",
  headline: "BMAD dùng nhiều vai trò chuyên biệt thay vì dồn mọi việc vào một agent chung.",
  summary: "Mỗi vai trò nhận phạm vi nhỏ hơn, tài liệu rõ hơn, và tạo ra đầu ra dễ rà soát hơn.",
  bullets: [
    "Mary -> Brief",
    "John -> PRD",
    "Winston -> Kiến trúc",
    "Sarah/PO -> Đồng bộ",
    "Bob -> Story",
    "Amelia -> Mã nguồn",
    "Quinn -> QA",
  ],
  visualLabel: "Ảnh nhóm với nhãn vai trò đặt chồng lên",
  image: "/assets/core-agent-team.png",
});
