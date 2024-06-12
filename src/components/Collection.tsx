import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Image from "next/image";
import { getCategories } from "@/utils";
import path from "path";

const Collection = async () => {
  const { categories } = await getCategories();

  return (
    <section className="py-24">
      <div className="max-w-6xl m-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold mb-10">Shop by Collection</h2>
          <div className="flex gap-4 text-3xl">
            <MdOutlineKeyboardArrowLeft />
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {categories.map((category: any) => (
            <div
              key={category.id}
              className="w-[100%] h-[400px] bg-[#f1f1f1] relative text-center m-auto flex flex-col justify-center items-center"
            >
              <Image
                src={category.featuredImage}
                fill
                style={{ objectFit: "cover" }}
                alt=""
              />
              <p className="absolute  bottom-10 bg-white px-6 py-2 inline-block rounded">
                {category.name} <span className="pl-2">(4)</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
