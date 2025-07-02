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
      description: "Easily upload and manage profile pictures, documents, videos, and any files with Supabase Storage. No complex server setup needed.",
      promptingInstructions: "Tell Lovable: 'Create a user profile page with image upload functionality. Include a file upload component that allows users to upload and preview profile pictures, with drag-and-drop support.' Then connect to Supabase for file storage."
    },
    {
      image: authenticationImg,
      title: "User Authentication & Login",
      description: "Add secure email/password login, social auth (Google, GitHub), and magic links to your app in minutes, not weeks.",
      promptingInstructions: "Tell Lovable: 'Create a login and signup page with email/password forms. Include password validation, loading states, and error handling. Add a protected route that requires authentication.' Then connect to Supabase for auth."
    },
    {
      image: emailAutomationImg,
      title: "Automated Email Notifications",
      description: "Send welcome emails, password resets, and custom notifications automatically when users perform actions in your app.",
      promptingInstructions: "Tell Lovable: 'Create an email notification system with templates for welcome emails and notifications. Include an admin panel to manage email templates and send custom emails.' Then use Supabase Edge Functions for email sending."
    },
    {
      image: contentDatabaseImg,
      title: "Content Database",
      description: "Store blog posts, user-generated content, product listings, or any data with real-time syncing across all devices.",
      promptingInstructions: "Tell Lovable: 'Create a content management system with forms to create, edit, and delete blog posts. Include rich text editing, image uploads, and a public blog view with search and filtering.' Then connect to Supabase database."
    },
    {
      image: realtimeChatImg,
      title: "Real-time Comments & Chat",
      description: "Build live commenting systems, chat features, or collaborative tools that update instantly for all users.",
      promptingInstructions: "Tell Lovable: 'Create a real-time chat interface with message bubbles, typing indicators, and online status. Include emoji support and message timestamps.' Then use Supabase real-time subscriptions."
    },
    {
      image: paymentProcessingImg,
      title: "Payment Processing Integration",
      description: "Connect Stripe, handle subscriptions, and manage payment webhooks securely through Supabase Edge Functions.",
      promptingInstructions: "Tell Lovable: 'Create a subscription checkout page with pricing plans, payment forms, and subscription management. Include billing history and plan upgrade/downgrade options.' Then integrate Stripe via Supabase Edge Functions."
    },
    {
      image: analyticsTrackingImg,
      title: "Analytics & User Tracking",
      description: "Track user behavior, page views, conversions, and custom events to understand how people use your creations.",
      promptingInstructions: "Tell Lovable: 'Create an analytics dashboard with charts showing user activity, page views, and custom events. Include filters for date ranges and event types.' Then use Supabase to store analytics data."
    },
    {
      image: contentModerationImg,
      title: "Content Moderation",
      description: "Automatically filter inappropriate content, manage user reports, and maintain community guidelines with AI-powered tools.",
      promptingInstructions: "Tell Lovable: 'Create a content moderation system with user reporting, admin review panel, and automated content filtering. Include approval/rejection workflows and user notification system.' Then use Supabase Edge Functions for AI moderation."
    },
    {
      image: backupSyncImg,
      title: "Backup & Sync Across Devices",
      description: "Keep user data synchronized between mobile, web, and desktop apps with automatic cloud backup and restore.",
      promptingInstructions: "Tell Lovable: 'Create a settings page with data export/import functionality, backup scheduling options, and sync status indicators. Include offline data handling and conflict resolution.' Then use Supabase for cloud sync."
    },
    {
      image: apiEndpointsImg,
      title: "API Endpoints for Mobile Apps",
      description: "Create custom API endpoints that work seamlessly with iOS, Android, and web apps using Supabase Edge Functions.",
      promptingInstructions: "Tell Lovable: 'Create an API documentation page showing available endpoints, request/response examples, and authentication requirements. Include an API testing interface.' Then create Edge Functions in Supabase for custom endpoints."
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
                promptingInstructions={feature.promptingInstructions}
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
