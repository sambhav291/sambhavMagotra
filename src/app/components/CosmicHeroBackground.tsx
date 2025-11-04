"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Massive star field
function StarField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const count = 8000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    const colorPalette = [
      new THREE.Color("#ff6b35"), // Orange
      new THREE.Color("#ff4500"), // Red-Orange
      new THREE.Color("#a855f7"), // Purple
      new THREE.Color("#ec4899"), // Pink
      new THREE.Color("#ffffff"), // White
    ];
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Distribute in a large sphere
      const radius = 40 + Math.random() * 60;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Random vibrant color
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
      
      sizes[i] = Math.random() * 2 + 0.5;
    }
    
    return { positions, colors, sizes };
  }, []);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Central glowing planet
function CentralPlanet() {
  const planetRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (planetRef.current) {
      planetRef.current.rotation.y = time * 0.15;
      planetRef.current.rotation.x = Math.sin(time * 0.2) * 0.15;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = -time * 0.1;
      const pulse = 1 + Math.sin(time * 3) * 0.08;
      glowRef.current.scale.set(pulse, pulse, pulse);
    }
  });
  
  return (
    <group position={[2, -1, -20]}>
      {/* Main planet */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial
          color="#ff4500"
          emissive="#ff6b35"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      
      {/* Outer glow layers */}
      <mesh ref={glowRef} scale={1.4}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshBasicMaterial
          color="#ff6b35"
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </mesh>
      
      <mesh scale={1.7}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshBasicMaterial
          color="#ff4500"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

// Floating nebula clouds
function NebulaClouds() {
  const groupRef = useRef<THREE.Group>(null);
  
  const clouds = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 25 + Math.random() * 20;
      const colors = ["#ff6b35", "#a855f7", "#ec4899", "#ff4500"];
      
      return {
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 30,
          Math.sin(angle) * radius - 20,
        ] as [number, number, number],
        scale: 3 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotationSpeed: 0.0005 + Math.random() * 0.001,
      };
    });
  }, []);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });
  
  return (
    <group ref={groupRef}>
      {clouds.map((cloud, i) => (
        <mesh key={i} position={cloud.position} scale={cloud.scale}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial
            color={cloud.color}
            transparent
            opacity={0.15}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

// Animated particles floating
function FloatingOrbs() {
  const orbsRef = useRef<THREE.Group>(null);
  
  const orbs = useMemo(() => {
    return Array.from({ length: 30 }, () => ({
      position: [
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50 - 10,
      ] as [number, number, number],
      scale: Math.random() * 0.5 + 0.3,
      color: ["#ff6b35", "#a855f7", "#ec4899", "#ff4500"][Math.floor(Math.random() * 4)],
      speed: Math.random() * 0.02 + 0.01,
    }));
  }, []);
  
  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.children.forEach((orb, i) => {
        const speed = orbs[i].speed;
        orb.position.y += Math.sin(state.clock.elapsedTime * speed + i) * 0.02;
        orb.rotation.x = state.clock.elapsedTime * speed;
        orb.rotation.y = state.clock.elapsedTime * speed * 0.7;
      });
    }
  });
  
  return (
    <group ref={orbsRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position} scale={orb.scale}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial
            color={orb.color}
            transparent
            opacity={0.6}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={3} color="#ff6b35" distance={50} />
      <pointLight position={[15, 15, 15]} intensity={2} color="#a855f7" distance={40} />
      <pointLight position={[-15, -10, 10]} intensity={1.5} color="#ec4899" distance={35} />
      
      <StarField />
      <CentralPlanet />
      <NebulaClouds />
      <FloatingOrbs />
    </>
  );
}

export default function CosmicHeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 65 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 25, 100]} />
        <Scene />
      </Canvas>
    </div>
  );
}
