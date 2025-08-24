import { Journey } from "@/types";
import Image from "next/image";

const TimelineItem = ({ journey }: { journey: Journey }) => {
  return (
    <div className="grid grid-cols-12 min-h-25 leading-relaxed gap-12 first:[&_.rail::after]:top-[2.5rem] last:[&_.rail::after]:h-[calc(100%)]">
      <div className="rail col-span-2 text-right pr-6 relative after:content-[''] after:absolute after:w-0.25 after:h-[calc(100%+6rem)] after:bg-neutral-400 after:top-0 after:right-0 after:translate-x-[50%]">
        <h2 className="font-semibold mt-[2rem]">{journey.time}</h2>
        <span className="absolute top-[2.5rem] right-0 translate-x-[50%] w-3 h-3 bg-neutral-400 rounded-full"></span>
      </div>
      <div className="col-span-10 flex flex-col gap-3 bg-neutral-100 py-6 px-10 ">
        <div>
          <h1 className="text-2xl font-semibold mb-3">{journey.title}</h1>
          {journey.description && <p className="">{journey.description}</p>}
        </div>
        {journey.highlights && (
          <div className="mt-1">
            <span className="font-semibold text-sm">Highlights :</span>
            <ol className="list-disc list-inside">
              {journey.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ol>
          </div>
        )}
        {journey.images && (
          <div className="flex gap-6">
            {journey.images.map((image) => (
              <div key={image} className="relative w-100 h-50 overflow-hidden">
                <Image src={image} alt={image} fill className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
