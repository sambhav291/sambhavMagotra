"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Central rotating nebula
function CentralNebula() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main sphere */}
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.8}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Glow layers */}
      <mesh scale={1.3}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial
          color="#ec4899"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>
      
      <mesh scale={1.6}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial
          color="#ff4500"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Orbiting rings */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.5} />
      </mesh>
      
      <mesh rotation={[0, Math.PI / 3, Math.PI / 2]}>
        <torusGeometry args={[2.3, 0.05, 16, 100]} />
        <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

// Floating stars
function FloatingStars() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const count = 1000;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20;
    positions[i + 1] = (Math.random() - 0.5) * 20;
    positions[i + 2] = (Math.random() - 0.5) * 20;
  }
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color="#ffffff" 
        transparent 
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ContactAnimation() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#a855f7" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#ec4899" />
        
        <CentralNebula />
        <FloatingStars />
      </Canvas>
    </div>
  );
}
