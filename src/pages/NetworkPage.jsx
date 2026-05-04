import { useState } from 'react'
import { motion } from 'motion/react'
import { MapPin, Search, Phone, Clock, ArrowRight } from 'lucide-react'

const REGIONS = ['All India', 'North', 'South', 'East', 'West', 'Central']

const BRANCHES = [
  { name: 'Mumbai - Andheri',      state: 'Maharashtra', region: 'West',  phone: '022-XXXXXXXX', address: 'Plot 14, MIDC Andheri East', hours: 'Mon–Sat 8AM–8PM', pin: '400093' },
  { name: 'Mumbai - Navi Mumbai',  state: 'Maharashtra', region: 'West',  phone: '022-XXXXXXXX', address: 'Sector 19, Vashi',             hours: 'Mon–Sat 8AM–8PM', pin: '400705' },
  { name: 'Delhi - Karol Bagh',    state: 'Delhi',       region: 'North', phone: '011-XXXXXXXX', address: '45, Pusa Road, Karol Bagh',   hours: 'Mon–Sat 8AM–8PM', pin: '110005' },
  { name: 'Delhi - Dwarka',        state: 'Delhi',       region: 'North', phone: '011-XXXXXXXX', address: 'Sector 7, Dwarka',            hours: 'Mon–Sat 8AM–8PM', pin: '110075' },
  { name: 'Bengaluru - Whitefield',state: 'Karnataka',   region: 'South', phone: '080-XXXXXXXX', address: 'Whitefield Main Rd',         hours: 'Mon–Sat 8AM–8PM', pin: '560066' },
  { name: 'Bengaluru - Hebbal',    state: 'Karnataka',   region: 'South', phone: '080-XXXXXXXX', address: 'Outer Ring Road, Hebbal',    hours: 'Mon–Sat 7AM–9PM', pin: '560024' },
  { name: 'Chennai - Ambattur',    state: 'Tamil Nadu',  region: 'South', phone: '044-XXXXXXXX', address: 'Industrial Estate, Ambattur',hours: 'Mon–Sat 8AM–8PM', pin: '600053' },
  { name: 'Hyderabad - Secundrabad',state:'Telangana',   region: 'South', phone: '040-XXXXXXXX', address: 'SD Rd, Secundrabad',         hours: 'Mon–Sat 8AM–8PM', pin: '500003' },
  { name: 'Kolkata - Park Street', state: 'West Bengal', region: 'East',  phone: '033-XXXXXXXX', address: '22 Park Street',             hours: 'Mon–Sat 8AM–7PM', pin: '700016' },
  { name: 'Ahmedabad - Satellite', state: 'Gujarat',     region: 'West',  phone: '079-XXXXXXXX', address: 'Jodhpur Char Rasta, Satellite', hours: 'Mon–Sat 8AM–8PM', pin: '380015' },
  { name: 'Pune - Hadapsar',       state: 'Maharashtra', region: 'West',  phone: '020-XXXXXXXX', address: 'Magarpatta City Rd',         hours: 'Mon–Sat 8AM–8PM', pin: '411028' },
  { name: 'Lucknow - Hazratganj',  state: 'Uttar Pradesh', region:'North',phone: '0522-XXXXXXX', address: 'Hazratganj Main Road',       hours: 'Mon–Sat 9AM–7PM', pin: '226001' },
]

const NET_STATS = [
  { value: '900+',   label: 'Branch Offices' },
  { value: '28+',    label: 'States' },
  { value: '5,000+', label: 'PIN Codes' },
  { value: '250+',   label: 'Hub Cities' },
]

export default function NetworkPage() {
  const [region, setRegion] = useState('All India')
  const [search, setSearch] = useState('')

  const filtered = BRANCHES.filter(b => {
    const matchRegion = region === 'All India' || b.region === region
    const q = search.toLowerCase()
    const matchSearch = !q || b.name.toLowerCase().includes(q) || b.state.toLowerCase().includes(q) || b.pin.includes(q)
    return matchRegion && matchSearch
  })

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
          <div className="section-tag">Branch Locator</div>
          <h1 className="heading-xl text-white mb-4">Our Network Across India</h1>
          <p className="text-[#64748B] max-w-xl body-base">
            900+ branch offices spanning 28 states. Find your nearest VRL point for drop-off, pickup, or support.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
        >
          {NET_STATS.map(s => (
            <div key={s.label} className="bg-[#1E2D3D] border border-white/5 rounded-md p-5 text-center">
              <div className="stat-number text-[#C8102E]">{s.value}</div>
              <div className="text-xs text-[#64748B] mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* India outline map area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-[#091420] border border-white/5 rounded-md p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="label-sm text-[#64748B]">Coverage Heatmap</span>
            <span className="text-xs text-[#64748B]">Showing major hubs</span>
          </div>

          {/* Simple SVG India map abstraction with hub dots */}
          <div className="relative mx-auto" style={{ maxWidth: 600 }}>
            <svg viewBox="0 0 600 500" className="w-full" fill="none">
              {/* Simplified India silhouette path */}
              <path
                d="M 240 40 L 280 35 L 340 50 L 380 80 L 420 100 L 440 140 L 450 180 L 430 220
                   L 440 260 L 420 300 L 400 330 L 380 370 L 350 400 L 320 430 L 300 460
                   L 280 440 L 260 410 L 240 380 L 220 350 L 200 310 L 180 270 L 160 240
                   L 140 200 L 130 160 L 140 120 L 160 90 L 190 65 Z"
                fill="rgba(30,45,61,0.6)"
                stroke="rgba(100,116,139,0.2)"
                strokeWidth="1.5"
              />
              {/* Hub dots */}
              {[
                { cx: 195, cy: 220, name: 'Mumbai',    size: 8  },
                { cx: 290, cy: 130, name: 'Delhi',     size: 8  },
                { cx: 290, cy: 310, name: 'Bengaluru', size: 7  },
                { cx: 330, cy: 280, name: 'Chennai',   size: 7  },
                { cx: 360, cy: 200, name: 'Hyderabad', size: 6  },
                { cx: 390, cy: 130, name: 'Kolkata',   size: 7  },
                { cx: 220, cy: 185, name: 'Pune',      size: 5  },
                { cx: 185, cy: 150, name: 'Ahmedabad', size: 6  },
                { cx: 260, cy: 170, name: 'Nagpur',    size: 5  },
                { cx: 280, cy: 190, name: 'Hubli',     size: 5  },
              ].map((hub) => (
                <g key={hub.name}>
                  <circle cx={hub.cx} cy={hub.cy} r={hub.size + 4} fill="#C8102E" opacity="0.08" />
                  <circle cx={hub.cx} cy={hub.cy} r={hub.size} fill="#C8102E" opacity="0.85" />
                  <text x={hub.cx + hub.size + 4} y={hub.cy + 4} fontSize="9" fill="#94A3B8">{hub.name}</text>
                </g>
              ))}
              {/* Route lines */}
              {[
                ['195,220', '290,130'],
                ['290,130', '390,130'],
                ['195,220', '185,150'],
                ['290,310', '330,280'],
                ['330,280', '360,200'],
                ['360,200', '390,130'],
              ].map((pair, i) => (
                <motion.line
                  key={i}
                  x1={pair[0].split(',')[0]} y1={pair[0].split(',')[1]}
                  x2={pair[1].split(',')[0]} y2={pair[1].split(',')[1]}
                  stroke="rgba(200,16,46,0.25)"
                  strokeWidth="1"
                  strokeDasharray="4 3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: i * 0.12 + 0.4, duration: 0.7 }}
                />
              ))}
            </svg>
          </div>
        </motion.div>

        {/* Search & filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search city, state or PIN code..."
              className="input-vrl pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {REGIONS.map(r => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  region === r
                    ? 'bg-[#C8102E] text-white'
                    : 'bg-[#1E2D3D] text-[#94A3B8] hover:text-white border border-white/5'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Branch list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="bg-[#1E2D3D] border border-white/5 rounded-md p-5 hover:border-[#C8102E]/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-white font-semibold text-sm">{b.name}</h3>
                  <div className="text-xs text-[#64748B] mt-0.5">{b.state} · PIN {b.pin}</div>
                </div>
                <span className={`label-sm px-2 py-0.5 rounded text-xs ${
                  b.region === 'North' ? 'bg-blue-500/10 text-blue-400' :
                  b.region === 'South' ? 'bg-green-500/10 text-green-400' :
                  b.region === 'East'  ? 'bg-purple-500/10 text-purple-400' :
                  'bg-orange-500/10 text-orange-400'
                }`}>{b.region}</span>
              </div>
              <div className="space-y-1.5 text-xs text-[#64748B]">
                <div className="flex items-start gap-1.5">
                  <MapPin size={11} className="mt-0.5 flex-shrink-0 text-[#C8102E]" />
                  <span>{b.address}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone size={11} className="flex-shrink-0 text-[#C8102E]" />
                  <span>{b.phone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={11} className="flex-shrink-0 text-[#C8102E]" />
                  <span>{b.hours}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#64748B]">
            <MapPin size={36} className="mx-auto mb-3 opacity-30" />
            <p>No branches found. Try a different search or region.</p>
          </div>
        )}
      </div>
    </div>
  )
}
