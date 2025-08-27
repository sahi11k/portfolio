import React from "react";
import Button from "../Button";
import ArrowUpright from "public/icons/arrow-up-right.svg";
import Link from "next/link";

interface SectionProps {
  title: string;
  description: string;
  descriptionMuted: string;
  children: React.ReactNode;
  link?: string;
  linkText?: string;
}

const Section = ({
  title,
  description,
  descriptionMuted,
  children,
  link,
  linkText,
}: SectionProps) => {
  return (
    <div className="col-span-4 row-start-1">
      <div className="flex flex-col gap-3 xl:gap-6 pb-6 xl:pb-12">
        <h1 className="text-center tracking-wide text-lg md:text-xl xl:text-2xl">
          {title}
        </h1>
        <p className="text-center font-medium flex flex-col text-2xl md:text-4xl xl:text-6xl">
          <span>{description}</span>
          <span className="text-text-muted">{descriptionMuted}</span>
        </p>
      </div>
      <React.Fragment>{children}</React.Fragment>
      {link && (
        <div className="flex justify-center mt-6 md:mt-12">
          <Link href={link}>
            <Button variant="primary">
              {linkText} <ArrowUpright />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Section;
