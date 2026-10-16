import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CheckCircle2,
  ShieldCheck,
  Check,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { SERVICE_DETAILS } from "../data/serviceDetailsData";
import "./ServiceDetailPage.css";
import "./ContactPage.css";

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
  "home-visit": "https://images.unsplash.com/photo-157609113654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
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

const CONCERN_MAP = {
  "back-pain": "spine",
  "slip-disc": "spine",
  "neck-pain": "neck",
  "postural-correction": "neck",
  "knee-pain": "knee",
  "hip-pelvis": "knee",
  "sports-injury": "sports",
  "frozen-shoulder": "shoulder",
  "post-operative": "postop",
  "stroke-neuro": "neuro",
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams();

  // Normalize id
  const resolvedId = ALIAS_MAP[serviceId?.toLowerCase()] || serviceId?.toLowerCase() || "back-pain";
  const detail = SERVICE_DETAILS[resolvedId] || SERVICE_DETAILS["back-pain"];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    concern: CONCERN_MAP[resolvedId] || "spine",
    careMode: "clinic",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [inquiryRef, setInquiryRef] = useState("");

  // Scroll to top and sync concern on service change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setFormData((prev) => ({
      ...prev,
      concern: CONCERN_MAP[resolvedId] || "spine",
    }));
  }, [resolvedId]);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "phone") {
      const cleanDigits = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: cleanDigits }));
      if (cleanDigits.length === 10) {
        setPhoneError("");
      }
      return;
    }
    if (name === "email") {
      setFormData((prev) => ({ ...prev, email: value }));
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value || emailRegex.test(value)) {
        setEmailError("");
      }
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setPhoneError("");
    setEmailError("");
    setInquiryRef(`REV-${Math.floor(100000 + Math.random() * 900000)}`);
    setSubmitted(true);
  }

  function handleResetContact() {
    setFormData({
      name: "",
      phone: "",
      email: "",
      concern: CONCERN_MAP[resolvedId] || "spine",
      careMode: "clinic",
      message: "",
    });
    setPhoneError("");
    setEmailError("");
    setSubmitted(false);
  }

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
            <h2>What We Diagnose &amp; Successfully Treat</h2>
            <p>
              If you are suffering from any of the following symptoms or have been advised surgery, our evidence-based protocols can help.
            </p>
          </div>

          <div className="two-col-clinical-grid">
            {/* Left: Symptoms Checklist */}
            <div className="clinical-col symptoms-col">
              <h3>Common Symptoms &amp; Daily Limitations</h3>
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

      {/* ─── 4. RECOVERY PROTOCOLS (4-Stage Progression) ─── */}
      {detail.protocols && (
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

      {/* ─── 5. CONTACT & INQUIRY FORM (Replaces Book Appointment Form) ─── */}
      <section className="service-contact-section" id="contact-consultation">
        <div className="detail-container">
          <div className="service-contact-wrapper">
            <div className="contact-form-card">
              {submitted ? (
                <div className="contact-success-state">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={44} className="text-emerald" />
                  </div>
                  <h3>Clinical Inquiry Received!</h3>
                  <p className="success-ref-code">
                    Reference Number: <strong>{inquiryRef}</strong>
                  </p>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name || "Patient"}</strong>. Our clinical coordination desk has received your request regarding <strong>{detail.title}</strong>. A senior physiotherapist will call you back at <strong>+91 {formData.phone}</strong> within 15–30 minutes to discuss your symptoms and next steps.
                  </p>

                  <div className="success-actions-row">
                    <a
                      href={`https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20just%20submitted%20an%20inquiry%20regarding%20${encodeURIComponent(detail.title)}%20(Ref:%20${inquiryRef}).`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-whatsapp-confirm"
                    >
                      <MessageCircle size={16} />
                      <span>Confirm via WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleResetContact}
                      className="btn-reset-form"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form" noValidate>
                  <div className="form-card-header">
                    <h3>Contact Our Specialists for {detail.title}</h3>
                    <p>Share your symptoms or MRI findings and our clinical care team will contact you promptly.</p>
                  </div>

                  <div className="form-input-group">
                    <label htmlFor="c-name">Patient Full Name *</label>
                    <input
                      type="text"
                      id="c-name"
                      name="name"
                      placeholder="e.g. Ramesh Kulkarni"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-two-col-row">
                    <div className="form-input-group">
                      <label htmlFor="c-phone">10-Digit Mobile Number *</label>
                      <div className="phone-input-wrap">
                        <span className="country-prefix">+91</span>
                        <input
                          type="tel"
                          id="c-phone"
                          name="phone"
                          placeholder="9876543210"
                          value={formData.phone}
                          onChange={handleChange}
                          maxLength={10}
                          required
                          className={`form-input ${phoneError ? "has-error" : ""}`}
                        />
                      </div>
                      {phoneError && <span className="field-error-msg">{phoneError}</span>}
                    </div>

                    <div className="form-input-group">
                      <label htmlFor="c-email">Email Address (Optional)</label>
                      <input
                        type="email"
                        id="c-email"
                        name="email"
                        placeholder="e.g. name@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input ${emailError ? "has-error" : ""}`}
                      />
                      {emailError && <span className="field-error-msg">{emailError}</span>}
                    </div>
                  </div>

                  <div className="form-two-col-row">
                    <div className="form-input-group">
                      <label htmlFor="c-concern">Primary Area of Concern</label>
                      <select
                        id="c-concern"
                        name="concern"
                        value={formData.concern}
                        onChange={handleChange}
                        className="form-input select-input"
                      >
                        <option value="spine">Lower Back / Slip Disc / Sciatica</option>
                        <option value="neck">Neck Pain &amp; Cervical Spondylosis</option>
                        <option value="knee">Knee Pain &amp; Osteoarthritis</option>
                        <option value="sports">Sports Injury &amp; Ligament Sprain</option>
                        <option value="shoulder">Frozen Shoulder &amp; Rotator Cuff</option>
                        <option value="postop">Post-Surgical Joint Rehabilitation</option>
                        <option value="neuro">Stroke &amp; Neuro Rehabilitation</option>
                        <option value="other">General Physical Evaluation</option>
                      </select>
                    </div>

                    <div className="form-input-group">
                      <label htmlFor="c-caremode">Preferred Care Mode</label>
                      <select
                        id="c-caremode"
                        name="careMode"
                        value={formData.careMode}
                        onChange={handleChange}
                        className="form-input select-input"
                      >
                        <option value="clinic">In-Clinic Consultation</option>
                        <option value="home">Home Visit Physiotherapy</option>
                        <option value="video">Online Video Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-input-group">
                    <label htmlFor="c-message">Describe Your Symptoms or Medical History *</label>
                    <textarea
                      id="c-message"
                      name="message"
                      rows="4"
                      placeholder="Please mention how long you have had pain, if you have MRI/X-ray scans, or any previous treatments..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-input textarea-input"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-send-inquiry">
                    <span>Submit Clinical Inquiry</span>
                    <ArrowRight size={17} />
                  </button>

                  <p className="form-privacy-note">
                    Your medical information is strictly confidential. No promotional spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
