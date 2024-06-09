import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import BestSellers from "@/components/BestSellers";
import SeasonOffer from "@/components/SeasonOffer";
import Reviews from "@/components/Reviews";
import InstagramFeed from "@/components/InstagramFeed";
import NewsLetter from "@/components/NewsLetter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Collection />
      <BestSellers />
      <SeasonOffer />
      <Reviews />
      <InstagramFeed />
      <NewsLetter />
    </main>
  );
}
