import ArrowIcon from "@/components/ArrowIcon";
import Button from "@/components/Button";
import ProjectCard from "@/components/Projects/ProjectCard";
import { PROJECTS } from "@/constants/projects";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="mb-10">
      <div className="flex items-center mb-12">
        <Link href="/">
          <Button variant="text" className="!p-0">
            <ArrowIcon direction="left" /> Back
          </Button>
        </Link>
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="flex-1 w-full font-semibold text-center">Portfolio</h1>
          <p className="text-center text-4xl font-semibold">
            All Projects <span className="text-neutral-400">Catalog</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
