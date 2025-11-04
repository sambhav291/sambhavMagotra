"use client";

import { useEffect, useRef } from "react";

export default function VantaHeroBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      // Dynamically import THREE and Vanta
      Promise.all([
        import('three'),
        import('vanta/dist/vanta.halo.min')
      ]).then(([THREE, VANTA]) => {
        // @ts-ignore
        window.THREE = THREE;
        
        vantaEffect.current = (VANTA as any).default({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          baseColor: 0xff4500,
          backgroundColor: 0x000000,
          backgroundAlpha: 0.0,
          amplitudeFactor: 0.8,
          xOffset: 0.15,
          yOffset: 0.22,
          size: 1.5,
          scale: 1.0,
          scaleMobile: 1.0,
        });
      }).catch((err) => {
        console.error('Vanta initialization error:', err);
      });
    }

    return () => {
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (e) {
          console.error('Vanta cleanup error:', e);
        }
      }
    };
  }, []);

  return (
    <div 
      ref={vantaRef} 
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ 
        zIndex: 1,
        mixBlendMode: 'lighten',
        opacity: 0.75
      }}
    />
  );
}
