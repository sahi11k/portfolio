import Blogs from "./components/Blogs";
import Education from "./components/Education";
import Location from "./components/Location";
import HeroInfo from "./components/HeroInfo";
import Projects from "./components/Projects";
import Work from "./components/Work";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col">
      <HeroInfo />
      <div className="grid grid-cols-12 gap-4">
        <Projects />
        <Blogs />
        <Location />
        <Education />
        <Work />
      </div>
    </main>
  );
}
