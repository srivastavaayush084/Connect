import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, TrendingUp, Users, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="hero-deco-1" aria-hidden />
      <div className="hero-deco-2" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center animate-fade-up"
        >


          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            India's fastest <span className="text-gradient">influencer marketing</span> platform
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Connect with verified creators across Instagram, YouTube, LinkedIn and Snapchat.
            Launch high-performing campaigns in minutes — not weeks.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-brand text-primary-foreground shadow-glow hover:opacity-95">
              <Link to="/start-campaign">
                Start Campaign <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-primary" /> 10,000+ verified creators</span>
            <span className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-secondary" /> 100M+ reach generated</span>
            <span className="flex items-center gap-2"><Users className="h-4 w-4 text-accent" /> 100+ brand partners</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
