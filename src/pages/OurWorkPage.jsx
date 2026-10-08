import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Star, 
  Calendar, 
  ArrowRight, 
  Activity, 
  Award, 
  TrendingUp, 
  ShieldCheck,
  Filter
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { OUR_WORK_CASES, CLINIC_INFO } from '../data/physioData';

export default function OurWorkPage({ setActivePage, onSelectService }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = [
    'All',
    'Spine & Sciatica',
    'Post-Surgery Rehab',
    'Sports Rehabilitation',
    'Joint Mobilization',
    'Posture & Ergonomics',
    'Neuro Rehabilitation'
  ];

  const filteredCases = selectedFilter === 'All'
    ? OUR_WORK_CASES
    : OUR_WORK_CASES.filter((c) => c.category === selectedFilter);

  const handleBook = (treatmentTitle) => {
    if (onSelectService) {
      onSelectService(treatmentTitle);
    }
    setActivePage('appointment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="our-work-page-container page-transition">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="section-badge">CLINICAL CASE STUDIES</span>
          <h1 className="page-header-title">Our Work & Patient Recovery Proof</h1>
          <p className="page-header-subtitle">
            Real patient rehabilitation journeys treated at RevitaPhysio Care. 
            Documented outcomes showcasing how scientific physiotherapy restores pain-free movement without surgery.
          </p>
        </div>
      </section>

      {/* Recovery Metrics Ribbon */}
      <section className="work-stats-ribbon">
        <div className="container">
          <div className="work-metrics-card glass-panel">
            <div className="wm-item">
              <TrendingUp size={28} className="text-teal-600 mb-2" />
              <span className="wm-number">98.4%</span>
              <span className="wm-label">Surgery Aversion Rate</span>
              <p className="wm-desc">Patients avoided joint & spine surgeries</p>
            </div>
            <div className="wm-divider" />
            <div className="wm-item">
              <Clock size={28} className="text-teal-600 mb-2" />
              <span className="wm-number">2-4 Weeks</span>
              <span className="wm-label">Average Rapid Relief</span>
              <p className="wm-desc">Significant mobility restoration</p>
            </div>
            <div className="wm-divider" />
            <div className="wm-item">
              <Award size={28} className="text-teal-600 mb-2" />
              <span className="wm-number">5,000+</span>
              <span className="wm-label">Completed Rehabs</span>
              <p className="wm-desc">Verified clinical patient files</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Gallery Grid */}
      <section className="work-cases-section">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="filter-pills-bar justify-center mb-10">
            <span className="filter-label"><Filter size={15} /> Filter Cases:</span>
            <div className="pills-scroll-row">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`category-pill-btn ${selectedFilter === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cases Grid: Image on TOP, structured text underneath */}
          <div className="work-cards-grid">
            {filteredCases.map((cs, idx) => (
              <ScrollReveal key={cs.id} delay={idx * 80} className="work-card-wrapper">
                <div className="work-case-card interactive-card glass-panel">
                  {/* 1. TOP IMAGE (Clean framing, proper height, rounded corners) */}
                  <div className="work-card-image-box">
                    <img 
                      src={cs.image} 
                      alt={cs.title} 
                      className="work-card-img" 
                      loading="lazy"
                    />
                    <div className="work-card-overlay-badge">
                      <span className="work-cat-tag">{cs.category}</span>
                    </div>
                  </div>

                  {/* 2. TEXT CONTENT NEATLY UNDERNEATH */}
                  <div className="work-card-body">
                    {/* Stars & Patient info */}
                    <div className="work-patient-meta">
                      <div className="flex items-center gap-1">
                        {[...Array(cs.rating)].map((_, sIdx) => (
                          <Star key={sIdx} size={14} className="text-amber-500 fill-amber-500" />
                        ))}
                      </div>
                      <span className="work-patient-demog">{cs.patient}</span>
                    </div>

                    {/* Case Title */}
                    <h3 className="work-card-title">{cs.title}</h3>

                    {/* Before Condition */}
                    <div className="work-info-block before-block">
                      <span className="wib-label">Condition Before Treatment:</span>
                      <p className="wib-text">{cs.beforeCondition}</p>
                    </div>

                    {/* Treatment Applied */}
                    <div className="work-info-block therapy-block">
                      <span className="wib-label">Physiotherapy Applied:</span>
                      <p className="wib-text font-medium">{cs.treatmentUsed}</p>
                    </div>

                    {/* Clinical Result (Highlighted) */}
                    <div className="work-result-box">
                      <div className="wrb-icon">
                        <CheckCircle2 size={18} className="text-emerald-600" />
                      </div>
                      <div>
                        <span className="wrb-label">Documented Outcome:</span>
                        <p className="wrb-text">{cs.result}</p>
                      </div>
                    </div>

                    {/* Duration & Action Footer */}
                    <div className="work-card-footer">
                      <span className="work-duration-pill">
                        <Clock size={13} />
                        <span>{cs.duration}</span>
                      </span>

                      <button 
                        onClick={() => handleBook(cs.title)}
                        className="btn-primary text-xs py-2 px-4"
                      >
                        <span>Book Similar Care</span>
                        <ArrowRight size={13} className="btn-icon-arrow" />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom Consultation CTA */}
          <div className="work-cta-strip text-center mt-14 glass-panel">
            <h3 className="text-2xl font-bold mb-2">Want a Personalized Recovery Plan for Your Condition?</h3>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Schedule a comprehensive 1-on-1 physical examination with our senior physiotherapists.
            </p>
            <button 
              onClick={() => {
                setActivePage('appointment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              <Calendar size={18} />
              <span>Book Priority Consultation Slot</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
