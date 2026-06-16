import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

export const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="w-full">
      <div className="flex min-h-0 flex-col gap-y-3">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="text-xl font-bold text-foreground">Skills</h2>
        </motion.div>

        {/* Skill Badges */}
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 + index * 0.02 }}
            >
              <div className="inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground shadow transition-all hover:bg-primary/95 cursor-default select-none">
                {skill}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
