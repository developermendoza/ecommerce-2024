import { Suspense } from "react";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import BestSellers from "@/components/BestSellers";
import SeasonOffer from "@/components/SeasonOffer";
import Reviews from "@/components/Reviews";
import InstagramFeed from "@/components/InstagramFeed";
import NewsLetter from "@/components/NewsLetter";
import { LandingCategoriesSkeleton } from "@/ui/skeletons";

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<LandingCategoriesSkeleton />}>
        <Collection />
      </Suspense>
      <BestSellers />
      <SeasonOffer />
      <Reviews />
      <InstagramFeed />
      <NewsLetter />
    </main>
  );
}
