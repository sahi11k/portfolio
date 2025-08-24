import { Journey } from "@/types";

export const JOURNEY: Journey[] = [
  {
    id: 1,
    time: "Present",
    title: "Software Engineer (Frontend) at PlaySimple Games",
    description:
      "Working on building fast, scalable dashboards and advanced data visualizations that power business decision-making at PlaySimple Games.",
    highlights: [
      "Developed multi-visualization dashboards to analyze player data effectively",
      "Migrated internal dashboard platform from CRA to Vite, improving performance and developer experience",
    ],
    images: ["/images/dashboard.png", "/images/chart.png"],
  },
  {
    id: 2,
    time: "August 2023",
    title: "Promoted to Software Engineer (Frontend)",
    description:
      "Transitioned from Associate Engineer to Software Engineer, taking ownership of larger features and architecture improvements.",
    highlights: [
      "Refactored large parts of the codebase and standardized Redux state management",
      "Enhanced debugging by integrating source maps into Sentry and introducing unit tests",
    ],
  },
  {
    id: 3,
    time: "July 2022",
    title: "Graduated in Computer Science and Engineering",
    highlights: [
      "Earned a B.Tech in Computer Science and Engineering from DIT University",
      "Graduated with a CGPA of 8.44/10",
    ],
  },
  {
    id: 4,
    time: "June 2022",
    title: "Full-Time Conversion",
    description:
      "Converted from intern to Associate Software Engineer (Frontend) after a year long successful internship at PlaySimple Games.",
    highlights: [
      "Built a Player Profiler tool — my first major production project",
      "Implemented a global search bar powered by Elasticsearch",
    ],
    images: ["/images/gui.png", "/images/searchbar.png"],
  },
];
