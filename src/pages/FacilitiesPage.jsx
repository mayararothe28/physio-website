import { useState, useEffect } from "react";
import { Link, useSearchParams, useParams } from "react-router-dom";
import {
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calendar,
  MessageCircle,
  Activity,
  Layers,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { CLINIC_FACILITIES } from "../data/facilitiesData";
import "./FacilitiesPage.css";

export default function FacilitiesPage() {
  const [searchParams] = useSearchParams();
  const { facilityId } = useParams();

  // Selected facility: check url param or query param, default to first
  const initialId =
    facilityId ||
    searchParams.get("id") ||
    searchParams.get("facility") ||
    CLINIC_FACILITIES[0].id;

  const [selectedFacilityId, setSelectedFacilityId] = useState(initialId);

  useEffect(() => {
    const targetId = facilityId || searchParams.get("id") || searchParams.get("facility");
    if (targetId) {
      const match = CLINIC_FACILITIES.find(
        (f) =>
          f.id === targetId ||
          f.slug === targetId ||
          (f.aliases && f.aliases.includes(targetId))
      );
      if (match) {
        setSelectedFacilityId(match.id);
      }
    }
  }, [facilityId, searchParams]);

  const activeFacility =
    CLINIC_FACILITIES.find((f) => f.id === selectedFacilityId) ||
    CLINIC_FACILITIES[0];

  function handleSelectFacility(id) {
    setSelectedFacilityId(id);
    const detailEl = document.getElementById("facility-detail-view");
    if (detailEl) {
      detailEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <main className="facilities-page">
      {/* ─── 1. HERO BANNER ─── */}
      <section className="subpage-hero-banner">
        <div className="subpage-hero-content">
          <span className="subpage-kicker">
            <Building2 size={14} /> CERTIFIED REHABILITATION SUITES
          </span>
          <h1 className="subpage-title">
            Clinic Facilities &
            <br />
            <span className="text-highlight">Advanced Treatment Suites</span>
          </h1>
          <p className="subpage-lead">
            Take a look inside our modern European rehabilitation center in Baner, Pune.
            Equipped with computerized decompression, high-power Class-IV lasers, and private sanitized 1-on-1 suites.
          </p>
        </div>
      </section>

      {/* ─── 2. FACILITY CARDS GRID ─── */}
      <section className="facilities-grid-section section-padding">
        <div className="facilities-container">
          <div className="facilities-section-head">
            <span className="facilities-section-kicker">OUR CLINICAL SUITES</span>
            <h2 className="facilities-section-title">Select a Facility to View Details & Treatment Steps</h2>
            <p className="facilities-section-desc">
              Click &quot;View Details&quot; on any facility below to explore its specialized equipment, clinical scope, and step-by-step treatment procedure.
            </p>
          </div>

          <div className="facilities-cards-grid">
            {CLINIC_FACILITIES.map((facility) => {
              const isCurrent = facility.id === activeFacility.id;
              return (
                <div
                  key={facility.id}
                  className={`facility-card ${isCurrent ? "is-selected" : ""}`}
                  onClick={() => handleSelectFacility(facility.id)}
                >
                  <div className="facility-card-image-wrap">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="facility-card-img"
                      loading="lazy"
                    />
                    <span className="facility-badge">{facility.badge}</span>
                    {isCurrent && <span className="facility-active-badge">Active View</span>}
                  </div>

                  <div className="facility-card-body">
                    <h3 className="facility-card-title">{facility.title}</h3>
                    <p className="facility-card-sub">{facility.subtitle}</p>

                    <button
                      type="button"
                      className="btn-facility-view"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectFacility(facility.id);
                      }}
                    >
                      <span>View Details & Steps</span>
                      <ChevronRight size={15} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. DETAILED FACILITY VIEW WITH TREATMENT STEPS ─── */}
      <section className="facility-detail-section" id="facility-detail-view">
        <div className="facilities-container">
          {/* Quick Switcher Tabs */}
          <div className="facility-tabs-bar">
            {CLINIC_FACILITIES.map((facility) => (
              <button
                key={facility.id}
                type="button"
                className={`facility-tab-btn ${facility.id === activeFacility.id ? "active" : ""}`}
                onClick={() => setSelectedFacilityId(facility.id)}
              >
                <span>{facility.title}</span>
              </button>
            ))}
          </div>

          <div className="facility-detail-card">
            {/* Header / Intro */}
            <div className="facility-detail-top">
              <div className="facility-detail-info">
                <span className="facility-detail-badge">{activeFacility.badge}</span>
                <h2 className="facility-detail-title">{activeFacility.title}</h2>
                <p className="facility-detail-subtitle">{activeFacility.subtitle}</p>
                <p className="facility-detail-overview">{activeFacility.overview}</p>

                <div className="facility-bestfor-box">
                  <ShieldCheck size={18} className="text-azure" />
                  <div>
                    <strong>Best Indicated For:</strong>
                    <span> {activeFacility.bestFor}</span>
                  </div>
                </div>

                <div className="facility-key-features">
                  <h4 className="features-heading">
                    <Sparkles size={16} className="text-azure" />
                    <span>Suite Features & Technology:</span>
                  </h4>
                  <ul className="features-points-list">
                    {activeFacility.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="feature-point-item">
                        <CheckCircle2 size={16} className="text-azure feature-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="facility-detail-media">
                <img
                  src={activeFacility.image}
                  alt={activeFacility.title}
                  className="facility-main-img"
                />
                <div className="facility-media-caption">
                  <Activity size={16} className="text-azure" />
                  <span>Verified Medical-Grade Rehabilitation Facility</span>
                </div>
              </div>
            </div>

            {/* ─── TREATMENT STEPS SECTION (Small, clean steps) ─── */}
            <div className="facility-steps-section">
              <div className="steps-header">
                <div className="steps-tag">
                  <Layers size={14} />
                  <span>STEP-BY-STEP PROCEDURE</span>
                </div>
                <h3 className="steps-title">
                  Treatment Steps for {activeFacility.title}
                </h3>
                <p className="steps-subtitle">
                  Every treatment protocol follows a structured, evidence-based sequence administered directly by certified clinical specialists.
                </p>
              </div>

              <div className="treatment-steps-grid">
                {activeFacility.treatmentSteps.map((stepItem, sIdx) => (
                  <div key={sIdx} className="step-box-card">
                    <div className="step-header-row">
                      <span className="step-num-pill">{stepItem.step}</span>
                      <span className="step-connector-dot"></span>
                    </div>
                    <h4 className="step-card-title">{stepItem.title}</h4>
                    <p className="step-card-desc">{stepItem.desc}</p>
                  </div>
                ))}
              </div>

              {/* Actions row at bottom of steps */}
              <div className="facility-actions-bar">
                <Link
                  to={`/appointment?facility=${encodeURIComponent(activeFacility.id)}`}
                  className="btn-facility-book"
                >
                  <Calendar size={16} />
                  <span>Book Consultation at This Suite</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href={`https://wa.me/919145875248?text=Hello%20RevitaOrtho,%20I%20am%20inquiring%20about%20the%20${encodeURIComponent(activeFacility.title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-facility-whatsapp"
                >
                  <MessageCircle size={16} />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
