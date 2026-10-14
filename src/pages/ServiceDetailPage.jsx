import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Bone,
  Stethoscope,
  Zap,
  Activity,
  CheckCircle2,
  Clock,
  Calendar,
  MessageCircle,
  Phone,
  ShieldCheck,
  Award,
  ChevronRight,
  ArrowRight,
  Check,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { SERVICE_DETAILS } from "../data/serviceDetailsData";
import "./ServiceDetailPage.css";

const ICON_MAP = {
  Bone,
  Stethoscope,
  Zap,
  Activity,
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

  return (
    <main className="service-detail-page">
      {/* ─── 1. BREADCRUMBS ─── */}
      <div className="detail-breadcrumb-bar">
        <div className="detail-container">
          <nav className="detail-breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={13} />
            <Link to="/services">Services</Link>
            <ChevronRight size={13} />
            <span className="current-crumb">{detail.title}</span>
          </nav>
        </div>
      </div>

      {/* ─── 2. SUBPAGE HERO BANNER ─── */}
      <section className="subpage-hero-banner">
        <div className="subpage-hero-content">
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

      {/* ─── 3. CLINICAL METRICS STRIP ─── */}
      {detail.metrics && detail.metrics.length > 0 && (
        <section className="service-metrics-strip">
          <div className="detail-container">
            <div className="metrics-grid">
              {detail.metrics.map((m, idx) => (
                <div key={idx} className="metric-box">
                  <span className="metric-value">{m.value}</span>
                  <strong className="metric-label">{m.label}</strong>
                  <span className="metric-sub">{m.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── 4. CLINICAL OVERVIEW (Symptoms & Root Causes) ─── */}
      <section className="detail-section symptoms-causes-section">
        <div className="detail-container">
          <div className="two-col-clinical-grid">
            {/* Left: Symptoms Checklist */}
            <div className="clinical-col symptoms-col">
              <span className="section-kicker-tag">SYMPTOM CHECKLIST</span>
              <h2>Common Symptoms & Daily Limitations</h2>
              <p className="col-desc">
                If you experience one or more of these clinical presentations, our targeted manual and non-surgical protocols can help:
              </p>

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
              <span className="section-kicker-tag">PATHOLOGY & DIAGNOSIS</span>
              <h2>Root Causes We Diagnose & Treat</h2>
              <p className="col-desc">
                Rather than prescribing temporary painkiller masks, we evaluate the exact biomechanical source:
              </p>

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
                    <strong>Invasive Surgeries Successfully Avoided:</strong>
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

      {/* ─── 5. 4-STEP NON-SURGICAL PROTOCOL ─── */}
      {detail.protocols && detail.protocols.length > 0 && (
        <section className="detail-section protocols-section">
          <div className="detail-container">
            <div className="section-title-wrap">
              <span className="section-kicker-tag">EVIDENCE-BASED RECOVERY PATHWAY</span>
              <h2>Our 4-Stage Clinical Protocol</h2>
              <p>
                A documented phase-based progression designed to resolve acute inflammation, restore joint mechanics, and build permanent muscular stability.
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

      {/* ─── 6. SPECIALIZED 6 CLINICAL PATHWAYS (Compact Cards) ─── */}
      {detail.relatedCards && detail.relatedCards.length > 0 && (
        <section className="detail-section related-cards-section" id="related-conditions">
          <div className="detail-container">
            <div className="section-title-wrap">
              <span className="section-kicker-tag">6 SPECIALIZED PROTOCOLS & DOCUMENTED PATHWAYS</span>
              <h2>Specialized Clinical Care Under {detail.title}</h2>
              <p>
                Structured, objective recovery pathways with documented clinical outcomes — designed to eliminate pain and avoid invasive surgeries.
              </p>
            </div>

            <div className="treatments-cards-grid">
              {detail.relatedCards.map((card, idx) => (
                <article
                  key={card.id || idx}
                  className="compact-treatment-card"
                >
                  {/* Card Thumbnail */}
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

                  {/* Card Body */}
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
                        to={`/appointment?service=${detail.serviceCode}&condition=${encodeURIComponent(
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

      {/* ─── 7. CASE STUDY SPOTLIGHT ─── */}
      {detail.caseStudy && (
        <section className="detail-section case-study-section">
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

      {/* ─── 8. FINAL CONSULTATION BANNER ─── */}
      <section className="service-footer-cta-section">
        <div className="detail-container">
          <div className="service-cta-banner">
            <div className="cta-banner-text">
              <span className="cta-kicker">RECOVER SAFELY WITHOUT SURGERY</span>
              <h2>Ready for Your Comprehensive 45-Minute Diagnostic Evaluation?</h2>
              <p>
                Consult directly with a hospital-experienced Master's degree (MPT) orthopedic physiotherapist with zero waiting time.
              </p>
            </div>

            <div className="cta-banner-actions">
              <Link
                to={`/appointment?service=${detail.serviceCode}`}
                className="btn-cta-book-large"
              >
                <Calendar size={18} />
                <span>Book Direct Evaluation</span>
              </Link>
              <a href="tel:+919145875248" className="btn-cta-call">
                <Phone size={17} />
                <span>Call Helpline: +91 91458 75248</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
