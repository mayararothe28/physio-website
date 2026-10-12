import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Phone,
  MessageCircle,
  Home,
  Info,
  Activity,
  UserCheck,
  Award,
  HelpCircle,
  Mail,
  Clock,
} from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [drawerServicesOpen, setDrawerServicesOpen] = useState(false);
  const location = useLocation();

  // Desktop primary navigation links
  const desktopNavLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Treatments", href: "/treatments" },
    { name: "Our Doctors", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  function closeMenus() {
    setMenuOpen(false);
    setServicesOpen(false);
    setDrawerServicesOpen(false);
  }

  // Auto-close menu when route changes
  useEffect(() => {
    closeMenus();
  }, [location.pathname]);

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape key press
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && menuOpen) {
        closeMenus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      {/* Top contact bar */}
      <div className="top-bar">
        <div className="navbar-container top-bar-content">
          <span>Mon–Sat: 9:00 AM – 8:00 PM</span>
          <a href="tel:+919145875248">
            <Phone size={14} />
            +91 91458 75248
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <header className="main-navbar">
        <div className="navbar-container navbar-content">
          {/* Clinic Logo */}
          <Link to="/" className="clinic-logo" onClick={closeMenus}>
            <span className="logo-icon">+</span>
            <span className="logo-text">
              Revita<span>Ortho</span>
              <small>ORTHOPEDIC & PHYSIOTHERAPY</small>
            </span>
          </Link>

          {/* Desktop Navigation links (Hidden on mobile/tablet view) */}
          <nav className="desktop-navbar-links" aria-label="Desktop Navigation">
            {desktopNavLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={location.pathname === link.href ? "active-link" : ""}
                onClick={closeMenus}
              >
                {link.name}
              </Link>
            ))}

            {/* Services dropdown on desktop */}
            <div
              className="services-menu"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="services-toggle"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown size={15} />
              </button>

              {servicesOpen && (
                <div className="services-dropdown">
                  <Link to="/services" onClick={closeMenus}>
                    All Clinical Services
                  </Link>
                  <Link to="/services" onClick={closeMenus}>
                    Spine & Sciatica Care
                  </Link>
                  <Link to="/our-work" onClick={closeMenus}>
                    Sports Injuries & ACL Rehab
                  </Link>
                  <Link to="/treatments" onClick={closeMenus}>
                    Joint & Knee Preservation
                  </Link>
                </div>
              )}
            </div>

            {desktopNavLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={location.pathname === link.href ? "active-link" : ""}
                onClick={closeMenus}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Book Appointment button */}
          <Link
            to="/appointment"
            className="appointment-button"
            onClick={closeMenus}
          >
            <Calendar size={17} />
            <span>Book Appointment</span>
          </Link>

          {/* Mobile Right-Side Controls: Full "Book Appointment" CTA + Clean 3 Lines Icon */}
          <div className="mobile-controls-row">
            <Link
              to="/appointment"
              className="mobile-header-book-btn"
              onClick={closeMenus}
            >
              <Calendar size={14} />
              <span>Book Appointment</span>
            </Link>

            {/* Clean 3 Lines Icon on the Right Side (No box/border) */}
            <button
              type="button"
              className="mobile-hamburger-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={menuOpen}
            >
              <Menu size={27} strokeWidth={2.4} />
            </button>
          </div>
        </div>

        {/* ─── OFF-CANVAS RIGHT-SIDE SLIDE DRAWER (Opens on touching 3 lines) ─── */}
        <div
          className={`mobile-drawer-overlay ${menuOpen ? "open" : ""}`}
          onClick={closeMenus}
          aria-hidden={!menuOpen}
        >
          <aside
            className={`mobile-drawer ${menuOpen ? "open" : ""}`}
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile Navigation Drawer"
          >
            {/* Drawer Header with Logo & Close (X) */}
            <div className="mobile-drawer-header">
              <Link to="/" className="drawer-logo" onClick={closeMenus}>
                <span className="drawer-logo-icon">+</span>
                <span className="drawer-logo-text">
                  Revita<span>Ortho</span>
                  <small>CLINICAL DIRECTORY</small>
                </span>
              </Link>
              <button
                type="button"
                className="drawer-close-btn"
                onClick={closeMenus}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Drawer Scrollable Links Body */}
            <div className="mobile-drawer-body">
              <nav className="mobile-drawer-nav">
                <Link
                  to="/"
                  className={`drawer-nav-item ${location.pathname === "/" ? "active" : ""}`}
                  onClick={closeMenus}
                >
                  <Home size={18} className="drawer-item-icon" />
                  <span>Home</span>
                </Link>

                <Link
                  to="/about"
                  className={`drawer-nav-item ${location.pathname === "/about" ? "active" : ""}`}
                  onClick={closeMenus}
                >
                  <Info size={18} className="drawer-item-icon" />
                  <span>About Us</span>
                </Link>

                {/* Services Collapsible Group */}
                <div className="drawer-dropdown-group">
                  <button
                    type="button"
                    className="drawer-dropdown-trigger"
                    onClick={() => setDrawerServicesOpen(!drawerServicesOpen)}
                    aria-expanded={drawerServicesOpen}
                  >
                    <div className="drawer-trigger-left">
                      <Activity size={18} className="drawer-item-icon" />
                      <span>Services</span>
                    </div>
                    <ChevronDown
                      size={17}
                      className={`drawer-chevron ${drawerServicesOpen ? "rotate" : ""}`}
                    />
                  </button>

                  {drawerServicesOpen && (
                    <div className="drawer-sublinks">
                      <Link to="/services" onClick={closeMenus}>
                        All Clinical Services
                      </Link>
                      <Link to="/services" onClick={closeMenus}>
                        Spine & Sciatica Care
                      </Link>
                      <Link to="/our-work" onClick={closeMenus}>
                        Sports Injuries & ACL Rehab
                      </Link>
                      <Link to="/treatments" onClick={closeMenus}>
                        Joint & Knee Preservation
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/treatments"
                  className={`drawer-nav-item ${location.pathname === "/treatments" ? "active" : ""}`}
                  onClick={closeMenus}
                >
                  <Award size={18} className="drawer-item-icon" />
                  <span>Treatments & Protocols</span>
                </Link>

                <Link
                  to="/team"
                  className={`drawer-nav-item ${location.pathname === "/team" ? "active" : ""}`}
                  onClick={closeMenus}
                >
                  <UserCheck size={18} className="drawer-item-icon" />
                  <span>Our Doctors (MPT)</span>
                </Link>

                <Link
                  to="/our-work"
                  className={`drawer-nav-item ${location.pathname === "/our-work" || location.pathname === "/work" ? "active" : ""}`}
                  onClick={closeMenus}
                >
                  <Activity size={18} className="drawer-item-icon" />
                  <span>Our Work & Results</span>
                </Link>

                <Link
                  to="/testimonials"
                  className={`drawer-nav-item ${location.pathname === "/testimonials" ? "active" : ""}`}
                  onClick={closeMenus}
                >
                  <Award size={18} className="drawer-item-icon" />
                  <span>Patient Testimonials</span>
                </Link>

                <Link
                  to="/faq"
                  className={`drawer-nav-item ${location.pathname === "/faq" ? "active" : ""}`}
                  onClick={closeMenus}
                >
                  <HelpCircle size={18} className="drawer-item-icon" />
                  <span>FAQs</span>
                </Link>

                <Link
                  to="/contact"
                  className={`drawer-nav-item ${location.pathname === "/contact" ? "active" : ""}`}
                  onClick={closeMenus}
                >
                  <Mail size={18} className="drawer-item-icon" />
                  <span>Contact Us</span>
                </Link>
              </nav>

              {/* Drawer Bottom Actions & Helpline */}
              <div className="drawer-actions-box">
                <Link
                  to="/appointment"
                  className="drawer-book-btn"
                  onClick={closeMenus}
                >
                  <Calendar size={17} />
                  <span>Book Appointment Online</span>
                </Link>

                <a
                  href="tel:+919145875248"
                  className="drawer-call-btn"
                  onClick={closeMenus}
                >
                  <Phone size={16} />
                  <span>Call Helpline: +91 91458 75248</span>
                </a>

                <a
                  href="https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20would%20like%20to%20consult%20regarding%20my%20pain%20issue."
                  target="_blank"
                  rel="noreferrer"
                  className="drawer-wa-btn"
                  onClick={closeMenus}
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </a>

                <div className="drawer-timing-pill">
                  <Clock size={13} />
                  <span>Mon–Sat: 9:00 AM – 8:00 PM (Baner, Pune)</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </header>
    </>
  );
}
