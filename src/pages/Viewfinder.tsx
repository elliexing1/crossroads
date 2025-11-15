import ScrapbookCard from "@/components/ScrapbookCard";
import { Camera, Users, TrendingUp, Film, Plus, MessageCircle, Eye } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Viewfinder = () => {
  return (
    <div className="relative min-h-screen pt-40 pb-32 overflow-hidden">
      <div className="spotlight-beam spotlight-beam-1" />
      <div className="spotlight-beam spotlight-beam-3" />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Product Purpose */}
        <div className="text-center mb-28 space-y-6">
          <div className="inline-block">
            <span className="sticker font-highlight">The Product</span>
          </div>
          <h1 className="section-title font-title">
            Welcome to <span className="spotlight">Viewfinder</span>
          </h1>
          <p className="caption max-w-4xl mx-auto">
            Viewfinder creates a <span className="spotlight-alt">viable digital pipeline</span> where filmmakers 
            can build sustainable careers by sharing their journey, connecting with their audience, 
            and being discovered by the industry through meaningful engagement rather than 
            attention-engineered metrics.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-32">
          <h2 className="text-4xl font-title font-bold text-center mb-16">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-10 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all hover:scale-[1.02]">
              <div className="mb-8 p-5 w-fit rounded-2xl bg-primary/10">
                <Camera className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-subtitle font-semibold mb-4">Creative Hub</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Host your expanding slate of projects in one beautiful, organized space
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Project showcase with media galleries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Progress updates and behind-the-scenes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Customizable portfolio layouts</span>
                </li>
              </ul>
            </div>

            <div className="group p-10 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/10 hover:border-secondary/30 transition-all hover:scale-[1.02]">
              <div className="mb-8 p-5 w-fit rounded-2xl bg-secondary/10">
                <Users className="text-secondary" size={40} />
              </div>
              <h3 className="text-2xl font-subtitle font-semibold mb-4">Private Network</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Build and manage your personal industry rolodex
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Connect with collaborators and crew</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Organize contacts by project or role</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Direct messaging and collaboration tools</span>
                </li>
              </ul>
            </div>

            <div className="group p-10 rounded-2xl bg-gradient-to-br from-primary-orange/5 to-transparent border border-primary-orange/10 hover:border-primary-orange/30 transition-all hover:scale-[1.02]">
              <div className="mb-8 p-5 w-fit rounded-2xl bg-primary-orange/10">
                <TrendingUp className="text-primary-orange" size={40} />
              </div>
              <h3 className="text-2xl font-subtitle font-semibold mb-4">Audience Growth</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Grow a dedicated audience that follows your creative journey
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Analytics and engagement insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Direct connection with your fans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-orange mt-1">•</span>
                  <span>Build sustainable creative income</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-24">
          <h2 className="text-3xl font-title font-bold text-center mb-12">
            How It Works
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScrapbookCard variant="paper" className="border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Plus className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-subtitle font-semibold mb-2">1. Create Your Profile</h3>
                  <p className="text-muted-foreground">
                    Set up your filmmaker profile and customize it to reflect your unique creative vision. 
                    Add your bio, showcase your work, and tell your story.
                  </p>
                </div>
              </div>
            </ScrapbookCard>

            <ScrapbookCard variant="paper" className="border-l-4 border-secondary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Camera className="text-secondary-foreground" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-subtitle font-semibold mb-2">2. Share Your Projects</h3>
                  <p className="text-muted-foreground">
                    Upload your projects, share behind-the-scenes content, and document your creative process. 
                    Build your slate and keep your audience engaged with regular updates.
                  </p>
                </div>
              </div>
            </ScrapbookCard>

            <ScrapbookCard variant="paper" className="border-l-4 border-primary-orange">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-orange flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-background" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-subtitle font-semibold mb-2">3. Build Your Network</h3>
                  <p className="text-muted-foreground">
                    Connect with collaborators, build relationships with industry professionals, and grow 
                    your audience. Manage your contacts and opportunities all in one place.
                  </p>
                </div>
              </div>
            </ScrapbookCard>

            <ScrapbookCard variant="paper" className="border-l-4 border-secondary-magenta">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-magenta flex items-center justify-center flex-shrink-0">
                  <Eye className="text-background" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-subtitle font-semibold mb-2">4. Get Discovered</h3>
                  <p className="text-muted-foreground">
                    As you build your presence and engage authentically, industry professionals can discover 
                    your work through meaningful metrics, not vanity numbers.
                  </p>
                </div>
              </div>
            </ScrapbookCard>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-title font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <ScrapbookCard variant="paper">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-subtitle">
                  Who is Viewfinder for?
                </AccordionTrigger>
                <AccordionContent>
                  Viewfinder is designed for filmmakers at all stages of their career who want to build 
                  in public and create sustainable careers. Whether you're a student filmmaker, an independent 
                  creator, or an established professional looking for a better way to connect with your 
                  audience and the industry, Viewfinder is for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="font-subtitle">
                  How is Viewfinder different from other platforms?
                </AccordionTrigger>
                <AccordionContent>
                  Unlike social media platforms focused on viral content and vanity metrics, Viewfinder 
                  prioritizes meaningful engagement and authentic relationships. We're not about gaming 
                  algorithms—we're about building sustainable careers through transparency, community, 
                  and genuine connections with both audiences and industry professionals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="font-subtitle">
                  When will Viewfinder launch?
                </AccordionTrigger>
                <AccordionContent>
                  We're currently in development and building with feedback from filmmakers in our community. 
                  Join our waitlist to be the first to know when we launch and to help shape the platform 
                  as we build it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="font-subtitle">
                  Will Viewfinder be free to use?
                </AccordionTrigger>
                <AccordionContent>
                  We're committed to making Viewfinder accessible to filmmakers. We'll have a free tier 
                  that provides essential features, with premium options for advanced tools and expanded 
                  capabilities. Our goal is to create a sustainable platform that serves creators first.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="font-subtitle">
                  How do you measure "meaningful engagement"?
                </AccordionTrigger>
                <AccordionContent>
                  Instead of focusing solely on likes and views, we track metrics that actually matter 
                  for career growth: sustained audience relationships, project progression, network 
                  quality, and authentic industry interest. We're building tools that help filmmakers 
                  understand the real impact of their work and connections.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="font-subtitle">
                  Can industry professionals use Viewfinder?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! Industry professionals, producers, and decision-makers will have access to discover 
                  talent through verified accounts. This ensures filmmakers are connecting with real 
                  opportunities while maintaining a safe, professional environment.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ScrapbookCard>
        </div>
      </div>
    </div>
  );
};

export default Viewfinder;
