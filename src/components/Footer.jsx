import { Link } from 'react-router-dom'
import { Truck, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'

const FOOTER_LINKS = {
  Services: [
    { label: 'Freight Delivery', href: '/services' },
    { label: 'Parcel & Courier', href: '/services' },
    { label: 'Express Cargo', href: '/services' },
    { label: 'Business Logistics', href: '/business' },
  ],
  Company: [
    { label: 'About VRL', href: '/about' },
    { label: 'Our Network', href: '/network' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/about' },
  ],
  Tools: [
    { label: 'Track Shipment', href: '/track' },
    { label: 'Book Pickup', href: '/booking' },
    { label: 'Branch Locator', href: '/network' },
    { label: 'Rate Calculator', href: '/booking' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#091420] border-t border-white/5">
      <div className="container-vrl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-[#C8102E] rounded-sm flex items-center justify-center">
                <Truck size={18} className="text-white" />
              </div>
              <div className="leading-none">
                <span className="font-heading font-700 text-white text-xl tracking-tight">VRL</span>
                <span className="text-[#64748B] text-xs block font-label tracking-widest mt-0.5">LOGISTICS</span>
              </div>
            </Link>
            <p className="text-sm text-[#64748B] leading-relaxed max-w-xs mb-6">
              India's largest fleet network — moving freight, parcels, and time-critical cargo across 28+ states since 1976.
            </p>
            <div className="space-y-2.5 text-sm text-[#64748B]">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#C8102E]" />
                <span>VRL Complex, Hospet Road, Gadag, Karnataka 582101</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="flex-shrink-0 text-[#C8102E]" />
                <span>Toll Free: 1800-103-7272</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="flex-shrink-0 text-[#C8102E]" />
                <span>support@vrllogistics.com</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-sm mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-[#64748B] hover:text-[#C8102E] transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-vrl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#4A5568]">
          <span>© {new Date().getFullYear()} VRL Logistics Ltd. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link to="/about" className="hover:text-[#94A3B8] transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-[#94A3B8] transition-colors">Terms of Service</Link>
            <Link to="/about" className="hover:text-[#94A3B8] transition-colors">Grievance</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
