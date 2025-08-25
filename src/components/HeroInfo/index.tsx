"use client";

import React from "react";
import Button from "../Button";

const HeroInfo = () => {
  return (
    <div className="flex gap-12 justify-center items-center flex-col min-h-[calc(100vh-100px)]">
      <h1 className="text-center text-9xl font-medium leading-none">
        Namaste, I&apos;m Sahil. <br />
        <span className="text-text-muted">Frontend Engineer.</span>
      </h1>
      <p className="text-2xl leading-relaxed text-center tracking-wide w-[75%] font-light">
        I love building for the web, and for the past 3+ years I&apos;ve been
        working at PlaySimple Games, where I focus on crafting scalable and
        powerful data visualization solutions. Outside of work, I enjoy
        photography and trekking.
      </p>
      <div className="flex gap-6">
        <Button
          variant="secondary"
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View Projects
        </Button>
        <Button href="mailto:sahil511kumar@gmail.com">Hire Me</Button>
      </div>
    </div>
  );
};

export default HeroInfo;
