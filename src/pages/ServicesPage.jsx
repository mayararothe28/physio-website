import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
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
  Stethoscope,
  MessageCircle,
} from "lucide-react";
import { SERVICE_DETAILS } from "../data/serviceDetailsData";
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
    title: "Doorstep Home Visit Physiotherapy Care",
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

const CATEGORY_CARDS_MAP = {
  spine: {
    key: "back-pain",
    title: "Spine & Sciatica Care",
    badge: "6 Non-Surgical Protocols",
    lead: "Targeted decompression, cold laser photobiomodulation, and core stabilizing protocols for lumbar disc bulge, cervical radiculopathy, and sciatica.",
    slug: "spine",
  },
  sports: {
    key: "sports-injury",
    title: "Sports Injuries & ACL Rehab",
    badge: "6 Athletic Recovery Protocols",
    lead: "Kinetic chain restoration, high-velocity deceleration drills, and radiofrequency tissue remodeling for ligament sprains, meniscus tears, and muscle pulls.",
    slug: "sports",
  },
  joint: {
    key: "knee-pain",
    title: "Joint & Knee Preservation",
    badge: "6 Cartilage Care Protocols",
    lead: "Cartilage-unloading biomechanics, Maitland joint glides, and cellular diathermy to eliminate bone-on-bone friction and avert knee replacement surgery.",
    slug: "knee",
  },
};

const ICON_MAP = {
  Bone,
  Stethoscope,
  Zap,
  Activity,
};

export default function ServicesPage() {
  const [searchParams] = useSearchParams();
  const initCat = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(initCat);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const activeCategoryInfo = CATEGORY_CARDS_MAP[selectedCategory];
  const activeDetailData = activeCategoryInfo ? SERVICE_DETAILS[activeCategoryInfo.key] : null;

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
              Spine & Sciatica (6 Cards)
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${selectedCategory === "sports" ? "active" : ""}`}
              onClick={() => setSelectedCategory("sports")}
            >
              Sports Medicine (6 Cards)
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${selectedCategory === "joint" ? "active" : ""}`}
              onClick={() => setSelectedCategory("joint")}
            >
              Joint Preservation (6 Cards)
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

      {/* ─── 3. DYNAMIC 6 SPECIALIZED CARDS VIEW (When a service category is selected) ─── */}
      {activeCategoryInfo && activeDetailData && activeDetailData.relatedCards && (
        <section className="services-specialized-cards-section section-padding">
          <div className="services-container">
            <div className="specialized-category-banner">
              <div className="specialized-banner-left">
                <span className="specialized-kicker">{activeCategoryInfo.badge}</span>
                <h2>{activeCategoryInfo.title} — 6 Specialized Clinical Protocols</h2>
                <p>{activeCategoryInfo.lead}</p>
              </div>
              <div className="specialized-banner-right">
                <Link
                  to={`/services/${activeCategoryInfo.slug}`}
                  className="btn-specialized-fullpage"
                >
                  <span>Open Dedicated Clinical Page</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="treatments-cards-grid">
              {activeDetailData.relatedCards.map((card, idx) => (
                <article
                  key={card.id || idx}
                  className={`compact-treatment-card scroll-reveal hover-lift delay-${(idx % 3) + 1}`}
                >
                  <div className="treatment-thumb-wrap">
                    <img
                      src={card.image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80"}
                      alt={card.title}
                      className="treatment-thumb-img"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80";
                      }}
                    />
                    <span className="treatment-pill-tag">{card.badge}</span>
                    <span className="treatment-time-badge">
                      <Clock size={11} /> {card.duration || "2–3 Weeks"}
                    </span>
                  </div>

                  <div className="treatment-card-content">
                    <h3 className="treatment-item-title" title={card.title}>
                      {card.title}
                    </h3>

                    <p className="treatment-snippet-desc">
                      {card.presentation || card.shortDesc}
                    </p>

                    <div className="treatment-spec-pill" title={card.protocol || card.modality}>
                      <span className="spec-label">Protocol:</span>
                      <span className="spec-val">{card.protocol || card.modality}</span>
                    </div>

                    <div className="treatment-outcome-chip" title={card.surgeryAvoided || card.outcome || card.recovery}>
                      <CheckCircle2 size={13} className="text-emerald" />
                      <span>{card.surgeryAvoided || card.outcome || card.recovery}</span>
                    </div>

                    <div className="treatment-action-row">
                      <Link
                        to={`/appointment?service=${activeDetailData.serviceCode}&condition=${encodeURIComponent(
                          card.conditionParam || card.title
                        )}`}
                        className="btn-card-book-appointment"
                      >
                        <Calendar size={14} />
                        <span>Book Appointment</span>
                      </Link>
                      <a
                        href={`https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20want%20to%20book%20an%20appointment%20for%20${encodeURIComponent(
                          card.title
                        )}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-card-whatsapp"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle size={15} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── 4. GENERAL CLINICAL SERVICES DIRECTORY GRID ─── */}
      <section className="services-grid-section section-padding">
        <div className="services-container">
          <div className="section-header-centered" style={{ marginBottom: "32px" }}>
            <span className="section-kicker">ALL CORE MODALITIES</span>
            <h2 className="section-main-title">
              {selectedCategory === "all" ? "Core Outpatient Services Directory" : `Primary Department: ${filteredServices[0]?.category || "Clinical Care"}`}
            </h2>
          </div>

          <div className="clinical-services-grid">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <article key={service.id} className={`service-directory-card scroll-reveal hover-lift delay-${(index % 3) + 1}`}>
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
                      to={`/services/${encodeURIComponent(service.linkParam)}`}
                      className="btn-service-view-cards"
                    >
                      <span>Explore 6 Clinical Cards</span>
                      <ArrowRight size={14} />
                    </Link>
                    <Link
                      to={`/appointment?service=${encodeURIComponent(service.linkParam)}`}
                      className="btn-service-book"
                    >
                      <Calendar size={15} />
                      <span>Book Evaluation</span>
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
          <div className="evaluation-card scroll-reveal">
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
                  <a href="tel:+919145875248" className="btn-service-outline-white">
                    <span>Call Helpline: +91 91458 75248</span>
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
