import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => {
  return (
    <div 
      className="group bg-card-gradient p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border border-muted"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="bg-hero-gradient p-3 rounded-lg w-fit mb-4 group-hover:shadow-glow transition-all duration-300">
        <Icon className="h-6 w-6 text-primary-foreground" />
      </div>
      <h3 className="font-semibold text-lg text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};