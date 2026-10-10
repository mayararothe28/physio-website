import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ExternalLink,
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

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      {/* ─── 1. HERO ─── */}
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

      {/* ─── 2. CONTACT DETAILS & FORM ─── */}
      <section className="contact-main-section section-padding">
        <div className="contact-container">
          <div className="contact-main-grid">
            {/* Info Cards Column */}
            <div className="contact-info-col">
              <div className="clinic-location-hero-card">
                <div className="loc-card-tag">
                  <Building2 size={16} /> CENTRAL CLINIC IN PUNE
                </div>
                <h3>RevitaOrtho Spine & Joint Clinic</h3>
                <p className="address-text">
                  Plot 42, High Street Galleria, Baner-Pashan Link Road, Baner, Pune, Maharashtra – 411045
                </p>
                <p className="landmark-text">
                  <strong>Landmark:</strong> Adjacent to High Street Retail Hub, 5 mins from Mumbai-Pune Expressway Exit.
                </p>

                <div className="location-action-btns">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-maps-action"
                  >
                    <MapPin size={16} />
                    <span>Open in Google Maps</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="contact-channels-grid">
                <div className="channel-card">
                  <Phone size={22} className="text-azure" />
                  <div>
                    <strong>Doctor & Reception Helpline</strong>
                    <a href="tel:+919876543210">+91 98765 43210</a>
                    <a href="tel:+919876543211">+91 98765 43211</a>
                  </div>
                </div>

                <div className="channel-card">
                  <MessageCircle size={22} className="text-azure" />
                  <div>
                    <strong>WhatsApp Triage Desk</strong>
                    <p>Instant chat with duty physiotherapist</p>
                    <a
                      href="https://wa.me/919876543210?text=Hello%20RevitaOrtho,%20I%20have%20an%20inquiry."
                      target="_blank"
                      rel="noreferrer"
                      className="whatsapp-link-btn"
                    >
                      Chat on WhatsApp &rarr;
                    </a>
                  </div>
                </div>

                <div className="channel-card">
                  <Clock size={22} className="text-azure" />
                  <div>
                    <strong>Consultation Hours</strong>
                    <p>Monday – Saturday: 8:00 AM – 8:00 PM</p>
                    <p>Sunday: By Prior Appointment Only</p>
                  </div>
                </div>

                <div className="channel-card">
                  <Mail size={22} className="text-azure" />
                  <div>
                    <strong>Email Inquiries</strong>
                    <a href="mailto:care@revitaortho.com">care@revitaortho.com</a>
                    <p>Report reviews within 4 business hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form Column */}
            <div className="contact-form-col">
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
                      onClick={() => setSubmitted(false)}
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
                        <label htmlFor="c-phone">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          id="c-phone"
                          name="phone"
                          placeholder="e.g. 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-input-group">
                        <label htmlFor="c-email">Email Address</label>
                        <input
                          type="email"
                          id="c-email"
                          name="email"
                          placeholder="e.g. anand@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
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
        </div>
      </section>
    </main>
  );
}
