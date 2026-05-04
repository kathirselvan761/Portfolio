import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress counting up to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 4; // Random increment
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen-modern">
      {/* Background ambient glow */}
      <div className="loading-glow"></div>

      <div className="loader-container">
        {/* Outer rotating ring */}
        <motion.div 
          className="ring ring-outer"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
        
        {/* Inner rotating ring (opposite direction) */}
        <motion.div 
          className="ring ring-inner"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />

        {/* Center core with percentage */}
        <div className="loader-core">
          <span className="loader-percentage text-gradient">{Math.min(progress, 100)}%</span>
        </div>
      </div>
      
      <motion.div 
        className="loading-text-container"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="loading-title">
          <span className="text-gradient">KATHIRSELVAN</span> PORTFOLIO
        </h2>
        
        {/* Progress bar */}
        <div className="loading-bar-bg">
          <motion.div 
            className="loading-bar-fill"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
        
        <p className="loading-subtitle">Initializing experience...</p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
