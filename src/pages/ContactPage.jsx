import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ShieldCheck,
  Headphones
} from 'lucide-react';
import { CLINIC_INFO } from '../data/physioData';

export default function ContactPage({ setActivePage }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handlePhoneChange = (e) => {
    // Strictly numeric and max 10 digits
    const numericValue = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: numericValue }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const cleanPhone = formData.phone.trim();
    if (cleanPhone.length !== 10 || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMessage('Please enter a valid 10-digit mobile number (starting with 6, 7, 8, or 9).');
      return;
    }

    setErrorMessage('');
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 2500);
  };

  return (
    <div className="contact-page-container page-transition">
      {/* Header Banner - Standardized matching all inner pages */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="section-badge">DIRECT CONTACT</span>
          <h1 className="page-header-title">Get in Touch with Our Specialists</h1>
          <p className="page-header-subtitle">
            Need urgent clinical advice or have questions about your pain? 
            Connect directly via 10-digit phone lines, WhatsApp, email, or submit a message below.
          </p>
        </div>
      </section>

      {/* Main Pure Contact Grid */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left: Pure Contact Channels (Phone, WhatsApp, Email, Helpline) */}
            <div className="contact-cards-col">
              {/* 1. Direct Calling Line */}
              <div className="contact-card-box glass-panel">
                <div className="ccb-icon-wrap bg-teal-100 text-teal-700">
                  <Phone size={24} />
                </div>
                <div className="ccb-content">
                  <h4 className="ccb-title">Direct Calling Lines</h4>
                  <p className="ccb-phone-main">
                    <a href={`tel:${CLINIC_INFO.phone}`} className="hover:underline font-extrabold text-teal-700 text-xl">
                      {CLINIC_INFO.phone}
                    </a>
                  </p>
                  <p className="ccb-desc text-sm text-slate-600 mt-1">
                    Alternate Line: <a href={`tel:${CLINIC_INFO.altPhone}`} className="font-semibold text-teal-700">{CLINIC_INFO.altPhone}</a>
                  </p>
                  <span className="text-xs text-emerald-600 font-semibold mt-1 inline-block">
                    ● Direct line to clinic reception (10 Digits)
                  </span>
                </div>
              </div>

              {/* 2. WhatsApp Direct Chat */}
              <div className="contact-card-box glass-panel">
                <div className="ccb-icon-wrap bg-green-100 text-green-700">
                  <MessageCircle size={24} />
                </div>
                <div className="ccb-content">
                  <h4 className="ccb-title">WhatsApp Support ({CLINIC_INFO.whatsapp})</h4>
                  <p className="ccb-desc text-sm text-slate-600">
                    Send MRI reports, doctor prescriptions, or inquire about instant slot availability.
                  </p>
                  <a
                    href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=Hello%20RevitaPhysio,%20I%20have%20a%20query%20regarding%20treatment`}
                    target="_blank"
                    rel="noreferrer"
                    className="wa-direct-link"
                  >
                    <span>Chat on WhatsApp Now ({CLINIC_INFO.whatsapp}) →</span>
                  </a>
                </div>
              </div>

              {/* 3. Official Email Support */}
              <div className="contact-card-box glass-panel">
                <div className="ccb-icon-wrap bg-blue-100 text-blue-700">
                  <Mail size={24} />
                </div>
                <div className="ccb-content">
                  <h4 className="ccb-title">Official Medical Email</h4>
                  <p className="ccb-phone-main">
                    <a href={`mailto:${CLINIC_INFO.email}`} className="font-bold text-teal-700 text-base hover:underline">
                      {CLINIC_INFO.email}
                    </a>
                  </p>
                  <span className="text-xs text-slate-500 mt-1 block">
                    Replies guaranteed within 2-4 business hours
                  </span>
                </div>
              </div>

              {/* 4. Priority Emergency Support */}
              <div className="contact-card-box glass-panel">
                <div className="ccb-icon-wrap bg-rose-100 text-rose-700">
                  <Headphones size={24} />
                </div>
                <div className="ccb-content">
                  <h4 className="ccb-title">24/7 Patient Care Helpline</h4>
                  <p className="ccb-desc text-sm text-slate-600">
                    For acute disc pain, sudden muscle spasms, or post-surgery home visit emergencies.
                  </p>
                  <a href={`tel:${CLINIC_INFO.phone}`} className="font-bold text-rose-600 text-sm mt-1 inline-block hover:underline">
                    Emergency Call: {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Quick Query Form */}
            <div className="contact-form-col">
              <div className="contact-form-card glass-panel">
                <div className="cfc-header">
                  <h3 className="cfc-title">Send a Quick Inquiry</h3>
                  <p className="cfc-subtitle">
                    Drop your contact details and questions. Our senior physiotherapist will call you back within 2 hours.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="contact-success-state text-center py-10">
                    <CheckCircle2 size={54} className="text-emerald-500 mx-auto mb-3" />
                    <h4 className="font-bold text-xl text-slate-800">Inquiry Received!</h4>
                    <p className="text-slate-600 text-sm max-w-sm mx-auto mt-2">
                      Thank you, <strong>{formData.name || 'Patient'}</strong>. Our care coordinator will call your 10-digit number ({formData.phone}) shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="btn-secondary mt-6"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="quick-contact-form" noValidate>
                    {errorMessage && (
                      <div className="form-error-banner flex items-center gap-2 p-3 mb-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                        <AlertCircle size={16} className="flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="form-group mb-4">
                      <label className="field-label">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errorMessage) setErrorMessage('');
                        }}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group mb-4">
                      <label className="field-label">
                        Phone Number (10 Digits) *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          className="form-input"
                        />
                        <span className="text-xs text-slate-400 absolute right-3 top-3.5">
                          {formData.phone.length}/10 digits
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 mt-1">
                        Enter 10-digit Indian mobile number without +91 or 0
                      </span>
                    </div>

                    <div className="form-group mb-4">
                      <label className="field-label">Email Address (Optional)</label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group mb-5">
                      <label className="field-label">Your Question or Symptoms</label>
                      <textarea
                        rows="4"
                        placeholder="Describe your condition, pain symptoms, or required physiotherapy..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="form-input form-textarea"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      <Send size={16} />
                      <span>Send Inquiry to Clinic</span>
                    </button>

                    <p className="privacy-hint text-center mt-3">
                      <ShieldCheck size={13} className="inline mr-1 text-teal-600" />
                      We respect your privacy. No spam, only direct clinical response.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
