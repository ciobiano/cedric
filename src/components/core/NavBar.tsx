"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { type Link as LinkType } from "@/config/links";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  link: LinkType;
}

function NavItem({ link }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const hasSections = link.sections && link.sections.length > 0;
  const isActiveRoute = pathname === link.href;

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  if (hasSections) {
    return (
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "gap-1 font-normal text-muted-foreground hover:text-foreground"
          )}
        >
          <span>{link.label}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </Button>

        {isOpen && (
          <div
            className="absolute left-0 top-full mt-6 rounded-xl border border-offwhite/10 bg-zinc-950 p-4 shadow-xl z-[100] dark:bg-zinc-900 dark:border-white/10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex">
              {link.sections?.map((section, sIdx) => (
                <div key={sIdx} className="flex-1">
                  <div className={sIdx > 0 ? "pl-6 border-l border-offwhite/10 dark:border-white/10" : "pr-6"}>
                    <h4 className="mb-4 px-2 text-xs font-semibold uppercase tracking-wider text-offwhite/60 dark:text-white/60">
                      {section.title}
                    </h4>
                    <div className="space-y-1">
                      {section.items.map((item, iIdx) => (
                        <Link
                          key={iIdx}
                          href={item.href}
                          className="flex items-center gap-3 rounded-md px-2 py-2 text-sm text-offwhite/80 transition-colors hover:bg-offwhite/10 hover:text-offwhite dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
                        >
                          {item.icon && <item.icon size={16} />}
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={link.href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-foreground",
        isActiveRoute
          ? "text-foreground"
          : "text-muted-foreground"
      )}
    >
      {link.label}
    </Link>
  );
}

interface NavBarProps {
  links: LinkType[];
}

export function NavBar({ links }: NavBarProps) {
  return (
    <nav className="flex h-full items-center gap-6">
      {links.map((link, index) => (
        <NavItem key={index} link={link} />
      ))}
    </nav>
  );
}