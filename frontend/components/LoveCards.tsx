"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { useBirthdayData } from "@/hooks/use-birthday-data";

export default function LoveCards() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { favoriteThings } = useBirthdayData();

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif mb-4"
        >
          A Completely Objective List of Things I Love About You
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-[#211A2B]/70"
        >
          This research has been conducted by a highly qualified professional (me).
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteThings.map((thing, index) => {
          const isExpanded = expandedIndex === index;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setExpandedIndex(isExpanded ? null : index)}
              className={`glass-card rounded-3xl p-8 cursor-pointer relative overflow-hidden transition-colors duration-300 ${
                isExpanded ? "bg-white/80 shadow-xl" : "hover:bg-white/60"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-serif font-bold text-[#7A1D4B]">
                  {thing.title}
                </h3>
                <motion.div
                  animate={{ 
                    scale: isExpanded ? 1.2 : 1,
                    color: isExpanded ? "#FF3B6E" : "#FF8A65"
                  }}
                >
                  <Heart size={20} className={isExpanded ? "fill-current" : ""} />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#211A2B]/80 leading-relaxed">
                      {thing.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {!isExpanded && (
                <p className="text-sm text-[#211A2B]/40 mt-4 italic">
                  Click to reveal
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

