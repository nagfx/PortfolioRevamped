"use client"

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export function StarryBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(star);
    };

    for (let i = 0; i < 100; i++) {
      createStar();
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return <div ref={containerRef} className={`starry-background ${theme === 'dark' ? 'dark' : 'light'}`} />;
}