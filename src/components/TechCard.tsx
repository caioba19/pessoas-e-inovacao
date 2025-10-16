import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TechCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const TechCard = ({ icon, title, description, className }: TechCardProps) => {
  return (
    <Card className={cn(
      "p-6 border-border/50 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
};
