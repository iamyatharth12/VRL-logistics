import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import HlsVideo from "./HlsVideo";
import BlurText from "./BlurText";

export default function CtaFooter() {
  return (
    <section className="relative overflow-hidden">
      <HlsVideo
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-10" style={{ height: "200px", background: "linear-gradient(to bottom, black, transparent)" }} />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10" style={{ height: "200px", background: "linear-gradient(to top, black, transparent)" }} />

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-40">
        {/* CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-8"
        >
          Get Started
        </motion.div>

        <BlurText
          text="Your supply chain starts here."
          className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] max-w-3xl mb-6"
          delay={80}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="text-white/60 font-body font-light text-sm md:text-base max-w-md mb-10"
        >
          Book a pickup today. Experience India's most trusted logistics network. No complexity, no hidden charges. Just reliable delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
          className="flex items-center gap-4"
        >
          <a
            href="pickup.html"
            className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            Book a Pickup <ArrowUpRight size={16} />
          </a>
          <a
            href="branch_list.html"
            className="bg-white text-black rounded-full px-6 py-3 font-body font-medium text-sm hover:bg-white/90 transition-colors"
          >
            Find a Branch
          </a>
        </motion.div>

        {/* Footer Bar */}
        <div className="mt-32 pt-8 w-full max-w-6xl border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-body">
            © 2026 VRL Logistics Ltd. All rights reserved. CIN: L60210KA1983PLC005247
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Contact", "Careers"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/40 text-xs font-body hover:text-white/70 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
