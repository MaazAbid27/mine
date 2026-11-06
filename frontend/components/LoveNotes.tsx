"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useBirthdayData } from "@/hooks/use-birthday-data";

export default function LoveNotes() {
  const { loveNotes } = useBirthdayData();
  const [openedNotes, setOpenedNotes] = useState<Set<number>>(new Set());

  const toggleNote = (index: number) => {
    const newOpened = new Set(openedNotes);
    if (newOpened.has(index)) {
      newOpened.delete(index);
    } else {
      newOpened.add(index);
    }
    setOpenedNotes(newOpened);
  };

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto bg-[#FFFFFF] rounded-[3rem] my-12 shadow-sm border border-[#FF8A65]/20">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif mb-4"
        >
          Things I probably don&apos;t say enough.
        </motion.h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {loveNotes.map((note, index) => {
          const isOpened = openedNotes.has(index);
          // Random rotation for the folded state
          const randomRotate = (index % 2 === 0 ? 1 : -1) * (Math.random() * 10 + 5);
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative perspective-1000"
            >
              <motion.div
                onClick={() => toggleNote(index)}
                animate={{ 
                  rotateZ: isOpened ? 0 : randomRotate,
                  scale: isOpened ? 1.05 : 1,
                  y: isOpened ? -10 : 0
                }}
                whileHover={!isOpened ? { scale: 1.05, rotateZ: randomRotate / 2 } : {}}
                className={`cursor-pointer paper-texture bg-[#FFFFFF] shadow-md border border-gray-200 p-6 flex items-center justify-center transition-all duration-500 ${
                  isOpened ? "w-64 h-64 md:w-72 md:h-72 rounded-sm" : "w-32 h-24 md:w-40 md:h-32 rounded-md"
                }`}
                style={{
                  boxShadow: isOpened 
                    ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                }}
              >
                {isOpened ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-center"
                  >
                    <p className="font-handwriting text-2xl md:text-3xl text-[#211A2B] leading-relaxed">
                      {note}
                    </p>
                    <div className="mt-4 text-[#FF3B6E]">❤️</div>
                  </motion.div>
                ) : (
                  <div className="text-center">
                    <div className="w-8 h-1 bg-[#FF8A65]/50 rounded-full mx-auto mb-2" />
                    <p className="text-xs text-[#211A2B]/40 uppercase tracking-widest">Open me</p>
                  </div>
                )}
                
                {/* Fold line effect when closed */}
                {!isOpened && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.02] to-transparent pointer-events-none" />
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

