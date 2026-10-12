import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Bone,
  Stethoscope,
  Zap,
  Activity,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  ChevronDown,
  Sparkles,
  ChevronRight,
  HelpCircle,
  FileText,
  BadgeCheck,
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
  const navigate = useNavigate();

  // Normalize id
  const resolvedId = ALIAS_MAP[serviceId?.toLowerCase()] || serviceId?.toLowerCase() || "back-pain";
  const detail = SERVICE_DETAILS[resolvedId] || SERVICE_DETAILS["back-pain"];

  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  // Scroll to top on condition change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [resolvedId]);

  const IconComponent = ICON_MAP[detail.iconName] || Activity;

  // Other conditions list for quick jump
  const otherConditions = Object.values(SERVICE_DETAILS).filter((s) => s.id !== detail.id);

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

      {/* ─── 3. 6 SPECIALIZED CLINICAL CONDITION & TREATMENT CARDS ─── */}
      {detail.relatedCards && detail.relatedCards.length > 0 && (
        <section className="detail-section related-cards-section" id="related-conditions">
          <div className="detail-container">
            <div className="section-title-wrap">
              <span className="section-kicker-tag">6 SPECIALIZED PROTOCOLS & CONDITIONS</span>
              <h2>6 Specialized Clinical Conditions We Treat Under {detail.title}</h2>
              <p>
                Explore our 6 documented non-surgical treatment pathways. Each protocol is tailored to target the exact anatomical root cause of pain and restore joint freedom.
              </p>
            </div>

            <div className="related-cards-grid">
              {detail.relatedCards.map((card, idx) => {
                const CardIcon = ICON_MAP[card.iconName] || Activity;
                return (
                  <article key={card.id || idx} className="clinical-focus-card scroll-reveal">
                    <div className="card-top-header">
                      <div className="card-icon-pill">
                        <CardIcon size={20} className="text-azure" />
                      </div>
                      <span className="card-badge-chip">{card.badge}</span>
                    </div>

                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-desc">{card.shortDesc}</p>

                    {/* Key Indicators / Symptoms */}
                    <div className="card-symptoms-box">
                      <strong className="card-box-label">Common Signs & Indications:</strong>
                      <ul className="card-mini-symptoms">
                        {card.symptoms?.map((sym, sIdx) => (
                          <li key={sIdx}>
                            <CheckCircle2 size={13} className="text-azure flex-shrink-0" />
                            <span>{sym}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Modality & Recovery */}
                    <div className="card-meta-chips">
                      <div className="card-meta-item">
                        <Clock size={13} className="text-azure" />
                        <span>{card.recovery}</span>
                      </div>
                      <div className="card-meta-item">
                        <ShieldCheck size={13} className="text-emerald" />
                        <span>Averts: {card.surgeryAvoided}</span>
                      </div>
                    </div>

                    <div className="card-modality-badge">
                      <strong>Modality:</strong> {card.modality}
                    </div>

                    {/* Action buttons */}
                    <div className="card-action-row">
                      <Link
                        to={`/appointment?service=${detail.serviceCode}&condition=${encodeURIComponent(
                          card.conditionParam || card.title
                        )}`}
                        className="btn-card-book"
                      >
                        <Calendar size={14} />
                        <span>Book Slot</span>
                        <ArrowRight size={13} />
                      </Link>

                      <a
                        href={`https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20want%20to%20consult%20regarding%20${encodeURIComponent(
                          card.title
                        )}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-card-wa"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle size={15} />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── 4. SYMPTOMS CHECKLIST ("ARE YOU EXPERIENCING THESE?") ─── */}
      <section className="detail-section symptoms-section">
        <div className="detail-container">
          <div className="section-title-wrap">
            <span className="section-kicker-tag">PATIENT SYMPTOM CHECK</span>
            <h2>Are You Experiencing Any of These Symptoms?</h2>
            <p>
              If you recognize one or more of these clinical warning signs, our specialized protocol can help deactivate pain and restore mobility before joint or nerve damage worsens.
            </p>
          </div>

          <div className="symptoms-grid">
            {detail.symptoms?.map((sym, idx) => (
              <div key={idx} className="symptom-card scroll-reveal">
                <div className="symptom-icon-box">
                  <AlertCircle size={20} className="symptom-ico" />
                </div>
                <p className="symptom-text">{sym}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. ROOT CAUSES EXPLAINED ─── */}
      <section className="detail-section root-causes-section">
        <div className="detail-container">
          <div className="section-title-wrap">
            <span className="section-kicker-tag">UNDERLYING BIOMECHANICS</span>
            <h2>Understanding the Root Causes of Your Discomfort</h2>
            <p>
              We treat the biomechanical root cause, not just temporary surface symptoms. Here is what is happening inside the joint and nervous system.
            </p>
          </div>

          <div className="root-causes-grid">
            {detail.rootCauses?.map((rc, idx) => (
              <div key={idx} className="root-cause-card scroll-reveal">
                <span className="root-cause-index">0{idx + 1}</span>
                <h3>{rc.title}</h3>
                <p>{rc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. OUR 4-STEP CLINICAL TREATMENT PROTOCOL ─── */}
      <section className="detail-section protocol-section">
        <div className="detail-container">
          <div className="section-title-wrap">
            <span className="section-kicker-tag">EVIDENCE-BASED CARE</span>
            <h2>Our Structured 4-Step Treatment Protocol</h2>
            <p>
              Every session follows an objective, milestone-driven pathway to relieve pain, restore joint decompression, and rebuild permanent muscular strength.
            </p>
          </div>

          <div className="protocol-steps-grid">
            {detail.protocols?.map((p, idx) => (
              <div key={idx} className="protocol-step-card scroll-reveal">
                <div className="step-card-header">
                  <span className="step-badge">{p.step}</span>
                  <span className="step-modality-pill">{p.modality}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. SURGERIES & INVASIONS AVOIDED ─── */}
      <section className="detail-section surgeries-avoided-section">
        <div className="detail-container">
          <div className="surgeries-avoided-card scroll-reveal">
            <div className="surgeries-card-header">
              <ShieldCheck size={36} className="text-emerald" />
              <div>
                <h2>Invasive Procedures & Surgeries Our Protocol Helps Avert</h2>
                <p>
                  Before agreeing to invasive surgical interventions, our evidence-based physical medicine restores natural spinal and joint biomechanics.
                </p>
              </div>
            </div>

            <div className="surgeries-grid">
              {detail.surgeriesAvoided?.map((surg, idx) => (
                <div key={idx} className="surgery-item">
                  <span className="surgery-cross-badge">&times;</span>
                  <span>{surg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. DOCUMENTED CASE STUDY & PROVEN OUTCOME ─── */}
      {detail.caseStudy && (
        <section className="detail-section case-study-section">
          <div className="detail-container">
            <div className="case-study-banner scroll-reveal">
              <div className="case-study-left">
                <span className="case-kicker">
                  <BadgeCheck size={16} /> VERIFIED CLINICAL RECOVERY ARCHIVE
                </span>
                <h3>{detail.caseStudy.title}</h3>
                <span className="case-patient-tag">{detail.caseStudy.patient}</span>
                <div className="case-outcome-pill">
                  <CheckCircle2 size={16} />
                  <strong>{detail.caseStudy.outcome}</strong>
                </div>
              </div>

              <div className="case-study-right">
                <blockquote className="case-quote">"{detail.caseStudy.quote}"</blockquote>
                <Link to="/our-work" className="case-view-all-link">
                  <span>View All Clinical Recovery Archives &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── 8. PATIENT HOME CARE & DAILY TIPS ─── */}
      <section className="detail-section home-tips-section">
        <div className="detail-container">
          <div className="section-title-wrap">
            <span className="section-kicker-tag">PATIENT DAILY GUIDANCE</span>
            <h2>Helpful Self-Care Advice You Can Apply Immediately</h2>
            <p>
              Small ergonomic adjustments and habit changes make a substantial difference in reducing daily irritation while you recover.
            </p>
          </div>

          <div className="home-tips-grid">
            {detail.homeTips?.map((tip, idx) => (
              <div key={idx} className="home-tip-card scroll-reveal">
                <div className="tip-header-row">
                  <span className="tip-num">Tip {idx + 1}</span>
                  <CheckCircle2 size={18} className="text-emerald" />
                </div>
                <h3>{tip.title}</h3>
                <p>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. CONDITION-SPECIFIC FAQS ─── */}
      <section className="detail-section condition-faq-section">
        <div className="detail-container">
          <div className="section-title-wrap">
            <span className="section-kicker-tag">COMMON QUESTIONS</span>
            <h2>Frequently Asked Questions About {detail.title}</h2>
            <p>Direct answers from our senior physical therapists regarding recovery timelines and treatment options.</p>
          </div>

          <div className="detail-faq-accordion scroll-reveal">
            {detail.faqs?.map((faq, idx) => (
              <div
                key={idx}
                className={`detail-faq-item ${openFaqIdx === idx ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="detail-faq-trigger"
                  onClick={() => setOpenFaqIdx(openFaqIdx === idx ? -1 : idx)}
                  aria-expanded={openFaqIdx === idx}
                >
                  <span className="faq-q-text">{faq.question}</span>
                  <ChevronDown
                    size={19}
                    className={`faq-chev-ico ${openFaqIdx === idx ? "rotated" : ""}`}
                  />
                </button>
                {openFaqIdx === idx && (
                  <div className="detail-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. EXPLORE OTHER SPECIALIZED SERVICES BAR ─── */}
      <section className="detail-section other-services-section">
        <div className="detail-container">
          <div className="other-services-header">
            <h3>Explore Other Specialized Conditions We Treat</h3>
            <Link to="/services" className="link-all-services">
              View All Services &rarr;
            </Link>
          </div>

          <div className="other-services-grid">
            {otherConditions.map((other) => {
              const OtherIcon = ICON_MAP[other.iconName] || Activity;
              return (
                <div key={other.id} className="other-service-card">
                  <div className="other-card-top">
                    <OtherIcon size={22} className="text-azure" />
                    <span className="other-tag">{other.tag}</span>
                  </div>
                  <h4>{other.title}</h4>
                  <p>{other.subtitle.slice(0, 100)}...</p>
                  <Link to={`/services/${other.id}`} className="other-learn-link">
                    <span>Learn More About {other.title}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 11. BOTTOM APPOINTMENT ACTION BANNER ─── */}
      <section className="detail-bottom-cta">
        <div className="detail-container">
          <div className="detail-cta-box scroll-reveal">
            <h2>Ready to Relieve Your {detail.title}?</h2>
            <p>
              Schedule your comprehensive 45-minute clinical evaluation at RevitaOrtho today. We offer flexible in-clinic and doorstep home visit consultation slots.
            </p>
            <div className="cta-box-buttons">
              <Link
                to={`/appointment?service=${detail.serviceCode}`}
                className="btn-cta-white"
              >
                <Calendar size={18} />
                <span>Book Initial Evaluation Now</span>
              </Link>
              <a href="tel:+919145875248" className="btn-cta-outline-white">
                <Phone size={17} />
                <span>Call Helpline: 9145875248</span>
              </a>
              <a
                href={`https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(
                  detail.title
                )}.`}
                target="_blank"
                rel="noreferrer"
                className="btn-cta-whatsapp"
              >
                <MessageCircle size={17} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
