import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  Building2, BarChart3, ShieldCheck, FileText, Users, Headphones,
  ArrowRight, ChevronRight, CheckCircle2
} from 'lucide-react'

const SOLUTIONS = [
  {
    icon: Building2,
    title: 'Corporate Contracts',
    desc: 'Volume-based pricing with dedicated account management. SLA-backed delivery for enterprise shippers.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'Real-time shipment analytics, route performance, and cost reporting. Full visibility on your logistics spend.',
  },
  {
    icon: ShieldCheck,
    title: 'Priority Handling',
    desc: 'Your cargo gets priority sorting, express lanes, and dedicated transit vehicles.',
  },
  {
    icon: FileText,
    title: 'GST & Billing',
    desc: 'Consolidated monthly invoicing with GST-compliant bills. Integrated with major ERP systems.',
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    desc: 'Your own account manager and operations point of contact — always reachable.',
  },
  {
    icon: Headphones,
    title: '24/7 B2B Support',
    desc: 'Escalation desk for enterprise clients. Guaranteed response within 2 hours for critical queries.',
  },
]

const INDUSTRIES = [
  'Textiles & Apparel', 'Pharmaceuticals', 'Automotive Parts',
  'FMCG Distribution', 'Electronics', 'Industrial Machinery',
  'E-Commerce Fulfillment', 'Steel & Metals', 'Paper & Packaging',
]

const CLIENTS = [
  { metric: '12,000+', label: 'Business Clients' },
  { metric: '3.2 Cr+', label: 'Shipments/Year' },
  { metric: '99.1%',   label: 'Claims Resolved' },
  { metric: '48hr',    label: 'Onboarding Time' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-[#0D1B2A] pt-24 pb-20">
      <div className="container-vrl">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-16"
        >
          <div className="section-tag">For Enterprise</div>
          <h1 className="heading-xl text-white mb-5">
            Logistics Infrastructure<br />
            Built for <span className="text-[#C8102E]">Business Scale</span>
          </h1>
          <p className="body-base text-[#64748B] mb-8 max-w-2xl">
            VRL's B2B logistics solutions are trusted by 12,000+ businesses across India.
            From FMCG distributors to pharma exporters — we move your supply chain.
          </p>
          <div className="flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="btn-primary">
                Request a Quote <ArrowRight size={15} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="btn-outline">
                Talk to Sales
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Client metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {CLIENTS.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="bg-[#1E2D3D] border border-white/5 rounded-md p-5 text-center"
            >
              <div className="stat-number text-[#C8102E]">{c.metric}</div>
              <div className="text-xs text-[#64748B] mt-1">{c.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Solutions grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <div className="section-tag">Our B2B Solutions</div>
          <h2 className="heading-lg text-white mb-10">Everything Your Business Needs</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {SOLUTIONS.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="card-vrl"
            >
              <div className="w-10 h-10 bg-[#C8102E]/10 border border-[#C8102E]/20 rounded flex items-center justify-center mb-4">
                <s.icon size={18} className="text-[#C8102E]" />
              </div>
              <h3 className="heading-md text-white mb-2">{s.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="section-tag">Sectors We Serve</div>
          <h2 className="heading-lg text-white mb-8">Industry Coverage</h2>
          <div className="flex flex-wrap gap-3">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 bg-[#1E2D3D] border border-white/5 rounded text-sm text-[#94A3B8] hover:border-[#C8102E]/40 hover:text-white transition-colors"
              >
                {ind}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contract benefits */}
        <div className="bg-[#1E2D3D] border border-white/5 rounded-md p-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="section-tag">Contract Shipping</div>
              <h3 className="heading-lg text-white mb-4">Volume Rates & SLAs</h3>
              <p className="text-[#64748B] text-sm leading-relaxed mb-6">
                Businesses shipping above 500 kg/month qualify for negotiated rates, dedicated vehicles,
                and SLA-backed delivery agreements. Rates locked for the contract period.
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link to="/contact" className="btn-primary">
                  Enquire Now <ChevronRight size={15} />
                </Link>
              </motion.div>
            </div>
            <ul className="space-y-3">
              {[
                'Rates up to 30% below spot pricing',
                'Guaranteed pickup within 4 hours',
                'Dedicated fleet allocation',
                'Monthly consolidated billing',
                'Priority claims processing',
                'Assigned account manager',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#94A3B8]">
                  <CheckCircle2 size={14} className="text-[#16A34A] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}
