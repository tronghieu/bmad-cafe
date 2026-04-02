import Image from "next/image";
import { Icon } from "@/components/presentation-icons";

const experiences = [
  "CIO @ Vtech",
  "Ex-CPO Sabomall",
  "Ex-CTO Agilead Global & CEO Agilearn",
  "Ex-CPO Velacorp",
  "Ex-CTO Alitech",
  "PM VCCorp",
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
          Người làm sản phẩm và công nghệ, quan tâm đến cách AI có thể đi vào quy trình làm việc thực tế.
        </p>

        <div className="proof-cluster speaker-chip-row">
          <div className="proof-chip animate-in">
            <Icon name="proof" className="chip-icon" />
            <span>CIO @ Vtech</span>
          </div>
        </div>

        <ul className="slide-bullets speaker-experience-list">
          {experiences.map((item, index) => (
            <li
              key={item}
              className="animate-in"
              style={{ animationDelay: `${140 + index * 55}ms` }}
            >
              <Icon name="bullet" className="list-icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="speaker-quote animate-in">
          "Chỉ là một người làm sản phẩm công nghệ."
        </p>
      </div>
    </article>
  );
}
