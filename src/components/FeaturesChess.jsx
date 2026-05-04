import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import BlurText from "./BlurText";

const rows = [
  {
    title: "Built to deliver. Engineered to perform.",
    body: "Every route is optimized. Our network covers 24 states and 5 Union Territories with 1,249+ branches — designed so your consignment reaches its destination on time, every time.",
    cta: "View Network",
    href: "branch_list.html",
    gif: "https://motionsites.ai/assets/hero-finlytic-preview-CV9g0FHP.gif",
    reverse: false,
  },
  {
    title: "Real-time visibility. Always.",
    body: "Track every consignment from pickup to delivery. Our in-house IT systems give you live updates at every stage — no guessing, no waiting, no surprises.",
    cta: "Track a Shipment",
    href: "track.html",
    gif: "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
    reverse: true,
  },
];

export default function FeaturesChess() {
  return (
    <section className="py-24 px-6 lg:px-16">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-4"
        >
          Capabilities
        </motion.div>
        <BlurText
          text="Core strengths. Zero compromise."
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]"
          delay={80}
        />
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-24 max-w-6xl mx-auto">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className={`flex flex-col ${row.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}
          >
            {/* Text */}
            <div className="flex-1 flex flex-col gap-5">
              <h3 className="text-2xl md:text-3xl font-heading italic text-white leading-tight">{row.title}</h3>
              <p className="text-white/60 font-body font-light text-sm md:text-base leading-relaxed">{row.body}</p>
              <a
                href={row.href}
                className="self-start liquid-glass-strong rounded-full px-5 py-2.5 text-sm text-white font-body font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                {row.cta} <ArrowUpRight size={14} />
              </a>
            </div>
            {/* Image */}
            <div className="flex-1 w-full">
              <div className="liquid-glass rounded-2xl overflow-hidden aspect-video">
                <img src={row.gif} alt={row.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
