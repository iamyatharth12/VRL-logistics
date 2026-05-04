import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Truck, Menu, X, Phone, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Track', href: '/track' },
  {
    label: 'Services', href: '/services',
    sub: [
      { label: 'Freight Delivery', href: '/services' },
      { label: 'Parcel & Courier', href: '/services' },
      { label: 'Express Cargo', href: '/services' },
    ]
  },
  { label: 'Network', href: '/network' },
  { label: 'Book Pickup', href: '/booking' },
  { label: 'Business', href: '/business' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0D1B2A]/95 backdrop-blur-sm border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container-vrl">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-[#C8102E] rounded-sm flex items-center justify-center flex-shrink-0">
                <Truck size={18} className="text-white" />
              </div>
              <div className="leading-none">
                <span className="font-heading font-700 text-white text-xl tracking-tight">VRL</span>
                <span className="text-[#94A3B8] text-xs block font-label font-500 tracking-widest mt-0.5">LOGISTICS</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(link => (
                link.sub ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                      location.pathname === link.href
                        ? 'text-white'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}>
                      {link.label}
                      <ChevronDown size={13} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="absolute top-full left-0 mt-1 w-52 bg-[#1E2D3D] border border-white/10 rounded-md shadow-xl overflow-hidden"
                        >
                          {link.sub.map(s => (
                            <Link
                              key={s.label}
                              to={s.href}
                              className="block px-4 py-3 text-sm text-[#94A3B8] hover:text-white hover:bg-[#2E3F50] transition-colors"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors rounded ${
                      location.pathname === link.href
                        ? 'text-white'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:1800-103-7272" className="flex items-center gap-1.5 text-sm text-[#94A3B8] hover:text-white transition-colors">
                <Phone size={13} />
                <span className="font-medium">1800-103-7272</span>
              </a>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link to="/booking" className="btn-primary text-sm py-2 px-5">
                  Book Pickup
                </Link>
              </motion.div>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden text-[#94A3B8] hover:text-white transition-colors p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#0D1B2A] lg:hidden flex flex-col pt-20 px-6 pb-8"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    className={`block py-3 text-lg font-medium border-b border-white/5 transition-colors ${
                      location.pathname === link.href
                        ? 'text-white'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6"
              >
                <Link to="/booking" className="btn-primary w-full justify-center">
                  Book a Pickup
                </Link>
              </motion.div>
            </nav>

            <div className="mt-auto flex items-center gap-2 text-sm text-[#64748B]">
              <Phone size={13} />
              <span>Toll Free: 1800-103-7272</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
