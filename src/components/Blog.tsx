import { getBlogById } from "@/utils";
import Image from "next/image";

const Blog = async ({ id }: { id: string }) => {
  const { blog } = await getBlogById(id);
  return (
    <div className="col-span-2">
      <p className="font-semibold uppercase">{blog.category}</p>
      <h1 className="text-5xl font-semibold max-w-2xl py-4">{blog.title}</h1>

      <p className="text-gray-500 font-light text-sm">
        Posted by <span className="text-gray-600 font-medium"> Kevin</span> on
        <span className="text-gray-600 font-medium"> {blog.date}</span>
      </p>

      <div className="my-12">
        <div className="w-full h-[500px] relative">
          <Image
            alt=""
            src={blog.featuredImage} // Fallback image
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div>
        <p className="text-gray-700 text-md font-light">{blog.body}</p>
      </div>
    </div>
  );
};

export default Blog;
