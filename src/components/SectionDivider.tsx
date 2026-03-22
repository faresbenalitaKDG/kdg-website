type SectionDividerProps = {
  variant?: "wave" | "slant" | "none";
  flip?: boolean;
  className?: string;
};

export default function SectionDivider({
  variant = "wave",
  flip = false,
  className = "",
}: SectionDividerProps) {
  if (variant === "none") return null;

  if (variant === "slant") {
    return (
      <div
        className={`h-12 w-full overflow-hidden ${className}`}
        aria-hidden
      >
        <div
          className={`h-full w-full bg-zinc-50 dark:bg-zinc-950 ${flip ? "-scale-y-100" : ""}`}
          style={{
            clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={`w-full ${flip ? "scale-y-[-1]" : ""} ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-12 w-full"
      >
        <path
          d="M0 48h1440V24s-180-24-360-24S720 24 720 24 540 0 360 0 0 24 0 24v24z"
          className="fill-zinc-50 dark:fill-zinc-950"
        />
      </svg>
    </div>
  );
}
