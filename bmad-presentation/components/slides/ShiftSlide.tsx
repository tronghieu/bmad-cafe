import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "contrast",
  kicker: "Phần 2",
  title: "Khi Nào Mỗi Cách Phù Hợp",
  headline: "Vibe coding hợp để khám phá nhanh. Context engineering hợp khi công việc cần ổn định, phối hợp, và kiểm soát được.",
  summary: "Không phải một bên đúng tuyệt đối và bên kia sai tuyệt đối. Mỗi cách phù hợp với một loại bài toán và một mức độ rủi ro khác nhau.",
  bullets: [
    "Prototype, spike, script ngắn -> vibe coding",
    "Feature nhiều bước, hệ thống dùng chung -> context engineering",
    "Cần review và traceability -> context engineering",
  ],
  proof: ["Chọn theo loại việc", "Chọn theo phạm vi", "Chọn theo mức rủi ro"],
  visualLabel: "Đối chiếu hai mô hình làm việc và vùng phù hợp của từng bên",
  image: "/assets/prompting-to-orchestration-shift.png",
  imageSize: "large",
  visualVariant: "contrast-shift",
});
