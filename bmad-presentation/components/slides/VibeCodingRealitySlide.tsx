import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "case",
  kicker: "Phần 2",
  title: "Làm Theo Cảm Hứng Trong Thực Tế",
  headline: "Prototype nhanh không đồng nghĩa với hệ thống đáng tin.",
  summary: "Ngày đầu nhìn như phép màu. Tới tuần thứ tư, mọi thứ biến thành một chuỗi vá víu khó bàn giao và khó bảo trì.",
  bullets: [
    "Prompt đầu tiên cho kết quả đẹp",
    "Prompt sau bắt đầu chồng patch",
    "Niềm tin vào mã nguồn tụt nhanh hơn tốc độ dựng sản phẩm",
  ],
  proof: ["Hợp để làm mẫu nhanh", "Yếu khi cần bảo trì", "Đắt khi bàn giao"],
  visualLabel: "Ưu tiên artifact thật hoặc mô phỏng lại đúng bối cảnh",
});
