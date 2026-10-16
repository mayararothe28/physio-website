import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import "./ServicesPage.css";

// 12 Clinically accurate, image-based service cards matching World of Rehab & Homepage design
const ALL_12_SERVICES = [
  {
    id: "back-pain",
    title: "Back Pain & Sciatica",
    desc: "Computerized spinal decompression and targeted manual protocols relieve compressed lumbar discs and resolve radiating leg pain without surgery.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80",
    link: "/services/back-pain",
  },
  {
    id: "neck-pain",
    title: "Neck Pain & Cervical Care",
    desc: "Gentle cervical decompression, postural trigger-point release, and deep neck flexor stabilization eliminate nerve pressure and desk stiffness.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80",
    link: "/services/neck-pain",
  },
  {
    id: "knee-pain",
    title: "Knee Pain & Preservation",
    desc: "Evidence-based cartilage preservation and quad bio-loading designed to relieve osteoarthritis pain, restore stair climbing, and avoid joint replacement.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80",
    link: "/services/knee-pain",
  },
  {
    id: "sports-injury",
    title: "Sports Injury & ACL Rehab",
    desc: "Biomechanical kinetic chain analysis, high-velocity deceleration drills, and progressive eccentric loading to safely return athletes to sport.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=700&q=80",
    link: "/services/sports-injury",
  },
  {
    id: "frozen-shoulder",
    title: "Frozen Shoulder & Rotator Cuff",
    desc: "Advanced capsular release protocols combining Matrix Rhythm Therapy with manual glides to eliminate night pain and restore full overhead reach.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80",
    link: "/services/frozen-shoulder",
  },
  {
    id: "post-operative",
    title: "Post-Operative Rehabilitation",
    desc: "Structured phase-based recovery for knee replacement, hip surgery, and ligament reconstructions to rebuild strength and limp-free independent walking.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=700&q=80",
    link: "/services/post-operative",
  },
  {
    id: "dry-needling",
    title: "Dry Needling & Cupping",
    desc: "Specialized myofascial acoustic needling and decompression cupping stimulate localized circulation, release deep knots, and accelerate recovery.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=700&q=80",
    link: "/services/dry-needling",
  },
  {
    id: "hip-pelvis",
    title: "Hip Joint & Pelvic Alignment",
    desc: "Maitland joint mobilizations and gluteal activation protocols to resolve bursitis, labral irritation, and hip stiffness for effortless walking.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80",
    link: "/services/hip-pelvis",
  },
  {
    id: "slip-disc",
    title: "Slip Disc & Spine Decompression",
    desc: "Targeted negative intradiscal distraction draws herniated disc nucleus away from irritated nerves, preventing surgical microdiscectomy.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80",
    link: "/services/slip-disc",
  },
  {
    id: "ankle-foot",
    title: "Ankle & Foot Rehabilitation",
    desc: "Deep tissue phototherapy and progressive proprioceptive wobble drills for chronic ankle sprains, plantar fasciitis, and Achilles tendonitis.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=80",
    link: "/services/ankle-foot",
  },
  {
    id: "postural-correction",
    title: "Postural Correction & Ergonomics",
    desc: "Comprehensive biomechanical alignment, thoracic mobility drills, and personalized ergonomic guidance to eliminate chronic desk strain.",
    image: "https://images.unsplash.com/photo-1594824813637-2900746b14ea?auto=format&fit=crop&w=700&q=80",
    link: "/services/postural-correction",
  },
  {
    id: "home-visit",
    title: "Home Visit Physiotherapy",
    desc: "Dedicated senior physiotherapists bring clinical equipment directly to your doorstep for seniors, post-surgical mobility, and bedridden care.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80",
    link: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <main className="wor-services-page">
      {/* ─── 1. STANDARDIZED CLEAN SUBPAGE HERO ─── */}
      <section className="wor-subpage-hero">
        <div className="wor-container">

          <div className="wor-section-tag-line center-tag">
            <span className="wor-divider-line"></span>
            <span className="wor-section-kicker">OUR SERVICES</span>
            <span className="wor-divider-line"></span>
          </div>

          <h1 className="wor-subpage-title">Our Physiotherapy Services</h1>
          <p className="wor-subpage-subtitle">
            Evidence-based non-surgical physical therapy protocols designed to resolve root causes and restore full movement freedom.
          </p>
        </div>
      </section>

      {/* ─── 2. 12 SERVICES GRID (Matching Homepage Layout) ─── */}
      <section className="wor-services-grid-section">
        <div className="wor-container">
          <div className="wor-services-cards-grid">
            {ALL_12_SERVICES.map((srv) => (
              <div key={srv.id} className="wor-service-card">
                <Link to={srv.link} className="wor-service-thumb-wrap">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="wor-service-thumb"
                    loading="lazy"
                  />
                </Link>
                <div className="wor-service-body">
                  <h3 className="wor-service-title">
                    <Link to={srv.link}>{srv.title}</Link>
                  </h3>
                  <p className="wor-service-desc">{srv.desc}</p>
                  <div className="wor-service-action">
                    <Link to={srv.link} className="wor-service-readmore">
                      <span>Read More</span>
                      <ChevronRight size={15} />
                    </Link>
                    <Link to={`/appointment?service=${srv.id}`} className="wor-service-book-btn">
                      <span>Book Appointment</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
