import { Link } from "react-router-dom";
import { ChevronRight, Calendar } from "lucide-react";
import { ALL_FACILITIES } from "../data/facilitiesData";
import "./FacilitiesPage.css";

export default function FacilitiesPage() {
  return (
    <main className="wor-facilities-page">
      {/* ─── 1. SUBPAGE HERO ─── */}
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

      {/* ─── 2. FACILITIES GRID ─── */}
      <section className="wor-facilities-grid-section">
        <div className="wor-container">
          <div className="wor-facilities-cards-grid">
            {ALL_FACILITIES.map((facility) => (
              <div key={facility.id} className="wor-facility-card">
                <Link to={`/facilities/${facility.id}`} className="wor-facility-thumb-wrap">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="wor-facility-thumb"
                    loading="lazy"
                  />
                  <span className="wor-facility-badge">{facility.badge}</span>
                </Link>

                <div className="wor-facility-body">
                  <h3 className="wor-facility-title">
                    <Link to={`/facilities/${facility.id}`} className="wor-facility-title-link">
                      {facility.title}
                    </Link>
                  </h3>

                  <p className="wor-facility-subtitle">{facility.subtitle}</p>
                  <p className="wor-facility-desc">{facility.desc}</p>

                  <div className="wor-facility-action">
                    <Link to={`/facilities/${facility.id}`} className="wor-facility-details-btn">
                      <span>View Details</span>
                      <ChevronRight size={15} />
                    </Link>
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
    </main>
  );
}
