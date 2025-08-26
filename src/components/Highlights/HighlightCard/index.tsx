import Image from "next/image";
import React from "react";
import ArrowUpright from "public/icons/arrow-up-right.svg";
import { Highlights } from "@/types";
import Button from "@/components/Button";

interface HighlightCardProps {
  highlight: Highlights;
}

const HighlightCard = ({ highlight }: HighlightCardProps) => {
  return (
    <div className="flex min-h-80 bg-bg-container p-12 gap-24 rounded-4xl">
      <div className="flex-6 flex flex-col justify-between gap-12">
        <div className="flex flex-col gap-6">
          <div className="text-4xl font-semibold">{highlight.title}</div>
          <div className="leading-relaxed text-2xl tracking-wide font-light">
            {highlight.description}
          </div>
        </div>
      </div>
      <div className="flex-4 self-center">
        <div className="relative h-80 overflow-hidden rounded-2xl">
          <Image
            src={highlight.image ?? ""}
            alt={highlight.alt ?? "highlight screenshot"}
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
