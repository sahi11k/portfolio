"use client";

import React from "react";
import Button from "../Button";

const HeroInfo = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-[calc(100vh-80px)]">
      <h1 className="text-center text-8xl font-bold mb-10 leading-xs">
        Namaste, I&apos;m <span className="text-neutral-400">Sahil.</span>{" "}
        <br />
        Frontend Engineer.
      </h1>
      <p className="text-xl leading-relaxed w-[70%] text-center">
        I love building for the web, and for the past 3+ years I&apos;ve been
        working at PlaySimple Games, where I focus on crafting scalable and
        powerful data visualization solutions. Outside of work, I enjoy
        photography and trekking.
      </p>
      <div className="flex gap-4 mt-6">
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
        <Button
          variant="primary"
          onClick={() => (window.location.href = "mailto:youremail@gmail.com")}
        >
          Hire Me
        </Button>
      </div>
    </div>
  );
};

export default HeroInfo;
