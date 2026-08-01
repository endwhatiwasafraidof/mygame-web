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
    <div className="max-w-2xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
        {eyebrow}
      </p>
      <div className="space-y-3">
        <h2 className="font-display text-3xl uppercase tracking-[0.08em] text-white md:text-4xl">
          {title}
        </h2>
        <p className="text-sm leading-7 text-zinc-300 md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
