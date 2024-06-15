import { getBlogs } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blogs = ({ blogs }: { blogs: any[] }) => {
  return (
    <div className="col-span-4 md:col-span-3 grid grid-cols-3 gap-6">
      {blogs.map((blog: any) => (
        <div
          className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6"
          key={blog.id}
        >
          <div className="relative h-[350px] w-auto col-span-2 md:col-span-1">
            <Image
              alt=""
              src={blog.featuredImage}
              style={{
                objectFit: "cover",
              }}
              fill
            />
          </div>
          <div className="col-span-2">
            <div className="font-semibold flex gap-2">
              <p>{blog.category}</p>
              <p className="text-gray-600">• {blog.date}</p>
            </div>
            <h2 className="text-2xl font-semibold mt-4">{blog.title}</h2>
            <p className="py-4 text-gray-600">{blog.body}</p>

            <Link
              className="font-semibold underline"
              href={`/blog/${blog.id}/${blog.title}`}
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
