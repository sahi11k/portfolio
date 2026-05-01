"use client";

import Link from "next/link";
import Button from "../Button";
import { PROFILE } from "@/content";

const Navbar = () => {
  return (
    <nav className="bg-bg-surface/80 backdrop-blur supports-[backdrop-filter]:bg-bg-surface/60 sticky top-0 z-10 h-[84px] lg:h-[96px]">
      <div className="w-[90%] max-w-7xl mx-auto flex items-center justify-between h-full">
        <Link href="/">
          <div className="text-2xl md:text-3xl xl:text-4xl">sahilk.</div>
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="primary" href={PROFILE.resumeUrl}>
            {PROFILE.resumeButtonLabel}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
