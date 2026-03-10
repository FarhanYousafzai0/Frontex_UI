import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "md" | "lg" | "xl";
}

const sizeClasses = {
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
};

export function Container({
  className,
  size = "xl",
  children,
  ...props
}: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-4 sm:px-6", sizeClasses[size], className)} {...props}>
      {children}
    </div>
  );
}
