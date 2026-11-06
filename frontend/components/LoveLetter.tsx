"use client";

import { motion } from "framer-motion";
import { useBirthdayData } from "@/hooks/use-birthday-data";

export default function LoveLetter() {
  const { finalLetter, boyfriendName } = useBirthdayData();
  
  // Split letter into paragraphs
  const paragraphs = finalLetter.split('\n\n');

  return (
    <section className="py-32 px-6 max-w-3xl mx-auto min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5 }}
        className="text-center mb-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-[#7A1D4B]/50 mb-6">
          Okay, jokes aside...
        </p>
        <h2 className="text-4xl md:text-6xl font-serif text-[#211A2B]">
          For You.
        </h2>
      </motion.div>

      <div className="space-y-8 text-lg md:text-xl text-[#211A2B]/80 leading-relaxed font-serif">
        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            {paragraph}
          </motion.p>
        ))}
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: paragraphs.length * 0.3 + 0.5 }}
          className="pt-12 text-right"
        >
          <p className="font-handwriting text-4xl text-[#7A1D4B]">
            — {boyfriendName}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

