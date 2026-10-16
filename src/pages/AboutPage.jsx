import {
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Building2,
  HeartPulse,
  Sparkles,
  Accessibility,
  Clock,
  Zap,
  Activity,
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

      {/* ─── 3. CLINICAL ACHIEVEMENTS & STATS STRIP ─── */}
      <section className="wor-about-stats-section">
        <div className="wor-container">
          <div className="wor-about-stats-grid">
            <div className="wor-about-stat-box">
              <div className="wor-stat-icon-circle">
                <Users size={24} />
              </div>
              <div className="wor-stat-data">
                <h3>10,000+</h3>
                <p>Successful Recoveries</p>
              </div>
            </div>

            <div className="wor-about-stat-box">
              <div className="wor-stat-icon-circle">
                <ShieldCheck size={24} />
              </div>
              <div className="wor-stat-data">
                <h3>94% Surgeries</h3>
                <p>Successfully Avoided</p>
              </div>
            </div>

            <div className="wor-about-stat-box">
              <div className="wor-stat-icon-circle">
                <Award size={24} />
              </div>
              <div className="wor-stat-data">
                <h3>14+ Years</h3>
                <p>Clinical Leadership</p>
              </div>
            </div>

            <div className="wor-about-stat-box">
              <div className="wor-stat-icon-circle">
                <Activity size={24} />
              </div>
              <div className="wor-stat-data">
                <h3>100% MPT</h3>
                <p>Specialist Leadership</p>
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

      {/* ─── 5. CLINIC INFRASTRUCTURE & AMENITIES ─── */}
      <section className="wor-facilities-section">
        <div className="wor-container">
          <div className="wor-section-header-center">
            <div className="wor-section-tag-line center-tag">
              <span className="wor-divider-line"></span>
              <span className="wor-section-kicker">PATIENT COMFORT & SAFETY</span>
              <span className="wor-divider-line"></span>
            </div>
            <h2 className="wor-section-title">Modern Clinic Infrastructure in Baner, Pune</h2>
            <p className="wor-section-subtitle">
              Designed to clinical hospital standards with dedicated amenities for maximum privacy, comfort, and accessibility.
            </p>
          </div>

          <div className="wor-facilities-grid">
            <div className="wor-facility-card">
              <div className="wor-facility-icon">
                <Building2 size={24} />
              </div>
              <div>
                <h4>Private Treatment Suites</h4>
                <p>Individual private cabins ensure dignity, comfort, and quiet during every manual therapy and laser session.</p>
              </div>
            </div>

            <div className="wor-facility-card">
              <div className="wor-facility-icon">
                <Sparkles size={24} />
              </div>
              <div>
                <h4>Computerized Decompression Lab</h4>
                <p>European motorized traction units gently open disc spaces for lasting neck and lower back relief.</p>
              </div>
            </div>

            <div className="wor-facility-card">
              <div className="wor-facility-icon">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4>Hospital-Grade Sanitization</h4>
                <p>UV sterilized cabins, single-use medical consumables, and daily sanitized linens ensure 100% hygiene.</p>
              </div>
            </div>

            <div className="wor-facility-card">
              <div className="wor-facility-icon">
                <Accessibility size={24} />
              </div>
              <div>
                <h4>Wheelchair & Elevator Access</h4>
                <p>Level ramps, spacious elevators, and dedicated assistance for elderly or severely pained patients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
