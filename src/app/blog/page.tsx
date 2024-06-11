import React, { Suspense } from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { BlogSidebar } from "@/ui/sidebars";
import Blogs from "@/components/Blogs";
import { getBlogs } from "@/utils";
import { BlogSidebarSkeleton } from "@/ui/skeletons";

export default async function BlogsPage() {
  const { blogs } = await getBlogs();
  return (
    <main>
      <div className="text-center py-16">
        <h1 className="text-6xl font-semibold">Our Stories</h1>
        <div className="flex gap-2 items-center justify-center mt-4">
          <Link href="/" className="font-semibold ">
            Home
          </Link>
          <IoIosArrowForward className="text-gray-500" />
          <p className="text-gray-500">Blog</p>
        </div>
      </div>
      <section className="max-w-6xl m-auto py-12">
        <div className="grid grid-cols-4 gap-6">
          <Blogs blogs={blogs} />
          <Suspense fallback={<BlogSidebarSkeleton />}>
            <BlogSidebar />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
