import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CheckCircle2,
  Check,
  MessageCircle,
  ArrowRight,
  Activity,
  AlertCircle,
  ShieldCheck,
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
  "home-visit": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
};

// Aliases for seamless route matching
const ALIAS_MAP = {
  "spine": "back-pain",
  "back": "back-pain",
  "sciatica": "back-pain",
  "spine-sciatica": "back-pain",
  "spine-care": "back-pain",
  "cupping": "dry-needling",
  "cupping-therapy": "dry-needling",
  "neck": "neck-pain",
  "cervical": "neck-pain",
  "posture": "postural-correction",
  "sports": "sports-injury",
  "sports-injuries": "sports-injury",
  "sports-injury": "sports-injury",
  "acl": "sports-injury",
  "shoulder": "frozen-shoulder",
  "ankle": "ankle-foot",
  "knee": "knee-pain",
  "joints": "knee-pain",
  "joint": "knee-pain",
  "joint-preservation": "knee-pain",
  "knee-preservation": "knee-pain",
  "osteoarthritis": "knee-pain",
  "postop": "post-operative",
  "hip": "hip-pelvis",
  "homecare": "home-visit",
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
  "hip-pelvis": "hip",
  "ankle-foot": "ankle",
  "stroke-neuro": "neuro",
  "dry-needling": "other",
  "home-visit": "other",
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams();

  // Normalize id
  const requestedId = serviceId?.toLowerCase();
  const resolvedId = ALIAS_MAP[requestedId] || requestedId;
  const detail = SERVICE_DETAILS[resolvedId];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    concern: CONCERN_MAP[resolvedId] || "other",
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
    setFormData({
      name: "",
      phone: "",
      email: "",
      concern: CONCERN_MAP[resolvedId] || "other",
      careMode: "clinic",
      message: "",
    });
    setSubmitted(false);
    setPhoneError("");
    setEmailError("");
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
      concern: CONCERN_MAP[resolvedId] || "other",
      careMode: "clinic",
      message: "",
    });
    setPhoneError("");
    setEmailError("");
    setSubmitted(false);
  }

  if (!detail) {
    return (
      <main className="service-detail-page">
        <section className="subpage-hero-banner">
          <div className="subpage-hero-content">
            <h1 className="subpage-title">Service Not Found</h1>
            <p className="subpage-lead">Choose a service to view its information.</p>
            <Link to="/services">View all services</Link>
          </div>
        </section>
      </main>
    );
  }

  const serviceImage = SERVICE_IMAGES[detail.id] || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80";

  return (
    <main className="service-detail-page">
      {/* ─── 1. CLEAN SUBPAGE HERO ─── */}
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

      {/* ─── 2. STRUCTURED CLINICAL INFORMATION (IN POINTS - NO CARDS) ─── */}
      <section className="service-info-points-section">
        <div className="detail-container">

          {/* Part A: Top Split (Clinical Photo Left, Overview Points Right) */}
          <div className="service-points-top-grid">
            <div className="service-points-photo-col">
              <img
                src={serviceImage}
                alt={detail.title}
                className="service-clean-photo"
                loading="lazy"
              />
            </div>

            <div className="service-points-overview-col">
              <h2 className="points-main-heading">Clinical Overview &amp; Root-Cause Approach</h2>
              <p className="points-lead-text">
                At <strong>RevitaOrtho</strong>, our treatment protocols for <strong>{detail.title}</strong> are engineered to eliminate acute pain and restore functional joint mobility without requiring surgical intervention or dependency on pain medication.
              </p>

              <div className="points-list">
                <div className="point-item">
                  <CheckCircle2 size={19} className="point-icon-blue" />
                  <div>
                    <strong>45-Minute Biomechanical Diagnosis:</strong> Comprehensive 1-on-1 assessment by hospital-certified Master&apos;s-degree (MPT) physiotherapists.
                  </div>
                </div>

                <div className="point-item">
                  <CheckCircle2 size={19} className="point-icon-blue" />
                  <div>
                    <strong>100% Non-Surgical Technologies:</strong> Computer-calibrated decompression, high-intensity laser, and evidence-based manual therapy.
                  </div>
                </div>

                <div className="point-item">
                  <CheckCircle2 size={19} className="point-icon-blue" />
                  <div>
                    <strong>Transparent Clinical Roadmap:</strong> Detailed explanations of your MRI/X-ray findings and recovery milestones in simple, clear language.
                  </div>
                </div>

                <div className="point-item">
                  <CheckCircle2 size={19} className="point-icon-blue" />
                  <div>
                    <strong>Relapse &amp; Re-Injury Prevention:</strong> Tailored home rehabilitation and ergonomic guidance to protect joints permanently.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Part B: Symptoms & Daily Limitations (In Points) */}
          {detail.symptoms && detail.symptoms.length > 0 && (
            <div className="service-info-block">
              <h3 className="points-section-heading">
                <AlertCircle size={22} className="points-heading-icon" />
                <span>Common Symptoms &amp; Daily Limitations Treated</span>
              </h3>
              <div className="points-grid-2col">
                {detail.symptoms.map((symp, idx) => (
                  <div key={idx} className="point-item">
                    <CheckCircle2 size={18} className="point-icon-blue" />
                    <span>{symp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Part C: Root Causes & Mechanical Factors (In Points) */}
          {detail.rootCauses && detail.rootCauses.length > 0 && (
            <div className="service-info-block">
              <h3 className="points-section-heading">
                <Activity size={22} className="points-heading-icon" />
                <span>Root Causes We Diagnose &amp; Correct</span>
              </h3>
              <div className="points-stack">
                {detail.rootCauses.map((cause, idx) => (
                  <div key={idx} className="point-item point-item-deep">
                    <CheckCircle2 size={18} className="point-icon-blue" />
                    <div>
                      <strong className="point-sub-title">{cause.title}:</strong>{" "}
                      <span className="point-sub-desc">{cause.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Part D: Clinical Recovery Roadmap (In Sequential Points) */}
          {detail.protocols && detail.protocols.length > 0 && (
            <div className="service-info-block">
              <h3 className="points-section-heading">
                <Activity size={22} className="points-heading-icon" />
                <span>Evidence-Based 4-Stage Recovery Roadmap</span>
              </h3>
              <div className="points-stack">
                {detail.protocols.map((proto) => (
                  <div key={proto.step} className="point-item point-item-stage">
                    <span className="point-stage-badge">Stage {proto.step}</span>
                    <div>
                      <strong className="point-sub-title">{proto.title}</strong>
                      <p className="point-stage-desc">{proto.desc}</p>
                      <div className="point-stage-modality">
                        <strong>Clinical Modality / Method:</strong> {proto.modality}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Part E: Surgeries Successfully Avoided (In Points) */}
          {detail.surgeriesAvoided && detail.surgeriesAvoided.length > 0 && (
            <div className="service-info-block">
              <h3 className="points-section-heading">
                <ShieldCheck size={22} className="points-heading-icon text-emerald" />
                <span>Surgeries &amp; Invasive Procedures Successfully Avoided</span>
              </h3>
              <div className="points-grid-2col">
                {detail.surgeriesAvoided.map((surg, idx) => (
                  <div key={idx} className="point-item">
                    <Check size={18} className="point-icon-green" />
                    <span><strong>{surg}</strong></span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ─── 3. CLINICAL INQUIRY & CONTACT FORM (Directly Below Points) ─── */}
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
                        <option value="hip">Hip &amp; Pelvic Pain</option>
                        <option value="sports">Sports Injury &amp; Ligament Sprain</option>
                        <option value="ankle">Ankle &amp; Foot Rehabilitation</option>
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
