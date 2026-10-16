import {
  ShieldCheck,
  Award,
  CheckCircle2,
  HeartPulse,
  Stethoscope,
  FileText,
  Activity,
  Sparkles,
} from "lucide-react";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <main className="wor-about-page">
      {/* ─── 1. STANDARDIZED CLEAN SUBPAGE HERO ─── */}
      <section className="wor-subpage-hero">
        <div className="wor-container">
          <div className="wor-section-tag-line center-tag">
            <span className="wor-divider-line"></span>
            <span className="wor-section-kicker">ABOUT REVITAORTHO</span>
            <span className="wor-divider-line"></span>
          </div>

          <h1 className="wor-subpage-title">
            Specialized Physical Therapy & Joint Rehabilitation
          </h1>
          <p className="wor-subpage-subtitle">
            Dedicated 1-on-1 hands-on care, advanced European technology, and evidence-based non-surgical recovery protocols in Baner, Pune.
          </p>
        </div>
      </section>

      {/* ─── 2. OUR STORY & CLINICAL PHILOSOPHY (Split Layout matching Home) ─── */}
      <section className="wor-about-story-section">
        <div className="wor-container">
          <div className="wor-about-story-grid">
            {/* Left: Clean Clinic Treatment Suite Image (Same as Home Page) */}
            <div className="wor-about-img-col">
              <div className="wor-about-img-card">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"
                  alt="RevitaOrtho Clinic Treatment Suite"
                  className="wor-about-page-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Narrative Copy & Clinical Commitments */}
            <div className="wor-about-text-col">
              <div className="wor-section-tag-line">
                <span className="wor-divider-line"></span>
                <span className="wor-section-kicker">WHO WE ARE</span>
              </div>

              <h2 className="wor-about-heading">
                We Treat the Root Cause of Pain, Not Just Temporary Symptoms
              </h2>

              <p className="wor-about-lead-p">
                Founded by senior musculoskeletal physiotherapists, <strong>RevitaOrtho</strong> stands as a premier physical therapy and musculoskeletal rehabilitation center in Baner, Pune, offering clinical excellence that meets international orthopedic standards.
              </p>

              <p className="wor-about-body-p">
                Unlike ordinary centers where patients are often left unattended on electrical heat pads, our clinic delivers dedicated 1-on-1 care. Every diagnosis begins with a comprehensive 45-minute biomechanical evaluation, followed by personalized manual therapy, computerized spinal decompression, and targeted core stabilization.
              </p>

              <div className="wor-about-pillars-grid">
                <div className="wor-pillar-item">
                  <CheckCircle2 size={18} className="wor-pillar-icon" />
                  <div>
                    <strong>Dedicated 1-on-1 Doctor Care</strong>
                    <p>Every session led personally by hospital-certified Master's degree (MPT) clinicians.</p>
                  </div>
                </div>

                <div className="wor-pillar-item">
                  <CheckCircle2 size={18} className="wor-pillar-icon" />
                  <div>
                    <strong>100% Non-Surgical Focus</strong>
                    <p>Advanced European decompression & Class-IV laser protocols engineered to prevent surgery.</p>
                  </div>
                </div>

                <div className="wor-pillar-item">
                  <CheckCircle2 size={18} className="wor-pillar-icon" />
                  <div>
                    <strong>Transparent Treatment Roadmap</strong>
                    <p>We explain your MRI and X-ray findings and recovery milestones in simple, everyday language.</p>
                  </div>
                </div>

                <div className="wor-pillar-item">
                  <CheckCircle2 size={18} className="wor-pillar-icon" />
                  <div>
                    <strong>Permanent Relapse Prevention</strong>
                    <p>Custom home exercise prescriptions to keep your joints stable and permanently pain-free.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ─── 4. OUR MISSION, VISION & CORE VALUES ─── */}
      <section className="wor-values-section">
        <div className="wor-container">
          <div className="wor-section-header-center">
            <div className="wor-section-tag-line center-tag">
              <span className="wor-divider-line"></span>
              <span className="wor-section-kicker">OUR GUIDING PRINCIPLES</span>
              <span className="wor-divider-line"></span>
            </div>
            <h2 className="wor-section-title">Mission, Vision & Core Values</h2>
            <p className="wor-section-subtitle">
              The ethical and clinical standards that drive every evaluation, treatment protocol, and patient recovery roadmap at RevitaOrtho.
            </p>
          </div>

          <div className="wor-values-grid">
            <div className="wor-value-card">
              <div className="wor-value-icon-box">
                <HeartPulse size={26} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower individuals suffering from joint pain, slip discs, and sports injuries to regain active, painless mobility through scientifically proven, compassionate physical medicine.
              </p>
            </div>

            <div className="wor-value-card">
              <div className="wor-value-icon-box">
                <ShieldCheck size={26} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted non-surgical orthopedic rehabilitation center in Pune, known for clinical precision, surgery avoidance, and lasting patient independence.
              </p>
            </div>

            <div className="wor-value-card">
              <div className="wor-value-icon-box">
                <Award size={26} />
              </div>
              <h3>Our Core Values</h3>
              <p>
                Honest diagnosis, complete financial transparency, zero unnecessary session packages, and treating every patient with the dignity and empathy we would offer our own family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. OUR PROCESS (4 STEPS) ─── */}
      <section className="wor-process-section">
        <div className="wor-container">
          <div className="wor-section-header-center">
            <div className="wor-section-tag-line center-tag">
              <span className="wor-divider-line"></span>
              <span className="wor-section-kicker">OUR PROCESS</span>
              <span className="wor-divider-line"></span>
            </div>
            <h2 className="wor-section-title">Your 4-Step Recovery Journey</h2>
            <p className="wor-section-subtitle">
              A structured, evidence-based clinical pathway designed to accurately identify the root cause, relieve pain, and restore lasting mobility.
            </p>
          </div>

          <div className="wor-process-grid">
            <div className="wor-process-card">
              <div className="wor-process-top">
                <span className="wor-process-num">01</span>
                <div className="wor-process-icon">
                  <Stethoscope size={22} />
                </div>
              </div>
              <h3 className="wor-process-card-title">Comprehensive Evaluation</h3>
              <p className="wor-process-card-desc">
                In-depth 45-minute biomechanical assessment, posture analysis, and joint mobility testing to diagnose the root cause of your pain.
              </p>
            </div>

            <div className="wor-process-card">
              <div className="wor-process-top">
                <span className="wor-process-num">02</span>
                <div className="wor-process-icon">
                  <FileText size={22} />
                </div>
              </div>
              <h3 className="wor-process-card-title">Personalized Care Plan</h3>
              <p className="wor-process-card-desc">
                A customized, goal-oriented recovery roadmap tailored to your MRI/X-ray findings, daily routine, and personal mobility goals.
              </p>
            </div>

            <div className="wor-process-card">
              <div className="wor-process-top">
                <span className="wor-process-num">03</span>
                <div className="wor-process-icon">
                  <Activity size={22} />
                </div>
              </div>
              <h3 className="wor-process-card-title">Advanced Hands-On Therapy</h3>
              <p className="wor-process-card-desc">
                Dedicated 1-on-1 manual therapy, computerized spinal decompression, and targeted modalities to relieve acute pain and restore tissue mobility.
              </p>
            </div>

            <div className="wor-process-card">
              <div className="wor-process-top">
                <span className="wor-process-num">04</span>
                <div className="wor-process-icon">
                  <Sparkles size={22} />
                </div>
              </div>
              <h3 className="wor-process-card-title">Active Strengthening & Prevention</h3>
              <p className="wor-process-card-desc">
                Functional core stabilization, posture & ergonomic retraining, and custom home exercise prescriptions for permanent relapse prevention.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

