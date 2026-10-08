import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TreatmentsPage from './pages/TreatmentsPage';
import TeamPage from './pages/TeamPage';
import AppointmentPage from './pages/AppointmentPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import OurWorkPage from './pages/OurWorkPage';
import DoctorModal from './components/DoctorModal';
import { CLINIC_INFO } from './data/physioData';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [modalDoctor, setModalDoctor] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync with browser hash / history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'about', 'services', 'treatments', 'work', 'team', 'appointment', 'testimonials', 'contact', 'faq'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync scroll top indicator
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changePage = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForBooking = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  const handleSelectDoctorForBooking = (doctorObj) => {
    setSelectedDoctor(doctorObj);
  };

  const handleViewDoctorProfile = (doctorObj) => {
    setModalDoctor(doctorObj);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      {/* Navbar with smooth transition */}
      <Navbar activePage={activePage} setActivePage={changePage} />

      {/* Main Multi-page Dynamic Router */}
      <main className="main-content-flow">
        {activePage === 'home' && (
          <HomePage
            setActivePage={changePage}
            onSelectDoctor={handleViewDoctorProfile}
            onSelectService={handleSelectServiceForBooking}
          />
        )}

        {activePage === 'about' && (
          <AboutPage setActivePage={changePage} />
        )}

        {activePage === 'services' && (
          <ServicesPage
            setActivePage={changePage}
            onSelectService={handleSelectServiceForBooking}
          />
        )}

        {activePage === 'treatments' && (
          <TreatmentsPage
            setActivePage={changePage}
            onSelectService={handleSelectServiceForBooking}
          />
        )}

        {activePage === 'work' && (
          <OurWorkPage
            setActivePage={changePage}
            onSelectService={handleSelectServiceForBooking}
          />
        )}

        {activePage === 'team' && (
          <TeamPage
            setActivePage={changePage}
            onSelectDoctor={(doc) => {
              setSelectedDoctor(doc);
              changePage('appointment');
            }}
          />
        )}

        {activePage === 'appointment' && (
          <AppointmentPage
            preselectedService={selectedService}
            preselectedDoctor={selectedDoctor}
          />
        )}

        {activePage === 'testimonials' && (
          <TestimonialsPage setActivePage={changePage} />
        )}

        {activePage === 'contact' && (
          <ContactPage setActivePage={changePage} />
        )}

        {activePage === 'faq' && (
          <FAQPage setActivePage={changePage} />
        )}
      </main>

      {/* Global Doctor Profile Modal */}
      {modalDoctor && (
        <DoctorModal
          doctor={modalDoctor}
          onClose={() => setModalDoctor(null)}
          onBookDoctor={(doc) => {
            setSelectedDoctor(doc);
            setModalDoctor(null);
            changePage('appointment');
          }}
        />
      )}

      {/* Floating Action Buttons (WhatsApp & Quick Call & Scroll to Top) */}
      <div className="floating-widgets-stack">
        {showScrollTop && (
          <button 
            onClick={scrollToTop} 
            className="fab-btn fab-scroll"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        )}

        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="fab-btn fab-phone"
          aria-label="Call clinic directly"
          title={`Call 10-digit number ${CLINIC_INFO.phone}`}
        >
          <Phone size={20} />
        </a>

        <a
          href={`https://wa.me/91${CLINIC_INFO.whatsapp}?text=Hello%20RevitaPhysio%20Care,%20I%20would%20like%20to%20consult%20a%20physiotherapist.`}
          target="_blank"
          rel="noreferrer"
          className="fab-btn fab-whatsapp pulse-glow"
          aria-label="Chat on WhatsApp"
          title={`Chat on WhatsApp (${CLINIC_INFO.whatsapp})`}
        >
          <MessageCircle size={22} />
        </a>
      </div>

      {/* Comprehensive Footer */}
      <Footer setActivePage={changePage} />
    </div>
  );
}
