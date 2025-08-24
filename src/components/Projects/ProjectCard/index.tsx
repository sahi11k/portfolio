import Image from "next/image";
import React from "react";
import ArrowUpright from "public/icons/arrow-up-right.svg";
import { Project } from "@/types";
import Button from "@/components/Button";

interface ProjectCardProps {
  project: Project;
  showCode?: boolean;
}

const ProjectCard = ({ project, showCode = true }: ProjectCardProps) => {
  return (
    <div className="flex min-h-80 bg-neutral-100 p-10 gap-16">
      <div className="flex-6 flex flex-col justify-between gap-5">
        <div>
          <div className="text-3xl font-bold mb-3">{project.title}</div>
          <div className="leading-relaxed">{project.description}</div>
          {showCode && (
            <div className="mt-3">
              <span className="font-semibold">Stack : </span>
              <span className="text-neutral-500">
                {project.stack?.join(", ")}
              </span>
            </div>
          )}
        </div>
        <div className="flex justify-start gap-4">
          {project.github && (
            <Button variant="secondary" href={project.github} size="sm">
              View Code <ArrowUpright />
            </Button>
          )}
          <Button variant="primary" href={project.link} size="sm">
            Live Demo <ArrowUpright />
          </Button>
        </div>
      </div>
      <div className="flex-4 border">
        <div className="relative h-70 overflow-hidden bg-neutral-900">
          <Image
            src={project.image ?? ""}
            alt={project.alt ?? "project screenshot"}
            className="object-cover"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
