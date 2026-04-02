import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "editorial",
  kicker: "Phần 6",
  title: "Party Mode",
  headline: "Đây là lúc BMAD thể hiện rõ tinh thần Agentic AI: nhiều agent cùng thảo luận, phản biện, và xây tiếp ý của nhau trong một phiên.",
  summary:
    "BMad Master đóng vai trò điều phối, chọn đúng agent cho câu hỏi đang bàn, quản lý lượt lời, và giữ cuộc thảo luận đi đúng trọng tâm.",
  bullets: [
    "Mạnh nhất cho quyết định có trade-off: kiến trúc, retrospective, brainstorming kỹ thuật",
    "Agent tranh luận theo đúng vai: PM nhìn giá trị, Architect nhìn đánh đổi, Dev nhìn khả năng triển khai, QA nhìn rủi ro",
    "Không nên dùng cho workflow tuần tự hoặc khi cần tạo ra một output artifact sạch ngay lập tức",
  ],
  proof: [
    "Multi-agent collaboration",
    "BMad Master orchestrates",
    "Agents advise, con người quyết định",
  ],
});
