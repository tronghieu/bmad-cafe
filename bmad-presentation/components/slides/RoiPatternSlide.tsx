import { createSceneSlide } from "@/components/slides/create-scene-slide";
import { KPIGridBoard } from "@/components/slide-boards";

export default createSceneSlide({
  kind: "case",
  kicker: "Phần 6",
  title: "Mẫu Số Chung",
  headline: "Ba ca thực tế cho thấy cùng một xu hướng.",
  summary:
    "Xu hướng lặp lại giữa ba ca là: thông lượng cao hơn, làm lại ít hơn, ramp-up nhanh hơn, và chất lượng bàn giao ổn định hơn.",
  visualContent: (
    <KPIGridBoard
      items={[
        { title: "Thông lượng cao hơn", description: "Nhiều đầu việc được chốt hơn trong cùng một nhịp làm việc.", icon: "rocket", tone: "ember" },
        { title: "Làm lại ít hơn", description: "Quyết định được kiểm tra sớm nên giảm số vòng sửa muộn.", icon: "review", tone: "sage" },
        { title: "Ramp-up nhanh hơn", description: "Người mới bám vào artifact nên vào việc dễ hơn.", icon: "users", tone: "sky" },
        { title: "Niềm tin giao hàng tốt hơn", description: "Đầu ra đi kèm bằng chứng và traceability rõ hơn.", icon: "shield", tone: "gold" },
      ]}
    />
  ),
});
