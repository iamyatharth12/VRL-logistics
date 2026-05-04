import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import BlurText from "./BlurText";

export default function Hero() {
  return (
    <section className="relative overflow-visible" style={{ height: "1000px" }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        className="absolute left-0 w-full h-auto object-contain z-0"
        style={{ top: "20%" }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/5 z-0" />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
        style={{
          height: "300px",
          background: "linear-gradient(to bottom, transparent, black)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{ paddingTop: "150px" }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 mb-8"
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
            New
          </span>
          <span className="text-white/80 text-xs font-body pr-3">
            India's largest fleet owner of commercial vehicles
          </span>
        </motion.div>

        {/* Heading */}
        <BlurText
          text="Logistics That Move India Forward"
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.85] max-w-3xl tracking-[-2px] mb-6"
          delay={100}
          direction="bottom"
        />

        {/* Subtext */}
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm md:text-base text-white/70 font-body font-light leading-tight max-w-md mb-8"
        >
          1,249+ branches. 20,000+ workforce. Pan-India coverage built for speed, reliability, and last-mile delivery — even in the remotest corners.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <a
            href="track.html"
            className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm text-white font-body font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            Track Consignment
            <ArrowUpRight size={16} />
          </a>
          <a
            href="pickup.html"
            className="text-white/80 font-body text-sm flex items-center gap-2 hover:text-white transition-colors"
          >
            <Play size={14} fill="currentColor" />
            Request Pickup
          </a>
        </motion.div>

        {/* Partners bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 pt-8 flex flex-col items-center gap-6"
        >
          <div className="liquid-glass rounded-full px-4 py-1.5">
            <span className="text-white/50 text-xs font-body">
              Trusted by businesses across India
            </span>
          </div>
          <div className="flex items-center gap-12 md:gap-16 flex-wrap justify-center">
            {["Reliance", "Tata", "Infosys", "Flipkart", "Amazon IN"].map((name) => (
              <span
                key={name}
                className="text-2xl md:text-3xl font-heading italic text-white/60 hover:text-white transition-colors cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
