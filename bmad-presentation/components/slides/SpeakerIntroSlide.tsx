import Image from "next/image";
import { Icon } from "@/components/presentation-icons";
import { SpeakerHighlightsBoard, type BoardItem } from "@/components/slide-boards";

const highlights: BoardItem[] = [
  {
    title: "Leadership",
    description: "CIO tại Vtech, dẫn dắt sản phẩm và công nghệ ở môi trường vận hành thực tế.",
    icon: "team" as const,
    tone: "ember" as const,
  },
  {
    title: "Product",
    description: "Từng giữ vai trò CPO tại Sabomall và Velacorp, bám bài toán từ giá trị đến delivery.",
    icon: "target" as const,
    tone: "sky" as const,
  },
  {
    title: "Technology",
    description: "Ex-CTO tại Agilead Global và Alitech, quan tâm đến kiến trúc, team, và chất lượng thực thi.",
    icon: "code" as const,
    tone: "gold" as const,
  },
  {
    title: "Transformation",
    description: "Theo đuổi cách AI đi vào quy trình làm việc có cấu trúc thay vì chỉ tạo hiệu ứng demo.",
    icon: "workflow" as const,
    tone: "plum" as const,
  },
];

export default function SpeakerIntroSlide() {
  return (
    <article className="slide-sheet speaker-slide">
      <div className="slide-column speaker-visual-col">
        <div className="speaker-portrait-wrap animate-visual">
          <div className="speaker-portrait-glow" />
          <div className="speaker-portrait-frame">
            <Image
              src="/assets/luu-hieu.png"
              alt="Lưu Trọng Hiếu"
              fill
              priority
              sizes="(max-width: 1024px) 320px, 420px"
              className="speaker-portrait-image"
            />
          </div>
          <div className="speaker-float-badge">
            <Icon name="proof" className="speaker-float-icon" />
          </div>
        </div>
      </div>

      <div className="slide-column slide-column-copy speaker-copy-col">
        <div className="sheet-header animate-in">
          <p className="sheet-kicker">
            <Icon name="spark" className="meta-icon" />
            <span>Giới thiệu diễn giả</span>
          </p>
          <p className="sheet-title">
            <Icon name="count" className="meta-icon" />
            <span>Lưu Trọng Hiếu</span>
          </p>
        </div>

        <h2 className="slide-headline animate-in">Lưu Trọng Hiếu</h2>
        <p className="slide-summary animate-in speaker-role">
          Người làm sản phẩm và công nghệ, tập trung vào cách AI đi vào quy trình làm việc thực tế thay vì dừng ở mức demo.
        </p>

        <div className="proof-cluster speaker-chip-row">
          <div className="proof-chip animate-in">
            <Icon name="proof" className="chip-icon" />
            <span>CIO @ Vtech</span>
          </div>
          <div className="proof-chip animate-in">
            <Icon name="target" className="chip-icon" />
            <span>Product + Technology</span>
          </div>
        </div>

        <SpeakerHighlightsBoard items={highlights} />
      </div>
    </article>
  );
}
