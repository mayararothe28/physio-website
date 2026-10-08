import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  ShieldCheck, 
  Sparkles,
  MessageSquare,
  Stethoscope,
  HeartPulse
} from 'lucide-react';
import AppointmentSuccessModal from '../components/AppointmentSuccessModal';
import { CLINIC_INFO, SERVICES_DATA, DOCTORS_DATA } from '../data/physioData';

const timeSlots = {
  morning: ['08:30 AM', '09:30 AM', '10:30 AM', '11:30 AM'],
  afternoon: ['01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'],
  evening: ['05:00 PM', '06:00 PM', '07:00 PM', '07:30 PM']
};

export default function AppointmentPage({ preselectedService, preselectedDoctor }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: preselectedService || SERVICES_DATA[0].title,
    doctor: preselectedDoctor ? preselectedDoctor.name : DOCTORS_DATA[0].name,
    visitType: 'Clinic Visit',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow default
    timeSlot: '10:30 AM',
    symptoms: ''
  });

  const [errors, setErrors] = useState({});
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previousBookings, setPreviousBookings] = useState([]);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
    if (preselectedDoctor) {
      setFormData((prev) => ({ ...prev, doctor: preselectedDoctor.name }));
    }

    try {
      const stored = localStorage.getItem('revita_bookings');
      if (stored) {
        setPreviousBookings(JSON.parse(stored));
      }
    } catch (e) {
      // ignore
    }
  }, [preselectedService, preselectedDoctor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const cleanPhone = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: cleanPhone }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter patient full name (at least 3 characters)';
    }
    const cleanPhone = formData.phone.trim();
    if (!cleanPhone || cleanPhone.length !== 10 || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number (e.g. 9876543210)';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.date) {
      newErrors.date = 'Please select your preferred appointment date';
    }
    if (!formData.timeSlot) {
      newErrors.timeSlot = 'Please select a preferred time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const bookingId = `REV-${Math.floor(1000 + Math.random() * 9000)}`;
      const completedBooking = {
        ...formData,
        bookingId,
        createdAt: new Date().toLocaleString()
      };

      try {
        const updated = [completedBooking, ...previousBookings];
        localStorage.setItem('revita_bookings', JSON.stringify(updated));
        setPreviousBookings(updated);
      } catch (err) {
        // ignore
      }

      setIsSubmitting(false);
      setConfirmedBooking(completedBooking);
    }, 700);
  };

  return (
    <div className="appointment-page-container page-transition">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="section-badge">PRIORITY RESERVATIONS</span>
          <h1 className="page-header-title">Book Your Physiotherapy Appointment</h1>
          <p className="page-header-subtitle">
            Zero waiting queues. Personalized 1-on-1 care. Select your preferred date, 
            time slot, and certified specialist below.
          </p>
        </div>
      </section>

      {/* Main Booking Form Section */}
      <section className="appointment-main-section">
        <div className="container">
          <div className="appointment-layout-grid">
            {/* Left: The Form */}
            <div className="appointment-form-card glass-panel">
              <div className="form-header-badge">
                <Calendar size={18} className="text-teal-600" />
                <span>Instant Confirmation In 60 Seconds</span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="apt-form">
                {/* 1. Visit Type Toggle */}
                <div className="form-group mb-5">
                  <label className="field-label">Mode of Consultation:</label>
                  <div className="visit-type-pills">
                    {['Clinic Visit', 'Home Visit', 'Online Video Consultation'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData((prev) => ({ ...prev, visitType: type }))}
                        className={`vt-pill ${formData.visitType === type ? 'active' : ''}`}
                      >
                        {type === 'Clinic Visit' && <MapPin size={14} />}
                        {type === 'Home Visit' && <User size={14} />}
                        {type === 'Online Video Consultation' && <Sparkles size={14} />}
                        <span>{type}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Patient Personal Info */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="field-label">
                      Full Name <span className="req">*</span>
                    </label>
                    <div className="input-with-icon">
                      <User size={17} className="input-icon" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                      />
                    </div>
                    {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                  </div>

                  <div className="form-group">
                    <label className="field-label">
                      Phone Number <span className="req">*</span>
                    </label>
                    <div className="input-with-icon">
                      <Phone size={17} className="input-icon" />
                      <input
                        type="tel"
                        name="phone"
                        maxLength={10}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210 (10 digits)"
                        className={`form-input ${errors.phone ? 'input-error' : ''}`}
                      />
                    </div>
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                    <span className="text-xs text-slate-400 mt-1">{formData.phone.length}/10 digits</span>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="field-label">Email Address (Optional)</label>
                    <div className="input-with-icon">
                      <Mail size={17} className="input-icon" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. ramesh@example.com"
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                      />
                    </div>
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label className="field-label">
                      Select Service / Condition <span className="req">*</span>
                    </label>
                    <div className="input-with-icon">
                      <HeartPulse size={17} className="input-icon" />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-input form-select"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title}>{s.title} ({s.category})</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="field-label">Preferred Doctor / Specialist</label>
                    <div className="input-with-icon">
                      <Stethoscope size={17} className="input-icon" />
                      <select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        className="form-input form-select"
                      >
                        <option value="">Any Available Senior Specialist</option>
                        {DOCTORS_DATA.map((d) => (
                          <option key={d.id} value={d.name}>{d.name} ({d.specialization})</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="field-label">
                      Preferred Date <span className="req">*</span>
                    </label>
                    <div className="input-with-icon">
                      <Calendar size={17} className="input-icon" />
                      <input
                        type="date"
                        name="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={handleChange}
                        className={`form-input ${errors.date ? 'input-error' : ''}`}
                      />
                    </div>
                    {errors.date && <span className="error-text">{errors.date}</span>}
                  </div>
                </div>

                {/* 3. Time Slot Selection */}
                <div className="form-group mb-5">
                  <label className="field-label">
                    Preferred Time Slot <span className="req">*</span>
                  </label>
                  <div className="slot-groups-container">
                    <div className="slot-time-block">
                      <span className="slot-label-group">Morning:</span>
                      <div className="slot-pills-row">
                        {timeSlots.morning.map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setFormData((prev) => ({ ...prev, timeSlot: slot }))}
                            className={`slot-chip ${formData.timeSlot === slot ? 'active' : ''}`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="slot-time-block">
                      <span className="slot-label-group">Afternoon:</span>
                      <div className="slot-pills-row">
                        {timeSlots.afternoon.map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setFormData((prev) => ({ ...prev, timeSlot: slot }))}
                            className={`slot-chip ${formData.timeSlot === slot ? 'active' : ''}`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="slot-time-block">
                      <span className="slot-label-group">Evening:</span>
                      <div className="slot-pills-row">
                        {timeSlots.evening.map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setFormData((prev) => ({ ...prev, timeSlot: slot }))}
                            className={`slot-chip ${formData.timeSlot === slot ? 'active' : ''}`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Symptoms / Notes */}
                <div className="form-group mb-6">
                  <label className="field-label">Chief Complaint / Symptoms (Optional):</label>
                  <div className="input-with-icon">
                    <MessageSquare size={17} className="input-icon textarea-icon" />
                    <textarea
                      name="symptoms"
                      rows="3"
                      value={formData.symptoms}
                      onChange={handleChange}
                      placeholder="e.g. Pain in lower back radiating down right leg since 2 weeks..."
                      className="form-input form-textarea"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-base pulse-glow"
                >
                  {isSubmitting ? (
                    <span>Confirming Slot...</span>
                  ) : (
                    <>
                      <Calendar size={18} />
                      <span>Confirm Appointment Request</span>
                    </>
                  )}
                </button>

                <p className="privacy-hint text-center mt-3">
                  <ShieldCheck size={13} className="inline mr-1 text-teal-600" />
                  Your medical details are 100% confidential. No spam, guaranteed.
                </p>
              </form>
            </div>

            {/* Right: Clinic Assurance Card & Recent Bookings */}
            <div className="appointment-sidebar-col">
              <div className="sidebar-info-card glass-panel mb-6">
                <h4 className="sic-title">What Happens Next?</h4>
                <div className="sic-timeline">
                  <div className="sic-step">
                    <span className="sic-num">1</span>
                    <div>
                      <strong>Instant Booking Token</strong>
                      <p>You receive an automated reference ID immediately.</p>
                    </div>
                  </div>
                  <div className="sic-step">
                    <span className="sic-num">2</span>
                    <div>
                      <strong>Doctor Confirmation Call / WhatsApp</strong>
                      <p>Our care coordinator verifies your medical reports & timing.</p>
                    </div>
                  </div>
                  <div className="sic-step">
                    <span className="sic-num">3</span>
                    <div>
                      <strong>Consultation Day</strong>
                      <p>Arrive 10 minutes prior for comfortable, relaxed assessment.</p>
                    </div>
                  </div>
                </div>

                <div className="sic-helpline-box">
                  <Phone size={18} className="text-teal-600" />
                  <div>
                    <span className="text-xs text-slate-500">Need immediate booking assistance?</span>
                    <a href={`tel:${CLINIC_INFO.phone}`} className="font-bold text-teal-700 block">
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Show Previous Bookings if exists */}
              {previousBookings.length > 0 && (
                <div className="previous-bookings-card glass-panel">
                  <h4 className="font-bold text-sm text-slate-700 mb-3 flex items-center gap-2">
                    <Clock size={15} className="text-teal-600" />
                    <span>Your Recent Bookings ({previousBookings.length})</span>
                  </h4>
                  <div className="recent-list">
                    {previousBookings.slice(0, 2).map((pb, idx) => (
                      <div key={idx} className="recent-item">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold text-xs text-teal-700">{pb.bookingId}</span>
                          <span className="text-xs text-slate-500">{pb.date}</span>
                        </div>
                        <p className="text-xs font-medium text-slate-800">{pb.service}</p>
                        <p className="text-xs text-slate-500">{pb.doctor}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {confirmedBooking && (
        <AppointmentSuccessModal
          booking={confirmedBooking}
          onClose={() => setConfirmedBooking(null)}
        />
      )}
    </div>
  );
}
