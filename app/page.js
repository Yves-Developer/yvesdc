import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/contentful";

export const revalidate = 60;

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="mx-auto w-full max-w-[640px] px-5 py-16 sm:py-24">
      <Intro />
      <section className="mt-14" aria-labelledby="projects-heading">
        <h2
          id="projects-heading"
          className="mb-4 font-medium text-muted-light text-sm"
        >
          Projects
        </h2>
        <ProjectList projects={projects} />
      </section>
      <Footer />
    </main>
  );
}
