import { FeatureCard } from "@/components/FeatureCard";

// Import all generated images
import profileStorageImg from "@/assets/profile-storage.jpg";
import authenticationImg from "@/assets/authentication.jpg";
import emailAutomationImg from "@/assets/email-automation.jpg";
import contentDatabaseImg from "@/assets/content-database.jpg";
import realtimeChatImg from "@/assets/realtime-chat.jpg";
import paymentProcessingImg from "@/assets/payment-processing.jpg";
import analyticsTrackingImg from "@/assets/analytics-tracking.jpg";
import contentModerationImg from "@/assets/content-moderation.jpg";
import backupSyncImg from "@/assets/backup-sync.jpg";
import apiEndpointsImg from "@/assets/api-endpoints.jpg";

const Index = () => {
  const features = [
    {
      image: profileStorageImg,
      title: "Profile Pictures & File Storage",
      description: "Easily upload and manage profile pictures, documents, videos, and any files with Supabase Storage. No complex server setup needed."
    },
    {
      image: authenticationImg,
      title: "User Authentication & Login",
      description: "Add secure email/password login, social auth (Google, GitHub), and magic links to your app in minutes, not weeks."
    },
    {
      image: emailAutomationImg,
      title: "Automated Email Notifications",
      description: "Send welcome emails, password resets, and custom notifications automatically when users perform actions in your app."
    },
    {
      image: contentDatabaseImg,
      title: "Content Database",
      description: "Store blog posts, user-generated content, product listings, or any data with real-time syncing across all devices."
    },
    {
      image: realtimeChatImg,
      title: "Real-time Comments & Chat",
      description: "Build live commenting systems, chat features, or collaborative tools that update instantly for all users."
    },
    {
      image: paymentProcessingImg,
      title: "Payment Processing Integration",
      description: "Connect Stripe, handle subscriptions, and manage payment webhooks securely through Supabase Edge Functions."
    },
    {
      image: analyticsTrackingImg,
      title: "Analytics & User Tracking",
      description: "Track user behavior, page views, conversions, and custom events to understand how people use your creations."
    },
    {
      image: contentModerationImg,
      title: "Content Moderation",
      description: "Automatically filter inappropriate content, manage user reports, and maintain community guidelines with AI-powered tools."
    },
    {
      image: backupSyncImg,
      title: "Backup & Sync Across Devices",
      description: "Keep user data synchronized between mobile, web, and desktop apps with automatic cloud backup and restore."
    },
    {
      image: apiEndpointsImg,
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
                image={feature.image}
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
