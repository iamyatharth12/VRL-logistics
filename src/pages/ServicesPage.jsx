import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  Package, Truck, Zap, Globe, Shield, Clock, ArrowRight, ChevronRight
} from 'lucide-react'

const SERVICES = [
  {
    icon: Package,
    title: 'Parcel & Courier',
    tag: 'Pan-India · Door to Door',
    desc: 'Reliable parcel delivery for individuals and businesses. Handled end-to-end with full tracking visibility from pickup to final-mile delivery.',
    features: ['Same-city express', 'Fragile handling', 'Proof of delivery', 'SMS/email alerts'],
    transit: '1–5 business days',
  },
  {
    icon: Truck,
    title: 'Freight Transport',
    tag: 'FTL / LCL · All India',
    desc: "Full truckload and part-load cargo movement across India's highway network. Over 1,000 owned vehicles for dependable, asset-backed freight.",
    features: ['GPS-tracked fleet', 'Dedicated vehicle', 'Bulk discounts', 'Real-time ETA'],
    transit: '2–7 business days',
  },
  {
    icon: Zap,
    title: 'Express Cargo',
    tag: 'Priority · 24–48 hrs',
    desc: 'Time-critical shipments with guaranteed delivery windows. Priority lanes, dedicated handling, and proactive status updates.',
    features: ['Guaranteed timelines', 'Priority sorting', 'Direct routes', 'Escalation desk'],
    transit: '24–48 hours',
  },
  {
    icon: Globe,
    title: 'Pan-India Network',
    tag: '28 States · 5,000+ PIN codes',
    desc: 'Reach every corner of India. Our network spans tier-1 metros to remote districts, backed by 900+ branch offices.',
    features: ['Rural connectivity', 'Last-mile agents', 'Hub-spoke model', 'Air connectivity'],
    transit: 'Varies by route',
  },
  {
    icon: Shield,
    title: 'Insured Cargo',
    tag: 'Zero Loss Guarantee',
    desc: 'Every shipment is eligible for cargo insurance. Claims settled within 48 hours for hassle-free protection.',
    features: ['Transit insurance', 'Quick claims', 'Damage surveys', 'Zero paperwork'],
    transit: 'Claims in 48 hrs',
  },
  {
    icon: Clock,
    title: 'Scheduled Pickup',
    tag: 'On-Demand · Flexi Timing',
    desc: 'Book a pickup online or via phone. Choose your preferred timeslot and our team arrives at your doorstep.',
    features: ['Same-day pickup', 'Flexible windows', 'Bulk pickups', 'B2B contracts'],
    transit: 'Same day available',
  },
]

const STEPS = [
  { num: '01', title: 'Book Online', desc: 'Fill out the booking form or call our toll-free number.' },
  { num: '02', title: 'Pickup Scheduled', desc: 'Our executive arrives at your location at the chosen time.' },
  { num: '03', title: 'In Transit', desc: 'Shipment is processed, sorted, and dispatched via optimal route.' },
  { num: '04', title: 'Delivered', desc: 'Consignee receives the shipment with proof of delivery.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0D1B2A] pt-24 pb-20">
      <div className="container-vrl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <div className="section-tag">Our Capabilities</div>
          <h1 className="heading-xl text-white mb-4">Logistics Services Built for India</h1>
          <p className="body-base text-[#64748B]">
            From single parcels to fleet-scale freight — every service is backed by
            owned infrastructure, real-time tracking, and 48+ years of operational expertise.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card-vrl flex flex-col"
            >
              <div className="w-10 h-10 bg-[#C8102E]/10 border border-[#C8102E]/20 rounded flex items-center justify-center mb-4">
                <s.icon size={18} className="text-[#C8102E]" />
              </div>
              <div className="label-sm text-[#C8102E] mb-2">{s.tag}</div>
              <h3 className="heading-md text-white mb-2">{s.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed mb-5">{s.desc}</p>

              <ul className="space-y-1.5 mb-5">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#64748B]">Transit Time</div>
                  <div className="text-sm font-semibold text-white">{s.transit}</div>
                </div>
                <Link to="/booking" className="btn-ghost text-xs">
                  Book now <ChevronRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-tag">Process</div>
          <h2 className="heading-lg text-white mb-10">How It Works</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="relative"
              >
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-white/5 z-0" />
                )}
                <div className="relative z-10 bg-[#1E2D3D] border border-white/5 rounded-md p-5">
                  <div className="font-heading font-700 text-3xl text-[#C8102E]/20 mb-3">{step.num}</div>
                  <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-[#64748B]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="bg-[#1E2D3D] border border-white/5 rounded-md p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="heading-md text-white mb-1">Not sure which service fits?</h3>
            <p className="text-sm text-[#64748B]">Talk to our logistics specialists — free consultation.</p>
          </div>
          <div className="flex gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/booking" className="btn-primary">
                Get Quote <ArrowRight size={15} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
