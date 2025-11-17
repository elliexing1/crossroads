import { useEffect, useState } from 'react';

export default function FilmScene3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth - 0.5) * 50,
        y: (event.clientY / window.innerHeight - 0.5) * 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <img
        src="/placeholder-camera-3d.png"
        alt="3D Film Camera"
        className="absolute top-1/2 left-1/2 w-96 h-96 object-contain opacity-20 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mousePosition.x}px), calc(-50% + ${mousePosition.y}px))`,
        }}
      />
    </div>
  );
}
