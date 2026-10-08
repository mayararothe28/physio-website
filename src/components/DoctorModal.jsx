import React from 'react';
import { X, Calendar, Award, Clock, Globe, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function DoctorModal({ doctor, onClose, onBookDoctor }) {
  if (!doctor) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="doctor-modal-card glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="doc-modal-grid">
          <div className="doc-modal-img-col">
            <div className="doc-modal-img-wrapper">
              <img src={doctor.image} alt={doctor.name} className="doc-modal-img" />
              <div className="doc-modal-exp-tag">
                <Award size={15} />
                <span>{doctor.experience}</span>
              </div>
            </div>
            
            <div className="doc-modal-quick-stats">
              <div className="doc-stat-pill">
                <Star size={16} className="text-amber-500 fill-amber-500" />
                <span className="font-bold">{doctor.rating}</span>
                <span className="text-xs text-slate-500">({doctor.reviewCount} reviews)</span>
              </div>
              <div className="doc-stat-pill">
                <Clock size={15} className="text-teal-600" />
                <span className="text-xs">{doctor.timings}</span>
              </div>
            </div>
          </div>

          <div className="doc-modal-info-col">
            <span className="doc-specialty-badge">{doctor.specialization}</span>
            <h3 className="doc-modal-name">{doctor.name}</h3>
            <p className="doc-modal-qual">{doctor.qualification}</p>

            <div className="doc-modal-divider" />

            <div className="doc-modal-section">
              <h5 className="doc-section-heading">About Doctor</h5>
              <p className="doc-modal-bio">{doctor.bio}</p>
            </div>

            <div className="doc-modal-section">
              <h5 className="doc-section-heading">Certifications & Accreditations</h5>
              <div className="cert-tags-wrap">
                {doctor.certifications?.map((cert, idx) => (
                  <span key={idx} className="cert-tag">
                    <ShieldCheck size={14} className="text-teal-600" />
                    <span>{cert}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="doc-modal-section">
              <div className="lang-box">
                <Globe size={15} className="text-slate-500" />
                <span>Languages spoken: <strong>{doctor.languages}</strong></span>
              </div>
            </div>

            <div className="doc-modal-actions">
              <button 
                onClick={() => {
                  onClose();
                  onBookDoctor(doctor);
                }}
                className="btn-primary w-full"
              >
                <Calendar size={18} />
                <span>Book Consultation with {doctor.name}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
