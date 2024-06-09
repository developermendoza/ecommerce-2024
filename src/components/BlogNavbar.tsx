import { getBlogById } from "@/utils";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { BlogNavbarSkeleton } from "@/ui/skeletons";

const BlogNavbar = async ({ id }: { id: string }) => {
  const { blog } = await getBlogById(id);

  return (
    <div className="bg-gray-100 ">
      <div className="max-w-6xl m-auto font-light flex gap-2 text-gray-500 py-3 items-center">
        <p className="font-semibold">Home</p>
        <FaAngleRight />

        <Link className="font-semibold" href="/blog">
          Blog
        </Link>
        <FaAngleRight />
        <p>{blog.title}</p>
        {/* {blog ? <p>{blog?.title}</p> : <p>...Loading</p>} */}
      </div>
    </div>
  );
};

export default BlogNavbar;
