import ArrowIcon from "@/components/ArrowIcon";
import Button from "@/components/Button";
import ProjectCard from "@/components/Projects/ProjectCard";
import { PROJECTS } from "@/constants/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div>
      <div className="relative flex items-center justify-center mb-6 xl:mb-12">
        <Link href="/">
          <Button
            variant="icon"
            className="gap-2 absolute top-1/2 -translate-y-1/2 left-0"
          >
            <ArrowIcon direction="left" /> Back
          </Button>
        </Link>
        <h1 className="font-medium text-2xl md:text-4xl xl:text-6xl">
          Project <span className="text-text-muted">Archive</span>
        </h1>
      </div>
      <div className="flex flex-col gap-6 md:gap-12">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
