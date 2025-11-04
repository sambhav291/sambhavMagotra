'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface SpaceBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
}

export default function SpaceBackground({ intensity = 'medium' }: SpaceBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true,
      antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 5;

    // Create stars
    const starCount = intensity === 'low' ? 1000 : intensity === 'medium' ? 2000 : 3000;
    const starsGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 100;
      starPositions[i + 1] = (Math.random() - 0.5) * 100;
      starPositions[i + 2] = (Math.random() - 0.5) * 100;

      // Vibrant star colors (orange, red, purple, pink)
      const colorChoice = Math.random();
      if (colorChoice < 0.25) {
        starColors[i] = 1; starColors[i + 1] = 0.5; starColors[i + 2] = 0; // Orange
      } else if (colorChoice < 0.5) {
        starColors[i] = 1; starColors[i + 1] = 0; starColors[i + 2] = 0; // Red
      } else if (colorChoice < 0.75) {
        starColors[i] = 0.5; starColors[i + 1] = 0; starColors[i + 2] = 1; // Purple
      } else {
        starColors[i] = 1; starColors[i + 1] = 0; starColors[i + 2] = 0.5; // Pink
      }
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starsMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Create nebula clouds
    const nebulaCount = intensity === 'low' ? 3 : intensity === 'medium' ? 5 : 8;
    const nebulaClouds: THREE.Mesh[] = [];

    for (let i = 0; i < nebulaCount; i++) {
      const geometry = new THREE.SphereGeometry(2, 32, 32);
      const colorChoice = Math.random();
      let color;
      if (colorChoice < 0.25) color = new THREE.Color(0xff6600); // Orange
      else if (colorChoice < 0.5) color = new THREE.Color(0xff0000); // Red
      else if (colorChoice < 0.75) color = new THREE.Color(0x8000ff); // Purple
      else color = new THREE.Color(0xff0080); // Pink

      const material = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.1,
        blending: THREE.AdditiveBlending,
      });

      const cloud = new THREE.Mesh(geometry, material);
      cloud.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      );
      nebulaClouds.push(cloud);
      scene.add(cloud);
    }

    // Animation
    let animationFrameId: number;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      stars.rotation.y += 0.0002;
      stars.rotation.x += 0.0001;

      nebulaClouds.forEach((cloud, index) => {
        cloud.rotation.x += 0.001 * (index + 1);
        cloud.rotation.y += 0.001 * (index + 1);
      });

      renderer.render(scene, camera);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      nebulaClouds.forEach(cloud => {
        cloud.geometry.dispose();
        (cloud.material as THREE.Material).dispose();
      });
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
}