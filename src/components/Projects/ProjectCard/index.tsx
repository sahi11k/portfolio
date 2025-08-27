import Image from "next/image";
import React from "react";
import ArrowUpright from "public/icons/arrow-up-right.svg";
import { Project } from "@/types";
import Button from "@/components/Button";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col md:flex-row md:flex-row-reverse bg-bg-container p-6 md:p-12 gap-6 md:gap-12 rounded-4xl">
      <div className="flex-4 md:self-center">
        <div className="relative h-60 w-full md:h-70 xl:h-80 md:w-full overflow-hidden rounded-2xl">
          <Image
            src={project.image ?? ""}
            alt={project.alt ?? "project screenshot"}
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="flex-6 flex flex-col justify-between gap-6 md:gap-9 xl:gap-12">
        <div className="flex flex-col gap-2 md:gap-4 xl:gap-6">
          <div className="text-2xl md:text-3xl xl:text-4xl font-semibold">
            {project.title}
          </div>
          <div className="leading-relaxed tracking-wide font-light text-lg md:text-xl xl:text-2xl">
            {project.description}
          </div>
          <div className="flex flex-wrap items-center text-sm md:text-base xl:text-lg">
            {project.stack?.map((stack, idx) => (
              <React.Fragment key={stack}>
                <span className="text-text-muted">{stack}</span>
                {idx < (project.stack?.length ?? 0) - 1 && (
                  <span className="mx-2 text-text-muted">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex justify-center md:justify-start gap-6">
          {project.github && (
            <Button variant="secondary" href={project.github}>
              View Code <ArrowUpright />
            </Button>
          )}
          <Button variant="primary" href={project.link}>
            Live Demo <ArrowUpright />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
