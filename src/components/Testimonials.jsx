import { motion } from "motion/react";
import BlurText from "./BlurText";

const testimonials = [
  {
    quote: "A complete logistics overhaul in record time. VRL's network outperformed every carrier we'd tried before. Delivery rates we couldn't believe.",
    name: "Arjun Mehta",
    role: "Head of Supply Chain, Luminary Retail",
  },
  {
    quote: "On-time delivery up 4x. That's not a typo. The coverage and reliability just works differently at this scale.",
    name: "Priya Rajan",
    role: "Operations Director, Arcline Commerce",
  },
  {
    quote: "They didn't just move our goods. They gave us confidence in our supply chain. World-class doesn't begin to cover it.",
    name: "Vikram Nair",
    role: "Logistics Head, Helix Industries",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-4"
          >
            What They Say
          </motion.div>
          <BlurText
            text="Don't take our word for it."
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]"
            delay={80}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="liquid-glass rounded-2xl p-8 flex flex-col gap-6"
            >
              <p className="text-white/80 font-body font-light text-sm italic leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div>
                <p className="text-white font-body font-medium text-sm">{t.name}</p>
                <p className="text-white/50 font-body font-light text-xs mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
