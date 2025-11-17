import { Camera, Users, TrendingUp, Plus, Eye, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Viewfinder = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [betaUser, setBetaUser] = useState(false);
  const [referralCode, setReferralCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, phone, betaUser, referralCode });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="spotlight-beam spotlight-beam-1" />
      <div className="spotlight-beam spotlight-beam-3" />
      
      {/* Hero with Waitlist */}
      <section className="relative pt-32 pb-24">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Left: Intro & Tagline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <span className="sticker inline-block">The Product</span>
              <h1 className="text-6xl lg:text-7xl font-title font-bold leading-tight">
                Welcome to <span className="spotlight">Viewfinder</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Viewfinder creates a <span className="spotlight-alt">viable digital pipeline</span> where 
                filmmakers can build sustainable careers by sharing their journey, connecting with 
                their audience, and being discovered by the industry through meaningful engagement.
              </p>
            </motion.div>

            {/* Right: Waitlist Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-primary-orange/20 rounded-[3rem] blur-3xl" />
              <div className="relative p-10 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50">
                <h3 className="text-3xl font-title font-bold mb-2">Join the Waitlist</h3>
                <p className="text-muted-foreground mb-8">Be among the first to access Viewfinder</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-background/50 border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-background/50 border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="bg-background/50 border-border/50"
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="beta"
                      checked={betaUser}
                      onCheckedChange={(checked) => setBetaUser(checked as boolean)}
                    />
                    <Label htmlFor="beta" className="cursor-pointer font-normal">
                      Want to be a beta user?
                    </Label>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="referral" className="text-muted-foreground">
                      Optional: Referral code
                    </Label>
                    <Input
                      id="referral"
                      type="text"
                      placeholder="Enter referral code"
                      value={referralCode}
                      onChange={(e) => setReferralCode(e.target.value)}
                      className="bg-background/50 border-border/50"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-primary-orange hover:opacity-90 transition-opacity"
                  >
                    Join Waitlist
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features - Asymmetric Showcase */}
      <section className="relative py-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="space-y-40">
            {/* Feature 1 - Large left */}
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3 space-y-8"
              >
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-primary-orange/20 rounded-[3rem] blur-3xl" />
                  <div className="relative h-[500px] rounded-3xl bg-gradient-to-br from-primary/10 to-primary-orange/10 border border-primary/20 overflow-hidden p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="inline-block p-4 rounded-2xl bg-primary/20 backdrop-blur-xl">
                        <Camera className="text-primary" size={48} />
                      </div>
                      <h3 className="text-3xl font-title font-bold">Creative Hub</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <div className="w-24 h-24 rounded-xl bg-primary/30 backdrop-blur-xl" />
                        <div className="w-24 h-24 rounded-xl bg-primary/20 backdrop-blur-xl" />
                        <div className="w-24 h-24 rounded-xl bg-primary/25 backdrop-blur-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 space-y-6"
              >
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Host your expanding slate of projects in one beautiful, organized space.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 p-4 rounded-xl bg-card/30 backdrop-blur-xl border border-border/30">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <Plus className="text-primary" size={16} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Project Showcase</p>
                      <p className="text-sm text-muted-foreground">Rich media galleries for all your work</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 rounded-xl bg-card/30 backdrop-blur-xl border border-border/30">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <Eye className="text-primary" size={16} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Behind-the-Scenes</p>
                      <p className="text-sm text-muted-foreground">Share your creative process</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 rounded-xl bg-card/30 backdrop-blur-xl border border-border/30">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <Zap className="text-primary" size={16} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Progress Updates</p>
                      <p className="text-sm text-muted-foreground">Keep your audience engaged</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Feature 2 - Large right */}
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 space-y-6 order-2 lg:order-1"
              >
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Build and manage your personal industry rolodex.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 p-4 rounded-xl bg-card/30 backdrop-blur-xl border border-border/30">
                    <div className="p-2 rounded-lg bg-secondary-magenta/10 mt-1">
                      <Users className="text-secondary-magenta" size={16} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Collaboration Tools</p>
                      <p className="text-sm text-muted-foreground">Connect with your crew</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 rounded-xl bg-card/30 backdrop-blur-xl border border-border/30">
                    <div className="p-2 rounded-lg bg-secondary-magenta/10 mt-1">
                      <Plus className="text-secondary-magenta" size={16} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Smart Organization</p>
                      <p className="text-sm text-muted-foreground">By project, role, or relationship</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 rounded-xl bg-card/30 backdrop-blur-xl border border-border/30">
                    <div className="p-2 rounded-lg bg-secondary-magenta/10 mt-1">
                      <Zap className="text-secondary-magenta" size={16} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Direct Messaging</p>
                      <p className="text-sm text-muted-foreground">Communicate seamlessly</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3 space-y-8 order-1 lg:order-2"
              >
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-secondary-magenta/20 to-secondary-purple/20 rounded-[3rem] blur-3xl" />
                  <div className="relative h-[500px] rounded-3xl bg-gradient-to-br from-secondary-magenta/10 to-secondary-purple/10 border border-secondary-magenta/20 overflow-hidden p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="inline-block p-4 rounded-2xl bg-secondary-magenta/20 backdrop-blur-xl">
                        <Users className="text-secondary-magenta" size={48} />
                      </div>
                      <h3 className="text-3xl font-title font-bold">Private Network</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-16 h-16 rounded-full bg-secondary-magenta/30 backdrop-blur-xl" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Feature 3 - Large left */}
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3 space-y-8"
              >
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-br from-primary-orange/20 to-primary/20 rounded-[3rem] blur-3xl" />
                  <div className="relative h-[500px] rounded-3xl bg-gradient-to-br from-primary-orange/10 to-primary/10 border border-primary-orange/20 overflow-hidden p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="inline-block p-4 rounded-2xl bg-primary-orange/20 backdrop-blur-xl">
                        <TrendingUp className="text-primary-orange" size={48} />
                      </div>
                      <h3 className="text-3xl font-title font-bold">Audience Growth</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-primary-orange/40 rounded-full w-3/4" />
                      <div className="h-2 bg-primary-orange/30 rounded-full w-full" />
                      <div className="h-2 bg-primary-orange/25 rounded-full w-2/3" />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2 space-y-6"
              >
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Grow a dedicated audience that follows your creative journey.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 p-4 rounded-xl bg-card/30 backdrop-blur-xl border border-border/30">
                    <div className="p-2 rounded-lg bg-primary-orange/10 mt-1">
                      <TrendingUp className="text-primary-orange" size={16} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Analytics & Insights</p>
                      <p className="text-sm text-muted-foreground">Track your growth metrics</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 rounded-xl bg-card/30 backdrop-blur-xl border border-border/30">
                    <div className="p-2 rounded-lg bg-primary-orange/10 mt-1">
                      <Users className="text-primary-orange" size={16} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Direct Connection</p>
                      <p className="text-sm text-muted-foreground">Build genuine relationships</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 rounded-xl bg-card/30 backdrop-blur-xl border border-border/30">
                    <div className="p-2 rounded-lg bg-primary-orange/10 mt-1">
                      <Zap className="text-primary-orange" size={16} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Sustainable Income</p>
                      <p className="text-sm text-muted-foreground">Monetize your creativity</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-32">
        <div className="spotlight-beam spotlight-beam-2" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-title font-bold mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem 
                value="item-1" 
                className="border border-border/30 rounded-2xl px-8 py-2 bg-card/30 backdrop-blur-xl hover:bg-card/40 transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-subtitle hover:no-underline py-6">
                  What makes Viewfinder different from other platforms?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                  Viewfinder is built specifically for filmmakers who want to build sustainable careers 
                  through transparency and community engagement. Unlike algorithm-driven social platforms, 
                  we focus on meaningful connections and direct relationships with your audience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2" 
                className="border border-border/30 rounded-2xl px-8 py-2 bg-card/30 backdrop-blur-xl hover:bg-card/40 transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-subtitle hover:no-underline py-6">
                  When will Viewfinder launch?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                  We're currently in development and building with input from the filmmaker community. 
                  Join our waitlist to get early access and help shape the platform's future.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3" 
                className="border border-border/30 rounded-2xl px-8 py-2 bg-card/30 backdrop-blur-xl hover:bg-card/40 transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-subtitle hover:no-underline py-6">
                  Is Viewfinder free to use?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                  Viewfinder will offer both free and premium tiers. The free tier will provide essential 
                  tools for building your portfolio and connecting with your audience, while premium features 
                  will unlock advanced analytics, collaboration tools, and priority support.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-4" 
                className="border border-border/30 rounded-2xl px-8 py-2 bg-card/30 backdrop-blur-xl hover:bg-card/40 transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-subtitle hover:no-underline py-6">
                  Can I import my existing portfolio?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                  Yes! We're building import tools to make it easy to bring your existing work, whether 
                  from your website, Vimeo, or other platforms. Your creative journey deserves a home 
                  that grows with you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-5" 
                className="border border-border/30 rounded-2xl px-8 py-2 bg-card/30 backdrop-blur-xl hover:bg-card/40 transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-subtitle hover:no-underline py-6">
                  How does the private network feature work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                  Your private network is your personal rolodex of industry contacts. You can organize 
                  collaborators by project, role, or relationship, and reach out directly through the 
                  platform. It's designed to help you build and maintain the relationships that power 
                  your career.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Viewfinder;
