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
    <nav className="flex items-center justify-between bg-white sticky top-0 z-10 h-[80px]">
      <Link href="/">
        <div className="text-4xl">sk.</div>
      </Link>
      <div className="flex items-center gap-4">
        <Button onClick={handleResumeDownload}>Download CV </Button>
      </div>
    </nav>
  );
};

export default Navbar;
