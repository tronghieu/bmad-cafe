import { createSceneSlide } from "@/components/slides/create-scene-slide";
import { FeatureGridBoard } from "@/components/slide-boards";

export default createSceneSlide({
  kind: "editorial",
  kicker: "Phần 2",
  title: "Context Engineering",
  headline: "Context engineering nạp đúng ngữ cảnh cho đúng việc.",
  headlineWidth: "wide",
  summary:
    "Thay vì để AI tự nhớ mọi thứ qua chat, context engineering đưa đúng phần ngữ cảnh vào đúng bước. Tài liệu giữ quyết định, bước làm thu hẹp nhiệm vụ, và checkpoint làm rõ trách nhiệm review.",
  proof: ["Đúng ngữ cảnh", "Đúng thời điểm", "Đúng phạm vi"],
  visualContent: (
    <FeatureGridBoard
      items={[
        {
          title: "Artifact giữ quyết định",
          description: "Quyết định kỹ thuật được giữ ở dạng file có thể rà soát lại.",
          icon: "file",
          tone: "ember",
        },
        {
          title: "Mỗi bước chỉ nhận phần cần thiết",
          description: "Ngữ cảnh được nạp vừa đủ theo đúng bước, không đổ cả dự án vào một prompt.",
          icon: "scope",
          tone: "sky",
        },
        {
          title: "Vai trò và checkpoint rõ ràng",
          description: "Ai chịu trách nhiệm gì và review ở đâu đều được chỉ rõ.",
          icon: "shield",
          tone: "gold",
        },
      ]}
    />
  ),
});
