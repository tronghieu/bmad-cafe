import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "editorial",
  kicker: "Phần 2",
  title: "Vibe Coding",
  headline: "Làm việc với AI qua đối thoại liên tục, gần như không dựng sẵn cấu trúc.",
  summary:
    "Đây là cách làm việc với AI dựa trên đối thoại liên tục. Session chat trở thành nơi giữ ngữ cảnh chính, còn quyết định, ràng buộc, và hướng thực thi chủ yếu nằm trong dòng hội thoại đang diễn ra.",
  bullets: [
    "Nguồn ngữ cảnh chính là chat history",
    "Phạm vi một session thường rộng và linh hoạt",
    "Operator phải liên tục điều hướng để giữ AI đi đúng hướng",
  ],
  proof: ["Khởi động rất nhanh", "Ít chuẩn bị", "Dựa mạnh vào người điều khiển"],
});
