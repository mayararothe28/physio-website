
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Phone,
} from "lucide-react";

import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Treatments", href: "/treatments" },
    { name: "Our Doctors", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  function closeMenus() {
    setMenuOpen(false);
    setServicesOpen(false);
  }

  return (
    <>
      {/* Top contact bar */}
      <div className="top-bar">
        <div className="navbar-container top-bar-content">
          <span>Mon–Sat: 9:00 AM – 8:00 PM</span>

          <a href="tel:+919158347290">
            <Phone size={14} />
            +91 91583 47290
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <header className="main-navbar">
        <div className="navbar-container navbar-content">
          {/* Logo */}
          <Link
            to="/"
            className="clinic-logo"
            onClick={closeMenus}
          >
            <span className="logo-icon">+</span>

            <span className="logo-text">
              Revita<span>Ortho</span>
              <small>ORTHOPEDIC & PHYSIOTHERAPY</small>
            </span>
          </Link>

          {/* Navigation links */}
          <nav
            className={`navbar-links ${
              menuOpen ? "show-menu" : ""
            }`}
          >
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={closeMenus}
              >
                {link.name}
              </Link>
            ))}

            {/* Services dropdown */}
            <div className="services-menu">
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
                    All Services
                  </Link>

                  <Link to="/services" onClick={closeMenus}>
                    Physiotherapy
                  </Link>

                  <Link to="/treatments" onClick={closeMenus}>
                    Orthopedic Care
                  </Link>

                  <Link to="/our-work" onClick={closeMenus}>
                    Rehabilitation
                  </Link>
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={closeMenus}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile-only menu actions */}
            <div className="mobile-nav-actions">
              <Link
                to="/appointment"
                className="mobile-nav-book-btn"
                onClick={closeMenus}
              >
                <Calendar size={16} />
                <span>Book Appointment Online</span>
              </Link>
              <a
                href="tel:+919158347290"
                className="mobile-nav-call-btn"
                onClick={closeMenus}
              >
                <Phone size={15} />
                <span>Call Clinic Desk (+91 91583 47290)</span>
              </a>
            </div>
          </nav>

          {/* Desktop Appointment button */}
          <Link
            to="/appointment"
            className="appointment-button"
            onClick={closeMenus}
          >
            <Calendar size={17} />
            <span>Book Appointment</span>
          </Link>

          {/* Right side mobile controls */}
          <div className="mobile-controls-row">
            <Link
              to="/appointment"
              className="mobile-header-book-btn"
              onClick={closeMenus}
            >
              <Calendar size={15} />
              <span>Book</span>
            </Link>

            <button
              type="button"
              className="mobile-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Backdrop for mobile drawer */}
        {menuOpen && (
          <div
            className="mobile-menu-backdrop"
            onClick={closeMenus}
            aria-hidden="true"
          />
        )}
      </header>
    </>
  );
}
