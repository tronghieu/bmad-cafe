import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "contrast",
  kicker: "Phần 2",
  title: "Ba Kẻ Giết Dự Án",
  headline: "Ba lỗi này thường xuất hiện cùng nhau khi quy trình không kiểm soát được ngữ cảnh và quyết định kỹ thuật.",
  summary: "Chúng không phải lỗi riêng lẻ, mà là hệ quả của cùng một cách làm việc thiếu cấu trúc.",
  bullets: [
    "Lệch ngữ cảnh: AI quên các ràng buộc trước đó",
    "Nợ ảo giác: giả định sai tích lũy thành nợ kỹ thuật",
    "Không có kiến trúc: sửa chỗ này đổ chỗ khác",
  ],
  proof: ["Bỏ quên ràng buộc", "Bịa ra logic", "Các bản vá va vào nhau"],
  visualVariant: "contrast-killers",
});
