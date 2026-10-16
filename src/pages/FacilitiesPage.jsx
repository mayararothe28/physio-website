import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ChevronRight,
  Calendar,
  CheckCircle2,
  X,
  Layers,
} from "lucide-react";
import { ALL_FACILITIES } from "../data/facilitiesData";
import "./FacilitiesPage.css";

export default function FacilitiesPage() {
  const [searchParams] = useSearchParams();
  const [selectedFacility, setSelectedFacility] = useState(null);

  // Check if a facility was specified in query param (e.g. /facilities?facility=spinal-decompression)
  useEffect(() => {
    const facilityParam = searchParams.get("facility");
    if (facilityParam) {
      const match = ALL_FACILITIES.find((f) => f.id === facilityParam);
      if (match) {
        setSelectedFacility(match);
      }
    }
  }, [searchParams]);

  // Handle escape key to close modal
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setSelectedFacility(null);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="wor-facilities-page">
      {/* ─── 1. STANDARDIZED CLEAN SUBPAGE HERO ─── */}
      <section className="wor-subpage-hero">
        <div className="wor-container">
          <div className="wor-section-tag-line center-tag">
            <span className="wor-divider-line"></span>
            <span className="wor-section-kicker">OUR INFRASTRUCTURE</span>
            <span className="wor-divider-line"></span>
          </div>

          <h1 className="wor-subpage-title">Clinic Facilities & Treatment Suites</h1>
          <p className="wor-subpage-subtitle">
            Explore our European-standard rehabilitation suites, computerized decompression labs, and hygienic treatment rooms designed for patient dignity and rapid recovery in Baner, Pune.
          </p>

        </div>
      </section>

      {/* ─── 3. 8 FACILITIES GRID ─── */}
      <section className="wor-facilities-grid-section">
        <div className="wor-container">
          <div className="wor-facilities-cards-grid">
            {ALL_FACILITIES.map((facility) => (
              <div key={facility.id} className="wor-facility-card">
                <div
                  className="wor-facility-thumb-wrap"
                  onClick={() => setSelectedFacility(facility)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${facility.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedFacility(facility);
                    }
                  }}
                >
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="wor-facility-thumb"
                    loading="lazy"
                  />
                  <span className="wor-facility-badge">{facility.badge}</span>
                </div>

                <div className="wor-facility-body">
                  <h3 className="wor-facility-title">
                    <button
                      type="button"
                      className="wor-facility-title-btn"
                      onClick={() => setSelectedFacility(facility)}
                    >
                      {facility.title}
                    </button>
                  </h3>

                  <p className="wor-facility-subtitle">{facility.subtitle}</p>
                  <p className="wor-facility-desc">{facility.desc}</p>

                  {/* 3 Key Highlights with clean checkmarks */}
                  <ul className="wor-facility-highlights">
                    {facility.highlights.map((point, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={15} className="wor-check-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons: View Details + Book Appointment Side-by-Side */}
                  <div className="wor-facility-action">
                    <button
                      type="button"
                      className="wor-facility-details-btn"
                      onClick={() => setSelectedFacility(facility)}
                    >
                      <span>View Details</span>
                      <ChevronRight size={15} />
                    </button>
                    <Link
                      to={`/appointment?facility=${facility.id}`}
                      className="wor-facility-book-btn"
                    >
                      <Calendar size={14} />
                      <span>Book Appointment</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. MODAL: FULL FACILITY DETAILS POPUP ─── */}
      {selectedFacility && (
        <div
          className="wor-modal-overlay"
          onClick={() => setSelectedFacility(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="wor-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="wor-modal-close"
              onClick={() => setSelectedFacility(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="wor-modal-header">
              <span className="wor-modal-badge">{selectedFacility.badge}</span>
              <h2 className="wor-modal-title">{selectedFacility.title}</h2>
              <p className="wor-modal-subtitle">{selectedFacility.subtitle}</p>
            </div>

            <div className="wor-modal-media">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.title}
                className="wor-modal-img"
              />
            </div>

            <div className="wor-modal-body">
              <div className="wor-modal-section">
                <h4>Clinical Purpose & Technology</h4>
                <p>{selectedFacility.fullDesc}</p>
              </div>

              {selectedFacility.keyEquipment && (
                <div className="wor-modal-section">
                  <h4>Key Medical Infrastructure & Equipment</h4>
                  <ul className="wor-modal-list">
                    {selectedFacility.keyEquipment.map((eq, i) => (
                      <li key={i}>
                        <Layers size={15} className="wor-modal-icon" />
                        <span>{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedFacility.conditions && (
                <div className="wor-modal-section">
                  <h4>Target Conditions & Indications</h4>
                  <div className="wor-modal-tags">
                    {selectedFacility.conditions.map((cond, i) => (
                      <span key={i} className="wor-modal-tag">
                        {cond}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="wor-modal-footer">
              <button
                type="button"
                className="wor-modal-back-btn"
                onClick={() => setSelectedFacility(null)}
              >
                Close
              </button>
              <Link
                to={`/appointment?facility=${selectedFacility.id}`}
                className="wor-modal-book-btn"
                onClick={() => setSelectedFacility(null)}
              >
                <Calendar size={16} />
                <span>Book Appointment in this Suite</span>
              </Link>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
