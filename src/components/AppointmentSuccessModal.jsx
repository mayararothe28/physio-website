import React from 'react';
import { CheckCircle2, Calendar, Clock, User, Phone, MapPin, Printer, MessageCircle, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/physioData';

export default function AppointmentSuccessModal({ booking, onClose }) {
  if (!booking) return null;

  const handlePrint = () => {
    window.print();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello RevitaPhysio! I have confirmed my appointment booking.\nReference ID: ${booking.bookingId}\nName: ${booking.fullName}\nService: ${booking.service}\nDoctor: ${booking.doctor}\nDate: ${booking.date} at ${booking.timeSlot}\nLooking forward to the session!`
  );

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="booking-modal-card glass-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="booking-modal-header text-center">
          <div className="success-badge-circle">
            <CheckCircle2 size={44} className="text-emerald-500" />
          </div>
          <span className="booking-status-tag">CONFIRMED APPOINTMENT</span>
          <h3 className="modal-title">Booking Slip Generated!</h3>
          <p className="modal-subtitle">
            Thank you, <strong>{booking.fullName}</strong>. Your physiotherapy appointment is scheduled.
          </p>
        </div>

        <div className="booking-receipt-box">
          <div className="receipt-ref-row">
            <span className="ref-label">Booking Reference:</span>
            <span className="ref-code">{booking.bookingId}</span>
          </div>

          <div className="receipt-grid">
            <div className="receipt-item">
              <span className="ri-label"><User size={13} /> Patient Name</span>
              <span className="ri-val">{booking.fullName}</span>
            </div>
            <div className="receipt-item">
              <span className="ri-label"><Phone size={13} /> Contact No.</span>
              <span className="ri-val">{booking.phone}</span>
            </div>
            <div className="receipt-item">
              <span className="ri-label"><Calendar size={13} /> Date</span>
              <span className="ri-val font-semibold text-teal-700">{booking.date}</span>
            </div>
            <div className="receipt-item">
              <span className="ri-label"><Clock size={13} /> Time Slot</span>
              <span className="ri-val font-semibold text-teal-700">{booking.timeSlot}</span>
            </div>
            <div className="receipt-item full-span">
              <span className="ri-label">Treatment Service</span>
              <span className="ri-val">{booking.service}</span>
            </div>
            <div className="receipt-item full-span">
              <span className="ri-label">Assigned Specialist</span>
              <span className="ri-val">{booking.doctor || "Senior Consultant Physiotherapist"}</span>
            </div>
            <div className="receipt-item full-span">
              <span className="ri-label"><MapPin size={13} /> Location</span>
              <span className="ri-val text-xs text-slate-600">
                {booking.visitType === 'Home Visit' ? 'At Patient Home Address' : CLINIC_INFO.address}
              </span>
            </div>
          </div>
        </div>

        <div className="booking-modal-actions">
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp-confirm"
          >
            <MessageCircle size={18} />
            <span>Send Confirmation on WhatsApp</span>
          </a>

          <button onClick={handlePrint} className="btn-print-slip">
            <Printer size={16} />
            <span>Print / Save Slip</span>
          </button>
        </div>

        <p className="booking-note-text text-center">
          *A confirmation SMS & reminder will be sent 2 hours before your slot.
        </p>
      </div>
    </div>
  );
}
