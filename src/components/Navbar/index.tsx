"use client";
import DownloadResume from "./DownloadResume";
import MoonIcon from "public/icons/moon.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 border border-red-500">
      <div className="text-2xl font-bold">SK</div>
      <div className="flex items-center gap-4">
        <button className="text-2xl font-bold">
          <MoonIcon />
        </button>
        <DownloadResume />
      </div>
    </nav>
  );
};

export default Navbar;
