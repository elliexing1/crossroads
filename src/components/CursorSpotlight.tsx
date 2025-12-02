import React, { useEffect, useState } from 'react';

const CursorSpotlight: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Direct update for instant response
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    // Ensure default cursor is hidden
    document.body.style.cursor = 'none';

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main Inverting Disk - Magenta (#FA0CFE) */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          width: clicked ? '56px' : '64px',
          height: clicked ? '56px' : '64px',
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#FA0CFE', // Magenta for the effect
          mixBlendMode: 'difference',
          // No transition for position to ensure instant tracking
          transition: 'width 0.15s ease-out, height 0.15s ease-out' 
        }}
      />
      {/* Small center dot for precision - White */}
      <div 
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-white"
        style={{
          width: '4px',
          height: '4px',
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
};

export default CursorSpotlight;