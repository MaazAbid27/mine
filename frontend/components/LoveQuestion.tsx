"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const NO_TEXTS = [
  "No",
  "Are you sure?",
  "Really?",
  "Nice try.",
  "That option is unavailable.",
  "Still no?",
  "I'm not giving up.",
  "Just click Yes."
];

export default function LoveQuestion() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNoHoverOrClick = () => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      // Keep button within container bounds
      const maxX = container.width - 100; // approx button width
      const maxY = container.height - 50; // approx button height
      
      // Generate random position, avoiding the center where YES is
      let newX, newY;
      do {
        newX = Math.random() * maxX - maxX / 2;
        newY = Math.random() * maxY - maxY / 2;
      } while (Math.abs(newX) < 100 && Math.abs(newY) < 50); // Avoid center

      setNoPosition({ x: newX, y: newY });
      setNoCount((prev) => prev + 1);
    }
  };

  const handleYesClick = () => {
    setYesPressed(true);
    
    // Big confetti burst
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF3B6E', '#FFB199', '#D4FF3D']
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF3B6E', '#FFB199', '#D4FF3D']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const currentNoText = NO_TEXTS[Math.min(noCount, NO_TEXTS.length - 1)];
  
  // If they clicked No too many times, change it to Yes
  const isForcedYes = noCount >= NO_TEXTS.length;

  return (
    <section className="py-32 px-6 min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-center mb-12 z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.2em] text-[#7A1D4B]/70 mb-4 font-medium"
        >
          One final scientific question.
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif text-[#211A2B]"
        >
          Do you love me?
        </motion.h3>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full max-w-2xl h-[300px] flex items-center justify-center gap-8 z-10"
      >
        <AnimatePresence mode="wait">
          {!yesPressed ? (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleYesClick}
                className="px-10 py-4 bg-[#FF3B6E] text-white rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-shadow z-20"
              >
                YES ❤️
              </motion.button>

              <motion.button
                animate={{ 
                  x: noPosition.x, 
                  y: noPosition.y,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onHoverStart={!isMobile ? handleNoHoverOrClick : undefined}
                onClick={handleNoHoverOrClick}
                className={`absolute px-8 py-4 rounded-full font-bold text-lg transition-colors z-20 ${
                  isForcedYes 
                    ? "bg-[#FF3B6E] text-white shadow-lg" 
                    : "bg-white text-[#211A2B] border-2 border-[#FF8A65] shadow-sm"
                }`}
                style={{ 
                  // Initial position offset to be next to YES
                  left: "calc(50% + 60px)",
                  top: "calc(50% - 28px)"
                }}
              >
                {isForcedYes ? "YES ❤️" : currentNoText}
              </motion.button>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <h4 className="text-5xl md:text-7xl font-serif text-[#FF3B6E] mb-4">
                I KNEW IT ❤️
              </h4>
              <p className="text-xl text-[#211A2B]/80 font-serif italic">
                Good. You&apos;re stuck with me.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Background decorative hearts */}
      {yesPressed && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                y: "100vh", 
                x: `${Math.random() * 100}vw`,
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.2
              }}
              animate={{ 
                y: "-20vh",
                rotate: Math.random() * 360
              }}
              transition={{ 
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
              className="absolute text-[#FF8A65]"
            >
              ❤️
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}

