import { Film, Star, ArrowRight, Camera } from "lucide-react";

const AnimatedDoodles = () => {
  return (
    <>
      {/* Top Left Star */}
      <div className="doodle doodle-star fixed top-20 left-10 hidden lg:block">
        <Star className="h-8 w-8 text-primary-yellow fill-primary-yellow" />
      </div>

      {/* Top Right Film */}
      <div className="doodle doodle-film fixed top-32 right-20 hidden lg:block">
        <Film className="h-10 w-10 text-primary-orange" />
      </div>

      {/* Middle Left Arrow */}
      <div className="doodle doodle-arrow fixed top-1/3 left-5 hidden md:block">
        <ArrowRight className="h-12 w-12 text-secondary-green" strokeWidth={2.5} />
      </div>

      {/* Middle Right Camera */}
      <div className="doodle doodle-camera fixed top-1/2 right-10 hidden lg:block">
        <Camera className="h-9 w-9 text-primary-gold" />
      </div>

      {/* Bottom Left Star */}
      <div className="doodle doodle-star fixed bottom-40 left-20 hidden md:block">
        <Star className="h-6 w-6 text-secondary-magenta fill-secondary-magenta" />
      </div>

      {/* Bottom Right Film */}
      <div className="doodle doodle-film fixed bottom-32 right-5 hidden lg:block">
        <Film className="h-8 w-8 text-secondary-purple" />
      </div>
    </>
  );
};

export default AnimatedDoodles;
