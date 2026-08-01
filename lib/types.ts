import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  href: string;
  label: string;
  external?: boolean;
};

export type ServerCard = {
  slug: "stories" | "legacy";
  title: string;
  description: string;
  online: number;
  ctaLabel: string;
  status: string;
};

export type PlatformCard = {
  title: string;
  description: string;
  buttonLabel: string;
};

export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  imageLabel: string;
  category: string;
};

export type SocialLink = {
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon;
};

export type DonateMethod = {
  label: string;
  description: string;
};

export type BonusTier = {
  title: string;
  description: string;
};

export type WikiCategory = {
  slug: string;
  title: string;
  description: string;
};
