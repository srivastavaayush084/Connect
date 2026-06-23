import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { motion } from "motion/react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CreatorCard } from "@/components/site/sections/FeaturedCreators";
import creatorsData from "@/data/creators.json";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const allCreators = [...(creatorsData as any)];

const categories = ["All", ...Array.from(new Set(allCreators.map((c) => c.category)))];

export const Route = createFileRoute("/creators")({
  head: () => ({
    meta: [
      { title: "Browse Verified Creators — TrendTide Connect" },
      { name: "description", content: "Discover 10,000+ verified Instagram, YouTube and LinkedIn creators across India. Filter by category, followers, engagement and location." },
      { property: "og:title", content: "Browse Verified Creators — TrendTide Connect" },
      { property: "og:description", content: "Discover 10,000+ verified Instagram, YouTube and LinkedIn creators across India." },
      { property: "og:url", content: "/creators" },
    ],
    links: [{ rel: "canonical", href: "/creators" }],
  }),
  component: CreatorsPage,
});

function CreatorsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  useEffect(() => {
    const updateFromUrl = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const category = params.get("category");
        if (category) setCat(category);
      } catch (e) {
        // ignore
      }
    };

    // initialize from current URL
    updateFromUrl();

    const onLocationChange = () => updateFromUrl();

    // listen to popstate (back/forward)
    window.addEventListener("popstate", onLocationChange);

    // detect pushState/replaceState by patching history methods to emit a custom event
    const _push = history.pushState;
    const _replace = history.replaceState;
    history.pushState = function (...args: any[]) {
      const res = _push.apply(this, args as any);
      window.dispatchEvent(new Event("locationchange"));
      return res;
    };
    history.replaceState = function (...args: any[]) {
      const res = _replace.apply(this, args as any);
      window.dispatchEvent(new Event("locationchange"));
      return res;
    };

    window.addEventListener("locationchange", onLocationChange as EventListener);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
      window.removeEventListener("locationchange", onLocationChange as EventListener);
      history.pushState = _push;
      history.replaceState = _replace;
    };
  }, []);

  const filtered = useMemo(() => {
    return allCreators.filter((c) => {
      const creatorCat = (c.category || "").toString();
      const wantedCat = (cat || "All").toString();
      const matchCat =
        wantedCat === "All" ||
        creatorCat.toLowerCase() === wantedCat.toLowerCase() ||
        creatorCat.toLowerCase().includes(wantedCat.toLowerCase()) ||
        wantedCat.toLowerCase().includes(creatorCat.toLowerCase());
      const matchQ = !q || c.name.toLowerCase().includes(q.toLowerCase()) || c.category.toLowerCase().includes(q.toLowerCase());

      return matchCat && matchQ;
    });
  }, [q, cat]);

  return (
    <SiteLayout>
      <section className="border-b border-border bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            Discover <span className="text-gradient">verified creators</span>
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Filter by category, audience and engagement to find your perfect match.
          </p>

          {/* Search and Filters removed per design */}

          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  cat === c
                    ? "bg-gradient-brand text-primary-foreground shadow-glow"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          {/* Platform filter removed: show creators by category regardless of platform */}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-6 text-sm text-muted-foreground">{filtered.length} creators found</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c, i) => <CreatorCard key={c.name} {...c} delay={i * 0.04} />)}
        </div>
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-semibold uppercase text-primary-foreground">AND MANY MORE</span>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
