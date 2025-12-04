import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

const WaitlistForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Complete backend form integration.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-secondary/30 p-8 md:p-12 border border-brand-green/30 rounded-lg text-center animate-fade-in backdrop-blur-sm">
        <h3 className="text-2xl font-grotesk font-bold mb-4 text-highlight">You're on the list.</h3>
        <p className="opacity-80 text-ink font-work">Thank you for joining CrossRoads. We will be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto font-work">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest opacity-70 text-brand-green">Full Name *</label>
        <input 
          type="text" 
          id="name" 
          required 
          className="w-full bg-transparent border-b border-secondary py-3 text-ink focus:border-highlight outline-none transition-colors rounded-none placeholder-secondary/50 font-medium"
          placeholder="Jane Doe"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest opacity-70 text-brand-green">Email *</label>
        <input 
          type="email" 
          id="email" 
          required 
          className="w-full bg-transparent border-b border-secondary py-3 text-ink focus:border-highlight outline-none transition-colors rounded-none placeholder-secondary/50 font-medium"
          placeholder="jane@example.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-widest opacity-70 text-brand-green">Phone Number *</label>
        <input 
          type="tel" 
          id="phone" 
          required
          className="w-full bg-transparent border-b border-secondary py-3 text-ink focus:border-highlight outline-none transition-colors rounded-none placeholder-secondary/50 font-medium"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div className="space-y-3 pt-4">
        <p className="text-xs font-mono uppercase tracking-widest opacity-70 text-brand-green">Would you like to be a beta user?</p>
        <div className="flex gap-8 text-ink">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center w-5 h-5 border border-secondary rounded-full group-hover:border-accent transition-colors">
              <input type="radio" name="beta" value="yes" className="peer opacity-0 absolute inset-0 cursor-pointer" />
              <div className="w-3 h-3 bg-accent rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-sm font-medium group-hover:text-accent transition-colors">Yes</span>
          </label>
          
          <label className="flex items-center gap-3 cursor-pointer group">
             <div className="relative flex items-center justify-center w-5 h-5 border border-secondary rounded-full group-hover:border-accent transition-colors">
              <input type="radio" name="beta" value="no" className="peer opacity-0 absolute inset-0 cursor-pointer" />
              <div className="w-3 h-3 bg-accent rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-sm font-medium group-hover:text-accent transition-colors">No</span>
          </label>
        </div>
      </div>

      <div className="pt-8">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-accent to-brand-purple text-ink py-5 uppercase font-mono tracking-widest text-sm font-bold hover:brightness-110 transition-all active:scale-[0.99] flex justify-center items-center gap-2 border border-transparent hover:border-highlight shadow-lg"
        >
          {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default WaitlistForm;