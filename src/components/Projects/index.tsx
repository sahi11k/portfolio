"use client";

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
    <>
      <div id="projects" className="h-20" />
      <div className="col-span-4 row-start-1 mt-[-80px]">
        <div className="flex flex-col gap-2 pb-12">
          <h1 className="font-semibold text-center">Portfolio</h1>
          <p className="text-center text-4xl font-semibold">
            Work and experiments that blend <br />
            <span className="text-neutral-400">Design & Engineering</span>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} showCode={false} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/projects">
            <Button variant="primary">
              All Projects <ArrowUpright />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
