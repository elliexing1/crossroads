import ScrapbookCard from "@/components/ScrapbookCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Film, Users, TrendingUp } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
      <div className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
        <div className="spotlight-beam spotlight-beam-1" />
        <div className="spotlight-beam spotlight-beam-2" />
        
        <div className="relative container mx-auto max-w-7xl z-10">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <span className="sticker font-highlight">
                BY CROSSROADS
              </span>
            </div>
            <h1 className="hero-title font-title">
              <span className="spotlight">Viewfinder</span>
            </h1>
            <p className="caption max-w-4xl mx-auto">
              A mobile-first platform designed to create a <span className="spotlight-alt">viable digital pipeline</span> for filmmakers to build in public and leverage their growth into a sustainable career.
            </p>
            <div className="flex flex-wrap gap-6 justify-center items-center pt-4 text-sm font-medium opacity-80">
              <span className="flex items-center gap-2 hover:text-primary transition-colors">
                <Camera size={18} /> Creative Hub
              </span>
              <span className="text-muted-foreground/50">•</span>
              <span className="flex items-center gap-2 hover:text-secondary-magenta transition-colors">
                <Users size={18} /> Private Network
              </span>
              <span className="text-muted-foreground/50">•</span>
              <span className="flex items-center gap-2 hover:text-primary-orange transition-colors">
                <TrendingUp size={18} /> Audience Growth
              </span>
            </div>
          </div>

          {/* Feature Preview Section */}
          <div className="mt-32 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all hover:scale-[1.02]">
                <div className="mb-6 p-4 w-fit rounded-xl bg-primary/10">
                  <Camera className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-subtitle font-semibold mb-3">Creative Hub</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Showcase your projects with beautiful galleries and progress updates
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-secondary-magenta/5 to-transparent border border-secondary-magenta/10 hover:border-secondary-magenta/30 transition-all hover:scale-[1.02]">
                <div className="mb-6 p-4 w-fit rounded-xl bg-secondary-magenta/10">
                  <Users className="text-secondary-magenta" size={32} />
                </div>
                <h3 className="text-xl font-subtitle font-semibold mb-3">Private Network</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build your personal industry rolodex and collaborate seamlessly
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-primary-orange/5 to-transparent border border-primary-orange/10 hover:border-primary-orange/30 transition-all hover:scale-[1.02]">
                <div className="mb-6 p-4 w-fit rounded-xl bg-primary-orange/10">
                  <TrendingUp className="text-primary-orange" size={32} />
                </div>
                <h3 className="text-xl font-subtitle font-semibold mb-3">Audience Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cultivate a dedicated community that follows your creative journey
                </p>
              </div>
            </div>
          </div>

          {/* Waitlist Form */}
          <ScrapbookCard variant="paper" className="max-w-2xl mx-auto">
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
                  className="bg-background border-primary"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="bg-background border-primary"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background border-primary"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Referral code (optional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-background border-primary"
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
    </div>
  );
};

export default Home;
