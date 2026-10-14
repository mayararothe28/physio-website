import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Phone,
  MessageCircle,
  Share2,
  BookOpen,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { BLOG_POSTS_DATA } from "../data/blogData";
import "./BlogDetailPage.css";

export default function BlogDetailPage() {
  const { slug } = useParams();

  // Normalize slug or default to first post
  const resolvedSlug = slug && BLOG_POSTS_DATA[slug] ? slug : "back-pain-stretches";
  const post = BLOG_POSTS_DATA[resolvedSlug];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [resolvedSlug]);

  const allPosts = Object.values(BLOG_POSTS_DATA);
  const otherPosts = allPosts.filter((p) => p.id !== post.id);

  return (
    <main className="blog-article-page">
      {/* ─── Breadcrumb Bar ─── */}
      <div className="article-breadcrumb-bar">
        <div className="article-container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={13} />
            <Link to="/#blog">Health Articles</Link>
            <ChevronRight size={13} />
            <span className="current-crumb">{post.category}</span>
          </nav>
        </div>
      </div>

      {/* ─── Article Header Banner ─── */}
      <header className="article-header-section">
        <div className="article-container">
          <div className="article-badge-row">
            <span className="article-cat-badge">{post.category}</span>
            <span className="article-read-time">
              <Clock size={13} /> {post.readTime}
            </span>
          </div>

          <h1 className="article-main-title">{post.title}</h1>

          {/* Author Doctor Card */}
          <div className="article-author-card">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="author-avatar-img"
            />
            <div className="author-text-info">
              <strong className="author-name">{post.author.name}</strong>
              <span className="author-credentials">
                {post.author.role} • {post.author.qualifications}
              </span>
              <span className="article-publish-date">
                Published on {post.date} • Medically Reviewed
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Featured Hero Image ─── */}
      <div className="article-hero-media">
        <div className="article-container">
          <div className="article-image-frame">
            <img src={post.image} alt={post.title} className="article-cover-img" />
          </div>
        </div>
      </div>

      {/* ─── Main Article Content ─── */}
      <section className="article-body-section">
        <div className="article-container article-layout-grid">
          {/* Main Reading Column */}
          <article className="article-content-column">
            {/* Lead Intro Box */}
            <div className="article-intro-box">
              <p className="article-intro-text">{post.intro}</p>
            </div>

            {/* Step-by-Step Stretches / Protocols */}
            <div className="article-steps-section">
              <h2 className="steps-section-title">
                <BookOpen size={22} className="text-primary-blue" />
                <span>Doctor-Prescribed Routine & Guidance</span>
              </h2>

              <div className="stretches-list-stack">
                {post.stretches.map((s) => (
                  <div key={s.num} className="stretch-item-card">
                    <div className="stretch-header-row">
                      <span className="stretch-step-num">{s.num}</span>
                      <h3 className="stretch-name">{s.name}</h3>
                    </div>

                    <div className="stretch-body-details">
                      <div className="stretch-detail-group">
                        <strong className="detail-label">How to perform:</strong>
                        <p>{s.how}</p>
                      </div>

                      <div className="stretch-specs-row">
                        <div className="spec-pill spec-reps">
                          <strong>Frequency:</strong>
                          <span>{s.reps}</span>
                        </div>
                        <div className="spec-pill spec-why">
                          <strong>Clinical Benefit:</strong>
                          <span>{s.why}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctor's Clinical Note */}
            <div className="doctor-advice-banner">
              <div className="advice-icon-wrap">
                <ShieldCheck size={28} />
              </div>
              <div className="advice-content">
                <h3>Specialist Clinical Advice</h3>
                <p>{post.doctorAdvice}</p>
              </div>
            </div>

            {/* When to Consult a Specialist */}
            <div className="when-to-consult-card">
              <div className="consult-card-header">
                <AlertCircle size={22} className="text-danger-red" />
                <h3>When Should You Seek Immediate In-Clinic Evaluation?</h3>
              </div>
              <p className="consult-lead">
                While mild discomfort responds well to regular home movement, please do not ignore the following warning signs:
              </p>
              <ul className="consult-bullets-list">
                {post.whenToConsult.map((warning, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="bullet-check text-azure" />
                    <span>{warning}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking Callout Inside Article */}
            <div className="article-booking-strip">
              <div className="strip-left">
                <h4>Experiencing persistent pain or restricted movement?</h4>
                <p>
                  Consult directly with <strong>{post.author.name}</strong> for a comprehensive 45-minute biomechanical evaluation in Pune.
                </p>
              </div>
              <div className="strip-right">
                <Link
                  to={`/appointment?service=${post.relatedService}`}
                  className="btn-article-book"
                >
                  <Calendar size={16} />
                  <span>Book 45-Min Assessment</span>
                </Link>
                <a
                  href={`https://wa.me/919145875248?text=Hello%20Dr.%20${encodeURIComponent(
                    post.author.name
                  )},%20I%20read%20your%20article%20on%20${encodeURIComponent(
                    post.title
                  )}%20and%20need%20guidance.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-article-whatsapp"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Triage</span>
                </a>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar Column */}
          <aside className="article-sidebar-column">
            <div className="sidebar-sticky-wrap">
              {/* Quick Consultation Card */}
              <div className="sidebar-booking-card">
                <span className="card-kicker">DIRECT CLINIC APPOINTMENT</span>
                <h3>Need Personalized Physical Therapy?</h3>
                <p>
                  Get direct 1-on-1 care from certified MPT doctors. No surgery, zero waiting time, and European recovery modalities.
                </p>
                <Link
                  to={`/appointment?service=${post.relatedService}`}
                  className="btn-sidebar-book"
                >
                  <Calendar size={15} />
                  <span>Schedule Appointment</span>
                </Link>
                <a href="tel:+919145875248" className="sidebar-phone-link">
                  <Phone size={14} />
                  <span>Helpline: +91 91458 75248</span>
                </a>
              </div>

              {/* Related Service Link */}
              <div className="sidebar-service-card">
                <span className="service-card-tag">RELATED MEDICAL SPECIALTY</span>
                <h4>{post.relatedServiceTitle}</h4>
                <p>Learn about our specialized non-surgical equipment and recovery timelines.</p>
                <Link to={`/services/${post.relatedService}`} className="service-card-link">
                  <span>Explore Treatment Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── Other Health Guides Section ─── */}
      <section className="article-more-guides-section">
        <div className="article-container">
          <div className="more-guides-header">
            <div>
              <span className="section-kicker">MORE MEDICAL RESOURCES</span>
              <h2>Explore Other Doctor-Written Guides</h2>
            </div>
            <Link to="/" className="btn-back-home">
              <ArrowLeft size={15} />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="more-guides-grid">
            {otherPosts.map((other) => (
              <div key={other.id} className="other-guide-card">
                <div className="other-guide-img-wrap">
                  <img src={other.image} alt={other.title} className="other-guide-img" />
                  <span className="other-guide-cat">{other.category}</span>
                </div>
                <div className="other-guide-body">
                  <span className="other-guide-date">{other.date}</span>
                  <h3 className="other-guide-title">{other.title}</h3>
                  <p className="other-guide-excerpt">{other.excerpt}</p>
                  <Link to={`/blog/${other.id}`} className="btn-read-other">
                    <span>Read Complete Guide</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
