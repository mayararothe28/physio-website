import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bone,
  Zap,
  Activity,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Clock,
  ThumbsUp,
  AlertCircle,
} from "lucide-react";
import "./TreatmentsPage.css";

const CLINICAL_TREATMENTS = [
  {
    id: "decompression",
    title: "Computerized Spinal Decompression",
    subtitle: "Non-Surgical Disc Bulge & Sciatica Retraction",
    category: "Spine & Nerves",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    successRate: "95% Non-Surgical Rate",
    overview:
      "A computer-calibrated motorized distraction system that applies gentle, logarithmic tension cycles to specific lumbar or cervical vertebrae. By reducing intradiscal pressure into negative vacuum levels, it encourages bulging disc material to retract away from pinched nerves.",
    symptomsTreated: [
      "Radiating leg pain, burning, or pins-and-needles (Sciatica)",
      "L4-L5 / L5-S1 lumbar disc protrusion or extrusion",
      "Cervical disc bulge causing arm pain and numbness",
      "Spinal stenosis and degenerative disc disease",
    ],
    scientificBasis:
      "Creates negative intradiscal pressure (-150 to -200 mmHg) inside the intervertebral disc, facilitating fluid, oxygen, and nutrient imbibition for natural cellular rehydration.",
    timeline: "Pain reduced by 70% in 10–14 sessions",
    bestFor: "Patients advised spinal surgery or microdiscectomy",
  },
  {
    id: "laser",
    title: "Class-IV High Power Laser Therapy",
    subtitle: "Deep-Tissue Cellular Photobiomodulation",
    category: "Cellular Healing",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80",
    successRate: "Rapid 3-Session Relief",
    overview:
      "Emits dual-wavelength infrared photons that penetrate up to 10cm through dense musculature and periosteum. Dramatically accelerates mitochondrial ATP synthesis, neutralizing acute inflammatory prostaglandins 3x faster than electrical modalities.",
    symptomsTreated: [
      "Acute tendonitis (Achilles, patellar, rotator cuff)",
      "Severe disc nerve root inflammation and neuralgia",
      "Plantar fasciitis and acute heel spurs",
      "Sports muscle tears and ligament sprains",
    ],
    scientificBasis:
      "Stimulates cytochrome c oxidase within mitochondria, generating a burst of ATP cellular energy that halts cytokine-driven inflammation and accelerates collagen fiber deposition.",
    timeline: "Noticeable pain decrease in 2–4 sessions",
    bestFor: "Acute inflammatory flare-ups and stubborn chronic tendinopathy",
  },
  {
    id: "matrix",
    title: "Matrix Rhythm Therapy (MaRhyThe®)",
    subtitle: "German Biological Cellular Vibration Therapy",
    category: "Adhesion Release",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    successRate: "91% Frozen Shoulder Cure",
    overview:
      "Developed at the University of Erlangen-Nuremberg, Germany. Delivers gentle rhythmic micro-oscillations at 8–12 Hz that match the natural biological oscillation of healthy skeletal muscle cells, washing away metabolic acidosis and releasing rigid adhesions.",
    symptomsTreated: [
      "Chronic Frozen Shoulder (Adhesive Capsulitis)",
      "Post-operative joint stiffness and surgical scar fibrosis",
      "Severe trapezius spasm and tension headaches",
      "Lymphedema and micro-circulatory blockages",
    ],
    scientificBasis:
      "Re-establishes cellular rhythm at 8-12 Hz, clearing extracellular metabolic waste and restoring physiological pH in chronically ischemic myofascial tissues.",
    timeline: "Substantial range of motion unlocked in 4–6 weeks",
    bestFor: "Patients with frozen joints who cannot tolerate forceful manual cracking",
  },
  {
    id: "tecar",
    title: "Targeted Radiofrequency (Tecar Therapy)",
    subtitle: "Deep Capacitive & Resistive Diathermy",
    category: "Joint Preservation",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    successRate: "92% Surgery Avoidance",
    overview:
      "Utilizes high-frequency electromagnetic energy (448 kHz) to generate controlled endogenous thermal energy deep inside joint capsules, articular cartilage, and dense ligaments where hot packs cannot reach.",
    symptomsTreated: [
      "Grade 1 to 3 Knee Osteoarthritis",
      "Chronic joint stiffness and morning crepitus",
      "Ligament laxity (ACL / MCL sprains)",
      "Deep gluteal syndrome and hip bursitis",
    ],
    scientificBasis:
      "Induces deep vasodilation, increasing microvascular capillary perfusion by up to 300% to stimulate fibroblast proliferation and cartilage matrix repair.",
    timeline: "Smooth walking and stairs in 2–3 weeks",
    bestFor: "Seniors with knee arthritis wanting to delay or avoid knee replacement",
  },
  {
    id: "dryneedling",
    title: "Clinical Trigger Point Dry Needling",
    subtitle: "Intramuscular Myofascial Knot Deactivation",
    category: "Manual Precision",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    successRate: "96% Immediate Tension Release",
    overview:
      "Certified physiotherapists use ultra-fine monofilament needles to target hyperirritable taut bands within deep skeletal muscles. Elicits a Local Twitch Response (LTR) that instantly de-tenses contracted muscle fibers.",
    symptomsTreated: [
      "Chronic neck stiffness and desk-worker tech neck",
      "Piriformis syndrome and deep gluteal nerve compression",
      "Myofascial pain syndrome and trigger points",
      "Tennis elbow and repetitive strain injuries",
    ],
    scientificBasis:
      "Mechanically disrupts the motor endplate, normalizing biochemical levels of substance P and calcitonin gene-related peptide (CGRP) within the trigger point.",
    timeline: "Immediate relief and range of motion freedom in 1–3 sessions",
    bestFor: "Deep, stubborn muscular knots that do not respond to massage or stretching",
  },
  {
    id: "gaitlab",
    title: "Digital Gait & Posture Motion Analysis",
    subtitle: "Computerized Biomechanical Tracking",
    category: "Diagnostics",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    successRate: "Precision Kinetic Correction",
    overview:
      "High-speed video motion capture sensors quantify dynamic joint angles, ground reaction forces, and cadence asymmetries during walking and running. Identifies faulty movement patterns that overload the spine and knees.",
    symptomsTreated: [
      "Recurrent sports injuries in runners and athletes",
      "Post-surgical limping and gait abnormalities",
      "Flat feet, over-pronation, and shin splints",
      "Pelvic tilt and leg-length functional discrepancies",
    ],
    scientificBasis:
      "Captures kinetic chain deficits at 120 FPS, identifying sub-millimeter knee valgus angles, pelvic drop, and cadence anomalies.",
    timeline: "Completed in 1 comprehensive 45-min diagnostic session",
    bestFor: "Athletes, runners, and post-surgery patients needing gait correction",
  },
];

export default function TreatmentsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const displayedTreatments =
    activeTab === "all"
      ? CLINICAL_TREATMENTS
      : CLINICAL_TREATMENTS.filter((t) => t.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <main className="treatments-page">
      {/* ─── 1. STANDARDIZED UNIFORM SUBPAGE HERO ─── */}
      <section className="subpage-hero-banner">
        <div className="subpage-hero-content">
          <span className="subpage-kicker">
            <Bone size={14} /> ADVANCED ORTHOPEDIC PROTOCOLS
          </span>
          <h1 className="subpage-title">
            Evidence-Based Treatments.
            <br />
            <span className="text-highlight">Proven Non-Surgical Results.</span>
          </h1>
          <p className="subpage-lead">
            Combining world-class medical modalities with certified clinical expertise in Baner, Pune. Every protocol is scientifically verified to accelerate tissue repair and prevent surgery.
          </p>
        </div>
      </section>

      {/* ─── 2. FILTER PILLS BAR ─── */}
      <div className="subpage-filter-bar">
        <div className="treatments-container">
          <div className="treatment-filter-pills">
            <button
              type="button"
              className={`filter-pill ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All Protocols ({CLINICAL_TREATMENTS.length})
            </button>
            <button
              type="button"
              className={`filter-pill ${activeTab === "spine" ? "active" : ""}`}
              onClick={() => setActiveTab("spine")}
            >
              Spine Decompression
            </button>
            <button
              type="button"
              className={`filter-pill ${activeTab === "cellular" ? "active" : ""}`}
              onClick={() => setActiveTab("cellular")}
            >
              Class-IV Laser
            </button>
            <button
              type="button"
              className={`filter-pill ${activeTab === "joint" ? "active" : ""}`}
              onClick={() => setActiveTab("joint")}
            >
              Tecar Joint Care
            </button>
            <button
              type="button"
              className={`filter-pill ${activeTab === "manual" ? "active" : ""}`}
              onClick={() => setActiveTab("manual")}
            >
              Dry Needling
            </button>
            <button
              type="button"
              className={`filter-pill ${activeTab === "diagnostic" ? "active" : ""}`}
              onClick={() => setActiveTab("diagnostic")}
            >
              Gait Lab
            </button>
          </div>
        </div>
      </div>

      {/* ─── 3. TREATMENTS DEEP DIVE ─── */}
      <section className="treatments-list-section section-padding">
        <div className="treatments-container">
          <div className="treatments-vertical-flow">
            {displayedTreatments.map((treatment) => (
              <article key={treatment.id} className="treatment-protocol-card scroll-reveal hover-lift">
                <div className="treatment-card-grid">
                  <div className="treatment-image-col">
                    <div className="treatment-img-wrap">
                      <img
                        src={treatment.image}
                        alt={treatment.title}
                        className="treatment-img"
                        loading="lazy"
                      />
                      <span className="treatment-success-badge">
                        <ShieldCheck size={14} /> {treatment.successRate}
                      </span>
                    </div>

                    <div className="treatment-quick-info">
                      <div className="quick-info-row">
                        <Clock size={15} className="text-azure" />
                        <div>
                          <strong>Expected Timeline:</strong>
                          <span>{treatment.timeline}</span>
                        </div>
                      </div>
                      <div className="quick-info-row">
                        <ThumbsUp size={15} className="text-azure" />
                        <div>
                          <strong>Best Indication:</strong>
                          <span>{treatment.bestFor}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="treatment-content-col">
                    <span className="treatment-cat-pill">{treatment.category}</span>
                    <h2 className="treatment-card-title">{treatment.title}</h2>
                    <span className="treatment-card-sub">{treatment.subtitle}</span>

                    <p className="treatment-card-overview">{treatment.overview}</p>

                    <div className="science-highlight-box">
                      <strong>How It Works Scientifically:</strong>
                      <p>{treatment.scientificBasis}</p>
                    </div>

                    <div className="treatment-symptoms-wrap">
                      <strong>Primary Symptoms Treated:</strong>
                      <ul className="symptoms-grid-list">
                        {treatment.symptomsTreated.map((sym, sIdx) => (
                          <li key={sIdx}>
                            <CheckCircle2 size={15} className="text-azure" />
                            <span>{sym}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="treatment-actions-row">
                      <Link
                        to={`/appointment?treatment=${encodeURIComponent(treatment.id)}`}
                        className="btn-treatment-book"
                      >
                        <Calendar size={16} />
                        <span>Book Evaluation for This Treatment</span>
                        <ArrowRight size={16} />
                      </Link>

                      <a
                        href="https://wa.me/919158347290?text=Hi,%20I%20have%20questions%20about%20your%20treatment%20protocols."
                        target="_blank"
                        rel="noreferrer"
                        className="btn-treatment-chat"
                      >
                        <span>Discuss with Doctor on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. BOTTOM CTA ─── */}
      <section className="treatments-bottom-cta">
        <div className="treatments-container bottom-cta-box">
          <div className="bottom-cta-inner">
            <span className="treatments-kicker text-ice">NEED CLINICAL GUIDANCE?</span>
            <h2>Unsure Which Treatment Protocol You Need?</h2>
            <p>
              You don’t have to guess. Our senior orthopedic physiotherapists will evaluate your joints, examine any imaging reports, and recommend the exact protocol tailored to your recovery.
            </p>
            <div className="bottom-cta-buttons">
              <Link to="/appointment" className="btn-treatment-white">
                <Calendar size={18} />
                <span>Book a Diagnostic Consultation</span>
              </Link>
              <a href="tel:+919158347290" className="btn-treatment-outline-white">
                <span>Call Helpline: +91 91583 47290</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
