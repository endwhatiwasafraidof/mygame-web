import Image from "next/image";

import { brandLogoSrc, brandName } from "@/lib/constants/branding";
import { cn } from "@/lib/utils";

type ProjectLogoProps = {
  className?: string;
  priority?: boolean;
  size?: "navbar" | "footer";
};

const sizeStyles = {
  navbar: {
    frame: "shrink-0",
    image: "h-12 w-auto md:h-14",
    sizes: "(max-width: 768px) 120px, 140px",
  },
  footer: {
    frame:
      "h-14 w-[180px] rounded-2xl px-4 sm:w-[220px] md:h-16 md:w-[260px] md:px-5",
    image: "h-auto w-full max-h-9 md:max-h-11",
    sizes: "(max-width: 640px) 180px, (max-width: 1024px) 220px, 260px",
  },
};

export function ProjectLogo({
  className,
  priority = false,
  size = "navbar",
}: ProjectLogoProps) {
  const styles = sizeStyles[size];
  const isNavbar = size === "navbar";

  return (
    <div className={cn("flex items-center", className)}>
      <span
        className={cn(
          "flex items-center justify-center",
          !isNavbar && "border border-orange-500/30 bg-orange-500/10 shadow-glow",
          styles.frame,
        )}
      >
        <Image
          alt={`Логотип ${brandName}`}
          className={cn("object-contain", styles.image)}
          height={540}
          priority={priority}
          sizes={styles.sizes}
          src={brandLogoSrc}
          width={1354}
        />
      </span>
    </div>
  );
}
