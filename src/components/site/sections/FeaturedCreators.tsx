import { motion } from "motion/react";
import { SectionHead } from "./Categories";
import { BadgeCheck, Instagram, Youtube, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const featuredCreators = [
  { initials: "AK", name: "Ananya Kapoor", category: "Fashion", followers: "428K", instagram: "https://instagram.com/ananya.kapoor", youtube: "https://youtube.com/@ananya", grad: "from-pink-500 to-orange-500" },
  { initials: "RM", name: "Rahul Mehta", category: "Technology", followers: "1.2M", instagram: "https://instagram.com/rahul.mehta", youtube: "https://youtube.com/@rahulmehta", grad: "from-blue-500 to-cyan-500" },
  { initials: "PS", name: "Priya Sharma", category: "Beauty", followers: "612K", instagram: "https://instagram.com/priyasharma", youtube: "https://youtube.com/@priyasharma", grad: "from-fuchsia-500 to-rose-500" },
  { initials: "VK", name: "Vikram Khanna", category: "Finance", followers: "320K", instagram: "https://instagram.com/vikram.khanna", youtube: "https://youtube.com/@vikram", grad: "from-emerald-500 to-teal-500" },
  { initials: "NS", name: "Neha Singh", category: "Travel", followers: "884K", instagram: "https://instagram.com/nehasingh", youtube: "https://youtube.com/@nehasingh", grad: "from-amber-500 to-yellow-500" },
  { initials: "AS", name: "Arjun Singh", category: "Fitness", followers: "510K", instagram: "https://instagram.com/arjunsingh", youtube: "https://youtube.com/@arjunsingh", grad: "from-indigo-500 to-purple-500" },
];

export function CreatorCard({ initials, name, category, followers, instagram, youtube, grad, delay = 0 }: typeof featuredCreators[number] & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-elev"
    >
      <div className={`relative h-28 bg-gradient-to-br ${grad}`}>
        <div className="absolute -bottom-8 left-5">
          <div className="grid h-16 w-16 place-items-center rounded-2xl border-4 border-card bg-gradient-brand font-display text-lg font-bold text-primary-foreground shadow-glow">
            {initials}
          </div>
        </div>
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-card/90 px-2 py-0.5 text-[10px] font-semibold text-foreground backdrop-blur">
          <BadgeCheck className="h-3 w-3 text-primary" /> Verified
        </span>
      </div>
      <div className="p-5 pt-10">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-display font-semibold">{name}</p>
            <p className="text-xs text-muted-foreground">{category}</p>
          </div>
          <div className="flex gap-2">
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
            )}
            {youtube && (
              <a href={youtube} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <div className="mt-4">
          <div className="rounded-lg bg-muted/60 p-3">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Followers</p>
            <p className="text-sm font-semibold">{followers}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedCreators() {
  const images = [
    "/images/brand1.png",
    "/images/brand2.png",
    "/images/brand3.png",
    "/images/brand4.png",
    "/images/brand5.png",
    "/images/brand6.png",
    "/images/brand7.png",
    "/images/brand8.png",
    "/images/brand9.png",
    "/images/brand10.png",
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold uppercase tracking-wider mb-3">Our Collaborations</p>

          <h2 className="text-5xl md:text-6xl font-bold text-white">Creator's We've Worked With</h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Helping brands grow through influencer marketing,content creation and performance campaigns.</p>
        </div>

        {/* Carousel */}
        <div className="relative">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-40 z-10 bg-gradient-to-r from-black to-transparent" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-40 z-10 bg-gradient-to-l from-black to-transparent" />

          <motion.div className="flex gap-6 marquee" aria-hidden="true">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className={`min-w-[220px] h-[160px] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:-translate-y-2 hover:scale-105 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] group`}
              >
                <img src={image} alt={`Brand ${index + 1}`} className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-all duration-500" />
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
