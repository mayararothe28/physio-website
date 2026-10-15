import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Bone,
  Stethoscope,
  Zap,
  Activity,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Phone,
  ShieldCheck,
  Check,
  Clock,
  ArrowRight,
} from "lucide-react";
import { SERVICE_DETAILS } from "../data/serviceDetailsData";
import "./ServiceDetailPage.css";

const ICON_MAP = {
  Bone,
  Stethoscope,
  Zap,
  Activity,
};

const SERVICE_IMAGES = {
  "back-pain": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
  "neck-pain": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  "sports-injury": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
  "knee-pain": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
};

// Aliases for seamless route matching
const ALIAS_MAP = {
  "spine": "back-pain",
  "back": "back-pain",
  "sciatica": "back-pain",
  "spine-sciatica": "back-pain",
  "spine-care": "back-pain",
  "neck": "neck-pain",
  "posture": "neck-pain",
  "sports": "sports-injury",
  "sports-injuries": "sports-injury",
  "sports-injury": "sports-injury",
  "acl": "sports-injury",
  "knee": "knee-pain",
  "joints": "knee-pain",
  "joint": "knee-pain",
  "joint-preservation": "knee-pain",
  "knee-preservation": "knee-pain",
  "osteoarthritis": "knee-pain",
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

  const IconComponent = ICON_MAP[detail.iconName] || Activity;
  const serviceImage = SERVICE_IMAGES[detail.id] || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80";

  return (
    <main className="service-detail-page">
      {/* ─── 1. STANDARDIZED SUBPAGE HERO BANNER ─── */}
      <section className="subpage-hero-banner">
        <div className="subpage-hero-content">
          <div className="subpage-breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/services">Services</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{detail.title}</span>
          </div>

          <span className="subpage-kicker">
            <IconComponent size={14} /> {detail.tag || "CLINICAL SPECIALIZATION"}
          </span>

          <h1 className="subpage-title">
            {detail.title}
            <br />
            <span className="text-highlight">{detail.highlight}</span>
          </h1>

          <p className="subpage-lead">
            {detail.subtitle}
          </p>

          <div className="subpage-hero-actions">
            <Link
              to={`/appointment?service=${detail.serviceCode}`}
              className="btn-hero-book-primary"
            >
              <Calendar size={16} />
              <span>Book 45-Min Assessment</span>
            </Link>
            <a
              href={`https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(
                detail.title
              )}.`}
              target="_blank"
              rel="noreferrer"
              className="btn-hero-whatsapp"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Doctor</span>
            </a>
          </div>
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

      {/* ─── 6. CLEAN BOTTOM ACTION CTA STRIP (Standardized with all pages) ─── */}
      <section className="service-bottom-cta-section">
        <div className="detail-container service-cta-inner">
          <span className="detail-kicker text-ice">TAKE THE FIRST STEP</span>
          <h2>Ready to Live Life Without Joint & Spine Pain?</h2>
          <p>
            Schedule your comprehensive 45-minute root-cause evaluation today. Experience evidence-based physical medicine with zero waiting time.
          </p>
          <div className="service-cta-btn-group">
            <Link
              to={`/appointment?service=${detail.serviceCode}`}
              className="btn-detail-white"
            >
              <Calendar size={17} />
              <span>Book Initial Assessment</span>
            </Link>
            <Link to="/contact" className="btn-detail-outline-white">
              <Phone size={17} />
              <span>Contact Clinic Desk</span>
            </Link>
            <a
              href={`https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(
                detail.title
              )}.`}
              target="_blank"
              rel="noreferrer"
              className="btn-detail-whatsapp"
            >
              <MessageCircle size={17} />
              <span>WhatsApp Doctor: +91 91458 75248</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
