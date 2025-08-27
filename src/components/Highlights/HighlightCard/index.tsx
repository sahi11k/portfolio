import Image from "next/image";
import React from "react";
import { Highlights } from "@/types";

interface HighlightCardProps {
  highlight: Highlights;
}

const HighlightCard = ({ highlight }: HighlightCardProps) => {
  return (
    <div className="flex flex-col md:flex-row bg-bg-container p-6 md:p-12 gap-6 md:gap-12 rounded-4xl">
      <div className="flex-4 md:self-center">
        <div className="relative h-60 w-full md:h-70 xl:h-80 md:w-full overflow-hidden rounded-2xl">
          <Image
            src={highlight.image ?? ""}
            alt={highlight.alt ?? "highlight screenshot"}
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="flex-6 flex flex-col justify-between gap-6 md:gap-9 xl:gap-12">
        <div className="flex flex-col gap-2 md:gap-4 xl:gap-6">
          <div className="text-2xl md:text-3xl xl:text-4xl font-semibold">
            {highlight.title}
          </div>
          <div className="leading-relaxed tracking-wide font-light text-lg md:text-xl xl:text-2xl">
            {highlight.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
