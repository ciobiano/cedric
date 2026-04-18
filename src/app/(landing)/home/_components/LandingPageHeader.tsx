"use client";
import { AppHeaderUser } from "@/components/core/HeaderUser";
import { Logo } from "@/components/core/Logo";
import { blogLink, pricingLink, aboutLink, productsLink, resourcesLink, type Link } from "@/config/links";
import { useKitzeUI } from "@/components/KitzeUIContext";
import { ThemeSwitchMinimalNextThemes } from "@/components/ThemeSwitchMinimalNextThemes";
import { NavBar } from "@/components/core/NavBar";
import { HeaderCustomized } from "@/components/core/HeaderCustomized";

export default function LandingPageHeader() {
  const { isMobile } = useKitzeUI();

  const navigationLinks: Link[] = [
    productsLink,
    resourcesLink,
    blogLink,
    pricingLink,
    aboutLink,
  ].filter((link): link is Link => link !== null);

  return (
    <HeaderCustomized
      leftSide={
        <div className="flex items-center space-x-2">
          <Logo />
        </div>
      }
      middle={isMobile ? null : <NavBar links={navigationLinks} />}
      renderRightSide={() => (
        <div className="flex items-center gap-2 select-none">
          <ThemeSwitchMinimalNextThemes buttonProps={{ variant: "ghost" }} />
          <AppHeaderUser links={navigationLinks} />
        </div>
      )}
    />
  );
}