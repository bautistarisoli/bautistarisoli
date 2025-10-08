import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface CVSectionProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

export const CVSection = ({ title, children, icon }: CVSectionProps) => {
  return (
    <Card className="bg-cv-content border-border/50 p-6 shadow-sm">
      <div className="space-y-4">
        <div className="flex items-center space-x-3 border-b border-border pb-3">
          {icon && <div className="text-cv-accent">{icon}</div>}
          <h2 className="text-xl font-semibold text-cv-content-foreground">{title}</h2>
        </div>
        <div className="space-y-4">
          {children}
        </div>
      </div>
    </Card>
  );
};

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description?: string;
}

export const ExperienceItem = ({ title, company, period, description }: ExperienceItemProps) => {
  return (
    <div className="border-l-2 border-cv-accent pl-4 space-y-2">
      <div className="space-y-1">
        <h3 className="font-medium text-cv-content-foreground">{title}</h3>
        <p className="text-cv-accent font-medium">{company}</p>
        <p className="text-sm text-cv-text-light">{period}</p>
        {description && <p className="text-sm text-cv-content-foreground/80">{description}</p>}
      </div>
    </div>
  );
};

interface SkillItemProps {
  skill: string;
  level?: string;
}

export const SkillItem = ({ skill, level }: SkillItemProps) => {
  return (
    <div className="flex justify-between items-center py-2">
      <span className="text-cv-content-foreground font-medium">{skill}</span>
      {level && (
        <span className="text-sm bg-cv-accent-light text-cv-accent px-3 py-1 rounded-full font-medium">
          {level}
        </span>
      )}
    </div>
  );
};