import Link from "next/link";

const shortDate = (date) =>
  date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "UTC",
  });

export default function ArticleList({ posts }) {
  if (posts.length === 0) {
    return <p className="text-muted">No articles yet. Soon.</p>;
  }

  return (
    <ul>
      {posts.map((post, index) => {
        const year = post.date.getUTCFullYear();
        const isFirstOfYear = posts[index - 1]?.date.getUTCFullYear() !== year;
        return (
          <li
            key={post.slug}
            className="grid grid-cols-[3.5rem_1fr] gap-4 sm:grid-cols-[5rem_1fr]"
          >
            <span className="pt-4 text-muted-light text-sm tabular-nums">
              {isFirstOfYear ? year : ""}
            </span>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex items-baseline justify-between gap-4 border-border border-b py-4"
            >
              <span className="font-medium text-foreground underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-border">
                {post.title}
              </span>
              <span className="shrink-0 text-muted-light text-sm tabular-nums">
                {shortDate(post.date)}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
