"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const [heartClicks, setHeartClicks] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [showSparkleMsg, setShowSparkleMsg] = useState(false);

  const handleHeartClick = () => {
    setHeartClicks(prev => prev + 1);
  };

  return (
    <footer className="py-12 px-6 bg-[#FFF7F0] border-t border-[#FF8A65]/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Easter Egg 1: The Heart */}
        <div className="mb-6 relative">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleHeartClick}
            className="text-[#FF3B6E] p-2"
          >
            <Heart size={24} className={heartClicks >= 5 ? "fill-current" : ""} />
          </motion.button>
          
          <AnimatePresence>
            {heartClicks >= 5 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-lg shadow-lg border border-[#FF8A65]/30 text-sm text-[#7A1D4B]"
              >
                <p className="font-bold mb-1">You found the secret heart.</p>
                <p className="italic">I love you. Obviously.</p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-b border-r border-[#FF8A65]/30" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="text-[#211A2B]/60 text-sm mb-8">
          Made with love, caffeine, and questionable amounts of CSS.
        </p>

        {/* Easter Egg 2: The Warning */}
        <div className="relative mb-8">
          <button 
            onClick={() => setShowWarning(true)}
            className="text-xs text-[#211A2B]/30 hover:text-[#211A2B]/60 transition-colors underline underline-offset-4"
          >
            Definitely don&apos;t click this.
          </button>
          
          <AnimatePresence>
            {showWarning && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-sm font-bold text-[#FF3B6E]"
              >
                I literally warned you.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Easter Egg 3: The Sparkle */}
        <button 
          onClick={() => setShowSparkleMsg(true)}
          className="absolute top-12 right-12 text-[#FF8A65] hover:text-[#FF3B6E] transition-colors"
        >
          <Sparkles size={16} />
        </button>
        
        <AnimatePresence>
          {showSparkleMsg && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-20 right-12 max-w-[200px] text-right text-xs text-[#7A1D4B]/70 bg-white/80 backdrop-blur-sm p-2 rounded shadow-sm"
            >
              This sparkle is sponsored by my inability to stop being cheesy.
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </footer>
  );
}

