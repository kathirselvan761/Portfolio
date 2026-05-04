import React, { useEffect, useState } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles for a subtle floating dust/star effect
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1, // 1px to 4px
      x: Math.random() * 100, // 0% to 100%
      y: Math.random() * 100, // 0% to 100%
      duration: Math.random() * 20 + 15, // 15s to 35s
      delay: Math.random() * 10, // 0s to 10s
      opacity: Math.random() * 0.4 + 0.1, // 0.1 to 0.5
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="animated-background">
      {/* Animated Glowing Blobs */}
      <div className="bg-shape bg-shape-1"></div>
      <div className="bg-shape bg-shape-2"></div>
      <div className="bg-shape bg-shape-3"></div>
      
      {/* Floating Particles/Stars */}
      <div className="particles-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          ></div>
        ))}
      </div>
      
      {/* Grid Overlay for texture */}
      <div className="bg-grid"></div>
    </div>
  );
};

export default AnimatedBackground;
