import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  ShieldCheck,
  Calendar,
  MessageCircle,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="wor-footer">
      {/* ─── Top Callout Banner (World of Rehab style) ─── */}
      <div className="wor-footer-callout">
        <div className="wor-footer-container">
          <div className="wor-callout-inner">
            <div className="wor-callout-text">
              <h3>Unlock your body's full potential! Don't let pain define you.</h3>
              <p>Step into a future of freedom, flexibility, and function. Book your physio session today.</p>
            </div>
            <div className="wor-callout-actions">
              <Link to="/appointment" className="wor-btn-footer-book">
                <Calendar size={17} />
                <span>Book Appointment</span>
              </Link>
              <a href="tel:+919145875248" className="wor-btn-footer-call">
                <Phone size={17} />
                <span>Call Helpline: +91 91458 75248</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Main Footer Content Columns ─── */}
      <div className="wor-footer-main">
        <div className="wor-footer-container">
          <div className="wor-footer-grid">
            {/* Col 1: Clinic Profile */}
            <div className="wor-footer-col">
              <Link to="/" className="wor-footer-brand">
                <span className="wor-footer-cross">+</span>
                <span className="wor-footer-brand-name">
                  Revita<span>Ortho</span>
                </span>
              </Link>
              <p className="wor-footer-bio">
                Premier non-surgical orthopedic and sports rehabilitation clinic in Baner, Pune. Specialized in computerized spinal decompression, joint preservation, and 1-on-1 certified MPT care.
              </p>
              <div className="wor-footer-accreditation">
                <ShieldCheck size={16} className="text-emerald" />
                <span>ISO 9001:2015 & MIAP Registered Facility</span>
              </div>
            </div>

            {/* Col 2: Quick Links (Clean 5 items) */}
            <div className="wor-footer-col">
              <h4 className="wor-footer-heading">Quick Links</h4>
              <ul className="wor-footer-link-list">
                <li>
                  <Link to="/">
                    <ChevronRight size={14} />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <ChevronRight size={14} />
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <ChevronRight size={14} />
                    <span>Our Services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <ChevronRight size={14} />
                    <span>Contact Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/appointment">
                    <ChevronRight size={14} />
                    <span>Book Appointment</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Key Treatments */}
            <div className="wor-footer-col">
              <h4 className="wor-footer-heading">Specialized Services</h4>
              <ul className="wor-footer-link-list">
                <li>
                  <Link to="/services/back-pain">
                    <ChevronRight size={14} />
                    <span>Back Pain & Sciatica Care</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/neck-pain">
                    <ChevronRight size={14} />
                    <span>Neck Pain & Posture Relief</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/knee-pain">
                    <ChevronRight size={14} />
                    <span>Knee Joint Preservation</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/sports-injury">
                    <ChevronRight size={14} />
                    <span>Sports Injury & ACL Rehab</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Timings */}
            <div className="wor-footer-col">
              <h4 className="wor-footer-heading">Contact & Timings</h4>
              <ul className="wor-footer-contact-list">
                <li>
                  <MapPin size={17} className="wor-f-icon" />
                  <span>Suite 302, Health & Wellness Plaza, Medical Center Road, Baner, Pune</span>
                </li>
                <li>
                  <Clock size={17} className="wor-f-icon" />
                  <span>Mon – Sat: 8:00 AM – 8:00 PM<br /><small>Sunday: By Prior Appointment</small></span>
                </li>
                <li>
                  <Phone size={17} className="wor-f-icon" />
                  <a href="tel:+919145875248">+91 91458 75248</a>
                </li>
                <li>
                  <Mail size={17} className="wor-f-icon" />
                  <a href="mailto:care@revitaortho.com">care@revitaortho.com</a>
                </li>
              </ul>

              <div className="wor-footer-social-row">
                <a
                  href="https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20have%20an%20inquiry."
                  target="_blank"
                  rel="noreferrer"
                  className="wor-btn-f-wa"
                >
                  <MessageCircle size={15} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="wor-btn-f-maps"
                >
                  <MapPin size={15} />
                  <span>Get Directions</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Bottom Bar: Disclaimer & Copyright ─── */}
      <div className="wor-footer-bottom">
        <div className="wor-footer-container">
          <div className="wor-bottom-inner">
            <p className="wor-medical-disclaimer">
              <strong>Medical Disclaimer:</strong> The information provided on this website is for informational and appointment inquiry purposes only. It is not intended to substitute for professional medical diagnosis or personalized physical therapy care.
            </p>
            <div className="wor-copyright-row">
              <span>© {new Date().getFullYear()} RevitaOrtho Physical Therapy & Spine Center. All rights reserved.</span>
              <span>Baner, Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
