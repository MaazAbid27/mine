"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";
import { useBirthdayData } from "@/hooks/use-birthday-data";

interface HeroProps {
  onOpenGift: () => void;
}

export default function Hero({ onOpenGift }: HeroProps) {
  const [isOpening, setIsOpening] = useState(false);
  const { girlfriendName, heroMessage } = useBirthdayData();

  const handleOpenGift = () => {
    setIsOpening(true);
    
    // Trigger confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF8A65', '#FFB199', '#FF3B6E']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF8A65', '#FFB199', '#FF3B6E']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    setTimeout(() => {
      onOpenGift();
    }, 1500);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Ambient Background Blobs */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFE3EE] rounded-full mix-blend-multiply filter blur-3xl opacity-70"
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FFB199] rounded-full mix-blend-multiply filter blur-3xl opacity-50"
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base uppercase tracking-[0.2em] text-[#7A1D4B]/70 mb-6 font-medium"
        >
          A very important announcement...
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-serif font-bold text-[#211A2B] mb-4 leading-tight"
        >
          Happy Birthday, <br />
          <motion.span 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
            className="inline-block text-[#FF3B6E]"
          >
            {girlfriendName} ❤️
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl md:text-2xl font-serif italic text-[#211A2B]/80 mb-2"
        >
          {heroMessage}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-sm text-[#211A2B]/60 mb-12"
        >
          It&apos;s probably a little excessive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5, type: "spring", bounce: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.button
            onClick={handleOpenGift}
            disabled={isOpening}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={isOpening ? { 
              rotate: [0, -10, 10, -10, 10, 0],
              scale: [1, 1.1, 1.1, 1.1, 1.1, 0],
              opacity: [1, 1, 1, 1, 1, 0]
            } : {}}
            transition={{ duration: isOpening ? 1 : 0.2 }}
            className="relative group px-8 py-4 bg-gradient-to-r from-[#FF3B6E] to-[#FF8A65] text-white rounded-full font-medium text-lg shadow-[0_8px_20px_rgba(217,119,127,0.3)] hover:shadow-[0_12px_25px_rgba(217,119,127,0.4)] transition-shadow"
          >
            <span className="flex items-center gap-2">
              Open Your Present 🎁
            </span>
          </motion.button>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpening ? 0 : 0.5 }}
            transition={{ delay: 2 }}
            className="mt-4 text-sm font-handwriting text-xl"
          >
            Trust me.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

