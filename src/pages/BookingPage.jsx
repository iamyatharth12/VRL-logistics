import { useState } from 'react'
import { motion } from 'motion/react'
import { Package, MapPin, Calendar, Phone, User, Weight, ChevronRight, CheckCircle2 } from 'lucide-react'

const CARGO_TYPES = ['General', 'Fragile', 'Electronics', 'Pharma', 'Perishable', 'Heavy Machinery']
const TIME_SLOTS  = ['8:00 AM – 10:00 AM', '10:00 AM – 12:00 PM', '12:00 PM – 2:00 PM', '2:00 PM – 4:00 PM', '4:00 PM – 6:00 PM']

const STEPS_FORM = ['Pickup Details', 'Cargo Info', 'Schedule', 'Confirm']

export default function BookingPage() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    pickup: '', destination: '',
    weight: '', cargoType: 'General',
    date: '', slot: '',
    notes: '',
  })

  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0D1B2A] pt-24 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-md px-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-16 h-16 bg-[#16A34A]/15 border border-[#16A34A]/30 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 size={30} className="text-[#16A34A]" />
          </motion.div>
          <h2 className="heading-lg text-white mb-3">Pickup Booked!</h2>
          <p className="text-[#64748B] mb-2">
            Booking ID: <strong className="text-white">VRL-BK-{Math.random().toString(36).slice(2,8).toUpperCase()}</strong>
          </p>
          <p className="text-sm text-[#64748B] mb-8">
            Our executive will arrive at your location during the chosen slot. You'll receive a confirmation SMS shortly.
          </p>
          <button
            onClick={() => { setSubmitted(false); setStep(0); setForm({ name:'',phone:'',email:'',pickup:'',destination:'',weight:'',cargoType:'General',date:'',slot:'',notes:'' }) }}
            className="btn-primary"
          >
            Book Another Pickup
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0D1B2A] pt-24 pb-20">
      <div className="container-vrl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="section-tag">Doorstep Service</div>
          <h1 className="heading-xl text-white mb-3">Book a Pickup</h1>
          <p className="text-[#64748B]">Schedule a pickup in under 2 minutes. Our executive comes to you.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form area */}
          <div className="lg:col-span-2">

            {/* Step tabs */}
            <div className="flex gap-0 mb-8 bg-[#1E2D3D] border border-white/5 rounded-md p-1">
              {STEPS_FORM.map((s, i) => (
                <button
                  key={s}
                  onClick={() => i < step && setStep(i)}
                  className={`flex-1 py-2 px-3 rounded text-xs font-semibold transition-all ${
                    step === i
                      ? 'bg-[#C8102E] text-white'
                      : i < step
                        ? 'text-[#C8102E] cursor-pointer'
                        : 'text-[#64748B] cursor-default'
                  }`}
                >
                  {i + 1}. {s}
                </button>
              ))}
            </div>

            <motion.form
              key={step}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onSubmit={step === 3 ? handleSubmit : e => { e.preventDefault(); setStep(s => s + 1) }}
            >
              {/* Step 0: Pickup Details */}
              {step === 0 && (
                <div className="space-y-5">
                  <h2 className="heading-md text-white mb-4">Your Details</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label-sm text-[#64748B] block mb-2">Full Name *</label>
                      <input required value={form.name} onChange={e => upd('name', e.target.value)} placeholder="Rajesh Kumar" className="input-vrl" />
                    </div>
                    <div>
                      <label className="label-sm text-[#64748B] block mb-2">Phone *</label>
                      <input required value={form.phone} onChange={e => upd('phone', e.target.value)} placeholder="+91 98765 43210" className="input-vrl" />
                    </div>
                  </div>
                  <div>
                    <label className="label-sm text-[#64748B] block mb-2">Email</label>
                    <input type="email" value={form.email} onChange={e => upd('email', e.target.value)} placeholder="rajesh@company.com" className="input-vrl" />
                  </div>
                  <div>
                    <label className="label-sm text-[#64748B] block mb-2">Pickup Address *</label>
                    <textarea required rows={3} value={form.pickup} onChange={e => upd('pickup', e.target.value)} placeholder="Full address including area, city & PIN code" className="input-vrl resize-none" />
                  </div>
                  <div>
                    <label className="label-sm text-[#64748B] block mb-2">Destination Address *</label>
                    <textarea required rows={3} value={form.destination} onChange={e => upd('destination', e.target.value)} placeholder="Full delivery address" className="input-vrl resize-none" />
                  </div>
                </div>
              )}

              {/* Step 1: Cargo Info */}
              {step === 1 && (
                <div className="space-y-5">
                  <h2 className="heading-md text-white mb-4">Cargo Details</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label-sm text-[#64748B] block mb-2">Approximate Weight (kg) *</label>
                      <input required type="number" min="0.1" value={form.weight} onChange={e => upd('weight', e.target.value)} placeholder="e.g. 25" className="input-vrl" />
                    </div>
                    <div>
                      <label className="label-sm text-[#64748B] block mb-2">Cargo Type</label>
                      <select value={form.cargoType} onChange={e => upd('cargoType', e.target.value)} className="input-vrl bg-[#1E2D3D]">
                        {CARGO_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="label-sm text-[#64748B] block mb-2">Special Instructions</label>
                    <textarea rows={4} value={form.notes} onChange={e => upd('notes', e.target.value)} placeholder="Any handling instructions, fragile items, etc." className="input-vrl resize-none" />
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {['Standard Packing', 'VRL Packing', 'Self-Packed'].map(p => (
                      <div key={p} className="bg-[#1E2D3D] border border-white/5 rounded p-3 flex items-center gap-2 cursor-pointer hover:border-[#C8102E]/40 transition-colors">
                        <div className="w-4 h-4 rounded-full border-2 border-[#C8102E] flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#C8102E]" />
                        </div>
                        <span className="text-xs text-[#94A3B8]">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Schedule */}
              {step === 2 && (
                <div className="space-y-5">
                  <h2 className="heading-md text-white mb-4">Schedule Pickup</h2>
                  <div>
                    <label className="label-sm text-[#64748B] block mb-2">Preferred Date *</label>
                    <input
                      required
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={form.date}
                      onChange={e => upd('date', e.target.value)}
                      className="input-vrl"
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>
                  <div>
                    <label className="label-sm text-[#64748B] block mb-3">Preferred Time Slot *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {TIME_SLOTS.map(slot => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => upd('slot', slot)}
                          className={`py-3 px-4 rounded border text-sm text-left transition-colors ${
                            form.slot === slot
                              ? 'border-[#C8102E] bg-[#C8102E]/10 text-white'
                              : 'border-white/5 bg-[#1E2D3D] text-[#94A3B8] hover:border-[#C8102E]/30'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Confirm */}
              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="heading-md text-white mb-4">Confirm Booking</h2>
                  <div className="bg-[#1E2D3D] border border-white/5 rounded-md p-5 space-y-3 text-sm">
                    {[
                      { label: 'Name',        val: form.name },
                      { label: 'Phone',       val: form.phone },
                      { label: 'Pickup',      val: form.pickup.slice(0, 60) + (form.pickup.length > 60 ? '…' : '') },
                      { label: 'Destination', val: form.destination.slice(0, 60) + (form.destination.length > 60 ? '…' : '') },
                      { label: 'Weight',      val: `${form.weight} kg` },
                      { label: 'Cargo Type',  val: form.cargoType },
                      { label: 'Date',        val: form.date },
                      { label: 'Time Slot',   val: form.slot },
                    ].map(item => (
                      <div key={item.label} className="flex items-start gap-3">
                        <span className="text-[#64748B] w-28 flex-shrink-0">{item.label}</span>
                        <span className="text-white font-medium">{item.val || '—'}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[#64748B]">
                    By confirming, you agree to VRL's terms of service. You'll receive an SMS confirmation.
                  </p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setStep(s => Math.max(0, s - 1))}
                  className={`btn-outline ${step === 0 ? 'opacity-30 pointer-events-none' : ''}`}
                >
                  Back
                </button>
                <motion.button
                  type="submit"
                  className="btn-primary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {step === 3 ? 'Confirm Booking' : 'Continue'} <ChevronRight size={15} />
                </motion.button>
              </div>
            </motion.form>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-[#1E2D3D] border border-white/5 rounded-md p-5">
              <h3 className="text-white font-semibold text-sm mb-4">Why Book with VRL?</h3>
              <ul className="space-y-3">
                {[
                  'Same-day pickup available',
                  'GPS-tracked vehicles',
                  'Cargo insurance included',
                  '24/7 phone support',
                  'Transparent pricing',
                  '98.6% on-time delivery',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs text-[#94A3B8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1E2D3D] border border-white/5 rounded-md p-5">
              <h3 className="text-white font-semibold text-sm mb-3">Need Help?</h3>
              <p className="text-xs text-[#64748B] mb-4">Our team is available Mon–Sat, 8AM to 8PM.</p>
              <a href="tel:1800-103-7272" className="flex items-center gap-2 text-sm text-[#C8102E] font-semibold">
                <Phone size={14} />
                1800-103-7272 (Toll Free)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
