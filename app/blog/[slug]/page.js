import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { formatDate, getAllPosts, getPost } from "@/lib/posts";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return {};
  }

  return {
    title: `${post.title} — ${site.name}`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date.toISOString(),
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-[640px] px-5 py-16 sm:py-24">
      <Link
        href="/"
        className="text-muted-light text-sm transition-colors hover:text-foreground"
      >
        ← {site.name}
      </Link>

      <article className="mt-10 animate-fade-in">
        <header>
          <h1 className="font-semibold text-2xl text-foreground tracking-tight">
            {post.title}
          </h1>
          <p className="mt-2 text-muted-light text-sm">
            {formatDate(post.date)} · {post.readingMinutes} min read
          </p>
        </header>

        {/* Posts are Markdown files committed to this repo, so their HTML is trusted. */}
        <div
          className="prose mt-10 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>

      <Footer />
    </main>
  );
}
