"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useBirthdayData } from "@/hooks/use-birthday-data";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const { timeline } = useBirthdayData();

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto relative" ref={containerRef}>
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif mb-4"
        >
          Previously, in the story of us...
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-[#211A2B]/70"
        >
          Somehow, all of these moments led here.
        </motion.p>
      </div>

      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#FF8A65]/30 -translate-x-1/2" />
        
        {/* Animated Fill Line */}
        <motion.div 
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#FF3B6E] -translate-x-1/2 origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        <div className="space-y-24">
          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={item.id} className="relative flex flex-col md:flex-row items-center md:justify-between group">
                
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#FFF7F0] border-2 border-[#FF3B6E] -translate-x-1/2 z-10 group-hover:scale-150 group-hover:bg-[#FF3B6E] transition-all duration-300" />
                
                {/* Content - Left on Desktop (Even) */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                  className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}
                >
                  <div className="text-sm font-bold text-[#FF3B6E] tracking-widest uppercase mb-2">
                    Chapter 0{index + 1}
                  </div>
                  <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                  <p className="text-[#211A2B]/70 mb-4">{item.description}</p>
                  <div className="text-sm font-handwriting text-xl text-[#7A1D4B]/60">
                    {item.date}
                  </div>
                </motion.div>

                {/* Image - Right on Desktop (Even) */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`hidden md:block w-5/12 ${isEven ? "md:order-2 md:pl-12" : "md:pr-12"}`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/50">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
                
                {/* Mobile Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="md:hidden w-full pl-12 mt-6"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/50">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

