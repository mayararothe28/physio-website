
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TreatmentsPage from "./pages/TreatmentsPage";
import TeamPage from "./pages/TeamPage";
import AppointmentPage from "./pages/AppointmentPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import OurWorkPage from "./pages/OurWorkPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import FacilityDetailPage from "./pages/FacilityDetailPage";

import "./App.css";

function ScrollAndAnimationHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    let observer;
    const timer = setTimeout(() => {
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      const elements = document.querySelectorAll(
        "main article, main [class*='-card'], main .standard-box, .scroll-reveal"
      );
      if (!elements.length) return;

      elements.forEach((element) => element.classList.add("scroll-reveal"));

      if (!("IntersectionObserver" in window)) {
        elements.forEach((element) => element.classList.add("is-visible"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "0px 0px -40px 0px",
          threshold: 0.1,
        }
      );

      elements.forEach((el) => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollAndAnimationHandler />
      <Navbar />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/services" Component={ServicesPage} />
        <Route path="/services/:serviceId" Component={ServiceDetailPage} />
        <Route path="/facilities" Component={FacilitiesPage} />
<Route path="/facilities/:facilityId" Component={FacilityDetailPage} />
<Route path="/clinic-facilities" Component={FacilitiesPage} />
        <Route path="/treatments" Component={TreatmentsPage} />
        <Route path="/treatments/:serviceId" Component={ServiceDetailPage} />
        <Route path="/team" Component={TeamPage} />
        <Route path="/appointment" Component={AppointmentPage} />
        <Route path="/testimonials" Component={TestimonialsPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/faq" Component={FAQPage} />
        <Route path="/our-work" Component={OurWorkPage} />
        <Route path="/work" Component={OurWorkPage} />
        <Route path="/blog" Component={BlogDetailPage} />
        <Route path="/blog/:slug" Component={BlogDetailPage} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
