"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBirthdayData } from "@/hooks/use-birthday-data";

export default function JokeMachine() {
  const { jokes } = useBirthdayData();
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
  const [showPunchline, setShowPunchline] = useState(false);
  const [terribleCount, setTerribleCount] = useState(0);

  const nextJoke = () => {
    setShowPunchline(false);
    setTimeout(() => {
      setCurrentJokeIndex((prev) => (prev + 1) % jokes.length);
    }, 300);
  };

  const handleTerrible = () => {
    setTerribleCount((prev) => prev + 1);
  };

  const getTerribleResponse = () => {
    switch (terribleCount) {
      case 1: return "Correct.";
      case 2: return "But you're still here.";
      case 3: return "I can do worse.";
      case 4: return "Too late.";
      default: return "I have no shame.";
    }
  };

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-serif mb-4">The Official Dad Joke Department</h2>
        <p className="text-lg text-[#211A2B]/70">I&apos;m sorry in advance.</p>
      </motion.div>

      <div className="glass-card rounded-3xl p-8 md:p-12 min-h-[300px] flex flex-col justify-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF8A65] via-[#FF3B6E] to-[#FF8A65]" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentJokeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="flex-grow flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-serif mb-6 text-[#211A2B]">
              {jokes[currentJokeIndex].setup}
            </h3>
            
            <div className="h-20">
              {showPunchline ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl md:text-2xl font-serif italic text-[#FF3B6E]"
                >
                  {jokes[currentJokeIndex].punchline}
                </motion.p>
              ) : (
                <button
                  onClick={() => setShowPunchline(true)}
                  className="px-6 py-2 rounded-full border border-[#FF8A65] text-[#7A1D4B] hover:bg-[#FF8A65]/20 transition-colors"
                >
                  Reveal Answer
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {showPunchline && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={nextJoke}
              className="px-6 py-3 bg-[#FF3B6E] text-white rounded-full font-medium hover:bg-[#E62E5C] transition-colors w-full sm:w-auto"
            >
              Give me another
            </button>
            
            <div className="relative w-full sm:w-auto">
              <button
                onClick={handleTerrible}
                className="px-6 py-3 border border-[#211A2B]/20 text-[#211A2B]/60 rounded-full font-medium hover:bg-black/5 transition-colors w-full sm:w-auto"
              >
                {terribleCount === 0 ? "That was terrible" : "Please don't"}
              </button>
              
              <AnimatePresence>
                {terribleCount > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    key={terribleCount}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-4 py-2 rounded-lg shadow-md text-sm font-bold text-[#FF3B6E] border border-[#FF8A65]/30"
                  >
                    {getTerribleResponse()}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-b border-r border-[#FF8A65]/30" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

