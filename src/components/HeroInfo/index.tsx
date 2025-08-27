"use client";

import React, { useRef } from "react";
import Button from "../Button";

const HeroInfo = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const handleScrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="flex gap-6 md:gap-9 xl:gap-12 justify-center items-center flex-col  min-h-[calc(100vh-70px)] lg:min-h-[calc(100vh-100px)]">
        <h1 className="text-center text-5xl md:text-7xl xl:text-9xl font-medium leading-none flex flex-col">
          <span>Namaste, I&apos;m Sahil.</span>
          <span className="text-text-muted">Frontend Engineer.</span>
        </h1>
        <p className="text-lg md:text-xl xl:text-2xl leading-relaxed text-center tracking-wide w-[75%] font-light">
          I love building for the web, and for the past 3+ years I&apos;ve been
          working at Playsimple Games, where I focus on crafting scalable and
          powerful data visualization solutions. Outside of work, I enjoy
          photography and trekking.
        </p>
        <div className="flex gap-6">
          <Button variant="secondary" onClick={handleScrollToProjects}>
            View Projects
          </Button>
          <Button href="mailto:sahil511kumar@gmail.com">Hire Me</Button>
        </div>
      </div>
      <div ref={projectsRef} className="mt-[-70px] lg:mt-[-100px]" />
    </>
  );
};

export default HeroInfo;
