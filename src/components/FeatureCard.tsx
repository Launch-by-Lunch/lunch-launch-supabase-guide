interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

export const FeatureCard = ({ image, title, description, index }: FeatureCardProps) => {
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
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};