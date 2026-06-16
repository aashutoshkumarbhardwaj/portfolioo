import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export const Work = () => {
  const { work } = portfolioData;
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="work" className="w-full">
      <div className="flex min-h-0 flex-col gap-y-3">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-foreground">Work Experience</h2>
        </motion.div>

        {/* Experience List */}
        <div className="flex flex-col gap-y-4">
          {work.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 + index * 0.05 }}
              >
                <div
                  onClick={() => toggleExpand(index)}
                  className="block cursor-pointer select-none group"
                >
                  <div className="rounded-lg bg-card text-card-foreground flex items-start sm:items-center">
                    {/* Left Icon/Initials */}
                    <div className="flex-none pt-1 sm:pt-0">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full border border-border size-12 m-auto bg-muted">
                        <span className={`flex h-full w-full items-center justify-center rounded-full text-white font-bold text-sm ${item.logoColor}`}>
                          
                          <img
                          src={item.image}
                          alt={item.company}
                            className="w-full h-full object-contain"
                           />
                        </span>
                      </span>
                    </div>

                    {/* Right Details */}
                    <div className="flex-grow ml-4 items-center flex-col">
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between gap-x-2 text-base">
                          {/* Company Name & Badge */}
                          <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm text-foreground">
                            {item.company}
                            <span className="inline-flex gap-x-1 ml-2">
                              <div className="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 align-middle text-[10px] sm:text-xs">
                                {item.badge}
                              </div>
                            </span>
                            
                            {/* Hover Chevron */}
                            <ChevronRight
                              className={`size-4 ml-1 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 text-muted-foreground ${
                                isExpanded ? "rotate-90 opacity-100 translate-x-1" : "rotate-0"
                              }`}
                            />
                          </h3>

                          {/* Date Period */}
                          <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right shrink-0">
                            {item.period}
                          </div>
                        </div>

                        {/* Job Title */}
                        <div className="font-sans text-xs text-muted-foreground text-left mt-0.5">
                          {item.role}
                        </div>
                      </div>

                      {/* Expandable Description */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden text-left"
                          >
                            <div className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {item.description}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
