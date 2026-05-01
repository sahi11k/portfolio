"use client";

import React, { useRef } from "react";
import Button from "../Button";
import { PROFILE } from "@/content";

const HeroInfo = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const handleScrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="flex gap-6 md:gap-9 xl:gap-12 justify-center items-center flex-col min-h-[calc(100vh-84px)] lg:min-h-[calc(100vh-96px)]">
        <h1 className="text-center text-5xl md:text-7xl xl:text-9xl font-medium leading-none flex flex-col">
          <span>{PROFILE.heroGreeting}</span>
          <span className="text-text-muted">{PROFILE.heroRole}</span>
        </h1>
        <p className="text-lg md:text-xl xl:text-2xl leading-relaxed text-center tracking-wide w-[75%] font-light">
          {PROFILE.heroBio}
        </p>
        <div className="flex gap-6">
          <Button variant="secondary" onClick={handleScrollToProjects}>
            View Projects
          </Button>
          <Button href={`mailto:${PROFILE.email}`}>Hire Me</Button>
        </div>
      </div>
      <div ref={projectsRef} className="mt-[-96px]" />
    </>
  );
};

export default HeroInfo;
