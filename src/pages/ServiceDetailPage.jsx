import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Bone,
  Stethoscope,
  Zap,
  Activity,
  CheckCircle2,
  Clock,
  ArrowRight,
  MessageCircle,
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
      {/* ─── STANDARDIZED UNIFORM SUBPAGE HERO ─── */}
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
