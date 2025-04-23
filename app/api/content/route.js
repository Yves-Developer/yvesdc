// app/api/content/route.js
import { createClient } from "contentful";
import { NextResponse } from "next/server";

export const fetchCache = "force-cache"; // This enables static caching behavior
export const revalidate = 60; // Revalidate every 60 seconds

const client = createClient({
  space: "laef1csaxq5g",
  environment: "master",
  accessToken: "LwT9I5bppN4KJ-61LzyzSinuf0kYRcjViKvmAeNPfMI",
});

export async function GET() {
  try {
    const entries = await client.getEntries();

    return NextResponse.json(entries, {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching data from Contentful" },
      { status: 500 }
    );
  }
}
