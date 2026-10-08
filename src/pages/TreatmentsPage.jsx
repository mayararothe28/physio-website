import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  TrendingUp, 
  HelpCircle,
  Activity
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { TREATMENTS_DATA } from '../data/physioData';

export default function TreatmentsPage({ setActivePage, onSelectService }) {
  const [activeTreatmentId, setActiveTreatmentId] = useState(TREATMENTS_DATA[0].id);
  const [painLevel, setPainLevel] = useState(6);
  const [painDuration, setPainDuration] = useState('1-3 Months');

  const selectedTreatment = TREATMENTS_DATA.find((t) => t.id === activeTreatmentId) || TREATMENTS_DATA[0];

  const handleBook = () => {
    onSelectService(selectedTreatment.title);
    setActivePage('appointment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="treatments-page-container page-transition">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="section-badge">CONDITIONS & PROTOCOLS</span>
          <h1 className="page-header-title">Specialized Treatment Programs</h1>
          <p className="page-header-subtitle">
            Explore our clinically proven protocols for musculoskeletal problems, spine disorders, 
            sports tears, and post-surgery rehabilitation.
          </p>
        </div>
      </section>

      {/* Main Interactive Treatment Explorer */}
      <section className="treatments-explorer-section">
        <div className="container">
          <div className="treatment-nav-tabs">
            {TREATMENTS_DATA.map((tr) => (
              <button
                key={tr.id}
                onClick={() => setActiveTreatmentId(tr.id)}
                className={`treatment-tab-btn ${activeTreatmentId === tr.id ? 'active' : ''}`}
              >
                <span className="tab-badge">{tr.category}</span>
                <span className="tab-title">{tr.title}</span>
              </button>
            ))}
          </div>

          {/* Active Treatment Deep-Dive Card */}
          <div className="treatment-showcase-panel glass-panel" key={selectedTreatment.id}>
            <div className="tsp-top-bar">
              <div>
                <span className="tsp-badge">{selectedTreatment.badge}</span>
                <h2 className="tsp-title">{selectedTreatment.title}</h2>
              </div>
              <div className="tsp-success-box">
                <span className="tsp-success-num">{selectedTreatment.successRate}</span>
                <span className="tsp-success-lbl">Reported Improvement</span>
              </div>
            </div>

            <p className="tsp-overview">{selectedTreatment.overview}</p>

            <div className="tsp-grid-details">
              {/* Symptoms */}
              <div className="tsp-box symptoms-box">
                <h4 className="tsp-box-title">
                  <AlertCircle size={18} className="text-amber-500" />
                  <span>Key Symptoms To Watch</span>
                </h4>
                <ul className="tsp-list">
                  {selectedTreatment.symptoms.map((sym, sIdx) => (
                    <li key={sIdx}>
                      <span className="bullet-dot" />
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Causes */}
              <div className="tsp-box causes-box">
                <h4 className="tsp-box-title">
                  <HelpCircle size={18} className="text-teal-600" />
                  <span>Underlying Anatomical Causes</span>
                </h4>
                <ul className="tsp-list">
                  {selectedTreatment.causes.map((cs, cIdx) => (
                    <li key={cIdx}>
                      <span className="bullet-dot" />
                      <span>{cs}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Physiotherapy Protocol */}
              <div className="tsp-box full-span-box protocol-box">
                <h4 className="tsp-box-title">
                  <Activity size={18} className="text-teal-600" />
                  <span>Evidence-Based Rehabilitation Protocol</span>
                </h4>
                <p className="tsp-protocol-text">{selectedTreatment.approach}</p>
                
                <div className="tsp-timeline-meta">
                  <Clock size={16} className="text-teal-600" />
                  <span>Expected Recovery Timeframe: <strong>{selectedTreatment.expectedTimeline}</strong></span>
                </div>
              </div>
            </div>

            <div className="tsp-action-footer">
              <div className="tsp-left-note">
                <TrendingUp size={16} className="text-emerald-600" />
                <span>94% of patients report significant pain relief by week 2.</span>
              </div>
              <button onClick={handleBook} className="btn-primary">
                <Calendar size={18} />
                <span>Book Evaluation for {selectedTreatment.title}</span>
                <ArrowRight size={16} className="btn-icon-arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quick Pain Self-Assessment Widget */}
      <section className="pain-assessment-section">
        <div className="container">
          <div className="assessment-card glass-panel">
            <div className="text-center mb-6">
              <span className="section-badge">INTERACTIVE CHECK</span>
              <h3 className="section-title text-2xl">Quick Pain & Mobility Check</h3>
              <p className="section-subtitle">
                Estimate the clinical urgency and recommended therapy approach based on your current symptoms.
              </p>
            </div>

            <div className="assessment-controls-grid">
              <div className="ctrl-box">
                <label className="ctrl-label">
                  Current Pain Score (1 - Mild Discomfort to 10 - Severe Incapacitating):
                </label>
                <div className="slider-wrap">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={painLevel}
                    onChange={(e) => setPainLevel(Number(e.target.value))}
                    className="pain-slider"
                  />
                  <div className="slider-val-bubble">
                    <span className="font-extrabold text-xl text-teal-700">{painLevel} / 10</span>
                    <span className="text-xs text-slate-500">
                      {painLevel <= 3 ? "Mild Ache" : painLevel <= 7 ? "Moderate / Impairing" : "Acute Severe"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="ctrl-box">
                <label className="ctrl-label">How long have you had this issue?</label>
                <div className="duration-buttons">
                  {['< 1 Week', '1-3 Months', '3-6 Months', '6+ Months Chronic'].map((dur) => (
                    <button
                      key={dur}
                      onClick={() => setPainDuration(dur)}
                      className={`dur-btn ${painDuration === dur ? 'active' : ''}`}
                    >
                      {dur}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="assessment-result-strip">
              <div className="ar-text">
                <span className="ar-tag">CLINICAL RECOMMENDATION:</span>
                <p className="ar-desc">
                  Based on Pain Level {painLevel}/10 lasting {painDuration}, 
                  {painLevel >= 7 
                    ? " you require priority evaluation with IFT and spinal/joint decompression to prevent chronic muscle spasms." 
                    : " targeted manual mobilization and kinetic chain strengthening will likely restore pain-free range in 2-3 weeks."}
                </p>
              </div>
              <button onClick={() => setActivePage('appointment')} className="btn-primary">
                <Calendar size={16} />
                <span>Book Biomechanical Exam</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
