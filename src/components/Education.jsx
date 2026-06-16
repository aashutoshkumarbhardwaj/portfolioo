import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="w-full">
      <div className="flex min-h-0 flex-col gap-y-3">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.25 }}
        >
          <h2 className="text-xl font-bold text-foreground">Education</h2>
        </motion.div>

        {/* Education List */}
        <div className="flex flex-col gap-y-4">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(6px)", y: 6 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.25 + index * 0.05 }}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer group select-none"
              >
                <div className="rounded-lg bg-card text-card-foreground flex items-center">
                  {/* Left Initials */}
                  <div className="flex-none">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full border border-border size-12 m-auto bg-muted">
                      <span className={`flex h-full w-full items-center justify-center rounded-full text-white font-bold text-sm ${item.logoColor}`}>
                        
                        <img
                      src={item.images}
                      alt={item.company}
                      className="w-full h-full object-contain "
                      />
                      </span>
                    </span>
                  </div>

                  {/* Right Details */}
                  <div className="flex-grow ml-4 items-center flex-col">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between gap-x-2 text-base">
                        {/* School Name */}
                        <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm text-foreground">
                          {item.school}
                          <ChevronRight className="size-4 ml-1 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 text-muted-foreground" />
                        </h3>
                        {/* Years */}
                        <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right shrink-0">
                          {item.period}
                        </div>
                      </div>
                      {/* Degree */}
                      <div className="font-sans text-xs text-muted-foreground text-left mt-0.5">
                        {item.degree}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
