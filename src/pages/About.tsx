const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="section-title mb-12">About Us</h1>
        
        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-muted-foreground">
            We believe that the future of filmmaking belongs to those brave enough 
            to build in public. In an industry often shrouded in mystery and gatekeeping, 
            we're creating a platform that celebrates transparency, community, and 
            authentic creative growth.
          </p>
          
          <div className="my-16 border-l-2 border-accent pl-8">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              To create a viable digital pipeline where filmmakers can build sustainable 
              careers by sharing their journey, connecting with their audience, and being 
              discovered by the industry through meaningful engagement rather than 
              attention-engineered metrics.
            </p>
          </div>
          
          <h2 className="text-3xl font-serif font-bold mt-16 mb-6">What We Stand For</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold">Authenticity Over Algorithms</h3>
              <p className="text-muted-foreground">
                We believe in genuine connections and meaningful engagement, not viral 
                moments and vanity metrics.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold">Building in Public</h3>
              <p className="text-muted-foreground">
                Share your creative process, celebrate small wins, and let your audience 
                be part of your journey from script to screen.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold">Community-Driven Discovery</h3>
              <p className="text-muted-foreground">
                Help viewers discover new artistic voices and enable the industry to 
                identify rising talent through genuine engagement.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-semibold">Sustainable Careers</h3>
              <p className="text-muted-foreground">
                Provide filmmakers with the tools and platform they need to turn their 
                passion into a viable, long-term career.
              </p>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-secondary rounded-lg">
            <h2 className="text-2xl font-serif font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              We're building more than a platform—we're building a movement. A place where 
              emerging filmmakers can showcase their work, connect with their audience, 
              grow their network, and ultimately, transform their creative vision into 
              a sustainable career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
