import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "contrast",
  kicker: "Phần 2",
  title: "Khác Biệt Cốt Lõi",
  headline: "Khác biệt nằm ở cách tổ chức và giữ ngữ cảnh.",
  summary:
    "Khác biệt không nằm ở model mạnh hay yếu. Một bên ưu tiên tốc độ tương tác trong session hiện tại; bên kia ưu tiên ngữ cảnh bền vững, task boundary rõ ràng, và khả năng review xuyên suốt.",
  bullets: [
    "Nguồn sự thật: chat history vs artifact/file đầu ra",
    "Cách giữ quyết định: conversation vs tài liệu đầu ra có thể rà soát",
    "Cách chia việc: một session rộng vs các bước có phạm vi hẹp",
  ],
  proof: ["Khác nhau ở cấu trúc", "Khác nhau ở review", "Khác nhau ở repeatability"],
});
