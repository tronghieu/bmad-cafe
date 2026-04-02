import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "editorial",
  kicker: "Phần 2",
  title: "Context Engineering",
  headline: "Đúng ngữ cảnh, đúng bước, đúng phạm vi.",
  summary:
    "Thay vì để AI tự nhớ mọi thứ qua chat, context engineering nạp đúng ngữ cảnh cho đúng bước và đúng phạm vi. Tài liệu giữ quyết định, bước làm thu hẹp nhiệm vụ, và ranh giới công việc giúp đầu ra dễ rà soát hơn.",
  bullets: [
    "Artifact giữ quyết định kỹ thuật ở dạng file có thể rà soát",
    "Mỗi bước chỉ nhận phần ngữ cảnh cần thiết",
    "Vai trò và checkpoint làm rõ trách nhiệm và cách review",
  ],
  proof: ["Đúng ngữ cảnh", "Đúng thời điểm", "Đúng phạm vi"],
});
