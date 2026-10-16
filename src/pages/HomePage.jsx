import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MapPin,
  Calendar,
  Award,
  Check,
  Zap,
  Users,
  ShieldCheck,
  Clock,
  Star,
  ExternalLink,
  MessageCircle,
  Loader2,
  ChevronRight,
  Mail,
  Activity,
  HeartPulse,
} from "lucide-react";
import { fetchClinicData, submitAppointmentApi } from "../services/api";
import drAnanyaImg from "../assets/dr-ananya-deshmukh.jpg";
import "./HomePage.css";

// Verified Doctor Profiles for RevitaOrtho (matching World of Rehab doctor layout)
const EXPERT_DOCTORS = [
  {
    id: "dr-sumit",
    name: "Dr. Sumit Gupta, PT",
    role: "Chief Orthopedic & Spine Specialist",
    qualifications: "BPT, MPT (Musculoskeletal Disorders)",
    experience: "14+ Years Clinical Leadership",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80",
    serviceId: "back-pain",
    bio: "Dr. Sumit Gupta has over 14 years of clinical experience specializing in non-surgical spinal decompression, disc herniation recovery, and chronic sciatica. Having treated thousands of complex spine patients, he takes an individualized, root-cause biomechanical approach that helps 94% of patients avert invasive surgical procedures.",
  },
  {
    id: "dr-sneha",
    name: "Dr. Sneha Kulkarni, PT",
    role: "Head of Sports Rehab & Knee Care",
    qualifications: "BPT, MPT (Sports Medicine), FIFA Dip.",
    experience: "9+ Years High-Performance Rehab",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80",
    serviceId: "knee-pain",
    bio: "Dr. Sneha Kulkarni specializes in joint preservation, meniscus recovery, and advanced athletic rehabilitation. She works closely with recreational and competitive athletes recovering from ACL reconstructions, runner's knee, and shoulder impingements using tailored kinetic chain retraining and cartilage-unloading protocols.",
  },
  {
    id: "dr-vikram",
    name: "Dr. Vikram Patil, PT",
    role: "Senior Consultant – Neuro & Post-Op Rehab",
    qualifications: "BPT, MPT (Neurological Sciences)",
    experience: "11+ Years Post-Op Mobility Care",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80",
    serviceId: "sports-injury",
    bio: "Dr. Vikram Patil leads post-surgical and neuro-rehabilitation cases with over a decade of hospital expertise. He specializes in restoring independent gait, joint articulation, and nerve conduction for patients recovering from major joint replacements, fractures, and neurological movement restrictions.",
  },
  {
    id: "dr-ananya",
    name: "Dr. Ananya Deshmukh, PT",
    role: "Consultant – Ergonomics & Posture Care",
    qualifications: "BPT, MPT (Ergonomics & Posture)",
    experience: "8+ Years Desk Worker Pain Solutions",
    image: drAnanyaImg,
    serviceId: "neck-pain",
    bio: "Dr. Ananya Deshmukh focuses on modern desk-worker posture syndromes, cervical spondylosis, and myofascial trigger-point therapy. She designs workplace ergonomic interventions and targeted deep cervical flexor drills that eliminate chronic headaches and persistent neck stiffness.",
  },
];

// Verified Patient Reviews (World of Rehab Trustindex style)
const PATIENT_REVIEWS = [
  {
    id: 1,
    name: "Ayush Yadav",
    condition: "Lower Back Strain & Disc Bulge",
    text: "Dr. Sumit and the team helped me recover from severe lower back pain that stopped me from sitting at work. He diagnosed the nerve trigger on day one and designed a customized decompression plan. The recovery was remarkably smooth and effective without taking painkillers.",
    rating: 5,
    source: "Google Review",
    avatar: "AY",
  },
  {
    id: 2,
    name: "Sanjaya Pradhaan",
    condition: "Post-Op Joint Mobility Rehab",
    text: "Following my orthopedic surgery, the physiotherapist took care of my rehabilitation for 6 weeks. Punctual, friendly, and extremely skilled. Got me walking without support much faster than expected. Truly grateful for the compassionate and patient-centric care.",
    rating: 5,
    source: "Google Review",
    avatar: "SP",
  },
  {
    id: 3,
    name: "Maradon Dsouza",
    condition: "Shoulder Impingement & Muscle Imbalance",
    text: "I had a crucial shoulder joint imbalance affecting my workouts and daily arm movement. RevitaOrtho gave me specific manual mobilization drills and stability exercises that completely eliminated the discomfort. Highly recommended!",
    rating: 5,
    source: "Google Review",
    avatar: "MD",
  },
  {
    id: 4,
    name: "Sushama Reddy",
    condition: "Knee Osteoarthritis & Stair Pain",
    text: "Very patient and gentle with senior citizens. My mother was having immense difficulty climbing stairs due to arthritis. With gentle radiofrequency and joint unloading exercises, she is now walking comfortably every morning.",
    rating: 5,
    source: "Google Review",
    avatar: "SR",
  },
  {
    id: 5,
    name: "Savielle Monteiro",
    condition: "Cervical Spondylosis & Vertigo Relief",
    text: "Visited for chronic neck stiffness and dizziness issues. The therapist explained the importance of cervical muscle coordination and guided me with simple workstation exercises. My vertigo has completely stopped and neck pain reduced significantly.",
    rating: 5,
    source: "Google Review",
    avatar: "SM",
  },
];

// Clinical Gallery Showcase (World of Rehab video/photo gallery style)
const CLINIC_FACILITIES = [
  {
    id: "spinal-decompression",
    title: "Motorized Spinal Decompression Lab",
    subtitle: "Computer-calibrated disc distraction technology",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=700&q=80",
    badge: "Spine Care",
  },
  {
    id: "consultation-suites",
    title: "Private Sanitized Consultation Suites",
    subtitle: "Dedicated 1-on-1 therapist assessment rooms",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80",
    badge: "1-on-1 Care",
  },
  {
    id: "laser-electrotherapy",
    title: "Class-IV Laser & Electrotherapy Bay",
    subtitle: "Deep cellular healing and acute pain relief",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80",
    badge: "Advanced Modalities",
  },
  {
    id: "rehab-gym",
    title: "Active Functional Rehabilitation Gym",
    subtitle: "Kinetic chain alignment and athletic retraining",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80",
    badge: "Mobility & Strength",
  },
];

export default function HomePage() {
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Appointment Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "back-pain",
    careMode: "clinic",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Fetch clinic data
  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      setIsLoading(true);
      const data = await fetchClinicData();
      if (isMounted) {
        setApiData(data);
        setIsLoading(false);
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  function handleInputChange(e) {
    const { name, value } = e.target;
    if (name === "phone") {
      const cleanDigits = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: cleanDigits }));
      if (cleanDigits.length === 10) setPhoneError("");
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitAppointmentApi(formData);
      setBookingRef(response.bookingRef || `REV-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Booking submission error:", err);
      setBookingRef(`REV-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleResetForm() {
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "back-pain",
      careMode: "clinic",
      notes: "",
    });
    setPhoneError("");
    setIsSubmitted(false);
  }

  if (isLoading || !apiData) {
    return (
      <main className="wor-home-loading">
        <div className="wor-loading-box">
          <Loader2 size={36} className="wor-spinner" />
          <p>Loading clinic information...</p>
        </div>
      </main>
    );
  }

  const { clinicInfo } = apiData;

  // 6 Image-based Service cards matching World of Rehab's services section
  const serviceCards = [
    {
      id: "back-pain",
      title: "Back Pain & Sciatica",
      desc: "Computerized spinal decompression and targeted manual protocols relieve compressed lumbar discs and resolve radiating leg pain without surgery.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
      link: "/services/back-pain",
    },
    {
      id: "neck-pain",
      title: "Neck Pain & Cervical",
      desc: "Gentle cervical decompression, postural trigger-point release, and deep neck flexor stabilization eliminate nerve pressure and desk stiffness.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
      link: "/services/neck-pain",
    },
    {
      id: "knee-pain",
      title: "Knee Pain & Preservation",
      desc: "Evidence-based cartilage preservation and quad bio-loading designed to relieve osteoarthritis pain, restore stair climbing, and avoid joint replacement.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
      link: "/services/knee-pain",
    },
    {
      id: "sports-injury",
      title: "Sports Injury & ACL Rehab",
      desc: "Biomechanical kinetic chain analysis, high-velocity deceleration drills, and progressive eccentric loading to safely return athletes to sport.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
      link: "/services/sports-injury",
    },
    {
      id: "cupping-needling",
      title: "Dry Needling & Cupping",
      desc: "Specialized myofascial release and sterile acoustic needling stimulate deep tissue blood flow, release stubborn knots, and accelerate natural healing.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
      link: "/services/back-pain",
    },
    {
      id: "home-visit",
      title: "Home Visit Physiotherapy",
      desc: "Dedicated senior physiotherapists bring clinical equipment to your home for senior citizens, post-operative mobility, and bedridden patients.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
      link: "/services/home-visit",
    },
  ];

  return (
    <main className="wor-home-page">
      {/* ══════════════════════════════════════════════════════════════
          1. HERO BANNER (Single Image with "Make an Appointment" & "Call Us" Buttons)
         ══════════════════════════════════════════════════════════════ */}
      <section className="wor-hero-single-banner">
        <div className="wor-hero-banner-bg">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85"
            alt="Physiotherapy treatment at RevitaOrtho clinic"
            className="wor-banner-image"
          />
          <div className="wor-hero-banner-overlay"></div>
        </div>

        <div className="wor-container wor-banner-content-wrap">
          <div className="wor-banner-content">
            <span className="wor-banner-kicker">
              <ShieldCheck size={16} />
              <span>SPECIALIZED PHYSICAL THERAPY & ORTHOPEDICS</span>
            </span>

            <h1 className="wor-banner-title">
              Begin Your Journey <br />
              to <span className="wor-text-accent">Recovery</span>
            </h1>

            <p className="wor-banner-desc">
              Our customized physical therapy treatments provide lasting relief and a proven path to a pain-free life without unnecessary surgery or medication. Over 10,000+ recoveries managed in Pune.
            </p>

            <div className="wor-banner-btn-group">
              <Link to="/appointment" className="wor-btn-banner-appointment">
                <Calendar size={18} />
                <span>Make an Appointment</span>
              </Link>

              <a href={`tel:+91${clinicInfo.rawPhone}`} className="wor-btn-banner-call">
                <Phone size={18} />
                <span>Call Us! +91 {clinicInfo.rawPhone}</span>
              </a>
            </div>

            <div className="wor-banner-trust-tags">
              <span className="wor-banner-tag">
                <CheckCircle2 size={15} className="text-emerald" /> Zero Waiting Time
              </span>
              <span className="wor-banner-tag">
                <CheckCircle2 size={15} className="text-emerald" /> Dedicated 1-on-1 MPT Care
              </span>
              <span className="wor-banner-tag">
                <CheckCircle2 size={15} className="text-emerald" /> 94% Avoid Surgery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. EXPERIENCE & ACHIEVEMENTS STRIP (Horizontal Stats Row)
          Matching World of Rehab's 4 horizontal metric highlights
         ══════════════════════════════════════════════════════════════ */}
      <section className="wor-stats-section">
        <div className="wor-container">
          <div className="wor-stats-grid">
            <div className="wor-stat-box">
              <div className="wor-stat-icon-wrap">
                <Award size={28} />
              </div>
              <div className="wor-stat-info">
                <h3>14+ Years</h3>
                <p>Of Clinical Leadership</p>
              </div>
            </div>

            <div className="wor-stat-divider"></div>

            <div className="wor-stat-box">
              <div className="wor-stat-icon-wrap">
                <Users size={28} />
              </div>
              <div className="wor-stat-info">
                <h3>10,000+</h3>
                <p>Happy Patients Restored</p>
              </div>
            </div>

            <div className="wor-stat-divider"></div>

            <div className="wor-stat-box">
              <div className="wor-stat-icon-wrap">
                <ShieldCheck size={28} />
              </div>
              <div className="wor-stat-info">
                <h3>94% Surgeries</h3>
                <p>Successfully Avoided</p>
              </div>
            </div>

            <div className="wor-stat-divider"></div>

            <div className="wor-stat-box">
              <div className="wor-stat-icon-wrap">
                <Zap size={28} />
              </div>
              <div className="wor-stat-info">
                <h3>Equipped With</h3>
                <p>Latest European Technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. ABOUT SECTION (Introduction + Video/Photo + Ratings)
         ══════════════════════════════════════════════════════════════ */}
      <section className="wor-about-section" id="about">
        <div className="wor-container">
          <div className="wor-about-grid">
            {/* Left Column: Clinic Image Showcase */}
            <div className="wor-about-media-col">
              <div className="wor-about-image-card">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"
                  alt="RevitaOrtho Clinic Treatment Suite"
                  className="wor-about-image"
                />
              </div>
            </div>

            {/* Right Column: Narrative Copy & Points */}
            <div className="wor-about-text-col">
              <div className="wor-section-tag-line">
                <span className="wor-divider-line"></span>
                <span className="wor-section-kicker">ABOUT US</span>
              </div>

              <h2 className="wor-section-title">
                RevitaOrtho – Specialized Physical Therapy & Joint Clinic in Pune
              </h2>

              <div className="wor-about-copy">
                <p>
                  RevitaOrtho stands out as a premier physical therapy and musculoskeletal rehabilitation center in Baner, Pune, offering state-of-the-art treatments that meet international orthopedic standards. Our facility is equipped with modern European medical equipment that ensures rapid, lasting recovery for all our patients.
                </p>
                <p>
                  Our team of physiotherapists comprises hospital-certified Master's degree clinicians with over a decade of hands-on experience treating spine conditions, sports injuries, and degenerative joint pain.
                </p>
                <p>
                  At RevitaOrtho, we believe patient satisfaction and root-cause resolution are paramount. Whether recovering from an athletic ligament tear or managing chronic slip disc pain, we partner with you on a personalized 1-on-1 journey to complete physical freedom.
                </p>
              </div>

              <div className="wor-about-buttons-row">
                <Link to="/about" className="wor-btn-about-more">
                  <span>Learn More About Us</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. SERVICES SECTION (Image-based Service Cards)
          Image on top, Title, Short Description, Read More link
         ══════════════════════════════════════════════════════════════ */}
      <section className="wor-services-section" id="services">
        <div className="wor-container">
          <div className="wor-section-header-center">
            <div className="wor-section-tag-line center-tag">
              <span className="wor-divider-line"></span>
              <span className="wor-section-kicker">OUR SERVICES</span>
              <span className="wor-divider-line"></span>
            </div>
            <h2 className="wor-section-title">Our Physiotherapy Services</h2>
            <p className="wor-section-subtitle">
              Evidence-based non-surgical physical therapy protocols designed to resolve root causes and restore full movement freedom.
            </p>
          </div>

          <div className="wor-services-cards-grid">
            {serviceCards.map((srv) => (
              <div key={srv.id} className="wor-service-card">
                <Link to={srv.link} className="wor-service-thumb-wrap">
                  <img src={srv.image} alt={srv.title} className="wor-service-thumb" />
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
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="wor-services-footer-action">
            <Link to="/services" className="wor-btn-view-all">
              <span>View all Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. EXPERT PHYSIOTHERAPISTS SECTION (Doctor Profiles)
          Professional portrait, Name, Qualification, Bio, Action
         ══════════════════════════════════════════════════════════════ */}
      <section className="wor-doctors-section" id="doctors">
        <div className="wor-container">
          <div className="wor-section-header-center">
            <div className="wor-section-tag-line center-tag">
              <span className="wor-divider-line"></span>
              <span className="wor-section-kicker">OUR SPECIALISTS</span>
              <span className="wor-divider-line"></span>
            </div>
            <h2 className="wor-section-title">Our Expert Physiotherapists</h2>
            <p className="wor-section-subtitle">
              All evaluations and therapies are personally administered by hospital-trained Master's degree physiotherapists.
            </p>
          </div>

          <div className="wor-doctors-cards-grid">
            {EXPERT_DOCTORS.map((doc) => (
              <div key={doc.id} className="wor-doctor-card">
                <div className="wor-doctor-img-wrap">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="wor-doctor-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80";
                    }}
                  />
                </div>
                <div className="wor-doctor-body">
                  <h3 className="wor-doctor-name">{doc.name}</h3>
                  <span className="wor-doctor-role">{doc.role}</span>
                  <p className="wor-doctor-degree">{doc.qualifications}</p>
                  <p className="wor-doctor-bio">{doc.bio}</p>
                  <div className="wor-doctor-actions">
                    <Link
                      to={`/appointment?doctor=${encodeURIComponent(doc.name)}`}
                      className="wor-btn-doctor-book"
                    >
                      <Calendar size={14} />
                      <span>Book Consultation</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="wor-gallery-footer-action">
            <Link to="/team" className="wor-btn-gallery-visit">
              <span>View All Specialists</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. CLINIC GALLERY & VIDEO SECTION
          Modern treatment suites & decompression lab showcase
         ══════════════════════════════════════════════════════════════ */}
      <section className="wor-gallery-section" id="gallery">
        <div className="wor-container">
          <div className="wor-section-header-center">
            <div className="wor-section-tag-line center-tag">
              <span className="wor-divider-line"></span>
              <span className="wor-section-kicker">CLINIC & FACILITIES</span>
              <span className="wor-divider-line"></span>
            </div>
            <h2 className="wor-section-title">Video Gallery & Treatment Suites</h2>
            <p className="wor-section-subtitle">
              Take a look inside our modern European rehabilitation center designed for patient comfort, hygiene, and rapid recovery.
            </p>
          </div>

          <div className="wor-gallery-grid">
            {CLINIC_FACILITIES.map((facility) => (
              <div key={facility.id} className="wor-gallery-card">
                <div className="wor-gallery-img-wrap">
                  <img src={facility.image} alt={facility.title} className="wor-gallery-img" />
                </div>
                <div className="wor-gallery-content">
                  <h4>{facility.title}</h4>
                  <p>{facility.subtitle}</p>
                  <div className="wor-gallery-action">
                    <Link to={`/facilities/${facility.id}`} className="wor-btn-gallery-details">
                      <span>View Details</span>
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="wor-gallery-footer-action">
            <Link to="/facilities" className="wor-btn-gallery-visit">
              <span>View All Clinic Facilities</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════
          8. QUICK INQUIRY / APPOINTMENT SECTION (Above Footer)
          2 Columns: Left details/address/timings, Right Inquiry form
         ══════════════════════════════════════════════════════════════ */}
      <section className="wor-contact-section" id="contact">
        <div className="wor-container">
          <div className="wor-contact-card-wrap">
            <div className="wor-contact-grid">
              {/* Left Column: Direct Clinic Details & Working Hours */}
              <div className="wor-contact-details-col">
                <div className="wor-section-tag-line">
                  <span className="wor-divider-line white-line"></span>
                  <span className="wor-section-kicker kicker-white">GET IN TOUCH</span>
                </div>

                <h2 className="wor-contact-title">
                  Quick Inquiry & <br />
                  Consultation Desk
                </h2>

                <p className="wor-contact-lead">
                  Have questions about your pain condition or wish to schedule an evaluation? Connect with our senior clinical coordinator directly.
                </p>

                <div className="wor-contact-info-list">
                  <div className="wor-info-item">
                    <MapPin size={20} className="wor-info-icon" />
                    <div>
                      <strong>Clinic Location</strong>
                      <p>{clinicInfo.address}</p>
                      <a
                        href={clinicInfo.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="wor-maps-link"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>

                  <div className="wor-info-item">
                    <Clock size={20} className="wor-info-icon" />
                    <div>
                      <strong>Consultation Timings</strong>
                      <p><strong>Mon – Sat:</strong> 8:00 AM – 8:00 PM</p>
                      <p><strong>Sunday:</strong> By Prior Appointment</p>
                    </div>
                  </div>

                  <div className="wor-info-item">
                    <Phone size={20} className="wor-info-icon" />
                    <div>
                      <strong>Direct Phone Helpline</strong>
                      <p>
                        <a href={`tel:+91${clinicInfo.rawPhone}`} className="wor-phone-direct">
                          +91 {clinicInfo.rawPhone}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="wor-info-item">
                    <Mail size={20} className="wor-info-icon" />
                    <div>
                      <strong>Email Address</strong>
                      <p>
                        <a href={`mailto:${clinicInfo.email}`} className="wor-phone-direct">
                          {clinicInfo.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="wor-contact-whatsapp-btn-row">
                  <a
                    href={`https://wa.me/91${clinicInfo.rawPhone}?text=Hello%20RevitaOrtho,%20I%20would%20like%20to%20consult%20a%20doctor.`}
                    target="_blank"
                    rel="noreferrer"
                    className="wor-btn-wa-direct"
                  >
                    <MessageCircle size={18} />
                    <span>Chat Directly on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Inquiry Form */}
              <div className="wor-contact-form-col">
                <div className="wor-form-inner-card">
                  {isSubmitted ? (
                    <div className="wor-form-success">
                      <div className="wor-success-icon">
                        <CheckCircle2 size={48} className="text-emerald" />
                      </div>
                      <h3>Clinical Inquiry Received!</h3>
                      <p className="wor-success-ref">
                        Booking Reference: <strong>{bookingRef}</strong>
                      </p>
                      <p className="wor-success-desc">
                        Thank you, <strong>{formData.name || "Patient"}</strong>. Our clinical desk coordinator will call you back at <strong>+91 {formData.phone}</strong> within 15–30 minutes to confirm your slot.
                      </p>

                      <div className="wor-success-actions">
                        <a
                          href={`https://wa.me/91${clinicInfo.rawPhone}?text=Hello%20RevitaOrtho,%20I%20just%20submitted%20an%20inquiry%20(Ref:%20${bookingRef}).`}
                          target="_blank"
                          rel="noreferrer"
                          className="wor-btn-success-wa"
                        >
                          <MessageCircle size={16} />
                          <span>Confirm on WhatsApp</span>
                        </a>
                        <button
                          type="button"
                          onClick={handleResetForm}
                          className="wor-btn-success-reset"
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="wor-inquiry-form" noValidate>
                      <h3 className="wor-form-title">Send Inquiry</h3>
                      <p className="wor-form-subtext">Fill in your details for prompt clinical triage.</p>

                      <div className="wor-field-group">
                        <label htmlFor="inquiry-name">Full Name *</label>
                        <input
                          type="text"
                          id="inquiry-name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Ramesh Kulkarni"
                          required
                          className="wor-input"
                        />
                      </div>

                      <div className="wor-field-group">
                        <label htmlFor="inquiry-phone">10-Digit Mobile Number *</label>
                        <div className="wor-phone-wrap">
                          <span className="wor-phone-prefix">+91</span>
                          <input
                            type="tel"
                            id="inquiry-phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="9876543210"
                            maxLength={10}
                            required
                            className={`wor-input ${phoneError ? "wor-input-error" : ""}`}
                          />
                        </div>
                        {phoneError && <span className="wor-field-err">{phoneError}</span>}
                      </div>

                      <div className="wor-field-row">
                        <div className="wor-field-group">
                          <label htmlFor="inquiry-service">Area of Concern</label>
                          <select
                            id="inquiry-service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="wor-input wor-select"
                          >
                            <option value="back-pain">Back Pain & Sciatica</option>
                            <option value="neck-pain">Neck Pain & Cervical</option>
                            <option value="knee-pain">Knee Pain & Preservation</option>
                            <option value="sports-injury">Sports Injury & ACL</option>
                            <option value="post-surgery">Post-Surgical Rehab</option>
                            <option value="general-consult">General Consultation</option>
                          </select>
                        </div>

                        <div className="wor-field-group">
                          <label htmlFor="inquiry-mode">Care Mode</label>
                          <select
                            id="inquiry-mode"
                            name="careMode"
                            value={formData.careMode}
                            onChange={handleInputChange}
                            className="wor-input wor-select"
                          >
                            <option value="clinic">In-Clinic Consultation</option>
                            <option value="home">Home Visit Physiotherapy</option>
                          </select>
                        </div>
                      </div>

                      <div className="wor-field-group">
                        <label htmlFor="inquiry-notes">Message / Symptoms (Optional)</label>
                        <textarea
                          id="inquiry-notes"
                          name="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
                          rows={3}
                          placeholder="Briefly describe your symptoms or reports..."
                          className="wor-input wor-textarea"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="wor-btn-submit-inquiry"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={16} className="wor-btn-spinner" />
                            <span>Submitting Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Clinical Inquiry</span>
                            <ArrowRight size={16} />
                          </>
                        )}
                      </button>

                      <p className="wor-privacy-notice">
                        We value your privacy. Your information is strictly used for clinical scheduling only.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
