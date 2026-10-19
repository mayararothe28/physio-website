
import { useEffect, useState } from "react";
import {
  MessageCircle,
  Mail,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import "./ContactPage.css";

function CustomDropdown({
  id,
  name,
  value,
  onChange,
  options,
  placeholder,
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
      <input type="hidden" name={name} value={value} />

      <button
        type="button"
        id={id}
        className={`custom-dropdown-trigger ${isOpen ? "is-open" : ""}`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
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
        <div className="custom-dropdown-menu" role="listbox">
          {options.map((option) => (
            <button
              type="button"
              key={option.value}
              role="option"
              aria-selected={value === option.value}
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

              {value === option.value && (
                <span className="dropdown-check">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    regarding: "",
    careMode: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const inquiryMessage = [
    "RevitaOrtho Website Inquiry",
    "",
    `Name: ${formData.name}`,
    `Phone: +91 ${formData.phone}`,
    `Email: ${formData.email || "Not provided"}`,
    `Enquiry Regarding: ${formData.regarding || "Not selected"}`,
    `Preferred Care Mode: ${
      formData.careMode
        ? {
            clinic: "In-Clinic Consultation",
            home: "Home Visit Physiotherapy",
            video: "Online Video Consultation",
          }[formData.careMode]
        : "Not selected"
    }`,
    `Message: ${formData.message || "Not provided"}`,
  ].join("\n");

  const whatsappHref = `https://wa.me/919145875248?text=${encodeURIComponent(
    inquiryMessage
  )}`;

  const emailHref = `mailto:care@revitaortho.com?subject=${encodeURIComponent(
    "RevitaOrtho Website Inquiry"
  )}&body=${encodeURIComponent(inquiryMessage)}`;

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "phone") {
      const cleanDigits = value.replace(/\D/g, "").slice(0, 10);

      setFormData((prev) => ({ ...prev, phone: cleanDigits }));

      if (cleanDigits.length === 10) setPhoneError("");
      return;
    }

    if (name === "email") {
      setFormData((prev) => ({ ...prev, email: value }));

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!value || emailRegex.test(value)) setEmailError("");
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name.trim()) return;

    if (formData.phone.length !== 10) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.email && !emailRegex.test(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!formData.regarding || !formData.message.trim()) return;

    setPhoneError("");
    setEmailError("");
    setSubmitted(true);

    window.scrollTo({ top: 200, behavior: "smooth" });
  }

  function handleResetContact() {
    setFormData({
      name: "",
      phone: "",
      email: "",
      regarding: "",
      careMode: "",
      message: "",
    });

    setPhoneError("");
    setEmailError("");
    setSubmitted(false);
  }

  return (
    <main className="contact-page">
      <section className="subpage-hero-banner">
        <div className="subpage-hero-content">
          <h1 className="subpage-title">
            Get in Touch With Our
            <br />
            <span className="text-highlight">
              Clinical Care Team.
            </span>
          </h1>

          <p className="subpage-lead">
            Have questions regarding your joint pain, rehabilitation
            protocols, or insurance assistance? Visit our center in
            Baner, Pune or submit an inquiry for a prompt callback.
          </p>
        </div>
      </section>

      <section className="contact-main-section section-padding">
        <div className="contact-container">
          <div className="contact-two-col-grid">
            <div className="contact-form-col">
              <div className="contact-form-card">
                {submitted ? (
                  <div className="contact-success-state">
                    <div className="success-icon-wrap">
                      <CheckCircle2 size={44} className="text-emerald" />
                    </div>

                    <h3>Inquiry Ready to Send</h3>

                    <div className="success-actions-row">
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-whatsapp-confirm"
                        onClick={handleResetContact}
                      >
                        <MessageCircle size={16} />
                        <span>Send via WhatsApp</span>
                      </a>

                      <a
                        href={emailHref}
                        className="btn-email-confirm"
                        onClick={handleResetContact}
                      >
                        <Mail size={16} />
                        <span>Send via Email</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="inquiry-form"
                    noValidate
                  >
                    <div className="form-card-header">
                      <h3>Send a Medical Inquiry</h3>
                      <p>
                        Share your concerns and our senior clinical team
                        will respond promptly.
                      </p>
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
                        <label htmlFor="c-phone">
                          10-Digit Mobile Number *
                        </label>

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
                            className={`form-input ${
                              phoneError ? "has-error" : ""
                            }`}
                          />
                        </div>

                        {phoneError && (
                          <span className="field-error-msg">
                            {phoneError}
                          </span>
                        )}
                      </div>

                      <div className="form-input-group">
                        <label htmlFor="c-email">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          id="c-email"
                          name="email"
                          placeholder="e.g. name@gmail.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={`form-input ${
                            emailError ? "has-error" : ""
                          }`}
                        />

                        {emailError && (
                          <span className="field-error-msg">
                            {emailError}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="form-two-col-row">
                      <div className="form-input-group">
                        <label htmlFor="c-regarding">
                          What Is Your Enquiry Regarding? *
                        </label>

                        <CustomDropdown
                          id="c-regarding"
                          name="regarding"
                          value={formData.regarding}
                          onChange={handleChange}
                          placeholder="Select an option"
                          options={[
                            {
                              value: "Doctor",
                              label: "Doctor",
                              description: "Questions about our specialists",
                            },
                            {
                              value: "Hospital / Clinic",
                              label: "Hospital / Clinic",
                              description: "Clinic facilities and services",
                            },
                            {
                              value: "Appointment",
                              label: "Appointment",
                              description: "Booking or changing a visit",
                            },
                            {
                              value: "General Enquiry",
                              label: "General Enquiry",
                              description: "Other questions and assistance",
                            },
                          ]}
                        />
                      </div>

                      <div className="form-input-group">
                        <label htmlFor="c-caremode">
                          Preferred Care Mode
                        </label>

                        <CustomDropdown
                          id="c-caremode"
                          name="careMode"
                          value={formData.careMode}
                          onChange={handleChange}
                          placeholder="Select a care mode"
                          options={[
                            {
                              value: "clinic",
                              label: "In-Clinic Consultation",
                              description: "Visit the RevitaOrtho clinic",
                            },
                            {
                              value: "home",
                              label: "Home Visit Physiotherapy",
                              description: "Physiotherapy at your home",
                            },
                            {
                              value: "video",
                              label: "Online Video Consultation",
                              description: "Consult with a specialist online",
                            },
                          ]}
                        />
                      </div>
                    </div>

                    <div className="form-input-group">
                      <label htmlFor="c-message">
                        Describe Your Symptoms or Medical History *
                      </label>
                      <textarea
                        id="c-message"
                        name="message"
                        rows="4"
                        placeholder="Please mention how long you have had pain, if you have MRI/X-ray scans, or any previous treatments..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="form-input textarea-input"
                      />
                    </div>

                    <button type="submit" className="btn-send-inquiry">
                      <span>Submit Clinical Inquiry</span>
                      <ArrowRight size={17} />
                    </button>

                    <p className="form-privacy-note">
                      Your medical information is strictly confidential.
                      No promotional spam.
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
