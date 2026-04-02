import { createSceneSlide } from "@/components/slides/create-scene-slide";
import { PartyModeBoard } from "@/components/slide-boards";

export default createSceneSlide({
  kind: "editorial",
  kicker: "Phần 6",
  title: "Party Mode",
  headline: "Nhiều agent cùng thảo luận dưới một điều phối chung.",
  headlineWidth: "wide",
  summary:
    "Đây là dạng cộng tác nhiều agent trong một phiên. BMad Master đóng vai trò điều phối, chọn đúng agent cho câu hỏi đang bàn, quản lý lượt lời, và giữ cuộc thảo luận đi đúng trọng tâm.",
  proof: ["Multi-agent collaboration", "BMad Master orchestrates", "Con người quyết định"],
  visualContent: (
    <PartyModeBoard
      center="BMad Master"
      roles={[
        { title: "PM", description: "Nhìn giá trị và phạm vi.", icon: "target", tone: "ember" },
        { title: "Architect", description: "Nhìn trade-off và cấu trúc.", icon: "layers", tone: "sky" },
        { title: "Dev", description: "Nhìn khả năng triển khai.", icon: "code", tone: "gold" },
        { title: "QA", description: "Nhìn rủi ro và kiểm chứng.", icon: "shield", tone: "plum" },
      ]}
      useCases={[
        "Quyết định có trade-off",
        "Retrospective kỹ thuật",
        "Brainstorming kiến trúc",
      ]}
      avoidCases={[
        "Workflow tuần tự cần đầu ra sạch ngay",
        "Các bước chỉ cần một người thực thi",
      ]}
    />
  ),
});
