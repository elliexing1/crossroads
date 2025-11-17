import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function CameraModel({ mouse }) {
  const { scene } = useGLTF("/models/filmCamera.glb");
  const ref = useRef<THREE.Group>(null);
  const baseOffsetY = -1;

  useFrame(() => {
    if (!ref.current) return;

    // Gentle auto rotation (very subtle)
    ref.current.rotation.y += 0.006;

    // Mouse parallax lerp
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      mouse.y * 0.15,
      0.05
    );
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      mouse.x * 0.15,
      0.05
    );

    ref.current.position.x = THREE.MathUtils.lerp(
      ref.current.position.x,
      mouse.x * 0.4,
      0.05
    );
    ref.current.position.y = THREE.MathUtils.lerp(
      ref.current.position.y,
      baseOffsetY - mouse.y * 0.4,
      0.05
    );
  });

  return (
    <group ref={ref} scale={12} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export default function FilmScene3D() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-25">
      <Canvas camera={{ position: [0, 0, 6], fov: 35 }}>
        <ambientLight intensity={0.8} />
        <directionalLight intensity={1.2} position={[3, 5, 5]} />
        <CameraModel mouse={mouse} />
      </Canvas>
    </div>
  );
}
