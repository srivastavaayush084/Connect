import { motion } from "motion/react";

export default function ContactTicker() {
  return (
    <section className="bg-[#050505] mt-12 py-10 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="mx-10 text-5xl font-black text-metallic hover:opacity-90 transition duration-300"
          >
            TrendTide Connect
          </span>
        ))}
      </motion.div>
    </section>
  );
}
