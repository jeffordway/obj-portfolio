import { cn } from "@/utils/classNames";

interface DividerProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
  color?: string;
}

/**
 * A simple divider component for visual separation between content sections
 */
export function Divider({
  className,
  orientation = "horizontal",
  color = "border-border",
  ...props
}: DividerProps) {
  return (
    <hr
      className={cn(
        orientation === "horizontal" ? "w-full border-t" : "h-full border-l",
        color,
        className
      )}
      {...props}
    />
  );
}
