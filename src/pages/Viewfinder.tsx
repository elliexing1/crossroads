import { Film, Users, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Film,
    title: "Creative Hub",
    description: "A dedicated space to showcase your expanding slate of projects. Share behind-the-scenes content, work-in-progress updates, and completed films all in one beautifully designed portfolio."
  },
  {
    icon: Users,
    title: "Private Network",
    description: "Your personal rolodex of industry contacts. Organize collaborators, crew members, actors, and industry professionals. Keep your network organized and accessible."
  },
  {
    icon: TrendingUp,
    title: "Audience Growth",
    description: "Build a dedicated following that grows with you. Connect with viewers who appreciate your unique voice and vision. Turn casual viewers into devoted fans."
  },
  {
    icon: Shield,
    title: "Industry Discovery",
    description: "Get discovered by industry professionals through meaningful engagement metrics, not vanity numbers. Stand out through the quality of your work and the authenticity of your audience."
  }
];

const Viewfinder = () => {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="section-title mb-6">Viewfinder</h1>
          <p className="text-xl text-muted-foreground">
            A mobile-first platform designed to create a viable digital pipeline 
            for filmmakers to build in public and leverage their growth into a 
            sustainable career.
          </p>
        </div>

        {/* Features Grid */}
        <div className="editorial-grid mb-32">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 bg-card border border-border rounded-lg hover:border-accent transition-colors"
            >
              <feature.icon className="w-12 h-12 mb-6 text-accent" />
              <h3 className="text-2xl font-serif font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">How It Works</h2>
          
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">Create Your Profile</h3>
                <p className="text-muted-foreground">
                  Set up your filmmaker profile and start building your creative hub. 
                  Share your story, your vision, and your unique perspective.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">Build Your Slate</h3>
                <p className="text-muted-foreground">
                  Upload and organize your projects. Share updates, behind-the-scenes content, 
                  and finished work. Let your audience follow your creative journey.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">Grow Your Network</h3>
                <p className="text-muted-foreground">
                  Connect with collaborators, build your crew, and maintain relationships 
                  with industry professionals. Keep your network organized and engaged.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">Engage Your Audience</h3>
                <p className="text-muted-foreground">
                  Build a dedicated following of fans who support your work. Grow your 
                  audience authentically through meaningful content and genuine engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile First */}
        <div className="mt-32 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Mobile-First Design</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Built for the way filmmakers work today. Capture moments on set, 
            share updates from anywhere, and manage your career on the go.
          </p>
          <p className="text-muted-foreground">
            Whether you're on set, at a festival, or in pre-production, 
            Viewfinder keeps you connected to your audience and your network.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Viewfinder;
