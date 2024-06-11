import { blogs } from "@/data/blogs";
export function GET(request, { params }) {
  const blogId = parseInt(params.id);
  const blog = blogs.find((blog) => blog.id === blogId);
  return Response.json({ blog });
}
