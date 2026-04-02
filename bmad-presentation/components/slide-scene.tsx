import Image from "next/image";
import type { ReactNode } from "react";
import { getKindIcon, Icon } from "@/components/presentation-icons";

export type SlideSceneKind =
  | "section"
  | "hero"
  | "editorial"
  | "contrast"
  | "systems"
  | "case"
  | "closing";

export type SlideVisualVariant =
  | "default"
  | "contrast-killers"
  | "contrast-shift"
  | "contrast-specialization"
  | "systems-phases"
  | "systems-flow"
  | "systems-context"
  | "systems-core"
  | "systems-layers";

export type SlideSceneProps = {
  kind: SlideSceneKind;
  kicker: string;
  title: string;
  headline: string;
  summary: string;
  bullets?: string[];
  proof?: string[];
  image?: string;
  imagePriority?: boolean;
  visualLabel?: string;
  hideVisual?: boolean;
  visualVariant?: SlideVisualVariant;
  children?: ReactNode;
};

export function SlideScene({
  kind,
  kicker,
  title,
  headline,
  summary,
  bullets,
  proof,
  image,
  imagePriority,
  visualLabel,
  hideVisual,
  visualVariant = "default",
}: SlideSceneProps) {
  const hasVisual =
    !hideVisual &&
    kind !== "section" &&
    kind !== "closing" &&
    (Boolean(image) || visualVariant !== "default");

  return (
    <article className={`slide-sheet kind-${kind} ${hasVisual ? "" : "is-visual-hidden"}`}>
      <div className="slide-column slide-column-copy">
        <div className="sheet-header animate-in">
          <p className="sheet-kicker">
            <Icon name={getKindIcon(kind)} className="meta-icon" />
            <span>{kicker}</span>
          </p>
          <p className="sheet-title">
            <Icon name="spark" className="meta-icon" />
            <span>{title}</span>
          </p>
        </div>

        <h2 className="slide-headline animate-in">{headline}</h2>
        <p className="slide-summary animate-in">{summary}</p>

        {bullets?.length ? (
          <ul className="slide-bullets">
            {bullets.map((bullet, index) => (
              <li
                key={bullet}
                className="animate-in"
                style={{ animationDelay: `${120 + index * 70}ms` }}
              >
                <Icon name="bullet" className="list-icon" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {proof?.length ? (
          <div className="proof-cluster">
            {proof.map((item, index) => (
              <div
                key={item}
                className="proof-chip animate-in"
                style={{ animationDelay: `${180 + index * 55}ms` }}
              >
                <Icon name="proof" className="chip-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {hasVisual ? (
        <div className="slide-column slide-column-visual animate-visual">
          <SlideVisual
            image={image}
            title={title}
            kind={kind}
            visualLabel={visualLabel}
            visualVariant={visualVariant}
            imagePriority={imagePriority}
          />
        </div>
      ) : null}
    </article>
  );
}

function SlideVisual({
  image,
  title,
  kind,
  visualLabel,
  visualVariant,
  imagePriority,
}: {
  image?: string;
  title: string;
  kind: SlideSceneKind;
  visualLabel?: string;
  visualVariant: SlideVisualVariant;
  imagePriority?: boolean;
}) {
  if (kind === "section" || kind === "closing") {
    return null;
  }

  if (visualVariant === "contrast-killers" || visualVariant === "contrast-shift" || visualVariant === "contrast-specialization") {
    const panels =
      visualVariant === "contrast-killers"
        ? [
            { title: "Lệch ngữ cảnh", body: "Các ràng buộc ban đầu biến mất dần khi cuộc hội thoại kéo dài." },
            { title: "Nợ ảo giác", body: "Giả định sai tích lũy lại và khiến các lần sửa sau ngày càng đắt." },
            { title: "Không có kiến trúc", body: "Mỗi bản vá đều đụng vào phần khác vì hệ thống không có điểm tựa." },
          ]
        : visualVariant === "contrast-shift"
          ? [
              { title: "Làm theo cảm hứng", body: "Lịch sử chat mỏng manh, ứng biến liên tục, hành vi như hộp đen." },
              { title: "Điều phối có phương pháp", body: "Tài liệu bền vững, vai trò rõ ràng, quy trình có thể lặp lại và rà soát." },
            ]
          : [
              { title: "Một phiên AI tổng quát", body: "Phạm vi quá rộng, sở hữu mờ nhạt, ngữ cảnh bị dàn mỏng." },
              { title: "Các agent BMAD chuyên biệt", body: "Phạm vi hẹp hơn, trách nhiệm rõ hơn, đầu ra dễ rà soát hơn." },
            ];

    return (
      <>
        <div className="contrast-board">
          {panels.map((panel, index) => (
            <div
              key={panel.title}
              className="contrast-card animate-visual"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span>{panel.title}</span>
              <p>{panel.body}</p>
            </div>
          ))}
          {image ? (
            <FigureImage src={image} alt={visualLabel ?? title} className="contrast-image" priority={imagePriority} />
          ) : null}
        </div>
        <VisualCaption label={visualLabel} />
      </>
    );
  }

  if (visualVariant === "systems-phases") {
    return (
      <>
        <div className="systems-board systems-phases">
          {["Phân tích", "Lập kế hoạch", "Thiết kế giải pháp", "Triển khai"].map((phase, index) => (
            <div
              key={phase}
              className="phase-card animate-visual"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{phase}</strong>
            </div>
          ))}
        </div>
        <VisualCaption label={visualLabel ?? "Sơ đồ vòng đời bốn giai đoạn"} />
      </>
    );
  }

  if (visualVariant === "systems-flow") {
    return (
      <>
        <div className="systems-board systems-flow">
          {["Brief", "PRD", "Kiến trúc", "Story", "Mã nguồn", "QA"].map((item, index) => (
            <div
              key={item}
              className="flow-node animate-visual"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <span>{item}</span>
            </div>
          ))}
          <div className="flow-line" />
          {image ? (
            <FigureImage src={image} alt={visualLabel ?? title} className="systems-image" priority={imagePriority} />
          ) : null}
        </div>
        <VisualCaption label={visualLabel} />
      </>
    );
  }

  if (visualVariant === "systems-context") {
    return (
      <>
        <div className="systems-board context-board">
          <div className="context-column animate-visual">
            <span>Ngữ cảnh đầu vào quá lớn</span>
            <p>Tài liệu nguyên khối làm mô hình quá tải và dễ trôi khỏi ràng buộc ban đầu.</p>
          </div>
          <div className="context-arrow animate-visual" />
          <div className="context-shards">
            {["Tệp từng bước", "Mảnh đầu việc", "Mảnh ràng buộc"].map((item, index) => (
              <div
                key={item}
                className="context-shard animate-visual"
                style={{ animationDelay: `${90 + index * 80}ms` }}
              >
                {item}
              </div>
            ))}
          </div>
          {image ? (
            <FigureImage
              src={image}
              alt={visualLabel ?? title}
              className="systems-image systems-image-small"
              priority={imagePriority}
            />
          ) : null}
        </div>
        <VisualCaption label={visualLabel} />
      </>
    );
  }

  if (visualVariant === "systems-core") {
    return (
      <>
        <div className="systems-board core-board">
          {["Đề xuất", "Phản biện", "Tinh chỉnh"].map((item, index) => (
            <div
              key={item}
              className="core-orbit animate-visual"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
            </div>
          ))}
          <div className="core-center animate-visual">C.O.R.E.</div>
          {image ? (
            <FigureImage
              src={image}
              alt={visualLabel ?? title}
              className="systems-image systems-image-faint"
              priority={imagePriority}
            />
          ) : null}
        </div>
        <VisualCaption label={visualLabel} />
      </>
    );
  }

  if (visualVariant === "systems-layers") {
    return (
      <>
        <div className="systems-board layers-board">
          {["Cổng sẵn sàng", "Rà soát phản biện", "TDD + kiểm chứng", "Khả năng truy vết"].map(
            (item, index) => (
              <div
                key={item}
                className="layer-band animate-visual"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <span>{item}</span>
              </div>
            ),
          )}
          {image ? (
            <FigureImage
              src={image}
              alt={visualLabel ?? title}
              className="systems-image systems-image-faint"
              priority={imagePriority}
            />
          ) : null}
        </div>
        <VisualCaption label={visualLabel} />
      </>
    );
  }

  if (kind === "case") {
    return (
      <>
        <div className="case-board">
          {image ? (
            <FigureImage src={image} alt={visualLabel ?? title} className="case-image" priority={imagePriority} />
          ) : null}
        </div>
        <VisualCaption label={visualLabel} />
      </>
    );
  }

  return (
    <>
      {image ? (
        <>
          <div className="visual-figure">
            <Image
              src={image}
              alt={visualLabel ?? title}
              fill
              sizes="(max-width: 960px) 84vw, 36vw"
              priority={imagePriority}
              className="visual-image"
            />
          </div>
          <VisualCaption label={visualLabel} />
        </>
      ) : null}
    </>
  );
}

function FigureImage({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className: string;
  priority?: boolean;
}) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 960px) 84vw, 34vw"
        className="visual-image"
        priority={priority}
      />
    </div>
  );
}

function VisualCaption({ label }: { label?: string }) {
  return (
    <div className="visual-caption">
      <span>
        <Icon name="visual" className="label-icon" />
        <span>Vai trò hình ảnh</span>
      </span>
      <p>
        {label ?? "Chỉ dùng hình để hỗ trợ. Thông điệp chính vẫn phải nằm trong nội dung slide."}
      </p>
    </div>
  );
}
