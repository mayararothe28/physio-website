import { useState } from "react";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import "./ContactPage.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    concern: "spine",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

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
      setEmailError("Please enter a valid email address (e.g. name@gmail.com).");
      return;
    }
    setPhoneError("");
    setEmailError("");
    setSubmitted(true);
    window.scrollTo({ top: 100, behavior: "smooth" });
  }

  function handleResetContact() {
    setFormData({
      name: "",
      phone: "",
      email: "",
      concern: "spine",
      message: "",
    });
    setPhoneError("");
    setEmailError("");
    setSubmitted(false);
    window.scrollTo({ top: 100, behavior: "smooth" });
  }

  return (
    <main className="contact-page">
      {/* ─── 1. HERO / INTRO ─── */}
      <section className="contact-hero-section">
        <div className="contact-container">
          <div className="contact-hero-content">
            <span className="contact-kicker">
              <MapPin size={14} /> PATIENT HELPDESK & CLINIC DIRECTIONS
            </span>
            <h1>
              We Are Here to Guide
              <br />
              <span className="text-highlight">Your Recovery Journey.</span>
            </h1>
            <p className="contact-hero-lead">
              Have questions about your condition, insurance reimbursement, or booking an evaluation? Our clinical coordination team in Baner, Pune is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. INQUIRY FORM ONLY ─── */}
      <section className="contact-main-section section-padding">
        <div className="contact-container">
          <div className="contact-form-wrapper scroll-reveal">
            <div className="contact-form-card">
              {submitted ? (
                <div className="contact-success-state">
                  <CheckCircle2 size={44} className="text-azure" />
                  <h3>Message Received!</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Our clinical coordinator will call you back at <strong>+91 {formData.phone}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    className="btn-reset-contact"
                    onClick={handleResetContact}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  <h3>Send a Medical Inquiry</h3>
                  <p>Share your concerns and our senior clinical team will respond promptly.</p>

                  <div className="form-input-group">
                    <label htmlFor="c-name">Full Name *</label>
                    <input
                      type="text"
                      id="c-name"
                      name="name"
                      placeholder="e.g. Anand Kulkarni"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-input-group">
                      <label htmlFor="c-phone">Phone / WhatsApp (10 Digits) *</label>
                      <input
                        type="tel"
                        id="c-phone"
                        name="phone"
                        placeholder="Enter 10-digit number (e.g. 9158347290)"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        pattern="[0-9]{10}"
                        inputMode="numeric"
                        required
                      />
                      {phoneError && <span className="field-error-msg">{phoneError}</span>}
                    </div>

                    <div className="form-input-group">
                      <label htmlFor="c-email">Email Address (Gmail / Email) *</label>
                      <input
                        type="email"
                        id="c-email"
                        name="email"
                        placeholder="e.g. yourname@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      {emailError && <span className="field-error-msg">{emailError}</span>}
                    </div>
                  </div>

                  <div className="form-input-group">
                    <label htmlFor="c-concern">Primary Area of Concern</label>
                    <select
                      id="c-concern"
                      name="concern"
                      value={formData.concern}
                      onChange={handleChange}
                    >
                      <option value="spine">Lower Back / L4-L5 Slip Disc / Sciatica</option>
                      <option value="knee">Knee Pain / Osteoarthritis / Cartilage</option>
                      <option value="shoulder">Frozen Shoulder / Rotator Cuff</option>
                      <option value="neck">Neck Pain / Cervical Spondylosis</option>
                      <option value="sports">Sports Rehabilitation / ACL Tear</option>
                      <option value="postop">Post-Surgical Care (TKR / THR / Spine)</option>
                      <option value="homecare">Doorstep Home Visit Physiotherapy</option>
                      <option value="other">General Inquiry / Insurance Claim</option>
                    </select>
                  </div>

                  <div className="form-input-group">
                    <label htmlFor="c-message">How can our doctors help you? *</label>
                    <textarea
                      id="c-message"
                      name="message"
                      rows="4"
                      placeholder="Describe your symptoms, how long you've had pain, or any existing MRI scan recommendations..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-send-inquiry">
                    <span>Submit Clinical Inquiry</span>
                    <ArrowRight size={17} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
