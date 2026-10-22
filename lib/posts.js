import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "content/posts");
const WORDS_PER_MINUTE = 200;

// Files starting with "_" (like _template.md) and posts marked `draft: true` are skipped.
const isPublishable = (fileName) =>
  fileName.endsWith(".md") && !fileName.startsWith("_");

const readPostFile = (fileName) => {
  const slug = fileName.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(postsDirectory, fileName), "utf8");
  const { data, content } = matter(raw);
  const words = content.trim().split(/\s+/).length;

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: new Date(data.date),
    draft: data.draft === true,
    readingMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    content,
  };
};

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter(isPublishable)
    .map(readPostFile)
    .filter((post) => !post.draft)
    .sort((a, b) => b.date - a.date)
    .map(({ content, ...post }) => post);
}

export function getPost(slug) {
  const fileName = `${slug}.md`;
  if (!isPublishable(fileName) || !fs.existsSync(path.join(postsDirectory, fileName))) {
    return null;
  }

  const post = readPostFile(fileName);
  if (post.draft) {
    return null;
  }

  return { ...post, html: marked.parse(post.content) };
}

export const formatDate = (date) =>
  date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
