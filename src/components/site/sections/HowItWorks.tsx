import { motion } from "motion/react";
import { SectionHead } from "./Categories";
import { Target, Wallet, Search, Rocket, BarChart3, UserPlus, BadgeCheck, Mail, IndianRupee, Globe, MapPin } from "lucide-react";

const brands = [
  { icon: Target, title: "Select category", desc: "Pick verticals that match your product." },
  { icon: Wallet, title: "Set budget", desc: "Choose a tier from ₹10K to ₹5L+." },
  { icon: Search, title: "Discover creators", desc: "The best fit your goals" },
  { icon: Globe, title: "Select language", desc: "Choose target languages for your campaign." },
  { icon: Rocket, title: "Launch campaign", desc: "Brief, approve and go live in minutes." },
];

const creators = [
  { icon: UserPlus, title: "Register", desc: "Sign up in under 2 minutes." },
  { icon: BadgeCheck, title: "Verify profile", desc: "Get the verified badge brands trust." },
  { icon: Mail, title: "Receive offers", desc: "Curated brand campaigns, in your inbox." },
  { icon: IndianRupee, title: "Earn revenue", desc: "Transparent payouts via Razorpay." },
];

export function HowItWorks() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="How it works"
          title="From idea to live campaign in minutes"
          subtitle="A purpose-built workflow for both sides of the marketplace."
        />

        <div className="mt-16">
          <Track title="For Brands" accent="primary" steps={brands} />
        </div>
      </div>
    </section>
  );
}

function Track({ title, accent, steps }: { title: string; accent: "primary" | "secondary"; steps: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string }[] }) {
  const ring = accent === "primary" ? "shadow-glow" : "shadow-glow-violet";
  return (
    <div>
      <h3 className="font-display text-2xl font-semibold">{title}</h3>
      <ol className="mt-6 space-y-4">
        {steps.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
          >
            <span className={`grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-brand text-primary-foreground ${ring}`}>
              <s.icon className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-muted-foreground">Step {i + 1}</span>
              </div>
              <p className="font-display font-semibold">{s.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
