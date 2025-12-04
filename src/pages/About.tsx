import React from 'react';
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-32 bg-paper text-ink overflow-x-hidden">
      
      {/* Header */}
      <section className="px-6 mb-24 md:mb-32 relative">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-magenta blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-grotesk font-bold mb-8 text-ink tracking-tight">OUR STORY</h1>
          <div className="w-24 h-2 bg-gradient-to-r from-accent to-highlight mx-auto"></div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 space-y-32">
        
        {/* 1. Our Story */}
        <section className="prose prose-lg md:prose-2xl max-w-none">
          <p className="font-work text-ink leading-relaxed font-light">
            <span className="text-6xl font-grotesk font-bold text-highlight float-left mr-4 mt-[-10px]">"</span>
            CrossRoads was born from the frustration of filmmakers trying to break through an industry everyone says is running on fumes, where innovation is labeled as risk rather than potential. Our platform is the product of countless conversations with fellow filmmakers about the consequences of being forced to play by the rules of social media. We founded CrossRoads out of sheer determination to build the pathways we need as filmmakers in order to keep creating work we believe in."
          </p>
        </section>

        {/* Cinematic Visual Break - Diagonal Cut */}
        <div className="w-full h-[500px] relative overflow-hidden group rounded-2xl">
             <div className="absolute inset-0 bg-secondary/20 z-10 mix-blend-multiply"></div>
             <img src="/src/assets/about-hero.jpg" alt="Filmmaking Process" className="w-full h-full object-cover contrast-125" />
             <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-paper to-transparent z-20"></div>
        </div>

        {/* 2. Our Mission */}
        <section className="relative scroll-mt-32" id="our-mission">
            <div className="absolute -left-12 top-0 h-full w-1 bg-brand-green/30 hidden md:block"></div>
          <h2 className="text-sm font-mono uppercase tracking-widest mb-8 text-brand-green">Our Mission</h2>
          <p className="text-2xl md:text-4xl font-grotesk font-medium leading-tight text-ink">
            "Our mission is to enable sustainable careers for independent filmmakers by building a direct channel to those who are seeking cinematic artists (whether as viewers or collaborators), and by carving out clear, data-backed pathways for creatives to achieve visibility and creative freedom."
          </p>
        </section>

        {/* 3. Our Purpose */}
        <section className="space-y-8 text-lg md:text-xl leading-relaxed font-work text-ink/80 scroll-mt-32" id="our-purpose">
          <h2 className="text-sm font-mono uppercase tracking-widest mb-8 text-brand-green">Our Purpose</h2>
          <p>
            We exist to forge the path between indie filmmakers and those searching for new artistic voices. For filmmakers, proof of an engaged audience is not just emotionally fulfilling; it’s professional leverage. When creators can demonstrate who their work resonates with, they unlock real opportunities for funding, partnerships, and long-term creative autonomy.
            <br></br><br></br>But currently, the pathways to building visibility are limited to social media platforms that optimize virality and lowest-common-denominator content. As a result, filmmakers are pushed to chase algorithmic relevance. With funding increasingly reserved for IP with existing performance metrics, the social media companies that determine those metrics are using them to blur the lines of cinema between artistic craft, attention-mongering, and advertising.
            <br></br><br></br>That’s why we are building the <span className="spotlight">CrossRoads</span> app, a mobile-first platform designed to create a viable digital pipeline for filmmakers to build in public and leverage their growth into a sustainable career.
          </p>
          <div className="my-12 p-8 bg-gradient-to-br from-secondary/20 to-transparent border-l-4 border-highlight rounded-r-xl">
            <p className="font-grotesk text-xl md:text-2xl font-bold italic text-ink">
             The CrossRoads app is a creative hub where filmmakers can host their expanding slate, access their own private network rolodex, and amass a dedicated audience; it enables viewers to discover and support new artistic voices; and it aids the industry in identifying rising talent through meaningful engagement rather than attention-engineered metrics.
          </p>
          </div>
        </section>
      </div>

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
              CrossRoads is built <span className="spotlight">by filmmakers, for filmmakers. </span> Our team combines 
              experience across film production, technology, and community building.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { name: "Caroline McDonald", role: "Co-Founder & CEO", bio: "Caroline is a New York–born USC School of Cinematic Arts graduate who is dedicated to reshaping the entertainment industry by fostering inclusive, innovative spaces that connect and empower media professionals. " },
              { name: "Melanie Limas An", role: "Co-Founder & COO", bio: "Melanie An is a Los Angeles–based producer who leverages her filmmaking background and on-set experience to champion collaborative, purpose-driven spaces that empower diverse storytellers and break down industry barriers." },
              { name: "Alexander Williams", role: "CTO", bio: "Alexander Williams has always imagined himself at the intersection of film and technology. Dreams do come true. From self-producing and making his debut film “A Quarantined Christmas” to engineering the audiobook creation system for the Napster 26 Platform, Alex finds himself well-positioned to leverage the opportunity of the Fourth Industrial Revolution for creatives, ideologists, and dreamers." },
              { name: "Clay Corry", role: "CPO", bio: "With 12+ years of experience driving digital transformation and customer-centric innovation across enterprise platforms, high-growth startups, and global fintech organizations; Clay brings a visionary approach to product leadership, driven by a passion for building human-centered experiences that connect and elevate creative talent." },
              { name: "Addison NewRingeisen", role: "CFO", bio: "Addison NewRingeisen operates at the intersection of cutting edge technology and business, with experience scaling projects in small scientific startups as well as global corporations, while developing a financial background in private equity and venture capital. He has dual degrees in economics and molecular engineering from the University of Chicago, and is currently pursuing a PhD in Quantum Physics at Harvard." },
              { name: "Shawn Bennett", role: "CMO", bio: "Shawn Bennett serves as CMO for CrossRoads, shaping the platform’s brand voice, growth strategy, and creator-driven community vision. As co-founder of Mutiny LA and a veteran creative/production leader, he has helped launch consumer brands, design digital products, and craft campaigns for entertainment and tech companies for more than 20 years." },
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
                    src={`/src/assets/team-pics/team-${i + 1}.jpg`}
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
                  <p className="text-sm text-foreground group-hover:text-secondary-magenta transition-colors">
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