import { Link } from "react-router-dom";
import {
  Award,
  ShieldCheck,
  Building2,
  Calendar,
  Star,
  CheckCircle2,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";
import "./TeamPage.css";

const CLINICAL_DOCTORS = [
  {
    id: "dr-sumit-gupta",
    name: "Dr. Sumit Gupta, PT",
    role: "Founder & Chief Orthopedic Physiotherapist",
    qualifications: "BPT, MPT (Musculoskeletal Disorders), MIAP",
    experience: "14+ Years Clinical Leadership",
    regNo: "MIAP Reg: L-28491",
    fellowship: "Certified Spinal Decompression & Maitland Manual Therapist",
    formerHospital: "Ex-Senior Consultant, Apollo Health City & Fortis Healthcare",
    focus: [
      "Non-Surgical Disc Bulge & Herniation (L4-L5, L5-S1)",
      "Severe Radiating Sciatica & Cervical Spondylosis",
      "Failed Back Surgery Syndrome (FBSS) Rehabilitation",
      "Complex Biomechanical Postural Alignments",
    ],
    opdTimings: "Mon – Sat: 9:00 AM – 2:00 PM & 5:00 PM – 8:00 PM",
    rating: "4.98",
    patientCount: "6,500+ Patients Treated",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80",
    availableToday: true,
  },
  {
    id: "dr-sneha-kulkarni",
    name: "Dr. Sneha Kulkarni, PT",
    role: "Head of Sports Rehabilitation & Joint Preservation",
    qualifications: "BPT, MPT (Sports Medicine), FIFA Medical Diploma",
    experience: "9+ Years High-Performance Rehab",
    regNo: "MIAP Reg: L-39104",
    fellowship: "Fellowship in Athletic Kinetic Chain & Dry Needling (UK)",
    formerHospital: "Official Physiotherapist, National Badminton & Football Leagues",
    focus: [
      "Grade I-II ACL, PCL & Meniscus Rehabilitation",
      "Knee Osteoarthritis Cartilage Preservation Protocols",
      "Frozen Shoulder (Adhesive Capsulitis) & Rotator Cuff",
      "High-Velocity Return-to-Sport Biomechanical Clearance",
    ],
    opdTimings: "Mon – Sat: 10:00 AM – 6:00 PM",
    rating: "4.96",
    patientCount: "4,200+ Athletes & Patients",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80",
    availableToday: true,
  },
  {
    id: "dr-vikram-patil",
    name: "Dr. Vikram Patil, PT",
    role: "Senior Consultant – Neuro & Post-Surgical Rehab",
    qualifications: "BPT, MPT (Neurological Sciences), Certified Bobath",
    experience: "11+ Years Post-Op & Neuro Care",
    regNo: "MIAP Reg: L-34820",
    fellowship: "Certified Geriatric Gait Restoration & Vestibular Therapist",
    formerHospital: "Ex-Head of Physical Therapy, Metro Multi-Speciality Hospital",
    focus: [
      "Accelerated Total Knee & Hip Replacement (TKR/THR) Rehab",
      "Post-Stroke Hemiparesis & Balance Board Drills",
      "Spinal Fusion & Laminectomy Recovery Programs",
      "Geriatric Fall-Prevention & Parkinson's Mobility Care",
    ],
    opdTimings: "Mon – Sat: 8:00 AM – 4:00 PM",
    rating: "4.97",
    patientCount: "3,800+ Post-Op & Rehab Cases",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80",
    availableToday: true,
  },
  {
    id: "dr-ananya-deshmukh",
    name: "Dr. Ananya Deshmukh, PT",
    role: "Consultant – Women's Health & Ergonomic Posture Lead",
    qualifications: "BPT, MPT (Community Health & Ergonomics), COMT",
    experience: "8+ Years Ergonomic & Women's Rehab",
    regNo: "MIAP Reg: L-42189",
    fellowship: "Certified Mulligan Manual Therapy & Prenatal/Postnatal Rehab",
    formerHospital: "Ex-Consultant, Columbia Asia Hospital & Corporate Wellness",
    focus: [
      "Corporate Tech-Neck & Forward Head Posture Syndrome",
      "Prenatal & Postnatal Pelvic Floor & Diastasis Recti",
      "Fibromyalgia & Myofascial Trigger Point Pain",
      "Workstation Ergonomic Audits & Repetitive Strain",
    ],
    opdTimings: "Mon – Sat: 11:00 AM – 7:00 PM",
    rating: "4.95",
    patientCount: "2,900+ Consultations",
    image: "/images/dr-ananya-deshmukh.jpg",
    availableToday: true,
  },
];

const CLINICAL_STANDARDS = [
  {
    title: "100% Master's-Qualified Leadership",
    desc: "Every department head holds a post-graduate Master of Physiotherapy (MPT) degree with specialized clinical residency.",
  },
  {
    title: "Zero Intern Delegation",
    desc: "Your hands-on treatment, dry needling, and spinal decompression are performed directly by senior clinicians, never passed to interns.",
  },
  {
    title: "Continuous Medical Education",
    desc: "Our therapists regularly publish clinical case reports and hold international certifications from Germany, UK, and FIFA.",
  },
];

export default function TeamPage() {
  return (
    <main className="team-page">
      {/* ─── 1. HERO ─── */}
      <section className="team-hero-section">
        <div className="team-container">
          <div className="team-hero-content">
            <span className="team-kicker">
              <ShieldCheck size={14} /> QUALIFIED MEDICAL SPECIALISTS
            </span>
            <h1>
              Meet Our Clinical Specialists.
              <br />
              <span className="text-highlight">Direct Care from MPT Doctors.</span>
            </h1>
            <p className="team-hero-lead">
              At RevitaOrtho, you are cared for by dedicated clinical leaders who have trained at premier healthcare institutions, published orthopedic research, and healed thousands of complex joint and spine cases without surgery.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. DOCTORS DIRECTORY ─── */}
      <section className="team-directory-section section-padding">
        <div className="team-container">
          <div className="doctors-list-grid">
            {CLINICAL_DOCTORS.map((doc, idx) => (
              <article key={doc.id} className={`clinical-doctor-card scroll-reveal hover-lift delay-${(idx % 4) + 1}`}>
                <div className="doc-card-inner">
                  <div className="doc-photo-col">
                    <div className="doc-photo-frame">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="doc-img"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/dr-ananya-deshmukh.jpg";
                        }}
                      />
                      {doc.availableToday && (
                        <span className="doc-duty-badge">
                          <span className="live-dot-pulse"></span> On Consultation Duty
                        </span>
                      )}
                    </div>

                    <div className="doc-social-creds">
                      <div className="rating-row">
                        <Star size={15} className="star-gold fill-gold" />
                        <strong>{doc.rating} Rating</strong>
                        <span>({doc.patientCount})</span>
                      </div>
                      <span className="reg-number-tag">{doc.regNo}</span>
                    </div>
                  </div>

                  <div className="doc-info-col">
                    <span className="doc-role-badge">{doc.role}</span>
                    <h2 className="doc-card-name">{doc.name}</h2>
                    <p className="doc-degrees-line">{doc.qualifications}</p>

                    <div className="doc-credentials-stack">
                      <div className="cred-badge-row">
                        <Award size={15} className="text-azure" />
                        <span><strong>Experience:</strong> {doc.experience}</span>
                      </div>
                      <div className="cred-badge-row">
                        <ShieldCheck size={15} className="text-azure" />
                        <span><strong>Fellowship:</strong> {doc.fellowship}</span>
                      </div>
                      <div className="cred-badge-row">
                        <Building2 size={15} className="text-azure" />
                        <span><strong>Formerly:</strong> {doc.formerHospital}</span>
                      </div>
                    </div>

                    <div className="doc-focus-areas-box">
                      <strong>Key Clinical Specializations:</strong>
                      <ul>
                        {doc.focus.map((f, fIdx) => (
                          <li key={fIdx}>
                            <CheckCircle2 size={14} className="text-azure" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="doc-timing-box">
                      <Clock size={15} className="text-azure" />
                      <span><strong>Consultation Hours:</strong> {doc.opdTimings}</span>
                    </div>

                    <div className="doc-actions-bar">
                      <Link
                        to={`/appointment?doctor=${encodeURIComponent(doc.name)}`}
                        className="btn-doc-book-primary"
                      >
                        <Calendar size={16} />
                        <span>Book Appointment with {doc.name.split(" ")[1]}</span>
                        <ArrowRight size={16} />
                      </Link>

                      <a
                        href={`https://wa.me/919145875248?text=Hi,%20I%20would%20like%20to%20consult%20with%20${encodeURIComponent(
                          doc.name
                        )}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-doc-whatsapp"
                      >
                        <span>WhatsApp Triage</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. CLINICAL STANDARDS ─── */}
      <section className="team-standards-section section-padding">
        <div className="team-container">
          <div className="section-head-center scroll-reveal">
            <span className="team-kicker">OUR ETHICAL COMMITMENT</span>
            <h2>How Our Care Philosophy Protects You</h2>
            <p>
              We believe patients deserve undivided attention from senior clinicians who listen attentively, explain diagnoses clearly, and respect your time.
            </p>
          </div>

          <div className="standards-cards-grid">
            {CLINICAL_STANDARDS.map((std, idx) => (
              <div key={idx} className={`standard-box scroll-reveal hover-lift delay-${(idx % 4) + 1}`}>
                <div className="std-num">0{idx + 1}</div>
                <h3>{std.title}</h3>
                <p>{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
