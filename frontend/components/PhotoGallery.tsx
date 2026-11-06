"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useBirthdayData } from "@/hooks/use-birthday-data";

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const { memories } = useBirthdayData();

  const openLightbox = (index: number) => {
    setSelectedPhoto(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = "auto";
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % memories.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto - 1 + memories.length) % memories.length);
    }
  };

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif mb-4"
        >
          Exhibit A: Evidence That We Look Good Together
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-[#211A2B]/70 mb-2"
        >
          I&apos;ve conducted extensive research.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-xs text-[#211A2B]/50 uppercase tracking-widest"
        >
          * Results may be biased.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
        {memories.map((memory, index) => {
          // Generate a random rotation between -6 and 6 degrees
          const rotation = (index % 2 === 0 ? 1 : -1) * (Math.random() * 4 + 2);
          
          return (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: 50, rotate: rotation - 10 }}
              whileInView={{ opacity: 1, y: 0, rotate: rotation }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0, 
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
              onClick={() => openLightbox(index)}
              className="polaroid cursor-pointer group"
            >
              <div className="relative aspect-square overflow-hidden mb-4 bg-gray-100">
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="text-center font-handwriting">
                <h3 className="text-2xl text-[#211A2B] mb-1">{memory.title}</h3>
                <p className="text-sm text-[#7A1D4B]/70">{memory.date}</p>
              </div>
              
              {/* Tape effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-sm border border-white/20 shadow-sm rotate-[-2deg] z-10" />
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
            >
              <X size={32} />
            </button>

            <button 
              onClick={prevPhoto}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-50"
            >
              <ChevronLeft size={48} />
            </button>

            <button 
              onClick={nextPhoto}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-50"
            >
              <ChevronRight size={48} />
            </button>

            <motion.div
              key={selectedPhoto}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            >
              <img 
                src={memories[selectedPhoto].image} 
                alt={memories[selectedPhoto].title}
                className="max-w-full max-h-[70vh] object-contain rounded-sm shadow-2xl"
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-center text-white"
              >
                <h3 className="text-2xl font-serif mb-2">{memories[selectedPhoto].title}</h3>
                <p className="text-white/70 italic font-serif">&quot;{memories[selectedPhoto].caption}&quot;</p>
                <p className="text-white/50 text-sm mt-2">{memories[selectedPhoto].date}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

