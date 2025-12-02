import { Clapperboard, Users, Infinity, Sparkles } from "lucide-react";

import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative pt-40 pb-32">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-8"
          >
            <h1 className="section-title font-title">
              Meet <span className="spotlight">CrossRoads</span>
            </h1>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              Building the future of filmmaking through transparency and community.
            </p>
            <p className="text-2xl text-muted-foreground leading-relaxed">
              Placeholder for image!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Purpose - Asymmetric */}
      <section id="our-purpose" className="relative py-32">
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
                  <span className="text-xl font-title font-bold">Our Purpose</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-title font-bold leading-tight">
                  Empowering filmmakers to{" "}
                  <span className="spotlight">build creatively</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  CrossRoads was born from the frustration of filmmakers trying to break 
                  through an industry everyone says is running on fumes, where innovation 
                  is labeled as risk rather than potential.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  CrossRoads is the product of countless conversations with fellow filmmakers 
                  about the consequences of being forced to play by the rules of social media. 
                  We founded CrossRoads out of sheer determination to build the pathways we 
                  need as filmmakers in order to keep creating work we believe in.
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
      <section id="our-core-values" className="relative py-32">
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
                  <Clapperboard className="text-primary" size={40} />
                </div>

                <h3 className="text-2xl font-title font-bold mb-4">Respect The Craft</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Placeholder description. idk what they want us to do with the bullet points atm.
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
                  <Users className="text-secondary" size={40} />
                </div>

                <h3 className="text-2xl font-title font-bold mb-4">Innovation Is For The People</h3>
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
                <Infinity className="text-primary-orange" size={40} />
              </div>

                <h3 className="text-2xl font-title font-bold mb-4">Evolve Fast; Endure Long-Term</h3>
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
      <section id="meet-the-team" className="relative py-32">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-title font-bold mb-6">
              Meet the Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CrossRoads is built <span className="spotlight">by filmmakers, for filmmakers. </span>Our team combines 
              experience across film production, technology, and community building.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { name: "Caroline McDonald", role: "Co-Founder & CEO", bio: "Caroline brings over 10 years of experience in film production and creative direction, leading CrossRoads' vision to empower independent filmmakers." },
              { name: "Melanie Limas An", role: "Co-Founder & COO", bio: "Melanie is passionate about building communities and sustainable business models that support creative professionals in the digital age." },
              { name: "John Doe", role: "Lead Engineer", bio: "John is a full-stack developer with a background in creating scalable platforms for creative industries." },
              ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-square mb-4">
                  <img
                    src={`/src/assets/team-${i + 1}.jpg`}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <p className="text-sm text-foreground leading-relaxed text-center">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <h4 className="text-lg font-title font-bold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
