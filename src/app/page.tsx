import Blogs from "@/components/Blogs";
import HeroInfo from "@/components/HeroInfo";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";

export default function HomePage() {
  return (
    <>
      <HeroInfo />
      <div className="grid grid-cols-3 gap-10 my-10">
        <Projects />
        <Journey />
        <Blogs />
      </div>
    </>
  );
}
