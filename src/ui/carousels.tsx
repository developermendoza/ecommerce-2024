import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "./buttons";
import { FaRegCircle, FaCircle } from "react-icons/fa";

export function HeroCarousel({
  title,
  subtitle,
  desc,
  buttonName,
  buttonUrl,
}: {
  title: string;
  subtitle: string;
  buttonName: string;
  desc: string;
  buttonUrl: string;
}) {
  return (
    <div className="flex items-center gap-6 max-w-6xl m-auto relative">
      <div className="relative">
        <Image
          src="/images/shop/hero-1-01.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 capitalize">
        <p>{subtitle}</p>
        <h1 className="text-6xl text-center font-bold">{title}</h1>
        <p className="font-semibold">{desc}</p>
        <PrimaryButton buttonUrl={buttonUrl} buttonName={buttonName} />
        <div className="flex gap-4 absolute bottom-10">
          <FaCircle />
          <FaRegCircle />
          <FaRegCircle />
        </div>
      </div>
      <div className="relative">
        <Image
          src="/images/shop/hero-1-02.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}

export function CollactionCarousel({}) {}
