import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Home,
  MessageCircle,
  AlertCircle,
  ArrowRight,
  Phone,
} from "lucide-react";
import "./AppointmentPage.css";

export default function AppointmentPage() {
  const [searchParams] = useSearchParams();

  // Read initial values from URL query parameters
  const COND_MAP = {
    "back-pain": "spine",
    "neck-pain": "neck",
    "sports-injury": "sports",
    "knee-pain": "knee",
  };
  const rawCond = searchParams.get("condition") || searchParams.get("service") || "";
  const initCondition = COND_MAP[rawCond] || rawCond || "spine";
  const initMode = searchParams.get("mode") || "clinic";
  const initTime = searchParams.get("time") || "evening";
  const initDoctor = searchParams.get("doctor") || "any";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    condition: initCondition,
    careMode: initMode,
    doctor: initDoctor,
    date: "",
    timeSlot: initTime,
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dateError, setDateError] = useState("");
  const [ageError, setAgeError] = useState("");

  useEffect(() => {
    // If query params change, update formData
    const newRaw = searchParams.get("condition") || searchParams.get("service");
    if (newRaw) {
      const resolved = COND_MAP[newRaw] || newRaw;
      setFormData((prev) => ({ ...prev, condition: resolved }));
    }
    if (searchParams.get("mode")) {
      setFormData((prev) => ({ ...prev, careMode: searchParams.get("mode") }));
    }
    if (searchParams.get("doctor")) {
      setFormData((prev) => ({ ...prev, doctor: searchParams.get("doctor") }));
    }
  }, [searchParams]);

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
    window.scrollTo({ top: 100, behavior: "smooth" });
  }

  function handleResetAppointment() {
    setFormData({
      name: "",
      phone: "",
      email: "",
      age: "",
      condition: searchParams.get("condition") || "spine",
      careMode: searchParams.get("mode") || "clinic",
      doctor: searchParams.get("doctor") || "any",
      date: "",
      timeSlot: searchParams.get("time") || "evening",
      notes: "",
    });
    setPhoneError("");
    setEmailError("");
    setDateError("");
    setAgeError("");
    setIsSubmitted(false);
    setBookingRef("");
    window.scrollTo({ top: 100, behavior: "smooth" });
  }

  return (
    <main className="appointment-page">
      {/* ─── 1. HERO ─── */}
      <section className="subpage-hero-banner">
        <div className="subpage-hero-content">
          <h1 className="subpage-title">
            Schedule Your Comprehensive
            <br />
            <span className="text-highlight">45-Minute Biomechanical Evaluation</span>
          </h1>
          <p className="subpage-lead">
            Guaranteed on-time consultation slots. No waiting rooms. Choose between visiting our specialized rehabilitation center or requesting a certified physiotherapist at your doorstep.
          </p>
        </div>
      </section>

      {/* ─── 2. BOOKING PORTAL & SIDEBAR ─── */}
      <section className="appointment-portal-section section-padding">
        <div className="appointment-container">
          <div className="appointment-layout-grid">
            {/* Form Column */}
            <div className="booking-card-wrapper scroll-reveal">
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
                    <h3>Patient Consultation Details</h3>
                    <p>Please fill out your details for immediate specialist matching</p>
                  </div>

                  {/* Section 1: Care Mode & Condition */}
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
                        <option value="Dr. Sumit Gupta, PT">Dr. Sumit Gupta (Chief Ortho & Spine)</option>
                        <option value="Dr. Sneha Kulkarni, PT">Dr. Sneha Kulkarni (Sports & Knee)</option>
                        <option value="Dr. Vikram Patil, PT">Dr. Vikram Patil (Neuro & Post-Op)</option>
                        <option value="Dr. Ananya Deshmukh, PT">Dr. Ananya Deshmukh (Ergonomics & Posture)</option>
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
                      placeholder="e.g. Lower back pain radiating to right leg for 3 months. MRI shows L4-L5 bulge."
                      value={formData.notes}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-submit-appointment">
                    <Calendar size={18} />
                    <span>Confirm & Schedule Evaluation</span>
                    <ArrowRight size={17} />
                  </button>

                  <p className="form-disclaimer-text">
                    <ShieldCheck size={14} className="text-azure" /> Your personal medical data is strictly confidential under patient privacy standards.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar Column: What to Expect & Helplines */}
            <aside className="booking-sidebar">
              <div className="sidebar-info-card">
                <span className="sidebar-card-kicker">First Consultation</span>
                <h3>What to Expect</h3>
                <ul className="sidebar-checklist">
                  <li>
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span><strong>45-Minute 1-on-1 Assessment:</strong> Comprehensive examination by certified MPT specialists.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span><strong>Scans Review in Plain English:</strong> We explain your MRI/X-ray reports clearly without confusing jargon.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span><strong>Milestone Recovery Roadmap:</strong> Clear timeline of expected sessions and non-surgical outcomes.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span><strong>Zero Waiting Time Policy:</strong> Pre-booked slots begin the moment you walk through our doors.</span>
                  </li>
                </ul>
              </div>

              <div className="sidebar-info-card">
                <span className="sidebar-card-kicker">Checklist</span>
                <h3>What to Bring on Day 1</h3>
                <ul className="sidebar-checklist">
                  <li>
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Recent MRI, X-ray scans, or doctor prescriptions if you have them.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Comfortable clothing allowing unrestricted joint movement.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Health insurance card for cashless or reimbursement assistance.</span>
                  </li>
                </ul>
              </div>

              <div className="sidebar-urgent-card">
                <Phone size={24} className="urgent-phone-icon" />
                <div>
                  <strong>Need Immediate Assistance?</strong>
                  <p>Our care coordinator is available for instant triage and emergency scheduling.</p>
                  <a href="tel:+919145875248" className="urgent-tel-link">
                    +91 91458 75248
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
