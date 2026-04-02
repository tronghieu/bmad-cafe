import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "contrast",
  kicker: "Phần 7",
  title: "Ưu Điểm Và Giới Hạn",
  headline: "BMAD mạnh về cấu trúc, nhưng đòi hỏi kỷ luật vận hành.",
  summary:
    "BMAD mạnh khi cần cấu trúc, review, và khả năng truy vết. Đổi lại, nó đòi hỏi kỷ luật vận hành và không phải lúc nào cũng là lựa chọn nhẹ nhất.",
  bullets: [
    "Ưu điểm: vai trò rõ, tài liệu rõ, ngữ cảnh rõ, review rõ",
    "Ưu điểm: đầu ra dễ kiểm tra, dễ bàn giao, và dễ lặp lại hơn",
    "Giới hạn: cần thời gian học, cần người điều phối tốt, và có overhead nếu bài toán quá nhỏ",
    "Giới hạn: các phiên dài vẫn có thể bão hòa ngữ cảnh nếu vận hành không kỷ luật",
  ],
  proof: ["Mạnh ở cấu trúc", "Đắt hơn khi làm việc quá nhỏ", "Con người vẫn phải chịu trách nhiệm"],
});
