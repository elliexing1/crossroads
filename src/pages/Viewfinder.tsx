import { Film, Users, TrendingUp, Shield, Camera, Heart, Sparkles, Zap } from "lucide-react";
import ScrapbookCard from "@/components/ScrapbookCard";

const features = [
  {
    icon: Film,
    title: "Creative Hub",
    description: "A dedicated space to showcase your expanding slate of projects. Share behind-the-scenes content, work-in-progress updates, and completed films.",
    color: "bg-dusty-pink/20"
  },
  {
    icon: Users,
    title: "Private Network",
    description: "Your personal rolodex of industry contacts. Organize collaborators, crew members, actors, and industry professionals.",
    color: "bg-sage/20"
  },
  {
    icon: TrendingUp,
    title: "Audience Growth",
    description: "Build a dedicated following that grows with you. Connect with viewers who appreciate your unique voice and vision.",
    color: "bg-sepia/20"
  },
  {
    icon: Shield,
    title: "Industry Discovery",
    description: "Get discovered through meaningful engagement metrics, not vanity numbers. Stand out through quality and authenticity.",
    color: "bg-beige/40"
  }
];

const Viewfinder = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block mb-4">
            <span className="sticker text-sm font-semibold">🎬 The Platform</span>
          </div>
          <h1 className="section-title font-rounded mb-6">Viewfinder</h1>
          <p className="caption max-w-2xl mx-auto">
            A mobile-first creative home designed for filmmakers
            <br />
            who want to build in public and grow sustainably ✨
          </p>
        </div>

        {/* Features Grid - Polaroid Style */}
        <div className="scrapbook-grid overlap-grid mb-32 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <ScrapbookCard 
              key={index}
              variant="polaroid" 
              rotate={index % 2 === 0 ? "left" : "right"}
            >
              <div className={`aspect-square ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="text-primary" size={56} />
              </div>
              <h3 className="text-xl font-rounded font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </ScrapbookCard>
          ))}
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto mb-32">
          <h2 className="text-4xl font-rounded font-bold mb-12 text-center">How It Works</h2>
          
          <div className="space-y-8">
            <ScrapbookCard variant="paper" rotate="left">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-rounded font-bold mb-2 flex items-center gap-2">
                    <Camera size={24} className="text-primary" />
                    Create Your Profile
                  </h3>
                  <p className="text-muted-foreground">
                    Set up your filmmaker profile and start building your creative hub. 
                    Share your story, your vision, and your unique perspective.
                  </p>
                </div>
              </div>
            </ScrapbookCard>

            <ScrapbookCard variant="paper" rotate="right">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-rounded font-bold mb-2 flex items-center gap-2">
                    <Film size={24} className="text-primary" />
                    Build Your Slate
                  </h3>
                  <p className="text-muted-foreground">
                    Upload and organize your projects. Share updates, behind-the-scenes content, 
                    and finished work. Let your audience follow your creative journey.
                  </p>
                </div>
              </div>
            </ScrapbookCard>

            <ScrapbookCard variant="paper" rotate="left">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-rounded font-bold mb-2 flex items-center gap-2">
                    <Users size={24} className="text-primary" />
                    Grow Your Network
                  </h3>
                  <p className="text-muted-foreground">
                    Connect with collaborators, build your crew, and maintain relationships 
                    with industry professionals. Keep your network organized and engaged.
                  </p>
                </div>
              </div>
            </ScrapbookCard>

            <ScrapbookCard variant="paper" rotate="right">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-rounded font-bold mb-2 flex items-center gap-2">
                    <Heart size={24} className="text-primary" />
                    Engage Your Audience
                  </h3>
                  <p className="text-muted-foreground">
                    Build a dedicated following of fans who support your work. Grow authentically 
                    through meaningful content and genuine engagement.
                  </p>
                </div>
              </div>
            </ScrapbookCard>
          </div>
        </div>

        {/* Mobile First Callout */}
        <div className="max-w-3xl mx-auto">
          <ScrapbookCard variant="washi" className="bg-gradient-to-br from-dusty-pink/20 via-sage/20 to-sepia/20">
            <div className="text-center">
              <div className="flex justify-center gap-4 mb-6">
                <Sparkles className="text-primary" size={32} />
                <Zap className="text-primary" size={32} />
              </div>
              <h2 className="text-4xl font-rounded font-bold mb-6">Mobile-First Design</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Built for the way filmmakers work today. Capture moments on set, 
                share updates from anywhere, and manage your career on the go.
              </p>
              <p className="caption">
                Whether you're on set, at a festival, or in pre-production,
                <br />
                Viewfinder keeps you connected to your audience and your network ✨
              </p>
            </div>
          </ScrapbookCard>
        </div>
      </div>
    </div>
  );
};

export default Viewfinder;
