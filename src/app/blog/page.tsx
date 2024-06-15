import React, { Suspense } from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { BlogSidebar } from "@/ui/sidebars";
import Blogs from "@/components/Blogs";
import { getBlogs } from "@/utils";
import { BlogSidebarSkeleton } from "@/ui/skeletons";
import { BlogHero } from "@/ui/heroes";

export default async function BlogsPage() {
  const { blogs } = await getBlogs();
  return (
    <>
      <BlogHero />
      <main className="max-w-6xl m-auto py-12 px-6">
        <div className="grid grid-cols-4 gap-6">
          <Blogs blogs={blogs} />
          <Suspense fallback={<BlogSidebarSkeleton />}>
            <BlogSidebar />
          </Suspense>
        </div>
      </main>
    </>
  );
}
