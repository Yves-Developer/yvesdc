import { createClient } from "contentful";

// Returns [] when Contentful isn't configured or fails, so the page still renders.
export async function getProjects() {
  if (!process.env.CONTENTFUL_SPACE_ID) {
    return [];
  }

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: process.env.CONTENTFUL_ENVIRONMENT,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    const { items } = await client.getEntries({
      content_type: "projects",
      include: 1,
      order: ["-sys.createdAt"],
    });

    return items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title,
      description: item.fields.description,
      link: item.fields.link,
      techStack: item.fields.techStack ?? [],
      year: new Date(item.sys.createdAt).getFullYear(),
    }));
  } catch (error) {
    console.error("Failed to fetch projects from Contentful", error);
    return [];
  }
}
