import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  Users,
  Building2,
  CheckCircle2,
  Calendar,
  Phone,
  Activity,
  HeartPulse,
  Sparkles,
  ArrowRight,
  Clock,
  MapPin,
  Check,
} from "lucide-react";
import "./AboutPage.css";

const CLINICAL_MILESTONES = [
  { value: "14+", label: "Years of Clinical Excellence", sub: "Established in 2012 in Pune" },
  { value: "15,000+", label: "Patients Successfully Healed", sub: "Without invasive surgeries" },
  { value: "94.2%", label: "Surgery Avoidance Rate", sub: "Documented in disc & knee cases" },
  { value: "4.98★", label: "Patient Satisfaction", sub: "1,450+ verified Google reviews" },
];

const CLINICAL_PILLARS = [
  {
    icon: Activity,
    title: "Root-Cause Biomechanical Diagnostics",
    description:
      "We never mask symptoms with temporary painkillers or electrical pads alone. Every patient receives a comprehensive 45-minute musculoskeletal assessment to pinpoint joint misalignment, nerve tension, and muscle firing deficits.",
  },
  {
    icon: Sparkles,
    title: "European Advanced Non-Invasive Technology",
    description:
      "We invest in FDA-cleared and German-certified rehabilitation technologies, including Class-IV High-Power Laser, Computerized Spinal Decompression, and Matrix Rhythm Therapy (MaRhyThe®) for accelerated cellular healing.",
  },
  {
    icon: Users,
    title: "Exclusively 1-on-1 Specialist Care",
    description:
      "Your recovery is guided directly by Master’s-qualified (MPT) physiotherapists with international fellowships — never handed over to untrained gym trainers or junior assistants.",
  },
  {
    icon: ShieldCheck,
    title: "Milestone-Driven Relapse Prevention",
    description:
      "Healing doesn't end when the pain stops. We prescribe custom video-guided home exercise programs and workstation ergonomic audits to ensure your joint stays resilient for life.",
  },
];

const CLINIC_FACILITIES = [
  {
    title: "Private Treatment Suites",
    desc: "Individual acoustic & visual privacy cabins for manual therapy, dry needling, and laser procedures.",
  },
  {
    title: "Computerized Decompression Lab",
    desc: "Calibrated motorized traction units for cervical and lumbar disc herniation treatment.",
  },
  {
    title: "Kinetic Rehabilitation Gym",
    desc: "Equipped with Swiss balls, balance boards, functional resistance cables, and gait tracks.",
  },
  {
    title: "Hospital-Grade Hygiene",
    desc: "Daily UV disinfection, single-use sterilized dry needles, and medical-grade sanitized linens.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* ─── 1. STANDARDIZED UNIFORM SUBPAGE HERO ─── */}
      <section className="subpage-hero-banner">
        <div className="subpage-hero-content">
          <span className="subpage-kicker">
            <ShieldCheck size={14} /> ABOUT REVITAORTHO CLINIC
          </span>
          <h1 className="subpage-title">
            Dedicated to Evidence-Based Healing.
            <br />
            <span className="text-highlight">Committed to Avoiding Surgery.</span>
          </h1>
          <p className="subpage-lead">
            Founded with a clinical mission to bring world-class non-invasive orthopedic rehabilitation to Pune, combining Master’s-level clinical expertise with advanced European technologies.
          </p>
        </div>
      </section>

      {/* ─── 2. CLINIC VISUAL SPOTLIGHT ─── */}
      <section className="about-visual-strip">
        <div className="about-container">
          <div className="about-img-frame">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
              alt="Physiotherapist providing hands-on orthopedic care"
              className="about-main-img"
            />
            <div className="about-floating-badge">
              <Award size={22} className="text-azure" />
              <div>
                <strong>NABH Quality Protocols • ISO 9001:2015</strong>
                <p>Private Treatment Suites & Gait Lab in Baner, Pune</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. CLINICAL MILESTONES RIBBON ─── */}
      <section className="about-milestones-bar">
        <div className="about-container milestones-grid">
          {CLINICAL_MILESTONES.map((item, idx) => (
            <div key={idx} className="milestone-box">
              <strong className="milestone-value">{item.value}</strong>
              <span className="milestone-title">{item.label}</span>
              <p className="milestone-sub">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 4. CLINICAL PHILOSOPHY / FOUNDER'S NOTE ─── */}
      <section className="about-founder-section section-padding">
        <div className="about-container founder-grid">
          <div className="founder-image-col">
            <div className="founder-photo-wrap">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
                alt="Dr. Sumit Gupta, PT - Clinical Director"
                className="founder-photo"
              />
              <div className="founder-nameplate">
                <strong>Dr. Sumit Gupta, PT</strong>
                <span>Chief Orthopedic Physiotherapist • MPT (Musculoskeletal)</span>
                <p>14+ Years Clinical Experience • Ex-Consultant, Apollo Health City</p>
              </div>
            </div>
          </div>

          <div className="founder-content-col">
            <span className="about-kicker">CLINICAL DIRECTOR'S PHILOSOPHY</span>
            <h2>"Our First Mission Is Always to Prevent Unnecessary Joint & Spine Surgeries."</h2>
            <div className="founder-quote-body">
              <p>
                In today's fast-paced healthcare environment, patients struggling with slip discs, knee osteoarthritis, or shoulder impingement are often pushed into invasive microdiscectomies, steroid injections, or joint replacements far too early.
              </p>
              <p>
                At RevitaOrtho, we believe the human musculoskeletal system has immense regenerative capacity when unloaded and rehabilitated properly. By combining precision biomechanical assessments with high-power laser therapy, computerized spinal decompression, and targeted manual therapy, we have helped over 94% of our patients achieve complete, pain-free mobility without going under the surgeon's knife.
              </p>
              <p>
                Every treatment plan we design is transparent, ethical, and customized to your specific lifestyle goals — whether that is running a marathon or simply climbing the stairs to your home without pain.
              </p>
            </div>

            <div className="founder-signature-row">
              <div>
                <strong>Dr. Sumit Gupta, PT</strong>
                <span>Founder & Clinical Director, RevitaOrtho</span>
              </div>
              <div className="credentials-chip">
                <ShieldCheck size={16} /> MIAP Reg. No. L-28491
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. FOUR CLINICAL PILLARS ─── */}
      <section className="about-pillars-section section-padding">
        <div className="about-container">
          <div className="section-head-center">
            <span className="about-kicker">OUR CLINICAL FOUNDATION</span>
            <h2>Why Patients Choose RevitaOrtho</h2>
            <p>
              We reject the one-size-fits-all model. Here is how our clinical methodology sets the standard for physical medicine.
            </p>
          </div>

          <div className="pillars-cards-grid">
            {CLINICAL_PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="pillar-card">
                  <div className="pillar-icon-box">
                    <Icon size={24} />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 6. INFRASTRUCTURE & FACILITIES ─── */}
      <section className="about-facilities-section section-padding">
        <div className="about-container">
          <div className="section-head-center">
            <span className="about-kicker">PATIENT-CENTERED ENVIRONMENT</span>
            <h2>Modern Clinic Infrastructure in Baner, Pune</h2>
            <p>
              Designed to clinical hospital standards with dedicated amenities for maximum comfort, safety, and hygiene.
            </p>
          </div>

          <div className="facilities-grid">
            {CLINIC_FACILITIES.map((fac, idx) => (
              <div key={idx} className="facility-item-card">
                <div className="fac-bullet">
                  <CheckCircle2 size={18} className="text-azure" />
                </div>
                <div>
                  <h4>{fac.title}</h4>
                  <p>{fac.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. BOTTOM CTA ─── */}
      <section className="about-cta-section">
        <div className="about-container about-cta-inner">
          <span className="about-kicker text-ice">START YOUR RECOVERY</span>
          <h2>Experience the Difference of True Clinical Care</h2>
          <p>
            Schedule your 45-minute comprehensive biomechanical evaluation today and discover a clear, surgery-free path forward.
          </p>
          <div className="about-cta-btn-group">
            <Link to="/appointment" className="btn-about-white">
              <Calendar size={18} />
              <span>Book Your Evaluation</span>
            </Link>
            <a href="tel:+919876543210" className="btn-about-outline-white">
              <Phone size={18} />
              <span>Call Helpline: +91 98765 43210</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
