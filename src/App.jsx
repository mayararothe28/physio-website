
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/services" Component={ServicesPage} />
        <Route path="/treatments" Component={TreatmentsPage} />
        <Route path="/team" Component={TeamPage} />
        <Route path="/appointment" Component={AppointmentPage} />
        <Route path="/testimonials" Component={TestimonialsPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/faq" Component={FAQPage} />
        <Route path="/our-work" Component={OurWorkPage} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
