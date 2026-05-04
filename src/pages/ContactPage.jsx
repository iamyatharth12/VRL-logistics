import { useState } from 'react'
import { motion } from 'motion/react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'

const OFFICES = [
  {
    city: 'Headquarters — Gadag',
    address: 'VRL Complex, Hospet Road, Gadag, Karnataka 582101',
    phone: '+91-8372-220000',
    hours: 'Mon–Sat, 9AM–6PM',
  },
  {
    city: 'Mumbai Region',
    address: 'MIDC Industrial Area, Andheri East, Mumbai 400093',
    phone: '+91-22-6700-0000',
    hours: 'Mon–Sat, 8AM–8PM',
  },
  {
    city: 'Delhi NCR',
    address: '45, Pusa Road, Karol Bagh, New Delhi 110005',
    phone: '+91-11-4800-0000',
    hours: 'Mon–Sat, 8AM–8PM',
  },
]

const TOPICS = [
  'General Enquiry',
  'Shipment Query',
  'Pickup Booking Help',
  'Business / B2B',
  'Complaint / Feedback',
  'Media / Press',
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: '', message: '' })
  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-[#0D1B2A] pt-24 pb-20">
      <div className="container-vrl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="section-tag">Get in Touch</div>
          <h1 className="heading-xl text-white mb-3">Contact Us</h1>
          <p className="text-[#64748B] max-w-lg body-base">
            For shipment queries, business enquiries, or support — our team is here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Contact info */}
          <div className="space-y-5">
            {/* Toll free */}
            <div className="bg-[#C8102E] rounded-md p-5">
              <div className="label-sm text-white/70 mb-2">Toll Free Helpline</div>
              <a href="tel:1800-103-7272" className="font-heading font-700 text-2xl text-white block mb-1">
                1800-103-7272
              </a>
              <div className="text-sm text-white/70">Mon–Sat, 8AM to 8PM IST</div>
            </div>

            {/* Email */}
            <div className="bg-[#1E2D3D] border border-white/5 rounded-md p-5">
              <div className="flex items-center gap-2 mb-3">
                <Mail size={15} className="text-[#C8102E]" />
                <span className="text-white font-semibold text-sm">Email Support</span>
              </div>
              <a href="mailto:support@vrllogistics.com" className="text-sm text-[#94A3B8] hover:text-white transition-colors block">
                support@vrllogistics.com
              </a>
              <a href="mailto:business@vrllogistics.com" className="text-sm text-[#94A3B8] hover:text-white transition-colors block mt-1">
                business@vrllogistics.com
              </a>
            </div>

            {/* Offices */}
            <div className="space-y-4">
              {OFFICES.map(o => (
                <div key={o.city} className="bg-[#1E2D3D] border border-white/5 rounded-md p-5">
                  <div className="text-white font-semibold text-sm mb-3">{o.city}</div>
                  <div className="space-y-2 text-xs text-[#64748B]">
                    <div className="flex items-start gap-2">
                      <MapPin size={11} className="mt-0.5 flex-shrink-0 text-[#C8102E]" />
                      <span>{o.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={11} className="flex-shrink-0 text-[#C8102E]" />
                      <span>{o.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={11} className="flex-shrink-0 text-[#C8102E]" />
                      <span>{o.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-[#1E2D3D] border border-white/5 rounded-md p-10 text-center"
              >
                <div className="w-14 h-14 bg-[#16A34A]/15 border border-[#16A34A]/30 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={26} className="text-[#16A34A]" />
                </div>
                <h3 className="heading-md text-white mb-2">Message Sent</h3>
                <p className="text-[#64748B] text-sm mb-6">
                  We'll get back to you within 24 business hours. For urgent queries, please call our helpline.
                </p>
                <button onClick={() => setSent(false)} className="btn-outline">
                  Send Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                onSubmit={handleSubmit}
                className="bg-[#1E2D3D] border border-white/5 rounded-md p-6 space-y-5"
              >
                <h2 className="heading-md text-white mb-2">Send a Message</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label-sm text-[#64748B] block mb-2">Full Name *</label>
                    <input required value={form.name} onChange={e => upd('name', e.target.value)} placeholder="Your name" className="input-vrl" />
                  </div>
                  <div>
                    <label className="label-sm text-[#64748B] block mb-2">Email *</label>
                    <input required type="email" value={form.email} onChange={e => upd('email', e.target.value)} placeholder="you@company.com" className="input-vrl" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label-sm text-[#64748B] block mb-2">Phone</label>
                    <input value={form.phone} onChange={e => upd('phone', e.target.value)} placeholder="+91 98765 43210" className="input-vrl" />
                  </div>
                  <div>
                    <label className="label-sm text-[#64748B] block mb-2">Topic</label>
                    <select value={form.topic} onChange={e => upd('topic', e.target.value)} className="input-vrl bg-[#0D1B2A]">
                      <option value="">Select topic…</option>
                      {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label-sm text-[#64748B] block mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => upd('message', e.target.value)}
                    placeholder="Describe your query or requirement…"
                    className="input-vrl resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Send size={15} /> Send Message
                </motion.button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
