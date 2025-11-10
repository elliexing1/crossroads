import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

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
      title: "Welcome to the Waitlist!",
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
      <div className="container mx-auto px-6 max-w-2xl">
        <h1 className="section-title mb-6 text-center">Join the Waitlist</h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Be among the first filmmakers to experience Viewfinder. 
          Sign up for early access and exclusive updates.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name *
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address *
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="role" className="text-sm font-medium">
              Your Role
            </label>
            <Input
              id="role"
              type="text"
              placeholder="e.g., Director, Producer, Cinematographer"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Tell us about your work (optional)
            </label>
            <Textarea
              id="message"
              placeholder="What kind of films do you make? What are you working on?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
            />
          </div>

          <Button type="submit" size="lg" className="w-full">
            Join Waitlist
          </Button>
        </form>

        {/* Contact Info */}
        <div className="mt-16 text-center space-y-4">
          <h2 className="text-2xl font-serif font-bold">Have Questions?</h2>
          <p className="text-muted-foreground">
            We'd love to hear from you. Reach out to us with any questions, 
            feedback, or just to say hello.
          </p>
          <p className="text-muted-foreground">
            Email us at{" "}
            <a href="mailto:hello@viewfinder.film" className="text-accent hover:underline">
              hello@viewfinder.film
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Connect;
