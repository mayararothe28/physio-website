import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CheckCircle2,
  ShieldCheck,
  Check,
} from "lucide-react";
import { SERVICE_DETAILS } from "../data/serviceDetailsData";
import "./ServiceDetailPage.css";

const SERVICE_IMAGES = {
  "back-pain": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
  "neck-pain": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  "sports-injury": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
  "knee-pain": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
  "frozen-shoulder": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
  "post-operative": "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80",
  "dry-needling": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
  "hip-pelvis": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
  "slip-disc": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
  "ankle-foot": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
  "postural-correction": "https://images.unsplash.com/photo-1594824813637-2900746b14ea?auto=format&fit=crop&w=800&q=80",
  "home-visit": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
};

// Aliases for seamless route matching
const ALIAS_MAP = {
  "spine": "back-pain",
  "back": "back-pain",
  "sciatica": "back-pain",
  "spine-sciatica": "back-pain",
  "spine-care": "back-pain",
  "slip-disc": "back-pain",
  "dry-needling": "back-pain",
  "cupping": "back-pain",
  "neck": "neck-pain",
  "cervical": "neck-pain",
  "posture": "neck-pain",
  "postural-correction": "neck-pain",
  "sports": "sports-injury",
  "sports-injuries": "sports-injury",
  "sports-injury": "sports-injury",
  "acl": "sports-injury",
  "shoulder": "sports-injury",
  "frozen-shoulder": "sports-injury",
  "ankle": "sports-injury",
  "ankle-foot": "sports-injury",
  "knee": "knee-pain",
  "joints": "knee-pain",
  "joint": "knee-pain",
  "joint-preservation": "knee-pain",
  "knee-preservation": "knee-pain",
  "osteoarthritis": "knee-pain",
  "postop": "knee-pain",
  "post-operative": "knee-pain",
  "hip": "knee-pain",
  "hip-pelvis": "knee-pain",
  "homecare": "back-pain",
  "home-visit": "back-pain",
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams();

  // Normalize id
  const resolvedId = ALIAS_MAP[serviceId?.toLowerCase()] || serviceId?.toLowerCase() || "back-pain";
  const detail = SERVICE_DETAILS[resolvedId] || SERVICE_DETAILS["back-pain"];

  // Scroll to top on condition change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [resolvedId]);

  const serviceImage = SERVICE_IMAGES[detail.id] || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80";

  return (
    <main className="service-detail-page">
      {/* ─── 1. STANDARDIZED SUBPAGE HERO BANNER ─── */}
      <section className="subpage-hero-banner">
        <div className="subpage-hero-content">
          <h1 className="subpage-title">
            {detail.title}
            <br />
            <span className="text-highlight">{detail.highlight}</span>
          </h1>

          <p className="subpage-lead">
            {detail.subtitle}
          </p>
        </div>
      </section>

      {/* ─── 2. CLINICAL OVERVIEW & APPROACH (Split Layout) ─── */}
      <section className="service-overview-section section-padding">
        <div className="detail-container">
          <div className="service-story-grid">
            {/* Left: Professional Treatment Photo */}
            <div className="service-img-col">
              <div className="service-image-wrapper">
                <img
                  src={serviceImage}
                  alt={detail.title}
                  className="service-feature-img"
                  loading="lazy"
                />
                <div className="service-badge-pill">
                  <ShieldCheck size={20} className="text-emerald" />
                  <div>
                    <strong>94% Surgery Avoidance</strong>
                    <span>Documented Clinical Outcomes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Overview & Clinical Approach */}
            <div className="service-text-col">
              <span className="detail-kicker">CLINICAL APPROACH</span>
              <h2 className="detail-section-heading">
                Root-Cause Rehabilitation for {detail.title}
              </h2>
              <p className="detail-lead-p">
                At <strong>RevitaOrtho</strong>, our treatment protocols are designed to eliminate pain and restore natural movement by targeting the exact mechanical imbalance — without requiring surgery or long-term medication.
              </p>
              <p className="detail-body-p">
                Every patient undergoes a thorough 45-minute diagnostic evaluation conducted directly by a senior Master's-degree (MPT) physiotherapist. We review your MRI/X-ray reports, perform orthopedic tests, and deliver a transparent, written recovery roadmap.
              </p>

              <div className="detail-pillars-grid">
                <div className="detail-pillar-card">
                  <CheckCircle2 size={18} className="pillar-check-icon" />
                  <div>
                    <strong>1-on-1 Doctor Care</strong>
                    <p>Personally administered by certified senior specialists, never junior helpers.</p>
                  </div>
                </div>

                <div className="detail-pillar-card">
                  <CheckCircle2 size={18} className="pillar-check-icon" />
                  <div>
                    <strong>Non-Surgical Technologies</strong>
                    <p>Computerized spinal decompression, Class-IV laser, and targeted radiofrequency.</p>
                  </div>
                </div>

                <div className="detail-pillar-card">
                  <CheckCircle2 size={18} className="pillar-check-icon" />
                  <div>
                    <strong>Zero Confusing Jargon</strong>
                    <p>Clear explanations of your condition and recovery milestones in simple words.</p>
                  </div>
                </div>

                <div className="detail-pillar-card">
                  <CheckCircle2 size={18} className="pillar-check-icon" />
                  <div>
                    <strong>Relapse Prevention</strong>
                    <p>Custom home exercise prescriptions so your muscles stay strong and pain stays away.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. SYMPTOMS & ROOT CAUSES (2-Column Grid) ─── */}
      <section className="service-symptoms-section section-padding">
        <div className="detail-container">
          <div className="section-head-center">
            <span className="detail-kicker">CONDITIONS & DIAGNOSIS</span>
            <h2>What We Diagnose & Successfully Treat</h2>
            <p>
              If you are suffering from any of the following symptoms or have been advised surgery, our evidence-based protocols can help.
            </p>
          </div>

          <div className="two-col-clinical-grid">
            {/* Left: Symptoms Checklist */}
            <div className="clinical-col symptoms-col">
              <h3>Common Symptoms & Daily Limitations</h3>
              <div className="symptoms-list">
                {detail.symptoms?.map((symp, idx) => (
                  <div key={idx} className="symptom-item">
                    <CheckCircle2 size={18} className="symp-icon text-azure" />
                    <span>{symp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Root Causes & Surgeries Avoided */}
            <div className="clinical-col causes-col">
              <h3>Root Causes We Treat</h3>
              <div className="root-causes-stack">
                {detail.rootCauses?.map((cause, idx) => (
                  <div key={idx} className="cause-card">
                    <h4>{cause.title}</h4>
                    <p>{cause.desc}</p>
                  </div>
                ))}
              </div>

              {/* Surgeries Avoided Box */}
              {detail.surgeriesAvoided && detail.surgeriesAvoided.length > 0 && (
                <div className="surgeries-avoided-card">
                  <div className="avoided-header">
                    <ShieldCheck size={20} className="text-emerald" />
                    <strong>Surgeries Successfully Avoided:</strong>
                  </div>
                  <div className="avoided-chips-wrap">
                    {detail.surgeriesAvoided.map((surg, sIdx) => (
                      <span key={sIdx} className="avoided-chip">
                        <Check size={12} /> {surg}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. OUR 4-STAGE RECOVERY PATHWAY ─── */}
      {detail.protocols && detail.protocols.length > 0 && (
        <section className="service-protocols-section section-padding">
          <div className="detail-container">
            <div className="section-head-center">
              <span className="detail-kicker">RECOVERY ROADMAP</span>
              <h2>Our 4-Stage Clinical Protocol</h2>
              <p>
                A documented phase-based progression engineered to relieve acute pain, restore joint mobility, and rebuild lasting strength.
              </p>
            </div>

            <div className="protocols-grid">
              {detail.protocols.map((proto) => (
                <div key={proto.step} className="protocol-card">
                  <div className="protocol-step-badge">{proto.step}</div>
                  <h3 className="protocol-title">{proto.title}</h3>
                  <p className="protocol-desc">{proto.desc}</p>
                  <div className="protocol-modality">
                    <strong>Technology / Method:</strong>
                    <span>{proto.modality}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── 5. CASE STUDY / VERIFIED OUTCOME SPOTLIGHT ─── */}
      {detail.caseStudy && (
        <section className="service-case-study-section section-padding">
          <div className="detail-container">
            <div className="case-study-card">
              <div className="case-study-left">
                <span className="case-study-tag">VERIFIED CLINICAL OUTCOME</span>
                <h3>{detail.caseStudy.title}</h3>
                <span className="case-study-patient">{detail.caseStudy.patient}</span>
                <div className="case-study-outcome-badge">
                  <CheckCircle2 size={16} />
                  <span>{detail.caseStudy.outcome}</span>
                </div>
              </div>
              <div className="case-study-right">
                <blockquote className="case-study-quote">
                  "{detail.caseStudy.quote}"
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
