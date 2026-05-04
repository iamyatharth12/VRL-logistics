import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Package, Truck, Clock, TrendingUp, AlertCircle,
  CheckCircle2, ArrowRight, RefreshCw, Download, Filter
} from 'lucide-react'

const SHIPMENTS = [
  { id: 'VRL123456789', origin: 'Mumbai',    dest: 'Bengaluru', status: 'in-transit', weight: '42 kg',  date: '02 May',  eta: '05 May' },
  { id: 'VRL987654321', origin: 'Delhi',     dest: 'Ahmedabad', status: 'delivered',  weight: '18 kg',  date: '28 Apr',  eta: '30 Apr' },
  { id: 'VRL112233445', origin: 'Pune',      dest: 'Chennai',   status: 'pending',    weight: '8.5 kg', date: '04 May',  eta: '07 May' },
  { id: 'VRL556677889', origin: 'Hyderabad', dest: 'Kolkata',   status: 'in-transit', weight: '120 kg', date: '03 May',  eta: '06 May' },
  { id: 'VRL998877665', origin: 'Bengaluru', dest: 'Mumbai',    status: 'delivered',  weight: '34 kg',  date: '29 Apr',  eta: '01 May' },
]

const STATUS_MAP = {
  'in-transit': { label: 'In Transit', cls: 'status-in-transit', icon: Truck },
  'delivered':  { label: 'Delivered',  cls: 'status-delivered',  icon: CheckCircle2 },
  'pending':    { label: 'Pending',    cls: 'status-pending',     icon: Clock },
}

const DASH_STATS = [
  { label: 'Total Shipments',    value: 5,    icon: Package,   color: 'text-[#94A3B8]' },
  { label: 'In Transit',         value: 2,    icon: Truck,     color: 'text-[#F59E0B]' },
  { label: 'Delivered',          value: 2,    icon: CheckCircle2, color: 'text-[#16A34A]' },
  { label: 'Pending',            value: 1,    icon: AlertCircle,  color: 'text-[#64748B]' },
]

export default function DashboardPage() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = SHIPMENTS.filter(s => {
    const matchStatus = filter === 'all' || s.status === filter
    const q = search.toLowerCase()
    const matchSearch = !q || s.id.toLowerCase().includes(q) || s.dest.toLowerCase().includes(q) || s.origin.toLowerCase().includes(q)
    return matchStatus && matchSearch
  })

  return (
    <div className="min-h-screen bg-[#0D1B2A] pt-24 pb-20">
      <div className="container-vrl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <div className="section-tag">My Account</div>
            <h1 className="heading-lg text-white">Shipment Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn-ghost text-sm">
              <RefreshCw size={14} /> Refresh
            </button>
            <button className="btn-outline text-sm py-2 px-4">
              <Download size={14} /> Export
            </button>
          </div>
        </motion.div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {DASH_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="bg-[#1E2D3D] border border-white/5 rounded-md p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-[#64748B]">{s.label}</span>
                <s.icon size={15} className={s.color} />
              </div>
              <div className="stat-number text-white">{s.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-[#1E2D3D] border border-white/5 rounded-md p-5 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold text-sm">Shipment Volume (Last 30 days)</h3>
            <span className="label-sm text-[#64748B]">Monthly View</span>
          </div>
          {/* Simple bar chart */}
          <div className="flex items-end gap-2 h-24">
            {[40, 65, 35, 80, 55, 90, 45, 75, 60, 85, 70, 95, 50, 45, 30].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-[#C8102E]/20 rounded-sm relative group"
                style={{ height: `${h}%` }}
                initial={{ scaleY: 0, originY: 1 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.03 + 0.3, duration: 0.4, ease: 'easeOut' }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 bg-[#C8102E] rounded-sm group-hover:bg-[#A00C24] transition-colors"
                  style={{ height: '40%' }}
                />
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-[#4A5568]">
            <span>1 Apr</span><span>15 Apr</span><span>30 Apr</span>
          </div>
        </motion.div>

        {/* Filter & table */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-[#1E2D3D] border border-white/5 rounded-md overflow-hidden"
        >
          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 border-b border-white/5">
            <div className="flex gap-2">
              {['all', 'in-transit', 'delivered', 'pending'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors capitalize ${
                    filter === f
                      ? 'bg-[#C8102E] text-white'
                      : 'text-[#64748B] hover:text-white'
                  }`}
                >
                  {f === 'all' ? 'All' : f.replace('-', ' ')}
                </button>
              ))}
            </div>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search shipments…"
              className="input-vrl py-1.5 text-sm max-w-56"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-vrl">
              <thead>
                <tr>
                  <th>Consignment ID</th>
                  <th>Route</th>
                  <th>Status</th>
                  <th>Weight</th>
                  <th>Booked</th>
                  <th>ETA</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s, i) => {
                  const stat = STATUS_MAP[s.status]
                  return (
                    <motion.tr
                      key={s.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <td>
                        <span className="font-mono text-xs font-medium text-white">{s.id}</span>
                      </td>
                      <td>
                        <div className="flex items-center gap-1.5 text-sm">
                          <span>{s.origin}</span>
                          <ArrowRight size={10} className="text-[#64748B]" />
                          <span>{s.dest}</span>
                        </div>
                      </td>
                      <td>
                        <span className={`status-badge ${stat.cls}`}>
                          <stat.icon size={9} /> {stat.label}
                        </span>
                      </td>
                      <td className="text-[#94A3B8] text-xs">{s.weight}</td>
                      <td className="text-[#94A3B8] text-xs">{s.date}</td>
                      <td className="text-[#94A3B8] text-xs">{s.eta}</td>
                      <td>
                        <a
                          href={`/track?id=${s.id}`}
                          className="text-xs text-[#C8102E] hover:underline font-medium"
                        >
                          Track
                        </a>
                      </td>
                    </motion.tr>
                  )
                })}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="py-12 text-center text-[#64748B] text-sm">
                No shipments match your filter.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
