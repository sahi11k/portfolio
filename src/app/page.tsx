import Blogs from "@/components/Blogs";
import HeroInfo from "@/components/HeroInfo";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import { fetchBlogsFromDevto } from "@/apis";
import { transformBlogsResponse } from "@/utils/api";

export default async function HomePage() {
  const res = await fetchBlogsFromDevto();
  const blogs = transformBlogsResponse(res);

  return (
    <>
      <HeroInfo />
      <Projects />
      <Journey />
      <Blogs blogs={blogs} />
    </>
  );
}
