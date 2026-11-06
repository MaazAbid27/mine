"use client";

import { motion } from "framer-motion";

export default function RelationshipStats() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif mb-4"
        >
          Our Relationship: A Scientific Analysis
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-[#211A2B]/70"
        >
          Peer-reviewed by absolutely no one.
        </motion.p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-[#FFFFFF] border-b border-gray-100 p-6 text-center">
          <h3 className="font-serif text-xl text-[#7A1D4B]">Official Report</h3>
        </div>
        
        <div className="p-8 md:p-12 space-y-8">
          <StatRow 
            label="Times you've made me laugh" 
            value="∞" 
            delay={0.1} 
            isInfinity 
          />
          <Divider />
          <StatRow 
            label="Times I've been right" 
            value="[QUESTIONABLE]" 
            delay={0.2} 
          />
          <Divider />
          <StatRow 
            label="Times you've been right" 
            value="[UNFORTUNATELY MANY]" 
            delay={0.3} 
          />
          <Divider />
          <StatRow 
            label="Amount I love you" 
            value="Cannot be measured" 
            delay={0.4} 
            highlight 
          />
          <Divider />
          <StatRow 
            label="Probability of me annoying you" 
            value="Very high" 
            delay={0.5} 
          />
        </div>
      </div>
    </section>
  );
}

function StatRow({ label, value, delay, isInfinity = false, highlight = false }: { label: string, value: string, delay: number, isInfinity?: boolean, highlight?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col md:flex-row md:justify-between md:items-center gap-2"
    >
      <span className="text-lg text-[#211A2B]/80 font-medium">{label}</span>
      
      {isInfinity ? (
        <motion.span 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="text-3xl font-serif text-[#FF3B6E] md:text-right"
        >
          {value}
        </motion.span>
      ) : (
        <span className={`text-xl font-serif md:text-right ${highlight ? "text-[#FF3B6E] font-bold" : "text-[#7A1D4B]"}`}>
          {value}
        </span>
      )}
    </motion.div>
  );
}

function Divider() {
  return <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />;
}

