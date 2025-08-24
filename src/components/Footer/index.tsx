"use client";

import React from "react";
// import Location from "./Location";
import { SOCIALS } from "./data";
import Link from "next/link";
import MoonIcon from "public/icons/moon.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-neutral-100 px-[15%] gap-4">
      <div className="flex justify-center py-16">
        {/* <Location /> */}
        <div className="text-center">
          <div>Have a project in mind?</div>
          <div className="uppercase text-8xl font-semibold">
            Let&apos;s Talk
          </div>
        </div>
      </div>
      <div className="flex justify-between py-8 border-t">
        <div>&copy;{new Date().getFullYear()} Sahil Kumar</div>
        <div className="flex gap-10">
          {/* <MoonIcon stroke="currentColor" /> */}
          {SOCIALS.map((footerItem) => {
            return (
              <Link
                href={footerItem.link}
                key={footerItem.name}
                target="_blank"
              >
                <span
                  key={footerItem.name}
                  className="h-6 w-6 flex items-center justify-center overflow-hidden  cursor-pointer"
                >
                  {footerItem.icon}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
