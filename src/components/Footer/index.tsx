"use client";

import React from "react";
import { SOCIALS } from "./data";

import { useEffect, useState } from "react";

const DARK = "dark";
const LIGHT = "light";

import Button from "../Button";
import SunIcon from "public/icons/sun.svg";
import MoonIcon from "public/icons/moon.svg";

const Footer = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const systemPref = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = stored === DARK || (!stored && systemPref);
    setDark(isDark);
    document.documentElement.classList.toggle(DARK, isDark);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle(DARK, next);
    localStorage.setItem("theme", next ? DARK : LIGHT);
  }

  return (
    <footer className="flex flex-col bg-bg-footer text-text-muted">
      <div className="py-16 mx-auto w-[90%] max-w-7xl">
        <div className="text-center">
          <div className="text-lg md:text-xl xl:text-2xl mb-3 text-text-base">
            Have an idea or opportunity?
          </div>
          <h1 className="text-5xl md:text-7xl xl:text-9xl font-medium">
            Let&apos;s Connect
          </h1>
        </div>
      </div>
      <hr className="border-text-muted" />
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-between py-8 mx-auto w-[90%] max-w-7xl">
        <div className="text-lg md:text-xl xl:text-2xl">
          &copy;{new Date().getFullYear()} Sahil Kumar
        </div>
        <div className="flex gap-5 md:gap-10">
          <Button variant="icon" onClick={toggleTheme}>
            {dark ? <MoonIcon /> : <SunIcon />}
          </Button>
          {SOCIALS.map((footerItem) => {
            return (
              <Button
                variant="icon"
                href={footerItem.link}
                key={footerItem.name}
                className="h-8 w-8"
              >
                {footerItem.icon}
              </Button>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
