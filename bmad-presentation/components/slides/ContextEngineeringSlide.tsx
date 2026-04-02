import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "systems",
  kicker: "Phần 5",
  title: "Kỹ Thuật Tổ Chức Ngữ Cảnh",
  headline: "BMAD quản lý ngữ cảnh có chủ đích.",
  summary: "Kiến trúc theo từng bước, nạp đúng ngữ cảnh cần dùng, và chia tài liệu khi cần giúp ngữ cảnh nhỏ hơn, sạch hơn, và an toàn hơn.",
  bullets: [
    "Nạp ngữ cảnh đúng lúc",
    "Bộ ngữ cảnh nhỏ hơn và an toàn hơn",
    "Chia nhỏ tài liệu khi cần",
  ],
  visualLabel: "Ảnh ẩn dụ đi kèm sơ đồ giải thích trực diện",
  image: "/assets/context-engineering-shards.png",
  imageSize: "large",
  visualVariant: "systems-context",
});
