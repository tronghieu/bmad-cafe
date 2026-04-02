import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "contrast",
  kicker: "Phần 2",
  title: "Ba Kẻ Giết Dự Án",
  headline: "Ba failure mode này không ngẫu nhiên. Chúng là hệ quả cấu trúc.",
  summary: "BMAD không bắt đầu bằng giải pháp. Nó bắt đầu bằng việc gọi tên đúng bệnh.",
  bullets: [
    "Lệch ngữ cảnh: AI quên các ràng buộc trước đó",
    "Nợ ảo giác: giả định sai tích lũy thành nợ kỹ thuật",
    "Không có kiến trúc: sửa chỗ này đổ chỗ khác",
  ],
  proof: ["Bỏ quên ràng buộc", "Bịa ra logic", "Các bản vá va vào nhau"],
  visualVariant: "contrast-killers",
});
