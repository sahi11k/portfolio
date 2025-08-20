import Image from "next/image";
import React from "react";
import HeroImage from "../../../../public/hero.jpg";

const HeroInfo = () => {
  return (
    <div className="flex-1 border border-red-500 flex items-center justify-center gap-4">
      <div className="flex-1">
        <h1 className="text-4xl font-bold">Hi there! I&apos;m Sahil.</h1>
        <p>
          I started building on the web in 2007 and never stopped. I’ve worked
          in senior engineering positions at organizations like Gatsby (acq.
          Netlify), DigitalOcean, and Khan Academy. I’ve also taught web
          development fundamentals at Concordia University. These days, I&apos;m
          a solo indie hacker focused on empowering up-and-coming software
          developers.
        </p>
      </div>
      <div className="flex-1 border border-blue-500 text-center">
        <Image
          src={HeroImage}
          alt="Hero"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroInfo;
