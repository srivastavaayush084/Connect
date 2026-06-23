import { motion } from "motion/react";

const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
];

export default function BrandCarousel() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-20 bg-[#050505] overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold">
          <span className="text-blue-600">50+ Brand's Worked</span>
          <br />
          With Trendtide-connect
        </h2>
      </div>

      <div className="relative overflow-hidden">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 z-10 h-full w-48 bg-gradient-to-r from-[#050505] to-transparent" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 z-10 h-full w-48 bg-gradient-to-l from-[#050505] to-transparent" />

        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className={`min-w-[240px] h-[140px] bg-[#0b0b0b] rounded-full overflow-hidden hover:scale-105 transition-transform duration-300`}
            >
              <img src={logo} alt="brand" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
