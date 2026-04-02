type IconName =
  | "spark"
  | "section"
  | "hero"
  | "editorial"
  | "contrast"
  | "systems"
  | "case"
  | "closing"
  | "bullet"
  | "proof"
  | "visual"
  | "prev"
  | "next"
  | "count";

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "section":
      return (
        <svg {...common}>
          <path d="M4 7h16" />
          <path d="M4 12h10" />
          <path d="M4 17h13" />
        </svg>
      );
    case "hero":
      return (
        <svg {...common}>
          <path d="m12 3 2.5 5.5L20 11l-5.5 2.5L12 19l-2.5-5.5L4 11l5.5-2.5Z" />
        </svg>
      );
    case "editorial":
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <path d="M8 8h8" />
          <path d="M8 12h8" />
          <path d="M8 16h5" />
        </svg>
      );
    case "contrast":
      return (
        <svg {...common}>
          <path d="M6 7h5v10H6z" />
          <path d="M13 7h5v10h-5z" />
        </svg>
      );
    case "systems":
      return (
        <svg {...common}>
          <circle cx="7" cy="12" r="2" />
          <circle cx="17" cy="7" r="2" />
          <circle cx="17" cy="17" r="2" />
          <path d="M9 12h6" />
          <path d="m15.5 8.5-4 2.5" />
          <path d="m15.5 15.5-4-2.5" />
        </svg>
      );
    case "case":
      return (
        <svg {...common}>
          <path d="M5 19h14" />
          <path d="M7 16V9" />
          <path d="M12 16V5" />
          <path d="M17 16v-3" />
        </svg>
      );
    case "closing":
      return (
        <svg {...common}>
          <path d="M12 4v16" />
          <path d="M4 12h16" />
        </svg>
      );
    case "bullet":
      return (
        <svg {...common}>
          <path d="m7 12 3 3 7-7" />
        </svg>
      );
    case "proof":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v6c0 4.2 2.8 7.8 7 9 4.2-1.2 7-4.8 7-9V6z" />
          <path d="m9.5 12 1.8 1.8 3.2-3.6" />
        </svg>
      );
    case "visual":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <circle cx="9" cy="10" r="1.3" />
          <path d="m20 15-4.5-4.5L8 18" />
        </svg>
      );
    case "prev":
      return (
        <svg {...common}>
          <path d="m14 6-6 6 6 6" />
        </svg>
      );
    case "next":
      return (
        <svg {...common}>
          <path d="m10 6 6 6-6 6" />
        </svg>
      );
    case "count":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      );
    case "spark":
    default:
      return (
        <svg {...common}>
          <path d="m12 4 1.4 3.6L17 9l-3.6 1.4L12 14l-1.4-3.6L7 9l3.6-1.4Z" />
        </svg>
      );
  }
}

export function getKindIcon(kind: string): IconName {
  switch (kind) {
    case "section":
      return "section";
    case "hero":
      return "hero";
    case "editorial":
      return "editorial";
    case "contrast":
      return "contrast";
    case "systems":
      return "systems";
    case "case":
      return "case";
    case "closing":
      return "closing";
    default:
      return "spark";
  }
}
