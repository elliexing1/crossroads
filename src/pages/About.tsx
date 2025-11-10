import ScrapbookCard from "@/components/ScrapbookCard";
import { Heart, Sparkles, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="sticker text-sm font-semibold">✨ Our Story</span>
          </div>
          <h1 className="section-title font-rounded mb-6">About Viewfinder</h1>
          <p className="caption max-w-2xl mx-auto">
            Building a home for filmmakers who dare to create in public
          </p>
        </div>
        
        <div className="space-y-12">
          <ScrapbookCard variant="washi" className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-center">
              We believe that the future of filmmaking belongs to those brave enough 
              to build in public. In an industry often shrouded in mystery and gatekeeping, 
              we're creating a platform that celebrates transparency, community, and 
              authentic creative growth.
            </p>
          </ScrapbookCard>
          
          <div className="my-20">
            <ScrapbookCard variant="paper" rotate="left" className="max-w-3xl mx-auto border-l-4 border-primary">
              <h2 className="text-3xl font-rounded font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To create a viable digital pipeline where filmmakers can build sustainable 
                careers by sharing their journey, connecting with their audience, and being 
                discovered by the industry through meaningful engagement rather than 
                attention-engineered metrics.
              </p>
            </ScrapbookCard>
          </div>
          
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-rounded font-bold mb-8">What We Stand For</h2>
          </div>
          
          <div className="scrapbook-grid overlap-grid">
            <ScrapbookCard variant="polaroid" rotate="right">
              <div className="aspect-square bg-dusty-pink/20 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-primary" size={48} />
              </div>
              <h3 className="text-xl font-rounded font-semibold mb-2">Authenticity Over Algorithms</h3>
              <p className="text-sm text-muted-foreground">
                Genuine connections and meaningful engagement, not viral moments
              </p>
            </ScrapbookCard>
            
            <ScrapbookCard variant="polaroid" rotate="left">
              <div className="aspect-square bg-sage/20 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-primary" size={48} />
              </div>
              <h3 className="text-xl font-rounded font-semibold mb-2">Building in Public</h3>
              <p className="text-sm text-muted-foreground">
                Share your process, celebrate wins, and let your audience join the journey
              </p>
            </ScrapbookCard>
            
            <ScrapbookCard variant="polaroid" rotate="right">
              <div className="aspect-square bg-sepia/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-primary" size={48} />
              </div>
              <h3 className="text-xl font-rounded font-semibold mb-2">Community Discovery</h3>
              <p className="text-sm text-muted-foreground">
                Help viewers find new voices and industry identify rising talent
              </p>
            </ScrapbookCard>
            
            <ScrapbookCard variant="polaroid" rotate="left">
              <div className="aspect-square bg-beige/40 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-primary" size={48} />
              </div>
              <h3 className="text-xl font-rounded font-semibold mb-2">Sustainable Careers</h3>
              <p className="text-sm text-muted-foreground">
                Turn your passion into a viable, long-term creative career
              </p>
            </ScrapbookCard>
          </div>
          
          <div className="mt-20">
            <ScrapbookCard variant="paper" className="max-w-3xl mx-auto bg-gradient-to-br from-dusty-pink/20 to-sage/20">
              <h2 className="text-2xl font-rounded font-bold mb-4 text-center">Our Mission</h2>
              <p className="text-lg leading-relaxed text-center">
                We're building more than a platform—we're building a movement. A place where 
                emerging filmmakers can showcase their work, connect with their audience, 
                grow their network, and ultimately, transform their creative vision into 
                a sustainable career. ✨
              </p>
            </ScrapbookCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
