import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  HeartPulse,
  Compass,
  Zap,
  Activity,
} from "lucide-react";
import "./AboutPage.css";

const PROCESS_STEPS = [
  {
    id: "awareness-goal-setting",
    num: "1",
    numLabel: "Step 01",
    title: "Awareness & Goal Setting",
    shortTitle: "Awareness & Goal Setting",
    icon: Compass,
    tag: "ASSESSMENT & DIAGNOSTIC CLARITY",
    desc: "Being educated about your condition/injury is the most important factor towards your recovery. After a thorough assessment, our experts help you understand body mechanics, your condition/injury, types of treatment, exercises and help you set specific goals. This personalized therapy guides your treatment to expedite recovery and more successful results.",
    highlights: [
      "In-depth 45-Min Biomechanical Assessment",
      "Body Mechanics & Anatomy Education",
      "Condition & Injury Root-Cause Analysis",
      "Goal Setting & Personalized Milestones",
    ],
  },
  {
    id: "recovery",
    num: "2",
    numLabel: "Step 02",
    title: "Recovery",
    shortTitle: "Recovery",
    icon: Zap,
    tag: "TARGETED DRUG-FREE PAIN RELIEF",
    desc: "We recognize that you are in pain and/or unable to move the way you want to. Experience relief with our experts through drug-free modern therapies like Mulligan, McKenzie, Kinesio-taping, Cupping, and more. Our physios can offer the best of methods to reduce pain, improve mobility and functionality.",
    highlights: [
      "Mulligan Joint Mobilization",
      "McKenzie Spinal Protocol",
      "Kinesio-Taping & Myofascial Release",
      "Advanced Cupping & Decompression",
    ],
  },
  {
    id: "maintenance",
    num: "3",
    numLabel: "Step 03",
    title: "Maintenance",
    shortTitle: "Maintenance",
    icon: Activity,
    tag: "MOBILITY RESTORATION & FUNCTION",
    desc: "Pain relief is just the start but the key is to get back to your previous level of function. We tailor exercises to restore mobility and full function, best suited to your lifestyle for long term results. Home based rehab programs also involve caregivers for enhanced support.",
    highlights: [
      "Progressive Functional Retraining",
      "Restoration of Full Range of Motion",
      "Lifestyle-Specific Exercise Customization",
      "Home-Based Caregiver Integration",
    ],
  },
  {
    id: "prevention-lifestyle",
    num: "4",
    numLabel: "Step 04",
    title: "Prevention & Lifestyle",
    shortTitle: "Prevention & Lifestyle",
    icon: ShieldCheck,
    tag: "PERMANENT INDEPENDENCE & LONG-TERM CARE",
    desc: "At RevitaOrtho, we believe that our true success lies in the fact that our client can maintain the physical recovery on his/her own even after the completion of therapy. Before leaving, we equip you with a home exercise plan with a clear list of “Dos and Don'ts” and suggestions to improve your lifestyle or the steps to maximize benefit after a specific surgery.",
    highlights: [
      "Clear “Dos & Don’ts” Lifestyle Guide",
      "Independent Home Exercise Plan (HEP)",
      "Ergonomic & Postural Preservation",
      "Post-Surgical Long-Term Recovery Roadmap",
    ],
  },
];

export default function AboutPage() {
  const [activeStep, setActiveStep] = useState(PROCESS_STEPS[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (let i = PROCESS_STEPS.length - 1; i >= 0; i--) {
        const step = PROCESS_STEPS[i];
        const el = document.getElementById(step.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveStep(step.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStep = (id) => {
    setActiveStep(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -150;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <main className="wor-about-page">
      {/* ─── 1. STANDARDIZED CLEAN SUBPAGE HERO ─── */}
      <section className="wor-subpage-hero">
        <div className="wor-container">
          <div className="wor-section-tag-line center-tag">
            <span className="wor-divider-line"></span>
            <span className="wor-section-kicker">ABOUT REVITAORTHO</span>
            <span className="wor-divider-line"></span>
          </div>

          <h1 className="wor-subpage-title">
            Specialized Physical Therapy & Joint Rehabilitation
          </h1>
          <p className="wor-subpage-subtitle">
            Dedicated 1-on-1 hands-on care, advanced European technology, and evidence-based non-surgical recovery protocols in Baner, Pune.
          </p>
        </div>
      </section>

      {/* ─── 2. OUR STORY & CLINICAL PHILOSOPHY (Split Layout matching Home) ─── */}
      <section className="wor-about-story-section">
        <div className="wor-container">
          <div className="wor-about-story-grid">
            {/* Left: Clean Clinic Treatment Suite Image (Same as Home Page) */}
            <div className="wor-about-img-col">
              <div className="wor-about-img-card">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"
                  alt="RevitaOrtho Clinic Treatment Suite"
                  className="wor-about-page-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Narrative Copy & Clinical Commitments */}
            <div className="wor-about-text-col">
              <div className="wor-section-tag-line">
                <span className="wor-divider-line"></span>
                <span className="wor-section-kicker">WHO WE ARE</span>
              </div>

              <h2 className="wor-about-heading">
                We Treat the Root Cause of Pain, Not Just Temporary Symptoms
              </h2>

              <p className="wor-about-lead-p">
                Founded by senior musculoskeletal physiotherapists, <strong>RevitaOrtho</strong> stands as a premier physical therapy and musculoskeletal rehabilitation center in Baner, Pune, offering clinical excellence that meets international orthopedic standards.
              </p>

              <p className="wor-about-body-p">
                Unlike ordinary centers where patients are often left unattended on electrical heat pads, our clinic delivers dedicated 1-on-1 care. Every diagnosis begins with a comprehensive 45-minute biomechanical evaluation, followed by personalized manual therapy, computerized spinal decompression, and targeted core stabilization.
              </p>

              <div className="wor-about-pillars-grid">
                <div className="wor-pillar-item">
                  <CheckCircle2 size={18} className="wor-pillar-icon" />
                  <div>
                    <strong>Dedicated 1-on-1 Doctor Care</strong>
                    <p>Every session led personally by hospital-certified Master's degree (MPT) clinicians.</p>
                  </div>
                </div>

                <div className="wor-pillar-item">
                  <CheckCircle2 size={18} className="wor-pillar-icon" />
                  <div>
                    <strong>100% Non-Surgical Focus</strong>
                    <p>Advanced European decompression & Class-IV laser protocols engineered to prevent surgery.</p>
                  </div>
                </div>

                <div className="wor-pillar-item">
                  <CheckCircle2 size={18} className="wor-pillar-icon" />
                  <div>
                    <strong>Transparent Treatment Roadmap</strong>
                    <p>We explain your MRI and X-ray findings and recovery milestones in simple, everyday language.</p>
                  </div>
                </div>

                <div className="wor-pillar-item">
                  <CheckCircle2 size={18} className="wor-pillar-icon" />
                  <div>
                    <strong>Permanent Relapse Prevention</strong>
                    <p>Custom home exercise prescriptions to keep your joints stable and permanently pain-free.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ─── 4. OUR MISSION, VISION & CORE VALUES ─── */}
      <section className="wor-values-section">
        <div className="wor-container">
          <div className="wor-section-header-center">
            <div className="wor-section-tag-line center-tag">
              <span className="wor-divider-line"></span>
              <span className="wor-section-kicker">OUR GUIDING PRINCIPLES</span>
              <span className="wor-divider-line"></span>
            </div>
            <h2 className="wor-section-title">Mission, Vision & Core Values</h2>
            <p className="wor-section-subtitle">
              The ethical and clinical standards that drive every evaluation, treatment protocol, and patient recovery roadmap at RevitaOrtho.
            </p>
          </div>

          <div className="wor-values-grid">
            <div className="wor-value-card">
              <div className="wor-value-icon-box">
                <HeartPulse size={26} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower individuals suffering from joint pain, slip discs, and sports injuries to regain active, painless mobility through scientifically proven, compassionate physical medicine.
              </p>
            </div>

            <div className="wor-value-card">
              <div className="wor-value-icon-box">
                <ShieldCheck size={26} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted non-surgical orthopedic rehabilitation center in Pune, known for clinical precision, surgery avoidance, and lasting patient independence.
              </p>
            </div>

            <div className="wor-value-card">
              <div className="wor-value-icon-box">
                <Award size={26} />
              </div>
              <h3>Our Core Values</h3>
              <p>
                Honest diagnosis, complete financial transparency, zero unnecessary session packages, and treating every patient with the dignity and empathy we would offer our own family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. OUR PROCESS (4 STEP STANDARDIZED PROCESS WITH SCROLLSPY) ─── */}
      <section className="wor-process-section" id="revitaortho-process">
        <div className="wor-container">
          <div className="wor-section-header-center">
            <div className="wor-section-tag-line center-tag">
              <span className="wor-divider-line"></span>
              <span className="wor-section-kicker">OUR PROCESS</span>
              <span className="wor-divider-line"></span>
            </div>
            <h2 className="wor-section-title">4 Step Standardized RevitaOrtho Process</h2>
            <p className="wor-section-subtitle">
              A structured, evidence-based clinical pathway designed to educate, relieve pain, restore functional movement, and ensure lifelong joint health.
            </p>
          </div>

          {/* Sticky Interactive Navigation Tabs (Updates on scroll down, click to jump) */}
          <div className="wor-process-tabs-wrapper">
            <div className="wor-process-tabs-sticky">
              {PROCESS_STEPS.map((step) => {
                const isActive = activeStep === step.id;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => scrollToStep(step.id)}
                    className={`wor-process-tab-btn ${isActive ? "active" : ""}`}
                    aria-label={`Jump to ${step.title}`}
                  >
                    <span className="wor-tab-num">{step.num}</span>
                    <span className="wor-tab-text">{step.shortTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Step Cards with Scroll Targets */}
          <div className="wor-process-steps-list">
            {PROCESS_STEPS.map((step) => {
              const isActive = activeStep === step.id;
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  id={step.id}
                  className={`wor-process-detail-card ${isActive ? "is-active" : ""}`}
                >
                  <div className="wor-process-card-top-row">
                    <div className="wor-process-pill-badge">
                      <span className="wor-process-step-num-pill">{step.numLabel}</span>
                      <span className="wor-process-category-kicker">{step.tag}</span>
                    </div>
                    <span className="wor-process-watermark">{step.num}</span>
                  </div>

                  <div className="wor-process-card-main">
                    <div className="wor-process-icon-box">
                      <IconComponent size={26} />
                    </div>

                    <div className="wor-process-content">
                      <h3 className="wor-process-step-heading">{step.title}</h3>
                      <p className="wor-process-step-paragraph">{step.desc}</p>

                      <div className="wor-process-highlights-chips">
                        {step.highlights.map((item, idx) => (
                          <div key={idx} className="wor-process-chip">
                            <CheckCircle2 size={15} className="wor-chip-check" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}

