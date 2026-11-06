"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { useBirthdayData } from "@/hooks/use-birthday-data";

interface MusicPlayerProps {
  autoPlayTriggered: boolean;
}

export default function MusicPlayer({ autoPlayTriggered }: MusicPlayerProps) {
  const { music } = useBirthdayData();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(music);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [music]);

  useEffect(() => {
    if (autoPlayTriggered && audioRef.current && !isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsVisible(true);
          })
          .catch((error) => {
            console.log("Autoplay prevented by browser:", error);
            setIsVisible(true); // Show controls so user can play manually
          });
      }
    }
  }, [autoPlayTriggered, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={togglePlay}
        className="flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/50 text-[#7A1D4B] hover:bg-white transition-colors group"
      >
        {isPlaying ? (
          <Pause size={20} className="fill-current" />
        ) : (
          <Play size={20} className="fill-current ml-1" />
        )}
        
        {/* Equalizer animation when playing */}
        {isPlaying && (
          <div className="absolute -top-2 -right-2 flex items-end gap-[2px] h-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ height: ["4px", "12px", "4px"] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                className="w-1 bg-[#FF3B6E] rounded-t-sm"
              />
            ))}
          </div>
        )}
      </button>
    </motion.div>
  );
}

