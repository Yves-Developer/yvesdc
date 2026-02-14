// app/api/content/route.js
import { createClient } from "contentful";
import { NextResponse } from "next/server";

export const fetchCache = "force-cache"; // This enables static caching behavior
export const revalidate = 60; // Revalidate every 60 seconds

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function GET() {
  try {
    const { items } = await client.getEntries({
      content_type: "projects", // must match Contentful ID exactly
      include: 1,              // keep link depth small
    });

    const projects = items.map((item) => ({
      id: item.sys.id,
      ...item.fields,
    }));

    return NextResponse.json(projects);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching project data" },
      { status: 500 }
    );
  }
}
