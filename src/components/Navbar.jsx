import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  Calendar, 
  Menu, 
  X, 
  Activity, 
  MessageCircle, 
  ShieldCheck,
  ChevronRight 
} from 'lucide-react';
import { CLINIC_INFO } from '../data/physioData';

export default function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'work', label: 'Our Work' },
    { id: 'team', label: 'Our Team' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Sticky Navbar (Top bar removed per user request) */}
      <header className={`main-header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo */}
          <div className="logo-wrapper" onClick={() => handleNavClick('home')}>
            <div className="logo-icon-box">
              <Activity size={24} className="logo-pulse-icon" />
            </div>
            <div className="logo-text">
              <span className="brand-name">Revita<span className="brand-accent">Physio</span></span>
              <span className="brand-subtitle">Rehab & Spine Clinic</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`nav-link-btn ${activePage === link.id ? 'active' : ''}`}
              >
                {link.label}
                {activePage === link.id && <span className="nav-active-pill" />}
              </button>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="header-actions">
            <button
              onClick={() => handleNavClick('appointment')}
              className="btn-primary nav-book-btn pulse-glow"
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <aside className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="logo-wrapper">
            <div className="logo-icon-box">
              <Activity size={22} />
            </div>
            <div className="logo-text">
              <span className="brand-name">Revita<span className="brand-accent">Physio</span></span>
            </div>
          </div>
          <button 
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <div className="mobile-drawer-body">
          <nav className="mobile-nav-list">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`mobile-nav-item ${activePage === link.id ? 'active' : ''}`}
              >
                <span>{link.label}</span>
                <ChevronRight size={18} className="mobile-nav-arrow" />
              </button>
            ))}
          </nav>

          <div className="mobile-drawer-cta">
            <button
              onClick={() => handleNavClick('appointment')}
              className="btn-primary w-full"
            >
              <Calendar size={18} />
              <span>Book Instant Appointment</span>
            </button>
            <div className="mobile-drawer-contacts">
              <a href={`tel:${CLINIC_INFO.phone}`} className="mobile-contact-pill">
                <Phone size={15} />
                <span>Call: {CLINIC_INFO.phone}</span>
              </a>
              <p className="mobile-clinic-time">
                <Clock size={14} /> Mon - Sat: 8:00 AM - 8:00 PM
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
