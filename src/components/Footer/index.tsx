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
    <footer className="flex flex-col px-[12.5%] gap-4 bg-bg-footer">
      <div className="py-16">
        <div className="text-center">
          <div className="text-2xl mb-3">Have an idea or opportunity?</div>
          <h1 className="text-9xl font-medium text-text-muted">
            Let&apos;s Connect
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-between py-8 border-t border-text-muted text-text-muted">
        <div className="text-xl">
          &copy;{new Date().getFullYear()} Sahil Kumar
        </div>
        <div className="flex gap-10">
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
