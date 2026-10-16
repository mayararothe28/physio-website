export const CLINIC_FACILITIES = [
  {
    id: "spinal-decompression",
    slug: "spinal-decompression",
    aliases: ["suite-1", "decompression", "spine"],
    title: "Motorized Spinal Decompression Lab",
    subtitle: "Computer-calibrated disc distraction technology",
    badge: "Spine Care",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    overview:
      "A specialized non-surgical spine distraction suite equipped with computer-calibrated motorized decompression systems. Designed to create gentle, logarithmic tension cycles that produce negative intradiscal pressure (-150 to -200 mmHg), enabling herniated or bulging disc material to retract naturally away from compressed nerves.",
    bestFor: "L4-L5, L5-S1 disc bulges, Sciatica, Cervical spondylosis, and patients advised microdiscectomy.",
    keyFeatures: [
      "Precision sensor-calibrated logarithmic pulling force without muscle spasm triggering",
      "Real-time biofeedback monitoring of lumbar and cervical distraction angles",
      "Negative intradiscal pressure vacuum mechanism to promote fluid and nutrient imbibition",
      "Ergonomic cervical and lumbar motorized therapy tables with memory foam stabilization",
    ],
    treatmentSteps: [
      {
        step: "Step 01",
        title: "Biomechanical Assessment & Spine Mapping",
        desc: "Orthopedic spine evaluation and MRI scan analysis to identify the exact disc level and calculate distraction angles.",
      },
      {
        step: "Step 02",
        title: "Positioning & Harness Stabilization",
        desc: "Secure, comfortable patient positioning on the motorized table with pelvic and upper thoracic stabilization harnesses.",
      },
      {
        step: "Step 03",
        title: "Computerized Logarithmic Distraction",
        desc: "20–25 minute computer-controlled cycle of gentle tension and relaxation creating a negative vacuum inside the disc.",
      },
      {
        step: "Step 04",
        title: "Post-Decompression Cryo-Rest",
        desc: "Application of localized cold compression and passive positioning to seal disc hydration and prevent muscle soreness.",
      },
      {
        step: "Step 05",
        title: "Deep Core Stabilization Retraining",
        desc: "Guided McKenzie extension protocols and transverse abdominis activation to lock in disc retraction benefits.",
      },
    ],
  },
  {
    id: "consultation-suites",
    slug: "consultation-suites",
    aliases: ["suite-2", "consultation", "1-on-1"],
    title: "Private Sanitized Consultation Suites",
    subtitle: "Dedicated 1-on-1 therapist assessment rooms",
    badge: "1-on-1 Care",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    overview:
      "Completely private, acoustically isolated, and hospital-grade sanitized consultation rooms designed for uninterrupted 45-minute clinical assessments. Every patient receives dedicated 1-on-1 attention from a senior clinical specialist without background noise, rushed visits, or shared curtains.",
    bestFor: "Comprehensive initial diagnostics, detailed MRI/scan explanations, second opinions, and progress milestone reviews.",
    keyFeatures: [
      "Zero noise distraction and 100% patient clinical privacy",
      "Medical-grade air filtration and multi-surface UV-C sanitization between every patient",
      "Orthopedic goniometry, joint measurement tools, and anatomical demonstration models",
      "Wall-mounted digital report review monitors for transparent patient understanding",
    ],
    treatmentSteps: [
      {
        step: "Step 01",
        title: "Clinical History & Lifestyle Audit",
        desc: "In-depth review of pain history, onset triggers, posture habits, work environment, and daily limitations.",
      },
      {
        step: "Step 02",
        title: "Scans Review in Plain English",
        desc: "Transparent examination of your MRI, X-ray, or ultrasound scans without confusing medical jargon.",
      },
      {
        step: "Step 03",
        title: "Orthopedic Provocation Testing",
        desc: "Targeted physical tests assessing joint mobility, neural tension, muscle strength, and kinetic imbalances.",
      },
      {
        step: "Step 04",
        title: "Root-Cause Anatomical Explanation",
        desc: "Visual walkthrough using realistic joint and spine models showing exactly why and where pain originates.",
      },
      {
        step: "Step 05",
        title: "Milestone Recovery Roadmap",
        desc: "Formulation of a customized session-by-session recovery plan with clear expected outcome timelines.",
      },
    ],
  },
  {
    id: "laser-electrotherapy",
    slug: "laser-electrotherapy",
    aliases: ["suite-3", "laser", "electrotherapy"],
    title: "Class-IV Laser & Electrotherapy Bay",
    subtitle: "Deep cellular healing and acute pain relief",
    badge: "Advanced Modalities",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
    overview:
      "A high-tech modalities bay featuring dual-wavelength Class-IV medical photobiomodulation lasers and multi-channel electroceutical systems. Delivers concentrated photon energy up to 10cm into dense muscles, ligaments, and joint capsules to halt acute inflammation and stimulate rapid ATP cellular regeneration.",
    bestFor: "Acute sports sprains, Achilles/rotator cuff tendinopathy, severe nerve root inflammation, and stubborn joint arthritis.",
    keyFeatures: [
      "High-power dual-wavelength Class-IV infrared laser for deep tissue biostimulation",
      "Interferential, TENS, and microcurrent electrotherapy channels for immediate pain gate blocking",
      "Painless, non-thermal, non-invasive therapeutic application with zero downtime",
      "3x accelerated cellular ATP synthesis and collagen matrix re-alignment",
    ],
    treatmentSteps: [
      {
        step: "Step 01",
        title: "Tissue Localization & Dosimetry",
        desc: "Precise palpatory isolation of inflamed tendons or nerve roots and calibration of laser joule dosage.",
      },
      {
        step: "Step 02",
        title: "Certified Eye Safety Protocol",
        desc: "Fitting of medical-grade wavelength filtering protective glasses for both patient and clinician.",
      },
      {
        step: "Step 03",
        title: "Targeted Photobiomodulation",
        desc: "Smooth continuous scanning delivery of infrared photons directly into deep cellular structures (8–12 mins).",
      },
      {
        step: "Step 04",
        title: "Electro-Analgesia Stimulation",
        desc: "Application of interferential or microcurrent pads to deactivate local pain receptors and relax spasm.",
      },
      {
        step: "Step 05",
        title: "Mobility & Pain Score Check",
        desc: "Immediate re-assessment of joint range-of-motion and subjective pain reduction post-session.",
      },
    ],
  },
  {
    id: "rehab-gym",
    slug: "rehab-gym",
    aliases: ["suite-4", "gym", "rehab"],
    title: "Active Functional Rehabilitation Gym",
    subtitle: "Kinetic chain alignment and athletic retraining",
    badge: "Mobility & Strength",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80",
    overview:
      "A spacious, medical-grade active exercise gymnasium designed to transition patients from passive pain relief to full functional strength and athletic agility. Features specialized pneumatic resistance machines, wobble boards, cable pulleys, and posture correction mirrors under constant 1-on-1 therapist supervision.",
    bestFor: "Post-operative knee/hip rehab (TKR/ACL), sports injury return-to-play, postural correction, and chronic joint stabilization.",
    keyFeatures: [
      "Medical-grade pneumatic resistance and variable cable pulley systems for safe joint loading",
      "Proprioceptive wobble boards, BOSU trainers, and perturbation agility platforms",
      "Full-length kinetic alignment mirrors and video motion form verification",
      "100% 1-on-1 supervision by certified sports and orthopedic physical therapists",
    ],
    treatmentSteps: [
      {
        step: "Step 01",
        title: "Dynamic Joint Mobilization",
        desc: "Gentle low-impact range-of-motion drills and joint capsules warm-up to prepare tissues for movement.",
      },
      {
        step: "Step 02",
        title: "Stabilizer Muscle Activation",
        desc: "Targeted activation of dormant stabilizer muscles (gluteus medius, rotator cuff, scapular retractors).",
      },
      {
        step: "Step 03",
        title: "Progressive Controlled Loading",
        desc: "Safe eccentric resistance training tailored to the exact healing capacity of your injured tendon or joint.",
      },
      {
        step: "Step 04",
        title: "Proprioception & Balance Drills",
        desc: "Unstable surface training to sharpen neuromuscular reflex speeds and eliminate recurring injury risk.",
      },
      {
        step: "Step 05",
        title: "Cool-Down & Video Home Prescription",
        desc: "Targeted stretching plus assignment of personalized HD home exercise videos via our patient portal.",
      },
    ],
  },
];
