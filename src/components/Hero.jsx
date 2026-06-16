import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="w-full">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between items-center sm:items-start">
          {/* Title & Tagline */}
          <div className="flex-col flex flex-1 space-y-1.5">
            <div className="flex">
              <motion.h1
                initial={{ opacity: 0, filter: "blur(8px)", y: 8 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground leading-tight"
              >
                Hi, I'm {personal.name} 👋
              </motion.h1>
            </div>
            
            <div className="flex pt-1">
              <motion.p
                initial={{ opacity: 0, filter: "blur(8px)", y: 8 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="inline-block max-w-[600px] text-base md:text-xl text-foreground font-medium"
              >
                {personal.tagline}
              </motion.p>
            </div>
          </div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            className="shrink-0"
          >
            <span className="relative flex shrink-0 overflow-hidden rounded-full size-28 border border-border bg-muted">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="h-full w-full object-cover aspect-square"
              />
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
