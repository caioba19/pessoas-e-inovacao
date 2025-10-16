import { ReactNode } from "react";

interface BlockquoteHighlightProps {
  children: ReactNode;
}

export const BlockquoteHighlight = ({ children }: BlockquoteHighlightProps) => {
  return (
    <blockquote className="my-8 pl-6 border-l-4 border-primary/50 italic text-xl text-foreground/80 bg-gradient-hero p-6 rounded-r-lg">
      {children}
    </blockquote>
  );
};
