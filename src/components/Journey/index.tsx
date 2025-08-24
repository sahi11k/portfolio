import React from "react";
import { JOURNEY } from "@/constants/journey";
import type { Journey } from "@/types";
import TimelineItem from "./TimelineItem";

export default function Journey() {
  return (
    <div className="col-span-4">
      <div className="flex flex-col gap-2 pb-12">
        <h1 className="font-semibold text-center">Timeline</h1>
        <p className="text-center text-4xl font-semibold">
          The journey so far <br />
          <span className="text-neutral-400"> Doon to BLR</span>
        </p>
      </div>
      <div className="flex flex-col py-4 gap-6">
        {JOURNEY.map((item) => (
          <TimelineItem journey={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
