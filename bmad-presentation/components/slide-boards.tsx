import { Icon, type IconName } from "@/components/presentation-icons";

export type BoardTone = "ember" | "sage" | "sky" | "gold" | "plum";

export type BoardItem = {
  title: string;
  description?: string;
  icon: IconName;
  kicker?: string;
  tone?: BoardTone;
};

export function FeatureGridBoard({
  items,
  className = "",
}: {
  items: BoardItem[];
  className?: string;
}) {
  return (
    <div className={`custom-board feature-grid-board ${className}`.trim()}>
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`board-card tone-${item.tone ?? toneByIndex(index)} animate-visual`}
          style={{ animationDelay: `${index * 70}ms` }}
        >
          <div className="board-card-icon">
            <Icon name={item.icon} className="board-icon" />
          </div>
          <div className="board-card-copy">
            {item.kicker ? <p className="board-card-kicker">{item.kicker}</p> : null}
            <h3>{item.title}</h3>
            {item.description ? <p>{item.description}</p> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export function WorkflowBoard({
  steps,
  compact = false,
}: {
  steps: BoardItem[];
  compact?: boolean;
}) {
  return (
    <div className={`custom-board workflow-board ${compact ? "is-compact" : ""}`}>
      {steps.map((step, index) => (
        <article
          key={step.title}
          className={`workflow-step tone-${step.tone ?? toneByIndex(index)} animate-visual`}
          style={{ animationDelay: `${index * 90}ms` }}
        >
          <div className="workflow-step-meta">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <Icon name={step.icon} className="board-icon" />
          </div>
          <div className="workflow-step-copy">
            <h3>{step.title}</h3>
            {step.description ? <p>{step.description}</p> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ComparisonMatrixBoard({
  leftTitle,
  rightTitle,
  rows,
}: {
  leftTitle: string;
  rightTitle: string;
  rows: Array<{
    label: string;
    left: string;
    right: string;
  }>;
}) {
  return (
    <div className="custom-board comparison-matrix-board">
      <div className="comparison-header animate-visual">
        <div className="comparison-side">
          <span>{leftTitle}</span>
        </div>
        <div className="comparison-spacer" />
        <div className="comparison-side is-right">
          <span>{rightTitle}</span>
        </div>
      </div>

      <div className="comparison-rows">
        {rows.map((row, index) => (
          <article
            key={row.label}
            className="comparison-row animate-visual"
            style={{ animationDelay: `${80 + index * 70}ms` }}
          >
            <div className="comparison-cell">
              <p className="comparison-label">{row.label}</p>
              <strong>{row.left}</strong>
            </div>
            <div className="comparison-divider" />
            <div className="comparison-cell is-right">
              <p className="comparison-label">{row.label}</p>
              <strong>{row.right}</strong>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function SpeakerHighlightsBoard({ items }: { items: BoardItem[] }) {
  return (
    <div className="custom-board speaker-highlights-board">
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`speaker-highlight tone-${item.tone ?? toneByIndex(index)} animate-visual`}
          style={{ animationDelay: `${120 + index * 70}ms` }}
        >
          <div className="board-card-icon">
            <Icon name={item.icon} className="board-icon" />
          </div>
          <div className="board-card-copy">
            <h3>{item.title}</h3>
            {item.description ? <p>{item.description}</p> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export function AgentTeamBoard({ items }: { items: BoardItem[] }) {
  return (
    <div className="custom-board agent-team-board">
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`agent-role-card tone-${item.tone ?? toneByIndex(index)} animate-visual`}
          style={{ animationDelay: `${index * 70}ms` }}
        >
          <div className="board-card-icon">
            <Icon name={item.icon} className="board-icon" />
          </div>
          <div className="board-card-copy">
            {item.kicker ? <p className="board-card-kicker">{item.kicker}</p> : null}
            <h3>{item.title}</h3>
            {item.description ? <p>{item.description}</p> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export function KPIGridBoard({ items }: { items: BoardItem[] }) {
  return (
    <div className="custom-board kpi-grid-board">
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`kpi-card tone-${item.tone ?? toneByIndex(index)} animate-visual`}
          style={{ animationDelay: `${index * 75}ms` }}
        >
          <div className="board-card-icon">
            <Icon name={item.icon} className="board-icon" />
          </div>
          <div className="board-card-copy">
            <h3>{item.title}</h3>
            {item.description ? <p>{item.description}</p> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ProsConsBoard({
  pros,
  cons,
}: {
  pros: BoardItem[];
  cons: BoardItem[];
}) {
  return (
    <div className="custom-board pros-cons-board">
      <section className="pros-cons-column is-pros animate-visual">
        <header>
          <p>Ưu điểm</p>
          <h3>Khi BMAD phát huy tốt</h3>
        </header>
        <div className="pros-cons-list">
          {pros.map((item, index) => (
            <article key={item.title} className={`pros-cons-card tone-${item.tone ?? toneByIndex(index)}`}>
              <Icon name={item.icon} className="board-icon" />
              <div>
                <strong>{item.title}</strong>
                {item.description ? <p>{item.description}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pros-cons-column is-cons animate-visual" style={{ animationDelay: "90ms" }}>
        <header>
          <p>Giới hạn</p>
          <h3>Những chi phí cần chấp nhận</h3>
        </header>
        <div className="pros-cons-list">
          {cons.map((item, index) => (
            <article key={item.title} className={`pros-cons-card tone-${item.tone ?? toneByIndex(index + 2)}`}>
              <Icon name={item.icon} className="board-icon" />
              <div>
                <strong>{item.title}</strong>
                {item.description ? <p>{item.description}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ScaleLadderBoard({
  levels,
  addons,
}: {
  levels: BoardItem[];
  addons: BoardItem[];
}) {
  return (
    <div className="custom-board scale-ladder-board">
      <section className="scale-track">
        {levels.map((item, index) => (
          <article
            key={item.title}
            className={`scale-level tone-${item.tone ?? toneByIndex(index)} animate-visual`}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{item.title}</h3>
              {item.description ? <p>{item.description}</p> : null}
            </div>
          </article>
        ))}
      </section>

      <section className="scale-addons">
        <header className="animate-visual" style={{ animationDelay: "240ms" }}>
          <p>Lớp mở rộng</p>
          <h3>Gắn thêm khi đội đã nắm phần cốt lõi</h3>
        </header>
        <div className="scale-addon-grid">
          {addons.map((item, index) => (
            <article
              key={item.title}
              className={`board-card tone-${item.tone ?? toneByIndex(index + 1)} animate-visual`}
              style={{ animationDelay: `${280 + index * 70}ms` }}
            >
              <div className="board-card-icon">
                <Icon name={item.icon} className="board-icon" />
              </div>
              <div className="board-card-copy">
                <h3>{item.title}</h3>
                {item.description ? <p>{item.description}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export function PartyModeBoard({
  center,
  roles,
  useCases,
  avoidCases,
}: {
  center: string;
  roles: BoardItem[];
  useCases: string[];
  avoidCases: string[];
}) {
  return (
    <div className="custom-board party-mode-board">
      <div className="party-hub animate-visual">
        <span>{center}</span>
      </div>

      <div className="party-role-grid">
        {roles.map((role, index) => (
          <article
            key={role.title}
            className={`party-role tone-${role.tone ?? toneByIndex(index)} animate-visual`}
            style={{ animationDelay: `${60 + index * 60}ms` }}
          >
            <Icon name={role.icon} className="board-icon" />
            <div>
              <strong>{role.title}</strong>
              {role.description ? <p>{role.description}</p> : null}
            </div>
          </article>
        ))}
      </div>

      <div className="party-notes">
        <section className="party-note animate-visual" style={{ animationDelay: "240ms" }}>
          <p>Nên dùng khi</p>
          <ul>
            {useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="party-note animate-visual" style={{ animationDelay: "300ms" }}>
          <p>Không nên dùng khi</p>
          <ul>
            {avoidCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function toneByIndex(index: number): BoardTone {
  const tones: BoardTone[] = ["ember", "sage", "sky", "gold", "plum"];
  return tones[index % tones.length];
}
