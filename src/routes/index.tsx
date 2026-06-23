import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/sections/Hero";
import BrandCarousel from "@/components/site/BrandCarousel";
import ContactTicker from "@/components/site/ContactTicker";
import { Stats } from "@/components/site/sections/Stats";
import { Categories } from "@/components/site/sections/Categories";
import { HowItWorks } from "@/components/site/sections/HowItWorks";
import { FeaturedCreators } from "@/components/site/sections/FeaturedCreators";
import { SuccessStories } from "@/components/site/sections/SuccessStories";
import { FinalCTA } from "@/components/site/sections/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TrendTide Connect — India's Fastest Influencer Marketing Platform" },
      { name: "description", content: "AI-powered influencer marketing marketplace. Connect with 10,000+ verified creators across Instagram, YouTube and LinkedIn. Launch campaigns in minutes." },
      { property: "og:title", content: "TrendTide Connect — India's Fastest Influencer Marketing Platform" },
      { property: "og:description", content: "AI-powered marketplace connecting brands with verified creators. Launch high-performing influencer campaigns in minutes." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <ContactTicker />
      <Hero />
      <FinalCTA />
      <BrandCarousel />
      <Stats />
      <FeaturedCreators />
      <Categories />
      <HowItWorks />
      <SuccessStories />
    </SiteLayout>
  );
}
