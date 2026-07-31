import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device supports hover (desktop)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    if (!mediaQuery.matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let outlineX = -100;
    let outlineY = -100;
    let animationFrameId;
    let hasMoved = false;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        outlineX = mouseX;
        outlineY = mouseY;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (outlineRef.current) outlineRef.current.style.opacity = '1';
      }

      // Move the dot immediately for responsiveness
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const animateOutline = () => {
      if (hasMoved) {
        // Lerp (linear interpolation) for smooth trailing effect
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        if (outlineRef.current) {
          outlineRef.current.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`;
        }
      }

      animationFrameId = requestAnimationFrame(animateOutline);
    };

    // Start animation loop
    animateOutline();

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName?.toLowerCase() === 'a' ||
        target.tagName?.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button');

      if (isClickable) {
        dotRef.current?.classList.add('hovered');
        outlineRef.current?.classList.add('hovered');
      } else {
        dotRef.current?.classList.remove('hovered');
        outlineRef.current?.classList.remove('hovered');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ opacity: 0 }} />
      <div ref={outlineRef} className="cursor-outline" style={{ opacity: 0 }} />
    </>
  );
};

export default CustomCursor;

