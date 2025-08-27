import React from "react";
import { HIGHLIGHTS } from "@/constants/highlights";
import HighlightCard from "./HighlightCard";
import Section from "../Section";

export default function Highlights() {
  return (
    <Section
      title="Highlights"
      description="Connecting the dots through my"
      descriptionMuted="Roller Coaster Journey"
    >
      <div className="flex flex-col gap-6 md:gap-9 xl:gap-12">
        {HIGHLIGHTS.map((item) => (
          <HighlightCard highlight={item} key={item.id} />
        ))}
      </div>
    </Section>
  );
}
