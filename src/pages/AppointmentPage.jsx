import { useEffect, useState } from "react";
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
  Mail,
} from "lucide-react";
import "./AppointmentPage.css";


function CustomDropdown({
  id,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(
    (option) => option.value === value
  );

  useEffect(() => {
    function handleOutsideClick(event) {
      if (!event.target.closest(`[data-dropdown="${id}"]`)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [id]);

  return (
    <div className="custom-dropdown" data-dropdown={id}>
      <input
        type="hidden"
        name={name}
        value={value}
        required={required}
      />

      <button
        type="button"
        className={`custom-dropdown-trigger ${isOpen ? "is-open" : ""}`}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={!selectedOption ? "dropdown-placeholder" : ""}>
          {selectedOption?.label || placeholder}
        </span>

        <span className={`dropdown-chevron ${isOpen ? "rotated" : ""}`}>
          ▾
        </span>
      </button>

      {isOpen && (
        <div className="custom-dropdown-menu">
          {options.map((option) => (
            <button
              type="button"
              key={option.value}
              className={`custom-dropdown-option ${
                value === option.value ? "selected" : ""
              }`}
              onClick={() => {
                onChange({
                  target: { name, value: option.value },
                });
                setIsOpen(false);
              }}
            >
              <span className="dropdown-option-text">
                <span className="dropdown-option-label">
                  {option.label}
                </span>

                {option.description && (
                  <span className="dropdown-option-description">
                    {option.description}
                  </span>
                )}
              </span>

              {value === option.value && <span>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


const SERVICE_CONDITIONS = {
  "back-pain": "spine",
  "slip-disc": "spine",
  "neck-pain": "neck",
  "postural-correction": "neck",
  "knee-pain": "knee",
  "sports-injury": "sports",
  "frozen-shoulder": "shoulder",
  "post-operative": "postop",
  "dry-needling": "other",
  "hip-pelvis": "other",
  "ankle-foot": "other",
  "home-visit": "other",
};

const TREATMENT_CONDITIONS = {
  decompression: "spine",
  laser: "other",
  matrix: "shoulder",
  tecar: "knee",
  dryneedling: "other",
  gaitlab: "stroke",
};

const FACILITY_CONTEXT = {
  "spinal-decompression": { condition: "spine", notes: "Interested in: Motorized Spinal Decompression Lab" },
  "consultation-suites": { condition: "other", notes: "Interested in: Private Sanitized Consultation Suites" },
  "laser-electrotherapy": { condition: "other", notes: "Interested in: Class-IV Laser & Electrotherapy Bay" },
  "rehab-gym": { condition: "postop", notes: "Interested in: Active Functional Rehabilitation Gym" },
  "cervical-traction": { condition: "neck", notes: "Interested in: Computerized Cervical Traction & Posture Lab" },
  "cryotherapy-contrast": { condition: "sports", notes: "Interested in: Advanced Cryotherapy & Contrast Therapy Suite" },
  "manual-therapy": { condition: "shoulder", notes: "Interested in: Manual Therapy & Joint Mobilization Cabins" },
  "gait-balance": { condition: "stroke", notes: "Interested in: Sensor-Equipped Gait & Balance Training Studio" },
  "hydrotherapy-pool": { condition: "other", notes: "Interested in: Hydrotherapy & Warm Water Rehabilitation Pool" },
  "pediatric-rehabilitation": { condition: "other", notes: "Interested in: Pediatric Rehabilitation & Play Therapy Room" },
  "sports-performance": { condition: "sports", notes: "Interested in: Sports Performance & Return-to-Play Studio" },
  "movement-assessment": { condition: "other", notes: "Interested in: Digital Movement Assessment Studio" },
};

const VALID_CONDITIONS = new Set([
  "spine",
  "knee",
  "neck",
  "shoulder",
  "sports",
  "postop",
  "stroke",
  "other",
]);

function getAppointmentContext(searchParams) {
  const doctor = searchParams.get("doctor") || "";
  if (doctor) return { doctor, condition: "", notes: "" };

  const facility = FACILITY_CONTEXT[searchParams.get("facility")];
  if (facility) return { doctor: "", ...facility };

  const treatment = searchParams.get("treatment");
  const service = searchParams.get("condition") || searchParams.get("service") || "";
  const condition = TREATMENT_CONDITIONS[treatment]
    || SERVICE_CONDITIONS[service]
    || (VALID_CONDITIONS.has(service) ? service : "");

  return { doctor: "", condition, notes: "" };
}

export default function AppointmentPage() {
  const [searchParams] = useSearchParams();
  const appointmentContext = getAppointmentContext(searchParams);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    condition: appointmentContext.condition,
    careMode: "",
    doctor: appointmentContext.doctor,
    date: "",
    timeSlot: "",
    notes: appointmentContext.notes,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dateError, setDateError] = useState("");
  const [ageError, setAgeError] = useState("");

  const conditionLabels = {
    spine: "Lower Back Pain / Slip Disc / Sciatica",
    knee: "Knee Pain / Osteoarthritis",
    neck: "Neck Pain / Cervical Spondylosis",
    shoulder: "Frozen Shoulder / Rotator Cuff",
    sports: "Sports Injury / ACL Rehab",
    postop: "Post-Operative Rehabilitation",
    stroke: "Neurological Rehabilitation",
    other: "General Joint Pain / Second Opinion",
  };
  const appointmentMessage = [
    "RevitaOrtho appointment request",
    `Booking reference: ${bookingRef}`,
    `Name: ${formData.name}`,
    `Phone: +91 ${formData.phone}`,
    `Email: ${formData.email || "Not provided"}`,
    `Age: ${formData.age || "Not provided"}`,
    `Care mode: ${formData.careMode || "Not selected"}`,
    `Condition: ${conditionLabels[formData.condition] || "Not selected"}`,
    `Preferred doctor: ${formData.doctor || "No preference"}`,
    `Date: ${formData.date || "Not selected"}`,
    `Time: ${formData.timeSlot || "Not selected"}`,
    `Notes: ${formData.notes || "None"}`,
  ].join("\n");
  const whatsappHref = `https://wa.me/919145875248?text=${encodeURIComponent(appointmentMessage)}`;
  const emailHref = `mailto:care@revitaortho.com?subject=${encodeURIComponent(`Appointment request ${bookingRef}`)}&body=${encodeURIComponent(appointmentMessage)}`;

  useEffect(() => {
    const context = getAppointmentContext(searchParams);
    setFormData((prev) => ({ ...prev, ...context }));
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
      condition: appointmentContext.condition,
      careMode: "",
      doctor: appointmentContext.doctor,
      date: "",
      timeSlot: "",
      notes: appointmentContext.notes,
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
      <section id="booking-form" className="appointment-portal-section section-padding">
        <div className="appointment-container">
          <div className="appointment-layout-grid">
            {/* Form Column */}
            <div className="booking-card-wrapper scroll-reveal">
              {isSubmitted ? (
                <div className="booking-success-card">
                  <div className="success-icon-badge">
                    <CheckCircle2 size={44} />
                  </div>
                  <h2>Appointment Request Ready to Send</h2>
                  <p className="success-lead">
                    Thank you, <strong>{formData.name}</strong>. Choose WhatsApp or email below to send your appointment details to our care team.
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
                      <strong>{formData.doctor === "any" ? "First Available Specialist" : formData.doctor || "No preference"}</strong>
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
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-success-whatsapp"
                    >
                      <MessageCircle size={16} />
                      <span>Send via WhatsApp</span>
                    </a>
                    <a href={emailHref} className="btn-success-email">
                      <Mail size={16} />
                      <span>Send via Email</span>
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
                          required
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
                    
<CustomDropdown
  id="condition"
  name="condition"
  value={formData.condition}
  onChange={handleChange}
  required
  placeholder="Select a condition"
  options={[
    { value: "spine", label: "Lower Back Pain / Sciatica", description: "Back pain, slip disc and nerve pain" },
    { value: "knee", label: "Knee Pain / Osteoarthritis", description: "Joint pain and stiffness" },
    { value: "neck", label: "Neck Pain / Cervical Spondylosis", description: "Neck and posture-related pain" },
    { value: "shoulder", label: "Frozen Shoulder / Rotator Cuff", description: "Shoulder mobility and tendon issues" },
    { value: "sports", label: "Sports Injury / ACL Rehab", description: "Sports injuries and muscle tears" },
    { value: "postop", label: "Post-Operative Rehabilitation", description: "Recovery after surgery" },
    { value: "stroke", label: "Neurological Rehabilitation", description: "Balance and movement rehabilitation" },
    { value: "other", label: "General Joint Pain / Second Opinion", description: "Other concerns and consultations" },
  ]}
/>

                  </div>

                  {/* Section 3: Specialist & Timing */}
                  <div className="form-grid-2">
                    <div className="form-field">
                      <label htmlFor="doctor">Preferred Doctor</label>
                      
<CustomDropdown
  id="doctor"
  name="doctor"
  value={formData.doctor}
  onChange={handleChange}
  placeholder="Select a specialist (optional)"
  options={[
    { value: "any", label: "First Available Senior Specialist", description: "Recommended for new patients" },
    { value: "Dr. Sumit Gupta, PT", label: "Dr. Sumit Gupta", description: "Chief Ortho & Spine" },
    { value: "Dr. Sneha Kulkarni, PT", label: "Dr. Sneha Kulkarni", description: "Sports & Knee" },
    { value: "Dr. Vikram Patil, PT", label: "Dr. Vikram Patil", description: "Neuro & Post-Op" },
    { value: "Dr. Ananya Deshmukh, PT", label: "Dr. Ananya Deshmukh", description: "Ergonomics & Posture" },
  ]}
/>

                    </div>

                    <div className="form-field">
                      <label htmlFor="timeSlot">Preferred Time Slot</label>
                     
<CustomDropdown
  id="timeSlot"
  name="timeSlot"
  value={formData.timeSlot}
  onChange={handleChange}
  placeholder="Select a preferred time (optional)"
  options={[
    { value: "morning", label: "Morning", description: "8:00 AM – 12:00 PM" },
    { value: "afternoon", label: "Afternoon", description: "12:00 PM – 4:00 PM" },
    { value: "evening", label: "Evening", description: "4:00 PM – 8:00 PM" },
  ]}
/>

                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="date">Preferred Date (4-digit Year) </label>
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
                      <label htmlFor="name">Full Name </label>
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
                      <label htmlFor="phone">Phone / WhatsApp Number </label>
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
                      <label htmlFor="email">Email Address  </label>
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
                      <label htmlFor="age">Patient Age </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        min="1"
                        max="100"
                        placeholder="e.g. 42 "
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

          </div>
        </div>
      </section>
    </main>
  );
}
