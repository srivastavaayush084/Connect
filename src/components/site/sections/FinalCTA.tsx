import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-brand p-10 text-primary-foreground shadow-glow sm:p-16">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Launch in under 10 minutes
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Launch your influencer campaign today
          </h2>
          <p className="mt-4 text-base opacity-90 sm:text-lg">
            Get matched with verified creators and start driving measurable results — no agency overhead.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link to="/start-campaign">Start campaign <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
              <Link to="/creators">Browse creators</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
