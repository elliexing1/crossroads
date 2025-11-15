import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Users, TrendingUp, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

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
    <div className="min-h-screen relative">
      <div className="spotlight-beam spotlight-beam-1" />
      <div className="spotlight-beam spotlight-beam-2" />
      
      {/* Hero Section - Asymmetric Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Main content */}
            <motion.div 
              className="lg:col-span-7 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block">
                <span className="sticker font-highlight text-xs">BY CROSSROADS</span>
              </div>
              
              <h1 className="hero-title font-title leading-[0.9]">
                <span className="spotlight block">Viewfinder</span>
              </h1>
              
              <p className="text-xl md:text-2xl leading-relaxed max-w-2xl">
                A mobile-first platform designed to create a{" "}
                <span className="spotlight-alt">viable digital pipeline</span> for 
                filmmakers to build in public and leverage their growth into sustainable careers.
              </p>

              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-3 group cursor-default">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all">
                    <Camera className="text-primary" size={24} />
                  </div>
                  <span className="font-medium">Creative Hub</span>
                </div>
                <div className="flex items-center gap-3 group cursor-default">
                  <div className="p-3 rounded-xl bg-secondary-magenta/10 group-hover:bg-secondary-magenta/20 transition-all">
                    <Users className="text-secondary-magenta" size={24} />
                  </div>
                  <span className="font-medium">Private Network</span>
                </div>
                <div className="flex items-center gap-3 group cursor-default">
                  <div className="p-3 rounded-xl bg-primary-orange/10 group-hover:bg-primary-orange/20 transition-all">
                    <TrendingUp className="text-primary-orange" size={24} />
                  </div>
                  <span className="font-medium">Audience Growth</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Floating card */}
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary-magenta/20 to-primary-orange/20 rounded-3xl blur-2xl" />
                <div className="relative p-8 rounded-2xl bg-card/40 backdrop-blur-xl border border-border/30">
                  <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/20 via-secondary-magenta/20 to-secondary-purple/20 flex items-center justify-center overflow-hidden">
                    <div className="text-center space-y-4 p-8">
                      <Camera className="mx-auto text-primary" size={64} />
                      <p className="text-lg font-medium">Your creative journey starts here</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features - Staggered Layout */}
      <section className="relative py-32 overflow-hidden">
        <div className="spotlight-beam spotlight-beam-3" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="section-title font-title mb-6">
              Everything you need to <span className="spotlight">thrive</span>
            </h2>
          </motion.div>

          <div className="space-y-32">
            {/* Feature 1 - Left aligned */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative h-[400px] rounded-3xl bg-gradient-to-br from-primary/10 to-primary-orange/10 border border-primary/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="text-primary opacity-20" size={200} />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="inline-block p-4 rounded-2xl bg-primary/10">
                  <Camera className="text-primary" size={40} />
                </div>
                <h3 className="text-4xl font-title font-bold">Creative Hub</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Showcase your expanding slate of projects in one beautiful, organized space. 
                  Share progress updates, behind-the-scenes content, and build anticipation for your work.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Project galleries with rich media</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Behind-the-scenes updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Customizable portfolio layouts</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Feature 2 - Right aligned */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-block p-4 rounded-2xl bg-secondary-magenta/10">
                  <Users className="text-secondary-magenta" size={40} />
                </div>
                <h3 className="text-4xl font-title font-bold">Private Network</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Build and manage your personal industry rolodex. Connect with collaborators, 
                  organize your crew, and maintain the relationships that power your career.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-secondary-magenta mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Collaborate with your team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-secondary-magenta mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Organize by project or role</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-secondary-magenta mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Direct messaging tools</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-6">
                <div className="relative h-[400px] rounded-3xl bg-gradient-to-br from-secondary-magenta/10 to-secondary-purple/10 border border-secondary-magenta/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="text-secondary-magenta opacity-20" size={200} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 - Left aligned */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative h-[400px] rounded-3xl bg-gradient-to-br from-primary-orange/10 to-primary/10 border border-primary-orange/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="text-primary-orange opacity-20" size={200} />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <div className="inline-block p-4 rounded-2xl bg-primary-orange/10">
                  <TrendingUp className="text-primary-orange" size={40} />
                </div>
                <h3 className="text-4xl font-title font-bold">Audience Growth</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Cultivate a dedicated community that follows your creative journey. 
                  Build genuine connections and turn your passion into a sustainable career.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-primary-orange mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Analytics and insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-primary-orange mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Direct audience connection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="text-primary-orange mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Sustainable creative income</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waitlist - Centered with floating effect */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-secondary-magenta/20 to-primary-orange/20 rounded-[3rem] blur-3xl" />
              <div className="relative p-12 md:p-16 rounded-3xl bg-card/50 backdrop-blur-2xl border border-border/30">
                <div className="text-center mb-12 space-y-6">
                  <span className="sticker inline-block">Join the Waitlist</span>
                  <h2 className="section-title font-title">
                    Be part of the <span className="spotlight">movement</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Get early access to Viewfinder and start building your creative legacy
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="h-14 bg-background/60 border-border/50 focus:border-primary text-lg"
                    />
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-14 bg-background/60 border-border/50 focus:border-primary text-lg"
                    />
                  </div>
                  <Textarea
                    placeholder="Tell us about your work (optional)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-background/60 border-border/50 focus:border-primary min-h-[140px] resize-none text-lg"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-16 bg-gradient-to-r from-primary via-primary-orange to-secondary-magenta hover:opacity-90 text-background font-semibold text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all"
                  >
                    Join the Waitlist
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
