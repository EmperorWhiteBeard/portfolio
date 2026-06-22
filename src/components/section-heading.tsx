interface SectionHeadingProps {
  index: string;
  id: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  index,
  id,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      <div
        className={`flex items-center gap-3 mb-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="font-mono text-xs text-accent tracking-wider">
          {"// "}
          {index}
        </span>
        <span className="font-mono text-xs text-text-tertiary tracking-wider uppercase">
          {id}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-text-secondary text-base leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
