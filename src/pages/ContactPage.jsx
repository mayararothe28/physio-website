import { useState } from "react";
import {
  MessageCircle,
  Mail,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import "./ContactPage.css";

export default function ContactPage() {
 const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  regarding: "",
  message: "",
});
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [inquiryRef, setInquiryRef] = useState("");

  const inquiryMessage = [
    "RevitaOrtho website inquiry",
    `Reference: ${inquiryRef}`,
    `Name: ${formData.name}`,
    `Phone: +91 ${formData.phone}`,
    `Email: ${formData.email || "Not provided"}`,
   `Enquiry regarding: ${formData.regarding || "Not selected"}`,
    `Message: ${formData.message || "Not provided"}`,
  ].join("\n");
  const whatsappHref = `https://wa.me/919145875248?text=${encodeURIComponent(inquiryMessage)}`;
  const emailHref = `mailto:care@revitaortho.com?subject=${encodeURIComponent(`Website inquiry ${inquiryRef}`)}&body=${encodeURIComponent(inquiryMessage)}`;

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
  regarding: "",
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
            {/* Contact inquiry form */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                {submitted ? (
                  <div className="contact-success-state">
                    <div className="success-icon-wrap">
                      <CheckCircle2 size={44} className="text-emerald" />
                    </div>
                    <h3>Inquiry Ready to Send</h3>
                    <p className="success-ref-code">
                      Reference Number: <strong>{inquiryRef}</strong>
                    </p>
                    <p className="success-desc">
                      Thank you, <strong>{formData.name || "Patient"}</strong>. Choose WhatsApp or email below to send your inquiry details to our care team.
                    </p>

                    <div className="success-actions-row">
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-whatsapp-confirm"
                      >
                        <MessageCircle size={16} />
                        <span>Send via WhatsApp</span>
                      </a>
                      <a href={emailHref} className="btn-email-confirm">
                        <Mail size={16} />
                        <span>Send via Email</span>
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
  <label htmlFor="c-regarding">
    What Is Your Enquiry Regarding? *
  </label>

  <select
    id="c-regarding"
    name="regarding"
    value={formData.regarding}
    onChange={handleChange}
    className="form-input select-input"
    required
  >
    <option value="">Select an option</option>
    <option value="Doctor">Doctor</option>
    <option value="Hospital / Clinic">Hospital / Clinic</option>
    <option value="Appointment">Appointment</option>
    <option value="General Enquiry">General Enquiry</option>
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
                          <option value="" disabled>Select a care mode</option>
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
