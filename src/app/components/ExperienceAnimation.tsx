"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Floating code symbols/blocks
function FloatingElements() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.children.forEach((child, i) => {
        child.position.y += Math.sin(state.clock.elapsedTime + i) * 0.002;
        child.rotation.x = state.clock.elapsedTime * 0.3 + i;
        child.rotation.z = state.clock.elapsedTime * 0.2 + i;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Code blocks */}
      <mesh position={[2, 1, 0]}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.5} wireframe />
      </mesh>
      
      <mesh position={[-2, -1, 1]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#ff4500" emissive="#ff4500" emissiveIntensity={0.5} wireframe />
      </mesh>
      
      <mesh position={[0, 2, -1]}>
        <octahedronGeometry args={[0.7]} />
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.5} wireframe />
      </mesh>
      
      <mesh position={[-1, -2, -1]}>
        <tetrahedronGeometry args={[0.6]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.5} wireframe />
      </mesh>
      
      <mesh position={[1.5, -1, 2]}>
        <icosahedronGeometry args={[0.5]} />
        <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.5} wireframe />
      </mesh>
      
      {/* Rings */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.3} />
      </mesh>
      
      <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
        <torusGeometry args={[1.8, 0.05, 16, 100]} />
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
}

// Particles
function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const count = 500;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i + 1] = (Math.random() - 0.5) * 10;
    positions[i + 2] = (Math.random() - 0.5) * 10;
  }
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ff6b35" transparent opacity={0.6} />
    </points>
  );
}

export default function ExperienceAnimation() {
  return (
    <div className="absolute inset-0 w-full h-full bg-black/40 rounded-2xl">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 5, 15]} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#f59e0b" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        
        <FloatingElements />
        <Particles />
      </Canvas>
    </div>
  );
}
