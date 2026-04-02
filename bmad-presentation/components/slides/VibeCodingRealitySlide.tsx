import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "editorial",
  kicker: "Phần 2",
  title: "Vibe Coding Là Gì",
  headline: "Đây là cách làm việc với AI dựa trên đối thoại liên tục, với rất ít cấu trúc được dựng sẵn từ đầu.",
  summary: "Session chat trở thành nơi giữ ngữ cảnh chính. Quyết định, ràng buộc, và hướng thực thi chủ yếu được giữ bằng dòng hội thoại đang diễn ra.",
  bullets: [
    "Nguồn ngữ cảnh chính là chat history",
    "Phạm vi một session thường rộng và linh hoạt",
    "Operator phải liên tục điều hướng để giữ AI đi đúng hướng",
  ],
  proof: ["Khởi động rất nhanh", "Ít chuẩn bị", "Dựa mạnh vào người điều khiển"],
});
