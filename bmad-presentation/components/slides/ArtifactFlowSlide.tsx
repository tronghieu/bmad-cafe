import { createSceneSlide } from "@/components/slides/create-scene-slide";
import { WorkflowBoard } from "@/components/slide-boards";

export default createSceneSlide({
  kind: "systems",
  kicker: "Phần 5",
  title: "Dòng Chảy Tài Liệu",
  headline: "Ngữ cảnh được chuyền qua tài liệu, không nhốt trong một phiên chat.",
  headlineWidth: "wide",
  summary:
    "BMAD không kỳ vọng một phiên AI giữ hết mọi quyết định từ đầu đến cuối. Tài liệu đi trước mã nguồn, và chuỗi bàn giao vận hành qua Brief, PRD, Kiến trúc, Story, Mã nguồn, rồi QA.",
  proof: [
    "project-brief.md",
    "PRD.md",
    "architecture.md",
    "các file đầu việc",
    "kiểm thử",
    "minh chứng rà soát",
  ],
  visualContent: (
    <WorkflowBoard
      compact
      steps={[
        { title: "Brief", description: "Khóa mục tiêu và phạm vi công việc.", icon: "target", tone: "ember" },
        { title: "PRD", description: "Biến mục tiêu thành yêu cầu có thể giao việc.", icon: "plan", tone: "sage" },
        { title: "Kiến trúc", description: "Ghi trade-off và ranh giới giải pháp.", icon: "layers", tone: "sky" },
        { title: "Story", description: "Tách thành đầu việc đủ nhỏ để thực thi.", icon: "workflow", tone: "gold" },
        { title: "Mã nguồn", description: "Triển khai trong khung đã định sẵn.", icon: "code", tone: "plum" },
        { title: "QA", description: "Kiểm chứng và giữ bằng chứng review.", icon: "shield", tone: "ember" },
      ]}
    />
  ),
});
