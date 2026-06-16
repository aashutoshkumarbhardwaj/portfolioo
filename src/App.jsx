import React, { useEffect } from "react";
import { ThemeProvider } from "./components/ThemeContext";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Dock } from "./components/Dock";
import { portfolioData } from "./data/portfolio";

function App() {
  // Dynamically update document title based on the portfolio data
  useEffect(() => {
    if (portfolioData?.personal?.name) {
      document.title = `${portfolioData.personal.name} | Portfolio`;
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="max-w-2xl mx-auto py-12 sm:py-24 px-6">
        <main className="flex flex-col min-h-[100dvh] space-y-10 pb-20">
          <Hero />
          <About />
          <Work />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
      <Dock />
    </ThemeProvider>
  );

}

export default App;
