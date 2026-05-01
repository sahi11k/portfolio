import highlightsContent from "./highlights.json";
import profileContent from "./profile.json";
import projectsContent from "./projects.json";
import { Highlights, ProfileContent, Project } from "@/types";

export const PROFILE = profileContent as ProfileContent;
export const PROJECTS = projectsContent as Project[];
export const HIGHLIGHTS = highlightsContent as Highlights[];
