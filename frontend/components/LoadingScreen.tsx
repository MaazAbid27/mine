"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(skipTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFF7F0] text-[#211A2B]"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5, 
          ease: "easeInOut" 
        }}
        className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF8A65] to-[#FFD9C2] shadow-[0_0_20px_rgba(232,180,184,0.6)] mb-8"
      />
      
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl font-serif mb-3"
      >
        Preparing something for you...
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.6 }}
        className="text-sm font-sans tracking-wide"
      >
        Please wait. This is important.
      </motion.p>

      {showSkip && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          whileHover={{ opacity: 0.8 }}
          onClick={onComplete}
          className="absolute bottom-10 text-xs underline underline-offset-4"
        >
          Skip loading
        </motion.button>
      )}
    </motion.div>
  );
}

