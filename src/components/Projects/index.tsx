import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="col-span-4 row-start-1">
      <div className="flex justify-between">
        <h1>Projects</h1>
        <button>View All</button>
      </div>
      <div className="flex gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
