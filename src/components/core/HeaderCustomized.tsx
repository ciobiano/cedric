import { cn } from "@/lib/utils";
import { PageHeader, type PageHeaderProps } from "@/components/PageHeader";
import { HEADER_HEIGHT } from "@/config/config";

type HeaderCustomizedProps = Omit<PageHeaderProps, "height" | "classNames"> & {
  classNames?: PageHeaderProps["classNames"];
};

/*
  a variant of PageHeader customized for this particular app.
  it stays transparent at all times for the landing page aesthetic.
  it respects the container-max-width config from our globals.css.
*/
export function HeaderCustomized({
  classNames,
  ...props
}: HeaderCustomizedProps) {
  return (
    <PageHeader
      {...props}
      height={HEADER_HEIGHT}
      classNames={{
        root: cn(
          "px-0 bg-transparent fixed transition-all duration-300",
          classNames?.root,
        ),
        container: cn(
          "px-4 max-w-[var(--container-max-width)]",
          classNames?.container,
        ),
        leftSide: classNames?.leftSide,
        middle: classNames?.middle,
        rightSide: classNames?.rightSide,
        menuButton: classNames?.menuButton,
        pastScrolled: classNames?.pastScrolled,
      }}
    />
  );
}
