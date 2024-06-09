import React from "react";
import Image from "next/image";
import { SecondaryButton } from "@/ui/buttons";
import { getCategories, getProducts } from "@/utils";

const BestSellers = async () => {
  const { products } = await getProducts();
  const { categories } = await getCategories();
  return (
    <section className="pb-24">
      <div className="max-w-6xl m-auto">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-10">Best Sellers</h2>
          <div className="flex justify-center gap-6 text-gray-600 mb-8">
            {categories.map((category: any) => (
              <h3 key={category.id}>{category.name}</h3>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-8">
            {products.splice(0, 7).map((product: any, index: any) => (
              <div key={index}>
                <div className="w-[100%] h-[400px] bg-[#f1f1f1] relative">
                  <Image
                    src={product.featuredImage}
                    className="p-8"
                    fill
                    style={{ objectFit: "contain" }}
                    alt=""
                  />
                </div>
                <div className="capitalize text-left mt-4 text-sm">
                  <p className="font-bold text-sm">{product.name}</p>
                  <p className="font-semibold text-gray-700">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <SecondaryButton buttonUrl="/shop" buttonName="Explore More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
