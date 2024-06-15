import Link from "next/link";
import { IoChevronForwardSharp } from "react-icons/io5";
import Image from "next/image";

export function ShopHero() {
  return (
    <div className="h-[350px] w-auto relative">
      <Image
        src="/images/shop-hero/hero.jpeg"
        style={{ objectFit: "cover" }}
        fill
        alt=""
      />
      <div className="relative max-w-6xl m-auto h-[350px] px-6">
        <div className="max-w-6xl m-auto h-[350px] flex flex-col justify-center">
          <h1 className="text-6xl">Shop</h1>
          <div className="flex gap-2 items-center">
            <Link href="/">Home</Link>
            <span className="text-gray-500">
              <IoChevronForwardSharp />{" "}
            </span>
            <p className="text-gray-500">Shop</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const ContactHero = () => {
  return (
    <div className="bg-[#FAF0E7] h-[420px] flex justify-center items-center">
      <div className="max-w-6xl m-auto text-center">
        <p className="text-blue-500 font-semibold">Need Help?</p>
        <h1 className=" text-6xl max-w-xl">
          Haven&apos;t found what your&apos;re looking for? Contact us
        </h1>
      </div>
    </div>
  );
};

export const AboutHero = () => {
  return (
    <div className="relative w-auto h-[650px]">
      <Image
        alt=""
        src="/images/about/about-hero.jpeg"
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <div className="relative max-w-6xl text-center md:text-left m-auto h-[650px] px-2">
        <div className="max-w-6xl m-auto h-[650px] flex flex-col justify-center">
          <p className="text-blue-500 font-semibold">About</p>
          <h1 className="text-6xl max-w-xl">
            Believe In Craftsmanship And Luxurious Design.
          </h1>
        </div>
      </div>
    </div>
  );
};
