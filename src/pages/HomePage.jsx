import { useState, useEffect, useRef } from "react";
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
  CalendarCheck,
  Star,
  Phone,
  MapPin,
  Calendar,
  Award,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Check,
  Zap,
  Stethoscope,
  BadgeCheck,
  MessageCircle,
  Building2,
  Home,
  Shield,
  FileText,
  HelpCircle,
  Clock3,
  ThumbsUp,
  AlertCircle,
} from "lucide-react";
import "./HomePage.css";

// ─── 1. INTERACTIVE PAIN NAVIGATOR DATA ───
const PAIN_CONDITIONS = {
  spine: {
    id: "spine",
    label: "Lower Back & Sciatica",
    tagline: "Relieve compressed discs, pinched nerves & lumbar stiffness",
    symptoms: [
      "Sharp pain shooting down buttocks into legs (Sciatica)",
      "Inability to sit or stand for more than 15-20 minutes",
      "Morning stiffness & dull ache in lower spine",
      "Numbness, tingling or weakness in feet",
    ],
    rootCauses: "L4-L5 / L5-S1 disc bulge, facet joint arthritis, postural overload, poor core endurance.",
    technologies: ["Spinal Decompression", "Class-IV Cold Laser", "McKenzie Protocol", "Core Retraining"],
    timeline: "Pain reduced by 60-80% within 8–12 sessions without surgery",
    successRate: "95% Non-Surgical Recovery",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    serviceLink: "/treatments",
  },
  knee: {
    id: "knee",
    label: "Knee & Osteoarthritis",
    tagline: "Restore joint cartilage glide, stability and stair-climbing ease",
    symptoms: [
      "Crepitus (clicking/grinding sound) during squats or stairs",
      "Knee stiffness after sitting or upon waking",
      "Swelling, tenderness & inability to fully straighten leg",
      "Instability or giving-way feeling while walking",
    ],
    rootCauses: "Grade 1-3 Osteoarthritis, Meniscus tear, Patellofemoral tracking syndrome, Ligament laxity.",
    technologies: ["Targeted Tecar Radiofrequency", "Maitland Joint Glides", "Quadriceps Bio-Loading", "Gait Alignment"],
    timeline: "Noticeable mobility improvement in 2–3 weeks; surgery avoided in 92% cases",
    successRate: "92% Surgery Avoidance",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    serviceLink: "/treatments",
  },
  neck: {
    id: "neck",
    label: "Neck & Cervical Pain",
    tagline: "Reverse tech-neck forward head posture, headaches & nerve traps",
    symptoms: [
      "Constant burning ache between shoulder blades & upper back",
      "Shooting pain, numbness or pins in fingers and hands",
      "Tension headaches originating from base of skull",
      "Restricted neck rotation while driving or turning",
    ],
    rootCauses: "C5-C6 cervical radiculopathy, chronic screen posture, trapezius spasm, levator scapulae strain.",
    technologies: ["Cervical Traction", "Trigger Point Dry Needling", "Deep Neck Flexor Retraining", "Ergonomic Alignment"],
    timeline: "Rapid relief from nerve irritation in 3–5 sessions",
    successRate: "96% Postural Relief",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    serviceLink: "/services",
  },
  shoulder: {
    id: "shoulder",
    label: "Frozen Shoulder & Rotator Cuff",
    tagline: "Break adhesive capsulitis, restore 170° overhead arm reach",
    symptoms: [
      "Severe nighttime throbbing preventing sleep on affected side",
      "Inability to reach wallet, hook bra, or comb hair",
      "Sharp pinch when lifting arm above shoulder level",
      "Progressive loss of shoulder joint motion",
    ],
    rootCauses: "Adhesive capsulitis (frozen shoulder), supraspinatus tendonitis, subacromial impingement.",
    technologies: ["Matrix Rhythm Therapy (MaRhyThe)", "Hydrocollator Heat & Glides", "Scapular Stabilization", "Cold Laser"],
    timeline: "Arm elevation restored to 160°+ within 4–6 weeks",
    successRate: "91% Full Mobility Restored",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80",
    serviceLink: "/treatments",
  },
  sports: {
    id: "sports",
    label: "Sports Injuries & Ligaments",
    tagline: "Rapid athletic return for ACL, ankle sprains, hamstring & tendon tears",
    symptoms: [
      "Sudden pop followed by rapid joint swelling",
      "Sharp pain during sprint acceleration or sudden deceleration",
      "Chronic tendon ache in Achilles or patellar tendon",
      "Fear of re-injury during match play",
    ],
    rootCauses: "Grade I-II ligament sprains, muscle belly tears, biomechanical overloading, kinetic chain deficits.",
    technologies: ["High-Velocity Neuromuscular Drills", "Kinesiology Taping", "Eccentric Loading", "Agility Testing"],
    timeline: "Return-to-sport clearance in 6–10 weeks with biomechanical test",
    successRate: "98% Return-to-Play Rate",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    serviceLink: "/our-work",
  },
  postop: {
    id: "postop",
    label: "Post-Surgical Rehabilitation",
    tagline: "Structured accelerated recovery after TKR, THR & spine surgeries",
    symptoms: [
      "Severe post-operative stiffness, swelling & scar tissue tightness",
      "Difficulty walking without walker or crutches",
      "Muscle atrophy around operated joint",
      "Loss of functional independence for daily routines",
    ],
    rootCauses: "Total knee replacement (TKR), total hip replacement (THR), spine fusion, fracture fixation.",
    technologies: ["Continuous Passive Motion (CPM)", "Manual Lymph Drainage", "Gait Retraining", "Progressive Resistance"],
    timeline: "Independent stair climbing & walking unassisted in 4–8 weeks",
    successRate: "97% Independence Restored",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    serviceLink: "/services",
  },
};

// ─── 2. ADVANCED MEDICAL MODALITIES ───
const MODALITIES = [
  {
    title: "Class-IV High Power Laser",
    subtitle: "Cellular Photobiomodulation",
    description: "Delivers deep photonic energy up to 10cm into damaged tissues. Accelerates mitochondrial ATP production and neutralizes inflammation 3x faster than conventional therapies.",
    bestFor: "Disc Herniation, Sciatica, Acute Tendonitis",
    badge: "German Technology",
  },
  {
    title: "Computerized Spinal Decompression",
    subtitle: "Non-Surgical Disc Re-absorption",
    description: "Applies gentle, computer-calibrated distraction force to spinal vertebrae. Creates negative intradiscal vacuum pressure, pulling bulging disc material away from compressed nerves.",
    bestFor: "Slip Disc L4-L5, S1 Sciatica, Cervical Spondylosis",
    badge: "FDA Cleared Protocol",
  },
  {
    title: "Matrix Rhythm Therapy (MaRhyThe®)",
    subtitle: "Biological Cellular Oscillation",
    description: "Developed at University of Erlangen, Germany. Delivers 8-12 Hz rhythmic micro-vibrations matching healthy muscle cells, washing out metabolic waste and dissolving stubborn adhesions.",
    bestFor: "Frozen Shoulder, Chronic Spasms, Fibromyalgia",
    badge: "University of Erlangen",
  },
  {
    title: "Clinical Dry Needling & IASTM",
    subtitle: "Myofascial Trigger Point Deactivation",
    description: "Fine filament needles release deep muscular knots that cannot be reached by hands alone. Instantly restores normal blood flow and breaks persistent muscle guarding patterns.",
    bestFor: "Chronic Neck Tension, Piriformis Syndrome, Plantar Fasciitis",
    badge: "Certified Dry Needling",
  },
  {
    title: "Targeted Radiofrequency (Tecar)",
    subtitle: "Deep Capacitive Diathermy",
    description: "High-frequency electro-magnetic energy generates targeted therapeutic internal heat within ligaments, tendons, and deep joints to accelerate collagen remodeling.",
    bestFor: "Knee Ligament Tears, Osteoarthritis, Sports Sprains",
    badge: "European Sports Standard",
  },
  {
    title: "Digital Gait & Posture Lab",
    subtitle: "Biomechanical Motion Analysis",
    description: "Computerized high-speed gait tracking identifies micro-imbalances in foot strike, knee valgus, and pelvic tilt that cause chronic re-injury.",
    bestFor: "Running Injuries, Flat Feet, Post-Surgery Walking",
    badge: "Precision Diagnostics",
  },
];

// ─── 3. CLINICAL TEAM ───
const DOCTORS = [
  {
    name: "Dr. Sumit Gupta, PT",
    role: "Chief Orthopedic & Spine Physiotherapist",
    qualifications: "BPT, MPT (Musculoskeletal Disorders), MIAP",
    experience: "14+ Years Clinical Experience",
    fellowship: "Certified Spinal Decompression & Maitland Manual Therapist",
    formerlyAt: "Ex-Senior Consultant, Apollo Health City & Fortis Healthcare",
    focus: "Non-Surgical Disc Herniation, Sciatica, Chronic Back & Neck Pain",
    rating: "4.98",
    reviews: "640+ Patients Healed",
    availableToday: true,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Sneha Kulkarni, PT",
    role: "Head of Sports Rehabilitation & Joint Preservation",
    qualifications: "BPT, MPT (Sports Medicine), FIFA Medical Diploma",
    experience: "9+ Years Clinical Experience",
    fellowship: "Fellowship in Athletic Kinetic Chain & Dry Needling (UK)",
    formerlyAt: "Official Physiotherapist, National Badminton & Football Leagues",
    focus: "ACL & Meniscus Rehab, Frozen Shoulder, Knee Osteoarthritis",
    rating: "4.96",
    reviews: "490+ Athletes & Patients",
    availableToday: true,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Vikram Patil, PT",
    role: "Senior Consultant – Neuro & Post-Surgical Rehab",
    qualifications: "BPT, MPT (Neurological Sciences), Certified Bobath",
    experience: "11+ Years Clinical Experience",
    fellowship: "Certified Geriatric Balance & Gait Restoration Specialist",
    formerlyAt: "Ex-Head of Physical Therapy, Metro Multi-Speciality Hospital",
    focus: "Post-TKR / THR Knee Rehab, Stroke Recovery, Spinal Fusion Care",
    rating: "4.97",
    reviews: "520+ Rehab Cases",
    availableToday: true,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
  },
];

// ─── 4. CLINICAL CASE STUDIES ───
const CLINICAL_CASES = [
  {
    id: "case-1",
    condition: "Severe L4-L5 Disc Herniation with Right Sciatica",
    patient: "Rajesh M., 43 Yrs • Principal Software Architect",
    presentation: "Unable to sit longer than 15 mins. Excruciating shooting nerve pain down right calf to foot. Two spine surgeons had recommended microdiscectomy.",
    protocol: "12 Sessions of Computerized Spinal Decompression + High-Power Class-4 Cold Laser + McKenzie Extension & Deep Transverse Core Retraining.",
    outcome: "100% resolution of radiating pain. Full sitting tolerance of 8+ hours restored without surgery.",
    timeline: "4 Weeks (12 Sessions)",
    followUp: "Verified asymptomatic at 12-month follow-up MRI.",
    tag: "Spine Surgery Avoided",
  },
  {
    id: "case-2",
    condition: "Chronic Adhesive Capsulitis (Frozen Shoulder – Stage 2)",
    patient: "Sunita P., 56 Yrs • School Principal",
    presentation: "Severe night throbbing for 7 months. Arm elevation restricted to 65° (could not touch back or comb hair). High dependence on painkiller pills.",
    protocol: "15 Sessions of German Matrix Rhythm Therapy (MaRhyThe®) + Maitland Glenohumeral Joint Glides + Hydrocollator packs & scapular stability.",
    outcome: "Restored 170° full vertical arm reach. Zero night pain. Completely off all pain medications.",
    timeline: "5 Weeks (15 Sessions)",
    followUp: "Returned to active swimming and driving.",
    tag: "Full Mobility Restored",
  },
  {
    id: "case-3",
    condition: "Grade-II ACL Ligament Tear & Meniscal Sprain",
    patient: "Aryan S., 22 Yrs • State-Level Football Striker",
    presentation: "Traumatic non-contact knee twist. Knee giving-way episodes, massive joint effusion, loss of single-leg balance and running capability.",
    protocol: "20 Sessions of High-Velocity Neuromuscular Proprioception Drills + Tecar Radiofrequency + Kinetic Chain eccentric loading.",
    outcome: "Cleared all 5 components of return-to-sport biomechanical hop testing. Played full 90-minute competitive match with zero laxity.",
    timeline: "10 Weeks (20 Sessions)",
    followUp: "Completed state championship tournament injury-free.",
    tag: "Athletic Comeback",
  },
];

// ─── 5. VERIFIED PATIENT REVIEWS ───
const TESTIMONIALS = [
  {
    name: "Dr. Aniruddh Joshi",
    role: "Consultant Cardiologist",
    condition: "Cervical Radiculopathy & Arm Numbness",
    text: "Being a physician myself, I am very critical of medical claims. When I developed severe cervical disc pain with tingling into my fingers, Dr. Sumit diagnosed the exact nerve root impingement within 15 minutes. Within 3 weeks of decompression and manual therapy, my pain resolved completely. Highly ethical, evidence-based clinic.",
    rating: 5,
    location: "Baner, Pune",
    verified: true,
  },
  {
    name: "Meera Deshmukh",
    role: "Senior Homemaker",
    condition: "Bilateral Knee Osteoarthritis (Grade 3)",
    text: "I was told by two doctors that knee replacement was my only choice. I couldn't climb the 8 steps into my house without crying. Dr. Sneha created a gentle, progressive strengthening plan using Tecar therapy. Today I walk 3 kilometers daily in the park and climb stairs comfortably. RevitaOrtho changed my life.",
    rating: 5,
    location: "Aundh, Pune",
    verified: true,
  },
  {
    name: "Karan Singhania",
    role: "Marathon Runner & Tech VP",
    condition: "Chronic Plantar Fasciitis & Achilles Tendonitis",
    text: "I had visited 4 different clinics with zero lasting results over 8 months. Here, they analyzed my running gait using camera sensors and found severe pelvic drop. Combined dry needling and eccentric calf loading cured my morning heel pain in just 4 sessions. Ran the Tata Mumbai Half Marathon pain-free!",
    rating: 5,
    location: "Hinjewadi Phase 1",
    verified: true,
  },
];

// ─── 6. CLINICAL FAQS ───
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
    a: "Most patients experience significant pain reduction (40% to 60%) within the first 3 to 4 sessions due to our acute pain neutralization protocols (Class-4 Laser and Manual Glides). We will give you a transparent, written treatment plan after your initial assessment.",
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
  const [activePainTab, setActivePainTab] = useState("spine");
  const [openFaq, setOpenFaq] = useState(0);

  // Quick Triage State
  const [triageCondition, setTriageCondition] = useState("spine");
  const [triageMode, setTriageMode] = useState("clinic");
  const [triageTime, setTriageTime] = useState("evening");

  function handleTriageSubmit(e) {
    e.preventDefault();
    navigate(
      `/appointment?condition=${encodeURIComponent(triageCondition)}&mode=${encodeURIComponent(
        triageMode
      )}&time=${encodeURIComponent(triageTime)}`
    );
  }

  const selectedCondition = PAIN_CONDITIONS[activePainTab];

  // ─── SCROLL REVEAL ANIMATION (IntersectionObserver) ───
  useEffect(() => {
    const revealElements = document.querySelectorAll(".scroll-reveal");
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // only animate once
          }
        });
      },
      {
        rootMargin: "0px 0px -60px 0px", // trigger slightly before fully in view
        threshold: 0.15,
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="modern-home-page">
      {/* ─── LIVE CLINICAL STATUS BANNER ─── */}
      <div className="live-status-banner">
        <div className="home-container status-banner-inner">
          <div className="status-live-pill">
            <span className="live-pulse-dot"></span>
            <strong>CLINIC OPEN TODAY:</strong> 8:00 AM – 8:00 PM • Same-Day Walk-ins & Urgent Care Available
          </div>

          <div className="status-banner-links">
            <a href="tel:+919158347290" className="banner-tel-link">
              <Phone size={14} />
              <span>Direct Doctor Helpline: <strong>+91 91583 47290</strong></span>
            </a>
            <a
              href="https://wa.me/919158347290?text=Hello%20RevitaOrtho,%20I%20would%20like%20to%20consult%20regarding%20my%20pain%20issue."
              target="_blank"
              rel="noreferrer"
              className="banner-whatsapp-pill"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Instant Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* ─── 1. MASTER HERO SECTION ─── */}
      <section className="clinical-hero">
        <div className="home-container clinical-hero-grid">
          {/* Left Column: Clinical Authority & Proposition */}
          <div className="clinical-hero-content">
            <div className="clinical-badge-row">
              <span className="hero-accreditation-pill">
                <ShieldCheck size={15} />
                NABH STANDARDS • ISO 9001:2015 CERTIFIED CLINIC
              </span>
            </div>

            <h1 className="clinical-hero-title">
              Relieve Chronic Pain.
              <br />
              Restore Movement.
              <br />
              <span className="text-highlight">Avoid Surgery.</span>
            </h1>

            <p className="clinical-hero-lead">
              Evidence-based orthopedic physiotherapy, non-surgical computerized spine decompression, and sports rehabilitation led by certified MPT specialists. Over <strong>15,000+ patients</strong> successfully treated across Pune.
            </p>

            {/* Credibility metric ribbon */}
            <div className="hero-trust-ribbon">
              <div className="trust-ribbon-item">
                <div className="trust-ribbon-stars">
                  <Star size={16} className="star-gold fill-gold" />
                  <Star size={16} className="star-gold fill-gold" />
                  <Star size={16} className="star-gold fill-gold" />
                  <Star size={16} className="star-gold fill-gold" />
                  <Star size={16} className="star-gold fill-gold" />
                  <span className="rating-score">4.9 / 5.0</span>
                </div>
                <span className="trust-ribbon-sub">1,450+ Verified Google Reviews</span>
              </div>

              <div className="trust-divider"></div>

              <div className="trust-ribbon-item">
                <span className="trust-metric-number">94.2%</span>
                <span className="trust-ribbon-sub">Joint & Spine Surgeries Averted</span>
              </div>

              <div className="trust-divider"></div>

              <div className="trust-ribbon-item">
                <span className="trust-metric-number">1-on-1</span>
                <span className="trust-ribbon-sub">Dedicated Senior Specialist Care</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="clinical-hero-actions">
              <Link to="/appointment" className="btn-clinical-primary">
                <Calendar size={18} />
                <span>Book In-Depth Assessment (45 Mins)</span>
                <ArrowRight size={17} />
              </Link>

              <a
                href="https://wa.me/919158347290?text=Hi,%20I%20want%20to%20discuss%20my%20symptoms%20with%20a%20physiotherapist."
                target="_blank"
                rel="noreferrer"
                className="btn-clinical-secondary"
              >
                <MessageCircle size={18} className="text-emerald" />
                <span>Quick WhatsApp Triage</span>
              </a>
            </div>

            {/* Reassurance bullet points */}
            <div className="clinical-guarantee-row">
              <span>
                <CheckCircle2 size={16} className="icon-check" />
                Zero Waiting Time Policy
              </span>
              <span>
                <CheckCircle2 size={16} className="icon-check" />
                No Long-Term Lock-in Packages
              </span>
              <span>
                <CheckCircle2 size={16} className="icon-check" />
                Cashless Insurance Support
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Quick Triage Box & Real Clinic Visual */}
          <div className="clinical-hero-widget-col">
            {/* Quick Consultation Slot Finder */}
            <div className="triage-card">
              <div className="triage-card-header">
                <div className="triage-header-tag">
                  <Sparkles size={14} />
                  <span>ONLINE APPOINTMENT DESK</span>
                </div>
                <h3>Check Specialist Availability</h3>
                <p>Select your pain area for immediate doctor assignment</p>
              </div>

              <form onSubmit={handleTriageSubmit} className="triage-form">
                <div className="triage-form-group">
                  <label htmlFor="triage-area">
                    <Bone size={15} /> Where is your pain located?
                  </label>
                  <select
                    id="triage-area"
                    value={triageCondition}
                    onChange={(e) => setTriageCondition(e.target.value)}
                  >
                    <option value="spine">Lower Back Pain / Slip Disc / Sciatica</option>
                    <option value="knee">Knee Pain / Osteoarthritis / Ligament</option>
                    <option value="neck">Neck Pain / Cervical Spondylosis</option>
                    <option value="shoulder">Frozen Shoulder / Rotator Cuff Pinch</option>
                    <option value="sports">Sports Injury / Ankle Sprain / Muscle Tear</option>
                    <option value="postop">Post-Operative Surgery Rehabilitation</option>
                  </select>
                </div>

                <div className="triage-row-2">
                  <div className="triage-form-group">
                    <label htmlFor="triage-mode">
                      <Building2 size={15} /> Consultation Mode
                    </label>
                    <select
                      id="triage-mode"
                      value={triageMode}
                      onChange={(e) => setTriageMode(e.target.value)}
                    >
                      <option value="clinic">In-Clinic Consultation</option>
                      <option value="home">Home Visit Physiotherapy</option>
                    </select>
                  </div>

                  <div className="triage-form-group">
                    <label htmlFor="triage-time">
                      <Clock3 size={15} /> Preferred Slot
                    </label>
                    <select
                      id="triage-time"
                      value={triageTime}
                      onChange={(e) => setTriageTime(e.target.value)}
                    >
                      <option value="morning">Morning (8 AM – 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM – 4 PM)</option>
                      <option value="evening">Evening (4 PM – 8 PM)</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="triage-submit-btn">
                  <span>Confirm Slot & Proceed</span>
                  <ArrowRight size={17} />
                </button>
              </form>

              <div className="triage-footnote">
                <AlertCircle size={14} />
                <span>Next open consultation slot: <strong>Today, 4:30 PM</strong></span>
              </div>
            </div>

            {/* Doctor Verification Floating Card */}
            <div className="hero-floating-specialist">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=160&q=80"
                alt="Dr. Sumit Gupta Lead Specialist"
                className="floating-doctor-img"
              />
              <div className="floating-doctor-info">
                <div className="doctor-active-badge">
                  <span className="live-dot-mini"></span> On Duty Today
                </div>
                <strong>Dr. Sumit Gupta, PT</strong>
                <p>MPT Orthopedics • 14+ Yrs Exp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. CLINICAL ACCREDITATION BAR ─── */}
      <section className="clinic-credentials-bar">
        <div className="home-container credentials-bar-inner">
          <div className="credential-item scroll-reveal">
            <BadgeCheck size={26} className="cred-icon" />
            <div>
              <strong>Indian Association of Physiotherapists</strong>
              <span>Registered Life Member (MIAP Certified)</span>
            </div>
          </div>

          <div className="credential-item scroll-reveal" style={{ transitionDelay: "0.1s" }}>
            <Award size={26} className="cred-icon" />
            <div>
              <strong>German MaRhyThe® Certified Center</strong>
              <span>Standardized Biological Matrix Resonance</span>
            </div>
          </div>

          <div className="credential-item scroll-reveal" style={{ transitionDelay: "0.2s" }}>
            <Shield size={26} className="cred-icon" />
            <div>
              <strong>NABH Quality Protocols</strong>
              <span>Strict Hospital-Grade Sanitization & Clinical Safety</span>
            </div>
          </div>

          <div className="credential-item scroll-reveal" style={{ transitionDelay: "0.3s" }}>
            <Building2 size={26} className="cred-icon" />
            <div>
              <strong>Insurance TPA Support</strong>
              <span>Cashless & Reimbursement Documentation Desk</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. INTERACTIVE PAIN & SYMPTOM NAVIGATOR ("WHERE DOES IT HURT?") ─── */}
      <section className="pain-navigator-section section-padding">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">INTERACTIVE CLINICAL TRIAGE</span>
            <h2 className="section-main-title">
              Where Does It Hurt?
              <br />
              <span className="text-highlight">Explore Your Symptoms & Solution</span>
            </h2>
            <p className="section-main-desc">
              Select your specific area of concern below to see how our targeted clinical protocols diagnose, treat, and resolve the root cause — without relying on temporary painkillers.
            </p>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="pain-nav-tabs scroll-reveal">
            {Object.values(PAIN_CONDITIONS).map((cond) => (
              <button
                key={cond.id}
                type="button"
                className={`pain-tab-btn ${activePainTab === cond.id ? "active" : ""}`}
                onClick={() => setActivePainTab(cond.id)}
              >
                <span>{cond.label}</span>
                {activePainTab === cond.id && <span className="tab-indicator"></span>}
              </button>
            ))}
          </div>

          {/* Dynamic Interactive Detail Board */}
          <div className="pain-detail-card scroll-reveal">
            <div className="pain-detail-grid">
              {/* Left Column: Symptoms & Protocol */}
              <div className="pain-detail-content">
                <div className="pain-badge-row">
                  <span className="condition-highlight-badge">{selectedCondition.label}</span>
                  <span className="success-rate-badge">{selectedCondition.successRate}</span>
                </div>

                <h3 className="pain-detail-heading">{selectedCondition.tagline}</h3>

                {/* Symptoms list */}
                <div className="symptoms-block">
                  <h4 className="block-title">Common Symptoms Experienced:</h4>
                  <ul className="symptoms-list">
                    {selectedCondition.symptoms.map((sym, i) => (
                      <li key={i}>
                        <CheckCircle2 size={17} className="sym-check" />
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Root cause and modalities */}
                <div className="root-cause-box">
                  <strong>Clinical Root Cause:</strong>
                  <p>{selectedCondition.rootCauses}</p>
                </div>

                <div className="modalities-used-row">
                  <span className="modalities-label">Specialized Modalities Used:</span>
                  <div className="modalities-tags">
                    {selectedCondition.technologies.map((tech, i) => (
                      <span key={i} className="modality-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="recovery-time-bar">
                  <Clock size={18} className="text-emerald" />
                  <span>
                    <strong>Expected Timeline:</strong> {selectedCondition.timeline}
                  </span>
                </div>

                <div className="pain-action-row">
                  <Link
                    to={`/appointment?condition=${encodeURIComponent(selectedCondition.id)}`}
                    className="btn-clinical-primary"
                  >
                    <span>Book Evaluation for {selectedCondition.label}</span>
                    <ArrowRight size={17} />
                  </Link>

                  <Link to={selectedCondition.serviceLink} className="btn-clinical-outline">
                    <span>Learn Complete Treatment Protocol</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Therapy Photo & Metrics */}
              <div className="pain-detail-visual">
                <div className="pain-image-wrapper">
                  <img
                    src={selectedCondition.image}
                    alt={selectedCondition.label}
                    className="pain-therapy-img"
                    loading="lazy"
                  />
                  <div className="pain-image-overlay-card">
                    <Activity size={20} className="pulse-icon" />
                    <div>
                      <strong>Targeted Hands-On Care</strong>
                      <p>Personalized 1-on-1 therapist focus</p>
                    </div>
                  </div>
                </div>

                <div className="pain-metric-banner">
                  <div>
                    <strong>45 Mins</strong>
                    <span>In-depth Biomechanical Diagnostic</span>
                  </div>
                  <div>
                    <strong>Zero</strong>
                    <span>Steroid Injections or Surgeries</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. ADVANCED CLINICAL TECHNOLOGY & MODALITIES ─── */}
      <section className="clinical-tech-section section-padding">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">PRECISION MEDICAL INFRASTRUCTURE</span>
            <h2 className="section-main-title">
              Advanced Non-Invasive Technologies
              <br />
              <span className="text-highlight">Accelerating Your Recovery</span>
            </h2>
            <p className="section-main-desc">
              We invest in state-of-the-art European rehabilitation technology that penetrates deeper, deactivates inflammation faster, and achieves outcomes conventional heat pads cannot match.
            </p>
          </div>

          <div className="tech-cards-grid">
            {MODALITIES.map((mod, idx) => (
              <div key={idx} className="tech-modality-card scroll-reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="tech-card-header">
                  <span className="tech-badge">{mod.badge}</span>
                  <Zap size={20} className="tech-icon-spark" />
                </div>

                <h3 className="tech-title">{mod.title}</h3>
                <span className="tech-subtitle">{mod.subtitle}</span>

                <p className="tech-desc">{mod.description}</p>

                <div className="tech-best-for">
                  <span className="best-for-label">Primary Indications:</span>
                  <p className="best-for-text">{mod.bestFor}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="tech-bottom-action">
            <Link to="/treatments" className="btn-clinical-primary">
              <span>View All Clinical Treatment Modalities</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 5. REAL CLINICAL CASE STUDIES (BEFORE & AFTER EVIDENCE) ─── */}
      <section className="case-studies-section section-padding">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">CLINICAL DOCUMENTATION & RESULTS</span>
            <h2 className="section-main-title">
              Real Patient Case Studies
              <br />
              <span className="text-highlight">Documented Recovery Timelines</span>
            </h2>
            <p className="section-main-desc">
              We believe in transparent clinical outcomes. Here is how our personalized rehabilitation protocols solved debilitating conditions that had been written off as surgical candidates.
            </p>
          </div>

          <div className="case-studies-grid">
            {CLINICAL_CASES.map((item, idx) => (
              <article key={item.id} className="case-study-card scroll-reveal" style={{ transitionDelay: `${idx * 0.15}s` }}>
                <div className="case-card-top">
                  <span className="case-tag-pill">{item.tag}</span>
                  <span className="case-duration-pill">
                    <Clock3 size={14} /> {item.timeline}
                  </span>
                </div>

                <h3 className="case-condition-title">{item.condition}</h3>
                <p className="case-patient-profile">{item.patient}</p>

                <div className="case-section-block">
                  <strong className="block-label text-danger">Initial Presentation:</strong>
                  <p className="block-text">{item.presentation}</p>
                </div>

                <div className="case-section-block">
                  <strong className="block-label text-brand">Clinical Protocol Delivered:</strong>
                  <p className="block-text">{item.protocol}</p>
                </div>

                <div className="case-result-box">
                  <div className="result-icon-badge">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <strong>Documented Outcome:</strong>
                    <p>{item.outcome}</p>
                    <small className="followup-note">{item.followUp}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="case-bottom-cta">
            <p>Are you currently struggling with a similar condition?</p>
            <Link to="/appointment" className="btn-clinical-secondary">
              <span>Schedule a Clinical Case Review</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 6. LEAD CLINICAL DOCTORS & SPECIALISTS ─── */}
      <section className="doctors-team-section section-padding" id="doctors">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">QUALIFIED MEDICAL LEADERSHIP</span>
            <h2 className="section-main-title">
              Meet Our Senior Physiotherapists
              <br />
              <span className="text-highlight">Direct Care from MPT Specialists</span>
            </h2>
            <p className="section-main-desc">
              At RevitaOrtho, you are evaluated and treated directly by senior clinicians with Master’s degrees, hospital leadership experience, and international fellowships — never delegated to inexperienced interns.
            </p>
          </div>

          <div className="doctors-cards-grid">
            {DOCTORS.map((doc, idx) => (
              <div key={idx} className="doctor-specialist-card scroll-reveal" style={{ transitionDelay: `${idx * 0.15}s` }}>
                <div className="doctor-photo-frame">
                  <img src={doc.image} alt={doc.name} className="doctor-card-photo" loading="lazy" />
                  {doc.availableToday && (
                    <span className="doctor-availability-tag">
                      <span className="live-dot-mini"></span> Available for Consultation
                    </span>
                  )}
                </div>

                <div className="doctor-profile-content">
                  <div className="doctor-rating-line">
                    <Star size={15} className="star-gold fill-gold" />
                    <strong>{doc.rating} Rating</strong>
                    <span className="doc-review-count">({doc.reviews})</span>
                  </div>

                  <h3 className="doc-name">{doc.name}</h3>
                  <span className="doc-role">{doc.role}</span>
                  <p className="doc-degree">{doc.qualifications}</p>

                  <div className="doc-divider"></div>

                  <div className="doc-credentials-list">
                    <div className="cred-line">
                      <Award size={15} className="cred-ico" />
                      <span>{doc.experience}</span>
                    </div>
                    <div className="cred-line">
                      <ShieldCheck size={15} className="cred-ico" />
                      <span>{doc.fellowship}</span>
                    </div>
                    <div className="cred-line">
                      <Building2 size={15} className="cred-ico" />
                      <span>{doc.formerlyAt}</span>
                    </div>
                  </div>

                  <div className="doc-focus-box">
                    <strong>Primary Expertise:</strong>
                    <p>{doc.focus}</p>
                  </div>

                  <div className="doc-card-actions">
                    <Link
                      to={`/appointment?doctor=${encodeURIComponent(doc.name)}`}
                      className="btn-doc-book"
                    >
                      <Calendar size={16} />
                      <span>Book with {doc.name.split(" ")[1]}</span>
                    </Link>

                    <Link to="/team" className="btn-doc-profile">
                      <span>View Bio</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="team-center-link">
            <Link to="/team" className="btn-clinical-outline">
              <span>View Full Clinical Team, Registrations & Certifications</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 7. THE 4-STEP SCIENTIFIC RECOVERY PROTOCOL ─── */}
      <section className="protocol-roadmap-section section-padding">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">STRUCTURED CLINICAL METHODOLOGY</span>
            <h2 className="section-main-title">
              Our 4-Phase Recovery Roadmap
              <br />
              <span className="text-highlight">How We Guide You from Pain to Freedom</span>
            </h2>
            <p className="section-main-desc">
              We follow a strict, milestone-driven rehabilitation protocol. Every phase is objectively tested before advancing, ensuring zero guesswork and zero relapse.
            </p>
          </div>

          <div className="roadmap-cards-grid">
            <div className="roadmap-phase-card scroll-reveal">
              <div className="phase-number-badge">01</div>
              <div className="phase-title-wrap">
                <span className="phase-sub">DAY 1</span>
                <h3>45-Min Biomechanical Diagnostic</h3>
              </div>
              <p>
                We do not just look at where it hurts. We test kinetic chains, joint mobility angles, nerve tension signs, and postural imbalances to identify the exact root cause.
              </p>
              <ul className="phase-checklist">
                <li><Check size={14} /> Full Orthopedic Provocation Tests</li>
                <li><Check size={14} /> Muscle Imbalance & Strength Scoring</li>
                <li><Check size={14} /> Clear Written Diagnostic Report</li>
              </ul>
            </div>

            <div className="roadmap-phase-card scroll-reveal" style={{ transitionDelay: "0.1s" }}>
              <div className="phase-number-badge">02</div>
              <div className="phase-title-wrap">
                <span className="phase-sub">WEEKS 1 – 2</span>
                <h3>Acute Pain Deactivation</h3>
              </div>
              <p>
                Immediate reduction of pain, spasms, and inflammation using Class-4 Laser, Decompression, and Dry Needling to calm irritated nerve roots and relieve distress.
              </p>
              <ul className="phase-checklist">
                <li><Check size={14} /> 50%+ reduction in pain scores</li>
                <li><Check size={14} /> Rapid reduction of swelling & guarding</li>
                <li><Check size={14} /> Restoration of comfortable sleep</li>
              </ul>
            </div>

            <div className="roadmap-phase-card scroll-reveal" style={{ transitionDelay: "0.2s" }}>
              <div className="phase-number-badge">03</div>
              <div className="phase-title-wrap">
                <span className="phase-sub">WEEKS 2 – 4</span>
                <h3>Joint Mobilization & Retraining</h3>
              </div>
              <p>
                Maitland and Mulligan manual therapy restore lost joint play. Targeted progressive exercise therapy awakens dormant stabilizers and corrects moving faults.
              </p>
              <ul className="phase-checklist">
                <li><Check size={14} /> Full functional range of motion</li>
                <li><Check size={14} /> Deep core & postural muscle activation</li>
                <li><Check size={14} /> Unassisted stairs & walking tolerance</li>
              </ul>
            </div>

            <div className="roadmap-phase-card scroll-reveal" style={{ transitionDelay: "0.3s" }}>
              <div className="phase-number-badge">04</div>
              <div className="phase-title-wrap">
                <span className="phase-sub">WEEKS 4+</span>
                <h3>Relapse Prevention & Ergonomics</h3>
              </div>
              <p>
                Personalized home exercise prescriptions, digital video app guidance, workstation ergonomic realignment, and return-to-sport testing to prevent future injury.
              </p>
              <ul className="phase-checklist">
                <li><Check size={14} /> Custom Video Home Program</li>
                <li><Check size={14} /> Workstation & Driving Ergonomic Audit</li>
                <li><Check size={14} /> Quarterly Mobility Maintenance Check</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. CLINIC VISIT VS HOME PHYSIOTHERAPY ─── */}
      <section className="care-modes-section section-padding">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">FLEXIBLE CARE OPTIONS</span>
            <h2 className="section-main-title">
              Two Ways to Receive Exceptional Care
              <br />
              <span className="text-highlight">In-Clinic or at Your Doorstep</span>
            </h2>
            <p className="section-main-desc">
              Choose between visiting our fully equipped rehabilitation center or having our certified senior physiotherapists bring clinical care directly to your home.
            </p>
          </div>

          <div className="care-modes-grid">
            {/* Mode 1: Clinic */}
            <div className="care-mode-card clinic-card scroll-reveal">
              <div className="care-card-icon">
                <Building2 size={28} />
              </div>
              <span className="care-card-type">CENTRAL REHABILITATION CLINIC</span>
              <h3>In-Clinic Comprehensive Therapy</h3>
              <p>
                Best suited for active patients seeking full access to our high-tech medical modalities, computerized decompression tables, and advanced kinetic gym.
              </p>

              <ul className="care-perks-list">
                <li>
                  <CheckCircle2 size={16} className="text-emerald" />
                  Full access to Class-IV Laser & Spinal Decompression
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-emerald" />
                  Computerized digital gait and posture analysis lab
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-emerald" />
                  Zero waiting queue with pre-booked slot system
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-emerald" />
                  Hygienic, wheelchair accessible, dedicated patient parking
                </li>
              </ul>

              <div className="care-card-action">
                <Link to="/appointment?mode=clinic" className="btn-clinical-primary full-w">
                  <span>Book In-Clinic Evaluation</span>
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            {/* Mode 2: Home Care */}
            <div className="care-mode-card home-card scroll-reveal" style={{ transitionDelay: "0.15s" }}>
              <div className="care-card-icon home-icon-wrap">
                <Home size={28} />
              </div>
              <span className="care-card-type">DOORSTEP PHYSIOTHERAPY SERVICE</span>
              <h3>Home Visit Clinical Rehabilitation</h3>
              <p>
                Specifically designed for seniors, post-surgical knee/hip patients, stroke recovery, and severe acute pain where traveling to a clinic causes distress.
              </p>

              <ul className="care-perks-list">
                <li>
                  <CheckCircle2 size={16} className="text-emerald" />
                  Senior MPT therapists visit with portable electrotherapy & ultrasound
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-emerald" />
                  Home environment ergonomic & fall-prevention evaluation
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-emerald" />
                  Comfortable recovery in the presence of family
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-emerald" />
                  Available across Pune (Baner, Aundh, Hinjewadi, Wakad & Kothrud)
                </li>
              </ul>

              <div className="care-card-action">
                <Link to="/appointment?mode=home" className="btn-clinical-secondary full-w">
                  <span>Request Home Visit Physiotherapist</span>
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. AUTHENTIC PATIENT EXPERIENCES & REVIEWS ─── */}
      <section className="testimonials-section section-padding">
        <div className="home-container">
          <div className="section-header-centered scroll-reveal">
            <span className="section-kicker">VERIFIED GOOGLE REVIEWS</span>
            <h2 className="section-main-title">
              Loved by Over 15,000+ Patients
              <br />
              <span className="text-highlight">Read Their Unfiltered Stories</span>
            </h2>
            <p className="section-main-desc">
              Real people who regained their careers, athletic dreams, and peaceful sleep without invasive surgeries.
            </p>
          </div>

          <div className="testimonials-cards-grid">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="testimonial-patient-card scroll-reveal" style={{ transitionDelay: `${idx * 0.15}s` }}>
                <div className="test-card-stars">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} size={16} className="star-gold fill-gold" />
                  ))}
                  {t.verified && (
                    <span className="verified-patient-tag">
                      <BadgeCheck size={14} /> Verified Patient
                    </span>
                  )}
                </div>

                <p className="test-quote">"{t.text}"</p>

                <div className="test-patient-condition">
                  <strong>Treated For:</strong> {t.condition}
                </div>

                <div className="test-author-block">
                  <div className="author-avatar">{t.name.charAt(0)}</div>
                  <div className="author-meta">
                    <strong>{t.name}</strong>
                    <span>{t.role} • {t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-footer-row">
            <div className="google-badge-box">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google Reviews"
                className="google-mini-logo"
              />
              <div>
                <strong>4.98 Out of 5.0 Rating</strong>
                <span>Based on 1,450+ verified patient reviews</span>
              </div>
            </div>

            <Link to="/testimonials" className="btn-clinical-outline">
              <span>Read All 1,450+ Patient Reviews</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 10. INSURANCE & TRANSPARENT PRICING STRIP ─── */}
      <section className="insurance-pricing-strip">
        <div className="home-container insurance-strip-inner scroll-reveal">
          <div className="insurance-left">
            <span className="insurance-kicker">FINANCIAL CLARITY</span>
            <h3>Zero Hidden Costs. 100% Transparent Care.</h3>
            <p>
              We provide itemized diagnostic invoices, medical fitness certificates, and claim documentation for all major private and corporate health insurance providers.
            </p>
          </div>

          <div className="insurance-perks">
            <div className="ins-perk">
              <CheckCircle2 size={18} className="text-emerald" />
              <span>Cashless TPA Documentation Desk</span>
            </div>
            <div className="ins-perk">
              <CheckCircle2 size={18} className="text-emerald" />
              <span>OPD & Post-Hospitalization Claim Support</span>
            </div>
            <div className="ins-perk">
              <CheckCircle2 size={18} className="text-emerald" />
              <span>Zero-Interest 3-Month EMI on Packages</span>
            </div>
            <div className="ins-perk">
              <CheckCircle2 size={18} className="text-emerald" />
              <span>Corporate Tie-up Discounts Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 11. CLINICAL FAQS ACCORDION ─── */}
      <section className="faq-accordion-section section-padding">
        <div className="home-container faq-section-grid">
          <div className="faq-intro-col scroll-reveal">
            <span className="section-kicker">PATIENT QUERIES ANSWERED</span>
            <h2 className="section-main-title">
              Frequently Asked
              <br />
              <span className="text-highlight">Clinical Questions</span>
            </h2>
            <p>
              Have questions about your condition, insurance, or what to expect in your first session? Here are honest, clinical answers.
            </p>

            <div className="faq-direct-help-card">
              <HelpCircle size={24} className="text-emerald" />
              <div>
                <strong>Still have doubts?</strong>
                <p>Speak directly to our senior triage physiotherapist on WhatsApp.</p>
                <a
                  href="https://wa.me/919158347290?text=Hello%20Doctor,%20I%20have%20a%20question%20before%20booking."
                  target="_blank"
                  rel="noreferrer"
                  className="faq-chat-link"
                >
                  Chat with a Doctor Now &rarr;
                </a>
              </div>
            </div>
          </div>

          <div className="faq-accordion-col scroll-reveal" style={{ transitionDelay: "0.15s" }}>
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-accordion-item ${openFaq === idx ? "active" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={19} className={`faq-chevron ${openFaq === idx ? "rotated" : ""}`} />
                </button>

                {openFaq === idx && (
                  <div className="faq-answer-body">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 12. CLINIC LOCATION & WORKING HOURS CARD ─── */}
      <section className="clinic-location-section">
        <div className="home-container">
          <div className="clinic-contact-card scroll-reveal">
            <div className="contact-card-grid">
              <div className="contact-detail-col">
                <span className="section-kicker text-white">VISIT OUR CLINIC</span>
                <h2>We Are Ready to Help You Heal.</h2>
                <p>
                  Located in the heart of Baner, Pune. Dedicated patient parking, elevator access, and fully sanitized treatment suites.
                </p>

                <div className="contact-info-list">
                  <div className="info-item">
                    <MapPin size={20} className="info-icon" />
                    <div>
                      <strong>RevitaOrtho Spine & Joint Clinic</strong>
                      <p>Plot 42, High Street Galleria, Baner-Pashan Link Road, Baner, Pune – 411045</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <Clock size={20} className="info-icon" />
                    <div>
                      <strong>Consultation Timings</strong>
                      <p>Monday – Saturday: 8:00 AM – 8:00 PM | Sunday: By Prior Appointment Only</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <Phone size={20} className="info-icon" />
                    <div>
                      <strong>Direct Phone & Appointments</strong>
                      <p>+91 91583 47290 / +91 91583 47291</p>
                    </div>
                  </div>
                </div>

                <div className="location-btn-row">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-clinical-white"
                  >
                    <MapPin size={17} />
                    <span>Get Directions on Google Maps</span>
                  </a>

                  <a href="tel:+919158347290" className="btn-clinical-outline-white">
                    <Phone size={17} />
                    <span>Call Reception</span>
                  </a>
                </div>
              </div>

              <div className="contact-perks-col">
                <div className="facility-perk-card">
                  <ShieldCheck size={22} className="text-emerald" />
                  <div>
                    <strong>Private Treatment Suites</strong>
                    <p>Complete acoustic & visual privacy for manual and laser therapy.</p>
                  </div>
                </div>

                <div className="facility-perk-card">
                  <ThumbsUp size={22} className="text-emerald" />
                  <div>
                    <strong>Wheelchair Accessible</strong>
                    <p>Elevator, ramp access, and supportive staff assistance.</p>
                  </div>
                </div>

                <div className="facility-perk-card">
                  <Building2 size={22} className="text-emerald" />
                  <div>
                    <strong>Dedicated Kinetic Gym</strong>
                    <p>Functional trainers, Swiss balls, wobble boards, and gait track.</p>
                  </div>
                </div>

                <div className="facility-perk-card">
                  <HeartPulse size={22} className="text-emerald" />
                  <div>
                    <strong>Hospital Grade Sterilization</strong>
                    <p>Clean linen, UV sanitization, and certified disposable electrodes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 13. MASTER BOTTOM CONVERSION CTA ─── */}
      <section className="master-bottom-cta">
        <div className="home-container bottom-cta-inner scroll-reveal">
          <div className="bottom-cta-text">
            <span className="cta-kicker">TAKE THE FIRST STEP TODAY</span>
            <h2>Don't Settle for Living in Chronic Pain.</h2>
            <p>
              Whether it's a nagging back ache, morning knee stiffness, or a sports injury — early intervention prevents permanent joint degeneration. Schedule your comprehensive assessment today.
            </p>
          </div>

          <div className="bottom-cta-buttons">
            <Link to="/appointment" className="btn-clinical-primary btn-large">
              <Calendar size={20} />
              <span>Book Your In-Depth Assessment</span>
              <ArrowRight size={19} />
            </Link>

            <a
              href="tel:+919158347290"
              className="btn-clinical-white btn-large"
            >
              <Phone size={19} />
              <span>Call Helpline: +91 91583 47290</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
