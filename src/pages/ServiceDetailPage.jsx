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

      {/* ─── SPECIALIZED CONDITION & TREATMENT CARDS (COMPACT & DISTINCT DESIGN) ─── */}
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
                  className={`compact-treatment-card scroll-reveal hover-lift delay-${(idx % 3) + 1}`}
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

                    {/* Book Appointment CTA & WhatsApp at bottom of every card */}
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
    </main>
  );
}
