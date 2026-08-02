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
    frame: "shrink-0",
    image: "h-12 w-auto md:h-14",
    sizes: "(max-width: 768px) 120px, 140px",
  },
};

export function ProjectLogo({
  className,
  priority = false,
  size = "navbar",
}: ProjectLogoProps) {
  const styles = sizeStyles[size];

  return (
    <div className={cn("flex items-center", className)}>
      <span className={cn("flex items-center justify-center", styles.frame)}>
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
