import React from "react";
import Location from "../Location";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between p-4 border border-red-500">
      <Location />
      <div className="flex-1">
        <p>
          &copy; {new Date().getFullYear()} Sahil Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
