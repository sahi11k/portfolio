import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "kaizen",
    title: "Kaizen",
    description:
      "A personal growth app designed to help users stay productive and mindful. Kaizen combines Pomodoro timers, journaling, and insightful analytics to track habits, time spent, and progress over time — making productivity measurable and sustainable.",
    image: "/images/kaizen.png",
    link: "https://daily-kaizen.vercel.app/",
    github: "",
    featured: true,
    rank: 1,
    alt: "Kaizen productivity app dashboard",
    stack: ["React", "Supabase", "Radix UI", "Chart.js", "Vite"],
  },
  {
    id: "lyricsFinder",
    title: "Lyrics Finder",
    description:
      "A lightweight web app that lets users quickly search and display lyrics for any song. Built with a clean, distraction-free interface, Lyrics Finder makes it simple to explore music while focusing on readability and fast performance.",
    image: "/images/lyricsFinder.png",
    link: "https://lyric-finderr.vercel.app/",
    github: "https://github.com/sahi11k/lyricFinder",
    featured: true,
    rank: 2,
    alt: "Lyrics Finder web app screenshot",
    stack: ["React", "Context API", "Musixmatch API"],
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "The website you’re on right now — crafted to present my work, blogs, and journey in a clean, minimal way. It highlights my focus on clarity, structure, and thoughtful design, while serving as both a personal brand and a living project that continues to evolve.",
    image: "/images/portfolio.png",
    link: "https://sahilk.vercel.app/",
    github: "https://github.com/sahi11k/portfolio",
    featured: true,
    rank: 3,
    alt: "Portfolio website homepage screenshot",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "bookmarked",
    title: "Bookmarked",
    description:
      "A book management tool to save, organize, and track reading lists. Bookmarked allows users to create a personalized library of books they want to read, mark progress, and stay motivated — making it easier to manage a growing reading habit.",
    image: "/images/bookmarked.png",
    link: "https://sahi11k.github.io/bookmarked/",
    github: "https://github.com/sahi11k/bookmarked",
    featured: false,
    rank: 4,
    alt: "Bookmarked app interface",
    stack: ["HTML", "CSS", "JavaScript", "Local Storage"],
  },
  {
    id: "tictactoe",
    title: "Tic Tac Toe",
    description:
      "An interactive version of the classic Tic Tac Toe game built for the browser. Players can compete against friends online in a sleek, responsive interface that recreates the timeless experience with a modern touch.",
    image: "/images/tictactoe.png",
    link: "https://sahi11k.github.io/tic-tac-toe/",
    github: "https://github.com/sahi11k/tic-tac-toe",
    featured: false,
    rank: 4,
    alt: "Tic Tac Toe game screenshot",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "rps",
    title: "Rock Paper Scissors",
    description:
      "A fun, browser-based implementation of Rock Paper Scissors with an engaging interface. This project provides an interactive way to challenge yourself or friends, showcasing simple yet effective game logic and smooth UI design.",
    image: "/images/rps.png",
    link: "https://sahi11k.github.io/rock-paper-scissors/",
    github: "https://github.com/sahi11k/rock-paper-scissors",
    featured: false,
    rank: 5,
    alt: "Rock Paper Scissors game screenshot",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];
