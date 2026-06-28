import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  Shirt, Sparkles, Cpu, Gamepad2, Wallet, GraduationCap,
  Plane, UtensilsCrossed, Dumbbell, Coffee, Handshake,
} from "lucide-react";

const categories = [
  { icon: Shirt, name: "Fashion" },
  { icon: Sparkles, name: "Beauty" },
  { icon: Cpu, name: "Technology" },
  { icon: Gamepad2, name: "Gaming" },
  { icon: Wallet, name: "Finance" },
  { icon: GraduationCap, name: "Education" },
  { icon: Plane, name: "Travel" },
  { icon: UtensilsCrossed, name: "Food" },
  { icon: Dumbbell, name: "Fitness" },
  { icon: Coffee, name: "Lifestyle" },
  { icon: Handshake, name: "Barter" },
];

export function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHead
        eyebrow="Creator categories"
        title="Find the right creators for every vertical"
        subtitle="From beauty to fintech — discover verified creators across 10+ verticals with proven engagement."
      />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {categories.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.03 }}
            whileHover={{ y: -4 }}
          >
            <div className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-5 text-left transition-shadow hover:shadow-elev hover:scale-105">
              <div className="absolute inset-0 -z-10 bg-gradient-brand-soft opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="block">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow transition-transform group-hover:scale-110">
                  <c.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 font-display font-semibold">{c.name}</p>
              </div>

              {/* Removed platform subcategory pills: show creators by category regardless of platform */}
            </div>
          </motion.div>
        ))}
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
  );
}

export function SectionHead({ eyebrow, title, subtitle, align = "center" }: { eyebrow: string; title: string; subtitle?: string; align?: "center" | "left" }) {
  return (
    <div className={(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl") + " animate-fade-up"}>
      <span className="inline-block rounded-full bg-gradient-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
