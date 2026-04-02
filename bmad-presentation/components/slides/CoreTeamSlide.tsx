import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "hero",
  kicker: "Phần 4",
  title: "Đội Hình Và Chuyên Biệt Hóa",
  headline: "BMAD chia vai rõ để từng agent làm việc trong phạm vi hẹp hơn.",
  summary:
    "Mỗi vai trò nhận một phần ngữ cảnh nhỏ hơn, trách nhiệm rõ hơn, và tạo ra đầu ra dễ rà soát hơn so với việc dồn mọi thứ vào một agent chung.",
  bullets: [
    "Mary -> Brief",
    "John -> PRD",
    "Winston -> Kiến trúc",
    "Sarah/PO -> Đồng bộ",
    "Bob -> Story",
    "Amelia -> Mã nguồn",
    "Quinn -> QA",
  ],
  proof: ["Bề mặt ngữ cảnh nhỏ hơn", "Trách nhiệm rõ hơn", "Đầu ra dễ rà soát hơn"],
  visualLabel: "Ảnh nhóm với nhãn vai trò đặt chồng lên",
  image: "/assets/core-agent-team.png",
  imageSize: "xlarge",
});
