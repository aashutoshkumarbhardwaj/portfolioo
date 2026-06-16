import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export const Contact = () => {
  const { collaboration } = portfolioData;

  return (
    <section id="collaboration" className="w-full py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.45 }}
        >
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-medium select-none">
            {collaboration.badge}
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground"
        >
          {collaboration.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.55 }}
          className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px] mx-auto text-pretty font-sans"
        >
          {collaboration.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-3 pt-4 w-full sm:w-auto"
        >
          {/* Cal.com booking */}
          <a
            href={collaboration.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex"
          >
            <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/95 h-10 px-8 w-full sm:w-auto font-semibold cursor-pointer">
              Book a Free Consultation
            </div>
          </a>

          {/* Mailto */}
          <a
            href={collaboration.emailMailto}
            className="w-full sm:w-auto inline-flex"
          >
            <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8 w-full sm:w-auto text-foreground font-semibold cursor-pointer">
              Send an Email
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
