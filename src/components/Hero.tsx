import { HeroCarousel } from "@/ui/carousels";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#f8f7f5] ">
      <HeroCarousel
        title="End of season sale"
        subtitle="holiday 2024"
        desc="New colors, now also available"
        buttonName="View Collection"
        buttonUrl="/shop"
      />
    </div>
  );
};

export default Hero;
