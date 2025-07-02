import { FeatureCard } from "@/components/FeatureCard";
import { 
  Image, 
  Mail, 
  MailPlus,
  MailOpen,
  MailX,
  MailMinus 
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Image,
      title: "Profile Pictures & File Storage",
      description: "Easily upload and manage profile pictures, documents, videos, and any files with Supabase Storage. No complex server setup needed."
    },
    {
      icon: Mail,
      title: "User Authentication & Login",
      description: "Add secure email/password login, social auth (Google, GitHub), and magic links to your app in minutes, not weeks."
    },
    {
      icon: MailPlus,
      title: "Automated Email Notifications",
      description: "Send welcome emails, password resets, and custom notifications automatically when users perform actions in your app."
    },
    {
      icon: Image,
      title: "Content Database",
      description: "Store blog posts, user-generated content, product listings, or any data with real-time syncing across all devices."
    },
    {
      icon: MailOpen,
      title: "Real-time Comments & Chat",
      description: "Build live commenting systems, chat features, or collaborative tools that update instantly for all users."
    },
    {
      icon: Mail,
      title: "Payment Processing Integration",
      description: "Connect Stripe, handle subscriptions, and manage payment webhooks securely through Supabase Edge Functions."
    },
    {
      icon: MailMinus,
      title: "Analytics & User Tracking",
      description: "Track user behavior, page views, conversions, and custom events to understand how people use your creations."
    },
    {
      icon: MailX,
      title: "Content Moderation",
      description: "Automatically filter inappropriate content, manage user reports, and maintain community guidelines with AI-powered tools."
    },
    {
      icon: Image,
      title: "Backup & Sync Across Devices",
      description: "Keep user data synchronized between mobile, web, and desktop apps with automatic cloud backup and restore."
    },
    {
      icon: MailPlus,
      title: "API Endpoints for Mobile Apps",
      description: "Create custom API endpoints that work seamlessly with iOS, Android, and web apps using Supabase Edge Functions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Launch by Lunch
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              10 Game-Changing Ways Supabase Supercharges Your Creative Projects
            </p>
            <div className="bg-accent text-accent-foreground px-8 py-3 rounded-full inline-block font-semibold shadow-glow">
              From Idea to Live App in Hours, Not Months
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Build & Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop wrestling with backend complexity. Focus on creating amazing experiences while Supabase handles the heavy lifting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-up">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Launch Your Next Big Idea?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of creators who've transformed their ideas into successful apps with Supabase.
            </p>
            <div className="bg-accent-gradient text-accent-foreground px-8 py-4 rounded-lg inline-block font-bold text-lg shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              Start Building Today - It's Free
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
