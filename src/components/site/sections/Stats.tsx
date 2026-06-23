import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Verified creators" },
  { value: 500, suffix: "+", label: "Campaigns executed" },
  { value: 100, suffix: "+", label: "Brand partners" },
  { value: 100, suffix: "M+", label: "Reach generated" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <Counter key={s.label} {...s} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}

function Counter({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.8, delay, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count, delay]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-bold sm:text-5xl">
        <motion.span>{rounded}</motion.span>
        <span className="text-gradient">{suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  );
}
