"use client";

import Link from "next/link";
import Button from "../Button";

const Navbar = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Sahil_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="flex items-center justify-between bg-bg-surface/80 backdrop-blur supports-[backdrop-filter]:bg-bg-surface/60 sticky top-0 z-10 h-[70px] lg:h-[100px]">
      <Link href="/">
        <div className="text-2xl md:text-3xl xl:text-4xl">sahilk.</div>
      </Link>
      <div className="flex items-center gap-2">
        <Button variant="primary" onClick={handleResumeDownload}>
          Download CV
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
