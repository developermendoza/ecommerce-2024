import { categories } from "@/data/blogs";

export async function GET() {
  return Response.json({ categories });
}
