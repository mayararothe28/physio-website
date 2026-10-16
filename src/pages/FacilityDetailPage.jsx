
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, CheckCircle2, ChevronRight, Activity, Wrench } from "lucide-react";
import { ALL_FACILITIES } from "../data/facilitiesData";
import "./FacilityDetailPage.css";

export default function FacilityDetailPage() {
  const { facilityId } = useParams();

  const facility = ALL_FACILITIES.find(
    (item) => String(item.id) === facilityId
  );

  if (!facility) {
    return (
      <main className="facility-detail-page">
        <div className="facility-detail-container facility-not-found">
          <h1>Facility Not Found</h1>
          <p>The requested facility could not be found.</p>
          <Link to="/facilities" className="facility-back-link">
            <ArrowLeft size={18} />
            Back to Facilities
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="facility-detail-page">
      <div className="facility-detail-container">
        <Link to="/facilities" className="facility-back-link">
          <ArrowLeft size={18} />
          Back to Facilities
        </Link>

        <section className="facility-detail-hero">
          <div className="facility-detail-image-wrap">
            <img
              src={facility.image}
              alt={facility.title}
              className="facility-detail-image"
            />
          </div>

          <div className="facility-detail-content">
            <span className="facility-detail-eyebrow">
              OUR INFRASTRUCTURE
            </span>

            <h1>{facility.title}</h1>
            <h2>{facility.subtitle}</h2>
            <p>{facility.fullDesc || facility.desc}</p>

            <Link
              to={`/appointment?facility=${facility.id}`}
              className="facility-detail-book-btn"
            >
              <Calendar size={18} />
              Book Appointment
              <ChevronRight size={17} />
            </Link>
          </div>
        </section>

        <section className="facility-detail-info">
          <div className="facility-detail-section-heading">
            <span>FACILITY FEATURES</span>
            <h2>Features & Highlights</h2>
            <p>
              Explore the available features of {facility.title}.
            </p>
          </div>

          <div className="facility-detail-highlights">
            {facility.highlights.map((point, index) => (
              <div className="facility-detail-highlight" key={index}>
                <CheckCircle2 size={21} />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="facility-detail-info facility-detail-resources">
          <div className="facility-detail-resource-column">
            <div className="facility-detail-list-heading">
              <Wrench size={20} />
              <h2>Key Equipment</h2>
            </div>
            <ul>
              {facility.keyEquipment.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="facility-detail-resource-column">
            <div className="facility-detail-list-heading">
              <Activity size={20} />
              <h2>Care &amp; Conditions</h2>
            </div>
            <ul>
              {facility.conditions.map((condition) => (
                <li key={condition}>{condition}</li>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </main>
  );
}