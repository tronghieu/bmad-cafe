import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "case",
  kicker: "Phần 2",
  title: "Làm Theo Cảm Hứng",
  headline: "Làm mẫu nhanh không đồng nghĩa với xây được hệ thống ổn định.",
  summary: "Kết quả ban đầu có thể nhanh, nhưng về sau dễ tích lũy vá víu, khó bàn giao, và khó bảo trì.",
  bullets: [
    "Lần đầu cho kết quả nhanh",
    "Các lần sau bắt đầu chồng thêm vá víu",
    "Niềm tin vào mã nguồn giảm khi thay đổi tăng lên",
  ],
  proof: ["Hợp để làm mẫu nhanh", "Yếu khi cần bảo trì", "Đắt khi bàn giao"],
  visualLabel: "Ưu tiên artifact thật hoặc mô phỏng lại đúng bối cảnh",
});
