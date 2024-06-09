import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { BlogSidebar } from "@/ui/sidebars";
import Blogs from "@/components/Blogs";

export default function BlogsPage() {
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
          <Blogs />
          <BlogSidebar />
        </div>
      </section>
    </main>
  );
}
