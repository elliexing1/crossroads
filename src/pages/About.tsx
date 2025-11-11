import ScrapbookCard from "@/components/ScrapbookCard";
import { Heart, Target, Lightbulb, Users } from "lucide-react";

const About = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <div className="spotlight-beam spotlight-beam-1" />
      <div className="spotlight-beam spotlight-beam-2" />
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="sticker text-sm font-highlight">About Us</span>
          </div>
          <h1 className="section-title font-title mb-6">
            Meet <span className="spotlight">Crossroads</span>
          </h1>
          <p className="caption max-w-2xl mx-auto">
            Building the future of filmmaking through transparency and community
          </p>
        </div>
        
        <div className="space-y-12">
          <ScrapbookCard variant="paper" className="max-w-3xl mx-auto border-l-4 border-primary">
            <h2 className="text-3xl font-title font-bold mb-4 text-primary">Our Purpose</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Crossroads exists to empower filmmakers to <span className="spotlight">build in public</span> and 
              transform their creative vision into sustainable careers. We believe that the future of 
              filmmaking belongs to those brave enough to share their journey and connect authentically 
              with their audience.
            </p>
          </ScrapbookCard>
          
          <div className="mb-16 text-center mt-20">
            <h2 className="text-3xl font-title font-bold mb-8">Our Core Values</h2>
          </div>
          
          <div className="scrapbook-grid overlap-grid">
            <ScrapbookCard variant="polaroid" rotate="right">
              <div className="aspect-square bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-primary" size={48} />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-2">Authenticity First</h3>
              <p className="text-sm text-muted-foreground">
                We prioritize genuine connections over viral moments and meaningful engagement over algorithmic manipulation
              </p>
            </ScrapbookCard>
            
            <ScrapbookCard variant="polaroid" rotate="left">
              <div className="aspect-square bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-secondary" size={48} />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-2">Transparency</h3>
              <p className="text-sm text-muted-foreground">
                Building in public means celebrating wins, sharing struggles, and inviting your audience into the creative process
              </p>
            </ScrapbookCard>
            
            <ScrapbookCard variant="polaroid" rotate="right">
              <div className="aspect-square bg-primary-orange/20 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-primary-orange" size={48} />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-2">Creative Freedom</h3>
              <p className="text-sm text-muted-foreground">
                Artists should control their narrative and build direct relationships with their community
              </p>
            </ScrapbookCard>
          </div>
          
          <div className="mt-20">
            <ScrapbookCard variant="washi" className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-title font-bold mb-4 text-center">The Team</h2>
              <p className="text-lg leading-relaxed text-center mb-6">
                Crossroads is built by filmmakers, for filmmakers. Our team combines decades 
                of experience in film production, technology, and community building to create 
                a platform that truly serves the creative community.
              </p>
              <p className="text-center text-muted-foreground font-highlight">
                More about our team coming soon
              </p>
            </ScrapbookCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
