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
    <nav className="flex items-center justify-between sticky top-0 z-10 h-[100px] bg-bg-surface">
      <Link href="/">
        <div className="text-4xl">sahilk.</div>
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
