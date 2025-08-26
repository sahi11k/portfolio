import React from "react";
import { HIGHLIGHTS } from "@/constants/highlights";
import type { Highlights } from "@/types";
import HighlightCard from "./HighlightCard";

export default function Highlights() {
  return (
    <div className="col-span-4">
      <div className="flex flex-col gap-6 pb-12">
        <h1 className="text-center text-2xl tracking-wide">Highlights</h1>
        <p className="text-center text-6xl font-medium">
          Connecting the dots through my
          <br />
          <span className="text-text-muted">Roller Coaster Journey</span>
        </p>
      </div>
      <div className="flex flex-col gap-12">
        {HIGHLIGHTS.map((item) => (
          <HighlightCard highlight={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
