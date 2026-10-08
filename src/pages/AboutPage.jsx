import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Target, 
  Compass, 
  Heart, 
  Clock, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Calendar,
  Users,
  Sparkles
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollReveal from '../components/ScrollReveal';
import { CLINIC_INFO } from '../data/physioData';

export default function AboutPage({ setActivePage }) {
  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const milestones = [
    { year: "2014", title: "Foundation Laid", desc: "Started as a dedicated spine and sports outpatient clinic with 2 treatment suites." },
    { year: "2017", title: "Advanced Modality Wing", desc: "Integrated Class-IV Laser and Matrix Rhythm Therapy for faster pain elimination." },
    { year: "2020", title: "Home Rehab Network", desc: "Launched sanitized home visit rehabilitation across Delhi NCR during post-op crises." },
    { year: "2023", title: "5000+ Milestone", desc: "Crossed 5,000 successful surgeries averted and sports injuries rehabilitated." },
    { year: "2026", title: "Biomechanical Motion Lab", desc: "Expanded with high-speed gait analysis and computerized spinal decompression." }
  ];

  const equipmentList = [
    {
      name: "High-Power Class-IV Laser",
      usage: "Accelerated cellular repair, tendon regeneration, and acute pain relief.",
      icon: "Cpu"
    },
    {
      name: "Matrix Rhythm Therapy (MaRhyThe)",
      usage: "Biological cell oscillation restoring muscle micro-circulation and lymphatic drainage.",
      icon: "Cpu"
    },
    {
      name: "Digital Cervical & Lumbar Traction",
      usage: "Calibrated decompression for slipped discs and pinched sciatica nerves.",
      icon: "Cpu"
    },
    {
      name: "Therapeutic Ultrasound & IFT",
      usage: "Deep heat acoustic wave delivery to soften stubborn collagen scar tissue.",
      icon: "Cpu"
    },
    {
      name: "Myofascial Dry Needling & Cupping",
      usage: "Targeted release of deep muscular trigger knots and myofascial restriction.",
      icon: "Cpu"
    },
    {
      name: "Computerized Gait & Balance Mats",
      usage: "Objective fall-risk screening and foot posture pressure mapping.",
      icon: "Cpu"
    }
  ];

  return (
    <div className="about-page-container page-transition">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="section-badge">ABOUT REVITAPHYSIO CARE</span>
          <h1 className="page-header-title">Restoring Movement. Rebuilding Lives.</h1>
          <p className="page-header-subtitle">
            Founded with a singular mission: to provide world-class, surgery-free physical rehabilitation 
            grounded in clinical evidence and compassionate patient empathy.
          </p>
        </div>
      </section>

      {/* Clinic Story Section */}
      <section className="about-story-section">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-image-col">
              <div className="about-image-card">
                <img src="/doctor_lead.jpg" alt="Chief Physiotherapist" className="about-doc-img" />
                <div className="about-exp-badge glass-panel">
                  <Award size={28} className="text-teal-600" />
                  <div>
                    <span className="text-xl font-bold">14+ Years</span>
                    <p className="text-xs text-slate-500">Excellence in Clinical Care</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-story-text-col">
              <span className="section-badge">OUR GENESIS</span>
              <h2 className="section-title">A Decade of Healing Without Invasiveness</h2>
              <p className="about-p">
                At <strong>RevitaPhysio Care</strong>, we believe the human body possesses an incredible natural capacity 
                to heal and regenerate when guided by proper biomechanical alignment and clinical therapy.
              </p>
              <p className="about-p">
                Too often, patients suffering from slip discs, frozen shoulders, or arthritis are advised surgery or forced 
                to rely indefinitely on heavy painkillers with dangerous gastrointestinal side-effects. 
                Our clinic was established to offer a definitive, science-backed alternative.
              </p>
              <p className="about-p">
                Every patient who walks through our doors receives a comprehensive 60-minute biomechanical evaluation 
                conducted by Master of Physiotherapy (MPT) specialists. We do not offer cookie-cutter exercises; 
                we design targeted therapy pathways calibrated to your body's exact recovery phase.
              </p>

              <div className="about-values-grid">
                <div className="about-value-item">
                  <div className="val-icon"><Target size={20} className="text-teal-600" /></div>
                  <div>
                    <h4 className="font-bold">Our Mission</h4>
                    <p className="text-sm text-slate-600">Empower people to lead pain-free, active lives with zero dependence on surgery.</p>
                  </div>
                </div>
                <div className="about-value-item">
                  <div className="val-icon"><Compass size={20} className="text-teal-600" /></div>
                  <div>
                    <h4 className="font-bold">Our Vision</h4>
                    <p className="text-sm text-slate-600">To be the gold standard in evidence-based non-surgical orthopedic & neuro rehab.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="about-stats-ribbon">
        <div className="container">
          <div className="stats-grid">
            {CLINIC_INFO.stats.map((st) => (
              <div key={st.id} className="stat-box text-center">
                <div className="stat-number-wrap">
                  <AnimatedCounter end={st.value} suffix={st.suffix} />
                </div>
                <h4 className="stat-label">{st.label}</h4>
                <p className="stat-desc">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Rehab Technology & Equipment */}
      <section className="about-equipment-section">
        <div className="container">
          <div className="text-center section-head-wrap">
            <span className="section-badge">ADVANCED INFRASTRUCTURE</span>
            <h2 className="section-title">Modern Clinical Equipment & Modalities</h2>
            <p className="section-subtitle">
              We invest continuously in top-tier medical rehabilitation technology to accelerate tissue healing 
              and ensure safe, comfortable treatment.
            </p>
          </div>

          <div className="equipment-grid">
            {equipmentList.map((eq, idx) => (
              <ScrollReveal key={idx} delay={idx * 80} className="equipment-card interactive-card glass-panel">
                <div className="eq-icon-circle">
                  <Cpu size={24} className="text-teal-600" />
                </div>
                <h4 className="eq-name">{eq.name}</h4>
                <p className="eq-usage">{eq.usage}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="about-timeline-section">
        <div className="container">
          <div className="text-center section-head-wrap">
            <span className="section-badge">OUR JOURNEY</span>
            <h2 className="section-title">Milestones of Compassionate Care</h2>
            <p className="section-subtitle">
              How we grew from a boutique spine clinic into one of the region's most reputable physical therapy centers.
            </p>
          </div>

          <div className="timeline-flow">
            {milestones.map((ms, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} className="timeline-node">
                <div className="timeline-year-tag">{ms.year}</div>
                <div className="timeline-card glass-panel">
                  <h4 className="timeline-title">{ms.title}</h4>
                  <p className="timeline-desc">{ms.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations & Quality Assurance */}
      <section className="about-accred-section">
        <div className="container">
          <div className="accred-banner glass-panel">
            <div className="accred-text">
              <span className="accred-tag">CLINICAL EXCELLENCE</span>
              <h3 className="accred-title">Member of Indian Association of Physiotherapists (MIAP)</h3>
              <p className="accred-desc">
                All physical therapists on our roster hold active registrations with the Indian Association of 
                Physiotherapists (IAP) and maintain mandatory continuing medical education (CME) credentials.
              </p>
            </div>
            <div className="accred-cta">
              <button onClick={() => navigateTo('appointment')} className="btn-primary">
                <Calendar size={18} />
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
