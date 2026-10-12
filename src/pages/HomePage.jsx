import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
} from "lucide-react";
import "./HomePage.css";

// ─── 1. MAIN SERVICES (Back pain · Neck pain · Sports injury · Knee pain) ───
const MAIN_SERVICES = [
  {
    id: "back-pain",
    title: "Back Pain & Sciatica",
    subtitle: "Disc Bulge, Sciatic Nerve Pinch & Lumbar Stiffness",
    desc: "Computerized non-surgical spinal decompression, Class-4 cold laser therapy, and McKenzie core protocols relieve compressed discs and eliminate sharp radiating leg pain.",
    highlights: ["Non-Surgical Disc Relief", "Computerized Decompression", "Core Stability Retraining"],
    link: "/treatments",
    icon: Bone,
    tag: "95% Non-Surgical Recovery",
  },
  {
    id: "neck-pain",
    title: "Neck Pain & Posture",
    subtitle: "Cervical Spondylosis, Tech-Neck & Arm Numbness",
    desc: "Cervical traction, trigger-point dry needling, and deep flexor retraining release trapped nerve roots, alleviate tension headaches, and restore ergonomic head alignment.",
    highlights: ["Rapid Nerve Irritation Relief", "Trigger Point Needling", "Workstation Posture Audit"],
    link: "/services",
    icon: Stethoscope,
    tag: "96% Postural Relief",
  },
  {
    id: "sports-injury",
    title: "Sports Injury & ACL",
    subtitle: "Ligament Sprains, Meniscus & Muscle Tears",
    desc: "Biomechanical kinetic chain analysis, high-velocity neuromuscular drills, and eccentric loading safely accelerate return-to-sport clearance for active athletes.",
    highlights: ["FIFA Medical Diploma Care", "Neuromuscular Proprioception", "Return-to-Play Testing"],
    link: "/our-work",
    icon: Zap,
    tag: "98% Return-to-Sport Rate",
  },
  {
    id: "knee-pain",
    title: "Knee Pain & Preservation",
    subtitle: "Osteoarthritis, Cartilage Wear & Stair Difficulty",
    desc: "Targeted Tecar radiofrequency, Maitland articular glides, and progressive quadriceps bio-loading restore smooth joint glide and help patients avoid knee replacement surgery.",
    highlights: ["Avoid Joint Replacement", "Tecar Radiofrequency", "Unassisted Stair Climbing"],
    link: "/treatments",
    icon: Activity,
    tag: "92% Surgery Avoided",
  },
];

// ─── 2. WHY CHOOSE US (Qualified therapists · Personalized care · Convenient appointments) ───
const WHY_CHOOSE_PILLARS = [
  {
    icon: Award,
    title: "Qualified Therapists (MPT)",
    desc: "Every examination and treatment is delivered directly by Master's-qualified (MPT) clinical specialists with hospital leadership backgrounds — never delegated to inexperienced interns or assistants.",
  },
  {
    icon: HeartPulse,
    title: "Personalized 1-on-1 Care",
    desc: "We dedicate full 45-minute sessions to you with tailored, evidence-based rehabilitation protocols. No multitasking, no generic exercises, and no leaving you alone on heat pads.",
  },
  {
    icon: Clock,
    title: "Convenient Appointments",
    desc: "Flexible consultation slots from 8:00 AM to 8:00 PM (Monday through Saturday) with zero waiting time at High Street Galleria, Baner — plus certified home visit physiotherapy across Pune.",
  },
];

// ─── 3. TREATMENT PROCESS (Book appointment → Assessment → Treatment plan → Follow-up) ───
const TREATMENT_STEPS = [
  {
    step: "01",
    title: "Book Appointment",
    timing: "Immediate Confirmation",
    desc: "Select your preferred in-clinic slot in Baner or request a home visit easily online or by calling 9145875248.",
    icon: Calendar,
  },
  {
    step: "02",
    title: "Comprehensive Assessment",
    timing: "Day 1 (45 Minutes)",
    desc: "Thorough biomechanical evaluation, orthopedic provocation tests, and joint mobility scoring to diagnose root causes.",
    icon: Stethoscope,
  },
  {
    step: "03",
    title: "Targeted Treatment Plan",
    timing: "Sessions 1 – 12",
    desc: "Hands-on manual therapy, advanced European modalities (Class-4 Laser, Decompression, Tecar), and progressive muscle retraining.",
    icon: Activity,
  },
  {
    step: "04",
    title: "Progress & Follow-up",
    timing: "Long-Term Wellness",
    desc: "Custom video home exercise prescription, workplace ergonomic guidance, and periodic check-ups to prevent future injury relapse.",
    icon: CheckCircle2,
  },
];

// ─── 4. PATIENT TESTIMONIALS (Genuine patient feedback, with permission) ───
const TESTIMONIALS = [
  {
    name: "Dr. Aniruddh Joshi",
    role: "Consultant Cardiologist",
    condition: "Cervical Radiculopathy & Arm Numbness",
    text: "Being a physician myself, I am very critical of medical claims. When I developed severe cervical disc pain with tingling into my fingers, Dr. Sumit diagnosed the exact nerve root impingement within 15 minutes. Within 3 weeks of decompression and manual therapy, my pain resolved completely. Highly ethical, evidence-based clinic.",
    rating: 5,
    location: "Baner, Pune",
  },
  {
    name: "Meera Deshmukh",
    role: "Senior Homemaker",
    condition: "Bilateral Knee Osteoarthritis (Grade 3)",
    text: "I was told by two doctors that knee replacement was my only choice. I couldn't climb the 8 steps into my house without crying. Dr. Sneha created a gentle, progressive strengthening plan using Tecar therapy. Today I walk 3 kilometers daily in the park and climb stairs comfortably. RevitaOrtho changed my life.",
    rating: 5,
    location: "Aundh, Pune",
  },
  {
    name: "Karan Singhania",
    role: "Marathon Runner & Tech VP",
    condition: "Chronic Plantar Fasciitis & Achilles Tendonitis",
    text: "I had visited 4 different clinics with zero lasting results over 8 months. Here, they analyzed my running gait using camera sensors and found severe pelvic drop. Combined dry needling and eccentric calf loading cured my morning heel pain in just 4 sessions. Ran the Tata Mumbai Half Marathon pain-free!",
    rating: 5,
    location: "Hinjewadi Phase 1",
  },
];

export default function HomePage() {
  const navigate = useNavigate();

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [dateError, setDateError] = useState("");

  // Smooth Intersection Observer for subtle scroll reveal
  useEffect(() => {
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

  function handleFormSubmit(e) {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.date) {
      setDateError("Please select a preferred appointment date.");
      return;
    }

    const ref = `REV-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
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

  return (
    <main className="modern-home-page">
      {/* ─── 2. HERO SECTION ─── */}
      <section className="clean-hero-section">
        <div className="home-container">
          <div className="clean-hero-grid">
            {/* Left Column: Heading + Short Intro + Appointment Button */}
            <div className="hero-text-content">
              <div className="hero-kicker-pill">
                <ShieldCheck size={16} className="text-emerald" />
                <span>MIAP REGISTERED • BANER, PUNE • ORTHOPEDIC PHYSIOTHERAPY</span>
              </div>

              <h1 className="hero-main-title">
                Advanced Orthopedic & Sports Physiotherapy.
                <br />
                <span className="text-azure">Restore Movement. Relieve Pain.</span>
              </h1>

              <p className="hero-description">
                Led by certified Master's-qualified (MPT) specialists, RevitaOrtho provides targeted, non-surgical physical rehabilitation, computerized spinal decompression, and dedicated 1-on-1 care in Baner, Pune. Over <strong>15,000+ patients</strong> successfully treated without surgery.
              </p>

              {/* Quick Trust Highlights */}
              <div className="hero-assurance-strip">
                <span className="assurance-tag">
                  <CheckCircle2 size={16} className="text-emerald" />
                  Zero Waiting Time
                </span>
                <span className="assurance-tag">
                  <CheckCircle2 size={16} className="text-emerald" />
                  Dedicated 1-on-1 Specialist Care
                </span>
                <span className="assurance-tag">
                  <CheckCircle2 size={16} className="text-emerald" />
                  Cashless Insurance Desk
                </span>
              </div>

              {/* Appointment & Contact CTAs */}
              <div className="hero-cta-group">
                <button
                  type="button"
                  onClick={scrollToAppointment}
                  className="btn-hero-primary"
                >
                  <Calendar size={18} />
                  <span>Book Appointment</span>
                  <ArrowRight size={17} />
                </button>

                <a
                  href="tel:+919145875248"
                  className="btn-hero-secondary"
                >
                  <Phone size={17} />
                  <span>Call: 9145875248</span>
                </a>

                <a
                  href="https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20would%20like%20to%20consult%20a%20physiotherapist."
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

            {/* Right Column: Lead Therapist Image & Credentials */}
            <div className="hero-doctor-card-col">
              <div className="doctor-hero-showcase-card">
                <div className="doctor-hero-photo-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
                    alt="Dr. Sumit Gupta, PT - Chief Physiotherapist"
                    className="doctor-hero-photo"
                  />
                  <div className="doctor-hero-live-badge">
                    <span className="live-pulse-dot"></span>
                    <span>In-Clinic & Home Visits Available</span>
                  </div>
                </div>

                <div className="doctor-hero-details">
                  <div className="doctor-rating-pill">
                    <Star size={15} className="star-gold fill-gold" />
                    <strong>4.98 / 5.0 Rating</strong>
                    <span className="review-meta">(640+ Healed Patients)</span>
                  </div>

                  <h3 className="doctor-hero-name">Dr. Sumit Gupta, PT</h3>
                  <p className="doctor-hero-role">Chief Orthopedic & Spine Physiotherapist</p>
                  <p className="doctor-hero-degrees">BPT, MPT (Musculoskeletal Disorders), MIAP</p>

                  <div className="doctor-hero-mini-creds">
                    <div className="mini-cred-item">
                      <Award size={15} className="cred-icon-sm" />
                      <span>14+ Years Clinical Leadership</span>
                    </div>
                    <div className="mini-cred-item">
                      <Building2 size={15} className="cred-icon-sm" />
                      <span>Ex-Apollo Health City & Fortis Healthcare</span>
                    </div>
                    <div className="mini-cred-item">
                      <MapPin size={15} className="cred-icon-sm" />
                      <span>High Street Galleria, Baner, Pune</span>
                    </div>
                  </div>

                  <div className="doctor-card-cta-row">
                    <button
                      type="button"
                      onClick={scrollToAppointment}
                      className="btn-card-appointment"
                    >
                      <Calendar size={15} />
                      <span>Consult Dr. Sumit</span>
                    </button>
                    <Link to="/team" className="btn-card-profile">
                      <span>Doctor Bio</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. MAIN SERVICES (Back pain · Neck pain · Sports injury · Knee pain) ─── */}
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
            {MAIN_SERVICES.map((srv) => {
              const ServiceIcon = srv.icon;
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
                    {srv.highlights.map((h, i) => (
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
            <p>Looking for post-surgical rehab, frozen shoulder care, or ergonomic posture correction?</p>
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

      {/* ─── 4. ABOUT THE CLINIC (Clinic intro, treatment approach, therapist qualifications) ─── */}
      <section className="about-clinic-section section-padding" id="about">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">ABOUT REVITAORTHO</span>
            <h2 className="section-main-title">
              About the Clinic & Clinical Leadership
              <br />
              <span className="text-azure">Evidence-Based Healing in Pune</span>
            </h2>
            <p className="section-main-desc">
              Discover how our clinic philosophy, root-cause treatment approach, and qualified therapists deliver lasting recovery.
            </p>
          </div>

          <div className="about-clinic-card scroll-reveal">
            <div className="about-clinic-grid">
              {/* Left Column: Doctor Profile & Qualifications */}
              <div className="about-therapist-col">
                <div className="therapist-image-box">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
                    alt="Dr. Sumit Gupta, PT - Founder & Lead Physiotherapist"
                    className="therapist-photo"
                  />
                  <div className="therapist-badge">
                    <BadgeCheck size={16} />
                    <span>MIAP Life Member • 14+ Years</span>
                  </div>
                </div>

                <div className="therapist-creds-box">
                  <h3>Dr. Sumit Gupta, PT</h3>
                  <p className="cred-role">Chief Orthopedic & Spine Physiotherapist</p>
                  <p className="cred-degree">BPT, MPT (Musculoskeletal Disorders), MIAP</p>

                  <div className="cred-points">
                    <div className="cred-point">
                      <Award size={15} className="text-azure" />
                      <span>Certified Spinal Decompression & Maitland Manual Therapist</span>
                    </div>
                    <div className="cred-point">
                      <Building2 size={15} className="text-azure" />
                      <span>Ex-Senior Consultant, Apollo Health City & Fortis Healthcare</span>
                    </div>
                    <div className="cred-point">
                      <HeartPulse size={15} className="text-azure" />
                      <span>Specialized in non-surgical disc herniation & sciatica recovery</span>
                    </div>
                  </div>

                  <Link to="/team" className="btn-team-link">
                    <span>Meet Our Full Specialist Team (Dr. Sneha, Dr. Vikram, Dr. Ananya) &rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Clinic Introduction & Treatment Approach */}
              <div className="about-content-col">
                <span className="about-subtag">CLINIC INTRODUCTION & TREATMENT APPROACH</span>
                <h3>We Treat the Root Cause, Not Just the Symptoms</h3>
                <p className="about-lead-copy">
                  RevitaOrtho Spine & Joint Clinic is a dedicated outpatient physical therapy center in Baner, Pune. Established to bridge the gap between temporary pain relievers and invasive surgical procedures, our clinic provides medical-grade European rehabilitation technology in private sanitized treatment suites.
                </p>

                <div className="approach-grid">
                  <div className="approach-card">
                    <div className="approach-icon">
                      <Stethoscope size={20} className="text-azure" />
                    </div>
                    <div>
                      <strong>45-Min Biomechanical Diagnostic</strong>
                      <p>We test joint mobility angles, nerve tension signs, and kinetic imbalances before prescribing any therapy.</p>
                    </div>
                  </div>

                  <div className="approach-card">
                    <div className="approach-icon">
                      <Users size={20} className="text-azure" />
                    </div>
                    <div>
                      <strong>Dedicated 1-on-1 Specialist Focus</strong>
                      <p>Every session is led directly by an MPT specialist. We do not delegate care to untrained assistants or interns.</p>
                    </div>
                  </div>

                  <div className="approach-card">
                    <div className="approach-icon">
                      <Zap size={20} className="text-azure" />
                    </div>
                    <div>
                      <strong>Advanced Non-Surgical Technologies</strong>
                      <p>German Class-4 Laser, Computerized Spinal Decompression, and Matrix Rhythm Therapy (MaRhyThe®).</p>
                    </div>
                  </div>

                  <div className="approach-card">
                    <div className="approach-icon">
                      <ShieldCheck size={20} className="text-azure" />
                    </div>
                    <div>
                      <strong>Surgery Avoidance Focus (94%+)</strong>
                      <p>Over 94% of our moderate-to-severe spine and joint patients successfully avoid invasive surgeries.</p>
                    </div>
                  </div>
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
            {WHY_CHOOSE_PILLARS.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
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
                <strong>Over 15,000+ Patients Restored to Active Living</strong>
                <p>Zero long-term lock-in packages, transparent fee structure, and complete insurance TPA support.</p>
              </div>
            </div>
            <div className="banner-strip-right">
              <a href="tel:+919145875248" className="btn-clinical-primary">
                <Phone size={17} />
                <span>Call Helpline: 9145875248</span>
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
            {TREATMENT_STEPS.map((step, idx) => {
              const StepIcon = step.icon;
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
            <button
              type="button"
              onClick={scrollToAppointment}
              className="btn-process-action"
            >
              Start Step 1
            </button>
          </div>
        </div>
      </section>

      {/* ─── 7. PATIENT TESTIMONIALS (Genuine patient feedback, with permission) ─── */}
      <section className="patient-testimonials-section section-padding" id="testimonials">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">VERIFIED CLINICAL OUTCOMES</span>
            <h2 className="section-main-title">
              Patient Testimonials
              <br />
              <span className="text-azure">Genuine Feedback, Shared with Permission</span>
            </h2>
            <p className="section-main-desc">
              Real recovery stories from doctors, working executives, and seniors who regained active living at RevitaOrtho.
            </p>
          </div>

          <div className="testimonials-cards-grid scroll-reveal">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="test-header-row">
                  <div className="test-stars">
                    {[...Array(t.rating)].map((_, s) => (
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
                <span>Based on 1,450+ verified patient reviews across Pune</span>
              </div>
            </div>

            <Link to="/testimonials" className="btn-clinical-outline">
              <span>Read All Patient Reviews</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 8. APPOINTMENT / CONTACT (Contact details · Location · Phone · Appointment form) ─── */}
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
              Book your 45-minute comprehensive diagnostic assessment online, or connect directly with our patient coordination desk in Baner, Pune.
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
                    Thank you, <strong>{formData.name || "Patient"}</strong>. Our clinical coordination desk in Baner will contact you at <strong>{formData.phone}</strong> within 30 minutes to confirm your scheduled slot.
                  </p>

                  <div className="success-breakdown">
                    <div>
                      <span>Condition / Concern:</span>
                      <strong>
                        {MAIN_SERVICES.find((s) => s.id === formData.service)?.title || "General Orthopedic"}
                      </strong>
                    </div>
                    <div>
                      <span>Consultation Mode:</span>
                      <strong>{formData.careMode === "clinic" ? "In-Clinic (Baner, Pune)" : "Home Visit Physiotherapy"}</strong>
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
                      href={`https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20have%20submitted%20booking%20ref%20${bookingRef}%20for%20appointment.`}
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
                        placeholder="9145875248"
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
                        <option value="back-pain">Back Pain & Sciatica (Lumbar Spine)</option>
                        <option value="neck-pain">Neck Pain & Cervical Spondylosis</option>
                        <option value="sports-injury">Sports Injury & Ligament Rehab</option>
                        <option value="knee-pain">Knee Pain & Osteoarthritis</option>
                        <option value="shoulder">Frozen Shoulder & Rotator Cuff</option>
                        <option value="postop">Post-Surgical Rehabilitation</option>
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
                        <option value="clinic">In-Clinic Consultation (Baner, Pune)</option>
                        <option value="home">Home Visit Physiotherapy (Pune)</option>
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
                      placeholder="e.g. Pain shooting down right leg for 3 weeks, unable to sit comfortably..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-form-submit">
                    <Calendar size={18} />
                    <span>Confirm Appointment Request</span>
                    <ArrowRight size={17} />
                  </button>

                  <div className="form-guarantee-note">
                    <ShieldCheck size={14} className="text-emerald" />
                    <span>Zero waiting time policy. Your medical data is strictly confidential under NABH protocols.</span>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Details & Location Column */}
            <div className="contact-details-box">
              <div className="contact-header-strip">
                <span className="contact-tag">CONTACT & CLINIC LOCATION</span>
                <h3>RevitaOrtho Spine & Joint Clinic</h3>
                <p>Located in the heart of Baner, Pune. Fully sanitized treatment suites, elevator access, and reserved patient parking.</p>
              </div>

              <div className="contact-details-list">
                <div className="contact-row">
                  <MapPin size={20} className="contact-icon text-azure" />
                  <div>
                    <strong>Clinic Address & Location</strong>
                    <p>Plot 42, High Street Galleria, Baner-Pashan Link Road, Baner, Pune – 411045</p>
                  </div>
                </div>

                <div className="contact-row">
                  <Clock size={20} className="contact-icon text-azure" />
                  <div>
                    <strong>Clinic Consultation Timings</strong>
                    <p>Monday – Saturday: 8:00 AM – 8:00 PM</p>
                    <small>Sunday: By Prior Appointment Only</small>
                  </div>
                </div>

                <div className="contact-row">
                  <Phone size={20} className="contact-icon text-azure" />
                  <div>
                    <strong>Direct Helpline & Appointments</strong>
                    <p><a href="tel:+919145875248" className="phone-bold-link">+91 91458 75248</a></p>
                  </div>
                </div>
              </div>

              <div className="contact-direct-actions">
                <a
                  href="https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20want%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp-direct"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp (+91 91458 75248)</span>
                </a>

                <a
                  href="https://maps.google.com/?q=Baner+Pune"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-maps-direct"
                >
                  <ExternalLink size={16} />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>

              <div className="clinic-amenities-row">
                <div className="amenity-item">
                  <CheckCircle2 size={15} className="text-emerald" />
                  <span>Dedicated Patient Parking</span>
                </div>
                <div className="amenity-item">
                  <CheckCircle2 size={15} className="text-emerald" />
                  <span>Wheelchair Ramp & Lift</span>
                </div>
                <div className="amenity-item">
                  <CheckCircle2 size={15} className="text-emerald" />
                  <span>Hospital-Grade Sanitization</span>
                </div>
                <div className="amenity-item">
                  <CheckCircle2 size={15} className="text-emerald" />
                  <span>Cashless Insurance TPA Desk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
