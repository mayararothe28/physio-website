import React, { useState, useEffect } from 'react';
import { CalendarCheck, UserCheck, Scan, Stethoscope, HeartPulse, ChevronRight, Check } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/physioData';

const iconMap = {
  CalendarCheck,
  UserCheck,
  Scan,
  Stethoscope,
  HeartPulse
};

export default function HowItWorksSection({ onBookClick }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Auto-progress preview interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % HOW_IT_WORKS_STEPS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const activeStep = HOW_IT_WORKS_STEPS[activeStepIndex];
  const IconComponent = iconMap[activeStep.icon] || HeartPulse;

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="text-center section-head-wrap">
          <span className="section-badge">PATIENT JOURNEY</span>
          <h2 className="section-title">How Your Recovery Happens</h2>
          <p className="section-subtitle">
            From the moment you connect with us to your first pain-free milestone, 
            here is our structured 5-step clinical rehabilitation pathway.
          </p>
        </div>

        {/* Steps Progress Ribbon */}
        <div className="steps-ribbon-wrapper">
          <div className="steps-progress-track">
            <div 
              className="steps-progress-fill" 
              style={{ width: `${(activeStepIndex / (HOW_IT_WORKS_STEPS.length - 1)) * 100}%` }}
            />
          </div>

          <div className="steps-nodes-row">
            {HOW_IT_WORKS_STEPS.map((stepItem, idx) => {
              const NodeIcon = iconMap[stepItem.icon] || HeartPulse;
              const isPassed = idx < activeStepIndex;
              const isActive = idx === activeStepIndex;

              return (
                <div
                  key={stepItem.step}
                  className={`step-node ${isActive ? 'active' : ''} ${isPassed ? 'completed' : ''}`}
                  onClick={() => setActiveStepIndex(idx)}
                >
                  <div className="step-circle">
                    {isPassed ? <Check size={18} /> : <NodeIcon size={18} />}
                  </div>
                  <span className="step-label">Step {stepItem.step}</span>
                  <span className="step-heading-mini">{stepItem.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Step Showcase Card with Clean Animation */}
        <div className="active-step-card glass-panel" key={activeStep.step}>
          <div className="asc-left-col">
            <div className="asc-badge-row">
              <span className="asc-step-number">PHASE {activeStep.step}</span>
              <span className="asc-sub-badge">{activeStep.subtitle}</span>
            </div>
            <h3 className="asc-title">{activeStep.title}</h3>
            <p className="asc-desc">{activeStep.desc}</p>
            <div className="asc-detail-box">
              <strong>Clinical Action:</strong> {activeStep.detail}
            </div>

            <div className="asc-actions">
              <button onClick={onBookClick} className="btn-primary">
                <span>Start Phase 01: Book Now</span>
                <ChevronRight size={16} className="btn-icon-arrow" />
              </button>
            </div>
          </div>

          <div className="asc-right-col">
            <div className="asc-visual-box">
              <div className="asc-icon-halo">
                <IconComponent size={64} className="asc-hero-icon" />
              </div>
              <div className="asc-mini-checklist">
                <div className="check-item">
                  <div className="chk-circle"><Check size={14} /></div>
                  <span>Evidence-Based Guidance</span>
                </div>
                <div className="check-item">
                  <div className="chk-circle"><Check size={14} /></div>
                  <span>1-on-1 Physiotherapist Care</span>
                </div>
                <div className="check-item">
                  <div className="chk-circle"><Check size={14} /></div>
                  <span>Documented Progress Milestones</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
