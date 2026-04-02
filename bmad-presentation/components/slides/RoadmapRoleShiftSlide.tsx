import { createSceneSlide } from "@/components/slides/create-scene-slide";
import { WorkflowBoard } from "@/components/slide-boards";

export default createSceneSlide({
  kind: "editorial",
  kicker: "Phần 1",
  title: "Điểm Gãy",
  headline: "Khi phạm vi tăng, chat không còn đủ.",
  headlineWidth: "wide",
  summary:
    "Khi scope phình ra, chat history không còn là bộ nhớ hệ thống đáng tin. Ràng buộc cũ mờ dần, patch tích lũy, và công sức điều hướng tăng nhanh hơn cảm giác tốc độ ban đầu.",
  proof: ["Ngữ cảnh bị trôi", "Bản vá tích lũy", "Thiếu file và tài liệu bền vững"],
  visualContent: (
    <WorkflowBoard
      compact
      steps={[
        {
          title: "Ràng buộc trôi dần",
          description: "Các quyết định đầu phiên không còn hiện diện rõ ở các vòng sau.",
          icon: "chat",
          tone: "ember",
        },
        {
          title: "Patch chồng patch",
          description: "Bản vá mới bắt đầu bẻ cong ý đồ của bản vá cũ.",
          icon: "layers",
          tone: "plum",
        },
        {
          title: "Steering cost tăng",
          description: "Operator dành nhiều thời gian kéo AI về đúng hướng.",
          icon: "branch",
          tone: "sky",
        },
        {
          title: "Tốc độ ròng giảm",
          description: "Nhìn ngoài thì nhanh, nhưng tổng chi phí điều phối ngày càng đắt.",
          icon: "wrench",
          tone: "gold",
        },
      ]}
    />
  ),
});
