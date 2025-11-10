import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import ScrapbookCard from "@/components/ScrapbookCard";

const Connect = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Welcome to the Waitlist! ✨",
      description: "We'll be in touch soon with updates about Viewfinder.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      role: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="sticker text-sm font-semibold">📸 Join Us</span>
          </div>
          <h1 className="section-title font-rounded mb-4">Join the Waitlist</h1>
          <p className="caption max-w-2xl mx-auto">
            Be among the first filmmakers to experience Viewfinder
            <br />
            Sign up for early access and exclusive updates ✨
          </p>
        </div>

        <ScrapbookCard variant="washi" className="mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold font-rounded">
                Full Name *
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="rounded-2xl border-2 border-border focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold font-rounded">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="rounded-2xl border-2 border-border focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="role" className="text-sm font-semibold font-rounded">
                Your Role
              </label>
              <Input
                id="role"
                type="text"
                placeholder="e.g., Director, Producer, Cinematographer"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="rounded-2xl border-2 border-border focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold font-rounded">
                Tell us about your work (optional)
              </label>
              <Textarea
                id="message"
                placeholder="What kind of films do you make? What are you working on?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="rounded-2xl border-2 border-border focus:border-primary transition-colors"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              <Send className="mr-2" size={20} />
              Join Waitlist
            </Button>
          </form>
        </ScrapbookCard>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <ScrapbookCard variant="paper" rotate="left">
            <div className="text-center">
              <Mail className="mx-auto mb-4 text-primary" size={32} />
              <h2 className="text-xl font-rounded font-bold mb-2">Have Questions?</h2>
              <p className="text-sm text-muted-foreground mb-4">
                We'd love to hear from you with any questions or feedback.
              </p>
              <a 
                href="mailto:hello@viewfinder.film" 
                className="text-primary hover:underline font-semibold"
              >
                hello@viewfinder.film
              </a>
            </div>
          </ScrapbookCard>

          <ScrapbookCard variant="paper" rotate="right" className="bg-gradient-to-br from-dusty-pink/20 to-sage/20">
            <div className="text-center">
              <h3 className="text-lg font-rounded font-bold mb-3">What Happens Next?</h3>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>✨ You'll receive a confirmation email</li>
                <li>📧 Early access invites sent first</li>
                <li>🎬 Updates on our progress</li>
                <li>❤️ Special perks for early supporters</li>
              </ul>
            </div>
          </ScrapbookCard>
        </div>
      </div>
    </div>
  );
};

export default Connect;
