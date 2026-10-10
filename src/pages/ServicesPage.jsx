import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  Bone,
  HeartPulse,
  Accessibility,
  Building2,
  Home,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Clock,
  Sparkles,
  ShieldCheck,
  Check,
  Zap,
} from "lucide-react";
import "./ServicesPage.css";

const CLINICAL_SERVICES = [
  {
    id: "spine",
    icon: Bone,
    category: "Spine & Nerves",
    title: "Spine Decompression & Sciatica Care",
    badge: "Non-Surgical Protocol",
    description:
      "Targeted mechanical decompression and laser photobiomodulation for lumbar disc herniation, cervical radiculopathy, and sciatica. Gently opens compressed vertebral interspaces to pull herniated disc gel away from irritated nerve roots.",
    conditions: ["L4-L5 / L5-S1 Slip Disc", "Radiating Sciatica Leg Pain", "Cervical Spondylosis", "Facet Joint Arthropathy"],
    modalities: ["Computerized Decompression", "Class-IV Cold Laser", "McKenzie Extension Protocol", "Core Deep Stabilizers"],
    sessionLength: "45 Mins / Session",
    timeline: "60-80% pain relief in 8–12 sessions",
    linkParam: "spine",
  },
  {
    id: "sports",
    icon: Activity,
    category: "Sports Medicine",
    title: "Sports Injury & High-Performance Rehab",
    badge: "Athletic Return",
    description:
      "Comprehensive sports injury protocols for athletes and runners. Focuses on kinetic chain alignment, proprioceptive balance drills, and high-velocity deceleration mechanics to prevent recurring ligament and tendon tears.",
    conditions: ["Grade I-II ACL / MCL Sprains", "Meniscus Tears & Runner's Knee", "Rotator Cuff & Shoulder Impingement", "Hamstring & Calf Muscle Tears"],
    modalities: ["Tecar Radiofrequency", "Dynamic Agility Drills", "Kinesiology Taping", "Biomechanical Video Analysis"],
    sessionLength: "45–60 Mins / Session",
    timeline: "Return-to-sport clearance in 6–10 weeks",
    linkParam: "sports",
  },
  {
    id: "joints",
    icon: Accessibility,
    category: "Joint Preservation",
    title: "Knee Osteoarthritis & Joint Preservation",
    badge: "Avoid Knee Surgery",
    description:
      "Cartilage-preserving therapy designed to delay or completely avoid knee replacement surgeries. Re-educates quadriceps-to-hamstring force ratios and unloads damaged joint compartments to restore smooth stair-climbing glide.",
    conditions: ["Grade 1 to 3 Knee Osteoarthritis", "Patellofemoral Pain Syndrome", "Chronic Hip Bursitis", "Ankle Joint Stiffness"],
    modalities: ["Maitland Joint Mobilization", "Targeted Tecar Diathermy", "Unloading Knee Bracing", "Quadriceps Bio-Loading"],
    sessionLength: "45 Mins / Session",
    timeline: "Mobility & stair-climbing improved in 2–3 weeks",
    linkParam: "knee",
  },
  {
    id: "shoulder",
    icon: HeartPulse,
    category: "Upper Extremity",
    title: "Frozen Shoulder & Rotator Cuff Care",
    badge: "Full 170° Reach",
    description:
      "Advanced capsular release protocols combining German Matrix Rhythm Therapy (MaRhyThe®) with manual glenohumeral glides. Breaks dense fibrotic adhesions and eliminates severe night throbbing.",
    conditions: ["Adhesive Capsulitis (Frozen Shoulder)", "Supraspinatus Tendonitis", "Subacromial Impingement", "Tennis & Golfer's Elbow"],
    modalities: ["Matrix Rhythm Therapy (MaRhyThe)", "Hydrocollator Heat Packs", "Scapular Rhythm Retraining", "Manual Traction"],
    sessionLength: "45 Mins / Session",
    timeline: "160°+ overhead reach restored in 4–6 weeks",
    linkParam: "shoulder",
  },
  {
    id: "postop",
    icon: Building2,
    category: "Post-Surgical Care",
    title: "Post-Operative Accelerated Rehabilitation",
    badge: "Hospital-Grade Protocol",
    description:
      "Structured, phase-based rehabilitation following orthopaedic surgeries. Accelerates functional scar tissue mobilization, prevents arthrofibrosis, and rebuilds independent walking without limp or crutches.",
    conditions: ["Total Knee Replacement (TKR)", "Total Hip Replacement (THR)", "Spine Microdiscectomy / Fusion", "Post-Fracture Fixation"],
    modalities: ["Continuous Passive Motion (CPM)", "Manual Lymphatic Drainage", "Gait Pattern Re-Education", "Progressive Resistance"],
    sessionLength: "45 Mins / Session",
    timeline: "Independent stair climbing in 4–8 weeks",
    linkParam: "postop",
  },
  {
    id: "homecare",
    icon: Home,
    category: "Doorstep Service",
    title: "Home Visit Physiotherapy Across Pune",
    badge: "Convenience at Home",
    description:
      "Senior physiotherapists bring clinical care directly to your residence. Specially designed for seniors, post-TKR patients unable to climb stairs, stroke recovery, and severe acute pain where clinic travel causes distress.",
    conditions: ["Post-Op Patients (Day 1 to 30)", "Elderly Mobility & Fall Risk", "Neurological Stroke Recovery", "Bed-Ridden Pain Conditions"],
    modalities: ["Portable Ultrasound & Electrotherapy", "Bedside Manual Glides", "Home Ergonomic & Fall Audit", "Family Caregiver Training"],
    sessionLength: "45–50 Mins / Visit",
    timeline: "Daily & alternate-day home visit packages",
    linkParam: "homecare",
  },
];

const EVALUATION_INCLUSIONS = [
  "In-depth 45-minute musculoskeletal clinical assessment",
  "Specialized Orthopedic Provocation Tests for precise root-cause diagnosis",
  "Nerve tension and radiculopathy screening (SLR, Slump, Spurling tests)",
  "Digital posture alignment and kinetic chain motion analysis",
  "Transparent, written treatment plan with expected session count and timelines",
  "Immediate first-session pain relief treatment (Laser / Mobilization)",
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices =
    selectedCategory === "all"
      ? CLINICAL_SERVICES
      : CLINICAL_SERVICES.filter((s) => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <main className="services-page">
      {/* ─── 1. STANDARDIZED UNIFORM SUBPAGE HERO ─── */}
      <section className="subpage-hero-banner">
        <div className="subpage-hero-content">
          <span className="subpage-kicker">
            <Sparkles size={14} /> EVIDENCE-BASED CLINICAL DIRECTORY
          </span>
          <h1 className="subpage-title">
            Specialized Physiotherapy &
            <br />
            <span className="text-highlight">Orthopedic Rehabilitation Services</span>
          </h1>
          <p className="subpage-lead">
            Every service is delivered 1-on-1 by certified Master’s-qualified (MPT) clinical specialists utilizing advanced European rehabilitation technology in Baner, Pune.
          </p>
        </div>
      </section>

      {/* ─── 2. FILTER TABS BAR ─── */}
      <div className="subpage-filter-bar">
        <div className="services-container">
          <div className="services-filter-tabs">
            <button
              type="button"
              className={`filter-tab-btn ${selectedCategory === "all" ? "active" : ""}`}
              onClick={() => setSelectedCategory("all")}
            >
              All Clinical Services (6)
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${selectedCategory === "spine" ? "active" : ""}`}
              onClick={() => setSelectedCategory("spine")}
            >
              Spine & Sciatica
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${selectedCategory === "sports" ? "active" : ""}`}
              onClick={() => setSelectedCategory("sports")}
            >
              Sports Medicine
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${selectedCategory === "joint" ? "active" : ""}`}
              onClick={() => setSelectedCategory("joint")}
            >
              Joint Preservation
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${selectedCategory === "post-surgical" ? "active" : ""}`}
              onClick={() => setSelectedCategory("post-surgical")}
            >
              Post-Op Rehab
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${selectedCategory === "doorstep" ? "active" : ""}`}
              onClick={() => setSelectedCategory("doorstep")}
            >
              Home Visit Care
            </button>
          </div>
        </div>
      </div>

      {/* ─── 3. SERVICES GRID ─── */}
      <section className="services-grid-section section-padding">
        <div className="services-container">
          <div className="clinical-services-grid">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.id} className="service-directory-card">
                  <div className="service-card-top-row">
                    <div className="service-icon-frame">
                      <Icon size={24} />
                    </div>
                    <span className="service-badge-pill">{service.badge}</span>
                  </div>

                  <span className="service-category-tag">{service.category}</span>
                  <h2 className="service-card-title">{service.title}</h2>
                  <p className="service-card-desc">{service.description}</p>

                  <div className="service-conditions-box">
                    <strong className="box-sub-title">Conditions Effectively Treated:</strong>
                    <ul className="conditions-mini-list">
                      {service.conditions.map((cond, i) => (
                        <li key={i}>
                          <CheckCircle2 size={15} className="text-azure" />
                          <span>{cond}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-modalities-strip">
                    <span className="modalities-strip-label">Techniques Applied:</span>
                    <div className="modalities-chips-wrap">
                      {service.modalities.map((tech, i) => (
                        <span key={i} className="tech-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="service-meta-footer">
                    <div className="meta-item">
                      <Clock size={15} className="text-azure" />
                      <span>{service.sessionLength}</span>
                    </div>
                    <div className="meta-item">
                      <Zap size={15} className="text-azure" />
                      <span>{service.timeline}</span>
                    </div>
                  </div>

                  <div className="service-card-cta">
                    <Link
                      to={`/appointment?service=${encodeURIComponent(service.linkParam)}`}
                      className="btn-service-book"
                    >
                      <Calendar size={16} />
                      <span>Book Evaluation for {service.category}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. WHAT YOUR INITIAL EVALUATION INCLUDES ─── */}
      <section className="evaluation-protocol-section section-padding">
        <div className="services-container">
          <div className="evaluation-card">
            <div className="evaluation-grid">
              <div className="eval-left">
                <span className="services-kicker text-ice">OUR CLINICAL PROMISE</span>
                <h2>What Your 45-Minute Initial Evaluation Includes</h2>
                <p>
                  We believe that accurate diagnosis is 80% of the cure. You will never receive a hurried 5-minute consultation. Here is what happens during your comprehensive initial appointment:
                </p>

                <div className="eval-btn-row">
                  <Link to="/appointment" className="btn-service-white">
                    <Calendar size={18} />
                    <span>Schedule Initial Assessment</span>
                  </Link>
                  <a href="tel:+919876543210" className="btn-service-outline-white">
                    <span>Call Helpline: +91 98765 43210</span>
                  </a>
                </div>
              </div>

              <div className="eval-right">
                <ul className="eval-checklist">
                  {EVALUATION_INCLUSIONS.map((item, idx) => (
                    <li key={idx}>
                      <div className="eval-check-icon">
                        <Check size={16} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
