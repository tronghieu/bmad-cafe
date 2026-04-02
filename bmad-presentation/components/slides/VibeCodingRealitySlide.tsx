import { createSceneSlide } from "@/components/slides/create-scene-slide";
import { FeatureGridBoard } from "@/components/slide-boards";

export default createSceneSlide({
  kind: "editorial",
  kicker: "Phần 2",
  title: "Vibe Coding",
  headline: "Vibe coding dùng chat làm bộ nhớ chính.",
  headlineWidth: "wide",
  summary:
    "Đây là cách làm việc với AI dựa trên đối thoại liên tục. Session chat giữ phần lớn ngữ cảnh, còn quyết định và hướng thực thi sống chủ yếu trong dòng hội thoại.",
  proof: ["Khởi động rất nhanh", "Ít chuẩn bị", "Dựa mạnh vào người điều khiển"],
  visualContent: (
    <FeatureGridBoard
      items={[
        {
          title: "Chat là nguồn nhớ chính",
          description: "Nếu mất lịch sử chat, phần lớn ngữ cảnh cũng mất theo.",
          icon: "chat",
          tone: "ember",
        },
        {
          title: "Một session thường rất rộng",
          description: "Nhiều quyết định, nhiều mục tiêu, nhiều ràng buộc bị dồn vào một luồng.",
          icon: "scope",
          tone: "sky",
        },
        {
          title: "Operator phải steer liên tục",
          description: "Người dùng phải chỉnh hướng liên tiếp để AI không trôi khỏi ý đồ.",
          icon: "branch",
          tone: "gold",
        },
      ]}
    />
  ),
});
