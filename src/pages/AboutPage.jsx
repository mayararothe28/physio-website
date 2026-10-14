import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
  Building2,
  HeartPulse,
  Sparkles,
  ArrowRight,
  Accessibility,
  Clock,
  MapPin,
} from "lucide-react";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* ─── 1. STANDARDIZED HERO BANNER ─── */}
      <section className="subpage-hero-banner">
        <div className="subpage-hero-content">
          <div className="subpage-breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">About Us</span>
          </div>
          <span className="subpage-kicker">
            <ShieldCheck size={14} /> ABOUT REVITAORTHO CLINIC
          </span>
          <h1 className="subpage-title">
            Dedicated to Restoring Movement,
            <br />
            <span className="text-highlight">Relieving Pain & Avoiding Surgery.</span>
          </h1>
          <p className="subpage-lead">
            Learn about our patient-first philosophy, certified specialists, and evidence-based non-surgical approach to orthopedic and sports physical therapy in Baner, Pune.
          </p>
        </div>
      </section>

      {/* ─── 2. OUR STORY & CLINICAL PHILOSOPHY ─── */}
      <section className="about-story-section section-padding">
        <div className="about-container">
          <div className="about-story-grid">
            {/* Left: Professional Clinic Image */}
            <div className="about-story-img-col">
              <div className="about-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                  alt="RevitaOrtho Clinic Physiotherapy Assessment"
                  className="about-feature-img"
                  loading="lazy"
                />
                <div className="about-experience-badge">
                  <span className="badge-number">14+</span>
                  <div className="badge-text">
                    <strong>Years of Leadership</strong>
                    <span>Over 10,000+ Recoveries</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Story & Commitments */}
            <div className="about-story-text-col">
              <span className="about-kicker">WHO WE ARE</span>
              <h2 className="about-section-heading">
                We Treat the Root Cause of Pain, Not Just Temporary Symptoms
              </h2>
              <p className="about-lead-p">
                Founded by senior musculoskeletal physiotherapists, <strong>RevitaOrtho</strong> was built on a simple yet transformative belief: your body has a powerful capacity to heal when joints are unloaded and rehabilitated scientifically.
              </p>
              <p className="about-body-p">
                Unlike ordinary centers where patients are often left on electrical heat pads without supervision, our clinic delivers dedicated 1-on-1 care. Every diagnosis begins with a comprehensive 45-minute biomechanical assessment, followed by personalized manual therapy, computerized spinal decompression, and targeted core re-education.
              </p>

              <div className="about-pillars-grid">
                <div className="about-pillar-card">
                  <CheckCircle2 size={18} className="pillar-check-icon" />
                  <div>
                    <strong>1-on-1 Doctor Care</strong>
                    <p>Treated directly by Master’s-qualified (MPT) clinical physiotherapists, never junior helpers.</p>
                  </div>
                </div>

                <div className="about-pillar-card">
                  <CheckCircle2 size={18} className="pillar-check-icon" />
                  <div>
                    <strong>100% Non-Surgical Focus</strong>
                    <p>Advanced European decompression & laser protocols engineered to prevent surgery.</p>
                  </div>
                </div>

                <div className="about-pillar-card">
                  <CheckCircle2 size={18} className="pillar-check-icon" />
                  <div>
                    <strong>Zero Confusing Jargon</strong>
                    <p>We explain your MRI/X-ray scans and recovery milestones in simple, everyday language.</p>
                  </div>
                </div>

                <div className="about-pillar-card">
                  <CheckCircle2 size={18} className="pillar-check-icon" />
                  <div>
                    <strong>Relapse-Free Recovery</strong>
                    <p>Custom home exercise prescriptions so your muscles stay strong and pain stays away permanently.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. OUR MISSION, VISION & CORE VALUES ─── */}
      <section className="about-values-section section-padding">
        <div className="about-container">
          <div className="section-head-center">
            <span className="about-kicker">OUR GUIDING PRINCIPLES</span>
            <h2>Mission, Vision & Core Values</h2>
            <p>
              The moral and clinical standards that drive every evaluation, treatment session, and patient recovery roadmap at RevitaOrtho.
            </p>
          </div>

          <div className="about-values-grid">
            <div className="value-card">
              <div className="value-icon-box">
                <HeartPulse size={24} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower individuals suffering from joint pain, slip discs, and sports injuries to regain active, painless mobility through scientifically proven, compassionate physical medicine.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted non-surgical orthopedic rehabilitation center in Maharashtra, known for clinical precision, surgery avoidance, and lasting patient independence.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <Award size={24} />
              </div>
              <h3>Our Core Values</h3>
              <p>
                Honest diagnosis, complete financial transparency, zero unnecessary session packages, and treating every patient with the dignity and empathy we would offer our own family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. CLINIC INFRASTRUCTURE & AMENITIES ─── */}
      <section className="about-facilities-section section-padding">
        <div className="about-container">
          <div className="section-head-center">
            <span className="about-kicker">PATIENT COMFORT & SAFETY</span>
            <h2>Modern Clinic Infrastructure in Baner, Pune</h2>
            <p>
              Designed to clinical hospital standards with dedicated amenities for maximum privacy, comfort, and accessibility.
            </p>
          </div>

          <div className="facilities-grid">
            <div className="facility-item-card">
              <div className="fac-bullet">
                <Building2 size={20} className="text-azure" />
              </div>
              <div>
                <h4>Private Treatment Suites</h4>
                <p>Individual private cabins ensure dignity, comfort, and quiet during every manual therapy and laser session.</p>
              </div>
            </div>

            <div className="facility-item-card">
              <div className="fac-bullet">
                <Sparkles size={20} className="text-azure" />
              </div>
              <div>
                <h4>Computerized Decompression Lab</h4>
                <p>European motorized traction units gently open disc spaces for lasting neck and lower back relief.</p>
              </div>
            </div>

            <div className="facility-item-card">
              <div className="fac-bullet">
                <ShieldCheck size={20} className="text-azure" />
              </div>
              <div>
                <h4>Hospital-Grade Sanitization</h4>
                <p>UV sterilized cabins, single-use medical consumables, and daily sanitized linens ensure 100% hygiene.</p>
              </div>
            </div>

            <div className="facility-item-card">
              <div className="fac-bullet">
                <Accessibility size={20} className="text-azure" />
              </div>
              <div>
                <h4>Wheelchair & Lift Access</h4>
                <p>Level ramps, spacious elevators, and dedicated assistance for elderly or severely pained patients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. CLEAN BOTTOM ACTION CTA STRIP ─── */}
      <section className="about-cta-section">
        <div className="about-container about-cta-inner">
          <span className="about-kicker text-ice">START YOUR RECOVERY</span>
          <h2>Ready to Consult with Our Clinical Specialists?</h2>
          <p>
            Schedule your comprehensive 45-minute root-cause evaluation today or connect directly with our patient coordination desk.
          </p>
          <div className="about-cta-btn-group">
            <Link to="/appointment" className="btn-about-white">
              <Calendar size={17} />
              <span>Book Initial Assessment</span>
            </Link>
            <Link to="/contact" className="btn-about-outline-white">
              <MapPin size={17} />
              <span>Contact Clinic Desk</span>
            </Link>
            <a
              href="https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20would%20like%20to%20learn%20more%20about%20your%20clinic."
              target="_blank"
              rel="noreferrer"
              className="btn-about-whatsapp"
            >
              <MessageCircle size={17} />
              <span>WhatsApp Us: +91 91458 75248</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
