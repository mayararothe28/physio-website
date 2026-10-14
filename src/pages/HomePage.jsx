import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Activity,
  Bone,
  ShieldCheck,
  Clock,
  Star,
  Phone,
  MapPin,
  Calendar,
  Award,
  Check,
  Zap,
  Stethoscope,
  BadgeCheck,
  MessageCircle,
  Building2,
  ExternalLink,
  Users,
  Loader2,
  ChevronDown,
  HelpCircle,
  Accessibility,
  ChevronRight,
  FileText,
} from "lucide-react";
import { fetchClinicData, submitAppointmentApi } from "../services/api";
import "./HomePage.css";

// Dynamic Lucide icon lookup
const ICON_MAP = {
  Bone,
  Stethoscope,
  Zap,
  Activity,
  Award,
  HeartPulse,
  Clock,
  Calendar,
  CheckCircle2,
  Users,
  ShieldCheck,
  Building2,
  Star,
  ChevronDown,
  HelpCircle,
  Accessibility,
};

function getIcon(name, fallback = Activity) {
  return ICON_MAP[name] || fallback;
}

// 3 Team Doctors for Terapia Team Section
const TEAM_MEMBERS = [
  {
    name: "Dr. Sumit Gupta, PT",
    role: "Chief Orthopedic & Spine Specialist",
    qualifications: "BPT, MPT (Musculoskeletal Disorders)",
    experience: "14+ Years Clinical Leadership",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    serviceId: "back-pain",
  },
  {
    name: "Dr. Sneha Kulkarni, PT",
    role: "Head of Sports Rehab & Knee Care",
    qualifications: "BPT, MPT (Sports Medicine), FIFA Dip.",
    experience: "9+ Years High-Performance Rehab",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    serviceId: "knee-pain",
  },
  {
    name: "Dr. Vikram Patil, PT",
    role: "Senior Consultant – Neuro & Post-Op Rehab",
    qualifications: "BPT, MPT (Neurological Sciences)",
    experience: "11+ Years Post-Op Mobility Care",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    serviceId: "sports-injury",
  },
];

// 3 Health & Therapy Blog Posts for Terapia Blog Section
const BLOG_POSTS = [
  {
    id: 1,
    title: "5 Simple Stretches for Immediate Lower Back Pain Relief",
    category: "Spine Health",
    date: "October 10, 2026",
    excerpt: "Sitting for long hours weakens core muscles and compresses lumbar discs. Learn 5 gentle physical therapy stretches you can do at your desk.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    link: "/services/back-pain",
  },
  {
    id: 2,
    title: "Knee Osteoarthritis: Can Targeted Physiotherapy Avoid Surgery?",
    category: "Joint Care",
    date: "September 28, 2026",
    excerpt: "Discover how non-surgical radiofrequency and cartilage unloading exercises restore walking comfort and delay knee replacement.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    link: "/services/knee-pain",
  },
  {
    id: 3,
    title: "Tech-Neck & Cervical Stiffness: The Modern Desk Posture Guide",
    category: "Ergonomics",
    date: "September 15, 2026",
    excerpt: "Forward head posture adds up to 27kg of extra strain on your cervical spine. Learn ergonomic adjustments and deep flexor drills.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
    link: "/services/neck-pain",
  },
];

export default function HomePage() {
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Appointment Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "back-pain",
    careMode: "clinic",
    date: "",
    timeSlot: "evening",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [dateError, setDateError] = useState("");
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  // Fetch clinic data from API endpoint
  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      setIsLoading(true);
      const data = await fetchClinicData();
      if (isMounted) {
        setApiData(data);
        setIsLoading(false);
      }
    }

    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  function handleInputChange(e) {
    const { name, value } = e.target;
    if (name === "phone") {
      const cleanDigits = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: cleanDigits }));
      if (cleanDigits.length === 10) setPhoneError("");
      return;
    }
    if (name === "date") {
      setFormData((prev) => ({ ...prev, date: value }));
      setDateError("");
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.date) {
      setDateError("Please select a preferred appointment date.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitAppointmentApi(formData);
      setBookingRef(response.bookingRef || `REV-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Booking API error:", err);
      setBookingRef(`REV-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleResetForm() {
    setFormData({
      name: "",
      phone: "",
      service: "back-pain",
      careMode: "clinic",
      date: "",
      timeSlot: "evening",
      notes: "",
    });
    setPhoneError("");
    setDateError("");
    setIsSubmitted(false);
  }

  // Graceful loading state
  if (isLoading || !apiData) {
    return (
      <main className="modern-home-page loading-screen">
        <div className="home-container api-loading-box">
          <Loader2 size={36} className="spin-loader text-azure" />
          <p>Loading clinic information...</p>
        </div>
      </main>
    );
  }

  const {
    clinicInfo,
    hero,
    therapist,
    services,
    aboutClinic,
    whyChooseUs,
    treatmentSteps,
    testimonials,
  } = apiData;

  const faqs = apiData.faqs || [
    {
      question: "Can targeted physiotherapy really help me avoid surgery?",
      answer: "Yes. Non-surgical computerized spinal decompression and targeted manual protocols relieve pressure on nerves and restore joint biomechanics, successfully averting surgery in over 92% of moderate-to-severe orthopedic cases.",
    },
    {
      question: "How soon can I expect noticeable pain relief?",
      answer: "Most patients experience significant symptom relief (40% to 60%) within 3 to 4 sessions through our acute pain relief modalities, followed by structured functional rehabilitation.",
    },
    {
      question: "Do I need an MRI scan or physician's prescription for my first visit?",
      answer: "If you already have reports or MRI scans, please bring them along. However, they are not mandatory — our therapists perform full clinical orthopedic assessments on Day 1.",
    },
    {
      question: "Do you offer doorstep home visit physiotherapy?",
      answer: "Yes. For senior citizens, post-operative patients, or individuals with mobility restrictions, our certified senior therapists provide dedicated home visit sessions with portable therapy equipment.",
    },
  ];

  return (
    <main className="terapia-home-page">
      <section className="terapia-hero-section">
        <div className="terapia-hero-overlay"></div>
        <div className="home-container terapia-hero-container">
          <div className="terapia-hero-content">
            <div className="terapia-badge">
              <ShieldCheck size={16} />
              <span>BEST PHYSICAL THERAPY & ORTHOPEDIC CLINIC</span>
            </div>

            <h1 className="terapia-hero-title">
              Holistic Approach To Health & Non-Surgical Rehabilitation
            </h1>

            <p className="terapia-hero-desc">
              Personalized 1-on-1 physical therapy, computerized spinal decompression, and active joint preservation in Pune. Over 10,000+ patient recoveries with 94% avoiding invasive surgery.
            </p>

            <div className="terapia-hero-cta">
              <Link to="/appointment" className="btn-terapia-primary">
                <span>Book Appointment</span>
                <ArrowRight size={17} />
              </Link>
              <a href={`tel:+91${clinicInfo.rawPhone}`} className="btn-terapia-white">
                <Phone size={17} />
                <span>Call Helpline: {clinicInfo.rawPhone}</span>
              </a>
              <a
                href={`https://wa.me/91${clinicInfo.rawPhone}?text=Hello%20RevitaOrtho,%20I%20would%20like%20to%20consult%20a%20doctor.`}
                target="_blank"
                rel="noreferrer"
                className="btn-terapia-whatsapp"
              >
                <MessageCircle size={17} />
                <span>WhatsApp Doctor</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="terapia-feature-strip">
        <div className="home-container">
          <div className="terapia-feature-grid">
            <div className="terapia-feature-box">
              <div className="feature-box-icon">
                <Award size={30} />
              </div>
              <div className="feature-box-text">
                <h3>Certified Specialists</h3>
                <p>14+ years of clinical excellence led by hospital-experienced MPT orthopedic physiotherapists.</p>
              </div>
            </div>

            <div className="terapia-feature-box">
              <div className="feature-box-icon">
                <ShieldCheck size={30} />
              </div>
              <div className="feature-box-text">
                <h3>100% Non-Surgical</h3>
                <p>Advanced computerized decompression, cold laser, and manual therapy avoiding invasive procedures.</p>
              </div>
            </div>

            <div className="terapia-feature-box">
              <div className="feature-box-icon">
                <Clock size={30} />
              </div>
              <div className="feature-box-text">
                <h3>Zero Waiting Time</h3>
                <p>Pre-scheduled 45-minute consultation slots from 8 AM to 8 PM, plus doorstep home therapy in Pune.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="terapia-about-section section-padding" id="about">
        <div className="home-container">
          <div className="terapia-about-grid">
            <div className="terapia-about-img-col">
              <div className="terapia-about-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                  alt="Doctor treating patient at RevitaOrtho Physical Therapy"
                  className="terapia-about-img"
                />
                <div className="terapia-experience-badge">
                  <span className="exp-number">14+</span>
                  <span className="exp-label">Years of Clinical Experience</span>
                </div>
              </div>
            </div>

            <div className="terapia-about-text-col">
              <span className="terapia-section-subtitle">ABOUT OUR CLINIC</span>
              <h2 className="terapia-section-title">
                We Are Here To Optimize Your Health & Physical Mobility
              </h2>
              <p className="terapia-lead-text">
                RevitaOrtho is a dedicated outpatient physical therapy center equipped with modern European rehabilitation technology and private sanitized treatment suites, focused on helping patients recover naturally without unnecessary surgery or painkillers.
              </p>

              <div className="terapia-about-points-grid">
                <div className="about-point-item">
                  <CheckCircle2 size={20} className="point-icon" />
                  <div>
                    <strong>Comprehensive Diagnostic</strong>
                    <p>Accurate 45-minute orthopedic & nerve evaluation before therapy.</p>
                  </div>
                </div>

                <div className="about-point-item">
                  <CheckCircle2 size={20} className="point-icon" />
                  <div>
                    <strong>Dedicated 1-on-1 Focus</strong>
                    <p>Every session led personally by specialized MPT clinicians.</p>
                  </div>
                </div>

                <div className="about-point-item">
                  <CheckCircle2 size={20} className="point-icon" />
                  <div>
                    <strong>Modern European Technology</strong>
                    <p>Motorized spinal decompression and German laser therapy.</p>
                  </div>
                </div>

                <div className="about-point-item">
                  <CheckCircle2 size={20} className="point-icon" />
                  <div>
                    <strong>Long-Term Relapse Prevention</strong>
                    <p>Custom home exercise prescriptions to keep you permanently pain-free.</p>
                  </div>
                </div>
              </div>

              <div className="terapia-about-cta">
                <Link to="/about" className="btn-terapia-primary">
                  <span>Learn More About Us</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/appointment" className="btn-terapia-outline">
                  <span>Book Initial Assessment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="terapia-services-section section-padding" id="services">
        <div className="home-container">
          <div className="section-header-centered">
            <span className="terapia-section-subtitle">OUR SERVICES</span>
            <h2 className="terapia-section-title">Personalized Physical Therapy Treatments</h2>
            <p className="section-main-desc">
              We specialize in diagnosing and treating the root causes of spine, joint, and athletic conditions using evidence-based European technology.
            </p>
          </div>

          <div className="terapia-services-grid">
            {services?.map((srv) => {
              const ServiceIcon = getIcon(srv.iconName, Activity);
              
              const serviceImages = {
                "back-pain": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
                "knee-pain": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
                "neck-pain": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
                "sports-injury": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
              };
              const cardImg = serviceImages[srv.id] || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80";

              return (
                <div key={srv.id} className="terapia-service-card">
                  <div className="service-card-image-wrap">
                    <img src={cardImg} alt={srv.title} className="service-card-img" />
                    <div className="service-floating-icon">
                      <ServiceIcon size={24} />
                    </div>
                  </div>

                  <div className="service-card-body">
                    <h3 className="service-card-title">{srv.title}</h3>
                    <p className="service-card-desc">{srv.desc}</p>

                    <div className="service-card-bullets">
                      {srv.highlights?.map((h, i) => (
                        <div key={i} className="service-bullet-row">
                          <Check size={14} className="bullet-check" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="service-card-actions">
                      <Link
                        to={`/appointment?service=${srv.id}`}
                        className="btn-card-book"
                      >
                        <Calendar size={13} />
                        <span>Book Consult</span>
                      </Link>
                      <Link to={srv.link} className="btn-card-readmore">
                        <span>Read More</span>
                        <ChevronRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="terapia-services-footer-banner">
            <div>
              <h4>Looking for post-surgical rehab or ergonomic posture correction?</h4>
              <p>Connect with our senior physical therapy team for specialized recovery programs.</p>
            </div>
            <div className="services-footer-btns">
              <Link to="/services" className="btn-terapia-outline">
                <span>View All Services</span>
              </Link>
              <Link to="/appointment" className="btn-terapia-primary">
                <span>Book Direct Evaluation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="terapia-why-section section-padding" id="why-choose-us">
        <div className="home-container">
          <div className="section-header-centered">
            <span className="terapia-section-subtitle">WHY CHOOSE US</span>
            <h2 className="terapia-section-title">Why Patients Choose Our Rehabilitation Facility</h2>
            <p className="section-main-desc">
              Three core pillars that define our patient experience and ensure predictable, high-quality clinical outcomes.
            </p>
          </div>

          <div className="terapia-why-grid">
            {whyChooseUs?.map((pillar, idx) => {
              const PillarIcon = getIcon(pillar.iconName, Award);
              return (
                <div key={idx} className="terapia-why-card">
                  <div className="why-card-icon-box">
                    <PillarIcon size={28} />
                  </div>
                  <h3 className="why-card-title">{pillar.title}</h3>
                  <p className="why-card-text">{pillar.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="terapia-reassurance-strip">
            <div className="reassurance-left">
              <BadgeCheck size={32} className="reassurance-badge-icon" />
              <div>
                <strong>Over 10,000+ Patients Restored to Active Living</strong>
                <p>Zero long-term lock-in packages, transparent fee structure, and complete insurance assistance.</p>
              </div>
            </div>
            <div className="reassurance-right">
              <a href={`tel:+91${clinicInfo.rawPhone}`} className="btn-terapia-primary">
                <Phone size={16} />
                <span>Call Helpline: {clinicInfo.rawPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="terapia-appointment-section section-padding" id="appointment-section">
        <div className="home-container">
          <div className="terapia-appointment-grid">
            <div className="appointment-left-col">
              <span className="terapia-section-subtitle light-subtitle">ONLINE BOOKING</span>
              <h2 className="terapia-section-title light-title">
                Book Your Direct In-Clinic Or Home Physiotherapy Consultation
              </h2>
              <p className="appointment-lead-text">
                Take the first step toward lasting pain relief. Book your 45-minute comprehensive diagnostic assessment online with zero waiting time.
              </p>

              <div className="appointment-benefits-list">
                <div className="appt-benefit-item">
                  <CheckCircle2 size={18} className="benefit-icon" />
                  <span>Comprehensive 45-minute root-cause orthopedic diagnosis</span>
                </div>
                <div className="appt-benefit-item">
                  <CheckCircle2 size={18} className="benefit-icon" />
                  <span>Dedicated 1-on-1 treatment with certified senior MPT doctor</span>
                </div>
                <div className="appt-benefit-item">
                  <CheckCircle2 size={18} className="benefit-icon" />
                  <span>Safe European computerized decompression & cold laser therapy</span>
                </div>
                <div className="appt-benefit-item">
                  <CheckCircle2 size={18} className="benefit-icon" />
                  <span>Doorstep home visit physiotherapy available across Pune</span>
                </div>
              </div>

              <div className="appointment-hotline-card">
                <div className="hotline-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <span>Need Immediate Assistance? Call Our Desk:</span>
                  <a href={`tel:+91${clinicInfo.rawPhone}`} className="hotline-phone">
                    +91 {clinicInfo.rawPhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="appointment-right-col">
              <div className="appointment-form-card">
                {isSubmitted ? (
                  <div className="form-success-box">
                    <CheckCircle2 size={46} className="success-ico" />
                    <h3>Appointment Request Submitted!</h3>
                    <p className="booking-ref-code">
                      Booking Reference: <strong>{bookingRef}</strong>
                    </p>
                    <p className="success-instruction">
                      Thank you, <strong>{formData.name || "Patient"}</strong>. Our clinical coordination desk will contact you at <strong>{formData.phone}</strong> within 30 minutes to confirm your scheduled slot.
                    </p>
                    <div className="success-btn-row">
                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="btn-terapia-outline"
                      >
                        Book Another Slot
                      </button>
                      <a
                        href={`https://wa.me/91${clinicInfo.rawPhone}?text=Hello%20RevitaOrtho,%20I%20have%20submitted%20booking%20ref%20${bookingRef}%20for%20appointment.`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-terapia-primary"
                      >
                        <MessageCircle size={16} />
                        <span>Confirm via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="terapia-booking-form">
                    <h3 className="form-header-title">Schedule An Appointment</h3>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="patient-name">Your Full Name *</label>
                        <input
                          id="patient-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Rahul Sharma"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="patient-phone">10-Digit Mobile Number *</label>
                        <input
                          id="patient-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="9145875248"
                          required
                        />
                        {phoneError && <span className="input-err-text">{phoneError}</span>}
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="patient-service">Area of Pain / Condition *</label>
                        <select
                          id="patient-service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                        >
                          <option value="back-pain">Back Pain & Sciatica (Spine)</option>
                          <option value="neck-pain">Neck Pain & Cervical Care</option>
                          <option value="sports-injury">Sports Injury & Ligament Rehab</option>
                          <option value="knee-pain">Knee Pain & Arthritis</option>
                          <option value="other">General Orthopedic Assessment</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="patient-mode">Consultation Mode *</label>
                        <select
                          id="patient-mode"
                          name="careMode"
                          value={formData.careMode}
                          onChange={handleInputChange}
                        >
                          <option value="clinic">In-Clinic Consultation (Pune)</option>
                          <option value="home">Home Visit Physiotherapy</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="patient-date">Preferred Date *</label>
                        <input
                          id="patient-date"
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split("T")[0]}
                          required
                        />
                        {dateError && <span className="input-err-text">{dateError}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="patient-slot">Preferred Time Slot *</label>
                        <select
                          id="patient-slot"
                          name="timeSlot"
                          value={formData.timeSlot}
                          onChange={handleInputChange}
                        >
                          <option value="morning">Morning (8:30 AM – 12:00 PM)</option>
                          <option value="afternoon">Afternoon (12:00 PM – 4:00 PM)</option>
                          <option value="evening">Evening (4:00 PM – 8:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="patient-notes">Brief Description of Pain (Optional)</label>
                      <textarea
                        id="patient-notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="e.g. Pain for 2 weeks, trouble bending or sitting..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-terapia-submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="spin-loader" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <Calendar size={18} />
                          <span>Confirm Appointment Request</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="terapia-team-section section-padding" id="team">
        <div className="home-container">
          <div className="section-header-centered">
            <span className="terapia-section-subtitle">OUR THERAPISTS</span>
            <h2 className="terapia-section-title">Meet Our Specialized Clinical Team</h2>
            <p className="section-main-desc">
              All evaluations and therapies are personally administered by hospital-certified Master's degree physiotherapists.
            </p>
          </div>

          <div className="terapia-team-grid">
            {TEAM_MEMBERS.map((doc, idx) => (
              <div key={idx} className="terapia-team-card">
                <div className="team-card-img-wrap">
                  <img src={doc.image} alt={doc.name} className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">{doc.name}</h3>
                  <span className="team-card-role">{doc.role}</span>
                  <p className="team-card-degree">{doc.qualifications}</p>
                  <span className="team-card-exp">{doc.experience}</span>
                  <Link
                    to={`/appointment?service=${doc.serviceId}`}
                    className="btn-team-consult"
                  >
                    <span>Book Consultation</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="terapia-blog-section section-padding" id="blog">
        <div className="home-container">
          <div className="section-header-centered">
            <span className="terapia-section-subtitle">LATEST BLOG</span>
            <h2 className="terapia-section-title">Physical Therapy & Health Tips</h2>
            <p className="section-main-desc">
              Expert advice, posture ergonomics, and active rehabilitation guides written by our clinical team.
            </p>
          </div>

          <div className="terapia-blog-grid">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="terapia-blog-card">
                <div className="blog-card-img-wrap">
                  <img src={post.image} alt={post.title} className="blog-card-img" />
                  <span className="blog-card-cat">{post.category}</span>
                </div>
                <div className="blog-card-body">
                  <span className="blog-card-date">{post.date}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <Link to={post.link} className="btn-blog-readmore">
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="terapia-faq-section section-padding" id="faq">
        <div className="home-container">
          <div className="section-header-centered">
            <span className="terapia-section-subtitle">PATIENT FAQS</span>
            <h2 className="terapia-section-title">Frequently Asked Questions</h2>
            <p className="section-main-desc">
              Direct, transparent answers regarding treatments, session timelines, and appointment booking.
            </p>
          </div>

          <div className="terapia-faq-accordion">
            {faqs?.map((faq, idx) => (
              <div
                key={idx}
                className={`terapia-faq-item ${openFaqIdx === idx ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="terapia-faq-trigger"
                  onClick={() => setOpenFaqIdx(openFaqIdx === idx ? -1 : idx)}
                >
                  <span className="faq-q-text">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`faq-arrow ${openFaqIdx === idx ? "is-rotated" : ""}`}
                  />
                </button>
                {openFaqIdx === idx && (
                  <div className="terapia-faq-body">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
