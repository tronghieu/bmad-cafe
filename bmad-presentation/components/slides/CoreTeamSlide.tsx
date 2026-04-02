import { createSceneSlide } from "@/components/slides/create-scene-slide";
import { AgentTeamBoard } from "@/components/slide-boards";

export default createSceneSlide({
  kind: "hero",
  kicker: "Phần 4",
  title: "Đội Hình Và Chuyên Biệt Hóa",
  headline: "BMAD chia vai rõ để từng agent làm việc trong phạm vi hẹp hơn.",
  headlineWidth: "wide",
  summary:
    "Mỗi vai trò nhận một phần ngữ cảnh nhỏ hơn, trách nhiệm rõ hơn, và tạo ra đầu ra dễ rà soát hơn so với việc dồn mọi thứ vào một agent chung.",
  proof: ["Bề mặt ngữ cảnh nhỏ hơn", "Trách nhiệm rõ hơn", "Đầu ra dễ rà soát hơn"],
  visualContent: (
    <AgentTeamBoard
      items={[
        { title: "Mary", kicker: "Brief", description: "Làm rõ vấn đề và mục tiêu trước khi đi tiếp.", icon: "target", tone: "ember" },
        { title: "John", kicker: "PRD", description: "Chuyển nhu cầu thành yêu cầu có thể bàn giao.", icon: "plan", tone: "sage" },
        { title: "Winston", kicker: "Kiến trúc", description: "Giữ trade-off kỹ thuật và khung giải pháp.", icon: "layers", tone: "sky" },
        { title: "Bob", kicker: "Story", description: "Tách công việc thành đầu việc đủ nhỏ để triển khai.", icon: "workflow", tone: "gold" },
        { title: "Amelia", kicker: "Mã nguồn", description: "Triển khai trong ranh giới đã được chuẩn bị sẵn.", icon: "code", tone: "plum" },
        { title: "Quinn", kicker: "QA", description: "Kiểm chứng đầu ra và bằng chứng review.", icon: "shield", tone: "ember" },
      ]}
    />
  ),
});
