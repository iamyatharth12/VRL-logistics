import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, useInView } from 'motion/react'
import {
  Search, Package, Truck, CheckCircle2, Clock,
  MapPin, Phone, AlertCircle, ChevronDown, Navigation
} from 'lucide-react'

/* ─── Mock shipment data ─── */
const MOCK_SHIPMENTS = {
  'VRL123456789': {
    id: 'VRL123456789',
    status: 'in-transit',
    origin: 'Mumbai, MH',
    destination: 'Bengaluru, KA',
    weight: '42 kg',
    type: 'General Cargo',
    bookedOn: '02 May 2026',
    estimatedDelivery: '05 May 2026',
    vehicle: 'KA-01-AB-1234',
    driver: 'Raju S.',
    events: [
      { status: 'Picked Up',         location: 'Dharavi Hub, Mumbai',       date: '02 May 2026', time: '09:15 AM', done: true },
      { status: 'Departed Origin Hub',location: 'Andheri Sorting Center',   date: '02 May 2026', time: '02:30 PM', done: true },
      { status: 'In Transit',         location: 'Pune Checkpoint',          date: '03 May 2026', time: '11:00 AM', done: true },
      { status: 'Arrived Hub',        location: 'Hubli Transit Hub',        date: '04 May 2026', time: '06:45 AM', done: false, active: true },
      { status: 'Out for Delivery',   location: 'Bengaluru Sorting Center', date: '05 May 2026', time: 'Pending',  done: false },
      { status: 'Delivered',          location: 'Whitefield, Bengaluru',    date: '05 May 2026', time: 'Pending',  done: false },
    ],
  },
  'VRL987654321': {
    id: 'VRL987654321',
    status: 'delivered',
    origin: 'Delhi, DL',
    destination: 'Ahmedabad, GJ',
    weight: '18 kg',
    type: 'Parcel',
    bookedOn: '28 Apr 2026',
    estimatedDelivery: '30 Apr 2026',
    vehicle: 'GJ-05-CD-5678',
    driver: 'Suresh P.',
    events: [
      { status: 'Picked Up',          location: 'Karol Bagh Hub, Delhi',   date: '28 Apr 2026', time: '10:00 AM', done: true },
      { status: 'Departed Origin',    location: 'Delhi Sorting Center',    date: '28 Apr 2026', time: '04:00 PM', done: true },
      { status: 'In Transit',         location: 'Jaipur Checkpoint',       date: '29 Apr 2026', time: '09:30 AM', done: true },
      { status: 'Arrived Hub',        location: 'Baroda Transit Hub',      date: '29 Apr 2026', time: '07:00 PM', done: true },
      { status: 'Out for Delivery',   location: 'Ahmedabad South Hub',     date: '30 Apr 2026', time: '08:15 AM', done: true },
      { status: 'Delivered',          location: 'Satellite, Ahmedabad',    date: '30 Apr 2026', time: '01:45 PM', done: true },
    ],
  },
}

/* ─── Animated route map (SVG) ─── */
function RouteMap({ status }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const progress = status === 'delivered' ? 100 : status === 'in-transit' ? 55 : 10

  return (
    <div ref={ref} className="bg-[#091420] rounded-md border border-white/5 p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="label-sm text-[#64748B]">Route Overview</span>
        <span className="label-sm text-[#C8102E]">{progress}% Complete</span>
      </div>
      <svg viewBox="0 0 400 100" className="w-full h-24" fill="none">
        {/* Route track */}
        <path
          d="M 30 50 C 100 20, 150 80, 200 50 C 250 20, 300 80, 370 50"
          stroke="rgba(100,116,139,0.2)"
          strokeWidth="2"
          strokeDasharray="6 4"
        />
        {/* Progress line */}
        {inView && (
          <motion.path
            d="M 30 50 C 100 20, 150 80, 200 50 C 250 20, 300 80, 370 50"
            stroke="#C8102E"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress / 100 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          />
        )}
        {/* Origin dot */}
        <circle cx="30" cy="50" r="6" fill="#C8102E" />
        <text x="30" y="72" textAnchor="middle" fontSize="8" fill="#94A3B8">Mumbai</text>
        {/* Destination dot */}
        <circle cx="370" cy="50" r="6" fill={status === 'delivered' ? '#16A34A' : 'rgba(100,116,139,0.4)'} />
        <text x="370" y="72" textAnchor="middle" fontSize="8" fill="#94A3B8">Bengaluru</text>
        {/* Waypoint dots */}
        {[120, 200, 290].map((cx, i) => (
          <circle key={i} cx={cx} cy={i === 1 ? 50 : i === 0 ? 38 : 62} r="3.5"
            fill={cx < (30 + 340 * progress / 100) ? '#C8102E' : 'rgba(100,116,139,0.3)'} />
        ))}
        {/* Moving vehicle dot */}
        {inView && status === 'in-transit' && (
          <motion.circle
            r="5"
            fill="#F59E0B"
            initial={{ cx: 30, cy: 50 }}
            animate={{ cx: 30 + 340 * progress / 100, cy: 50 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <animate attributeName="r" values="5;6.5;5" dur="2s" repeatCount="indefinite" />
          </motion.circle>
        )}
      </svg>
      <div className="progress-track mt-1">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${progress}%` } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        />
      </div>
    </div>
  )
}

/* ─── Timeline component ─── */
function TrackingTimeline({ events }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[11px] top-6 bottom-0 w-px bg-white/5" />

      <div className="space-y-0">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.12, duration: 0.45, ease: 'easeOut' }}
            className="flex gap-4 pb-6 last:pb-0"
          >
            {/* Dot */}
            <div className="flex-shrink-0 relative z-10">
              {event.done ? (
                <div className="w-6 h-6 rounded-full bg-[#C8102E] flex items-center justify-center">
                  <CheckCircle2 size={12} className="text-white" />
                </div>
              ) : event.active ? (
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  className="w-6 h-6 rounded-full bg-[#F59E0B] border-2 border-[#F59E0B]/40"
                />
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-white/10 bg-[#1E2D3D]" />
              )}
            </div>

            {/* Content */}
            <div className={`flex-1 ${event.done || event.active ? '' : 'opacity-35'}`}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <span className={`font-semibold text-sm ${event.active ? 'text-[#F59E0B]' : event.done ? 'text-white' : 'text-[#64748B]'}`}>
                  {event.status}
                </span>
                {event.active && (
                  <span className="status-badge status-in-transit">Live</span>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#64748B] mb-0.5">
                <MapPin size={10} />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
                <Clock size={10} />
                <span>{event.date} · {event.time}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ─── Shipment detail card ─── */
function ShipmentDetail({ data }) {
  const statusMap = {
    'delivered':  { label: 'Delivered',  cls: 'status-delivered' },
    'in-transit': { label: 'In Transit', cls: 'status-in-transit' },
    'pending':    { label: 'Pending',    cls: 'status-pending' },
  }
  const s = statusMap[data.status] || statusMap.pending

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header */}
      <div className="bg-[#1E2D3D] border border-white/5 rounded-md p-5 mb-4">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="label-sm text-[#64748B] mb-1">Consignment No.</div>
            <div className="font-heading font-700 text-xl text-white">{data.id}</div>
          </div>
          <span className={`status-badge ${s.cls} text-sm px-3 py-1.5`}>{s.label}</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/5">
          {[
            { l: 'Origin',    v: data.origin },
            { l: 'Destination', v: data.destination },
            { l: 'Weight',    v: data.weight },
            { l: 'ETA',       v: data.estimatedDelivery },
          ].map(item => (
            <div key={item.l}>
              <div className="text-xs text-[#64748B] mb-0.5">{item.l}</div>
              <div className="text-sm font-medium text-white">{item.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Map */}
      <RouteMap status={data.status} />

      {/* Timeline + extra info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4">
        <div className="lg:col-span-2 bg-[#1E2D3D] border border-white/5 rounded-md p-5">
          <h3 className="font-semibold text-white text-sm mb-5">Shipment Timeline</h3>
          <TrackingTimeline events={data.events} />
        </div>

        <div className="space-y-4">
          <div className="bg-[#1E2D3D] border border-white/5 rounded-md p-5">
            <h3 className="font-semibold text-white text-sm mb-4">Shipment Info</h3>
            <div className="space-y-3 text-sm">
              {[
                { l: 'Type',      v: data.type },
                { l: 'Booked',    v: data.bookedOn },
                { l: 'Vehicle',   v: data.vehicle },
                { l: 'Driver',    v: data.driver },
              ].map(item => (
                <div key={item.l} className="flex items-center justify-between">
                  <span className="text-[#64748B]">{item.l}</span>
                  <span className="text-white font-medium">{item.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1E2D3D] border border-white/5 rounded-md p-5">
            <h3 className="font-semibold text-white text-sm mb-3">Need Help?</h3>
            <p className="text-xs text-[#64748B] mb-4 leading-relaxed">
              For delivery queries, contact our support team.
            </p>
            <a href="tel:1800-103-7272" className="flex items-center gap-2 text-sm text-[#C8102E] font-semibold">
              <Phone size={14} />
              1800-103-7272
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Main Page ─── */
export default function TrackingPage() {
  const [searchParams] = useSearchParams()
  const [inputId, setInputId] = useState(searchParams.get('id') || '')
  const [activeId, setActiveId] = useState(searchParams.get('id') || '')
  const [error, setError] = useState('')

  const shipment = MOCK_SHIPMENTS[activeId.toUpperCase()] || null

  const handleSearch = (e) => {
    e.preventDefault()
    const id = inputId.trim().toUpperCase()
    if (!id) { setError('Please enter a consignment number.'); return }
    setError('')
    setActiveId(id)
  }

  // Auto-search if id came from URL
  useEffect(() => {
    const id = searchParams.get('id')
    if (id) setActiveId(id.toUpperCase())
  }, [])

  return (
    <div className="min-h-screen bg-[#0D1B2A] pt-24 pb-20">
      <div className="container-vrl">

        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="section-tag">Real-Time Visibility</div>
          <h1 className="heading-lg text-white mb-2">Track Your Shipment</h1>
          <p className="text-[#64748B] text-sm">
            Enter your LR number or consignment ID to get live status.
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.form
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          onSubmit={handleSearch}
          className="flex gap-2 max-w-2xl mb-3"
        >
          <div className="relative flex-1">
            <Package size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" />
            <input
              type="text"
              value={inputId}
              onChange={e => setInputId(e.target.value)}
              placeholder="e.g. VRL123456789"
              className="input-vrl pl-10"
            />
          </div>
          <motion.button
            type="submit"
            className="btn-primary px-8"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Search size={16} /> Track
          </motion.button>
        </motion.form>

        {/* Demo hint */}
        <p className="text-xs text-[#4A5568] mb-8">
          Try: <button onClick={() => { setInputId('VRL123456789'); setActiveId('VRL123456789') }} className="text-[#C8102E] hover:underline">VRL123456789</button>
          {' '}or{' '}
          <button onClick={() => { setInputId('VRL987654321'); setActiveId('VRL987654321') }} className="text-[#C8102E] hover:underline">VRL987654321</button>
        </p>

        {/* Error */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded px-4 py-3 mb-6 max-w-2xl"
          >
            <AlertCircle size={15} />
            {error}
          </motion.div>
        )}

        {/* Not found */}
        {activeId && !shipment && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1E2D3D] border border-white/5 rounded-md p-10 text-center max-w-2xl"
          >
            <Navigation size={36} className="text-[#2E3F50] mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Shipment Not Found</h3>
            <p className="text-sm text-[#64748B]">
              We couldn't find shipment <strong className="text-white">{activeId}</strong>.
              Please check the ID or contact support.
            </p>
          </motion.div>
        )}

        {/* Results */}
        {shipment && <ShipmentDetail key={activeId} data={shipment} />}
      </div>
    </div>
  )
}
