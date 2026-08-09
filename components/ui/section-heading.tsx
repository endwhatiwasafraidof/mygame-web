type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-5">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-400/90">
        {eyebrow}
      </p>
      <div className="space-y-4">
        <h2 className="font-display text-3xl uppercase tracking-wide text-white drop-shadow-sm md:text-4xl">
          {title}
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
