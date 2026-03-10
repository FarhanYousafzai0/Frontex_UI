import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-14 sm:py-20", className)} {...props}>
      {children}
    </section>
  );
}
