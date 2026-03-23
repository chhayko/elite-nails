import { NextResponse } from "next/server";

// Refresh Google reviews every 24 hours
export const revalidate = 86400;

const PLACE_NAME = "Elite Nails Lierde";
const PLACE_ADDRESS = "Steenweg 234b, Sint-Martens-Lierde, Belgium";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ reviews: [], error: "No API key configured" });
  }

  try {
    // Step 1: Find the Place ID
    const searchRes = await fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
        PLACE_NAME + " " + PLACE_ADDRESS
      )}&inputtype=textquery&fields=place_id&key=${apiKey}`,
      { next: { revalidate: 86400 } }
    );
    const searchData = await searchRes.json();
    const placeId = searchData?.candidates?.[0]?.place_id;

    if (!placeId) {
      return NextResponse.json({ reviews: [], error: "Place not found" });
    }

    // Step 2: Fetch place details including reviews
    const detailsRes = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&language=nl&key=${apiKey}`,
      { next: { revalidate: 86400 } }
    );
    const detailsData = await detailsRes.json();
    const result = detailsData?.result;

    if (!result) {
      return NextResponse.json({ reviews: [], error: "No details found" });
    }

    // Map to our testimonial format
    const reviews = (result.reviews || []).map(
      (r: {
        author_name: string;
        text: string;
        rating: number;
        relative_time_description: string;
        profile_photo_url?: string;
      }) => ({
        name: r.author_name,
        quote: r.text,
        rating: r.rating,
        time: r.relative_time_description,
        image: r.profile_photo_url || null,
        initials: r.author_name
          .split(" ")
          .map((n: string) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2),
        google: true,
        role: `Google review · ${"⭐".repeat(r.rating)}`,
      })
    );

    return NextResponse.json({
      reviews,
      rating: result.rating,
      total: result.user_ratings_total,
    });
  } catch (err) {
    console.error("Google Places API error:", err);
    return NextResponse.json({ reviews: [], error: "Fetch failed" });
  }
}
