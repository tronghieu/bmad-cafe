import { createSceneSlide } from "@/components/slides/create-scene-slide";

export default createSceneSlide({
  kind: "editorial",
  kicker: "Phần 1",
  title: "Vì Sao Nó Nhanh",
  headline: "Nó rút ngắn khoảng cách giữa ý tưởng và kết quả.",
  summary:
    "Khởi động nhanh, ít chuẩn bị, vòng lặp ngắn. Với prototype, script ngắn, hoặc một thử nghiệm nhỏ, cách này hiệu quả vì gần như không có độ trễ giữa ý tưởng, câu lệnh, và kết quả.",
  bullets: [
    "Bắt đầu gần như ngay lập tức",
    "Dễ thử nhiều hướng trong thời gian ngắn",
    "Phù hợp với tác vụ nhỏ, ngắn hạn, hoặc exploratory work",
  ],
  proof: ["Ít ceremony", "Vòng lặp ngắn", "Rất hợp để khám phá"],
});
