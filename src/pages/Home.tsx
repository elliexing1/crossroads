import { Button } from "@/components/ui/button";
import { Camera, Users, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <div className="spotlight-beam spotlight-beam-1" />
      <div className="spotlight-beam spotlight-beam-2" />
      
      {/* Hero Section - Compact */}
      <section className="relative pt-32 pb-8 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block">
              <span className="sticker font-highlight text-xs">BY CROSSROADS</span>
            </div>
            
            <h1 className="hero-title font-title leading-[0.9]">
              <span className="spotlight block">Viewfinder</span>
            </h1>
            
            <p className="text-xl md:text-2xl leading-relaxed">
              A mobile-first platform designed to create a{" "}
              <span className="spotlight-alt">viable digital pipeline</span> for 
              filmmakers to build in public and leverage their growth into sustainable careers.
            </p>

            {/* New Button Under Tagline */}
            <div className="pt-4">
              <Link to="/viewfinder">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-gradient-to-r from-primary via-primary-orange to-secondary-magenta hover:opacity-90 text-background font-semibold text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
                >
                  Join the Waitlist
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features - Staggered Layout */}
      <section className="relative py-16 overflow-hidden">
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

    </div>
  );
};

export default Home;
