import { tags } from "@/data/blogs";
export async function GET() {
  return Response.json({ tags });
}
