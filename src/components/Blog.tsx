import { getBlogById } from "@/utils";
import Image from "next/image";
import { BlogSkeleton } from "@/ui/skeletons";

const Blog = async ({ id }: { id: string }) => {
  const { blog } = await getBlogById(id);
  return (
    <div className="col-span-2">
      {blog?.category ? (
        <p className="font-semibold uppercase">{blog?.category}</p>
      ) : (
        <p className="font-semibold">...Loading</p>
      )}
      <h1 className="text-5xl font-semibold max-w-2xl py-4">{blog?.title}</h1>

      <p className="text-gray-500 font-light text-sm">
        Posted by <span className="text-gray-600 font-medium"> Kevin</span> on
        {blog?.date ? (
          <span className="text-gray-600 font-medium"> {blog.date}</span>
        ) : (
          <span className="text-gray-600 font-medium">Loading ..</span>
        )}
      </p>

      <div className="my-12">
        <div className="w-full h-[500px] relative">
          {blog?.featuredImage ? (
            <Image
              alt=""
              src={blog.featuredImage} // Fallback image
              fill
              style={{ objectFit: "cover" }}
            />
          ) : (
            "...loading"
          )}
        </div>
      </div>
      <div>
        {blog?.body ? (
          <p className="text-gray-700 text-md font-light">{blog.body}</p>
        ) : (
          <p>Loading ...</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
