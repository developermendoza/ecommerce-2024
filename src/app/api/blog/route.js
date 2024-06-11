import { blogs } from "@/data/blogs";

export async function GET(request) {
  return Response.json({ blogs });
}
