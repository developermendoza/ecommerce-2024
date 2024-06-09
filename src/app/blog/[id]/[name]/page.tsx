import { BlogSidebar } from "@/ui/sidebars";
import Blog from "@/components/Blog";
import BlogNavbar from "@/components/BlogNavbar";

export default function BlogPage({
  params,
}: {
  params: { id: string; name: string };
}) {
  const blogId = params.id;

  return (
    <main>
      <BlogNavbar id={blogId} />
      <div className="max-w-6xl m-auto">
        <div className="grid grid-cols-3 gap-8 py-12">
          <Blog id={blogId} />
          <BlogSidebar />
        </div>
      </div>
    </main>
  );
}
