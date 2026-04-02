import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "contrast",
  kicker: "Phần 2",
  title: "Sự Chuyển Dịch",
  headline: "Chuyển từ làm việc theo chuỗi chat sang làm việc theo quy trình có cấu trúc.",
  summary: "Khác biệt nằm ở tài liệu bền vững, vai trò chuyên biệt, và quy trình có thể rà soát được.",
  bullets: [
    "Lịch sử chat mong manh so với tài liệu bền vững",
    "Một trợ lý chung chung so với một đội ngũ chuyên biệt",
    "Ứng biến liên tục so với quy trình lặp lại được",
  ],
  proof: ["Có cấu trúc", "Có phiên bản", "Có thể kiểm tra"],
  visualLabel: "Đối chiếu giữa cách ra lệnh ngẫu hứng và điều phối có phương pháp",
  image: "/assets/prompting-to-orchestration-shift.png",
  visualVariant: "contrast-shift",
});
