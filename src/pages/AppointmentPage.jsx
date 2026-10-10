import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Home,
  MessageCircle,
  Sparkles,
  AlertCircle,
  ArrowRight,
  FileText,
  UserCheck,
} from "lucide-react";
import "./AppointmentPage.css";

export default function AppointmentPage() {
  const [searchParams] = useSearchParams();

  // Read initial values from URL query parameters
  const initCondition = searchParams.get("condition") || "spine";
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

  useEffect(() => {
    // If query params change, update formData
    if (searchParams.get("condition")) {
      setFormData((prev) => ({ ...prev, condition: searchParams.get("condition") }));
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const randomRef = "RO-" + Math.floor(10000 + Math.random() * 90000);
    setBookingRef(randomRef);
    setIsSubmitted(true);
    window.scrollTo({ top: 100, behavior: "smooth" });
  }

  return (
    <main className="appointment-page">
      {/* ─── 1. HERO ─── */}
      <section className="appointment-hero-section">
        <div className="appointment-container">
          <div className="appointment-hero-content">
            <span className="appointment-kicker">
              <Calendar size={14} /> ONLINE CLINICAL BOOKING DESK
            </span>
            <h1>
              Schedule Your Comprehensive
              <br />
              <span className="text-highlight">45-Minute Biomechanical Evaluation</span>
            </h1>
            <p className="appointment-hero-lead">
              Guaranteed on-time consultation slots. No waiting rooms. Choose between visiting our specialized rehabilitation center in Baner or requesting a certified physiotherapist at your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. BOOKING PORTAL & SIDEBAR ─── */}
      <section className="appointment-portal-section section-padding">
        <div className="appointment-container">
          <div className="appointment-layout-grid">
            {/* Form Column */}
            <div className="booking-card-wrapper">
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
                      <strong>{formData.careMode === "clinic" ? "In-Clinic (Baner, Pune)" : "Doorstep Home Visit"}</strong>
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
                      href={`https://wa.me/919876543210?text=Hello%20RevitaOrtho,%20my%20booking%20reference%20is%20${bookingRef}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-success-whatsapp"
                    >
                      <MessageCircle size={16} />
                      <span>Confirm Faster via WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
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
                          <span>Central Clinic in Baner, Pune</span>
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
                    <label htmlFor="date">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
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
                      <label htmlFor="phone">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-field">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="age">Patient Age</label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        placeholder="e.g. 42"
                        value={formData.age}
                        onChange={handleChange}
                      />
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

            {/* Sidebar Reassurance Column */}
            <aside className="booking-sidebar">
              {/* Box 1: What to expect */}
              <div className="sidebar-info-card">
                <span className="sidebar-card-kicker">WHAT TO EXPECT</span>
                <h3>Your First 45-Minute Session</h3>
                <ul className="sidebar-checklist">
                  <li>
                    <CheckCircle2 size={16} className="text-azure" />
                    <span>Comprehensive orthopedic manual assessment</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-azure" />
                    <span>Detailed review of MRI, X-Ray, or CT reports</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-azure" />
                    <span>Postural & kinetic chain imbalance testing</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-azure" />
                    <span>Immediate first-day therapeutic relief</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="text-azure" />
                    <span>Written roadmap with expected timeline</span>
                  </li>
                </ul>
              </div>

              {/* Box 2: Clinic Guarantees */}
              <div className="sidebar-info-card">
                <span className="sidebar-card-kicker">CLINICAL STANDARDS</span>
                <h3>Our Patient Guarantees</h3>
                <div className="sidebar-perks-list">
                  <div className="sidebar-perk">
                    <UserCheck size={18} className="text-azure" />
                    <div>
                      <strong>Zero Waiting Time Policy</strong>
                      <p>Your slot is reserved exclusively for you.</p>
                    </div>
                  </div>
                  <div className="sidebar-perk">
                    <FileText size={18} className="text-azure" />
                    <div>
                      <strong>Insurance Claim Support</strong>
                      <p>Itemized invoices & stamped medical summaries.</p>
                    </div>
                  </div>
                  <div className="sidebar-perk">
                    <Building2 size={18} className="text-azure" />
                    <div>
                      <strong>Dedicated Parking & Ramp</strong>
                      <p>Full wheelchair and elevator accessibility.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 3: Urgent Helpline */}
              <div className="sidebar-urgent-card">
                <Phone size={24} className="urgent-phone-icon" />
                <div>
                  <strong>Need Urgent Consultation?</strong>
                  <p>Speak directly to our clinical receptionist for immediate walk-in slots.</p>
                  <a href="tel:+919876543210" className="urgent-tel-link">
                    +91 98765 43210
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
