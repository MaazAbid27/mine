"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useBirthdayData } from "@/hooks/use-birthday-data";

export default function FinalSurprise() {
  const { girlfriendName } = useBirthdayData();
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    
    // Massive confetti burst
    const duration = 5000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 10,
        angle: 60,
        spread: 80,
        origin: { x: 0, y: 0.8 },
        colors: ['#FF8A65', '#FFB199', '#FF3B6E', '#ffffff']
      });
      confetti({
        particleCount: 10,
        angle: 120,
        spread: 80,
        origin: { x: 1, y: 0.8 },
        colors: ['#FF8A65', '#FFB199', '#FF3B6E', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section className="py-32 px-6 min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#FFF7F0] to-[#FFE3EE]">
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="closed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="text-center z-10"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#7A1D4B]/70 mb-4">
              But wait...
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-[#211A2B] mb-12">
              I have one more thing.
            </h2>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
              className="px-10 py-5 bg-gradient-to-r from-[#FF3B6E] to-[#FF8A65] text-white rounded-full font-bold text-xl shadow-[0_10px_30px_rgba(217,119,127,0.4)] hover:shadow-[0_15px_40px_rgba(217,119,127,0.6)] transition-all"
            >
              Open it 🎁
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="opened"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
            className="text-center z-10 w-full max-w-4xl"
          >
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-5xl md:text-8xl font-serif font-bold text-[#FF3B6E] mb-6 leading-tight"
            >
              HAPPY BIRTHDAY, <br/>
              {girlfriendName.toUpperCase()} ❤️
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-2xl md:text-4xl font-serif italic text-[#211A2B] mb-12"
            >
              I love you.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
              className="space-y-2"
            >
              <p className="text-[#211A2B]/70">Now go eat cake.</p>
              <p className="text-sm text-[#211A2B]/50 uppercase tracking-widest">
                And yes, I expect a slice.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ambient background effects when opened */}
      {isOpened && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF8A65] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "1s" }} />
        </motion.div>
      )}
    </section>
  );
}

