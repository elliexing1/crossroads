import { Button } from "@/components/ui/button";
import { Camera, Film, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-scrapbook.jpg";
import ScrapbookCard from "@/components/ScrapbookCard";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 film-grain"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 container mx-auto px-6 py-32 text-center">
          <div className="inline-block mb-6">
            <span className="sticker text-sm font-semibold">✨ New Platform</span>
          </div>
          <h1 className="hero-title mb-4 animate-fade-in font-rounded">
            Build Your Film
            <br />
            <span className="text-primary">Career in Public</span>
          </h1>
          <p className="caption mb-12 max-w-2xl mx-auto rotate-slight-left">
            A cozy creative space for filmmakers to share their journey,
            <br />
            grow their audience, and make magic happen ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/connect">
              <Button size="lg" className="text-base px-8 rounded-full shadow-lg hover:scale-105 transition-transform">
                <Camera className="mr-2" size={20} />
                Join Waitlist
              </Button>
            </Link>
            <Link to="/viewfinder">
              <Button size="lg" variant="outline" className="text-base px-8 rounded-full border-2 hover:scale-105 transition-transform">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition - Scrapbook Grid */}
      <section className="py-24 bg-beige/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title font-rounded mb-4">What Makes Us Different</h2>
            <p className="caption">Your creative journey deserves a beautiful home</p>
          </div>
          
          <div className="scrapbook-grid overlap-grid max-w-6xl mx-auto">
            <ScrapbookCard variant="polaroid" rotate="left">
              <div className="aspect-square bg-dusty-pink/20 rounded-lg flex items-center justify-center mb-3">
                <Film className="text-primary" size={48} />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-rounded font-bold mb-2">Host Your Slate</h3>
                <p className="text-sm text-muted-foreground">
                  Showcase projects & share your process
                </p>
              </div>
            </ScrapbookCard>
            
            <ScrapbookCard variant="polaroid" rotate="right">
              <div className="aspect-square bg-sage/20 rounded-lg flex items-center justify-center mb-3">
                <Users className="text-primary" size={48} />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-rounded font-bold mb-2">Private Network</h3>
                <p className="text-sm text-muted-foreground">
                  Your personal rolodex of collaborators
                </p>
              </div>
            </ScrapbookCard>
            
            <ScrapbookCard variant="polaroid" rotate="left">
              <div className="aspect-square bg-sepia/20 rounded-lg flex items-center justify-center mb-3">
                <Sparkles className="text-primary" size={48} />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-rounded font-bold mb-2">Grow Audience</h3>
                <p className="text-sm text-muted-foreground">
                  Build authentic connections that matter
                </p>
              </div>
            </ScrapbookCard>
          </div>
        </div>
      </section>

      {/* Features with Paper Cutouts */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrapbookCard variant="washi" className="mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-rounded font-bold mb-4">
                Build in Public, Grow Together
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Share your creative process as you go. Document your wins, your struggles,
                and everything in between. Let your audience be part of your story from
                script to screen.
              </p>
            </div>
          </ScrapbookCard>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrapbookCard variant="paper" rotate="left">
              <h3 className="text-xl font-rounded font-bold mb-3 text-primary">
                🎬 For Creators
              </h3>
              <p className="text-muted-foreground">
                A platform designed by filmmakers, for filmmakers. Everything you need
                to showcase your work and grow your career in one beautiful space.
              </p>
            </ScrapbookCard>

            <ScrapbookCard variant="paper" rotate="right">
              <h3 className="text-xl font-rounded font-bold mb-3 text-primary">
                ❤️ For Fans
              </h3>
              <p className="text-muted-foreground">
                Discover emerging talent and support artists you believe in. Be part
                of their journey from day one.
              </p>
            </ScrapbookCard>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 text-center bg-gradient-to-b from-transparent to-dusty-pink/20">
        <div className="container mx-auto px-6">
          <div className="inline-block mb-6">
            <span className="sticker text-sm font-semibold">📸 Coming Soon</span>
          </div>
          <h2 className="section-title font-rounded mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="caption mb-12 max-w-2xl mx-auto">
            Join the waitlist and be the first to experience Viewfinder
            <br />
            when we launch. We can't wait to see what you create! ✨
          </p>
          <Link to="/connect">
            <Button size="lg" className="text-base px-10 rounded-full shadow-lg hover:scale-105 transition-transform">
              <Camera className="mr-2" size={20} />
              Join the Waitlist
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
