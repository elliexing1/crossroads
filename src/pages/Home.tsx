import ScrapbookCard from "@/components/ScrapbookCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Film, Users, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for joining!",
      description: "We'll be in touch soon about Viewfinder.",
    });
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        
        <div className="relative container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="font-highlight text-sm px-4 py-2 bg-primary/20 rounded-full">
                BY CROSSROADS
              </span>
            </div>
            <h1 className="hero-title font-title mb-6">
              <span className="spotlight">Viewfinder</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
              A mobile-first platform designed to create a <span className="spotlight-alt">viable digital pipeline</span> for filmmakers to build in public and leverage their growth into a sustainable career.
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center text-sm font-highlight">
              <span className="flex items-center gap-2">
                <Camera size={16} /> Creative Hub
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Users size={16} /> Private Network
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <TrendingUp size={16} /> Audience Growth
              </span>
            </div>
          </div>

          {/* Waitlist Form */}
          <ScrapbookCard variant="paper" className="max-w-2xl mx-auto mt-16">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-title font-bold mb-3">
                Join the Waitlist
              </h2>
              <p className="text-muted-foreground">
                Be the first to know when Viewfinder launches
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-background border-muted"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background border-muted"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Tell us about your filmmaking journey (optional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="bg-background border-muted"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-subtitle"
              >
                Join Waitlist
              </Button>
            </form>
          </ScrapbookCard>
        </div>
      </div>

      {/* Product Intro */}
      <div className="py-24 px-6 bg-gradient-to-b from-background to-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="section-title font-title mb-6">
              What is <span className="spotlight">Viewfinder</span>?
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              Viewfinder is a creative hub where filmmakers can host their expanding slate, 
              access their own private network rolodex, and amass a dedicated audience.
            </p>
          </div>

          <div className="scrapbook-grid overlap-grid">
            <ScrapbookCard variant="polaroid" rotate="left">
              <div className="aspect-square bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Camera className="text-primary" size={48} />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-2">For Filmmakers</h3>
              <p className="text-sm text-muted-foreground">
                Host your slate, build your network, and grow your audience
              </p>
            </ScrapbookCard>

            <ScrapbookCard variant="polaroid" rotate="right">
              <div className="aspect-square bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-secondary" size={48} />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-2">For Viewers</h3>
              <p className="text-sm text-muted-foreground">
                Discover and support new artistic voices in filmmaking
              </p>
            </ScrapbookCard>

            <ScrapbookCard variant="polaroid" rotate="left">
              <div className="aspect-square bg-primary-orange/20 rounded-lg flex items-center justify-center mb-4">
                <Film className="text-primary-orange" size={48} />
              </div>
              <h3 className="text-xl font-subtitle font-semibold mb-2">For Industry</h3>
              <p className="text-sm text-muted-foreground">
                Identify rising talent through meaningful engagement
              </p>
            </ScrapbookCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
