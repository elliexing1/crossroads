import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Accordian is used for FAQ section, currently commented out
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WaitlistForm from '@/components/WaitlistForm';

const Home: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [showHeroLogo, setShowHeroLogo] = useState(true);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Hide hero logo when scrolling past threshold, triggering animation to navbar
      setShowHeroLogo(window.scrollY <= 280);
    };
    
    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-paper text-ink overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent rounded-full blur-[120px] opacity-20"></div>

        {/* Cinematic Placeholder Image */}
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url('/src/assets/home-background.jpg')` }} 
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/60 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center space-y-8">
          {/* Logo Animation Container - Preserves height to prevent layout jump */}
          <div className="h-32 md:h-48 w-full flex items-center justify-center relative">
            <AnimatePresence>
              {showHeroLogo && (
                <motion.img 
                  layoutId="crossroads-logo"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }} // Scale down slightly as it leaves
                  transition={{ duration: 0.5, type: "spring", stiffness: 60 }}
                  src="/src/assets/logo.png" 
                  alt="CrossRoads" 
                  className="h-24 md:h-40 w-auto object-contain drop-shadow-[0_0_15px_rgba(131,180,70,0.3)]"
                />
              )}
            </AnimatePresence>
          </div>
          <p className="text-lg md:text-2xl font-work font-light opacity-80 max-w-2xl mx-auto text-ink/80 leading-relaxed">
            Build your body of work. Find your audience. <br/> <span className="spotlight">Own your career.</span>
          </p>
        </div>
      </section>

      {/* 2. CrossRoads Description */}
      <section className="py-20 md:py-32 px-6 relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-brand-green blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-2xl md:text-4xl font-grotesk font-medium leading-tight md:leading-tight text-ink">
            “CrossRoads is building a mobile-first platform for independent filmmakers to build their body of work in public. It brings together portfolios, creative networks, and audience discovery in one place, so filmmakers can grow real support around their work and use it as leverage for funding, collaboration, and long-term creative autonomy."
          </p>
        </div>
      </section>

      {/* 3. Prototype Info */}
      <section className="py-16 bg-gradient-to-r from-secondary/10 to-paper border-y border-secondary/20">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="w-3 h-3 bg-highlight rounded-none rotate-45 mx-auto mb-6 animate-pulse shadow-[0_0_15px_#F1E82F]"></div>
          <p className="font-mono text-sm md:text-base text-brand-green uppercase tracking-widest">
            Prototype with network rolodex & ISO features in early 2026.
          </p>
        </div>
      </section>

      {/* 4. App Visuals - Horizontally Scrollable */}
      <section className="py-24 overflow-hidden border-b border-secondary/20 bg-paper" id="app-preview">
        <div className="w-full">
          <div className="max-w-6xl mx-auto px-4">
             <h2 className="text-xs font-mono uppercase tracking-widest mb-12 text-center text-secondary">Early Access Preview</h2>
          </div>
          
          <div className="flex overflow-x-auto gap-8 px-6 pb-12 snap-x no-scrollbar w-full flex-nowrap">
            {[
              { num: 1, desc: "Welcome page" },
              { num: 2, desc: "Set up account" },
              { num: 3, desc: "Home page" },
              { num: 4, desc: "Your profile" },
              { num: 5, desc: "Your network" },
              { num: 6, desc: "Your messages" },
              { num: 7, desc: "Conversation" },
              { num: 8, desc: "Another user's profile" },
            ].map(({ num, desc }) => (
              <div key={num} className="snap-center shrink-0 w-[70vw] md:w-[25vw] relative group">
                <div className="relative shadow-2xl border border-secondary/50 group-hover:border-highlight/50 transition-colors duration-500 rounded-lg overflow-hidden flex items-center justify-center" style={{ aspectRatio: '9/19' }}>
                  <img 
                    src={`/src/assets/app-preview/page-${num}.jpg`}
                    alt={desc}
                    className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                    style={{ aspectRatio: '9/19' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-paper/90 pointer-events-none"></div>
                  <div className="absolute bottom-6 left-6 text-ink text-xs font-mono border-l-2 border-accent pl-2">
                    FRAME_00{num} <br/> <span className="opacity-50">{desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Diagonal Card: The Why / The Problem */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-gray-900 group">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/src/assets/home-hero.jpg')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
            
            {/* Diagonal Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent via-brand-purple to-secondary opacity-90 mix-blend-multiply transition-opacity duration-700"></div>
            
            {/* Strong Diagonal Cut */}
            <div className="absolute -top-1/2 -right-1/4 w-[150%] h-[200%] bg-gradient-to-r from-accent to-brand-magenta transform -rotate-12 translate-x-12 translate-y-12 opacity-90 mix-blend-overlay md:group-hover:translate-x-0 transition-transform duration-700"></div>

            <div className="relative z-10 p-12 md:p-24 flex flex-col items-start justify-center min-h-[600px]">
                <div className="font-mono text-highlight text-sm tracking-widest mb-6 border border-highlight rounded-full px-4 py-1">THE PROBLEM</div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-grotesk font-bold leading-[0.9] text-white max-w-4xl drop-shadow-lg">
                    EMERGING FILMMAKERS ARE COMPETING IN ECOSYSTEMS BUILT FOR <span className="text-paper bg-highlight px-2 italic">VIRALITY</span>, NOT ARTISTIC EXPRESSION.
                </h2>
            </div>
        </div>
      </section>

      {/* 6. Diagonal Card: The Who / The Solution */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-paper group">
            {/* Diagonal Shape */}
            <div className="absolute top-0 left-0 w-full h-full bg-secondary/20"></div>
            
            {/* The Cut */}
            <div className="absolute -bottom-1/2 -left-1/4 w-[150%] h-[200%] bg-gradient-to-tr from-brand-green to-highlight transform rotate-6 opacity-100 mix-blend-normal md:group-hover:rotate-3 transition-transform duration-700"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 min-h-[700px]">
                <div className="p-12 md:p-16 flex flex-col justify-end md:justify-center">
                    <div className="font-mono text-secondary text-sm tracking-widest mb-6 border border-secondary rounded-full px-4 py-1 w-fit bg-paper/50 backdrop-blur-sm">THE SOLUTION</div>
                    <h2 className="text-5xl md:text-7xl font-grotesk font-bold leading-[0.85] text-paper mb-8">
                        INTRODUCING CROSSROADS: BY ARTISTS,<br/>FOR ARTISTS.
                    </h2>
                     <div className="w-24 h-2 bg-paper mb-8"></div>
                </div>

                {/* Scrapbook Collage embedded in diagonal layout */}
                <div className="relative h-full w-full min-h-[400px]">
                     <div className="absolute top-1/4 right-12 w-64 h-80 bg-paper p-3 rotate-6 shadow-2xl z-20 hover:rotate-2 transition-transform duration-500">
                         <img src="/src/assets/home-solution-caroline.JPG" className="w-full h-full object-cover" />
                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-accent/80 mix-blend-multiply -rotate-2"></div>
                     </div>
                     <div className="absolute bottom-24 left-12 w-56 h-72 bg-paper p-3 -rotate-3 shadow-2xl z-10 hover:rotate-0 transition-transform duration-500">
                         <img src="/src/assets/home-solution-melanie.JPG" className="w-full h-full object-cover" />
                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-brand-purple/80 mix-blend-multiply rotate-1"></div>
                     </div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 text-center bg-paper">
        <Link 
            to="/about" 
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-highlight text-paper rounded-full overflow-hidden hover:bg-primary-orange transition-colors duration-300"
        >
          <span className="relative z-10 font-mono font-bold tracking-[0.2em] uppercase text-lg">Learn More About Us</span>
          <div className="relative z-10 p-2 bg-paper/10 rounded-full group-hover:translate-x-2 transition-transform">
             <ArrowRight className="w-6 h-6" />
          </div>
          
          {/* Shine Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent z-0"></div>
        </Link>
      </section>

      {/* FAQ - REMOVED FOR NOW. UNCOMMENT AND FILL OUT IF NECESSARY */}
      {/* <section id="faq" className="relative py-32">
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
                  THESE ARE ALL PLACEHOLDER QUESTIONS RIGHT NOW.
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                  CrossRoads is built specifically for filmmakers who want to build sustainable careers 
                  through transparency and community engagement. Unlike algorithm-driven social platforms, 
                  we focus on meaningful connections and direct relationships with your audience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2" 
                className="border border-border/30 rounded-2xl px-8 py-2 bg-card/30 backdrop-blur-xl hover:bg-card/40 transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-subtitle hover:no-underline py-6">
                  When will CrossRoads launch?
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
                  Is CrossRoads free to use?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                  CrossRoads will offer both free and premium tiers. The free tier will provide essential 
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
      </section> */}

      {/* 8. Waitlist Section */}
      <section id="waitlist-section" className="py-32 px-6 bg-[#0B0F12] relative overflow-hidden border-t border-secondary/20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-grotesk font-bold text-highlight tracking-tight">JOIN THE MOVEMENT</h2>
            <p className="font-work text-lg text-brand-green/80">Be the first to know when we launch.</p>
          </div>
          <WaitlistForm />
        </div>
      </section>

    </div>
  );
};

export default Home;