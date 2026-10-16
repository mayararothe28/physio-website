import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CheckCircle2,
  ShieldCheck,
  Check,
  Calendar,
  Building2,
  Home,
  MessageCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { SERVICE_DETAILS } from "../data/serviceDetailsData";
import "./ServiceDetailPage.css";
import "./AppointmentPage.css";

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

const COND_MAP = {
  "back-pain": "spine",
  "slip-disc": "spine",
  "neck-pain": "neck",
  "postural-correction": "neck",
  "knee-pain": "knee",
  "hip-pelvis": "knee",
  "sports-injury": "sports",
  "frozen-shoulder": "shoulder",
  "post-operative": "postop",
  "stroke-neuro": "stroke",
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
    age: "",
    condition: COND_MAP[resolvedId] || "spine",
    careMode: "clinic",
    doctor: "any",
    date: "",
    timeSlot: "evening",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dateError, setDateError] = useState("");
  const [ageError, setAgeError] = useState("");

  // Scroll to top and sync condition on service change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setFormData((prev) => ({
      ...prev,
      condition: COND_MAP[resolvedId] || "spine",
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
    if (name === "date") {
      if (value) {
        const parts = value.split("-");
        if (parts[0] && parts[0].length > 4) {
          return;
        }
      }
      setFormData((prev) => ({ ...prev, date: value }));
      setDateError("");
      return;
    }
    if (name === "age") {
      const cleanDigits = value.replace(/\D/g, "").slice(0, 3);
      if (cleanDigits !== "" && Number(cleanDigits) > 100) {
        setAgeError("Age cannot be more than 100.");
        setFormData((prev) => ({ ...prev, age: "100" }));
      } else {
        setAgeError("");
        setFormData((prev) => ({ ...prev, age: cleanDigits }));
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
      setEmailError("Please enter a valid email address (e.g. name@gmail.com).");
      return;
    }
    if (!formData.date) {
      setDateError("Please select a valid appointment date.");
      return;
    }
    const parts = formData.date.split("-");
    if (!parts[0] || parts[0].length !== 4 || Number(parts[0]) < 2024 || Number(parts[0]) > 2099) {
      setDateError("Please enter a valid date with a 4-digit year (e.g. 2026).");
      return;
    }
    if (formData.age) {
      const numAge = Number(formData.age);
      if (numAge < 1 || numAge > 100) {
        setAgeError("Age must be between 1 and 100.");
        return;
      }
    }
    setPhoneError("");
    setEmailError("");
    setDateError("");
    setAgeError("");
    const randomRef = "RO-" + Math.floor(10000 + Math.random() * 90000);
    setBookingRef(randomRef);
    setIsSubmitted(true);
  }

  function handleResetAppointment() {
    setFormData({
      name: "",
      phone: "",
      email: "",
      age: "",
      condition: COND_MAP[resolvedId] || "spine",
      careMode: "clinic",
      doctor: "any",
      date: "",
      timeSlot: "evening",
      notes: "",
    });
    setPhoneError("");
    setEmailError("");
    setDateError("");
    setAgeError("");
    setIsSubmitted(false);
    setBookingRef("");
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

      {/* ─── 5. BOOK APPOINTMENT FORM (Replaces Case Study) ─── */}
      <section className="service-booking-section" id="book-consultation">
        <div className="detail-container">
          <div className="service-booking-wrapper">
            {isSubmitted ? (
              <div className="booking-success-card">
                <div className="success-icon-badge">
                  <CheckCircle2 size={44} />
                </div>
                <h2>Appointment Request Confirmed!</h2>
                <p className="success-lead">
                  Thank you, <strong>{formData.name}</strong>. Your appointment request has been logged in our clinical triage registry.
                </p>

                <div className="booking-summary-box">
                  <div className="summary-row">
                    <span>Booking Reference:</span>
                    <strong>{bookingRef}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Care Mode:</span>
                    <strong>{formData.careMode === "clinic" ? "In-Clinic Consultation" : "Doorstep Home Visit"}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Condition / Area:</span>
                    <strong>{formData.condition.toUpperCase()}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Preferred Slot:</span>
                    <strong>{formData.timeSlot.toUpperCase()} ({formData.date || "Next Available"})</strong>
                  </div>
                  <div className="summary-row">
                    <span>Assigned Doctor:</span>
                    <strong>{formData.doctor === "any" ? "First Available Specialist" : formData.doctor}</strong>
                  </div>
                </div>

                <div className="success-instruction-box">
                  <AlertCircle size={18} className="text-azure" />
                  <p>
                    Our patient care coordinator will call you at <strong>+91 {formData.phone}</strong> within 15 minutes to confirm your exact appointment timing and discuss report preparation.
                  </p>
                </div>

                <div className="success-actions">
                  <a
                    href={`https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20my%20booking%20reference%20is%20${bookingRef}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-success-whatsapp"
                  >
                    <MessageCircle size={16} />
                    <span>Confirm Faster via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleResetAppointment}
                    className="btn-success-reset"
                  >
                    Book Another Appointment
                  </button>
                </div>
              </div>
            ) : (
              <form className="booking-form-card" onSubmit={handleSubmit}>
                <div className="form-card-header">
                  <h3>Schedule Your Consultation for {detail.title}</h3>
                  <p>Book your 45-minute comprehensive biomechanical evaluation with our specialists</p>
                </div>

                {/* Section 1: Care Mode */}
                <div className="form-section-group">
                  <label className="section-label">1. Select Consultation Mode</label>
                  <div className="mode-toggle-grid">
                    <label
                      className={`mode-option-card ${formData.careMode === "clinic" ? "selected" : ""}`}
                    >
                      <input
                        type="radio"
                        name="careMode"
                        value="clinic"
                        checked={formData.careMode === "clinic"}
                        onChange={handleChange}
                      />
                      <Building2 size={20} className="text-azure" />
                      <div>
                        <strong>In-Clinic Visit</strong>
                        <span>Modern Private Treatment Suites</span>
                      </div>
                    </label>

                    <label
                      className={`mode-option-card ${formData.careMode === "home" ? "selected" : ""}`}
                    >
                      <input
                        type="radio"
                        name="careMode"
                        value="home"
                        checked={formData.careMode === "home"}
                        onChange={handleChange}
                      />
                      <Home size={20} className="text-azure" />
                      <div>
                        <strong>Doorstep Home Visit</strong>
                        <span>Therapist visits your residence</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Section 2: Condition / Pain Area */}
                <div className="form-section-group">
                  <label htmlFor="condition" className="section-label">
                    2. Primary Condition / Pain Area
                  </label>
                  <select
                    id="condition"
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    required
                  >
                    <option value="spine">Lower Back Pain / L4-L5 Slip Disc / Sciatica</option>
                    <option value="knee">Knee Pain / Osteoarthritis / Cartilage Stiffness</option>
                    <option value="neck">Neck Pain / Cervical Spondylosis / Tech Neck</option>
                    <option value="shoulder">Frozen Shoulder / Rotator Cuff Pinch / Tendonitis</option>
                    <option value="sports">Sports Injury / ACL Sprain / Muscle Tear</option>
                    <option value="postop">Post-Operative Surgery Rehabilitation (TKR/THR)</option>
                    <option value="stroke">Neurological Rehab / Stroke / Balance Restoration</option>
                    <option value="other">General Joint Pain / Second Opinion</option>
                  </select>
                </div>

                {/* Section 3: Specialist & Timing */}
                <div className="form-grid-2">
                  <div className="form-field">
                    <label htmlFor="doctor">Preferred Doctor</label>
                    <select
                      id="doctor"
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleChange}
                    >
                      <option value="any">First Available Senior Specialist</option>
                      <option value="Dr. Sumit Gupta, PT">Dr. Sumit Gupta (Chief Ortho &amp; Spine)</option>
                      <option value="Dr. Sneha Kulkarni, PT">Dr. Sneha Kulkarni (Sports &amp; Knee)</option>
                      <option value="Dr. Vikram Patil, PT">Dr. Vikram Patil (Neuro &amp; Post-Op)</option>
                      <option value="Dr. Ananya Deshmukh, PT">Dr. Ananya Deshmukh (Ergonomics &amp; Posture)</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="timeSlot">Preferred Time Slot</label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                    >
                      <option value="morning">Morning (8:00 AM – 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM – 4:00 PM)</option>
                      <option value="evening">Evening (4:00 PM – 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="date">Preferred Date (4-digit Year) *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    max="2099-12-31"
                    required
                  />
                  {dateError && <span className="field-error-msg">{dateError}</span>}
                </div>

                {/* Section 4: Patient Info */}
                <div className="form-grid-2">
                  <div className="form-field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="phone">Phone / WhatsApp Number (10 Digits) *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter 10-digit number (e.g. 9145875248)"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={10}
                      pattern="[0-9]{10}"
                      inputMode="numeric"
                      required
                    />
                    {phoneError && <span className="field-error-msg">{phoneError}</span>}
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-field">
                    <label htmlFor="email">Email Address (Gmail / Email) *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {emailError && <span className="field-error-msg">{emailError}</span>}
                  </div>

                  <div className="form-field">
                    <label htmlFor="age">Patient Age (Up to 3 Digits, Max 100) *</label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      min="1"
                      max="100"
                      placeholder="e.g. 42 (Max 100)"
                      value={formData.age}
                      onChange={handleChange}
                      required
                    />
                    {ageError && <span className="field-error-msg">{ageError}</span>}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="notes">Briefly describe your symptoms / MRI findings (Optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="3"
                    placeholder="e.g. Symptoms radiating to joints, pain duration, or previous treatments..."
                    value={formData.notes}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit-appointment">
                  <Calendar size={18} />
                  <span>Confirm &amp; Schedule Evaluation</span>
                  <ArrowRight size={17} />
                </button>

                <p className="form-disclaimer-text">
                  <ShieldCheck size={14} className="text-azure" /> Your personal medical data is strictly confidential under patient privacy standards.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}
