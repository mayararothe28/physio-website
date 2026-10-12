import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Bone,
  Stethoscope,
  Zap,
  Activity,
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  ChevronRight,
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
      {/* ─── 1. BREADCRUMB BAR ─── */}
      <nav className="detail-breadcrumb-bar" aria-label="Breadcrumb">
        <div className="detail-container">
          <ol className="breadcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <ChevronRight size={14} className="crumb-sep" />
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <ChevronRight size={14} className="crumb-sep" />
            </li>
            <li className="crumb-current" aria-current="page">
              {detail.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* ─── 2. HERO BANNER ─── */}
      <section className="detail-hero-section">
        <div className="detail-container">
          <div className="detail-hero-grid">
            <div className="detail-hero-content">
              <div className="detail-kicker-pill">
                <IconComponent size={16} className="text-azure" />
                <span>{detail.tag}</span>
              </div>

              <h1 className="detail-hero-title">
                {detail.title}
                <br />
                <span className="text-highlight-gradient">{detail.highlight}</span>
              </h1>

              <p className="detail-hero-subtitle">{detail.subtitle}</p>

              {/* Key Clinical Metrics */}
              <div className="detail-metrics-row">
                {detail.metrics?.map((m, idx) => (
                  <div key={idx} className="metric-chip">
                    <strong className="metric-val">{m.value}</strong>
                    <span className="metric-lbl">{m.label}</span>
                    <small className="metric-sub">{m.sub}</small>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="detail-cta-row">
                <Link
                  to={`/appointment?service=${detail.serviceCode}`}
                  className="btn-detail-primary"
                >
                  <Calendar size={18} />
                  <span>Book Consultation for {detail.title}</span>
                  <ArrowRight size={16} />
                </Link>

                <a href="tel:+919145875248" className="btn-detail-secondary">
                  <Phone size={17} />
                  <span>Helpline: 9145875248</span>
                </a>

                <a
                  href={`https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(
                    detail.title
                  )}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-detail-whatsapp"
                >
                  <MessageCircle size={17} />
                  <span>WhatsApp Doctor</span>
                </a>
              </div>
            </div>

            {/* Quick Consultation Card */}
            <div className="detail-hero-sidecard">
              <div className="condition-summary-card">
                <div className="summary-card-header">
                  <ShieldCheck size={26} className="text-emerald" />
                  <div>
                    <h3>100% Non-Surgical Care</h3>
                    <span>Specialized MPT Clinicians</span>
                  </div>
                </div>

                <div className="summary-card-points">
                  <div className="point-item">
                    <CheckCircle2 size={16} className="text-emerald point-ico" />
                    <span>Comprehensive 45-Min Biomechanical Diagnostic</span>
                  </div>
                  <div className="point-item">
                    <CheckCircle2 size={16} className="text-emerald point-ico" />
                    <span>European Laser & Decompression Technology</span>
                  </div>
                  <div className="point-item">
                    <CheckCircle2 size={16} className="text-emerald point-ico" />
                    <span>Dedicated 1-on-1 Specialist Attention</span>
                  </div>
                  <div className="point-item">
                    <CheckCircle2 size={16} className="text-emerald point-ico" />
                    <span>Insurance Reimbursement Support</span>
                  </div>
                </div>

                <div className="summary-action-box">
                  <Link
                    to={`/appointment?service=${detail.serviceCode}`}
                    className="btn-card-consult"
                  >
                    <span>Reserve Evaluation Slot</span>
                    <ArrowRight size={15} />
                  </Link>
                  <span className="guarantee-text">Zero waiting time policy at clinic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. 6 SPECIALIZED CLINICAL CONDITION & TREATMENT CARDS (OUR-WORK STYLE) ─── */}
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

            <div className="cases-cards-grid">
              {detail.relatedCards.map((card, idx) => (
                <article key={card.id || idx} className={`case-archive-card scroll-reveal hover-lift delay-${(idx % 3) + 1}`}>
                  <div className="case-img-box">
                    <img src={card.image} alt={card.title} className="case-img" loading="lazy" />
                    <span className="case-tag-badge">{card.badge}</span>
                    <span className="case-duration-badge">
                      <Clock size={13} /> {card.duration}
                    </span>
                  </div>

                  <div className="case-card-body">
                    <h3 className="case-title">{card.title}</h3>
                    <span className="case-patient-meta">{card.categoryMeta}</span>

                    <div className="case-condition-block">
                      <strong className="block-head text-danger">Initial Symptoms & Presentation:</strong>
                      <p>{card.presentation}</p>
                    </div>

                    <div className="case-condition-block">
                      <strong className="block-head text-azure">Targeted Clinical Protocol:</strong>
                      <p>{card.protocol}</p>
                    </div>

                    <div className="case-result-box">
                      <div className="result-icon-dot">
                        <CheckCircle2 size={18} />
                      </div>
                      <div>
                        <strong>Documented Clinical Outcome:</strong>
                        <p>{card.outcome}</p>
                        <span className="recovery-rate-pill">{card.surgeryAvoided}</span>
                      </div>
                    </div>

                    <div className="case-action-btn-row">
                      <Link
                        to={`/appointment?service=${detail.serviceCode}&condition=${encodeURIComponent(
                          card.conditionParam || card.title
                        )}`}
                        className="btn-case-book"
                      >
                        <span>Schedule Consultation</span>
                        <ArrowRight size={15} />
                      </Link>
                      <a
                        href={`https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20want%20to%20consult%20regarding%20${encodeURIComponent(
                          card.title
                        )}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-case-wa"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
