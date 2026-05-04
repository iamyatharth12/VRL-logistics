import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  Search, Package, ArrowRight, MapPin, Clock, Shield,
  TrendingUp, Users, Truck, Globe, ChevronRight, Star
} from 'lucide-react'

/* ─── Animation helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = (delay = 0) => ({
  hidden: {},
  show:   { transition: { staggerChildren: 0.08, delayChildren: delay } },
})

/* ─── Data ─── */
const STATS = [
  { value: '28+',   label: 'States Covered' },
  { value: '1,000+', label: 'Fleet Vehicles' },
  { value: '900+',  label: 'Branch Network' },
  { value: '48yr',  label: 'In Operations' },
]

const SERVICES = [
  {
    icon: Package,
    title: 'Parcel & Courier',
    desc: 'Door-to-door parcel delivery with real-time tracking. Guaranteed transit timelines.',
    href: '/services',
  },
  {
    icon: Truck,
    title: 'Freight Transport',
    desc: 'Full truckload and LCL cargo movement. Over 1,000 owned vehicles ensuring reliability.',
    href: '/services',
  },
  {
    icon: Clock,
    title: 'Express Delivery',
    desc: 'Priority lanes for time-critical cargo. Guaranteed 24–48 hour metro delivery.',
    href: '/services',
  },
  {
    icon: Globe,
    title: 'Pan-India Network',
    desc: 'Coverage across 28 states and 5,000+ pin codes. Reach every corner of India.',
    href: '/network',
  },
]

const FEATURES = [
  { icon: Shield, title: 'Insured Cargo',     desc: 'Full cargo insurance on every shipment.' },
  { icon: MapPin,  title: 'Live Tracking',     desc: 'GPS-enabled tracking at every checkpoint.' },
  { icon: TrendingUp, title: 'On-Time Rate', desc: '98.6% on-time delivery across all routes.' },
  { icon: Users,   title: 'Dedicated Support', desc: '24/7 customer support across all touchpoints.' },
]

const TESTIMONIALS = [
  {
    name: 'Rakesh Sharma',
    company: 'Sharma Textiles, Surat',
    text: 'VRL has handled our bulk shipments for 12 years. Zero loss, consistent delivery. Absolute trust.',
    rating: 5,
  },
  {
    name: 'Priya Mehta',
    company: 'IndiaCraft Exports, Mumbai',
    text: 'The tracking system is accurate to the hour. Our clients love the transparency.',
    rating: 5,
  },
  {
    name: 'Venkat Raju',
    company: 'Southern Pharma, Chennai',
    text: 'Temperature-sensitive cargo handled with zero incidents. Their operational standards are unmatched.',
    rating: 5,
  },
]

/* ─── Hero section ─── */
function HeroSection() {
  const [trackId, setTrackId] = useState('')
  const navigate = useNavigate()

  const handleTrack = (e) => {
    e.preventDefault()
    if (trackId.trim()) navigate(`/track?id=${encodeURIComponent(trackId.trim())}`)
    else navigate('/track')
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0D1B2A]">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,16,46,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,16,46,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />
      {/* Subtle red glow */}
      <div className="absolute top-0 right-0 w-[45vw] h-[45vw] bg-[#C8102E] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-vrl relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            variants={stagger()}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp} className="section-tag mb-4">
              Trusted since 1976 · India's Largest Fleet
            </motion.div>

            <motion.h1 variants={fadeUp} className="heading-xl text-white mb-6">
              Moving India's<br />
              <span className="text-[#C8102E]">Cargo Forward.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="body-base text-[#94A3B8] max-w-xl mb-10">
              28 states. 1,000+ vehicles. 900+ branches. VRL Logistics is the freight backbone
              of Indian commerce — precise, reliable, and built for scale.
            </motion.p>

            {/* Track form */}
            <motion.form
              variants={fadeUp}
              onSubmit={handleTrack}
              className="flex gap-2 max-w-lg mb-10"
            >
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" />
                <input
                  type="text"
                  value={trackId}
                  onChange={e => setTrackId(e.target.value)}
                  placeholder="Enter LR / Consignment No."
                  className="input-vrl pl-10"
                />
              </div>
              <motion.button
                type="submit"
                className="btn-primary px-6 flex-shrink-0"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Track
              </motion.button>
            </motion.form>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link to="/booking">
                <motion.span
                  className="btn-primary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Book a Pickup <ArrowRight size={15} />
                </motion.span>
              </Link>
              <Link to="/services">
                <motion.span
                  className="btn-outline"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Our Services
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          variants={stagger(0.6)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/5"
        >
          {STATS.map(s => (
            <motion.div key={s.label} variants={fadeUp}>
              <div className="stat-number">{s.value}</div>
              <div className="text-sm text-[#64748B] mt-1 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Services section ─── */
function ServicesSection() {
  return (
    <section className="section-pad bg-[#0D1B2A] border-t border-white/5">
      <div className="container-vrl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-tag">What We Deliver</div>
          <h2 className="heading-lg text-white max-w-xl mb-3">
            End-to-End Logistics Services
          </h2>
          <p className="text-[#64748B] max-w-lg mb-12">
            From single parcels to bulk freight — every shipment handled with the same precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link to={s.href} className="block card-vrl h-full group">
                <div className="w-10 h-10 bg-[#C8102E]/10 border border-[#C8102E]/20 rounded flex items-center justify-center mb-5">
                  <s.icon size={18} className="text-[#C8102E]" />
                </div>
                <h3 className="heading-md text-white mb-2">{s.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-4">{s.desc}</p>
                <span className="flex items-center gap-1 text-xs text-[#C8102E] font-semibold tracking-wide group-hover:gap-2 transition-all">
                  Learn more <ChevronRight size={12} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Why VRL section ─── */
function WhyVRLSection() {
  return (
    <section className="section-pad bg-[#091420]">
      <div className="container-vrl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="section-tag">Why Choose VRL</div>
            <h2 className="heading-lg text-white mb-5">
              Built for operational<br />reliability at scale
            </h2>
            <p className="text-[#64748B] mb-8 leading-relaxed">
              With over four decades of operations, VRL has built infrastructure that competes
              with any global logistics player — domestically. Every route is optimized,
              every vehicle GPS-tracked, every consignment insured.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 bg-[#C8102E]/10 border border-[#C8102E]/15 rounded flex-shrink-0 flex items-center justify-center mt-0.5">
                    <f.icon size={14} className="text-[#C8102E]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-0.5">{f.title}</div>
                    <div className="text-[#64748B] text-xs leading-relaxed">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-8 inline-block">
              <Link to="/about" className="btn-primary">
                Our Story <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: operational callouts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            {[
              { label: 'On-Time Delivery', value: 98.6, unit: '%' },
              { label: 'Customer Satisfaction', value: 96.2, unit: '%' },
              { label: 'Claims Resolved <48h', value: 99.1, unit: '%' },
              { label: 'Fleet Availability', value: 97.8, unit: '%' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="bg-[#1E2D3D] border border-white/5 rounded-md p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-[#94A3B8]">{item.label}</span>
                  <span className="text-lg font-heading font-700 text-white">{item.value}{item.unit}</span>
                </div>
                <div className="progress-track">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials ─── */
function TestimonialsSection() {
  return (
    <section className="section-pad bg-[#0D1B2A] border-t border-white/5">
      <div className="container-vrl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <div className="section-tag">Client Voices</div>
          <h2 className="heading-lg text-white max-w-md">
            Trusted by Thousands of Businesses
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card-vrl"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} fill="#C8102E" className="text-[#C8102E]" />
                ))}
              </div>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-5 italic">"{t.text}"</p>
              <div>
                <div className="text-white font-semibold text-sm">{t.name}</div>
                <div className="text-[#64748B] text-xs mt-0.5">{t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section className="section-pad bg-[#C8102E]">
      <div className="container-vrl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="heading-lg text-white mb-2">Ready to ship?</h2>
            <p className="text-white/70">Book a pickup or get a quote in under 2 minutes.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-wrap gap-3"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-white text-[#C8102E] font-semibold px-6 py-3 rounded text-sm"
              >
                Book a Pickup <ArrowRight size={15} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded text-sm hover:bg-white/10 transition-colors"
              >
                Contact Sales
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyVRLSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
