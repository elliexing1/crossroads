import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const StickyWaitlistBtn: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleJoinClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      // Allow navigation to complete before scrolling
      setTimeout(() => {
        document.getElementById('waitlist-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('waitlist-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
      <button
        onClick={handleJoinClick}
        className="pointer-events-auto bg-primary text-primary-foreground px-8 py-4 rounded-full shadow-[0_0_20px_rgba(131,180,70,0.4)] flex items-center gap-3 hover:scale-105 active:scale-95 transition-transform duration-300 font-grotesk font-bold tracking-wide text-sm md:text-base border border-highlight/20 backdrop-blur-sm group overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
        <span className="relative z-10 text-paper">Join Our Waitlist!</span>
        <ArrowDown size={18} className="relative z-10 text-paper" />
      </button>
    </div>
  );
};

export default StickyWaitlistBtn;