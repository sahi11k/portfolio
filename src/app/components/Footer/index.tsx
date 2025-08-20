import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center p-4 border border-red-500">
      <div>
        <p>
          &copy; {new Date().getFullYear()} Sahil Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
