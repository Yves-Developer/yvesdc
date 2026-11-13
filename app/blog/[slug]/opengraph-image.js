import { renderOgImage, ogSize } from "@/lib/og";
import { formatDate, getAllPosts, getPost } from "@/lib/posts";

export const alt = "Blog post";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  return renderOgImage({
    title: post?.title ?? "Blog",
    eyebrow: "yves.castfy.app/blog",
    meta: post
      ? `${formatDate(post.date)} · ${post.readingMinutes} min read`
      : undefined,
    seed: slug,
  });
}
