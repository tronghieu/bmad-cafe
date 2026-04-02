import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "systems",
  kicker: "Phần 4",
  title: "Bàn Giao Ngữ Cảnh",
  headline: "Ngữ cảnh được chuyển qua tài liệu và điểm bàn giao.",
  summary:
    "BMAD không kỳ vọng một phiên AI giữ hết mọi quyết định từ đầu đến cuối. Ngữ cảnh được chuyển qua chuỗi bàn giao: Brief -> PRD -> Kiến trúc -> Story -> Mã nguồn -> Minh chứng QA.",
  proof: ["Brief", "PRD", "Kiến trúc", "Story", "Mã nguồn", "QA"],
});
