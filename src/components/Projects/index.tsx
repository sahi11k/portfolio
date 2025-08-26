import React from "react";
import ProjectCard from "./ProjectCard";
import Button from "../Button";
import ArrowUpright from "public/icons/arrow-up-right.svg";
import { PROJECTS } from "@/constants/projects";
import Link from "next/link";

const featuredProjects = PROJECTS.filter((project) => project.featured).sort(
  (a, b) => (a.rank ?? 0) - (b.rank ?? 0)
);

const Projects = () => {
  return (
    <div className="col-span-4 row-start-1">
      <div className="flex flex-col gap-6 pb-12">
        <h1 className="text-center text-2xl tracking-wide">Projects</h1>
        <p className="text-center text-6xl font-medium">
          Work and experiments that blend <br />
          <span className="text-text-muted">Design & Engineering</span>
        </p>
      </div>
      <div className="flex flex-col gap-12">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link href="/projects">
          <Button variant="primary">
            All Projects <ArrowUpright />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
