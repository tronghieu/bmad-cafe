import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "systems",
  kicker: "Phần 5",
  title: "Chất Lượng: 4 Lớp Phòng Thủ",
  headline: "BMAD đặt các lớp kiểm tra từ đầu đến cuối, thay vì dồn hết vào cuối quy trình.",
  summary: "Cổng sẵn sàng, rà soát phản biện, TDD kèm kiểm chứng, và khả năng truy vết giúp giảm lỗi và giảm làm lại.",
  bullets: ["Cổng sẵn sàng", "Rà soát phản biện", "TDD + kiểm chứng", "Khả năng truy vết"],
  visualLabel: "Ảnh nền gợi cảm giác nhiều lớp phòng thủ",
  image: "/assets/quality-layered-defense.png",
  visualVariant: "systems-layers",
});
