// src/components/FilmScene3D.tsx
import { useEffect, useState } from "react";
import logoIcon from "../assets/logo-icon.png"; // adjust path if needed

type Offset = { x: number; y: number };

export default function FilmScene3D() {
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      // normalize mouse to [-1, 1]
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;

      // very small movement so it feels almost static
      setOffset({
        x: nx * 10, // 10px max in either direction
        y: ny * 10,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
      <img
        src={logoIcon}
        alt="Logo"
        className="opacity-5 md:opacity-10 transition-transform duration-150 ease-out"
        style={{
          // center + tiny parallax
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          maxWidth: "1000px",
          width: "60vw",
        }}
      />
    </div>
  );
}
