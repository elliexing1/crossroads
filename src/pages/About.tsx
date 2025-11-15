import { Heart, Target, Lightbulb, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="spotlight-beam spotlight-beam-1" />
      <div className="spotlight-beam spotlight-beam-2" />
      
      {/* Hero */}
      <section className="relative pt-40 pb-32">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <span className="sticker inline-block">About Us</span>
            <h1 className="section-title font-title">
              Meet <span className="spotlight">Crossroads</span>
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              Building the future of filmmaking through transparency and community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Purpose - Asymmetric */}
      <section className="relative py-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-primary/10">
                  <Sparkles className="text-primary" size={32} />
                  <span className="text-xl font-title font-bold">Our Purpose</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-title font-bold leading-tight">
                  Empowering filmmakers to{" "}
                  <span className="spotlight">build in public</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Crossroads exists to transform creative vision into sustainable careers. 
                  We believe that the future of filmmaking belongs to those brave enough 
                  to share their journey and connect authentically with their audience.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  By providing the tools and platform for transparent, community-driven 
                  creation, we're redefining what it means to be a successful filmmaker 
                  in the digital age.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary-orange/20 rounded-3xl blur-2xl" />
                <div className="relative h-[500px] rounded-3xl bg-gradient-to-br from-primary/5 via-primary-orange/5 to-secondary-magenta/5 border border-primary/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <Sparkles className="mx-auto text-primary" size={80} />
                      <p className="text-2xl font-title font-bold max-w-xs">
                        Creating the future of film
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Diagonal Grid */}
      <section className="relative py-32">
        <div className="spotlight-beam spotlight-beam-3" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-title font-bold mb-6">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-10 rounded-2xl bg-card/40 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all h-full">
                <div className="mb-8 p-5 w-fit rounded-2xl bg-primary/10">
                  <Heart className="text-primary" size={40} />
                </div>
                <h3 className="text-2xl font-title font-bold mb-4">Authenticity First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize genuine connections over viral moments and meaningful 
                  engagement over algorithmic manipulation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative md:mt-12"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-secondary/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-10 rounded-2xl bg-card/40 backdrop-blur-xl border border-secondary/10 hover:border-secondary/30 transition-all h-full">
                <div className="mb-8 p-5 w-fit rounded-2xl bg-secondary/10">
                  <Target className="text-secondary" size={40} />
                </div>
                <h3 className="text-2xl font-title font-bold mb-4">Transparency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building in public means celebrating wins, sharing struggles, and 
                  inviting your audience into the creative process.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative md:col-span-2 lg:col-span-1"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-primary-orange/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-10 rounded-2xl bg-card/40 backdrop-blur-xl border border-primary-orange/10 hover:border-primary-orange/30 transition-all h-full">
                <div className="mb-8 p-5 w-fit rounded-2xl bg-primary-orange/10">
                  <Lightbulb className="text-primary-orange" size={40} />
                </div>
                <h3 className="text-2xl font-title font-bold mb-4">Creative Freedom</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Artists should control their narrative and build direct relationships 
                  with their community.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-32">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-secondary-magenta/20 via-secondary-purple/20 to-transparent rounded-[3rem] blur-3xl" />
              <div className="relative p-12 md:p-16 rounded-3xl bg-card/50 backdrop-blur-2xl border border-secondary-magenta/20 text-center space-y-8">
                <h2 className="text-4xl font-title font-bold">The Team</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Crossroads is built by filmmakers, for filmmakers. Our team combines 
                  decades of experience in film production, technology, and community 
                  building to create a platform that truly serves the creative community.
                </p>
                <p className="text-muted-foreground font-medium italic">
                  More about our team coming soon
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
