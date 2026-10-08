import React, { useState } from 'react';
import { 
  Activity, 
  Zap, 
  ShieldPlus, 
  Brain, 
  Flame, 
  HeartPulse, 
  Sparkles, 
  Compass, 
  Clock, 
  CheckCircle2, 
  Calendar, 
  ArrowRight,
  Filter,
  Check
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { SERVICES_DATA } from '../data/physioData';

const iconMap = {
  Activity,
  Zap,
  ShieldPlus,
  Brain,
  Flame,
  HeartPulse,
  Sparkles,
  Compass
};

export default function ServicesPage({ setActivePage, onSelectService }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Spine & Orthopedic',
    'Sports & Athletic',
    'Post-Operative',
    'Neuro Rehabilitation',
    "Women's Health",
    'Pediatric Care',
    'Geriatric & Balance'
  ];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const handleBook = (serviceTitle) => {
    onSelectService(serviceTitle);
    setActivePage('appointment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="services-page-container page-transition">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="section-badge">CLINICAL EXCELLENCE</span>
          <h1 className="page-header-title">Comprehensive Physiotherapy Services</h1>
          <p className="page-header-subtitle">
            Every service is rendered by certified Master of Physiotherapy (MPT) practitioners utilizing 
            evidence-based protocols, advanced modalities, and compassionate 1-on-1 care.
          </p>
        </div>
      </section>

      {/* Services Catalog with Filter */}
      <section className="services-catalog-section">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="filter-pills-bar">
            <span className="filter-label"><Filter size={15} /> Filter by Specialty:</span>
            <div className="pills-scroll-row">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Service Cards */}
          <div className="services-detailed-grid">
            {filteredServices.map((srv, idx) => {
              const IconComp = iconMap[srv.icon] || Activity;
              return (
                <ScrollReveal key={srv.id} delay={idx * 80} className="service-detail-card interactive-card glass-panel">
                  <div className="sd-header">
                    <div className="sd-icon-badge">
                      <IconComp size={28} className="text-teal-600" />
                    </div>
                    <div>
                      <span className="sd-cat-tag">{srv.category}</span>
                      <h3 className="sd-title">{srv.title}</h3>
                    </div>
                  </div>

                  <p className="sd-desc">{srv.fullDesc}</p>

                  <div className="sd-features-row">
                    <div className="sd-feat-box">
                      <h5 className="sd-feat-title">Conditions Treated:</h5>
                      <div className="sd-chips-list">
                        {srv.symptoms.map((sym, sIdx) => (
                          <span key={sIdx} className="sd-chip">
                            <CheckCircle2 size={13} className="text-teal-600" />
                            {sym}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="sd-feat-box">
                      <h5 className="sd-feat-title">Clinical Techniques:</h5>
                      <div className="sd-chips-list">
                        {srv.techniques.map((tech, tIdx) => (
                          <span key={tIdx} className="sd-chip-alt">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="sd-meta-strip">
                    <div className="sd-meta-item">
                      <Clock size={15} className="text-slate-500" />
                      <span>Duration: <strong>{srv.duration}</strong></span>
                    </div>
                    <div className="sd-meta-item">
                      <Activity size={15} className="text-emerald-600" />
                      <span>Success: <strong className="text-emerald-600">{srv.recoveryRate}</strong></span>
                    </div>
                    <div className="sd-meta-item">
                      <Calendar size={15} className="text-slate-500" />
                      <span>Protocol: <strong>{srv.recommendedSessions}</strong></span>
                    </div>
                  </div>

                  <div className="sd-card-actions">
                    <button 
                      onClick={() => handleBook(srv.title)}
                      className="btn-primary w-full"
                    >
                      <Calendar size={16} />
                      <span>Book Appointment for {srv.title}</span>
                      <ArrowRight size={15} className="btn-icon-arrow" />
                    </button>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transparent Session Guarantee Strip */}
      <section className="session-guarantee-section">
        <div className="container">
          <div className="guarantee-card glass-panel">
            <h3 className="guarantee-title">What Every Session At RevitaPhysio Includes</h3>
            <div className="guarantee-grid">
              <div className="g-point">
                <div className="g-icon"><Check size={18} /></div>
                <div>
                  <strong>Dedicated 1-on-1 Physiotherapist</strong>
                  <p>No assistants or split attention. Your assigned MPT doctor stays with you entire time.</p>
                </div>
              </div>
              <div className="g-point">
                <div className="g-icon"><Check size={18} /></div>
                <div>
                  <strong>Hands-on Manual Joint Mobilization</strong>
                  <p>Targeted joint glides, soft tissue myofascial release, and spinal decompression.</p>
                </div>
              </div>
              <div className="g-point">
                <div className="g-icon"><Check size={18} /></div>
                <div>
                  <strong>Personalized Video Home Exercises</strong>
                  <p>Custom HD video links of your exact exercises sent via WhatsApp for daily habit building.</p>
                </div>
              </div>
              <div className="g-point">
                <div className="g-icon"><Check size={18} /></div>
                <div>
                  <strong>Objective Range of Motion Tracking</strong>
                  <p>Digital goniometer measurement recorded every week to confirm tangible recovery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
