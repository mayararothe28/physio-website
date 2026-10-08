import React from 'react';
import { 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Cpu, 
  Clock, 
  Smile, 
  Star, 
  Activity, 
  Zap, 
  ShieldPlus, 
  Brain, 
  Flame, 
  HeartPulse, 
  Sparkles, 
  Compass,
  Phone,
  MessageCircle,
  ChevronRight,
  TrendingUp,
  MapPin
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollReveal from '../components/ScrollReveal';
import HowItWorksSection from '../components/HowItWorksSection';
import { CLINIC_INFO, SERVICES_DATA, TREATMENTS_DATA, DOCTORS_DATA, TESTIMONIALS_DATA, WHY_CHOOSE_US_POINTS } from '../data/physioData';

const serviceIconMap = {
  Activity,
  Zap,
  ShieldPlus,
  Brain,
  Flame,
  HeartPulse,
  Sparkles,
  Compass
};

const whyIconMap = {
  Award,
  Cpu,
  CheckCircle2,
  Clock,
  Smile
};

export default function HomePage({ setActivePage, onSelectDoctor, onSelectService }) {
  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookService = (serviceTitle) => {
    onSelectService(serviceTitle);
    setActivePage('appointment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page-container page-transition">
      {/* 1. HERO SECTION (Screenshots 1 & 2) */}
      <section className="hero-section">
        <div className="hero-bg-blobs">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
        </div>

        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot" />
              <span>India's Leading Pain & Mobility Clinic</span>
            </div>

            <h1 className="hero-title">
              Move Better. <br />
              <span className="text-gradient">Live Healthier.</span>
            </h1>

            <p className="hero-subtitle">
              Personalized physiotherapy care for pain relief, rehabilitation and better mobility. 
              Get back to your active lifestyle without dependence on painkillers or surgery.
            </p>

            <div className="hero-buttons">
              <button 
                onClick={() => navigateTo('appointment')}
                className="btn-primary hero-btn-main"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
                <ArrowRight size={17} className="btn-icon-arrow" />
              </button>

              <button 
                onClick={() => navigateTo('services')}
                className="btn-secondary hero-btn-sub"
              >
                <span>Explore Services</span>
                <ChevronRight size={17} />
              </button>
            </div>

            <div className="hero-trust-indicators">
              <div className="hero-trust-item">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span>Zero Surgery Focus</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span>1-on-1 Certified Therapists</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span>In-Clinic & Home Visits</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-wrapper">
            <div className="hero-img-card">
              <img 
                src="/hero_physio.jpg" 
                alt="Physiotherapy treatment session" 
                className="hero-main-photo" 
              />
              <div className="hero-overlay-gradient" />
            </div>

            {/* Floating Trust Card 1 */}
            <div className="hero-floating-card card-top-right float-badge glass-panel">
              <div className="floating-card-icon bg-emerald-100 text-emerald-600">
                <TrendingUp size={22} />
              </div>
              <div className="floating-card-text">
                <span className="floating-card-val">98.4%</span>
                <span className="floating-card-lbl">Pain Relief Rate</span>
              </div>
            </div>

            {/* Floating Trust Card 2 */}
            <div className="hero-floating-card card-bottom-left float-badge-delayed glass-panel">
              <div className="floating-card-icon bg-teal-100 text-teal-600">
                <ShieldCheck size={22} />
              </div>
              <div className="floating-card-text">
                <span className="floating-card-val">Gold Standard</span>
                <span className="floating-card-lbl">Evidence-Based Rehab</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / STATS SECTION (Screenshot 3) */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-card-container glass-panel">
            <div className="stats-grid">
              {CLINIC_INFO.stats.map((stat, idx) => (
                <ScrollReveal key={stat.id} delay={idx * 100} className="stat-box">
                  <div className="stat-number-wrap">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <h4 className="stat-label">{stat.label}</h4>
                  <p className="stat-desc">{stat.desc}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION (Screenshot 3) */}
      <section className="services-section" id="services-preview">
        <div className="container">
          <div className="text-center section-head-wrap">
            <span className="section-badge">OUR EXPERTISE</span>
            <h2 className="section-title">Specialized Physiotherapy Services</h2>
            <p className="section-subtitle">
              Comprehensive rehabilitation tailored to your specific biomechanics, condition, and recovery goals.
            </p>
          </div>

          <div className="services-cards-grid">
            {SERVICES_DATA.map((srv, idx) => {
              const IconComp = serviceIconMap[srv.icon] || Activity;
              return (
                <ScrollReveal key={srv.id} delay={idx * 70} className="service-card-wrapper">
                  <div className="service-card interactive-card">
                    <div className="service-card-top">
                      <div className="service-icon-box">
                        <IconComp size={24} />
                      </div>
                      <span className="service-category-tag">{srv.category}</span>
                    </div>

                    <h3 className="service-card-title">{srv.title}</h3>
                    <p className="service-card-desc">{srv.shortDesc}</p>

                    <div className="service-symptoms-chips">
                      {srv.symptoms.slice(0, 2).map((sym, sIdx) => (
                        <span key={sIdx} className="sym-chip">{sym}</span>
                      ))}
                    </div>

                    <div className="service-card-footer">
                      <div className="service-meta-info">
                        <span className="sm-label"><Clock size={12} /> {srv.duration}</span>
                        <span className="sm-success">{srv.recoveryRate}</span>
                      </div>
                      <button 
                        onClick={() => handleBookService(srv.title)}
                        className="service-book-action"
                      >
                        <span>Book Session</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => navigateTo('services')}
              className="btn-secondary"
            >
              <span>Explore All 8 Specialized Services</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Screenshot 3) */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-layout">
            <div className="why-choose-left">
              <span className="section-badge">WHY CHOOSE US</span>
              <h2 className="section-title">Why Thousands of Patients Trust RevitaPhysio</h2>
              <p className="section-subtitle-left">
                We believe recovery shouldn't be painful or repetitive. Our clinical approach pairs 
                hands-on manual manipulation with cutting-edge medical technology.
              </p>

              <div className="why-features-list">
                {WHY_CHOOSE_US_POINTS.map((pt, idx) => {
                  const IconComp = whyIconMap[pt.icon] || CheckCircle2;
                  return (
                    <ScrollReveal key={pt.id} delay={idx * 90} className="why-feature-row">
                      <div className="why-icon-box">
                        <IconComp size={22} />
                      </div>
                      <div className="why-text-box">
                        <h4 className="why-item-title">{pt.title}</h4>
                        <p className="why-item-desc">{pt.desc}</p>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>

              <div className="mt-8">
                <button 
                  onClick={() => navigateTo('about')}
                  className="btn-primary"
                >
                  <span>Learn More About Our Philosophy</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="why-choose-right">
              <div className="why-photo-composition">
                <div className="why-main-image-wrap">
                  <img 
                    src="/therapy_session.jpg" 
                    alt="Manual physiotherapy session" 
                    className="why-main-photo" 
                  />
                </div>
                <div className="why-floating-badge glass-panel">
                  <Star size={24} className="text-amber-500 fill-amber-500" />
                  <div>
                    <h5 className="font-bold text-lg">Top Rated Clinic</h5>
                    <p className="text-xs text-slate-500">Over 2,400+ 5-Star Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS / SCROLL ANIMATION (Screenshot 4) */}
      <HowItWorksSection onBookClick={() => navigateTo('appointment')} />

      {/* 6. FEATURED TREATMENTS (Screenshot 4) */}
      <section className="treatments-section">
        <div className="container">
          <div className="text-center section-head-wrap">
            <span className="section-badge">TARGETED RELIEF</span>
            <h2 className="section-title">Featured Treatment Programs</h2>
            <p className="section-subtitle">
              Scientifically engineered clinical programs designed to diagnose and resolve root-cause pain.
            </p>
          </div>

          <div className="treatments-grid">
            {TREATMENTS_DATA.slice(0, 4).map((tr, idx) => (
              <ScrollReveal key={tr.id} delay={idx * 100} className="treatment-card-wrap">
                <div className="treatment-card interactive-card">
                  <div className="treatment-card-header">
                    <span className="treatment-badge">{tr.badge}</span>
                    <span className="treatment-cat">{tr.category}</span>
                  </div>
                  <h3 className="treatment-title">{tr.title}</h3>
                  <p className="treatment-overview">{tr.overview}</p>

                  <div className="treatment-key-symptoms">
                    <span className="tks-label">Common Symptoms:</span>
                    <ul className="tks-list">
                      {tr.symptoms.slice(0, 2).map((s, sIdx) => (
                        <li key={sIdx}><CheckCircle2 size={13} className="text-teal-500" /> {s}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="treatment-timeline-row">
                    <span className="tt-label">Expected Relief:</span>
                    <span className="tt-val">{tr.expectedTimeline}</span>
                  </div>

                  <button 
                    onClick={() => navigateTo('treatments')}
                    className="treatment-learn-btn"
                  >
                    <span>Learn Complete Protocol</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <button 
              onClick={() => navigateTo('treatments')}
              className="btn-secondary"
            >
              <span>Explore All Treatment Protocols</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. PHYSIOTHERAPIST TEAM (Screenshot 4) */}
      <section className="doctors-section">
        <div className="container">
          <div className="text-center section-head-wrap">
            <span className="section-badge">EXPERIENCED SPECIALISTS</span>
            <h2 className="section-title">Meet Our Lead Physiotherapists</h2>
            <p className="section-subtitle">
              Highly credentialed clinical therapists with master's degrees, international fellowships, and decades of healing experience.
            </p>
          </div>

          <div className="doctors-grid">
            {DOCTORS_DATA.map((doc, idx) => (
              <ScrollReveal key={doc.id} delay={idx * 100} className="doctor-card-wrap">
                <div className="doctor-card interactive-card">
                  <div className="doctor-img-wrap">
                    <img src={doc.image} alt={doc.name} className="doctor-img" />
                    <span className="doctor-exp-pill">{doc.experience}</span>
                  </div>

                  <div className="doctor-card-body">
                    <div className="doctor-rating-row">
                      <Star size={14} className="text-amber-500 fill-amber-500" />
                      <span className="doc-rate-num">{doc.rating}</span>
                      <span className="doc-rate-count">({doc.reviewCount}+ patients)</span>
                    </div>

                    <h3 className="doctor-name">{doc.name}</h3>
                    <p className="doctor-qual">{doc.qualification}</p>
                    <p className="doctor-spec-tag">{doc.specialization}</p>

                    <div className="doctor-card-buttons">
                      <button 
                        onClick={() => onSelectDoctor(doc)}
                        className="btn-view-profile"
                      >
                        View Profile
                      </button>
                      <button 
                        onClick={() => {
                          onSelectDoctor(doc);
                          setActivePage('appointment');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="btn-book-doc"
                      >
                        <Calendar size={14} />
                        <span>Book</span>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <button 
              onClick={() => navigateTo('team')}
              className="btn-secondary"
            >
              <span>View Full Clinical Team & Certifications</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (Screenshot 4) */}
      <section className="testimonials-section">
        <div className="container">
          <div className="text-center section-head-wrap">
            <span className="section-badge">PATIENT REVIEWS</span>
            <h2 className="section-title">Real Patients. Real Recoveries.</h2>
            <p className="section-subtitle">
              Hear directly from patients who overcame debilitating disc herniation, knee pain, and sports tears.
            </p>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS_DATA.slice(0, 3).map((item, idx) => (
              <ScrollReveal key={item.id} delay={idx * 120} className="test-card-wrap">
                <div className="testimonial-card interactive-card glass-panel">
                  <div className="test-stars-row">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} size={16} className="text-amber-500 fill-amber-500" />
                    ))}
                    <span className="test-verified-badge">
                      <CheckCircle2 size={13} className="text-emerald-500" /> Verified Patient
                    </span>
                  </div>

                  <p className="test-review-quote">"{item.review}"</p>

                  <div className="test-recovery-tag">
                    <TrendingUp size={14} className="text-teal-600" />
                    <span>{item.recoveryTime}</span>
                  </div>

                  <div className="test-author-row">
                    <div className="test-author-avatar">
                      {item.name.charAt(0)}
                    </div>
                    <div className="test-author-info">
                      <h4 className="test-author-name">{item.name}</h4>
                      <p className="test-author-cond">{item.condition} • {item.location}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <button 
              onClick={() => navigateTo('testimonials')}
              className="btn-secondary"
            >
              <span>Read All Patient Success Stories</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA (Screenshot 4) */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-card glass-panel">
            <div className="cta-left-content">
              <span className="cta-pill-tag">TAKE THE FIRST STEP</span>
              <h2 className="cta-heading">Ready to Start Your Recovery?</h2>
              <p className="cta-subtext">
                Don't let back pain, joint stiffness, or sports injuries limit your daily freedom. 
                Schedule your comprehensive physical evaluation today.
              </p>

              <div className="cta-actions-group">
                <button 
                  onClick={() => navigateTo('appointment')}
                  className="btn-primary cta-btn-highlight"
                >
                  <Calendar size={18} />
                  <span>Book Your Appointment</span>
                  <ArrowRight size={18} className="btn-icon-arrow" />
                </button>

                <a 
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="btn-secondary cta-call-action"
                >
                  <Phone size={17} />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="cta-right-perks">
              <div className="cta-perk-card">
                <div className="perk-bullet"><CheckCircle2 size={18} className="text-teal-500" /></div>
                <div>
                  <strong>No Waiting Queues</strong>
                  <p>Guaranteed on-time consultation slots.</p>
                </div>
              </div>
              <div className="cta-perk-card">
                <div className="perk-bullet"><CheckCircle2 size={18} className="text-teal-500" /></div>
                <div>
                  <strong>Personalized Therapy Plan</strong>
                  <p>Documented exercises & progress tracking.</p>
                </div>
              </div>
              <div className="cta-perk-card">
                <div className="perk-bullet"><CheckCircle2 size={18} className="text-teal-500" /></div>
                <div>
                  <strong>Home Rehab Option</strong>
                  <p>Bedside therapy available across the city.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
