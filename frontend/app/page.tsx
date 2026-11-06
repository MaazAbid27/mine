"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import MusicPlayer from "@/components/MusicPlayer";
import BirthdayStats from "@/components/BirthdayStats";
import PhotoGallery from "@/components/PhotoGallery";
import Timeline from "@/components/Timeline";
import LoveCards from "@/components/LoveCards";
import LoveNotes from "@/components/LoveNotes";
import JokeMachine from "@/components/JokeMachine";
import RelationshipStats from "@/components/RelationshipStats";
import LoveQuestion from "@/components/LoveQuestion";
import GreatestHits from "@/components/GreatestHits";
import LoveLetter from "@/components/LoveLetter";
import FinalSurprise from "@/components/FinalSurprise";
import Footer from "@/components/Footer";
import { BirthdayDataProvider, useBirthdayDataState } from "@/hooks/use-birthday-data";

function HomeContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
  const [musicTriggered, setMusicTriggered] = useState(false);
  const { data, error } = useBirthdayDataState();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleOpenGift = () => {
    setMusicTriggered(true);
    setShowMainContent(true);
    // Scroll to next section smoothly
    setTimeout(() => {
      document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  if (error) {
    return (
      <main className="relative min-h-screen bg-[#FFF7F0] flex items-center justify-center p-8 text-center text-[#211A2B]">
        <div>
          <p className="text-lg font-serif mb-2">Couldn&apos;t load the site content.</p>
          <p className="text-sm text-[#211A2B]/70">Make sure the backend API is running, then refresh.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#FFF7F0] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading || !data ? (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        ) : (
          <div key="content">
            <Hero onOpenGift={handleOpenGift} />

            {showMainContent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-20 bg-[#FFF7F0]"
              >
                <BirthdayStats />
                <PhotoGallery />
                <Timeline />
                <LoveCards />
                <LoveNotes />
                <JokeMachine />
                <RelationshipStats />
                <LoveQuestion />
                <GreatestHits />
                <LoveLetter />
                <FinalSurprise />
                <Footer />
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>

      {data && <MusicPlayer autoPlayTriggered={musicTriggered} />}
    </main>
  );
}

export default function Home() {
  return (
    <BirthdayDataProvider>
      <HomeContent />
    </BirthdayDataProvider>
  );
}

