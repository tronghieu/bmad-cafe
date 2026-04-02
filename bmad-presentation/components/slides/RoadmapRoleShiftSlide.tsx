import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "editorial",
  kicker: "Phần 1",
  title: "Điểm Gãy",
  headline: "Khi phạm vi tăng, chat history không còn đủ.",
  summary:
    "Khi phạm vi phình ra, chat history không còn là bộ nhớ hệ thống đáng tin. Bản vá chồng lên bản vá, ràng buộc cũ mờ dần, và công sức điều hướng AI tăng lên nhanh hơn cảm giác tốc độ ban đầu.",
  bullets: [
    "Ràng buộc cũ biến mất dần theo chiều dài hội thoại",
    "Bản vá sau bắt đầu bẻ cong ý đồ của bản vá trước",
    "Chi phí điều hướng AI có lúc lớn hơn tự triển khai",
  ],
  proof: ["Ngữ cảnh bị trôi", "Bản vá tích lũy", "Thiếu file và tài liệu bền vững"],
});
