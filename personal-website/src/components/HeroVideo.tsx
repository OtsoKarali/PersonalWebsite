'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface HeroVideoProps {
  isRevealed: boolean;
  onEnter: () => void;
  onHover: (isHovering: boolean) => void;
}

export function HeroVideo({ isRevealed, onEnter, onHover }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isRevealed) {
        // Fade out the video when revealed
        videoRef.current.style.opacity = '0';
      } else {
        // Ensure video is visible and playing when not revealed
        videoRef.current.style.opacity = '1';
        if (videoRef.current.paused) {
          videoRef.current.play().catch(console.error);
        }
      }
    }
  }, [isRevealed]);

  const handleVideoClick = () => {
    onEnter();
  };

  const handleMouseEnter = () => {
    onHover(true);
  };

  const handleMouseLeave = () => {
    onHover(false);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{ cursor: 'pointer' }}
      onClick={handleVideoClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        src="/Animations/hero-animation.mp4"
        className="w-full h-full object-cover transition-opacity duration-700"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          maxWidth: '100vw',
          maxHeight: '100vh',
          objectFit: 'cover',
        }}
      />
      
      {/* Click instruction overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="pointer-events-none absolute bottom-12 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-center text-white backdrop-blur-sm"
      >
        Click to enter
      </motion.div>
    </motion.div>
  );
} 