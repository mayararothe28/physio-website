import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Clock, ShieldCheck, HeartPulse, MessageCircle } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container footer-main-grid">
        {/* Col 1: Clinic Profile */}
        <div className="footer-col-brand">
          <div className="footer-logo-row">
            <span className="footer-logo-cross">+</span>
            <span className="footer-brand-title">
              Revita<span>Ortho</span>
              <small>SPINE & ORTHOPEDIC PHYSIOTHERAPY</small>
            </span>
          </div>
          <p className="footer-bio-text">
            Specialized non-surgical orthopedic rehabilitation, computerized spinal decompression, and sports physical therapy center. Directed by certified MPT specialists.
          </p>

          <div className="footer-badge-pill">
            <ShieldCheck size={16} className="text-emerald" />
            <span>ISO 9001:2015 & MIAP Registered Healthcare Facility</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-col-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/our-work">Our Work</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/appointment">Book Appointment</Link></li>
            <li><Link to="/testimonials">Patient Testimonials</Link></li>
          </ul>
        </div>

        {/* Col 3: Main Services */}
        <div className="footer-col-links">
          <h4>Main Services</h4>
          <ul>
            <li><Link to="/treatments">Back Pain & Sciatica</Link></li>
            <li><Link to="/services">Neck Pain & Posture</Link></li>
            <li><Link to="/our-work">Sports Injury & ACL</Link></li>
            <li><Link to="/treatments">Knee Pain & Preservation</Link></li>
          </ul>
        </div>

        {/* Col 4: Clinic Timings, Contact & Social Links */}
        <div className="footer-col-contact">
          <h4>Clinic Timings & Contact</h4>
          <div className="footer-contact-item">
            <MapPin size={17} className="contact-ico" />
            <span>Suite 302, Health & Wellness Plaza, Medical Center Road, City Center</span>
          </div>

          <div className="footer-contact-item">
            <Clock size={17} className="contact-ico" />
            <span>Mon – Sat: 8:00 AM – 8:00 PM<br /><small>Sunday: By Prior Appointment</small></span>
          </div>

          <div className="footer-contact-item">
            <Phone size={17} className="contact-ico" />
            <a href="tel:+919145875248">+91 91458 75248</a>
          </div>

          <div className="footer-contact-item">
            <Mail size={17} className="contact-ico" />
            <a href="mailto:care@revitaortho.com">care@revitaortho.com</a>
          </div>

          <div className="footer-social-row">
            <a
              href="https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20have%20an%20inquiry."
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp-btn"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social-pill"
            >
              <MapPin size={15} />
              <span>Directions</span>
            </a>
          </div>
        </div>
      </div>

      {/* Medical Disclaimer & Copyright */}
      <div className="footer-bottom-bar">
        <div className="footer-container bottom-inner">
          <p className="disclaimer-text">
            <strong>Medical Disclaimer:</strong> The content published on this website is for informational and appointment request purposes only and does not constitute formal medical diagnosis or replace personalized consultation with a qualified healthcare professional.
          </p>
          <div className="copyright-line">
            <span>© {new Date().getFullYear()} RevitaOrtho Spine & Joint Clinic. All rights reserved.</span>
            <span>Pune, Maharashtra, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
