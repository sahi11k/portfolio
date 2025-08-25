import { Journey } from "@/types";

const TimelineItem = ({ journey }: { journey: Journey }) => {
  return (
    <div className="flex min-h-80 bg-bg-container p-12 gap-24 rounded-4xl">
      <div className="flex-6 flex flex-col justify-between gap-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-semibold break-all">{journey.title}</h1>
          <div className="leading-relaxed text-2xl tracking-wide font-light">
            {journey.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
