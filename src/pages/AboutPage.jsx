import { motion } from 'motion/react'
import { Truck, Award, Users, Target, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const MILESTONES = [
  { year: '1976', event: 'Founded in Gadag, Karnataka. First fleet of 10 trucks.' },
  { year: '1990', event: 'Expanded to 100+ vehicles. South India coverage achieved.' },
  { year: '2000', event: 'Pan-India network established across 18 states.' },
  { year: '2010', event: 'Listed on BSE/NSE. 500+ vehicle fleet milestone.' },
  { year: '2018', event: 'Digital tracking launched. 800+ branch network.' },
  { year: '2024', event: '1,000+ vehicles. 28 states. 5,000+ PIN code coverage.' },
]

const LEADERSHIP = [
  { name: 'Dr. Vijay Sankeshwar', role: 'Founder & Chairman', tenure: 'Since 1976' },
  { name: 'Anand Sankeshwar',     role: 'Managing Director',  tenure: 'Since 2002' },
  { name: 'K. N. Umesh',          role: 'CEO – Logistics',    tenure: 'Since 2015' },
]

const VALUES = [
  { icon: Truck,   title: 'Reliability',  desc: 'Commitments kept. Every shipment, every route, every time.' },
  { icon: Award,   title: 'Excellence',   desc: 'Operational standards built over five decades of on-ground experience.' },
  { icon: Users,   title: 'People First', desc: '15,000+ employees treated as the backbone of our operations.' },
  { icon: Target,  title: 'Precision',    desc: 'Data-driven routing, GPS tracking, and proactive exception handling.' },
]

export default function AboutPage() {
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
          <div className="section-tag">Our Story</div>
          <h1 className="heading-xl text-white mb-5">
            48 Years of Moving<br />
            <span className="text-[#C8102E]">India Forward</span>
          </h1>
          <p className="body-base text-[#64748B] max-w-2xl">
            VRL Logistics began as a small fleet operation in Gadag, Karnataka in 1976.
            Today, we are India's largest private logistics company by fleet size — operating
            1,000+ owned vehicles across 28 states, backed by 900+ branch offices and 15,000+ employees.
          </p>
        </motion.div>

        {/* Stats band */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { v: '1,000+', l: 'Owned Vehicles' },
            { v: '900+',   l: 'Branch Offices' },
            { v: '15,000+',l: 'Employees' },
            { v: '28+',    l: 'States' },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="bg-[#1E2D3D] border border-white/5 rounded-md p-5 text-center"
            >
              <div className="stat-number text-white">{s.v}</div>
              <div className="text-xs text-[#64748B] mt-1">{s.l}</div>
            </motion.div>
          ))}
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="section-tag">Mission</div>
            <h2 className="heading-lg text-white mb-5">
              Building India's Most<br />Reliable Freight Network
            </h2>
            <p className="text-[#64748B] leading-relaxed mb-4">
              Our mission is to provide affordable, reliable, and technology-driven logistics
              solutions that connect businesses to customers across every corner of India.
            </p>
            <p className="text-[#64748B] leading-relaxed">
              We believe logistics is not just transportation — it's the circulatory system
              of Indian commerce. Every truck we dispatch, every parcel we deliver, powers
              a business and touches a life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="grid grid-cols-2 gap-4"
          >
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#1E2D3D] border border-white/5 rounded-md p-5"
              >
                <v.icon size={20} className="text-[#C8102E] mb-3" />
                <div className="text-white font-semibold text-sm mb-1">{v.title}</div>
                <div className="text-xs text-[#64748B] leading-relaxed">{v.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="section-tag">Journey</div>
          <h2 className="heading-lg text-white mb-10">Key Milestones</h2>

          <div className="relative border-l-2 border-white/5 pl-8 space-y-8 ml-4">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="relative"
              >
                <div className="absolute -left-[2.75rem] top-1 w-5 h-5 rounded-full bg-[#C8102E] border-4 border-[#0D1B2A]" />
                <div className="label-sm text-[#C8102E] mb-1">{m.year}</div>
                <p className="text-sm text-[#94A3B8]">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="section-tag">Leadership</div>
          <h2 className="heading-lg text-white mb-8">The People Behind VRL</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {LEADERSHIP.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1E2D3D] border border-white/5 rounded-md p-6"
              >
                <div className="w-12 h-12 bg-[#C8102E]/15 border border-[#C8102E]/20 rounded-full flex items-center justify-center mb-4">
                  <Users size={20} className="text-[#C8102E]" />
                </div>
                <div className="text-white font-semibold mb-1">{l.name}</div>
                <div className="text-sm text-[#C8102E] mb-1">{l.role}</div>
                <div className="text-xs text-[#64748B]">{l.tenure}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="bg-[#C8102E] rounded-md p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="heading-md text-white mb-1">Join 12,000+ businesses shipping with VRL</h3>
            <p className="text-white/70 text-sm">Start your logistics partnership today.</p>
          </div>
          <div className="flex gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/booking" className="inline-flex items-center gap-2 bg-white text-[#C8102E] font-semibold px-6 py-3 rounded text-sm">
                Book Pickup <ChevronRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
