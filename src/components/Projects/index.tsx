import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/constants/projects";
import Section from "../Section";

const featuredProjects = PROJECTS.filter((project) => project.featured).sort(
  (a, b) => (a.rank ?? 0) - (b.rank ?? 0)
);

const Projects = () => {
  return (
    <Section
      title="Projects"
      description="Work and experiments that blend"
      descriptionMuted="Design & Engineering"
      link="/projects"
      linkText="All Projects"
    >
      <div className="flex flex-col gap-6 md:gap-9 xl:gap-12">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
