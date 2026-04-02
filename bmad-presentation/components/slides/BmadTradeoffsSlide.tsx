import { createSceneSlide } from "@/components/slides/create-scene-slide";
import { ProsConsBoard } from "@/components/slide-boards";

export default createSceneSlide({
  kind: "contrast",
  kicker: "Phần 7",
  title: "Ưu Điểm Và Giới Hạn",
  headline: "BMAD mạnh về cấu trúc, nhưng đòi hỏi kỷ luật vận hành.",
  headlineWidth: "wide",
  summary:
    "BMAD mạnh khi cần cấu trúc, review, và khả năng truy vết. Đổi lại, nó đòi hỏi kỷ luật vận hành và không phải lúc nào cũng là lựa chọn nhẹ nhất.",
  proof: ["Mạnh ở cấu trúc", "Đắt hơn khi làm việc quá nhỏ", "Con người vẫn phải chịu trách nhiệm"],
  visualContent: (
    <ProsConsBoard
      pros={[
        { title: "Vai trò rõ", description: "Ai chịu trách nhiệm gì và review ở đâu đều được chỉ rõ.", icon: "team", tone: "ember" },
        { title: "Artifact rõ", description: "Đầu ra dễ kiểm tra, dễ bàn giao, và dễ lặp lại hơn.", icon: "file", tone: "sky" },
      ]}
      cons={[
        { title: "Có đường cong học", description: "Cần thời gian để đội quen với vai trò, bước, và artifact.", icon: "plan", tone: "gold" },
        { title: "Có overhead khi việc quá nhỏ", description: "Nếu scope quá ngắn, ceremony có thể đắt hơn lợi ích.", icon: "wrench", tone: "plum" },
      ]}
    />
  ),
});
