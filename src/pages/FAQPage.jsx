import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  Calendar, 
  Phone, 
  MessageCircle,
  FileQuestion
} from 'lucide-react';
import { FAQS_DATA, CLINIC_INFO } from '../data/physioData';

export default function FAQPage({ setActivePage }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedIndex, setExpandedIndex] = useState(0);

  const categories = [
    'All',
    'Appointments & Visits',
    'Treatments & Pain',
    'Home Care & Emergency',
    'Payments & Insurance',
    'Preparation'
  ];

  const filteredFaqs = FAQS_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (idx) => {
    setExpandedIndex(expandedIndex === idx ? -1 : idx);
  };

  return (
    <div className="faq-page-container page-transition">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container text-center">
          <span className="section-badge">FREQUENTLY ASKED QUESTIONS</span>
          <h1 className="page-header-title">Common Patient Questions Answered</h1>
          <p className="page-header-subtitle">
            Find immediate clarity on what to expect, session durations, rehabilitation techniques, 
            insurance reimbursements, and home visit facilities.
          </p>
        </div>
      </section>

      {/* Main FAQ List Section */}
      <section className="faq-content-section">
        <div className="container">
          {/* Search Bar */}
          <div className="faq-search-wrapper mb-8">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by topic, e.g. 'surgery', 'pain', 'insurance', 'home visit'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-input"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="faq-clear-btn">
                Clear
              </button>
            )}
          </div>
          {/* Category Filter Pills */}
          <div className="filter-pills-bar justify-center mb-8">
            <div className="pills-scroll-row">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`category-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion Questions */}
          <div className="faq-accordion-list">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = expandedIndex === idx;
                return (
                  <div key={idx} className={`faq-item glass-panel ${isOpen ? 'open' : ''}`}>
                    <button
                      className="faq-question-btn"
                      onClick={() => toggleAccordion(idx)}
                      aria-expanded={isOpen}
                    >
                      <div className="faq-q-left">
                        <span className="faq-cat-badge">{faq.category}</span>
                        <h3 className="faq-q-text">{faq.question}</h3>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`faq-arrow-icon ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isOpen && (
                      <div className="faq-answer-pane">
                        <p className="faq-answer-text">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="no-faqs-state text-center py-12 glass-panel">
                <FileQuestion size={44} className="text-slate-400 mx-auto mb-3" />
                <h4 className="font-bold text-lg text-slate-700">No matching questions found</h4>
                <p className="text-sm text-slate-500 mt-1">
                  Try adjusting your search query or connect with our doctors directly on WhatsApp.
                </p>
              </div>
            )}
          </div>

          {/* Bottom Still Have Questions Card */}
          <div className="faq-help-card glass-panel mt-12">
            <div className="fhc-content">
              <h3 className="fhc-title">Have a specific medical question not listed here?</h3>
              <p className="fhc-desc">
                Our senior physiotherapists are happy to review your condition or imaging reports 
                and give you clinical guidance.
              </p>
            </div>
            <div className="fhc-actions">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20RevitaPhysio,%20I%20have%20a%20question%20about%20my%20treatment`}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <MessageCircle size={16} />
                <span>Ask on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setActivePage('appointment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                <Calendar size={16} />
                <span>Book Biomechanical Exam</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
