import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "hero",
  kicker: "Phần 4",
  title: "Đội Hình Cốt Lõi",
  headline: "BMAD không giả làm một siêu AI. Nó dùng một đội ngũ có vai trò rõ ràng.",
  summary: "Một chuỗi bàn giao nơi mỗi agent nhận ngữ cảnh nhỏ hơn và tạo ra đầu ra rõ hơn.",
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
  image: "/assets/slide-11.png",
});
