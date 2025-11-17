import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

function FilmCamera({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Follow mouse with smooth interpolation
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        mousePosition.x * 2,
        0.05
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        mousePosition.y * 2,
        0.05
      );
      
      // Gentle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Camera body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.5, 2]} />
        <meshStandardMaterial
          color="#F1E82F"
          metalness={0.8}
          roughness={0.2}
          emissive="#FF401A"
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>
      
      {/* Lens */}
      <mesh position={[0, 0, 1.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.8, 32]} />
        <meshStandardMaterial
          color="#83B446"
          metalness={0.9}
          roughness={0.1}
          emissive="#83B446"
          emissiveIntensity={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Lens glass */}
      <mesh position={[0, 0, 1.9]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
        <meshStandardMaterial
          color="#502FAF"
          metalness={1}
          roughness={0}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Film reel on top */}
      <mesh position={[-0.8, 1, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
        <meshStandardMaterial
          color="#FA0CFE"
          metalness={0.7}
          roughness={0.3}
          emissive="#FA0CFE"
          emissiveIntensity={0.2}
          transparent
          opacity={0.5}
        />
      </mesh>

      <mesh position={[0.8, 1, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
        <meshStandardMaterial
          color="#FA0CFE"
          metalness={0.7}
          roughness={0.3}
          emissive="#FA0CFE"
          emissiveIntensity={0.2}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Viewfinder */}
      <mesh position={[0, 0.5, -1]}>
        <boxGeometry args={[0.6, 0.6, 0.4]} />
        <meshStandardMaterial
          color="#FF401A"
          metalness={0.6}
          roughness={0.4}
          emissive="#F3BC2E"
          emissiveIntensity={0.2}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
}

export default function FilmScene3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#F1E82F" />
        <pointLight position={[-10, -10, 5]} intensity={0.6} color="#FA0CFE" />
        <pointLight position={[0, -10, -5]} intensity={0.4} color="#83B446" />
        
        <FilmCamera position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}
