import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HelpCircle,
  ChevronDown,
  MessageCircle,
  Calendar,
  Phone,
  ShieldCheck,
  CheckCircle2,
  FileText,
} from "lucide-react";
import "./FAQPage.css";

const FAQ_CATEGORIES = [
  { id: "all", label: "All Questions" },
  { id: "treatment", label: "Treatments & Recovery" },
  { id: "first-visit", label: "First Visit & Diagnostics" },
  { id: "insurance", label: "Insurance & Payments" },
  { id: "home-care", label: "Doorstep Home Care" },
];

const CLINICAL_FAQS = [
  {
    category: "treatment",
    question: "Can targeted physiotherapy really help me avoid knee replacement or spinal surgery?",
    answer:
      "Yes, in over 92% of moderate-to-severe orthopedic cases. Non-surgical computerized spinal decompression mechanically relieves intradiscal pressure, creating a negative vacuum that retracts herniated disc bulges away from pinched nerves. For knee osteoarthritis, our targeted Tecar therapy and quadriceps-to-hamstring balance re-education unloads joint compartments, eliminating pain even in Grade-3 cartilage wear without invasive surgery.",
  },
  {
    category: "treatment",
    question: "How is RevitaOrtho different from standard gym trainers or basic physiotherapy centers?",
    answer:
      "Unlike centers where an assistant just leaves you on an electrical heat pad, RevitaOrtho is led exclusively by Master's-qualified (MPT) clinical specialists. We invest in medical-grade European technologies (Class-IV High-Power Laser, Computerized Decompression, German Matrix Rhythm Therapy) and provide dedicated 1-on-1 hands-on care. Every patient diagnosis begins with a 45-minute comprehensive biomechanical assessment.",
  },
  {
    category: "treatment",
    question: "How many sessions will I need before I experience noticeable pain relief?",
    answer:
      "Most patients experience significant pain reduction (40% to 60%) within the first 3 to 4 sessions due to our acute pain deactivation protocols (Class-IV Laser and Manual Glides). We will give you a transparent, written treatment roadmap with an exact milestone timeline after your initial assessment.",
  },
  {
    category: "treatment",
    question: "Is clinical dry needling painful, and how does it help?",
    answer:
      "Clinical dry needling uses hair-thin monofilament needles that cause minimal discomfort. When the needle reaches a deep muscular knot, you may feel a brief dull ache or a quick muscle twitch (Local Twitch Response). This instantly resets muscle contracture, clears lactic acidosis, and provides immediate freedom of movement.",
  },
  {
    category: "first-visit",
    question: "Do I need an MRI, X-Ray or Doctor's prescription before my first appointment?",
    answer:
      "If you already have recent X-Rays, MRI scans, or doctor prescriptions, please bring them along. However, they are NOT mandatory. Our senior physiotherapists conduct comprehensive orthopedic clinical tests (Special Orthopedic Provocation Tests, nerve tension tests, posture screening) to diagnose root causes even before imaging.",
  },
  {
    category: "first-visit",
    question: "What should I wear for my physical therapy assessment?",
    answer:
      "Wear comfortable, loose-fitting clothing that allows you to move freely. If you have knee or hip pain, shorts or loose track pants are best. For shoulder or neck issues, wear a tank top or loose T-shirt so our clinicians can evaluate joint movement without restriction.",
  },
  {
    category: "first-visit",
    question: "How long does the initial consultation last?",
    answer:
      "Your first appointment lasts approximately 45 to 50 minutes. This includes a detailed history review, orthopedic manual testing, postural/gait scan, initial therapeutic relief treatment, and a discussion of your customized recovery plan.",
  },
  {
    category: "insurance",
    question: "Is physiotherapy covered under health insurance policies?",
    answer:
      "Yes! Most comprehensive health insurance policies (OPD riders, post-hospitalization rehabilitation, and corporate group policies) cover outpatient physiotherapy. We provide official stamped medical treatment summaries, diagnostic receipts, and itemized bills for seamless reimbursement claims.",
  },
  {
    category: "insurance",
    question: "Are there long-term package lock-ins or hidden costs?",
    answer:
      "No. We maintain 100% financial transparency. You can pay per session or choose structured 6-to-12 session recovery packages that offer bundled savings. We also offer zero-interest 3-month EMI options for advanced multi-modality treatment plans.",
  },
  {
    category: "home-care",
    question: "Do you offer home visit physiotherapy, and which areas are covered?",
    answer:
      "Yes! For post-surgery knee/hip replacement patients, stroke recovery, or severe mobility-restricted seniors, our certified senior therapists provide doorstep home visits across all central city sectors and nearby residential zones. Therapists bring portable ultrasound, electrotherapy, and mobilization equipment.",
  },
  {
    category: "home-care",
    question: "Is home physiotherapy as effective as in-clinic treatment?",
    answer:
      "For post-operative mobility, gait retraining, bedside manual therapy, and fall prevention, home visits are exceptionally effective and allow family participation. However, if your condition requires heavy computerized spinal decompression tables or advanced laser systems, we will recommend transitioning to the clinic once initial mobility improves.",
  },
];

export default function FAQPage() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [openIdx, setOpenIdx] = useState(0);

  const filteredFaqs =
    selectedCat === "all"
      ? CLINICAL_FAQS
      : CLINICAL_FAQS.filter((f) => f.category === selectedCat);

  return (
    <main className="faq-page">
      {/* ─── 1. HERO ─── */}
      <section className="subpage-hero-banner">
        <div className="subpage-hero-content">
          <div className="subpage-breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Patient FAQs</span>
          </div>
          <span className="subpage-kicker">
            <HelpCircle size={14} /> EVIDENCE-BASED PATIENT KNOWLEDGE BASE
          </span>
          <h1 className="subpage-title">
            Frequently Asked
            <br />
            <span className="text-highlight">Clinical & Medical Questions.</span>
          </h1>
          <p className="subpage-lead">
            Have doubts about avoiding surgery, treatment timelines, or insurance coverage? Here are honest, clinical answers directly from our senior physiotherapists.
          </p>
        </div>
      </section>

      {/* ─── FILTER BAR ─── */}
      <div className="faq-filter-bar">
        <div className="faq-container">
          <div className="faq-category-pills">
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`faq-cat-btn ${selectedCat === cat.id ? "active" : ""}`}
                onClick={() => {
                  setSelectedCat(cat.id);
                  setOpenIdx(0);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 2. ACCORDION LIST ─── */}
      <section className="faq-list-section section-padding">
        <div className="faq-container faq-layout-grid">
          <div className="faq-accordion-container scroll-reveal">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className={`clinical-faq-item ${openIdx === index ? "active" : ""}`}
              >
                <button
                  type="button"
                  className="clinical-faq-trigger"
                  onClick={() => setOpenIdx(openIdx === index ? -1 : index)}
                  aria-expanded={openIdx === index}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={19}
                    className={`faq-arrow-icon ${openIdx === index ? "rotated" : ""}`}
                  />
                </button>

                {openIdx === index && (
                  <div className="clinical-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Help Card */}
          <aside className="faq-sidebar-col scroll-reveal delay-2">
            <div className="faq-help-card">
              <MessageCircle size={28} className="text-azure" />
              <h3>Still Have a Medical Doubt?</h3>
              <p>
                Our senior duty physiotherapist can answer specific questions regarding your MRI scan, symptoms, or suitable treatment on WhatsApp.
              </p>
              <a
                href="https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20have%20a%20question%20regarding%20my%20symptoms."
                target="_blank"
                rel="noreferrer"
                className="btn-faq-whatsapp"
              >
                <MessageCircle size={16} />
                <span>Chat with Doctor on WhatsApp</span>
              </a>

              <div className="faq-direct-call">
                <span>Or call our desk directly:</span>
                <a href="tel:+919145875248">+91 91458 75248</a>
              </div>
            </div>

            <div className="faq-schedule-box">
              <Calendar size={22} className="text-azure" />
              <div>
                <strong>Ready for an In-Person Evaluation?</strong>
                <p>Guaranteed on-time 45-minute consultation slots.</p>
                <Link to="/appointment" className="faq-book-link">
                  Book Appointment Online &rarr;
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
