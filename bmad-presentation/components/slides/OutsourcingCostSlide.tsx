import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "contrast",
  kicker: "Phần 2",
  title: "So Sánh Tổng Quan",
  headline: "Khác biệt lớn nhất không nằm ở model mạnh hay yếu, mà nằm ở cách ngữ cảnh được tổ chức và giữ lại.",
  summary: "Một bên ưu tiên tốc độ tương tác trong session hiện tại. Bên kia ưu tiên ngữ cảnh bền vững, task boundary rõ ràng, và khả năng review xuyên suốt.",
  bullets: [
    "Nguồn sự thật: chat history vs artifacts",
    "Cách giữ quyết định: conversation vs tài liệu và file",
    "Cách chia việc: một session rộng vs các bước có phạm vi hẹp",
  ],
  proof: ["Khác nhau ở cấu trúc", "Khác nhau ở review", "Khác nhau ở repeatability"],
});
