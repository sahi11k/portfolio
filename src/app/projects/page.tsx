import ArrowIcon from "@/components/ArrowIcon";
import Button from "@/components/Button";
import ProjectCard from "@/components/Projects/ProjectCard";
import { PROJECTS } from "@/constants/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div>
      <div className="flex flex-col gap-6 pb-12 relative">
        <Link href="/">
          <Button
            variant="icon"
            className="gap-2 absolute top-1/2 -translate-y-1/2 left-0"
          >
            <ArrowIcon direction="left" /> Back
          </Button>
        </Link>
        <h1 className="text-center text-2xl tracking-wide">Projects</h1>
        <p className="text-center text-6xl font-medium">
          All Projects <span className="text-text-muted">Catalog</span>
        </p>
      </div>
      <div className="flex flex-col gap-12">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
