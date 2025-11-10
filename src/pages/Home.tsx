import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 container mx-auto px-6 py-32 text-center">
          <h1 className="hero-title mb-6 animate-fade-in">
            Build Your Film
            <br />
            Career in Public
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light">
            A mobile-first platform for filmmakers to host their slate, 
            grow their network, and amass a dedicated audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/connect">
              <Button size="lg" className="text-base px-8">
                Join Waitlist
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/viewfinder">
              <Button size="lg" variant="outline" className="text-base px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="editorial-grid">
            <div className="space-y-4">
              <div className="text-sm font-medium text-accent uppercase tracking-wider">
                For Filmmakers
              </div>
              <h3 className="text-3xl font-serif font-bold">Host Your Expanding Slate</h3>
              <p className="text-muted-foreground">
                Showcase your projects, share your creative process, and document 
                your journey as you build in public.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-sm font-medium text-accent uppercase tracking-wider">
                Network
              </div>
              <h3 className="text-3xl font-serif font-bold">Private Network Rolodex</h3>
              <p className="text-muted-foreground">
                Maintain and grow your professional connections. Keep your collaborators, 
                crew, and industry contacts organized in one place.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-sm font-medium text-accent uppercase tracking-wider">
                Audience
              </div>
              <h3 className="text-3xl font-serif font-bold">Build Dedicated Following</h3>
              <p className="text-muted-foreground">
                Grow your audience organically. Let your work speak for itself 
                through meaningful engagement, not vanity metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 text-center">
        <div className="container mx-auto px-6">
          <h2 className="section-title mb-6">
            Ready to Start?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Join the waitlist and be among the first to experience Viewfinder 
            when we launch.
          </p>
          <Link to="/connect">
            <Button size="lg" className="text-base px-8">
              Join Waitlist
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
