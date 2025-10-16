import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ArticleSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const ArticleSection = ({ title, children, className }: ArticleSectionProps) => {
  return (
    <section className={cn("mb-16 animate-fade-in", className)}>
      <h2 className="text-3xl md:text-4xl mb-6 gradient-text">{title}</h2>
      <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
        {children}
      </div>
    </section>
  );
};
