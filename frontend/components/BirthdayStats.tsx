"use client";

import { motion } from "framer-motion";

const stats = [
  {
    title: "Cuteness",
    value: "1000000/10",
    caption: "Scientists are concerned."
  },
  {
    title: "Ability to steal my attention",
    value: "100%",
    caption: "Extremely effective."
  },
  {
    title: "Kaleshness",
    value: "9999999999/∞",
    caption: "Issok bacha call karu?🥹"

    
  },
  {
    title: "Ability to annoy me",
    value: "97%",
    caption: "Respectfully impressive."
  },
  {
    title: "Ability to make me happy",
    value: "∞",
    caption: "No known upper limit."
  },
  {
    title: "Relationship status",
    value: "Still together hehe 😝❤️",
    caption: "No backing out now, you are stuck with me."

    
  }
];

export default function BirthdayStats() {
  return (
    <section id="dashboard" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-serif mb-4"
        >
          Welcome to your birthday headquarters.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[#211A2B]/70"
        >
          Your mission: enjoy this website and pretend my jokes are funny.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`glass-card rounded-3xl p-8 flex flex-col justify-center items-center text-center ${
              index === stats.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <h3 className="text-sm uppercase tracking-wider text-[#7A1D4B]/70 mb-4 font-medium">
              {stat.title}
            </h3>
            
            {stat.value === "∞" ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="text-6xl font-serif text-[#FF3B6E] mb-4"
              >
                ∞
              </motion.div>
            ) : (
              <div className="text-4xl md:text-5xl font-serif text-[#FF3B6E] mb-4">
                {stat.value}
              </div>
            )}
            
            {stat.caption && (
              <p className="text-sm text-[#211A2B]/60 italic font-serif">
                &quot;{stat.caption}&quot;
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

