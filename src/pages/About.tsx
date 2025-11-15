import ScrapbookCard from "@/components/ScrapbookCard";
import { Heart, Target, Lightbulb, Users } from "lucide-react";

const About = () => {
  return (
    <div className="relative min-h-screen pt-40 pb-32 overflow-hidden">
      <div className="spotlight-beam spotlight-beam-1" />
      <div className="spotlight-beam spotlight-beam-2" />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-block">
            <span className="sticker font-highlight">About Us</span>
          </div>
          <h1 className="section-title font-title">
            Meet <span className="spotlight">Crossroads</span>
          </h1>
          <p className="caption max-w-3xl mx-auto">
            Building the future of filmmaking through transparency and community
          </p>
        </div>
        
        <div className="space-y-24">
          <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-primary-orange/5 border border-primary/20">
            <h2 className="text-4xl font-title font-bold mb-6">Our Purpose</h2>
            <p className="text-xl leading-relaxed">
              Crossroads exists to empower filmmakers to <span className="spotlight">build in public</span> and 
              transform their creative vision into sustainable careers. We believe that the future of 
              filmmaking belongs to those brave enough to share their journey and connect authentically 
              with their audience.
            </p>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-title font-bold">Our Core Values</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group p-10 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all hover:scale-[1.02]">
              <div className="mb-8 p-5 w-fit rounded-2xl bg-primary/10">
                <Heart className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-subtitle font-semibold mb-4">Authenticity First</h3>
              <p className="text-muted-foreground leading-relaxed">
                We prioritize genuine connections over viral moments and meaningful engagement over algorithmic manipulation
              </p>
            </div>
            
            <div className="group p-10 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/10 hover:border-secondary/30 transition-all hover:scale-[1.02]">
              <div className="mb-8 p-5 w-fit rounded-2xl bg-secondary/10">
                <Target className="text-secondary" size={40} />
              </div>
              <h3 className="text-2xl font-subtitle font-semibold mb-4">Transparency</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building in public means celebrating wins, sharing struggles, and inviting your audience into the creative process
              </p>
            </div>
            
            <div className="group p-10 rounded-2xl bg-gradient-to-br from-primary-orange/5 to-transparent border border-primary-orange/10 hover:border-primary-orange/30 transition-all hover:scale-[1.02]">
              <div className="mb-8 p-5 w-fit rounded-2xl bg-primary-orange/10">
                <Lightbulb className="text-primary-orange" size={40} />
              </div>
              <h3 className="text-2xl font-subtitle font-semibold mb-4">Creative Freedom</h3>
              <p className="text-muted-foreground leading-relaxed">
                Artists should control their narrative and build direct relationships with their community
              </p>
            </div>
          </div>
          
          <div className="mt-24 max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-secondary-magenta/5 via-transparent to-secondary-purple/5 border border-secondary-magenta/20 text-center">
            <h2 className="text-3xl font-title font-bold mb-6">The Team</h2>
            <p className="text-lg leading-relaxed mb-8">
              Crossroads is built by filmmakers, for filmmakers. Our team combines decades 
              of experience in film production, technology, and community building to create 
              a platform that truly serves the creative community.
            </p>
            <p className="text-muted-foreground font-medium">
              More about our team coming soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
