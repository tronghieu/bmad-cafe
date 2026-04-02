export type IconName =
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
  | "count"
  | "rocket"
  | "shuffle"
  | "lightbulb"
  | "file"
  | "layers"
  | "workflow"
  | "scope"
  | "review"
  | "trace"
  | "team"
  | "plan"
  | "search"
  | "code"
  | "shield"
  | "branch"
  | "chat"
  | "wrench"
  | "checklist"
  | "orbit"
  | "target"
  | "users";

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
    case "rocket":
      return (
        <svg {...common}>
          <path d="m13 4 7 7" />
          <path d="M14 10 9 15" />
          <path d="m15 5 4 4" />
          <path d="m8 16-4 4 1-5 4-4" />
          <path d="m10 6 8 8" />
        </svg>
      );
    case "shuffle":
      return (
        <svg {...common}>
          <path d="M4 7h4l8 10h4" />
          <path d="m18 17 2-2-2-2" />
          <path d="M4 17h4l2.5-3" />
          <path d="M14 9l2-2h4" />
          <path d="m18 7 2 2-2 2" />
        </svg>
      );
    case "lightbulb":
      return (
        <svg {...common}>
          <path d="M9 18h6" />
          <path d="M10 21h4" />
          <path d="M8.5 14.5c-1-1-1.5-2.3-1.5-3.7a5 5 0 1 1 10 0c0 1.4-.5 2.7-1.5 3.7L14 16h-4z" />
        </svg>
      );
    case "file":
      return (
        <svg {...common}>
          <path d="M8 3h6l4 4v14H8z" />
          <path d="M14 3v5h5" />
          <path d="M10 13h6" />
          <path d="M10 17h4" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="m12 4 8 4-8 4-8-4z" />
          <path d="m4 12 8 4 8-4" />
          <path d="m4 16 8 4 8-4" />
        </svg>
      );
    case "workflow":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="5" height="5" rx="1" />
          <rect x="15" y="5" width="5" height="5" rx="1" />
          <rect x="9.5" y="14" width="5" height="5" rx="1" />
          <path d="M9 7.5h6" />
          <path d="M12 10v4" />
        </svg>
      );
    case "scope":
      return (
        <svg {...common}>
          <path d="M4 9V5h4" />
          <path d="M20 9V5h-4" />
          <path d="M4 15v4h4" />
          <path d="M20 15v4h-4" />
        </svg>
      );
    case "review":
      return (
        <svg {...common}>
          <path d="M4 7h11" />
          <path d="M4 12h8" />
          <path d="M4 17h6" />
          <circle cx="17" cy="16" r="3" />
          <path d="m19.2 18.2 2 2" />
        </svg>
      );
    case "trace":
      return (
        <svg {...common}>
          <path d="M5 6h4v4H5z" />
          <path d="M15 6h4v4h-4z" />
          <path d="M10 8h4" />
          <path d="M12 10v4" />
          <path d="M8 18h8" />
        </svg>
      );
    case "team":
      return (
        <svg {...common}>
          <circle cx="9" cy="9" r="2.5" />
          <circle cx="16.5" cy="10" r="2" />
          <path d="M4.5 18a4.5 4.5 0 0 1 9 0" />
          <path d="M13.5 18a3.5 3.5 0 0 1 6 0" />
        </svg>
      );
    case "plan":
      return (
        <svg {...common}>
          <path d="M6 4h12v16H6z" />
          <path d="M9 8h6" />
          <path d="M9 12h6" />
          <path d="M9 16h3" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-4.2-4.2" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m13 5-2 14" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v6c0 4.2 2.8 7.8 7 9 4.2-1.2 7-4.8 7-9V6z" />
          <path d="M9 12h6" />
        </svg>
      );
    case "branch":
      return (
        <svg {...common}>
          <circle cx="7" cy="6" r="2" />
          <circle cx="17" cy="6" r="2" />
          <circle cx="17" cy="18" r="2" />
          <path d="M9 6h6" />
          <path d="M17 8v8" />
          <path d="M9 6v12h6" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M5 6h14v9H9l-4 3z" />
          <path d="M8 10h8" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="m14 6 4 4" />
          <path d="m11 9 4 4-7 7H4v-4z" />
          <path d="M15 5a3 3 0 0 0 4 4" />
        </svg>
      );
    case "checklist":
      return (
        <svg {...common}>
          <path d="M9 6h10" />
          <path d="M9 12h10" />
          <path d="M9 18h10" />
          <path d="m4.5 6 1.5 1.5L8 5.5" />
          <path d="m4.5 12 1.5 1.5L8 11.5" />
          <path d="m4.5 18 1.5 1.5L8 17.5" />
        </svg>
      );
    case "orbit":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="2.3" />
          <path d="M6 12a6 3.2 0 1 0 12 0 6 3.2 0 1 0-12 0" />
          <path d="M12 6a3.2 6 0 1 0 0 12 3.2 6 0 1 0 0-12" />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3" />
          <path d="M12 19v3" />
          <path d="M2 12h3" />
          <path d="M19 12h3" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="8.5" cy="9" r="2.5" />
          <circle cx="15.5" cy="9" r="2.5" />
          <path d="M3.5 18a4.5 4.5 0 0 1 10 0" />
          <path d="M10.5 18a4.5 4.5 0 0 1 10 0" />
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
