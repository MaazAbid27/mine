"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useBirthdayData } from "@/hooks/use-birthday-data";

export default function GreatestHits() {
  const { greatestHits } = useBirthdayData();
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < maxScroll - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      track.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows, greatestHits.length]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const firstCard = track?.children[0] as HTMLElement | undefined;
    if (!track || !firstCard) return;

    const gap = parseFloat(getComputedStyle(track).columnGap || "0");
    const step = firstCard.getBoundingClientRect().width + gap;

    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const arrowClasses =
    "absolute top-1/2 -translate-y-1/2 z-30 w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-white/15 bg-white/5 backdrop-blur-sm text-white transition-all hover:bg-white/15 hover:border-[#FF3B6E]/50 hover:text-[#FF3B6E] disabled:opacity-20 disabled:hover:bg-white/5 disabled:hover:text-white disabled:hover:border-white/15 disabled:cursor-not-allowed";

  return (
    <section className="relative py-24 bg-[#1B1723] text-white overflow-hidden">
      <div className="text-center mb-12 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif mb-4 text-[#FFFFFF]"
        >
          Our Greatest Hits
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/70"
        >
          Use the arrows to relive them.
        </motion.p>
      </div>

      <div className="relative">
        <div
          ref={trackRef}
          className="flex gap-8 px-12 md:px-24 h-[55vh] items-center overflow-x-hidden scroll-smooth"
        >
          {greatestHits.map((hit, i) => {
            // Alternate slight rotations for visual interest
            const rotation = i % 2 === 0 ? 2 : -2;

            return (
              <motion.div
                key={hit.id}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="relative w-[80vw] md:w-[40vw] lg:w-[30vw] h-[50vh] shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
                style={{ rotate: rotation }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={hit.image}
                  alt={hit.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-20 flex flex-col justify-end p-8">
                  <p className="text-[#FF8A65] font-bold tracking-widest text-sm mb-2 uppercase">
                    {hit.date}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">
                    {hit.title}
                  </h3>
                  <p className="text-white/80 italic font-serif">
                    &quot;{hit.caption}&quot;
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* End card */}
          <div className="w-[80vw] md:w-[40vw] lg:w-[30vw] h-[50vh] shrink-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-3xl font-serif text-[#FF8A65] mb-4">To be continued...</h3>
              <p className="text-white/50">We have a lot more memories to make.</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label="Previous"
          className={`${arrowClasses} left-3 md:left-8`}
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="Next"
          className={`${arrowClasses} right-3 md:right-8`}
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
