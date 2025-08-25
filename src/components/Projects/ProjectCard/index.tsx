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
    <div className="flex min-h-80 bg-bg-container p-12 gap-24 rounded-4xl">
      <div className="flex-6 flex flex-col justify-between gap-12">
        <div className="flex flex-col gap-6">
          <div className="text-4xl font-semibold">{project.title}</div>
          <div className="leading-relaxed text-2xl tracking-wide font-light">
            {project.description}
          </div>

          <div className="flex flex-wrap items-center text-lg">
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
        <div className="flex justify-start gap-6">
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
      <div className="flex-4 self-center">
        <div className="relative h-80 overflow-hidden rounded-2xl">
          <Image
            src={project.image ?? ""}
            alt={project.alt ?? "project screenshot"}
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
