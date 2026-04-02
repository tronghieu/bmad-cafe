import { createSceneSlide } from "@/components/slides/create-scene-slide";
import { WorkflowBoard } from "@/components/slide-boards";

export default createSceneSlide({
  kind: "editorial",
  kicker: "Phần 5",
  title: "Nhịp Làm Việc Hằng Ngày",
  headline: "BMAD đi được vào nhịp làm việc hằng ngày.",
  summary:
    "Story -> nạp đúng ngữ cảnh -> triển khai -> kiểm thử -> QA -> commit. Điều quan trọng là các bước kiểm tra được đặt ngay trong quy trình làm việc hằng ngày.",
  visualContent: (
    <WorkflowBoard
      compact
      steps={[
        { title: "Chọn story", description: "Bắt đầu từ đầu việc đủ nhỏ để giao và review.", icon: "checklist", tone: "ember" },
        { title: "Nạp đúng ngữ cảnh", description: "Chỉ đưa vào phần tài liệu cần cho bước hiện tại.", icon: "layers", tone: "sky" },
        { title: "Triển khai với rào chắn", description: "Code trong khung giải pháp và tiêu chí đã định.", icon: "code", tone: "gold" },
        { title: "Kiểm chứng rồi commit", description: "Giữ kiểm thử, QA, và bằng chứng đi cùng thay đổi.", icon: "branch", tone: "plum" },
      ]}
    />
  ),
});
