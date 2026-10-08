// Central dataset for RevitaPhysio Care Clinic

export const CLINIC_INFO = {
  name: "RevitaPhysio Care",
  tagline: "Move Better. Live Healthier.",
  subTagline: "Personalized physiotherapy care for pain relief, rehabilitation and better mobility.",
  phone: "9876543210",
  altPhone: "9876543211",
  whatsapp: "9876543210",
  email: "care@revitaphysio.com",
  address: "Plot 42, Health Avenue, Medical Enclave, Near Metro Pillar 142, New Delhi - 110029",
  timings: {
    weekdays: "Mon - Sat: 8:00 AM - 8:00 PM",
    sunday: "Sunday: 9:00 AM - 1:00 PM (Emergency & By Prior Appointment)",
    emergency: "24/7 Home Rehab On-Call Available"
  },
  stats: [
    { id: "patients", value: 5000, suffix: "+", label: "Happy Patients", desc: "Pain-free active lives restored" },
    { id: "experience", value: 10, suffix: "+ Years", label: "Clinical Experience", desc: "Decade of rehabilitation excellence" },
    { id: "doctors", value: 10, suffix: "+", label: "Expert Physiotherapists", desc: "MPT & certified specialists" },
    { id: "rating", value: 5, suffix: "★", label: "Patient Satisfaction", desc: "4.98/5 verified Google rating" }
  ]
};

export const OUR_WORK_CASES = [
  {
    id: "case-1",
    title: "Lumbar Disc Herniation & Sciatica Recovery",
    category: "Spine & Sciatica",
    image: "/hero_physio.jpg",
    patient: "42 Yrs • Corporate Tech Lead",
    beforeCondition: "Severe radiating nerve pain down right calf; sitting tolerance under 15 minutes; surgery recommended by 2 surgeons.",
    treatmentUsed: "Spinal Decompression, Class-IV Cold Laser, McKenzie Protocol & Deep Core Stabilization",
    result: "100% pain-free in 4 weeks. Surgery completely averted.",
    duration: "4 Weeks (12 Sessions)",
    rating: 5
  },
  {
    id: "case-2",
    title: "Total Knee Replacement (TKR) Mobility Restored",
    category: "Post-Surgery Rehab",
    image: "/therapy_session.jpg",
    patient: "67 Yrs • Homemaker",
    beforeCondition: "Knee flexion locked at 55°; severe post-operative swelling and inability to walk without two-person support.",
    treatmentUsed: "Continuous Passive Motion (CPM), Lymphatic Drainage, Maitland Mobilization & Gait Re-Education",
    result: "Achieved 125° comfortable knee flexion. Climbs stairs unassisted.",
    duration: "6 Weeks (18 Sessions)",
    rating: 5
  },
  {
    id: "case-3",
    title: "Grade-II ACL Ligament Tear & Athletic Comeback",
    category: "Sports Rehabilitation",
    image: "/hero_physio.jpg",
    patient: "23 Yrs • Football Player",
    beforeCondition: "Complete knee instability, giving-way episodes during turns, loss of sprint acceleration.",
    treatmentUsed: "High-Velocity Neuromuscular Drills, Kinesiology Taping, Kinetic Chain Agility Conditioning",
    result: "Cleared return-to-sport biomechanical test and played full tournament.",
    duration: "10 Weeks (24 Sessions)",
    rating: 5
  },
  {
    id: "case-4",
    title: "Chronic Frozen Shoulder (Adhesive Capsulitis)",
    category: "Joint Mobilization",
    image: "/therapy_session.jpg",
    patient: "54 Yrs • Teacher",
    beforeCondition: "Overhead arm reach limited to 75°; severe night pain preventing sleep on affected side for 7 months.",
    treatmentUsed: "Matrix Rhythm Therapy (MaRhyThe), Hydrocollator Heat Packs, Glenohumeral Joint Glides",
    result: "Full 175° overhead reach restored. Zero pain during sleep.",
    duration: "5 Weeks (15 Sessions)",
    rating: 5
  },
  {
    id: "case-5",
    title: "Severe Tech-Neck & Cervical Posture Correction",
    category: "Posture & Ergonomics",
    image: "/doctor_lead.jpg",
    patient: "29 Yrs • Software Engineer",
    beforeCondition: "Forward head posture (+4.5 cm), constant burning ache between shoulder blades, daily tension headaches.",
    treatmentUsed: "Deep Cervical Flexor Retraining, Myofascial Release, Ergonomic Workstation Alignment",
    result: "Postural alignment restored. Zero headaches reported.",
    duration: "3 Weeks (9 Sessions)",
    rating: 5
  },
  {
    id: "case-6",
    title: "Post-Stroke Gait & Neurological Balance Training",
    category: "Neuro Rehabilitation",
    image: "/therapy_session.jpg",
    patient: "61 Yrs • Retired Bank Manager",
    beforeCondition: "Right-sided hemiparesis following ischemic stroke; dependent on wheelchair for indoor navigation.",
    treatmentUsed: "Bobath NDT Technique, Proprioceptive Balance Board Drills, Task-Oriented Functional Training",
    result: "Independent community ambulation with minimal cane support.",
    duration: "12 Weeks (36 Sessions)",
    rating: 5
  }
];

export const SERVICES_DATA = [
  {
    id: "back-neck-pain",
    title: "Back & Neck Pain",
    category: "Spine & Orthopedic",
    shortDesc: "Specialized spinal decompression, posture realignment, and manual therapy for chronic disc & muscle aches.",
    fullDesc: "Chronic back and cervical neck pain from long desk hours, disc herniation, or degenerative spondylosis is treated using evidence-based decompression, McKenzie methods, dry needling, and deep tissue mobilization.",
    icon: "Activity",
    gradient: "from-blue-500 to-cyan-500",
    symptoms: ["Cervical Spondylosis", "Slip Disc / Sciatica", "Upper Back Stiffness", "Postural Kyphosis"],
    techniques: ["Spinal Decompression", "Manual Mobilization", "Dry Needling", "Core Stability Drills"],
    duration: "45 - 60 Mins",
    recoveryRate: "96% relief in 2-4 weeks",
    recommendedSessions: "6 - 10 Sessions"
  },
  {
    id: "sports-injury",
    title: "Sports Injury Rehab",
    category: "Sports & Athletic",
    shortDesc: "Advanced recovery for ligament sprains, muscle tears, runner's knee, and return-to-sport athletic conditioning.",
    fullDesc: "From acute ACL/MCL ligament sprains to rotator cuff tears and hamstring strains, our sports physiotherapists guide athletes from acute swelling management to high-performance agility retraining.",
    icon: "Zap",
    gradient: "from-emerald-500 to-teal-500",
    symptoms: ["ACL/Meniscus Tears", "Tennis/Golfer's Elbow", "Rotator Cuff Tendinitis", "Ankle Inversion Sprain"],
    techniques: ["Kinesio Taping", "Class-IV Laser Therapy", "Agility Retraining", "Plyometrics"],
    duration: "60 Mins",
    recoveryRate: "94% return to sport rate",
    recommendedSessions: "8 - 14 Sessions"
  },
  {
    id: "post-surgery-rehab",
    title: "Post-Surgery Rehabilitation",
    category: "Post-Operative",
    shortDesc: "Structured phase-by-phase recovery following joint replacement, spine surgery, and fracture fixation.",
    fullDesc: "Safe, protocol-driven physical therapy following Total Knee Replacement (TKR), Total Hip Replacement (THR), spinal fusion, or arthroscopic reconstructions to restore full range of motion and prevent scar stiffness.",
    icon: "ShieldPlus",
    gradient: "from-indigo-500 to-purple-500",
    symptoms: ["Total Knee Replacement (TKR)", "Hip Replacement (THR)", "Spine Decompression Post-Op", "Post-Fracture Stiffness"],
    techniques: ["Continuous Passive Motion (CPM)", "Scar Tissue Release", "Gait Retraining", "Strengthening"],
    duration: "50 - 70 Mins",
    recoveryRate: "98% mobility restoration",
    recommendedSessions: "12 - 20 Sessions"
  },
  {
    id: "neurological-physio",
    title: "Neurological Physiotherapy",
    category: "Neuro Rehabilitation",
    shortDesc: "Neuroplasticity-driven rehabilitation for stroke paralysis, Parkinson's, and nerve injuries.",
    fullDesc: "Specialized neuromuscular re-education, balance training, and functional task drills designed to retrain neural pathways for patients recovering from ischemic stroke, hemiplegia, Parkinson's disease, or Bell's palsy.",
    icon: "Brain",
    gradient: "from-violet-500 to-pink-500",
    symptoms: ["Stroke / Hemiparesis", "Parkinson's Disease", "Bell's Palsy / Facial Palsy", "Peripheral Neuropathy"],
    techniques: ["Bobath / NDT Technique", "Mirror Therapy", "Balance Platforms", "Task-Oriented Training"],
    duration: "60 Mins",
    recoveryRate: "Significant independence gain",
    recommendedSessions: "15 - 30 Sessions"
  },
  {
    id: "joint-pain",
    title: "Joint Pain & Arthritis",
    category: "Spine & Orthopedic",
    shortDesc: "Holistic pain relief and joint lubrication exercises for Osteoarthritis, Rheumatoid Arthritis, and stiffness.",
    fullDesc: "Gentle non-invasive treatments to reduce inflammation, improve synovial fluid circulation, restore joint flexibility, and delay the need for joint surgeries.",
    icon: "Flame",
    gradient: "from-amber-500 to-orange-500",
    symptoms: ["Knee Osteoarthritis", "Frozen Shoulder (Adhesive Capsulitis)", "Hip Osteoarthritis", "Rheumatoid Flare-ups"],
    techniques: ["Matrix Rhythm Therapy", "Therapeutic Ultrasound", "Hydrocollator Heat Packs", "Low-Impact Strengthening"],
    duration: "45 Mins",
    recoveryRate: "92% pain score reduction",
    recommendedSessions: "6 - 12 Sessions"
  },
  {
    id: "womens-physiotherapy",
    title: "Women's Physiotherapy",
    category: "Women's Health",
    shortDesc: "Comprehensive prenatal, postnatal, pelvic floor conditioning, and diastasis recti recovery.",
    fullDesc: "Dedicated confidential care for expecting and new mothers, pelvic floor dysfunction, stress incontinence, chronic pelvic pain, and postnatal core restoration under female certified physiotherapists.",
    icon: "HeartPulse",
    gradient: "from-rose-500 to-pink-500",
    symptoms: ["Antenatal Pregnancy Back Pain", "Postpartum Diastasis Recti", "Pelvic Floor Weakness", "Sacroiliac Joint Pain"],
    techniques: ["Biofeedback Kegels", "Transverse Abdominis Reactivation", "Pelvic Girdle Realignment", "Ergonomic Nursing Guidance"],
    duration: "45 Mins",
    recoveryRate: "95% patient comfort rate",
    recommendedSessions: "6 - 10 Sessions"
  },
  {
    id: "pediatric-physiotherapy",
    title: "Pediatric Physiotherapy",
    category: "Pediatric Care",
    shortDesc: "Gentle, play-based physical therapy for developmental delays, cerebral palsy, and torticollis in children.",
    fullDesc: "Child-friendly sessions that transform rehabilitation into engaging play. We help infants and children overcome milestone delays, congenital muscular torticollis, flat feet, and gait abnormalities.",
    icon: "Sparkles",
    gradient: "from-teal-500 to-cyan-500",
    symptoms: ["Delayed Walking Milestones", "Congenital Torticollis", "Cerebral Palsy Motor Support", "Toe Walking / Flat Feet"],
    techniques: ["Sensory-Motor Play", "Equilibrium Board Drills", "Gentle Stretching", "Parent Home Protocols"],
    duration: "45 Mins",
    recoveryRate: "High developmental progress",
    recommendedSessions: "10 - 20 Sessions"
  },
  {
    id: "mobility-balance",
    title: "Mobility & Balance Training",
    category: "Geriatric & Balance",
    shortDesc: "Fall-prevention protocols, vestibular rehab for vertigo, and dynamic stability training for seniors.",
    fullDesc: "Designed to keep elderly patients independent, confident, and free from dangerous slip-and-fall injuries. Includes inner ear vertigo (BPPV) Epley maneuvers and balance platform workouts.",
    icon: "Compass",
    gradient: "from-emerald-500 to-blue-500",
    symptoms: ["Frequent Slip & Falls", "BPPV / Positional Vertigo", "Age-Related Muscle Weakness (Sarcopenia)", "Unsteady Walking Gait"],
    techniques: ["Vestibular Rehabilitation", "Tandem Stance Retraining", "Proprioception Pads", "Dynamic Gait Drills"],
    duration: "50 Mins",
    recoveryRate: "89% fall risk reduction",
    recommendedSessions: "8 - 12 Sessions"
  }
];

export const TREATMENTS_DATA = [
  {
    id: "cervical-back",
    title: "Cervical & Lumbar Spine Care",
    category: "Spine",
    badge: "Most Common",
    overview: "Non-surgical pain relief program targeting pinched nerves, sciatica, herniated discs, and posture slump.",
    symptoms: ["Radiating leg pain (Sciatica)", "Numbness in fingers or arms", "Morning lower back stiffness", "Inability to sit for >20 mins"],
    causes: ["Prolonged sitting & poor ergonomics", "Age-related disc degeneration", "Heavy lifting strain", "Weak abdominal core muscles"],
    approach: "Phase 1: Pain & inflammation mitigation with Interferential Therapy (IFT) and cold laser. Phase 2: Gentle spinal manual mobilization and neural flossing. Phase 3: Core strengthening & ergonomic training.",
    expectedTimeline: "3 to 5 weeks for lasting relief",
    successRate: "95%"
  },
  {
    id: "frozen-shoulder",
    title: "Frozen Shoulder (Capsulitis) Protocol",
    category: "Upper Limb",
    badge: "Rapid Thaw",
    overview: "Gradual restoration of arm lifting, dressing ability, and nighttime sleep without painful capsular distension.",
    symptoms: ["Inability to reach overhead or behind back", "Severe nocturnal shoulder pain", "Stiff shoulder joint with sharp pain on sudden movement"],
    causes: ["Diabetic predispositions", "Prolonged immobilization post-sling", "Minor rotator cuff tendon injury"],
    approach: "Gentle Maitland manual glenohumeral joint glides, deep capsular myofascial release, therapeutic ultrasound, and progressive active-assisted pulley exercises.",
    expectedTimeline: "4 to 8 weeks",
    successRate: "93%"
  },
  {
    id: "knee-osteoarthritis",
    title: "Knee Arthritis & Joint Preservation",
    category: "Lower Limb",
    badge: "Surgery Alternative",
    overview: "Prolong natural knee longevity, avoid premature knee replacement, and walk stairs pain-free.",
    symptoms: ["Clicking / crepitus sounds in knees", "Difficulty climbing stairs", "Swelling after walking short distances", "Stiff knees upon waking"],
    causes: ["Cartilage wear and tear", "Excess body weight", "Weak quadriceps and hamstring imbalance"],
    approach: "Targeted VMO (Vastus Medialis Oblique) strengthening, matrix rhythm therapy for tissue regeneration, joint unloading taping, and stationary cycling conditioning.",
    expectedTimeline: "4 to 6 weeks",
    successRate: "91%"
  },
  {
    id: "sports-acl-rehab",
    title: "ACL & Sports Injury Rehabilitation",
    category: "Athletics",
    badge: "Return to Sport",
    overview: "Accelerated athletic recovery with biomechanical force plate tests and sport-specific agility conditioning.",
    symptoms: ["Knee giving way or popping sensation", "Acute swelling post-match", "Hamstring tendon strain", "Loss of sprint confidence"],
    causes: ["Sudden deceleration / twisting jump", "Contact collision in football/cricket", "Inadequate warmup"],
    approach: "Kinetic chain balancing, closed-chain quadriceps activation, neuromuscular agility drills, and return-to-sport clearance testing.",
    expectedTimeline: "6 to 16 weeks depending on injury grade",
    successRate: "96%"
  },
  {
    id: "stroke-neuro-recovery",
    title: "Stroke & Neuro Re-Education",
    category: "Neurology",
    badge: "Neuroplasticity",
    overview: "Empowering stroke survivors to regain limb movement, independent walking, and daily self-care.",
    symptoms: ["One-sided weakness (Hemiparesis)", "Spastic muscle tightening", "Difficulty holding objects or walking without support"],
    causes: ["Ischemic stroke or hemorrhagic brain incident", "Delayed early mobilization"],
    approach: "Bobath neurodevelopmental therapy, weight-bearing transfer training, fine motor hand rehabilitation, and functional electrical stimulation (FES).",
    expectedTimeline: "Ongoing progressive recovery over 2-6 months",
    successRate: "High Functional Independence"
  },
  {
    id: "posture-ergonomics",
    title: "Tech-Neck & Ergonomic Realignment",
    category: "Lifestyle & Posture",
    badge: "Corporate Favorite",
    overview: "Reversal of forward head posture, rounded shoulders, and repetitive mouse strain for IT professionals.",
    symptoms: ["Burning pain between shoulder blades", "Tension headaches at temple", "Carpal tunnel wrist tingling", "Hunched posture"],
    causes: ["8-12 hours of laptop screen posture", "Slumped sofa lounging", "Mobile phone neck tilt (45+ degrees)"],
    approach: "Pectoral myofascial release, deep cervical flexor retraining, thoracic spine extension mobilization, and workstation ergonomic setup guidance.",
    expectedTimeline: "2 to 3 weeks",
    successRate: "98%"
  }
];

export const DOCTORS_DATA = [
  {
    id: "dr-rajesh-sharma",
    name: "Dr. Rajesh Sharma (PT)",
    qualification: "BPT, MPT (Orthopedics & Spine), MIAP, CMP",
    experience: "14+ Years Experience",
    specialization: "Chief Physiotherapist & Spine Specialist",
    bio: "Former Senior Consultant at Apex Ortho Care. Gold Medalist with extensive clinical expertise in manual therapy, non-surgical slip disc recovery, and post-joint replacement protocols.",
    image: "/doctor_lead.jpg",
    certifications: ["Certified Mulligan Practitioner (CMP)", "Dry Needling Specialist (UK)", "Fellowship in Ortho Rehab"],
    timings: "Mon, Wed, Fri (9:00 AM - 6:00 PM)",
    languages: "English, Hindi, Punjabi",
    rating: 4.99,
    reviewCount: 940
  },
  {
    id: "dr-ananya-iyer",
    name: "Dr. Ananya Iyer (PT)",
    qualification: "BPT, MPT (Sports Medicine), FIFA Medical Diploma",
    experience: "9+ Years Experience",
    specialization: "Senior Sports Physiotherapist",
    bio: "Has rehabilitated over 500 state and national level athletes in cricket, badminton, and football. Expert in ACL rehab, rotator cuff tears, and return-to-sport clearance.",
    image: "/doctor_ananya.jpg",
    certifications: ["FIFA Sports Medicine", "Kinesio Taping Practitioner (KTP)", "Shockwave Therapy Certified"],
    timings: "Tue, Thu, Sat (10:00 AM - 7:00 PM)",
    languages: "English, Hindi, Tamil",
    rating: 4.97,
    reviewCount: 780
  },
  {
    id: "dr-vikram-malhotra",
    name: "Dr. Vikram Malhotra (PT)",
    qualification: "BPT, MPT (Neurological Sciences), NDT Certified",
    experience: "11+ Years Experience",
    specialization: "Neuro Rehabilitation & Stroke Specialist",
    bio: "Dedicated to restoring functional independence in stroke survivors, Parkinson's patients, and vestibular vertigo cases through neuroplasticity and balance reprogramming.",
    image: "/doctor_vikram.jpg",
    certifications: ["Neurodevelopmental Therapy (NDT)", "Vestibular Rehab Specialist (USA)", "Bobath Technique"],
    timings: "Mon to Sat (8:30 AM - 3:30 PM)",
    languages: "English, Hindi",
    rating: 4.98,
    reviewCount: 650
  },
  {
    id: "dr-sneha-patel",
    name: "Dr. Sneha Patel (PT)",
    qualification: "BPT, MPT (Cardio-Pulmonary & Women's Health)",
    experience: "8+ Years Experience",
    specialization: "Women's Health & Ergonomic Consultant",
    bio: "Passionate about women's wellness, prenatal antenatal care, pelvic floor restoration, and modern ergonomic rehabilitation for corporate professionals.",
    image: "/doctor_sneha.jpg",
    certifications: ["Pelvic Floor Rehab (Australia)", "Antenatal & Postnatal Fitness", "Matrix Rhythm Specialist"],
    timings: "Mon to Fri (11:00 AM - 7:00 PM)",
    languages: "English, Hindi, Gujarati",
    rating: 4.96,
    reviewCount: 520
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: "test-1",
    name: "Amitabh Verma",
    age: "46 Yrs",
    role: "Senior Software Architect",
    condition: "Severe Sciatica & Lumbar L4-L5 Herniation",
    rating: 5,
    review: "I was recommended spine surgery by two surgeons. Dr. Rajesh Sharma asked me to give physiotherapy 4 weeks. In just 3 weeks of targeted spinal decompression and core exercises, my shooting leg pain is 100% gone! Forever grateful.",
    recoveryTime: "3.5 Weeks to zero pain",
    verified: true,
    location: "South Delhi"
  },
  {
    id: "test-2",
    name: "Pooja Malhotra",
    age: "31 Yrs",
    role: "Marathon Runner",
    condition: "Grade 2 ACL Tear & Meniscus Strain",
    rating: 5,
    review: "Dr. Ananya Iyer is an absolute magician for sports injuries! Her step-by-step rehab, laser therapy, and agility drills helped me complete the Delhi Half Marathon 6 months post-injury without a twinge of pain.",
    recoveryTime: "Returned to running at 100%",
    verified: true,
    location: "Gurugram"
  },
  {
    id: "test-3",
    name: "Harish Chawla (Retd. Col)",
    age: "68 Yrs",
    role: "Retired Veteran",
    condition: "Post Total Knee Replacement (TKR)",
    rating: 5,
    review: "After my knee replacement surgery, bending my knee felt impossible and excruciating. The team at RevitaPhysio visited my home initially and then in clinic. Today I can bend my knee 125 degrees and climb stairs effortlessly.",
    recoveryTime: "Full independent mobility",
    verified: true,
    location: "Noida"
  },
  {
    id: "test-4",
    name: "Sunita Singhal",
    age: "52 Yrs",
    role: "School Principal",
    condition: "Chronic Frozen Shoulder (Stage 2)",
    rating: 5,
    review: "I couldn't comb my hair or sleep on my left side for over 8 months. The gentle mobilization technique combined with heat packs unlocked my shoulder within 4 weeks. Professional, polite, and very hygienic clinic!",
    recoveryTime: "95% range restored in 1 month",
    verified: true,
    location: "Vasant Kunj"
  },
  {
    id: "test-5",
    name: "Rohan Kapoor",
    age: "27 Yrs",
    role: "Badminton Player",
    condition: "Tennis Elbow & Shoulder Impingement",
    rating: 5,
    review: "Immediate pain relief with their dry needling and therapeutic ultrasound on day 2 itself. The customized home exercise video links they shared kept me consistent. Top-tier physiotherapy care!",
    recoveryTime: "Back on court in 14 days",
    verified: true,
    location: "Saket"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Book Appointment",
    subtitle: "Quick Online or Call",
    desc: "Choose your preferred date, time slot, and clinic or home visit format through our hassle-free booking system.",
    icon: "CalendarCheck",
    detail: "Receive instant WhatsApp and SMS confirmation with doctor assignment and location directions."
  },
  {
    step: "02",
    title: "Doctor Consultation",
    subtitle: "Detailed 1-on-1 Discussion",
    desc: "Sit down with our specialist doctor to discuss your medical history, lifestyle factors, pain intensity, and MRI/X-ray reports.",
    icon: "UserCheck",
    detail: "We listen attentively to understand your goals: from sports return to simple peaceful sleep."
  },
  {
    step: "03",
    title: "In-Depth Assessment",
    subtitle: "Physical & Biomechanical Evaluation",
    desc: "Comprehensive testing of joint range of motion, muscle strength, posture imbalances, and nerve reflexes.",
    icon: "Scan",
    detail: "Pinpoint the exact root cause of pain rather than just treating surface symptoms."
  },
  {
    step: "04",
    title: "Customized Treatment",
    subtitle: "Hands-on Therapy & Modern Modalities",
    desc: "Evidence-based manual therapy, Class-IV laser, decompression, and personalized kinetic rehabilitation exercises.",
    icon: "Stethoscope",
    detail: "Pain-free techniques tailored to your tolerance with continuous progress monitoring."
  },
  {
    step: "05",
    title: "Recovery & Long-Term Wellness",
    subtitle: "Sustained Pain-Free Movement",
    desc: "Strengthening drills, ergonomic posture training, and personalized home exercise regime to prevent recurrence forever.",
    icon: "HeartPulse",
    detail: "Lifetime ergonomic guidance and periodic checkups to ensure you stay active and agile."
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    id: "certified",
    title: "Certified Physiotherapists",
    desc: "All our practitioners are Master of Physiotherapy (MPT) holders with specialized international clinical accreditations.",
    icon: "Award"
  },
  {
    id: "modern",
    title: "Modern Equipment",
    desc: "Equipped with state-of-the-art Class-IV Laser, Matrix Rhythm Therapy, Decompression Traction, and Electrotherapy.",
    icon: "Cpu"
  },
  {
    id: "evidence",
    title: "Evidence-Based Therapy",
    desc: "Zero guesswork. Every clinical protocol is backed by latest medical rehabilitation research and peer-reviewed studies.",
    icon: "CheckCircle2"
  },
  {
    id: "easy-booking",
    title: "Easy Appointment",
    desc: "Instant slot booking, minimal clinic waiting times (<5 mins), and doorstep home physiotherapy for elderly patients.",
    icon: "Clock"
  },
  {
    id: "patient-first",
    title: "Patient-Focused Care",
    desc: "Dedicated 1-on-1 attention with private therapy suites, compassionate care, and customized recovery roadmaps.",
    icon: "Smile"
  }
];

export const FAQS_DATA = [
  {
    category: "Appointments & Visits",
    question: "Do I need a doctor's referral to visit RevitaPhysio Care?",
    answer: "No, a doctor's prescription or referral is not required to visit us. As first-contact licensed physiotherapists, our doctors conduct comprehensive clinical examinations and physical diagnosis before initiating any therapy."
  },
  {
    category: "Appointments & Visits",
    question: "How long is a typical physiotherapy session?",
    answer: "An initial consultation and thorough biomechanical assessment takes approximately 45 to 60 minutes. Subsequent treatment sessions typically range between 45 and 60 minutes depending on your customized rehabilitation protocol."
  },
  {
    category: "Treatments & Pain",
    question: "Is physiotherapy treatment painful?",
    answer: "Our core motto is gentle, evidence-based pain relief. While certain deep tissue mobilizations or stretching stiff joints can cause mild temporary soreness (similar to a gym workout), we always work within your comfort zone and adapt techniques to your tolerance."
  },
  {
    category: "Treatments & Pain",
    question: "How many sessions will I need before I see noticeable improvement?",
    answer: "Most patients with acute conditions (neck stiffness, muscle spasm, ankle sprain) feel 40-70% relief within 3 to 5 sessions. Chronic conditions like sciatica, frozen shoulder, or post-surgery rehab typically require 8 to 15 structured sessions."
  },
  {
    category: "Home Care & Emergency",
    question: "Do you offer Home Visit Physiotherapy for bedridden or elderly patients?",
    answer: "Yes! We have a specialized portable rehabilitation team equipped with portable electrotherapy units and exercise bands who provide doorstep home visits across the city for post-surgery, elderly, or paralyzed patients."
  },
  {
    category: "Payments & Insurance",
    question: "Is physiotherapy covered under health insurance policies in India?",
    answer: "Yes, most major health insurance providers (OPD riders or post-hospitalization rehab covers) reimburse physiotherapy sessions when prescribed by an orthopedic surgeon or physician. We provide complete itemized medical receipts and doctor certificates."
  },
  {
    category: "Preparation",
    question: "What should I wear for my first physiotherapy appointment?",
    answer: "Wear loose, comfortable clothing (such as track pants, gym shorts, or a comfortable t-shirt) that allows easy movement and direct examination of the affected joint, spine, or limb."
  }
];
