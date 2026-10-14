import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  Users,
  Building2,
  CheckCircle2,
  Calendar,
  Phone,
  Activity,
  HeartPulse,
  Sparkles,
  ArrowRight,
  Clock,
  MapPin,
  Check,
  Zap,
  Stethoscope,
  BadgeCheck,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  XCircle,
  Bone,
  Accessibility,
} from "lucide-react";
import "./AboutPage.css";


const PATIENT_JOURNEY_STEPS = [
  {
    step: "01",
    title: "45-Minute In-Depth Diagnostic",
    desc: "Our senior physiotherapist listens to your full pain history, reviews your MRI/X-ray scans, and performs orthopedic tests to find the exact root cause — not just where it hurts.",
    tag: "Root-Cause Discovery",
  },
  {
    step: "02",
    title: "Clear Explanation in Simple Words",
    desc: "We explain your condition without confusing medical terms. You will clearly understand why your joint or nerve is inflamed and what needs to be corrected.",
    tag: "Transparent Diagnosis",
  },
  {
    step: "03",
    title: "Targeted 1-on-1 Treatment",
    desc: "A personalized combination of gentle manual therapy, computerized spinal decompression, and cold laser therapy. Pain relief begins safely from early sessions.",
    tag: "Hands-On & Technology",
  },
  {
    step: "04",
    title: "Strengthening & Prevention for Life",
    desc: "We teach you simple, custom home exercises and ergonomics so your muscles remain strong, your joints stay protected, and pain never returns.",
    tag: "Relapse-Free Recovery",
  },
];

const CONDITIONS_WE_TREAT = [
  {
    title: "Back Pain & Slip Disc (Sciatica)",
    symptoms: "Sharp shooting leg pain, disc bulge, numbness or tingling in feet.",
    benefit: "Computerized spinal decompression gently relieves nerve pressure without surgery.",
    link: "/services/back-pain",
    icon: Bone,
  },
  {
    title: "Knee Osteoarthritis & Joint Pain",
    symptoms: "Stiffness while walking, grinding sound, pain climbing stairs.",
    benefit: "Cartilage unloading protocols designed to delay or completely avoid knee replacement.",
    link: "/services/knee-pain",
    icon: Accessibility,
  },
  {
    title: "Neck Pain & Cervical Spondylosis",
    symptoms: "Stiff neck, headaches, shoulder blade knots, arm numbness from desk work.",
    benefit: "Posture realignment and gentle cervical joint glides restore smooth head rotation.",
    link: "/services/neck-pain",
    icon: Activity,
  },
  {
    title: "Frozen Shoulder & Rotator Cuff",
    symptoms: "Inability to lift arm overhead, sharp night pain, difficulty dressing.",
    benefit: "Specialized capsular release and German MaRhyThe® therapy restore full range of motion.",
    link: "/services",
    icon: HeartPulse,
  },
  {
    title: "Sports Injury & Ligament Sprain",
    symptoms: "ACL/MCL sprains, meniscus tear, runner's knee, ankle twist.",
    benefit: "Biomechanical agility retraining safely returns athletes to full sporting form.",
    link: "/services/sports-injury",
    icon: Zap,
  },
  {
    title: "Post-Surgical Rehabilitation",
    symptoms: "Stiffness and weakness after Knee Replacement, Spine Surgery, or fractures.",
    benefit: "Hospital-grade recovery protocols help you walk independently without limping.",
    link: "/services",
    icon: Building2,
  },
];

const CLINIC_FACILITIES = [
  {
    title: "Private Treatment Suites",
    desc: "Individual private cabins ensure dignity, comfort, and quiet during every manual therapy and laser session.",
  },
  {
    title: "Computerized Decompression Lab",
    desc: "European motorized traction units gently open disc spaces for lasting neck and lower back relief.",
  },
  {
    title: "Hospital-Grade Sanitization",
    desc: "UV sterilized cabins, single-use medical consumables, and daily sanitized linens ensure 100% hygiene.",
  },
  {
    title: "Wheelchair & Lift Access",
    desc: "Level ramps, spacious elevators, and dedicated assistance for elderly or severely pained patients.",
  },
  {
    title: "Insurance Documentation Desk",
    desc: "We provide comprehensive medical paperwork and billing receipts for cashless & reimbursement claims.",
  },
  {
    title: "Convenient Timings (8 AM – 8 PM)",
    desc: "Flexible early morning and evening appointments available 6 days a week to fit your busy routine.",
  },
];

const PATIENT_FAQS = [
  {
    q: "Will my physiotherapy treatment be painful?",
    a: "No. Our treatments are gentle and calibrated strictly to your comfort level. We use advanced non-invasive technologies like cold laser and gentle manual mobilization to deactivate pain, not create more discomfort.",
  },
  {
    q: "How many sessions will I need before I feel relief?",
    a: "Most of our patients experience noticeable pain reduction within 3 to 5 sessions. A typical complete healing course is 8 to 12 sessions, depending on whether your condition is acute or chronic.",
  },
  {
    q: "Do I need a doctor's prescription or referral to start?",
    a: "No referral is required. Our clinical team consists of Master's-degree qualified (MPT) physiotherapists who conduct an independent, thorough diagnostic assessment before starting any treatment.",
  },
  {
    q: "Can physiotherapy really help me avoid surgery?",
    a: "Yes. In our clinic, over 94% of patients diagnosed with disc bulges, sciatica, and knee osteoarthritis successfully avoided surgery through our computerized decompression and joint unloading protocols.",
  },
  {
    q: "Who will administer my treatment — a doctor or an assistant?",
    a: "Every assessment and hands-on therapy session is personally conducted 1-on-1 by senior MPT physiotherapists. We never hand patients over to untrained assistants or gym trainers.",
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <main className="about-page">
      {/* ─── 1. STANDARDIZED UNIFORM SUBPAGE HERO ─── */}
      <section className="subpage-hero-banner">
        <div className="subpage-hero-content">
          <div className="subpage-breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">About Us</span>
          </div>
          <span className="subpage-kicker">
            <ShieldCheck size={14} /> ABOUT REVITAORTHO CLINIC
          </span>
          <h1 className="subpage-title">
            Evidence-Based Healing.
            <br />
            <span className="text-highlight">Dedicated to Avoiding Surgery.</span>
          </h1>
          <p className="subpage-lead">
            Welcome to RevitaOrtho — Pune's premier non-surgical physical medicine center. We help patients overcome chronic back pain, joint stiffness, and sports injuries through personalized 1-on-1 clinical care.
          </p>
        </div>
      </section>


      {/* ─── 3. OUR MISSION & PATIENT PROMISE ─── */}
      <section className="about-mission-section section-padding">
        <div className="about-container">
          <div className="mission-grid">
            {/* Left: What We Do in Simple Words */}
            <div className="mission-text-col scroll-reveal">
              <span className="about-kicker">WHO WE ARE</span>
              <h2>We Treat the Root Cause of Your Pain, Not Just the Symptoms</h2>
              <p className="mission-lead">
                Living with persistent pain drains your energy, disrupts your sleep, and prevents you from spending active quality time with your family. Too often, patients are told that lifelong painkillers or invasive surgeries are their only options.
              </p>
              <p className="mission-body">
                At <strong>RevitaOrtho</strong>, we believe your body has a remarkable natural capacity to heal when joints are unloaded and rehabilitated correctly. We don’t just attach electrical pads and walk away; we identify the exact mechanical imbalance, nerve impingement, or joint restriction that is triggering your pain.
              </p>

              <div className="patient-commitments-list">
                <div className="commitment-item">
                  <CheckCircle2 size={18} className="text-emerald" />
                  <div>
                    <strong>100% Non-Surgical Focus:</strong> Our clinical protocol is specifically designed to prevent unnecessary joint and spine operations.
                  </div>
                </div>
                <div className="commitment-item">
                  <CheckCircle2 size={18} className="text-emerald" />
                  <div>
                    <strong>Dedicated 1-on-1 Doctor Care:</strong> You are treated directly by Master’s-qualified (MPT) clinical physiotherapists, never junior helpers.
                  </div>
                </div>
                <div className="commitment-item">
                  <CheckCircle2 size={18} className="text-emerald" />
                  <div>
                    <strong>Zero Confusing Jargon:</strong> We take time to show you your scans and explain your recovery roadmap in simple, clear language.
                  </div>
                </div>
                <div className="commitment-item">
                  <CheckCircle2 size={18} className="text-emerald" />
                  <div>
                    <strong>Long-Term Relapse Prevention:</strong> We teach you custom daily ergonomics and exercises so your pain stays away permanently.
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Difference Comparison Card */}
            <div className="mission-comparison-col scroll-reveal">
              <div className="comparison-card">
                <div className="comparison-card-header">
                  <span className="comp-tag">WHY PATIENTS CHOOSE US</span>
                  <h3>How RevitaOrtho Compares</h3>
                  <p>See why over 15,000+ patients in Pune trust our clinical team for their recovery.</p>
                </div>

                <div className="comparison-rows">
                  <div className="comp-row">
                    <div className="comp-col comp-typical">
                      <span className="comp-label">❌ Ordinary Clinic</span>
                      <p>Quick 10-minute electrical pad or heat pack, temporary pain masking.</p>
                    </div>
                    <div className="comp-col comp-revita">
                      <span className="comp-label">✅ RevitaOrtho Care</span>
                      <p>45-min root-cause assessment & European non-surgical modalities.</p>
                    </div>
                  </div>

                  <div className="comp-row">
                    <div className="comp-col comp-typical">
                      <span className="comp-label">❌ Ordinary Clinic</span>
                      <p>Handed over to junior assistants or gym trainers with no doctor supervision.</p>
                    </div>
                    <div className="comp-col comp-revita">
                      <span className="comp-label">✅ RevitaOrtho Care</span>
                      <p>Direct 1-on-1 treatment by certified senior MPT specialists.</p>
                    </div>
                  </div>

                  <div className="comp-row">
                    <div className="comp-col comp-typical">
                      <span className="comp-label">❌ Ordinary Clinic</span>
                      <p>Pain returns as soon as sessions end because causes weren't fixed.</p>
                    </div>
                    <div className="comp-col comp-revita">
                      <span className="comp-label">✅ RevitaOrtho Care</span>
                      <p>Full muscle re-education & custom home program to prevent relapse.</p>
                    </div>
                  </div>

                  <div className="comp-row">
                    <div className="comp-col comp-typical">
                      <span className="comp-label">❌ Ordinary Clinic</span>
                      <p>Long waiting times and crowded shared treatment rooms.</p>
                    </div>
                    <div className="comp-col comp-revita">
                      <span className="comp-label">✅ RevitaOrtho Care</span>
                      <p>Zero waiting time with private, hygienic individual treatment cabins.</p>
                    </div>
                  </div>
                </div>

                <div className="comparison-footer">
                  <Link to="/appointment" className="btn-comp-action">
                    <Calendar size={16} />
                    <span>Schedule Initial Evaluation</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. OUR 4-STEP PATIENT RECOVERY JOURNEY ─── */}
      <section className="about-journey-section section-padding">
        <div className="about-container">
          <div className="section-head-center scroll-reveal">
            <span className="about-kicker">WHAT TO EXPECT</span>
            <h2>Your 4-Step Journey to Pain-Free Living</h2>
            <p>
              We make your recovery straightforward and transparent. Here is what happens from your very first visit to your final milestone.
            </p>
          </div>

          <div className="journey-steps-grid">
            {PATIENT_JOURNEY_STEPS.map((item, idx) => (
              <div key={idx} className={`journey-step-card scroll-reveal delay-${idx + 1}`}>
                <div className="step-badge-row">
                  <span className="step-num">{item.step}</span>
                  <span className="step-tag">{item.tag}</span>
                </div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="journey-banner-note scroll-reveal">
            <div className="journey-note-content">
              <Sparkles size={20} className="text-azure" />
              <div>
                <strong>Zero Waiting Time Policy:</strong> Every appointment is pre-scheduled so your session begins the minute you arrive.
              </div>
            </div>
            <Link to="/appointment" className="btn-journey-cta">
              <span>Book Your Slot &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 5. CONDITIONS WE SPECIALIZE IN ─── */}
      <section className="about-conditions-section section-padding">
        <div className="about-container">
          <div className="section-head-center scroll-reveal">
            <span className="about-kicker">OUR SPECIALTIES</span>
            <h2>Conditions We Help You Overcome</h2>
            <p>
              Whether you are suffering from a sharp sciatica nerve pinch, chronic knee arthritis, or a sports injury, our specialized protocols are tailored for your exact joint and muscle needs.
            </p>
          </div>

          <div className="conditions-grid">
            {CONDITIONS_WE_TREAT.map((cond, idx) => {
              const IconComp = cond.icon;
              return (
                <div key={idx} className={`condition-card scroll-reveal delay-${(idx % 3) + 1}`}>
                  <div className="condition-card-header">
                    <div className="condition-icon-wrap">
                      <IconComp size={22} className="text-azure" />
                    </div>
                    <h3>{cond.title}</h3>
                  </div>

                  <div className="condition-body">
                    <div className="symptom-box">
                      <span className="symptom-label">Common Symptoms:</span>
                      <p>{cond.symptoms}</p>
                    </div>

                    <div className="benefit-box">
                      <span className="benefit-label">How We Treat It:</span>
                      <p>{cond.benefit}</p>
                    </div>
                  </div>

                  <div className="condition-footer">
                    <Link to="/appointment" className="btn-card-book">
                      <Calendar size={14} />
                      <span>Book Evaluation</span>
                    </Link>
                    <Link to={cond.link} className="btn-card-details">
                      <span>Learn More &rarr;</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 6. CLINICAL LEADERSHIP & DOCTOR'S NOTE ─── */}
      <section className="about-leadership-section section-padding">
        <div className="about-container">
          <div className="leadership-spotlight-card scroll-reveal">
            <div className="leadership-header-row">
              <div className="leadership-avatar-frame">
                <Stethoscope size={32} className="text-azure" />
              </div>
              <div className="leadership-title-meta">
                <span className="leadership-kicker">CHIEF CLINICAL CONSULTANT</span>
                <h2>Dr. S. Gupta, PT</h2>
                <p className="leadership-creds">
                  BPT, MPT (Musculoskeletal Disorders) • 14+ Years Clinical Leadership
                </p>
              </div>
              <div className="leadership-rating-badge">
                <Award size={18} className="text-azure" />
                <div>
                  <strong>15,000+ Cases</strong>
                  <span>94.2% Surgery Avoidance</span>
                </div>
              </div>
            </div>

            <div className="leadership-quote-box">
              <blockquote>
                "Every patient who walks into our clinic is carrying a personal burden — fear of surgery, sleepless nights, or the frustration of not being able to walk or work freely. Our sacred commitment is to listen carefully, diagnose accurately, and guide you with transparent, compassionate medical care until you are 100% back to active living."
              </blockquote>
            </div>

            <div className="leadership-credentials-pills">
              <span className="cred-pill">
                <CheckCircle2 size={14} className="text-emerald" /> Certified Spinal Decompression Specialist
              </span>
              <span className="cred-pill">
                <CheckCircle2 size={14} className="text-emerald" /> Master of Physiotherapy (Orthopedic & Musculoskeletal)
              </span>
              <span className="cred-pill">
                <CheckCircle2 size={14} className="text-emerald" /> Senior Consultant – Multi-Specialty Hospital Network
              </span>
              <span className="cred-pill">
                <CheckCircle2 size={14} className="text-emerald" /> Certified Orthopedic Manual Therapy (COMT)
              </span>
            </div>

            <div className="leadership-action-strip">
              <Link to="/team" className="btn-meet-team">
                <Users size={16} />
                <span>Meet Our Full Panel of Specialized Clinicians &rarr;</span>
              </Link>
              <a
                href="https://wa.me/919145875248?text=Hello%20Dr.%20Gupta,%20I%20would%20like%20to%20consult%20regarding%20an%20evaluation."
                target="_blank"
                rel="noreferrer"
                className="btn-chat-doctor"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Doctor Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. CLINIC INFRASTRUCTURE & AMENITIES ─── */}
      <section className="about-facilities-section section-padding">
        <div className="about-container">
          <div className="section-head-center scroll-reveal">
            <span className="about-kicker">PATIENT COMFORT & SAFETY</span>
            <h2>Modern Clinic Infrastructure in Baner, Pune</h2>
            <p>
              Designed to clinical hospital standards with dedicated amenities for maximum privacy, comfort, and accessibility.
            </p>
          </div>

          <div className="facilities-grid">
            {CLINIC_FACILITIES.map((fac, idx) => (
              <div key={idx} className={`facility-item-card scroll-reveal delay-${(idx % 3) + 1}`}>
                <div className="fac-bullet">
                  <CheckCircle2 size={18} className="text-azure" />
                </div>
                <div>
                  <h4>{fac.title}</h4>
                  <p>{fac.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. PATIENT FAQS ─── */}
      <section className="about-faqs-section section-padding">
        <div className="about-container">
          <div className="section-head-center scroll-reveal">
            <span className="about-kicker">HAVE QUESTIONS?</span>
            <h2>Frequently Asked Questions by Patients</h2>
            <p>
              Everything you need to know about starting your physiotherapy treatment at RevitaOrtho.
            </p>
          </div>

          <div className="faqs-accordion-container scroll-reveal">
            {PATIENT_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">
                      <HelpCircle size={18} className="text-azure" />
                      {faq.q}
                    </span>
                    <ChevronDown size={18} className={`faq-chevron ${isOpen ? "rotate" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 9. BOTTOM ACTION CTA ─── */}
      <section className="about-cta-section">
        <div className="about-container about-cta-inner scroll-reveal">
          <span className="about-kicker text-ice">TAKE THE FIRST STEP</span>
          <h2>Ready to Live Life Without Joint & Spine Pain?</h2>
          <p>
            Schedule your comprehensive 45-minute root-cause evaluation today. Experience the difference of evidence-based non-surgical physical medicine.
          </p>
          <div className="about-cta-btn-group">
            <Link to="/appointment" className="btn-about-white">
              <Calendar size={18} />
              <span>Book Initial Assessment</span>
            </Link>
            <a href="tel:+919145875248" className="btn-about-outline-white">
              <Phone size={18} />
              <span>Call Helpline: +91 91458 75248</span>
            </a>
            <a
              href="https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20would%20like%20to%20book%20an%20evaluation."
              target="_blank"
              rel="noreferrer"
              className="btn-about-whatsapp"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
