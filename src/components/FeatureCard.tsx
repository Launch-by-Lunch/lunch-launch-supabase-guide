import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  promptingInstructions: string;
  index: number;
}

export const FeatureCard = ({ image, title, description, promptingInstructions, index }: FeatureCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="group bg-card-gradient p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border border-muted overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative mb-6 rounded-lg overflow-hidden group-hover:shadow-glow transition-all duration-300">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
      </div>
      <h3 className="font-semibold text-lg text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
      
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
          <span className="text-sm font-medium text-foreground">How to build this with Lovable</span>
          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 p-3 bg-muted/30 rounded-lg">
          <p className="text-sm text-muted-foreground leading-relaxed">{promptingInstructions}</p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};