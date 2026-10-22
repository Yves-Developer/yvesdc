import ArticleList from "@/components/ArticleList";
import Footer from "@/components/Footer";
import HomeTabs from "@/components/HomeTabs";
import Intro from "@/components/Intro";
import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/contentful";
import { getAllPosts } from "@/lib/posts";

export const revalidate = 60;

export default async function Home() {
  const projects = await getProjects();
  const posts = getAllPosts();

  return (
    <main className="mx-auto w-full max-w-[640px] px-5 py-16 sm:py-24">
      <Intro />
      <HomeTabs
        tabs={[
          {
            id: "articles",
            label: "Articles",
            content: <ArticleList posts={posts} />,
          },
          {
            id: "projects",
            label: "Projects",
            content: <ProjectList projects={projects} />,
          },
        ]}
      />
      <Footer />
    </main>
  );
}
