import Image from "next/image";
import React from "react";
import HeroImage from "public/images/hero.jpg";

const HeroInfo = () => {
  return (
    <div className="flex-1 border border-red-500 flex items-center justify-center gap-4">
      <div className="flex-1 border border-green-500 text-center h-100%">
        <h1 className="text-4xl font-bold">Hi there! I&apos;m Sahil.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          temporibus corrupti labore dolore facilis magni esse laboriosam,
          necessitatibus repudiandae harum voluptatibus velit perferendis a,
          dicta est ratione, praesentium quidem quos?
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
