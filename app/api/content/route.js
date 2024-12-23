// app/contentful/route.js

import { createClient } from 'contentful';

const client = createClient({
  space: process.env.SPACE_ID,
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.ACCESS_TOKEN,
});

export async function GET() {
  try {
    // Fetch all entries
    const entries = await client.getEntries();

    // Return the entries data as JSON response
    return new Response(JSON.stringify(entries), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    // Handle errors if the API call fails
    console.error(error);
    return new Response(
      JSON.stringify({ message: 'Error fetching data from Contentful' }),
      { status: 500 }
    );
  }
}
