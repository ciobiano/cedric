import {
  LucideBookOpen,
  LucideCreditCard,
  type LucideIcon,
  LucideInfo,
  LucideHome,
  LucideFileText,
  LucideMessageSquare,
  LucideZap,
  LucideLayers,
  LucideUsers,
  LucideRocket,
  LucideShield,
  LucideBarChart,
  LucideSettings,
  LucidePalette,
  LucideCode,
} from "lucide-react";
import { clientEnv } from "@/env/client";

export interface SubLink {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export interface LinkSection {
  title: string;
  items: SubLink[];
}

export interface Link {
  label: string;
  href: string;
  icon?: LucideIcon;
  sections?: LinkSection[];
}

// Conditionally return links based on feature flags
export const blogLink: Link | null = clientEnv.NEXT_PUBLIC_ENABLE_BLOG_PAGE
  ? {
      label: "Blog",
      href: "/blog",
    }
  : null;

export const pricingLink: Link | null =
  clientEnv.NEXT_PUBLIC_ENABLE_PRICING_PAGE
    ? {
        label: "Pricing",
        href: "/pricing",
      }
    : null;

export const aboutLink: Link | null = clientEnv.NEXT_PUBLIC_ENABLE_ABOUT_PAGE
  ? {
      label: "About",
      href: "/about",
    }
  : null;

export const homeLink: Link = {
  label: "Home",
  href: "/home",
  icon: LucideHome,
};

export const chatLink: Link | null = clientEnv.NEXT_PUBLIC_ENABLE_CHAT_PAGE
  ? {
      label: "Chat",
      href: "/chat",
      icon: LucideMessageSquare,
    }
  : null;

export const productsLink: Link = {
  label: "Products",
  href: "#",
  sections: [
    {
      title: "Core",
      items: [
        { label: "Features", href: "/#features", icon: LucideZap },
        { label: "Pricing", href: "/pricing", icon: LucideCreditCard },
        { label: "Team", href: "/about", icon: LucideUsers },
      ],
    },
    {
      title: "Platform",
      items: [
        { label: "Integrations", href: "/integrations", icon: LucideLayers },
        { label: "API", href: "/docs/api", icon: LucideCode },
        { label: "Security", href: "/security", icon: LucideShield },
      ],
    },
    {
      title: "Enterprise",
      items: [
        { label: "Custom Solutions", href: "/enterprise", icon: LucideRocket },
        { label: "SLA", href: "/sla", icon: LucideFileText },
        { label: "Support", href: "/support", icon: LucideSettings },
      ],
    },
  ],
};

export const resourcesLink: Link = {
  label: "Resources",
  href: "#",
  sections: [
    {
      title: "Content",
      items: [
        { label: "Blog", href: "/blog", icon: LucideBookOpen },
        { label: "Documentation", href: "/docs", icon: LucideFileText },
        { label: "About", href: "/about", icon: LucideInfo },
      ],
    },
    {
      title: "Tools",
      items: [
        { label: "Changelog", href: "/changelog", icon: LucideRocket },
        { label: "Status", href: "/status", icon: LucideBarChart },
        { label: "Settings", href: "/settings", icon: LucideSettings },
      ],
    },
  ],
};
