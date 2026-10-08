import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  TrendingUp, 
  Plus, 
  MessageSquare, 
  Calendar, 
  X, 
  Quote,
  ShieldCheck,
  Award
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { TESTIMONIALS_DATA } from '../data/physioData';

export default function TestimonialsPage({ setActivePage }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [reviewsList, setReviewsList] = useState(TESTIMONIALS_DATA);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    condition: 'Back & Spine Care',
    rating: 5,
    review: '',
    location: ''
  });

  const filters = ['All', 'Back & Spine Care', 'Sports & ACL', 'Knee & Joint', 'Frozen Shoulder'];

  const filteredReviews = selectedFilter === 'All'
    ? reviewsList
    : reviewsList.filter((r) => r.condition.toLowerCase().includes(selectedFilter.toLowerCase().split(' ')[0]));

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.review) return;

    const added = {
      id: `test-${Date.now()}`,
      name: newReview.name,
      age: "Patient",
      role: newReview.role || "Verified Patient",
      condition: newReview.condition,
      rating: newReview.rating,
      review: newReview.review,
      recoveryTime: "Verified Recovery",
      verified: true,
      location: newReview.location || "Delhi NCR"
    };

    setReviewsList([added, ...reviewsList]);
    setShowSubmitModal(false);
    setNewReview({ name: '', role: '', condition: 'Back & Spine Care', rating: 5, review: '', location: '' });
  };

  return (
    <div className="testimonials-page-container page-transition">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="section-badge">PATIENT EXPERIENCES</span>
          <h1 className="page-header-title">Stories of Recovery & Renewed Mobility</h1>
          <p className="page-header-subtitle">
            Every recovery is a life restored. Discover how our patients returned to pain-free mornings, 
            running marathons, and lifting their grandchildren.
          </p>
        </div>
      </section>

      {/* Trust Rating Summary Strip */}
      <section className="rating-summary-strip">
        <div className="container">
          <div className="rating-summary-card glass-panel">
            <div className="rsc-score-col">
              <span className="rsc-big-score">4.98</span>
              <div className="rsc-stars-box">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-amber-500 fill-amber-500" />
                ))}
              </div>
              <span className="rsc-count-text">Based on 2,400+ verified clinic ratings</span>
            </div>

            <div className="rsc-divider" />

            <div className="rsc-badges-col">
              <div className="rsc-badge-item">
                <ShieldCheck size={20} className="text-teal-600" />
                <span>100% Genuine Patient Reviews</span>
              </div>
              <div className="rsc-badge-item">
                <Award size={20} className="text-teal-600" />
                <span>Top-Rated Delhi NCR Physiotherapy Clinic</span>
              </div>
            </div>

            <div className="rsc-cta-col">
              <button 
                onClick={() => setShowSubmitModal(true)} 
                className="btn-secondary"
              >
                <Plus size={16} />
                <span>Share Your Story</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="testimonials-catalog-section">
        <div className="container">
          {/* Reviews Grid */}
          <div className="testimonials-full-grid">
            {filteredReviews.map((item, idx) => (
              <ScrollReveal key={item.id} delay={idx * 80} className="testimonial-card-wrap">
                <div className="testimonial-card interactive-card glass-panel h-full">
                  <div className="test-card-top-row">
                    <div className="test-stars-row">
                      {[...Array(item.rating)].map((_, sIdx) => (
                        <Star key={sIdx} size={15} className="text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                    {item.verified && (
                      <span className="test-verified-badge">
                        <CheckCircle2 size={13} className="text-emerald-500" /> Verified
                      </span>
                    )}
                  </div>

                  <p className="test-review-quote">"{item.review}"</p>

                  <div className="test-recovery-tag">
                    <TrendingUp size={14} className="text-teal-600" />
                    <span>{item.recoveryTime}</span>
                  </div>

                  <div className="test-author-row mt-auto">
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

          <div className="text-center mt-12">
            <button 
              onClick={() => {
                setActivePage('appointment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              <Calendar size={18} />
              <span>Begin Your Own Recovery Story Today</span>
            </button>
          </div>
        </div>
      </section>

      {/* Submit Review Modal */}
      {showSubmitModal && (
        <div className="modal-backdrop" onClick={() => setShowSubmitModal(false)}>
          <div className="review-modal-card glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowSubmitModal(false)}>
              <X size={20} />
            </button>

            <h3 className="modal-title">Share Your Recovery Experience</h3>
            <p className="modal-subtitle">Your story inspires other patients fighting similar chronic pain.</p>

            <form onSubmit={handleSubmitReview} className="review-form mt-4">
              <div className="form-group mb-3">
                <label className="field-label">Your Name</label>
                <input
                  type="text"
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  placeholder="e.g. Priya Saxena"
                  className="form-input"
                />
              </div>

              <div className="form-group mb-3">
                <label className="field-label">Profession / Location</label>
                <input
                  type="text"
                  value={newReview.role}
                  onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                  placeholder="e.g. Marathoner, Delhi"
                  className="form-input"
                />
              </div>

              <div className="form-group mb-3">
                <label className="field-label">Condition Treated</label>
                <input
                  type="text"
                  value={newReview.condition}
                  onChange={(e) => setNewReview({ ...newReview, condition: e.target.value })}
                  placeholder="e.g. Sciatica Disc Bulge"
                  className="form-input"
                />
              </div>

              <div className="form-group mb-3">
                <label className="field-label">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="star-rate-btn"
                    >
                      <Star
                        size={22}
                        className={star <= newReview.rating ? "text-amber-500 fill-amber-500" : "text-slate-300"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group mb-4">
                <label className="field-label">Your Feedback / Review</label>
                <textarea
                  rows="3"
                  required
                  value={newReview.review}
                  onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                  placeholder="How did the physiotherapy treatment help your pain and mobility?"
                  className="form-input form-textarea"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
