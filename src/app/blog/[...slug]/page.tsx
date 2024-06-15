import React, { Suspense } from "react";
import { BlogSidebar } from "@/ui/sidebars";
import { getBlogById } from "@/utils";
import Blog from "@/components/Blog";
import BlogNavbar from "@/components/BlogNavbar";
import { BlogSidebarSkeleton } from "@/ui/skeletons";
import { BlogNavbarSkeleton } from "@/ui/skeletons";

export default async function BlogPage({
  params,
}: {
  params: { slug: any[] };
}) {
  const blogId = params.slug[0];
  const { blog } = await getBlogById(blogId);
  return (
    <main>
      <Suspense fallback={<BlogNavbarSkeleton />}>
        <BlogNavbar id={blogId} />
      </Suspense>
      <div className="max-w-6xl m-auto ">
        <div className="grid grid-cols-3 gap-8 py-12 mx-6">
          <Blog blog={blog} />
          <Suspense fallback={<BlogSidebarSkeleton />}>
            <BlogSidebar />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
