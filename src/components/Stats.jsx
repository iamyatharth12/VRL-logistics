import { motion } from "motion/react";
import HlsVideo from "./HlsVideo";
import BlurText from "./BlurText";

const stats = [
  { value: "1,249+", label: "Branch & Franchisee Network" },
  { value: "98%", label: "On-time delivery rate" },
  { value: "24", label: "States & UTs covered" },
  { value: "5 days", label: "Average delivery time" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-32 px-6 lg:px-16">
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
        desaturate
      />
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10" style={{ height: "200px", background: "linear-gradient(to bottom, black, transparent)" }} />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10" style={{ height: "200px", background: "linear-gradient(to top, black, transparent)" }} />

      <div className="relative z-20 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-4"
          >
            By the Numbers
          </motion.div>
          <BlurText
            text="Scale that speaks for itself."
            className="text-4xl md:text-5xl font-heading italic text-white tracking-tight leading-[0.9]"
            delay={80}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="liquid-glass rounded-3xl p-12 md:p-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-2 text-center"
              >
                <span className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">{stat.value}</span>
                <span className="text-white/60 font-body font-light text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
