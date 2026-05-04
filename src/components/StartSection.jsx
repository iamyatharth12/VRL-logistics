import { ArrowUpRight } from "lucide-react";
import HlsVideo from "./HlsVideo";
import BlurText from "./BlurText";
import { motion } from "motion/react";

export default function StartSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "600px" }}>
      <HlsVideo
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10" style={{ height: "200px", background: "linear-gradient(to bottom, black, transparent)" }} />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10" style={{ height: "200px", background: "linear-gradient(to top, black, transparent)" }} />

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-32" style={{ minHeight: "600px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6"
        >
          How It Works
        </motion.div>

        <BlurText
          text="You ship it. We move it."
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-4"
          delay={120}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="text-white/60 font-body font-light text-sm md:text-base max-w-md mb-8"
        >
          Book a pickup. Our network handles the rest — routing, transit, last-mile delivery. All in days, tracked in real time.
        </motion.p>

        <motion.a
          href="pickup.html"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
          className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
        >
          Book a Pickup <ArrowUpRight size={16} />
        </motion.a>
      </div>
    </section>
  );
}
