import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Calendar,
  Phone,
  MessageCircle,
  Mail,
  Clock,
} from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation links including dedicated Clinic Facilities page
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Clinic Facilities", href: "/facilities" },
    { name: "Contact", href: "/contact" },
  ];

  function closeMenu() {
    setMobileMenuOpen(false);
  }

  // Auto-close drawer on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && mobileMenuOpen) {
        closeMenu();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* ─── TOP CONTACT BAR (World of Rehab style) ─── */}
      <div className="wor-topbar">
        <div className="wor-nav-container wor-topbar-inner">
          <div className="wor-topbar-left">
            <span className="wor-topbar-item">
              <Clock size={13} className="wor-topbar-icon" />
              <span>Mon – Sat: 8:00 AM – 8:00 PM</span>
            </span>
            <span className="wor-topbar-divider">|</span>
            <a href="mailto:care@revitaortho.com" className="wor-topbar-item wor-topbar-link">
              <Mail size={13} className="wor-topbar-icon" />
              <span>care@revitaortho.com</span>
            </a>
          </div>
          <div className="wor-topbar-right">
            <a href="tel:+919145875248" className="wor-topbar-phone">
              <Phone size={13} className="wor-topbar-icon" />
              <span>Helpline: +91 91458 75248</span>
            </a>
          </div>
        </div>
      </div>

      {/* ─── MAIN HEADER / NAVBAR ─── */}
      <header className="wor-header">
        <div className="wor-nav-container wor-header-inner">
          {/* Logo on Left */}
          <Link to="/" className="wor-brand-logo" onClick={closeMenu}>
            <span className="wor-logo-cross">+</span>
            <span className="wor-logo-text">
              Revita<span>Ortho</span>
            </span>
          </Link>

          {/* Desktop Navigation Links: Home · About · Services · Contact */}
          <nav className="wor-desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`wor-nav-link ${isActive(link.href) ? "wor-active-link" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Book Appointment CTA on Right */}
          <div className="wor-header-right-action">
            <Link to="/appointment" className="wor-btn-appointment">
              <Calendar size={16} />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Right Controls: Compact Appointment Button + Hamburger Menu */}
          <div className="wor-mobile-controls">
            <Link to="/appointment" className="wor-mobile-book-btn" onClick={closeMenu}>
              <Calendar size={14} />
              <span>Book</span>
            </Link>
            <button
              type="button"
              className="wor-hamburger-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={26} strokeWidth={2.4} />
            </button>
          </div>
        </div>

        {/* ─── OFF-CANVAS MOBILE DRAWER ─── */}
        <div
          className={`wor-drawer-overlay ${mobileMenuOpen ? "is-open" : ""}`}
          onClick={closeMenu}
          aria-hidden={!mobileMenuOpen}
        >
          <aside
            className={`wor-mobile-drawer ${mobileMenuOpen ? "is-open" : ""}`}
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile Navigation"
          >
            {/* Drawer Header with Logo & Close button */}
            <div className="wor-drawer-head">
              <Link to="/" className="wor-brand-logo" onClick={closeMenu}>
                <span className="wor-logo-cross">+</span>
                <span className="wor-logo-text">
                  Revita<span>Ortho</span>
                </span>
              </Link>
              <button
                type="button"
                className="wor-drawer-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Exactly the 4 items requested + Prominent Book Appointment */}
            <div className="wor-drawer-body">
              <nav className="wor-drawer-nav">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`wor-drawer-link ${isActive(link.href) ? "is-active" : ""}`}
                    onClick={closeMenu}
                  >
                    <span>{link.name}</span>
                  </Link>
                ))}
              </nav>

              {/* Prominent Book Appointment Button in Mobile Drawer */}
              <div className="wor-drawer-actions">
                <Link
                  to="/appointment"
                  className="wor-drawer-book-btn"
                  onClick={closeMenu}
                >
                  <Calendar size={17} />
                  <span>Book Appointment</span>
                </Link>

                <a
                  href="tel:+919145875248"
                  className="wor-drawer-call-btn"
                  onClick={closeMenu}
                >
                  <Phone size={16} />
                  <span>Call Helpline: +91 91458 75248</span>
                </a>

                <a
                  href="https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20would%20like%20to%20consult%20regarding%20physiotherapy."
                  target="_blank"
                  rel="noreferrer"
                  className="wor-drawer-wa-btn"
                  onClick={closeMenu}
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="wor-drawer-footer">
                <p>Mon – Sat: 8:00 AM – 8:00 PM</p>
                <p>Suite 302, Health & Wellness Plaza, Pune</p>
              </div>
            </div>
          </aside>
        </div>
      </header>
    </>
  );
}
