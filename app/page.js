import ExperienceList from "@/components/ExperienceList";
import Footer from "@/components/Footer";
import HomeTabs from "@/components/HomeTabs";
import Intro from "@/components/Intro";
import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/contentful";

export const revalidate = 60;

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="mx-auto w-full max-w-[640px] px-5 py-16 sm:py-24">
      <Intro />
      <HomeTabs
        projects={<ProjectList projects={projects} />}
        experience={<ExperienceList />}
      />
      <Footer />
    </main>
  );
}
