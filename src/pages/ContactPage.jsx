import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Building2,
  Accessibility,
  Car,
} from "lucide-react";
import "./ContactPage.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    concern: "spine",
    careMode: "clinic",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [inquiryRef, setInquiryRef] = useState("");

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
    window.scrollTo({ top: 200, behavior: "smooth" });
  }

  function handleResetContact() {
    setFormData({
      name: "",
      phone: "",
      email: "",
      concern: "spine",
      careMode: "clinic",
      message: "",
    });
    setPhoneError("");
    setEmailError("");
    setSubmitted(false);
  }

  return (
    <main className="contact-page">
      {/* ─── 1. SUBPAGE HERO BANNER ─── */}
      <section className="subpage-hero-banner">
        <div className="subpage-hero-content">
          <div className="subpage-breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Contact Us</span>
          </div>
          <span className="subpage-kicker">
            <MapPin size={14} /> PATIENT DESK & CLINIC DIRECTIONS
          </span>
          <h1 className="subpage-title">
            Get in Touch With Our
            <br />
            <span className="text-highlight">Clinical Care Team.</span>
          </h1>
          <p className="subpage-lead">
            Have questions regarding your joint pain, rehabilitation protocols, or insurance assistance?
            Visit our center in Baner, Pune or submit an inquiry for a prompt callback.
          </p>
        </div>
      </section>

      {/* ─── 2. MAIN CONTACT SECTION ─── */}
      <section className="contact-main-section section-padding">
        <div className="contact-container">
          <div className="contact-two-col-grid">
            {/* Left Column: Clinic Contact Details */}
            <div className="contact-info-col">
              <div className="contact-card-block">
                <div className="contact-card-icon-wrap">
                  <MapPin size={22} />
                </div>
                <div className="contact-card-body">
                  <h3>Clinic Location</h3>
                  <p className="contact-card-text">
                    Suite 302, Health & Wellness Plaza, Medical Center Road, Baner, Pune – 411045
                  </p>
                  <p className="contact-card-subtext">Landmark: Opposite Medical Square, Above Wellness Care</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-card-maps-link"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              <div className="contact-card-block">
                <div className="contact-card-icon-wrap">
                  <Clock size={22} />
                </div>
                <div className="contact-card-body">
                  <h3>Consultation Hours</h3>
                  <p className="contact-card-text">
                    <strong>Monday – Saturday:</strong> 8:00 AM – 8:00 PM
                  </p>
                  <p className="contact-card-text">
                    <strong>Sunday:</strong> 9:00 AM – 1:00 PM (By Prior Appointment)
                  </p>
                  <span className="contact-card-subtext">Zero waiting time with pre-scheduled visits</span>
                </div>
              </div>

              <div className="contact-card-block">
                <div className="contact-card-icon-wrap">
                  <Phone size={22} />
                </div>
                <div className="contact-card-body">
                  <h3>Direct Phone & Helpline</h3>
                  <p className="contact-card-phone">
                    <a href="tel:+919145875248">+91 91458 75248</a>
                  </p>
                  <p className="contact-card-email">
                    <a href="mailto:care@revitaortho.com">care@revitaortho.com</a>
                  </p>
                  <span className="contact-card-subtext">Immediate clinical triage & appointment support</span>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="contact-card-block contact-card-whatsapp">
                <div className="contact-card-icon-wrap whatsapp-icon-wrap">
                  <MessageCircle size={22} />
                </div>
                <div className="contact-card-body">
                  <h3>WhatsApp Medical Triage</h3>
                  <p className="contact-card-text">
                    Share your MRI/X-ray reports or consult with our care coordinator via WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20have%20an%20inquiry%20regarding%20physiotherapy."
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp-chat"
                  >
                    <MessageCircle size={15} />
                    <span>Chat on WhatsApp: +91 91458 75248</span>
                  </a>
                </div>
              </div>

              {/* Amenities Strip */}
              <div className="contact-amenities-strip">
                <div className="amenity-item">
                  <Car size={16} className="text-azure" />
                  <span>Dedicated Patient Parking</span>
                </div>
                <div className="amenity-item">
                  <Accessibility size={16} className="text-azure" />
                  <span>Wheelchair Ramp & Lift</span>
                </div>
                <div className="amenity-item">
                  <ShieldCheck size={16} className="text-azure" />
                  <span>Cashless Insurance Assistance</span>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry & Booking Form */}
            <div className="contact-form-col">
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
                      Thank you, <strong>{formData.name || "Patient"}</strong>. Our clinical coordination desk has received your request. A senior physiotherapist will call you back at <strong>+91 {formData.phone}</strong> within 15–30 minutes to discuss your symptoms and next steps.
                    </p>

                    <div className="success-actions-row">
                      <a
                        href={`https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20just%20submitted%20an%20inquiry%20(Ref:%20${inquiryRef}).`}
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
                      <h3>Send a Medical Inquiry</h3>
                      <p>Share your concerns and our senior clinical team will respond promptly.</p>
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
                          <option value="neck">Neck Pain & Cervical Spondylosis</option>
                          <option value="knee">Knee Pain & Osteoarthritis</option>
                          <option value="sports">Sports Injury & Ligament Sprain</option>
                          <option value="shoulder">Frozen Shoulder & Rotator Cuff</option>
                          <option value="postop">Post-Surgical Joint Rehabilitation</option>
                          <option value="neuro">Stroke & Neuro Rehabilitation</option>
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
        </div>
      </section>
    </main>
  );
}
