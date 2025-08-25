import React from "react";
import { JOURNEY } from "@/constants/journey";
import type { Journey } from "@/types";
import TimelineItem from "./TimelineItem";

export default function Journey() {
  return (
    <div className="col-span-4">
      <div className="flex flex-col gap-6 pb-12">
        <h1 className="text-center text-2xl tracking-wide">Timeline</h1>
        <p className="text-center text-6xl font-medium">
          The journey so far
          <br />
          <span className="text-text-muted">Doon to BLR</span>
        </p>
      </div>
      <div className="flex flex-col gap-12">
        {JOURNEY.map((item) => (
          <TimelineItem journey={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
