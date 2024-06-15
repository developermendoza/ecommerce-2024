import { IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import { getBlogs, getCategories, getTags } from "@/utils";
import Link from "next/link";
export const ShopSideBar = () => {
  return (
    <aside>
      <div className="flex justify-between items-center border-t-2 border-gray-200 pt-4">
        <h3 className="font-semibold">Categories</h3>
        <IoIosArrowUp />
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">Women</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">Men</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">Kids</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">Gifts</span>
        </label>
      </div>
      <div className="flex justify-between items-center border-t-2 border-gray-200 pt-4 mt-6">
        <h3 className="font-semibold">Colors</h3>
        <IoIosArrowUp />
      </div>
      <div className="flex flex-col gap-2 py-4">
        <div className="flex gap-4 items-center">
          <div className="bg-blue-500 w-4 h-4 rounded-full"></div> <p>Blue</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-gray-500 w-4 h-4 rounded-full"></div> <p>Grey</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-red-500 w-4 h-4 rounded-full"></div> <p>Red</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-yellow-500 w-4 h-4 rounded-full"></div>
          <p>Yellow</p>
        </div>
      </div>
      <div className="flex justify-between items-center border-t-2 border-gray-200 pt-4">
        <h3 className="font-semibold">Brand</h3>
        <IoIosArrowUp />
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">Adidas</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">Chloe</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">Kendo</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">Nike</span>
        </label>
      </div>
      <div className="flex justify-between items-center border-t-2 border-gray-200 pt-4 mt-4">
        <h3 className="font-semibold">Price</h3>
        <IoIosArrowUp />
      </div>
      <div className="pt-4 flex flex-col gap-4">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">$10.00 - $49.00</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">$50.00 - $99.00</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">$100.00 - $199.00</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            // checked={checked}
            // onChange={onChange}
          />
          <span className="text-gray-700">$200.00 +</span>
        </label>
      </div>
    </aside>
  );
};

const Categories = ({ categories }: { categories: any[] }) => {
  return (
    <ul className="flex flex-col gap-2">
      <li>All</li>
      {categories.length > 0
        ? categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))
        : "...Loading"}
    </ul>
  );
};

const Blogs = (data: any) => {
  return (
    <ul className="flex flex-col gap-2">
      {data?.blogs.length > 0
        ? data?.blogs.splice(0, 3).map((blog: any) => (
            <Link
              href={`/blog/${blog.id}/${blog.title}`}
              key={blog.id}
              className="flex gap-2 items-center"
            >
              <div className="h-[100px] w-[100px] relative">
                <Image
                  src={blog.featuredImage}
                  alt=""
                  style={{ objectFit: "cover" }}
                  fill
                />
              </div>
              <div>
                <p className="text-gray-600">{blog.date}</p>
                <p className="font-semibold">{blog.title}</p>
              </div>
            </Link>
          ))
        : "Loading"}
    </ul>
  );
};

const Tags = ({ tags }: { tags: any[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.length > 0
        ? tags.map((tag) => (
            <p
              key={tag.id}
              className="text-gray-500 p-2 rounded border-gray-400 border-[1px] text-sm"
            >
              {tag.name}
            </p>
          ))
        : "...Loading"}
    </div>
  );
};

export const BlogSidebar = async () => {
  const { blogs } = await getBlogs();
  const { categories } = await getCategories();
  const { tags } = await getTags();
  return (
    <aside className="col-span-4 md:col-span-1">
      <div className="mb-10">
        <h3 className="font-semibold text-xl mb-4">Categories</h3>
        <Categories categories={categories} />
      </div>
      <div className="mb-10">
        <h2 className="font-semibold text-xl mb-4">Latest Posts</h2>
        <Blogs blogs={blogs} />
      </div>
      <div className="mb-10">
        <h2 className="font-semibold text-xl mb-4">Tags</h2>

        <Tags tags={tags} />
      </div>
    </aside>
  );
};
