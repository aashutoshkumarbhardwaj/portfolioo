import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="w-full space-y-3">
      <motion.div
        initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
      >
        <h2 className="text-xl font-bold text-foreground">About</h2>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:text-muted-foreground/90"
      >
        <p className="leading-relaxed">{personal.bio}</p>
      </motion.div>
    </section>
  );
};
