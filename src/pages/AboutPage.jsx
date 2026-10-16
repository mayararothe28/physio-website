import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  HeartPulse,
} from "lucide-react";
import "./AboutPage.css";

const PROCESS_STEPS = [
  {
    id: "awareness-goal-setting",
    num: "1",
    title: "Awareness & Goal Setting",
    desc: "Being educated about your condition/injury is the most important factor towards your recovery. After a thorough assessment, our experts help you understand body mechanics, your condition/injury, types of treatment, exercises and help you set specific goals. This personalized therapy guides your treatment to expedite recovery and more successful results.",
  },
  {
    id: "recovery",
    num: "2",
    title: "Recovery",
    desc: "We recognize that you are in pain and/or unable to move the way you want to. Experience relief with our experts through drug-free modern therapies like Mulligan, McKenzie, Kinesio-taping, Cupping, and more. Our physios can offer the best of methods to reduce pain, improve mobility and functionality.",
  },
  {
    id: "maintenance",
    num: "3",
    title: "Maintenance",
    desc: "Pain relief is just the start but the key is to get back to your previous level of function. We tailor exercises to restore mobility and full function, best suited to your lifestyle for long term results. Home based rehab programs also involve caregivers for enhanced support.",
  },
  {
    id: "prevention-lifestyle",
    num: "4",
    title: "Prevention & Lifestyle",
    desc: "At RevitaOrtho, we believe that our true success lies in the fact that our client can maintain the physical recovery on his/her own even after the completion of therapy. Before leaving, we equip you with a home exercise plan with a clear list of “Dos and Don'ts” and suggestions to improve your lifestyle or the steps to maximize benefit after a specific surgery.",
  },
];

export default function AboutPage() {
  const [activeStep, setActiveStep] = useState(PROCESS_STEPS[0].id);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger threshold: 45% from viewport top
      const midPoint = window.innerHeight * 0.45;

      let currentIdx = 0;
      for (let i = 0; i < PROCESS_STEPS.length; i++) {
        const el = document.getElementById(PROCESS_STEPS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= midPoint) {
            currentIdx = i;
          }
        }
      }

      setActiveStep(PROCESS_STEPS[currentIdx].id);
      setActiveIndex(currentIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStep = (id, index) => {
    setActiveStep(id);
    setActiveIndex(index);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 72;
      const btnGroupHeight = 75;
      const yOffset = -(navbarHeight + btnGroupHeight + 20);
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
            Specialized Physical Therapy &amp; Joint Rehabilitation
          </h1>
          <p className="wor-subpage-subtitle">
            Dedicated 1-on-1 hands-on care, advanced European technology, and evidence-based non-surgical recovery protocols in Baner, Pune.
          </p>
        </div>
      </section>

      {/* ─── 2. OUR STORY & CLINICAL PHILOSOPHY ─── */}
      <section className="wor-about-story-section">
        <div className="wor-container">
          <div className="wor-about-story-grid">
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
                    <p>Every session led personally by hospital-certified Master&apos;s degree (MPT) clinicians.</p>
                  </div>
                </div>

                <div className="wor-pillar-item">
                  <CheckCircle2 size={18} className="wor-pillar-icon" />
                  <div>
                    <strong>100% Non-Surgical Focus</strong>
                    <p>Advanced European decompression &amp; Class-IV laser protocols engineered to prevent surgery.</p>
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
            <h2 className="wor-section-title">Mission, Vision &amp; Core Values</h2>
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

      {/* ─── 5. OUR PROCESS (EXACT RELIVA TIMELINE & BUTTON GROUP FORMAT) ─── */}
      <section className="reliva-process-section" id="process-sec">
        <div className="wor-container">
          <div className="reliva-process-header">
            <h2 className="reliva-process-heading">Our Process</h2>
            <p className="reliva-process-subheading">4 Step Standardized RevitaOrtho Process</p>
          </div>

          {/* Sticky ReLiva Button Group (Updates on scroll, click to jump) */}
          <div className="reliva-btn-group-wrapper">
            <div className="reliva-btn-group">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => scrollToStep(step.id, idx)}
                    className={`reliva-btn-item ${isActive ? "active" : ""}`}
                    aria-label={`Jump to ${step.title}`}
                  >
                    <span className="reliva-btn-text">{step.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ReLiva Unlimited Vertical Timeline */}
          <div className="reliva-timeline-track">
            {PROCESS_STEPS.map((step, index) => {
              const isCurrent = activeIndex === index;
              const isPassed = activeIndex >= index;
              const isLast = index === PROCESS_STEPS.length - 1;

              return (
                <div
                  key={step.id}
                  id={step.id}
                  className={`reliva-timeline-item ${isCurrent ? "is-current" : ""} ${isPassed ? "is-passed" : ""}`}
                >
                  {/* Left Column: Number Circle & Vertical Connecting Line */}
                  <div className="reliva-timeline-icon-col">
                    <div className="reliva-icon-circle">
                      <span className="reliva-step-num">{step.num}</span>
                    </div>
                    {!isLast && (
                      <div className="reliva-icon-line">
                        <div
                          className="reliva-icon-line-mask"
                          style={{ height: activeIndex > index ? "100%" : isCurrent ? "50%" : "0%" }}
                        ></div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Triangle Pointer & Speech Bubble Card */}
                  <div className="reliva-timeline-content-col">
                    <div className="reliva-pointer-triangle"></div>
                    <div className="reliva-timeline-card">
                      <h3 className="reliva-card-title">{step.title}</h3>
                      <p className="reliva-card-desc">{step.desc}</p>
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
