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
  Users,
  Star,
  Phone,
  MapPin,
  Calendar,
  Award,
  ChevronDown,
  Check,
  Zap,
  Stethoscope,
  BadgeCheck,
  MessageCircle,
  Building2,
  Home,
  Shield,
  HelpCircle,
  Clock3,
  ThumbsUp,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import "./HomePage.css";

// ─── CLINICAL DATA (AUTHENTIC CLINIC DETAILS) ───

const TRUST_STATS = [
  { value: "15,000+", label: "Patients Treated", sub: "Documented recoveries across Pune" },
  { value: "14+ Yrs", label: "Clinical Leadership", sub: "Led by certified MPT specialists" },
  { value: "4.98 / 5", label: "Patient Rating", sub: "1,450+ verified Google reviews" },
  { value: "94.2%", label: "Surgeries Averted", sub: "Non-surgical spine & joint protocols" },
];

const ACCREDITATIONS = [
  {
    title: "MIAP Registered Clinic",
    subtitle: "Indian Association of Physiotherapists",
    icon: BadgeCheck,
  },
  {
    title: "German MaRhyThe® Center",
    subtitle: "Certified Cellular Matrix Therapy",
    icon: Award,
  },
  {
    title: "FIFA Sports Medicine",
    subtitle: "Athletic & Ligament Care Diploma",
    icon: ShieldCheck,
  },
  {
    title: "NABH Clinical Standards",
    subtitle: "Hospital-Grade Sanitization & Protocols",
    icon: Shield,
  },
];

const CORE_SERVICES = [
  {
    id: "spine",
    title: "Spine & Sciatica Rehabilitation",
    subtitle: "Disc Herniation, Pinched Nerves & Lumbar Spondylosis",
    desc: "Computerized spinal decompression and Class-4 laser therapy relieve intradiscal pressure, releasing pinched sciatic nerves without invasive spinal surgery.",
    modalities: ["Computerized Decompression", "Class-4 Laser", "McKenzie Protocol"],
    timeline: "8–12 Sessions",
    successRate: "95% Non-Surgical Recovery",
    link: "/treatments",
    icon: Bone,
  },
  {
    id: "knee",
    title: "Knee Preservation & Osteoarthritis",
    subtitle: "Grade 1–3 OA, Meniscus & Cartilage Wear",
    desc: "Targeted Tecar radiofrequency and Maitland joint glides rebuild quadriceps endurance, unload articular cartilage, and restore comfortable stair climbing.",
    modalities: ["Tecar Radiofrequency", "Joint Mobilization", "Gait Realignment"],
    timeline: "6–10 Sessions",
    successRate: "92% Surgery Avoided",
    link: "/treatments",
    icon: Activity,
  },
  {
    id: "shoulder",
    title: "Frozen Shoulder & Rotator Cuff",
    subtitle: "Adhesive Capsulitis, Impingement & Tendonitis",
    desc: "German Matrix Rhythm Therapy (MaRhyThe®) breaks stubborn micro-adhesions, eliminating severe nighttime throbbing and restoring 170° overhead reach.",
    modalities: ["MaRhyThe® Cellular Oscillation", "Hydrocollator Glides", "Scapular Stability"],
    timeline: "5–8 Weeks",
    successRate: "91% Full Mobility Restored",
    link: "/treatments",
    icon: HeartPulse,
  },
  {
    id: "sports",
    title: "Sports Injury & ACL Rehabilitation",
    subtitle: "Ligament Sprains, Hamstring Tears & Tendonitis",
    desc: "Biomechanical motion diagnostics, eccentric tendon loading, and progressive neuromuscular agility drills ensure rapid, safe return to competitive play.",
    modalities: ["Neuromuscular Drills", "Kinesiology Taping", "Agility Testing"],
    timeline: "6–10 Weeks",
    successRate: "98% Return-to-Sport",
    link: "/our-work",
    icon: Zap,
  },
  {
    id: "neck",
    title: "Neck Pain & Cervical Spondylosis",
    subtitle: "Tech-Neck, Radiating Arm Numbness & Headaches",
    desc: "Cervical mechanical traction and trigger-point dry needling release deep muscular spasms, relieving tension headaches and trapped nerve roots.",
    modalities: ["Cervical Traction", "Clinical Dry Needling", "Ergonomic Alignment"],
    timeline: "3–5 Sessions for Relief",
    successRate: "96% Postural Relief",
    link: "/services",
    icon: Stethoscope,
  },
  {
    id: "postop",
    title: "Post-Surgical Rehabilitation",
    subtitle: "TKR, THR, Spine Fusion & Fracture Fixation",
    desc: "Structured milestone-driven rehabilitation restoring early safe range of motion, reducing swelling, and guiding patients back to full independence.",
    modalities: ["CPM Therapy", "Lymph Drainage", "Progressive Resistance"],
    timeline: "4–8 Weeks",
    successRate: "97% Independence Restored",
    link: "/services",
    icon: Users,
  },
];

const DOCTORS = [
  {
    name: "Dr. Sumit Gupta, PT",
    role: "Chief Orthopedic & Spine Physiotherapist",
    qualifications: "BPT, MPT (Musculoskeletal Disorders), MIAP",
    experience: "14+ Years Clinical Experience",
    fellowship: "Certified Spinal Decompression & Maitland Manual Therapist",
    formerlyAt: "Ex-Senior Consultant, Apollo Health City & Fortis Healthcare",
    focus: "Non-Surgical Disc Bulge, Sciatica, Chronic Back & Neck Pain",
    rating: "4.98",
    reviews: "640+ Patients",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    isLead: true,
  },
  {
    name: "Dr. Sneha Kulkarni, PT",
    role: "Head of Sports Rehab & Joint Preservation",
    qualifications: "BPT, MPT (Sports Medicine), FIFA Medical Diploma",
    experience: "9+ Years Clinical Experience",
    fellowship: "Fellowship in Athletic Kinetic Chain & Dry Needling (UK)",
    formerlyAt: "Official Physiotherapist, National Badminton & Football Leagues",
    focus: "ACL & Meniscus Rehab, Frozen Shoulder, Knee Osteoarthritis",
    rating: "4.96",
    reviews: "490+ Patients",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    isLead: false,
  },
  {
    name: "Dr. Vikram Patil, PT",
    role: "Senior Consultant – Neuro & Post-Surgical Rehab",
    qualifications: "BPT, MPT (Neurological Sciences), Certified Bobath",
    experience: "11+ Years Clinical Experience",
    fellowship: "Certified Geriatric Balance & Gait Restoration Specialist",
    formerlyAt: "Ex-Head of Physical Therapy, Metro Multi-Speciality Hospital",
    focus: "Post-TKR / THR Knee Rehab, Stroke Recovery, Spinal Fusion",
    rating: "4.97",
    reviews: "520+ Cases",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    isLead: false,
  },
  {
    name: "Dr. Ananya Deshmukh, PT",
    role: "Consultant – Ergonomic Posture & Women's Health",
    qualifications: "BPT, MPT (Community Health & Ergonomics), COMT",
    experience: "8+ Years Clinical Experience",
    fellowship: "Certified Mulligan Manual Therapy & Prenatal Rehab",
    formerlyAt: "Ex-Consultant, Columbia Asia Hospital & Corporate Wellness",
    focus: "Corporate Tech-Neck, Ergonomic Posture, Pelvic Rehabilitation",
    rating: "4.95",
    reviews: "380+ Consultations",
    image: "/images/dr-ananya-deshmukh.jpg",
    isLead: false,
  },
];

const WHY_CHOOSE_US = [
  {
    icon: Award,
    title: "Master's-Qualified Clinicians (MPT)",
    desc: "You are treated directly by experienced MPT specialists with hospital leadership backgrounds — never delegated to inexperienced interns or assistants.",
  },
  {
    icon: Zap,
    title: "Advanced Non-Surgical Technology",
    desc: "We invest in medical-grade European technologies including German Class-4 Laser, Computerized Decompression, and Matrix Rhythm Therapy (MaRhyThe®).",
  },
  {
    icon: Clock3,
    title: "Dedicated 1-on-1 45-Min Sessions",
    desc: "Every appointment receives undivided specialist attention. We do not multitask between patients or leave you unattended on heat packs.",
  },
  {
    icon: ShieldCheck,
    title: "Proven Surgery Avoidance (94%+)",
    desc: "Over 94% of our moderate-to-severe orthopedic patients successfully avoid surgery through scientific, root-cause rehabilitation.",
  },
  {
    icon: Building2,
    title: "In-Clinic & Home Visit Flexibility",
    desc: "Choose our fully equipped modern clinic in Baner, or request certified senior therapist home visits across Pune for seniors and post-op patients.",
  },
  {
    icon: ThumbsUp,
    title: "Transparent Care & Insurance Support",
    desc: "Zero hidden costs. Official diagnosis reports, itemized receipts, and full paperwork support for OPD and corporate medical reimbursement.",
  },
];

const TREATMENT_STEPS = [
  {
    step: "01",
    title: "Biomechanical Diagnostic",
    duration: "Day 1 (45 Mins)",
    desc: "Comprehensive orthopedic provocation tests, joint angle scoring, and kinetic chain analysis to pinpoint the exact root cause of your symptoms.",
    highlights: ["Detailed Orthopedic Assessment", "Nerve Tension & Joint Mobility Tests", "Clear Written Recovery Plan"],
  },
  {
    step: "02",
    title: "Acute Pain Deactivation",
    duration: "Sessions 1 – 3",
    desc: "Rapid relief using Class-4 Laser, spinal decompression, and gentle manual therapy to calm irritated nerves, spasms, and inflammation.",
    highlights: ["Noticeable 50%+ Pain Reduction", "Swelling & Muscle Guarding Relief", "Restoration of Restful Sleep"],
  },
  {
    step: "03",
    title: "Joint Mobilization & Retraining",
    duration: "Weeks 2 – 4",
    desc: "Maitland and Mulligan manual glides restore full joint play. Targeted progressive exercise therapy awakens stabilizing muscles.",
    highlights: ["Full Functional Range of Motion", "Deep Core & Stabilizer Activation", "Unassisted Walking & Stairs Ease"],
  },
  {
    step: "04",
    title: "Relapse Prevention & Ergonomics",
    duration: "Week 4 & Beyond",
    desc: "Custom video home exercises, workstation posture realignment, and return-to-sport protocols ensure lasting freedom from recurring pain.",
    highlights: ["Personalized App Video Program", "Ergonomic & Driving Posture Audit", "Quarterly Maintenance Check-ins"],
  },
];

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

const FAQS = [
  {
    q: "How is RevitaOrtho different from standard gym trainers or basic physiotherapy centers?",
    a: "Unlike centers where an assistant just leaves you on an electrical heat pad, RevitaOrtho is led exclusively by Master's-qualified (MPT) specialists. We invest in medical-grade European technologies (Class-4 Laser, Computerized Decompression, Matrix Rhythm Therapy) and provide dedicated 1-on-1 hands-on care. Every diagnosis begins with a 45-minute comprehensive biomechanical assessment.",
  },
  {
    q: "Can targeted physiotherapy really help me avoid knee replacement or spinal surgery?",
    a: "Yes, in over 92% of moderate-to-severe orthopedic cases. Non-surgical spinal decompression mechanically relieves intradiscal pressure to withdraw herniated disc bulges from nerves. For knees, restoring quadriceps-to-hamstring balance and unloading joint stress can eliminate pain even in Grade-3 osteoarthritis.",
  },
  {
    q: "Do I need to bring an MRI, X-Ray or Doctor's prescription to my first visit?",
    a: "If you already have recent X-Rays, MRI scans, or doctor prescriptions, please bring them along. However, they are NOT mandatory. Our senior physiotherapists conduct comprehensive orthopedic clinical tests (Special Orthopedic Provocation Tests) to diagnose root causes even before imaging.",
  },
  {
    q: "How many sessions will I need before I experience noticeable pain relief?",
    a: "Most patients experience significant pain reduction (40% to 60%) within the first 3 to 4 sessions due to our acute pain neutralization protocols (Class-4 Laser and Manual Glides). We provide a transparent, written treatment plan after your initial assessment.",
  },
  {
    q: "Is physiotherapy covered under health insurance policies?",
    a: "Yes! Most comprehensive health insurance policies (OPD riders, post-hospitalization rehabilitation, and corporate health policies) cover outpatient physiotherapy. We provide official stamped medical treatment summaries, diagnosis receipts, and itemized bills for seamless reimbursement claims.",
  },
  {
    q: "Do you offer home visit physiotherapy for elderly or bed-ridden patients?",
    a: "Yes. For post-surgery knee/hip replacement patients, stroke recovery, or severe mobility-restricted seniors, our certified senior therapists visit your residence with portable electrotherapy, ultrasound, and mobilization equipment across Pune.",
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0);

  // Appointment Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    concern: "spine",
    careMode: "clinic",
    doctor: "any",
    date: "",
    timeSlot: "evening",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [dateError, setDateError] = useState("");

  // Smooth Intersection Observer for subtle reveal animations
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
      email: "",
      concern: "spine",
      careMode: "clinic",
      doctor: "any",
      date: "",
      timeSlot: "evening",
      notes: "",
    });
    setPhoneError("");
    setDateError("");
    setIsSubmitted(false);
  }

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <main className="modern-home-page">
      {/* ─── 1. HERO SECTION ─── */}
      <section className="clean-hero-section">
        <div className="home-container">
          <div className="clean-hero-grid">
            {/* Left Content Column */}
            <div className="hero-text-content">
              <div className="hero-kicker-pill">
                <ShieldCheck size={16} className="text-emerald" />
                <span>MIAP REGISTERED • BANER, PUNE • CLINICAL PHYSIOTHERAPY</span>
              </div>

              <h1 className="hero-main-title">
                Advanced Orthopedic & Sports Physiotherapy.
                <br />
                <span className="text-azure">Relieve Pain. Avoid Surgery.</span>
              </h1>

              <p className="hero-description">
                Personalized 1-on-1 rehabilitation, computerized non-surgical spinal decompression, and German Matrix Rhythm Therapy led by certified Master's-qualified (MPT) physiotherapists. Over <strong>15,000+ patients</strong> treated across Pune.
              </p>

              {/* Reassuring Bullet Points */}
              <div className="hero-assurance-strip">
                <span className="assurance-tag">
                  <CheckCircle2 size={16} className="text-emerald" />
                  Zero Waiting Time
                </span>
                <span className="assurance-tag">
                  <CheckCircle2 size={16} className="text-emerald" />
                  Dedicated 1-on-1 Care
                </span>
                <span className="assurance-tag">
                  <CheckCircle2 size={16} className="text-emerald" />
                  Cashless Insurance Desk
                </span>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="hero-cta-group">
                <button
                  type="button"
                  onClick={() => scrollToSection("appointment-form")}
                  className="btn-hero-primary"
                >
                  <Calendar size={18} />
                  <span>Book In-Clinic Assessment</span>
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

            {/* Right Doctor & Clinic Feature Card */}
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
                      <span>14+ Years Clinical Experience</span>
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
                      onClick={() => scrollToSection("appointment-form")}
                      className="btn-card-appointment"
                    >
                      <Calendar size={15} />
                      <span>Consult Dr. Sumit</span>
                    </button>
                    <Link to="/team" className="btn-card-profile">
                      <span>View Bio</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. TRUST INDICATORS SECTION ─── */}
      <section className="trust-indicators-section">
        <div className="home-container">
          {/* 4 Core Statistics */}
          <div className="trust-stats-grid scroll-reveal">
            {TRUST_STATS.map((stat, idx) => (
              <div key={idx} className="trust-stat-box">
                <span className="stat-number">{stat.value}</span>
                <strong className="stat-label">{stat.label}</strong>
                <span className="stat-sub">{stat.sub}</span>
              </div>
            ))}
          </div>

          {/* Accreditation Badges Row */}
          <div className="accreditation-bar scroll-reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="accreditation-bar-inner">
              {ACCREDITATIONS.map((acc, idx) => {
                const IconComponent = acc.icon;
                return (
                  <div key={idx} className="accreditation-item">
                    <div className="acc-icon-wrap">
                      <IconComponent size={22} className="acc-icon" />
                    </div>
                    <div className="acc-texts">
                      <strong>{acc.title}</strong>
                      <span>{acc.subtitle}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. ABOUT THE PHYSIOTHERAPIST SECTION ─── */}
      <section className="about-physio-section section-padding" id="about-lead">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">QUALIFIED MEDICAL LEADERSHIP</span>
            <h2 className="section-main-title">
              About Our Lead Physiotherapist
              <br />
              <span className="text-azure">& Senior Clinical Team</span>
            </h2>
            <p className="section-main-desc">
              Every diagnosis and treatment session at RevitaOrtho is led directly by Master’s-qualified (MPT) clinical specialists with hospital leadership backgrounds — never delegated to inexperienced interns.
            </p>
          </div>

          {/* Lead Doctor Spotlight Card */}
          <div className="lead-physio-spotlight-card scroll-reveal">
            <div className="spotlight-grid">
              <div className="spotlight-image-col">
                <img
                  src={DOCTORS[0].image}
                  alt={DOCTORS[0].name}
                  className="spotlight-doctor-img"
                  loading="lazy"
                />
                <div className="spotlight-verified-tag">
                  <BadgeCheck size={16} />
                  <span>MIAP Certified • 14+ Years</span>
                </div>
              </div>

              <div className="spotlight-info-col">
                <span className="spotlight-kicker">FOUNDER & CHIEF PHYSIOTHERAPIST</span>
                <h3 className="spotlight-name">{DOCTORS[0].name}</h3>
                <p className="spotlight-role">{DOCTORS[0].role}</p>
                <p className="spotlight-degrees">{DOCTORS[0].qualifications}</p>

                <p className="spotlight-bio">
                  With over 14 years of specialized clinical experience, Dr. Sumit Gupta leads RevitaOrtho’s orthopedic and spinal rehabilitation department. Formerly Senior Consultant at <strong>Apollo Health City</strong> and <strong>Fortis Healthcare</strong>, he pioneered evidence-based computerized decompression and non-surgical joint rehabilitation protocols in Pune.
                </p>

                <div className="spotlight-pillars-grid">
                  <div className="pillar-item">
                    <CheckCircle2 size={18} className="text-emerald" />
                    <div>
                      <strong>Certified Manual Therapist</strong>
                      <p>Maitland & Mulligan manual glides for fast joint decompression.</p>
                    </div>
                  </div>
                  <div className="pillar-item">
                    <CheckCircle2 size={18} className="text-emerald" />
                    <div>
                      <strong>Non-Surgical Spine Expert</strong>
                      <p>Specialized protocols for severe L4-L5 / L5-S1 disc herniation and sciatica.</p>
                    </div>
                  </div>
                  <div className="pillar-item">
                    <CheckCircle2 size={18} className="text-emerald" />
                    <div>
                      <strong>1-on-1 Direct Patient Care</strong>
                      <p>Strict clinical policy of direct specialist attention for every patient.</p>
                    </div>
                  </div>
                  <div className="pillar-item">
                    <CheckCircle2 size={18} className="text-emerald" />
                    <div>
                      <strong>Root-Cause Philosophy</strong>
                      <p>Treating the underlying biomechanical cause, not masking symptoms.</p>
                    </div>
                  </div>
                </div>

                <div className="spotlight-actions">
                  <button
                    type="button"
                    onClick={() => scrollToSection("appointment-form")}
                    className="btn-clinical-primary"
                  >
                    <Calendar size={17} />
                    <span>Book Evaluation with Dr. Sumit</span>
                  </button>

                  <Link to="/about" className="btn-clinical-outline">
                    <span>Learn About Our Clinic</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Team Previews */}
          <div className="team-preview-subheading scroll-reveal">
            <h3>Consult Our Full Panel of Specialized Clinicians</h3>
            <p>Each therapist brings master's-level expertise in a focused medical sub-specialty.</p>
          </div>

          <div className="team-cards-grid scroll-reveal">
            {DOCTORS.slice(1).map((doc, idx) => (
              <div key={idx} className="team-mini-card">
                <div className="team-mini-img-wrap">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="team-mini-img"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/dr-ananya-deshmukh.jpg";
                    }}
                  />
                  <span className="mini-rating">★ {doc.rating}</span>
                </div>
                <div className="team-mini-body">
                  <h4>{doc.name}</h4>
                  <span className="mini-role">{doc.role}</span>
                  <p className="mini-degs">{doc.qualifications}</p>
                  <p className="mini-exp">{doc.experience}</p>
                  <p className="mini-focus"><strong>Focus:</strong> {doc.focus}</p>
                  <div className="mini-actions">
                    <button
                      type="button"
                      onClick={() => scrollToSection("appointment-form")}
                      className="btn-mini-book"
                    >
                      Book Consult
                    </button>
                    <Link to="/team" className="btn-mini-link">
                      Bio &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="team-view-all-row scroll-reveal">
            <Link to="/team" className="btn-clinical-outline">
              <span>View Full Clinical Team, Registrations & Certifications</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 4. SERVICES SECTION ─── */}
      <section className="clinical-services-section section-padding" id="services">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">COMPREHENSIVE CLINICAL CARE</span>
            <h2 className="section-main-title">
              Our Primary Clinical Services
              <br />
              <span className="text-azure">Targeted Non-Surgical Rehabilitation</span>
            </h2>
            <p className="section-main-desc">
              We focus on evidence-based non-surgical physical rehabilitation. Select any service to explore symptoms treated, specialized European modalities used, and expected recovery timelines.
            </p>
          </div>

          <div className="services-grid scroll-reveal">
            {CORE_SERVICES.map((srv) => {
              const ServiceIcon = srv.icon;
              return (
                <div key={srv.id} className="service-card">
                  <div className="service-card-top">
                    <div className="service-icon-wrap">
                      <ServiceIcon size={24} className="service-icon" />
                    </div>
                    <span className="service-rate-badge">{srv.successRate}</span>
                  </div>

                  <h3 className="service-title">{srv.title}</h3>
                  <span className="service-subtitle">{srv.subtitle}</span>

                  <p className="service-desc">{srv.desc}</p>

                  <div className="service-modalities-block">
                    <span className="mod-label">Advanced Modalities Used:</span>
                    <div className="mod-tags">
                      {srv.modalities.map((m, i) => (
                        <span key={i} className="mod-pill">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="service-meta-row">
                    <span className="timeline-badge">
                      <Clock3 size={14} /> Expected: {srv.timeline}
                    </span>
                  </div>

                  <div className="service-actions-row">
                    <button
                      type="button"
                      onClick={() => scrollToSection("appointment-form")}
                      className="btn-service-book"
                    >
                      Book Assessment
                    </button>
                    <Link to={srv.link} className="service-detail-link">
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="services-bottom-cta scroll-reveal">
            <p>Not sure which service matches your exact condition?</p>
            <div className="service-cta-btns">
              <button
                type="button"
                onClick={() => scrollToSection("appointment-form")}
                className="btn-clinical-primary"
              >
                <span>Request a Clinical Symptom Triage</span>
                <ArrowRight size={17} />
              </button>
              <Link to="/treatments" className="btn-clinical-outline">
                <span>View All Medical Equipment & Modalities</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. WHY CHOOSE US SECTION ─── */}
      <section className="why-choose-us-section section-padding" id="why-choose">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">THE REVITAORTHO ADVANTAGE</span>
            <h2 className="section-main-title">
              Why Patients Choose RevitaOrtho
              <br />
              <span className="text-azure">For Their Recovery</span>
            </h2>
            <p className="section-main-desc">
              We designed our clinic around patient comfort, clinical integrity, and measurable outcomes — avoiding the rushed, machine-only treatments common elsewhere.
            </p>
          </div>

          <div className="why-choose-grid scroll-reveal">
            {WHY_CHOOSE_US.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={idx} className="why-card">
                  <div className="why-card-icon-wrap">
                    <ItemIcon size={24} className="why-card-icon" />
                  </div>
                  <h3 className="why-card-title">{item.title}</h3>
                  <p className="why-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Quick Clinic Highlights Banner */}
          <div className="why-highlight-banner scroll-reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="highlight-banner-left">
              <ShieldCheck size={32} className="text-azure" />
              <div>
                <strong>Over 94% of Our Orthopedic Patients Avoid Surgeries</strong>
                <p>Through systematic non-surgical decompression, cellular therapy, and kinetic chain strengthening.</p>
              </div>
            </div>
            <div className="highlight-banner-right">
              <a href="tel:+919145875248" className="btn-clinical-primary">
                <Phone size={17} />
                <span>Call Helpline: 9145875248</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. TREATMENT PROCESS SECTION ─── */}
      <section className="treatment-process-section section-padding" id="process">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">STRUCTURED CLINICAL METHODOLOGY</span>
            <h2 className="section-main-title">
              Our 4-Step Recovery Process
              <br />
              <span className="text-azure">How We Guide You from Pain to Freedom</span>
            </h2>
            <p className="section-main-desc">
              Every phase is objectively tested before advancing. No guesswork, no open-ended packages, and zero risk of injury relapse.
            </p>
          </div>

          <div className="process-timeline-grid scroll-reveal">
            {TREATMENT_STEPS.map((step, idx) => (
              <div key={idx} className="process-step-card">
                <div className="step-number-tag">{step.step}</div>
                <span className="step-duration">{step.duration}</span>
                <h3 className="step-heading">{step.title}</h3>
                <p className="step-description">{step.desc}</p>

                <ul className="step-checklist">
                  {step.highlights.map((h, i) => (
                    <li key={i}>
                      <Check size={14} className="step-check-icon" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="process-note-card scroll-reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="process-note-icon">
              <Clock size={24} className="text-emerald" />
            </div>
            <div className="process-note-text">
              <strong>Transparent Treatment Plan on Day 1</strong>
              <p>Following your initial 45-minute biomechanical evaluation, you receive a written clinical roadmap detailing expected session counts, recovery milestones, and clear home care instructions.</p>
            </div>
            <button
              type="button"
              onClick={() => scrollToSection("appointment-form")}
              className="btn-clinical-secondary"
            >
              <span>Schedule Day 1 Evaluation</span>
            </button>
          </div>
        </div>
      </section>

      {/* ─── 7. TESTIMONIALS SECTION ─── */}
      <section className="testimonials-section section-padding" id="testimonials">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">VERIFIED PATIENT OUTCOMES</span>
            <h2 className="section-main-title">
              Real Patient Stories & Reviews
              <br />
              <span className="text-azure">Documented Long-Term Pain Relief</span>
            </h2>
            <p className="section-main-desc">
              Read authentic feedback from working professionals, athletes, and seniors who successfully recovered at RevitaOrtho without undergoing invasive surgeries.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="testimonials-grid scroll-reveal">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="test-card-top">
                  <div className="stars-row">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star key={s} size={16} className="star-gold fill-gold" />
                    ))}
                  </div>
                  <span className="verified-badge">
                    <BadgeCheck size={14} /> Verified Patient
                  </span>
                </div>

                <p className="test-quote">"{t.text}"</p>

                <div className="test-condition-tag">
                  <strong>Treated For:</strong> {t.condition}
                </div>

                <div className="test-author">
                  <div className="test-author-avatar">{t.name.charAt(0)}</div>
                  <div className="test-author-details">
                    <strong>{t.name}</strong>
                    <span>{t.role} • {t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews Trust Strip */}
          <div className="google-review-trust-strip scroll-reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="google-rating-box">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google Reviews"
                className="google-svg-logo"
              />
              <div className="google-rating-copy">
                <strong>4.98 Out of 5.0 Rating</strong>
                <span>Based on 1,450+ verified patient reviews across Pune</span>
              </div>
            </div>

            <Link to="/testimonials" className="btn-clinical-outline">
              <span>Read All Patient Reviews & Case Studies</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 8. FAQ SECTION ─── */}
      <section className="faq-section section-padding" id="faq">
        <div className="home-container">
          <div className="faq-layout-grid">
            {/* Left FAQ Intro Column */}
            <div className="faq-intro-card scroll-reveal">
              <span className="section-kicker">PATIENT QUERIES ANSWERED</span>
              <h2 className="faq-title">
                Frequently Asked
                <br />
                <span className="text-azure">Clinical Questions</span>
              </h2>
              <p className="faq-desc">
                Have questions regarding your condition, session duration, insurance reimbursement, or home visit care? Here are direct, medically sound answers.
              </p>

              <div className="faq-support-box">
                <HelpCircle size={24} className="text-azure" />
                <div>
                  <strong>Have an urgent question?</strong>
                  <p>Our senior triage desk is available for quick questions on WhatsApp.</p>
                  <a
                    href="https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20have%20a%20question%20regarding%20physiotherapy."
                    target="_blank"
                    rel="noreferrer"
                    className="faq-whatsapp-link"
                  >
                    Chat with Helpline (+91 91458 75248) &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Right FAQ Accordion Column */}
            <div className="faq-accordion-col scroll-reveal" style={{ transitionDelay: "0.1s" }}>
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className={`faq-card-item ${openFaq === idx ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-toggle-btn"
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    aria-expanded={openFaq === idx}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`faq-arrow-icon ${openFaq === idx ? "rotated" : ""}`}
                    />
                  </button>

                  {openFaq === idx && (
                    <div className="faq-answer-content">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. CONTACT / APPOINTMENT FORM SECTION ─── */}
      <section className="contact-appointment-section section-padding" id="appointment-form">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">SCHEDULE A CONSULTATION</span>
            <h2 className="section-main-title">
              Book Your In-Clinic Assessment
              <br />
              <span className="text-azure">Or Request a Home Visit</span>
            </h2>
            <p className="section-main-desc">
              Reserve your 45-minute comprehensive diagnostic appointment. Zero waiting time, private sanitized treatment rooms, and direct consultation with senior MPT specialists.
            </p>
          </div>

          <div className="appointment-contact-grid scroll-reveal">
            {/* Form Column */}
            <div className="appointment-form-card">
              {isSubmitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={48} className="text-emerald success-icon" />
                  <h3>Appointment Request Submitted!</h3>
                  <p className="success-ref">
                    Booking Reference: <strong>{bookingRef}</strong>
                  </p>
                  <p className="success-copy">
                    Thank you, <strong>{formData.name || "Patient"}</strong>. Our clinical coordinator in Baner will contact you at <strong>{formData.phone}</strong> within 30 minutes to confirm your scheduled slot.
                  </p>

                  <div className="success-summary">
                    <div>
                      <span>Condition:</span>
                      <strong>
                        {CORE_SERVICES.find((s) => s.id === formData.concern)?.title || "General Orthopedic"}
                      </strong>
                    </div>
                    <div>
                      <span>Mode:</span>
                      <strong>{formData.careMode === "clinic" ? "In-Clinic (Baner)" : "Home Visit"}</strong>
                    </div>
                    <div>
                      <span>Date:</span>
                      <strong>{formData.date}</strong>
                    </div>
                  </div>

                  <div className="success-actions">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="btn-clinical-secondary"
                    >
                      Book Another Appointment
                    </button>
                    <a
                      href={`https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20have%20submitted%20booking%20ref%20${bookingRef}%20for%20appointment.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-clinical-primary"
                    >
                      <MessageCircle size={16} />
                      <span>Confirm Faster via WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="booking-form-element">
                  <div className="form-header-strip">
                    <Calendar size={18} className="text-azure" />
                    <strong>Instant Consultation Booking Desk</strong>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="patient-name">Patient Full Name *</label>
                      <input
                        id="patient-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Ramesh Kulkarni"
                        required
                      />
                    </div>

                    <div className="form-field">
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
                      {phoneError && <span className="field-error-msg">{phoneError}</span>}
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="patient-concern">Area of Pain / Condition *</label>
                      <select
                        id="patient-concern"
                        name="concern"
                        value={formData.concern}
                        onChange={handleInputChange}
                      >
                        <option value="spine">Lower Back Pain / Disc Bulge / Sciatica</option>
                        <option value="knee">Knee Pain / Osteoarthritis / Ligament</option>
                        <option value="shoulder">Frozen Shoulder / Rotator Cuff</option>
                        <option value="sports">Sports Injury / Ankle / Muscle Tear</option>
                        <option value="neck">Neck Pain / Cervical Spondylosis</option>
                        <option value="postop">Post-Operative Surgery Rehabilitation</option>
                        <option value="other">General Orthopedic / Joint Evaluation</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="care-mode">Consultation Mode *</label>
                      <select
                        id="care-mode"
                        name="careMode"
                        value={formData.careMode}
                        onChange={handleInputChange}
                      >
                        <option value="clinic">In-Clinic Consultation (Baner, Pune)</option>
                        <option value="home">Home Visit Physiotherapy (Pune)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-field">
                      <label htmlFor="preferred-date">Preferred Date *</label>
                      <input
                        id="preferred-date"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split("T")[0]}
                        required
                      />
                      {dateError && <span className="field-error-msg">{dateError}</span>}
                    </div>

                    <div className="form-field">
                      <label htmlFor="preferred-time">Preferred Time Slot *</label>
                      <select
                        id="preferred-time"
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

                  <div className="form-field">
                    <label htmlFor="patient-notes">Brief Description of Symptoms (Optional)</label>
                    <textarea
                      id="patient-notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="e.g. Pain shooting down right leg for 3 weeks, difficult to sit..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-booking-submit">
                    <Calendar size={18} />
                    <span>Confirm In-Clinic Assessment</span>
                    <ArrowRight size={17} />
                  </button>

                  <div className="form-footnote">
                    <ShieldCheck size={14} className="text-emerald" />
                    <span>Your medical details remain strictly confidential under HIPAA / NABH protocols.</span>
                  </div>
                </form>
              )}
            </div>

            {/* Clinic Info & Contact Desk Column */}
            <div className="clinic-contact-info-card">
              <div className="clinic-info-header">
                <span className="clinic-info-tag">VISIT OUR CLINIC</span>
                <h3>RevitaOrtho Spine & Joint Clinic</h3>
                <p>Modern non-surgical orthopedic rehabilitation facility with dedicated patient parking and wheelchair accessibility.</p>
              </div>

              <div className="clinic-details-list">
                <div className="detail-row">
                  <MapPin size={20} className="detail-icon" />
                  <div>
                    <strong>Clinic Address</strong>
                    <p>Plot 42, High Street Galleria, Baner-Pashan Link Road, Baner, Pune – 411045</p>
                  </div>
                </div>

                <div className="detail-row">
                  <Clock size={20} className="detail-icon" />
                  <div>
                    <strong>Consultation Hours</strong>
                    <p>Monday – Saturday: 8:00 AM – 8:00 PM</p>
                    <small>Sunday: By Prior Appointment Only</small>
                  </div>
                </div>

                <div className="detail-row">
                  <Phone size={20} className="detail-icon" />
                  <div>
                    <strong>Direct Appointments & Helpline</strong>
                    <p><a href="tel:+919145875248" className="phone-link">+91 91458 75248</a></p>
                  </div>
                </div>
              </div>

              <div className="clinic-quick-action-strip">
                <a
                  href="https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20want%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp-full"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp (+91 91458 75248)</span>
                </a>

                <a
                  href="https://maps.google.com/?q=Baner+Pune"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-directions-full"
                >
                  <ExternalLink size={16} />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>

              <div className="clinic-perks-mini-grid">
                <div className="mini-perk">
                  <CheckCircle2 size={15} className="text-emerald" />
                  <span>Dedicated Patient Parking</span>
                </div>
                <div className="mini-perk">
                  <CheckCircle2 size={15} className="text-emerald" />
                  <span>Wheelchair Ramp & Lift</span>
                </div>
                <div className="mini-perk">
                  <CheckCircle2 size={15} className="text-emerald" />
                  <span>Hospital-Grade Sterilization</span>
                </div>
                <div className="mini-perk">
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
