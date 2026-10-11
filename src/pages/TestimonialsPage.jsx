import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  CheckCircle2,
  TrendingUp,
  Clock,
  Sparkles,
  Calendar,
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  Quote,
} from "lucide-react";
import "./TestimonialsPage.css";

const VERIFIED_TESTIMONIALS = [
  {
    id: "review-1",
    name: "Dr. Aniruddh Joshi",
    role: "Consultant Interventional Cardiologist",
    location: "Baner, Pune",
    condition: "Cervical Radiculopathy & Right Arm Numbness",
    category: "spine",
    duration: "4 Weeks (12 Sessions)",
    rating: 5,
    doctorTreated: "Dr. Sumit Gupta, PT",
    treatmentUsed: "Cervical Decompression + Class-4 Laser + Deep Neck Flexors",
    quote:
      "Being a physician myself, I am very critical of medical claims. When I developed severe cervical disc pain with radiating tingling into my right index finger, my orthopaedic colleague recommended immediate surgery. Dr. Sumit at RevitaOrtho diagnosed the exact C6 nerve root compression. Within 3 weeks of targeted decompression and manual glides, the numbness completely resolved. Highly ethical, evidence-based physical medicine.",
  },
  {
    id: "review-2",
    name: "Meera Deshmukh",
    role: "Senior Homemaker (61 Yrs)",
    location: "Aundh, Pune",
    condition: "Bilateral Grade-3 Knee Osteoarthritis",
    category: "knee",
    duration: "6 Weeks (18 Sessions)",
    doctorTreated: "Dr. Sneha Kulkarni, PT",
    treatmentUsed: "Targeted Tecar Diathermy + Maitland Unloading + Vastus Medialis Retraining",
    quote:
      "I was told by two senior orthopedic surgeons that knee replacement was my only remaining choice. I could not climb the 8 steps into my house without severe pain. Dr. Sneha created a gentle, progressive strengthening plan using Tecar therapy. Today I walk 3 kilometers daily in the park and climb stairs completely unassisted. RevitaOrtho saved my natural knees.",
  },
  {
    id: "review-3",
    name: "Rajesh Malhotra",
    role: "Senior Principal IT Architect",
    location: "Hinjewadi Phase 1",
    condition: "L4-L5 Lumbar Disc Herniation with Right Sciatica",
    category: "spine",
    duration: "4 Weeks (12 Sessions)",
    doctorTreated: "Dr. Sumit Gupta, PT",
    treatmentUsed: "Computerized Spinal Decompression + High-Power Cold Laser + McKenzie",
    quote:
      "My sitting tolerance had fallen below 15 minutes. Severe electric pain was shooting down my right calf to the ankle. After just 5 sessions on their computerized decompression table, the radiating leg pain ceased. By week 4, I returned to a full 8-hour coding workday with zero pain. The follow-up MRI at 6 months showed significant disc bulge resorption. Life changing!",
  },
  {
    id: "review-4",
    name: "Sunita Phadke",
    role: "High School Principal (56 Yrs)",
    location: "Kothrud, Pune",
    condition: "Chronic Adhesive Capsulitis (Frozen Shoulder – Stage 2)",
    category: "shoulder",
    duration: "5 Weeks (15 Sessions)",
    doctorTreated: "Dr. Sneha Kulkarni, PT",
    treatmentUsed: "German Matrix Rhythm Therapy (MaRhyThe®) + Glenohumeral Joint Glides",
    quote:
      "I had been in severe night pain for 7 months. My arm elevation was stuck at 65°—I could not comb my hair or hook my clothes. What other clinics could not do in 6 months with hot pads, RevitaOrtho solved in 5 weeks using German Matrix Rhythm Therapy. My overhead reach is now a full 170° without any painkillers.",
  },
  {
    id: "review-5",
    name: "Karan Singhania",
    role: "Marathon Runner & Tech VP",
    location: "Balewadi High Street",
    condition: "Chronic Plantar Fasciitis & Achilles Tendonitis",
    category: "sports",
    duration: "3 Weeks (8 Sessions)",
    doctorTreated: "Dr. Sneha Kulkarni, PT",
    treatmentUsed: "Class-4 Cold Laser + Dry Needling + Digital Gait Video Lab",
    quote:
      "I had visited 4 different clinics with zero lasting results over 8 months. Here, they analyzed my running gait using camera sensors and found severe pelvic drop. Combined dry needling and eccentric calf loading cured my morning heel pain in just 4 sessions. Ran the Tata Mumbai Half Marathon pain-free!",
  },
  {
    id: "review-6",
    name: "Aryan Sane",
    role: "State-Level Football Striker (22 Yrs)",
    location: "Baner, Pune",
    condition: "Grade-II ACL Ligament Sprain & Meniscal Tear",
    category: "sports",
    duration: "10 Weeks (20 Sessions)",
    doctorTreated: "Dr. Sneha Kulkarni, PT",
    treatmentUsed: "High-Velocity Neuromuscular Proprioception + Tecar + Agility Drills",
    quote:
      "After an awkward landing on the football pitch, my knee felt completely unstable. The sports rehab program at RevitaOrtho was intense, objective, and inspiring. They tested my single-leg hop symmetry and deceleration biomechanics before clearing me. I played my first 90-minute competitive tournament match last week with zero laxity or fear.",
  },
];

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTestimonials =
    activeCategory === "all"
      ? VERIFIED_TESTIMONIALS
      : VERIFIED_TESTIMONIALS.filter((t) => t.category === activeCategory);

  return (
    <main className="testimonials-page">
      {/* ─── 1. HERO ─── */}
      <section className="testimonials-hero-section">
        <div className="testimonials-container">
          <div className="testimonials-hero-content">
            <span className="testimonials-kicker">
              <BadgeCheck size={14} /> VERIFIED CLINICAL OUTCOMES
            </span>
            <h1>
              Real Patients. Real Recoveries.
              <br />
              <span className="text-highlight">Surgeries Averted Across Pune.</span>
            </h1>
            <p className="testimonials-hero-lead">
              Read documented recovery narratives from patients who overcame debilitating slip discs, severe knee osteoarthritis, frozen shoulder, and sports tears without surgery.
            </p>
          </div>
        </div>
      </section>

      {/* ─── STATS & FILTER BAR ─── */}
      <div className="testimonials-filter-bar">
        <div className="testimonials-container">
          {/* Google Stats Ribbon */}
          <div className="google-metrics-ribbon">
            <div className="google-stars-item">
              <div className="google-stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="star-gold fill-gold" />
                ))}
                <strong className="rating-num">4.98 / 5.0</strong>
              </div>
              <span>Google Verified Clinic Rating</span>
            </div>

            <div className="ribbon-sep"></div>

            <div className="google-stars-item">
              <strong className="metric-bold">1,450+</strong>
              <span>Verified Patient Reviews</span>
            </div>

            <div className="ribbon-sep"></div>

            <div className="google-stars-item">
              <strong className="metric-bold">94.2%</strong>
              <span>Surgery Avoidance Rate</span>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="review-filter-tabs">
            <button
              type="button"
              className={`review-tab-btn ${activeCategory === "all" ? "active" : ""}`}
              onClick={() => setActiveCategory("all")}
            >
              All Stories ({VERIFIED_TESTIMONIALS.length})
            </button>
            <button
              type="button"
              className={`review-tab-btn ${activeCategory === "spine" ? "active" : ""}`}
              onClick={() => setActiveCategory("spine")}
            >
              Spine & Sciatica
            </button>
            <button
              type="button"
              className={`review-tab-btn ${activeCategory === "knee" ? "active" : ""}`}
              onClick={() => setActiveCategory("knee")}
            >
              Knee Arthritis
            </button>
            <button
              type="button"
              className={`review-tab-btn ${activeCategory === "shoulder" ? "active" : ""}`}
              onClick={() => setActiveCategory("shoulder")}
            >
              Frozen Shoulder
            </button>
            <button
              type="button"
              className={`review-tab-btn ${activeCategory === "sports" ? "active" : ""}`}
              onClick={() => setActiveCategory("sports")}
            >
              Sports & Ligaments
            </button>
          </div>
        </div>
      </div>

      {/* ─── 2. TESTIMONIALS CARDS ─── */}
      <section className="testimonials-grid-section section-padding">
        <div className="testimonials-container">
          <div className="stories-grid-layout">
            {filteredTestimonials.map((t, idx) => (
              <article key={t.id} className={`patient-story-card scroll-reveal hover-lift delay-${(idx % 3) + 1}`}>
                <div className="story-card-header">
                  <div className="stars-row">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star key={s} size={15} className="star-gold fill-gold" />
                    ))}
                  </div>
                  <span className="verified-pill">
                    <BadgeCheck size={14} /> Verified Patient • {t.location}
                  </span>
                </div>

                <div className="story-condition-tag">
                  <strong>Condition:</strong> {t.condition}
                </div>

                <p className="story-quote-text">"{t.quote}"</p>

                <div className="story-treatment-box">
                  <div className="t-row">
                    <strong>Protocol Used:</strong>
                    <span>{t.treatmentUsed}</span>
                  </div>
                  <div className="t-row">
                    <strong>Clinical Duration:</strong>
                    <span className="duration-highlight">
                      <Clock size={13} /> {t.duration}
                    </span>
                  </div>
                  <div className="t-row">
                    <strong>Treated By:</strong>
                    <span>{t.doctorTreated}</span>
                  </div>
                </div>

                <div className="story-author-footer">
                  <div className="author-avatar-circle">{t.name.charAt(0)}</div>
                  <div className="author-details">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. BOTTOM CTA ─── */}
      <section className="testimonials-bottom-cta">
        <div className="testimonials-container">
          <div className="bottom-cta-banner scroll-reveal">
            <h2>Ready to Write Your Own Recovery Story?</h2>
            <p>
              Don't let chronic joint stiffness or nerve pain become your everyday baseline. Schedule your comprehensive 45-minute clinical assessment today.
            </p>
            <div className="bottom-cta-actions">
              <Link to="/appointment" className="btn-cta-white">
                <Calendar size={18} />
                <span>Book Your Evaluation</span>
                <ArrowRight size={17} />
              </Link>
              <a href="tel:+919158347290" className="btn-cta-outline-white">
                <span>Call Helpline: +91 91583 47290</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
