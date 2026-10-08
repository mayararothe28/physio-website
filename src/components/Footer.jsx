import React from 'react';
import { 
  Activity, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  Award, 
  Heart,
  MessageCircle
} from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/physioData';

export default function Footer({ setActivePage }) {
  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      {/* Upper Pre-footer Banner */}
      <div className="footer-emergency-strip">
        <div className="container footer-strip-flex">
          <div className="strip-text">
            <span className="strip-badge">24/7 SUPPORT</span>
            <p className="strip-title">Severe Back Spasm or Post-Surgery Emergency? We're Here For You.</p>
          </div>
          <div className="strip-actions">
            <a href={`tel:${CLINIC_INFO.phone}`} className="strip-call-btn">
              <Phone size={16} />
              <span>Call Helpline: {CLINIC_INFO.phone}</span>
            </a>
            <button 
              onClick={() => navigateTo('appointment')}
              className="strip-book-btn"
            >
              Book Priority Slot
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main-area">
        <div className="container footer-grid">
          {/* Col 1: Clinic Info */}
          <div className="footer-col footer-col-brand">
            <div className="footer-logo" onClick={() => navigateTo('home')}>
              <div className="logo-icon-box">
                <Activity size={24} />
              </div>
              <div className="logo-text">
                <span className="brand-name text-white">Revita<span className="brand-accent">Physio</span></span>
                <span className="brand-subtitle text-slate-400">Rehab & Spine Clinic</span>
              </div>
            </div>
            <p className="footer-about-text">
              Dedicated to restoring natural, pain-free mobility through evidence-based manual therapy, 
              advanced electrotherapy, and patient-first rehabilitation. Zero surgeries whenever possible.
            </p>
            <div className="footer-badges">
              <div className="f-badge">
                <Award size={15} className="f-badge-icon" />
                <span>MIAP Certified</span>
              </div>
              <div className="f-badge">
                <ShieldCheck size={15} className="f-badge-icon" />
                <span>ISO 9001:2015</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Explore Clinic</h4>
            <ul className="footer-links-list">
              <li>
                <button onClick={() => navigateTo('home')} className="f-link">
                  <ChevronRight size={14} /> Home Page
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="f-link">
                  <ChevronRight size={14} /> About Us & Doctors
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="f-link">
                  <ChevronRight size={14} /> All Physiotherapy Services
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('treatments')} className="f-link">
                  <ChevronRight size={14} /> Conditions & Treatments
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('work')} className="f-link">
                  <ChevronRight size={14} /> Our Work & Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('team')} className="f-link">
                  <ChevronRight size={14} /> Specialist Physiotherapists
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('testimonials')} className="f-link">
                  <ChevronRight size={14} /> Patient Success Stories
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('faq')} className="f-link">
                  <ChevronRight size={14} /> Patient FAQs
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('appointment')} className="f-link font-bold text-teal-400">
                  <ChevronRight size={14} /> Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="footer-col">
            <h4 className="footer-title">Treatments & Care</h4>
            <ul className="footer-links-list">
              {SERVICES_DATA.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <button onClick={() => navigateTo('services')} className="f-link">
                    <ChevronRight size={14} /> {srv.title}
                  </button>
                </li>
              ))}
              <li>
                <button onClick={() => navigateTo('treatments')} className="f-link text-cyan-400">
                  <ChevronRight size={14} /> View All Conditions →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Timings & Address */}
          <div className="footer-col">
            <h4 className="footer-title">Visit & Contact</h4>
            <div className="footer-contact-items">
              <div className="fc-item">
                <MapPin size={18} className="fc-icon text-teal-400" />
                <p className="fc-text">{CLINIC_INFO.address}</p>
              </div>
              <div className="fc-item">
                <Clock size={18} className="fc-icon text-teal-400" />
                <div>
                  <p className="fc-text font-medium">{CLINIC_INFO.timings.weekdays}</p>
                  <p className="fc-text text-sm text-slate-400">{CLINIC_INFO.timings.sunday}</p>
                </div>
              </div>
              <div className="fc-item">
                <Phone size={18} className="fc-icon text-teal-400" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="fc-text hover-teal">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="fc-item">
                <Mail size={18} className="fc-icon text-teal-400" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="fc-text hover-teal">
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>

            <div className="footer-map-btn-box">
              <button 
                onClick={() => navigateTo('contact')}
                className="footer-map-btn"
              >
                <span>View Google Map & Directions</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Disclaimer */}
      <div className="footer-bottom-strip">
        <div className="container footer-bottom-flex">
          <p className="footer-copy">
            © {new Date().getFullYear()} {CLINIC_INFO.name}. All Rights Reserved. Designed with care for pain-free living.
          </p>
          <div className="footer-legal-links">
            <span className="medical-disclaimer-note">
              *Disclaimer: Information provided is for educational & appointment purposes and does not substitute medical diagnosis.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
