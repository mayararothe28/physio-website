import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Clock,
  CheckCircle2,
  TrendingUp,
  Activity,
  Award,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Building2,
  Sparkles,
} from "lucide-react";
import "./OurWorkPage.css";

const CLINICAL_CASES = [
  {
    id: "case-1",
    tag: "Spine Surgery Avoided",
    title: "L4-L5 Lumbar Disc Herniation & Sciatica",
    patient: "43 Yrs • Principal IT Architect",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80",
    initialState:
      "Severe electric radiating nerve pain down right calf to foot. Sitting tolerance under 15 minutes. Two spine surgeons had strongly advised microdiscectomy surgery.",
    protocolDelivered:
      "12 Sessions of Computerized Spinal Decompression + Class-IV Cold Laser Therapy + McKenzie Extension & Deep Transverse Core Retraining.",
    outcome:
      "100% pain-free in 4 weeks. Surgery completely averted. Returned to 8-hour coding workday and driving. Verified asymptomatic on 12-month follow-up MRI.",
    duration: "4 Weeks (12 Sessions)",
    recoveryRate: "100% Pain-Free",
  },
  {
    id: "case-2",
    tag: "Knee Surgery Avoided",
    title: "Bilateral Grade-3 Knee Osteoarthritis",
    patient: "61 Yrs • Homemaker",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80",
    initialState:
      "Severe joint crepitus, morning stiffness, and intense pain when climbing stairs. Advised bilateral total knee replacement (TKR) by two orthopaedic surgeons.",
    protocolDelivered:
      "18 Sessions of Targeted Tecar Radiofrequency + Maitland Joint Glides + Vastus Medialis Oblique (VMO) Bio-Loading & Cartilage Unloading Bracing.",
    outcome:
      "Climbs stairs unassisted without pain. Daily walking tolerance restored to 3 km in the park. Cancelled knee replacement surgery.",
    duration: "6 Weeks (18 Sessions)",
    recoveryRate: "Full Independence Restored",
  },
  {
    id: "case-3",
    tag: "Full Mobility Restored",
    title: "Chronic Adhesive Capsulitis (Frozen Shoulder)",
    patient: "56 Yrs • School Principal",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=700&q=80",
    initialState:
      "Overhead arm elevation limited to 65°. Inability to comb hair or touch lower back. Severe nighttime throbbing preventing sleep on affected side for 7 months.",
    protocolDelivered:
      "15 Sessions of German Matrix Rhythm Therapy (MaRhyThe®) + Glenohumeral Joint Glides + Scapular Rhythm Retraining & Hydrocollator heat packs.",
    outcome:
      "Full 170° vertical arm reach restored. Zero night pain. Completely off all anti-inflammatory painkillers. Returned to active driving.",
    duration: "5 Weeks (15 Sessions)",
    recoveryRate: "170° Arm Reach Restored",
  },
  {
    id: "case-4",
    tag: "Athletic Comeback",
    title: "Grade-II ACL Ligament Tear & Meniscal Sprain",
    patient: "22 Yrs • State Football Striker",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=80",
    initialState:
      "Traumatic knee twist with giving-way episodes during turns. Loss of single-leg balance, quad atrophy, and fear of re-injury.",
    protocolDelivered:
      "20 Sessions of High-Velocity Neuromuscular Proprioception Drills + Tecar Therapy + Kinetic Chain eccentric loading & agility testing.",
    outcome:
      "Cleared all 5 return-to-sport hop tests. Returned to competitive 90-minute tournament football with zero joint laxity.",
    duration: "10 Weeks (20 Sessions)",
    recoveryRate: "Cleared for Competition",
  },
  {
    id: "case-5",
    tag: "Nerve Relief",
    title: "Severe Tech-Neck & Cervical Radiculopathy",
    patient: "31 Yrs • Tech Team Lead",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80",
    initialState:
      "Constant burning ache between shoulder blades, numbness radiating into right thumb and index finger, and daily tension headaches originating from occiput.",
    protocolDelivered:
      "9 Sessions of Trigger Point Dry Needling + Cervical Mechanical Traction + Deep Neck Flexor Retraining + Workstation Ergonomic Redesign.",
    outcome:
      "Zero nerve tingling. Headaches fully resolved. Forward head posture angle corrected by 4.2 cm.",
    duration: "3 Weeks (9 Sessions)",
    recoveryRate: "Zero Nerve Tingling",
  },
  {
    id: "case-6",
    tag: "Post-Op Acceleration",
    title: "Post-TKR (Total Knee Replacement) Rehab",
    patient: "68 Yrs • Retired Armed Forces Officer",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80",
    initialState:
      "Knee flexion locked at 50° post-surgery due to excessive arthrofibrotic scar binding. Severe swelling, dependent on walker support for indoor navigation.",
    protocolDelivered:
      "18 Sessions of Continuous Passive Motion (CPM) + Manual Lymph Drainage + Patellar Glides + Progressive Gait Weight-Bearing Drills.",
    outcome:
      "Achieved 120° functional knee flexion. Walks comfortably without cane or walker. Climbs stairs alternate-leg.",
    duration: "6 Weeks (18 Sessions)",
    recoveryRate: "120° Flexion & Limp-Free",
  },
];

export default function OurWorkPage() {
  return (
    <main className="our-work-page">
      {/* ─── 1. HERO ─── */}
      <section className="work-hero-section">
        <div className="work-container">
          <div className="work-hero-content">
            <span className="work-kicker">
              <FileText size={14} /> CLINICAL CASE ARCHIVES & DOCUMENTATION
            </span>
            <h1>
              Our Work Speaks Through
              <br />
              <span className="text-highlight">Proven Clinical Recoveries.</span>
            </h1>
            <p className="work-hero-lead">
              We believe physical medicine must be measured by objective outcomes: surgeries avoided, degrees of joint mobility unlocked, and athletic freedom restored. Here is our documented clinical record.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. CLINICAL CASES GRID ─── */}
      <section className="work-cases-section section-padding">
        <div className="work-container">
          <div className="cases-cards-grid">
            {CLINICAL_CASES.map((item) => (
              <article key={item.id} className="case-archive-card">
                <div className="case-img-box">
                  <img src={item.image} alt={item.title} className="case-img" loading="lazy" />
                  <span className="case-tag-badge">{item.tag}</span>
                  <span className="case-duration-badge">
                    <Clock size={13} /> {item.duration}
                  </span>
                </div>

                <div className="case-card-body">
                  <h2 className="case-title">{item.title}</h2>
                  <span className="case-patient-meta">{item.patient}</span>

                  <div className="case-condition-block">
                    <strong className="block-head text-danger">Initial Clinical Presentation:</strong>
                    <p>{item.initialState}</p>
                  </div>

                  <div className="case-condition-block">
                    <strong className="block-head text-azure">Targeted Protocol Delivered:</strong>
                    <p>{item.protocolDelivered}</p>
                  </div>

                  <div className="case-result-box">
                    <div className="result-icon-dot">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <strong>Documented Outcome:</strong>
                      <p>{item.outcome}</p>
                      <span className="recovery-rate-pill">{item.recoveryRate}</span>
                    </div>
                  </div>

                  <div className="case-action-btn-row">
                    <Link to="/appointment" className="btn-case-book">
                      <span>Schedule a Consultation for Similar Issue</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. BOTTOM CTA ─── */}
      <section className="work-bottom-cta">
        <div className="work-container">
          <div className="work-cta-card">
            <h2>Struggling with a Similar Orthopedic Condition?</h2>
            <p>
              Don't accept invasive surgery as your only option until you have received a comprehensive 45-minute biomechanical evaluation at RevitaOrtho.
            </p>
            <div className="work-cta-actions">
              <Link to="/appointment" className="btn-work-white">
                <Calendar size={18} />
                <span>Book Initial Evaluation</span>
              </Link>
              <a href="tel:+919876543210" className="btn-work-outline-white">
                <span>Call Doctor Helpline: +91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
