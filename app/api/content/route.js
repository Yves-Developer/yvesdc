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
    const { items } = await client.getEntries();
    console.log(JSON.stringify(items))

    return NextResponse.json(items, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error fetching data from Contentful" },
      { status: 500 }
    );
  }
}
