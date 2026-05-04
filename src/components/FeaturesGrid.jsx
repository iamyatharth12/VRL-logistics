import { Zap, Palette, BarChart3, Shield } from "lucide-react";
import { motion } from "motion/react";
import BlurText from "./BlurText";

const cards = [
  {
    icon: Zap,
    title: "Days, Not Weeks",
    body: "Pickup to delivery at a pace that redefines fast. Because delays aren't a strategy.",
  },
  {
    icon: Palette,
    title: "Obsessively Reliable",
    body: "Every consignment tracked. Every route optimized. Service so consistent, it feels inevitable.",
  },
  {
    icon: BarChart3,
    title: "Built to Scale",
    body: "From a single parcel to full truckloads. Our network handles any volume, any size, anywhere.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    body: "Your cargo is protected end-to-end. Real-time tracking, secure handling, zero compromise.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-4"
          >
            Why Us
          </motion.div>
          <BlurText
            text="The difference is everything."
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]"
            delay={80}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="liquid-glass rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center">
                <card.icon size={18} className="text-white" />
              </div>
              <h3 className="font-heading italic text-white text-xl">{card.title}</h3>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
