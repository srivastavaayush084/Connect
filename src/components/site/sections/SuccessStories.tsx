import { motion } from "motion/react";
import { Quote, TrendingUp } from "lucide-react";
import { SectionHead } from "./Categories";

const stories = [
  {
    brand: "Nova Beauty",
    goal: "Drive D2C product launch reach",
    reach: "8.4M",
    engagement: "640K",
    roi: "5.2×",
    quote: "TrendTide matched us with 18 creators who actually moved the needle. Our launch sold out in 11 days.",
    author: "Mehak R., Head of Growth",
  },
  {
    brand: "Finly App",
    goal: "Boost app installs in Tier 2 cities",
    reach: "5.1M",
    engagement: "412K",
    roi: "4.0×",
    quote: "We replaced our agency with TrendTide and cut acquisition cost by 38% in one quarter.",
    author: "Rohit S., CMO",
  },
  {
    brand: "Trailhead Travel",
    goal: "Awareness for new adventure routes",
    reach: "12.3M",
    engagement: "980K",
    roi: "6.4×",
    quote: "The AI matching is unreal — every creator brief felt tailor-made for our audience.",
    author: "Aisha P., Brand Lead",
  },
];

export function SuccessStories() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Success stories"
          title="Campaigns that actually convert"
          subtitle="Real results from brands scaling with verified creators on TrendTide Connect."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stories.map((s, i) => (
            <motion.article
              key={s.brand}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative flex flex-col rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-lg font-semibold">{s.brand}</p>
                <span className="inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-xs font-semibold text-success">
                  <TrendingUp className="h-3 w-3" /> {s.roi} ROI
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{s.goal}</p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <Stat label="Reach" value={s.reach} />
                <Stat label="Engagement" value={s.engagement} />
              </div>

              <div className="mt-6 flex-1 rounded-2xl bg-gradient-brand-soft p-4">
                <Quote className="h-5 w-5 text-primary" />
                <p className="mt-2 text-sm leading-relaxed">{s.quote}</p>
                <p className="mt-3 text-xs font-medium text-muted-foreground">— {s.author}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border p-3">
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-0.5 font-display text-xl font-bold">{value}</p>
    </div>
  );
}
