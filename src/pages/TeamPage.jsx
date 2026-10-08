import React, { useState } from 'react';
import { 
  Star, 
  Award, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import DoctorModal from '../components/DoctorModal';
import { DOCTORS_DATA, CLINIC_INFO } from '../data/physioData';

export default function TeamPage({ setActivePage, onSelectDoctor }) {
  const [modalDoctor, setModalDoctor] = useState(null);

  const handleBookDoctor = (doc) => {
    onSelectDoctor(doc);
    setActivePage('appointment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="team-page-container page-transition">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="section-badge">CLINICAL LEADERSHIP</span>
          <h1 className="page-header-title">Our Specialist Physiotherapists</h1>
          <p className="page-header-subtitle">
            Every member of our medical team holds a Master of Physiotherapy (MPT) degree, 
            internationally recognized fellowships, and over 8 to 14 years of clinical experience.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="team-roster-section">
        <div className="container">
          <div className="team-roster-grid">
            {DOCTORS_DATA.map((doc, idx) => (
              <ScrollReveal key={doc.id} delay={idx * 100} className="team-doc-card-wrap">
                <div className="team-doc-card interactive-card glass-panel">
                  <div className="tdc-image-wrapper">
                    <img src={doc.image} alt={doc.name} className="tdc-image" />
                    <div className="tdc-exp-badge">
                      <Award size={14} />
                      <span>{doc.experience}</span>
                    </div>
                  </div>

                  <div className="tdc-body">
                    <div className="tdc-rating-pill">
                      <Star size={14} className="text-amber-500 fill-amber-500" />
                      <span className="font-bold text-sm">{doc.rating}</span>
                      <span className="text-xs text-slate-500">({doc.reviewCount}+ verified reviews)</span>
                    </div>

                    <h3 className="tdc-name">{doc.name}</h3>
                    <p className="tdc-qual">{doc.qualification}</p>
                    <span className="tdc-spec-tag">{doc.specialization}</span>

                    <p className="tdc-bio-snip">{doc.bio}</p>

                    <div className="tdc-cert-chips">
                      {doc.certifications.map((cert, cIdx) => (
                        <span key={cIdx} className="tdc-cert-pill">
                          <ShieldCheck size={12} className="text-teal-600" />
                          <span>{cert}</span>
                        </span>
                      ))}
                    </div>

                    <div className="tdc-meta-row">
                      <div className="tdc-meta-item">
                        <Clock size={14} className="text-slate-500" />
                        <span>{doc.timings}</span>
                      </div>
                      <div className="tdc-meta-item">
                        <Globe size={14} className="text-slate-500" />
                        <span>{doc.languages}</span>
                      </div>
                    </div>

                    <div className="tdc-actions">
                      <button 
                        onClick={() => setModalDoctor(doc)}
                        className="btn-secondary flex-1"
                      >
                        View Full Profile
                      </button>
                      <button 
                        onClick={() => handleBookDoctor(doc)}
                        className="btn-primary flex-1"
                      >
                        <Calendar size={15} />
                        <span>Book Visit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="team-credentials-section">
        <div className="container">
          <div className="credentials-card glass-panel text-center">
            <span className="section-badge">ZERO COMPROMISE STANDARDS</span>
            <h3 className="section-title text-2xl">Our Clinical Care Standards</h3>
            <div className="standards-grid">
              <div className="std-item">
                <CheckCircle2 size={24} className="text-teal-600 mb-2 mx-auto" />
                <h4 className="font-bold text-base">Verified IAP Registrations</h4>
                <p className="text-xs text-slate-600">All physiotherapists are registered with the Indian Association of Physiotherapists.</p>
              </div>
              <div className="std-item">
                <CheckCircle2 size={24} className="text-teal-600 mb-2 mx-auto" />
                <h4 className="font-bold text-base">Continued Medical Education</h4>
                <p className="text-xs text-slate-600">Minimum 50 hours of annual training in advanced biomechanics and manual techniques.</p>
              </div>
              <div className="std-item">
                <CheckCircle2 size={24} className="text-teal-600 mb-2 mx-auto" />
                <h4 className="font-bold text-base">Ethical, Non-Surgical Care</h4>
                <p className="text-xs text-slate-600">We prioritize conservative physical rehabilitation over unnecessary surgical recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Modal */}
      {modalDoctor && (
        <DoctorModal 
          doctor={modalDoctor} 
          onClose={() => setModalDoctor(null)} 
          onBookDoctor={handleBookDoctor} 
        />
      )}
    </div>
  );
}
