import './index.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'motion/react'

import Navbar      from './components/Navbar'
import Footer      from './components/Footer'
import HomePage    from './pages/HomePage'
import TrackingPage from './pages/TrackingPage'
import ServicesPage from './pages/ServicesPage'
import NetworkPage  from './pages/NetworkPage'
import BookingPage  from './pages/BookingPage'
import BusinessPage from './pages/BusinessPage'
import AboutPage    from './pages/AboutPage'
import ContactPage  from './pages/ContactPage'
import DashboardPage from './pages/DashboardPage'

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"          element={<HomePage />} />
          <Route path="/track"     element={<TrackingPage />} />
          <Route path="/services"  element={<ServicesPage />} />
          <Route path="/network"   element={<NetworkPage />} />
          <Route path="/booking"   element={<BookingPage />} />
          <Route path="/business"  element={<BusinessPage />} />
          <Route path="/about"     element={<AboutPage />} />
          <Route path="/contact"   element={<ContactPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
