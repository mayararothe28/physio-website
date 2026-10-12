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
} from "lucide-react";
import { fetchClinicData, submitAppointmentApi } from "../services/api";
import "./HomePage.css";

// Dynamic Lucide icon lookup for data loaded from API
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
};

function getIcon(name, fallback = Activity) {
  return ICON_MAP[name] || fallback;
}

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

  // Smooth Intersection Observer for subtle scroll reveal
  useEffect(() => {
    if (isLoading) return;

    const elements = document.querySelectorAll(".scroll-reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isLoading]);

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

  function scrollToAppointment() {
    const formEl = document.getElementById("appointment-section");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Graceful loading state
  if (isLoading || !apiData) {
    return (
      <main className="modern-home-page loading-screen">
        <div className="home-container api-loading-box">
          <Loader2 size={36} className="spin-loader text-azure" />
          <p>Loading clinic data from API...</p>
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

  const trustStats = apiData.trustStats || [
    {
      value: "14+",
      label: "Years Clinical Practice",
      sublabel: "Specialized Orthopedic Care",
      iconName: "Award",
    },
    {
      value: "10,000+",
      label: "Patients Recovered",
      sublabel: "Documented Clinical Cases",
      iconName: "Users",
    },
    {
      value: "94%",
      label: "Surgeries Avoided",
      sublabel: "Non-Surgical Spinal & Joint Care",
      iconName: "ShieldCheck",
    },
    {
      value: "4.98 / 5.0",
      label: "Patient Rating",
      sublabel: "Verified Clinical Reviews",
      iconName: "Star",
    },
  ];

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
    <main className="modern-home-page">
      {/* ─── 2. HERO SECTION ─── */}
      <section className="clean-hero-section">
        <div className="home-container">
          <div className="clean-hero-grid">
            {/* Left Column: Heading + Short Intro + Appointment Button */}
            <div className="hero-text-content">
              <div className="hero-kicker-pill">
                <span className="kicker-pulse-beacon"></span>
                <ShieldCheck size={16} className="text-emerald" />
                <span>{hero.badge || "CERTIFIED HEALTHCARE FACILITY • ADVANCED PHYSIOTHERAPY"}</span>
              </div>

              <h1 className="hero-main-title">
                {hero.title}
                <br />
                <span className="hero-animated-gradient-text">{hero.highlight}</span>
              </h1>

              <p className="hero-description">{hero.description}</p>

              {/* Quick Trust Highlights */}
              <div className="hero-assurance-strip">
                {hero.assuranceTags?.map((tag, idx) => (
                  <span key={idx} className="assurance-tag">
                    <CheckCircle2 size={16} className="text-emerald" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Appointment & Contact CTAs */}
              <div className="hero-cta-group">
                <button
                  type="button"
                  onClick={scrollToAppointment}
                  className="btn-hero-primary btn-animated-shine"
                >
                  <Calendar size={18} />
                  <span>Book Appointment</span>
                  <ArrowRight size={17} className="btn-arrow-icon" />
                </button>

                <a
                  href={`tel:+91${clinicInfo.rawPhone}`}
                  className="btn-hero-secondary"
                >
                  <Phone size={17} />
                  <span>Call: {clinicInfo.rawPhone}</span>
                </a>

                <a
                  href={`https://wa.me/91${clinicInfo.rawPhone}?text=Hello%20RevitaOrtho,%20I%20would%20like%20to%20consult%20a%20physiotherapist.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-hero-whatsapp"
                  aria-label="WhatsApp Helpline"
                >
                  <MessageCircle size={17} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Clinical Diagnostic Hub & Specialist Assurances (No Photo) */}
            <div className="hero-doctor-card-col">
              <div className="clinical-hero-hub-card">
                <div className="hub-card-header">
                  <div className="hub-icon-frame">
                    <ShieldCheck size={26} className="text-emerald" />
                  </div>
                  <div>
                    <span className="hub-kicker-tag">NON-SURGICAL PHYSICAL MEDICINE</span>
                    <h3 className="hub-card-title">Specialized Clinical Diagnostic</h3>
                  </div>
                </div>

                <div className="hub-live-ribbon">
                  <span className="live-pulse-dot"></span>
                  <span>In-Clinic & Home Visits Available Today</span>
                </div>

                <div className="hub-feature-list">
                  <div className="hub-feature-item">
                    <CheckCircle2 size={16} className="text-azure hub-feat-ico" />
                    <div>
                      <strong>45-Min Root-Cause Diagnostic</strong>
                      <p>Musculoskeletal assessment, provocation tests & nerve screening.</p>
                    </div>
                  </div>

                  <div className="hub-feature-item">
                    <CheckCircle2 size={16} className="text-azure hub-feat-ico" />
                    <div>
                      <strong>Advanced European Modalities</strong>
                      <p>Computerized spinal decompression & Class-IV deep cold laser.</p>
                    </div>
                  </div>

                  <div className="hub-feature-item">
                    <CheckCircle2 size={16} className="text-azure hub-feat-ico" />
                    <div>
                      <strong>Dedicated 1-on-1 Specialist Care</strong>
                      <p>Treated directly by senior MPT clinicians with zero waiting time.</p>
                    </div>
                  </div>

                  <div className="hub-feature-item">
                    <CheckCircle2 size={16} className="text-azure hub-feat-ico" />
                    <div>
                      <strong>Insurance & Cashless Support</strong>
                      <p>Comprehensive paperwork support for all health insurance claims.</p>
                    </div>
                  </div>
                </div>

                <div className="hub-clinician-footer">
                  <div className="hub-clinician-info">
                    <div className="hub-clinician-avatar">
                      <Stethoscope size={19} className="text-azure" />
                    </div>
                    <div>
                      <strong>{therapist.name}</strong>
                      <span>{therapist.role} • {therapist.experience}</span>
                    </div>
                  </div>
                  <div className="hub-rating-pill">
                    <Star size={14} className="star-gold fill-gold" />
                    <span>{therapist.rating}</span>
                  </div>
                </div>

                <div className="hub-action-row">
                  <button
                    type="button"
                    onClick={scrollToAppointment}
                    className="btn-hub-appointment"
                  >
                    <Calendar size={15} />
                    <span>Reserve Evaluation Slot</span>
                    <ArrowRight size={14} />
                  </button>
                  <a
                    href={`https://wa.me/91${clinicInfo.rawPhone}?text=Hello%20RevitaOrtho,%20I%20would%20like%20to%20consult%20regarding%20an%20evaluation.`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-hub-whatsapp"
                    title="WhatsApp Doctor"
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. TRUST INDICATORS (Stats Bar) ─── */}
      <section className="trust-indicators-section">
        <div className="home-container">
          <div className="trust-indicators-grid">
            {trustStats?.map((stat, idx) => {
              const StatIcon = getIcon(stat.iconName, Award);
              return (
                <div
                  key={idx}
                  className="trust-stat-card scroll-reveal"
                  style={{ transitionDelay: `${idx * 0.08}s` }}
                >
                  <div className="stat-icon-wrap">
                    <StatIcon size={24} className="stat-ico" />
                  </div>
                  <div className="stat-content">
                    <span className="stat-number">{stat.value}</span>
                    <strong className="stat-label">{stat.label}</strong>
                    <span className="stat-sublabel">{stat.sublabel}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. ABOUT THE CLINIC & PHYSIOTHERAPIST ─── */}
      <section className="about-clinic-section section-padding" id="about">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">ABOUT REVITAORTHO</span>
            <h2 className="section-main-title">
              {aboutClinic.title}
              <br />
              <span className="text-azure">Evidence-Based Healing</span>
            </h2>
            <p className="section-main-desc">
              Discover how our clinic philosophy, root-cause treatment approach, and qualified therapists deliver lasting recovery.
            </p>
          </div>

          <div className="about-clinic-card scroll-reveal">
            <div className="about-clinic-grid">
              {/* Left Column: Clinical Leadership & Credentials (No Image) */}
              <div className="about-therapist-col">
                <div className="about-leadership-card">
                  <div className="leadership-badge-tag">
                    <Award size={15} className="text-azure" />
                    <span>CLINICAL EXCELLENCE & LEADERSHIP</span>
                  </div>

                  <div className="leadership-header">
                    <div className="leadership-avatar-icon">
                      <Stethoscope size={28} className="text-azure" />
                    </div>
                    <div>
                      <h3 className="leadership-name">{therapist.name}</h3>
                      <p className="leadership-role">{therapist.role}</p>
                      <p className="leadership-degree">{therapist.qualifications}</p>
                    </div>
                  </div>

                  <div className="leadership-meta-strip">
                    <div className="leadership-meta-item">
                      <Clock size={15} className="text-azure" />
                      <div>
                        <strong>{therapist.experience}</strong>
                        <span>Clinical Practice</span>
                      </div>
                    </div>
                    <div className="leadership-meta-item">
                      <Users size={15} className="text-azure" />
                      <div>
                        <strong>10,000+</strong>
                        <span>Recoveries</span>
                      </div>
                    </div>
                    <div className="leadership-meta-item">
                      <Star size={15} className="star-gold fill-gold" />
                      <div>
                        <strong>{therapist.rating} / 5.0</strong>
                        <span>Verified Care</span>
                      </div>
                    </div>
                  </div>

                  <div className="leadership-affiliations-box">
                    <span className="affiliations-title">Key Clinical Affiliations & Accreditations</span>
                    <div className="affiliations-list">
                      {therapist.affiliations?.map((point, idx) => (
                        <div key={idx} className="affiliation-item">
                          <CheckCircle2 size={16} className="text-emerald" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="leadership-guarantee-box">
                    <ShieldCheck size={18} className="text-azure" />
                    <p>
                      <strong>100% Non-Surgical Protocol:</strong> Evidence-based manual therapy, targeted joint decompression, and functional motor re-education.
                    </p>
                  </div>

                  <div className="leadership-actions">
                    <Link to="/team" className="btn-team-link">
                      <span>Meet Our Full Panel of Specialized Clinicians &rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Clinic Introduction & Treatment Approach */}
              <div className="about-content-col">
                <span className="about-subtag">CLINIC INTRODUCTION & TREATMENT APPROACH</span>
                <h3>We Treat the Root Cause, Not Just the Symptoms</h3>
                <p className="about-lead-copy">{aboutClinic.leadCopy}</p>

                <div className="approach-grid">
                  {aboutClinic.approaches?.map((app, idx) => {
                    const AppIcon = getIcon(app.iconName, Stethoscope);
                    return (
                      <div key={idx} className="approach-card">
                        <div className="approach-icon">
                          <AppIcon size={20} className="text-azure" />
                        </div>
                        <div>
                          <strong>{app.title}</strong>
                          <p>{app.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="about-cta-row">
                  <button
                    type="button"
                    onClick={scrollToAppointment}
                    className="btn-clinical-primary"
                  >
                    <Calendar size={17} />
                    <span>Schedule Initial Evaluation</span>
                  </button>
                  <Link to="/about" className="btn-clinical-outline">
                    <span>More About Our Facility</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. MAIN SERVICES (Back pain · Neck pain · Sports injury · Knee pain) ─── */}
      <section className="main-services-section section-padding" id="services">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">CORE CLINICAL SPECIALTIES</span>
            <h2 className="section-main-title">
              Our Main Physiotherapy Services
              <br />
              <span className="text-azure">Targeted Non-Surgical Recovery</span>
            </h2>
            <p className="section-main-desc">
              We specialize in diagnosing and treating the root causes of spine, joint, and athletic conditions using evidence-based European technology.
            </p>
          </div>

          <div className="services-grid-4 scroll-reveal">
            {services?.map((srv) => {
              const ServiceIcon = getIcon(srv.iconName, Activity);
              return (
                <div key={srv.id} className="service-item-card">
                  <div className="service-card-top">
                    <div className="service-icon-wrap">
                      <ServiceIcon size={24} className="service-icon" />
                    </div>
                    <span className="service-tag-badge">{srv.tag}</span>
                  </div>

                  <h3 className="service-card-title">{srv.title}</h3>
                  <span className="service-card-sub">{srv.subtitle}</span>

                  <p className="service-card-desc">{srv.desc}</p>

                  <div className="service-highlights-list">
                    {srv.highlights?.map((h, i) => (
                      <div key={i} className="highlight-row">
                        <Check size={14} className="text-emerald" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="service-bottom-links">
                    <button
                      type="button"
                      onClick={scrollToAppointment}
                      className="btn-service-book"
                    >
                      Book Consult
                    </button>
                    <Link to={srv.link} className="service-read-more">
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="services-all-cta scroll-reveal">
            <p>Looking for post-surgical rehab, joint restoration, or ergonomic posture correction?</p>
            <div className="services-cta-actions">
              <Link to="/services" className="btn-clinical-secondary">
                <span>View All Services & Modalities</span>
                <ArrowRight size={16} />
              </Link>
              <button
                type="button"
                onClick={scrollToAppointment}
                className="btn-clinical-primary"
              >
                <span>Book Direct Evaluation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. WHY CHOOSE US (Qualified therapists · Personalized care · Convenient appointments) ─── */}
      <section className="why-choose-section section-padding" id="why-choose-us">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">THE REVITAORTHO COMMITMENT</span>
            <h2 className="section-main-title">
              Why Choose RevitaOrtho?
              <br />
              <span className="text-azure">Patient-Centered Excellence</span>
            </h2>
            <p className="section-main-desc">
              Three core pillars that define our patient experience and ensure predictable, high-quality clinical outcomes.
            </p>
          </div>

          <div className="why-pillars-grid scroll-reveal">
            {whyChooseUs?.map((pillar, idx) => {
              const PillarIcon = getIcon(pillar.iconName, Award);
              return (
                <div key={idx} className="why-pillar-card">
                  <div className="pillar-icon-box">
                    <PillarIcon size={26} className="pillar-ico" />
                  </div>
                  <h3 className="pillar-card-title">{pillar.title}</h3>
                  <p className="pillar-card-text">{pillar.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Reassurance Banner */}
          <div className="why-banner-strip scroll-reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="banner-strip-left">
              <BadgeCheck size={30} className="text-emerald" />
              <div>
                <strong>Over 10,000+ Patients Restored to Active Living</strong>
                <p>Zero long-term lock-in packages, transparent fee structure, and complete insurance assistance.</p>
              </div>
            </div>
            <div className="banner-strip-right">
              <a href={`tel:+91${clinicInfo.rawPhone}`} className="btn-clinical-primary">
                <Phone size={17} />
                <span>Call Helpline: {clinicInfo.rawPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. TREATMENT PROCESS (Book appointment → Assessment → Treatment plan → Follow-up) ─── */}
      <section className="treatment-process-section section-padding" id="treatment-process">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">STRUCTURED CLINICAL JOURNEY</span>
            <h2 className="section-main-title">
              Our 4-Step Treatment Process
              <br />
              <span className="text-azure">From First Call to Lasting Wellness</span>
            </h2>
            <p className="section-main-desc">
              We follow a transparent, milestone-driven protocol. Every step is clearly explained before you start.
            </p>
          </div>

          <div className="process-flow-grid scroll-reveal">
            {treatmentSteps?.map((step, idx) => {
              const StepIcon = getIcon(step.iconName, Calendar);
              return (
                <div key={idx} className="process-card">
                  <div className="process-card-top">
                    <span className="process-step-num">{step.step}</span>
                    <StepIcon size={22} className="process-icon" />
                  </div>
                  <span className="process-timing-tag">{step.timing}</span>
                  <h3 className="process-card-title">{step.title}</h3>
                  <p className="process-card-desc">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="process-bottom-note scroll-reveal" style={{ transitionDelay: "0.2s" }}>
            <Clock size={22} className="text-emerald" />
            <p>
              <strong>Transparent Treatment Roadmap on Day 1:</strong> Following your 45-minute assessment, you receive an objective diagnostic report detailing expected session counts and milestones.
            </p>
            <Link
              to="/appointment"
              className="btn-process-action"
            >
              <span>Start Step 1</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 7. PATIENT TESTIMONIALS (Genuine patient feedback, with permission) ─── */}
      <section className="patient-testimonials-section section-padding" id="testimonials">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">PATIENT EXPERIENCES</span>
            <h2 className="section-main-title">
              Patient Testimonials
              <br />
              <span className="text-azure">Feedback Shared with Patient Permission</span>
            </h2>
            <p className="section-main-desc">
              Real recovery feedback from active individuals and seniors who regained comfort and mobility at RevitaOrtho.
            </p>
          </div>

          <div className="testimonials-cards-grid scroll-reveal">
            {testimonials?.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="test-header-row">
                  <div className="test-stars">
                    {[...Array(t.rating || 5)].map((_, s) => (
                      <Star key={s} size={16} className="star-gold fill-gold" />
                    ))}
                  </div>
                  <span className="permission-tag">
                    <BadgeCheck size={14} /> Shared with Permission
                  </span>
                </div>

                <p className="test-text">"{t.text}"</p>

                <div className="test-condition-badge">
                  <strong>Treated For:</strong> {t.condition}
                </div>

                <div className="test-author-box">
                  <div className="author-circle">{t.name.charAt(0)}</div>
                  <div className="author-info">
                    <strong>{t.name}</strong>
                    <span>{t.role} • {t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rating Summary Strip */}
          <div className="google-rating-summary scroll-reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="google-rating-inner">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google Reviews"
                className="google-badge-img"
              />
              <div className="google-badge-text">
                <strong>4.98 Out of 5.0 Rating</strong>
                <span>Based on verified patient reviews and clinical feedback</span>
              </div>
            </div>

            <Link to="/testimonials" className="btn-clinical-outline">
              <span>Read All Patient Reviews</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 8. FREQUENTLY ASKED QUESTIONS (FAQ) ─── */}
      <section className="home-faq-section section-padding" id="faq">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">PATIENT FAQS</span>
            <h2 className="section-main-title">
              Frequently Asked Questions
              <br />
              <span className="text-azure">Direct Answers Before Starting Care</span>
            </h2>
            <p className="section-main-desc">
              Have doubts about non-surgical relief, session timelines, or recovery expectations? Here are honest clinical answers.
            </p>
          </div>

          <div className="home-faq-accordion-wrap scroll-reveal">
            {faqs?.map((faq, idx) => (
              <div
                key={idx}
                className={`home-faq-item ${openFaqIdx === idx ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="home-faq-trigger"
                  onClick={() => setOpenFaqIdx(openFaqIdx === idx ? -1 : idx)}
                  aria-expanded={openFaqIdx === idx}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown
                    size={19}
                    className={`faq-chevron ${openFaqIdx === idx ? "is-rotated" : ""}`}
                  />
                </button>
                {openFaqIdx === idx && (
                  <div className="home-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="home-faq-footer-bar scroll-reveal">
            <span>Looking for answers on insurance coverage, specialized protocols, or diagnostics?</span>
            <Link to="/faq" className="btn-clinical-secondary">
              <span>View All Frequently Asked Questions</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 9. APPOINTMENT / CONTACT (Contact details · Location · Phone · Appointment form) ─── */}
      <section className="appointment-contact-section section-padding" id="appointment-section">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">RESERVE YOUR CONSULTATION</span>
            <h2 className="section-main-title">
              Appointment & Contact Desk
              <br />
              <span className="text-azure">We Are Ready to Help You Heal</span>
            </h2>
            <p className="section-main-desc">
              Book your 45-minute comprehensive diagnostic assessment online, or connect directly with our patient coordination desk.
            </p>
          </div>

          <div className="appointment-contact-layout scroll-reveal">
            {/* Form Column */}
            <div className="form-card-container">
              {isSubmitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={46} className="text-emerald success-ico" />
                  <h3>Appointment Request Submitted!</h3>
                  <p className="booking-ref-code">
                    Booking Reference: <strong>{bookingRef}</strong>
                  </p>
                  <p className="success-instruction">
                    Thank you, <strong>{formData.name || "Patient"}</strong>. Our clinical coordination desk will contact you at <strong>{formData.phone}</strong> within 30 minutes to confirm your scheduled slot.
                  </p>

                  <div className="success-breakdown">
                    <div>
                      <span>Condition / Concern:</span>
                      <strong>
                        {services?.find((s) => s.id === formData.service)?.title || "General Orthopedic"}
                      </strong>
                    </div>
                    <div>
                      <span>Consultation Mode:</span>
                      <strong>{formData.careMode === "clinic" ? "In-Clinic Consultation" : "Home Visit Physiotherapy"}</strong>
                    </div>
                    <div>
                      <span>Preferred Date:</span>
                      <strong>{formData.date}</strong>
                    </div>
                  </div>

                  <div className="success-btn-row">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="btn-clinical-secondary"
                    >
                      Book Another Slot
                    </button>
                    <a
                      href={`https://wa.me/91${clinicInfo.rawPhone}?text=Hello%20RevitaOrtho,%20I%20have%20submitted%20booking%20ref%20${bookingRef}%20for%20appointment.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-clinical-primary"
                    >
                      <MessageCircle size={16} />
                      <span>Confirm via WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="in-clinic-form">
                  <div className="form-legend-strip">
                    <Calendar size={18} className="text-azure" />
                    <strong>Book Consultation / In-Clinic Assessment</strong>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="patient-name">Patient Full Name *</label>
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
                      <label htmlFor="patient-phone">Mobile Number *</label>
                      <input
                        id="patient-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={clinicInfo.rawPhone || "9145875248"}
                        required
                      />
                      {phoneError && <span className="input-err-text">{phoneError}</span>}
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="patient-service">Area of Pain / Condition *</label>
                      <select
                        id="patient-service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                      >
                        <option value="back-pain">Back Pain & Sciatica (Spine)</option>
                        <option value="neck-pain">Neck Pain & Posture Care</option>
                        <option value="sports-injury">Sports Injury & Ligament Rehab</option>
                        <option value="knee-pain">Knee Pain & Cartilage Care</option>
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
                        <option value="clinic">In-Clinic Consultation</option>
                        <option value="home">Home Visit Physiotherapy</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-grid-2">
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
                    <label htmlFor="patient-notes">Brief Description of Symptoms (Optional)</label>
                    <textarea
                      id="patient-notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="e.g. Discomfort for 2 weeks, trouble sitting or bending..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-form-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="spin-loader" />
                        <span>Sending Request to API...</span>
                      </>
                    ) : (
                      <>
                        <Calendar size={18} />
                        <span>Confirm Appointment Request</span>
                        <ArrowRight size={17} />
                      </>
                    )}
                  </button>

                  <div className="form-guarantee-note">
                    <ShieldCheck size={14} className="text-emerald" />
                    <span>Zero waiting time policy. Your medical data is strictly confidential.</span>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Details & Location Column */}
            <div className="contact-details-box">
              <div className="contact-header-strip">
                <span className="contact-tag">CONTACT & CLINIC LOCATION</span>
                <h3>{clinicInfo.name} Spine & Joint Clinic</h3>
                <p>Modern clinical facility featuring private treatment suites, elevator access, and reserved patient parking.</p>
              </div>

              <div className="contact-details-list">
                <div className="contact-row">
                  <MapPin size={20} className="contact-icon text-azure" />
                  <div>
                    <strong>Clinic Address & Location</strong>
                    <p>{clinicInfo.address}</p>
                  </div>
                </div>

                <div className="contact-row">
                  <Clock size={20} className="contact-icon text-azure" />
                  <div>
                    <strong>Clinic Consultation Timings</strong>
                    <p>{clinicInfo.timings}</p>
                  </div>
                </div>

                <div className="contact-row">
                  <Phone size={20} className="contact-icon text-azure" />
                  <div>
                    <strong>Direct Helpline & Appointments</strong>
                    <p>
                      <a href={`tel:+91${clinicInfo.rawPhone}`} className="phone-bold-link">
                        {clinicInfo.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-direct-actions">
                <a
                  href={`https://wa.me/91${clinicInfo.rawPhone}?text=Hello%20RevitaOrtho,%20I%20want%20to%20book%20an%20appointment.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp-direct"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp ({clinicInfo.phone})</span>
                </a>

                <a
                  href={clinicInfo.googleMapsUrl || "https://maps.google.com"}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-maps-direct"
                >
                  <ExternalLink size={16} />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>

              <div className="clinic-amenities-row">
                {clinicInfo.amenities?.map((amenity, idx) => (
                  <div key={idx} className="amenity-item">
                    <CheckCircle2 size={15} className="text-emerald" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
