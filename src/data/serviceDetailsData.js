/**
 * Dedicated Clinical Data for RevitaOrtho Specialized Service Pages
 * Back Pain & Sciatica · Neck Pain & Posture · Sports Injury & ACL · Knee Pain & Preservation
 */

export const SERVICE_DETAILS = {
  "back-pain": {
    id: "back-pain",
    serviceCode: "back-pain",
    tag: "SPINE & NERVE REHABILITATION",
    iconName: "Bone",
    title: "Back Pain & Sciatica",
    highlight: "Non-Surgical Spine Decompression",
    subtitle:
      "Targeted computer-calibrated spinal decompression, high-power laser therapy, and clinical stabilizing exercise protocols to eliminate sharp radiating leg pain, disc bulge pressure, and chronic lumbar stiffness without invasive surgery.",
    metrics: [
      { value: "94%", label: "Surgery Avoidance Rate", sub: "Documented Clinical Outcomes" },
      { value: "3 – 4", label: "Sessions to Initial Relief", sub: "Acute Pain Deactivation" },
      { value: "45 Min", label: "Diagnostic Assessment", sub: "Root-Cause Spine Scan" },
      { value: "1-on-1", label: "Specialist Care", sub: "MPT Spine Clinical Specialists" },
    ],
    symptoms: [
      "Sharp, electric, or burning radiating nerve pain traveling down buttock, thigh, calf, or foot (Sciatica).",
      "Severe lower back stiffness making getting out of bed or standing upright painful in the morning.",
      "Pain aggravated by sitting in an office chair or driving for more than 15–20 minutes.",
      "Pins-and-needles (paresthesia), tingling, or loss of sensation in toes or outer foot.",
      "Inability to bend forward to tie shoelaces or lift light household objects without sharp spasm.",
      "Persistent dull ache in lower lumbar area following prolonged standing or walking.",
    ],
    rootCauses: [
      {
        title: "Herniated or Bulging Intervertebral Disc (L4-L5 / L5-S1)",
        desc: "The inner gel-like nucleus pulposus protrudes through weakened outer disc rings, physically compressing the adjacent sciatic nerve root and causing severe radiating pain.",
      },
      {
        title: "Spinal Stenosis & Facet Joint Arthropathy",
        desc: "Narrowing of the spinal canal or arthritic inflammation of facet joints creates bony friction and neural foramen crowding during spinal movement.",
      },
      {
        title: "Deep Lumbar Core Stabilizer Inhibition",
        desc: "When the transverse abdominis and multifidus muscles shut down due to pain or sedentary posture, the lumbar spine loses muscular brace support, transferring all shear forces directly onto vertebral discs.",
      },
    ],
    protocols: [
      {
        step: "01",
        title: "Computerized Spinal Decompression",
        desc: "Applies gentle, computer-calibrated logarithmic distraction to specific lumbar vertebrae. Creates negative intradiscal pressure (-150 to -200 mmHg) to draw herniated disc material away from compressed nerves.",
        modality: "Medical-Grade European Decompression Unit",
      },
      {
        step: "02",
        title: "Class-IV Cold Laser & Nerve Deactivation",
        desc: "Deep-penetrating infrared photobiomodulation reduces chemical inflammation around irritated nerve roots and halts acute inflammatory cytokine release 3x faster than standard TENS.",
        modality: "Dual-Wavelength Class-IV Phototherapy",
      },
      {
        step: "03",
        title: "McKenzie Method & Directional Preference",
        desc: "Carefully prescribed mechanical movements that centralize radiating leg pain back into the spine, progressively eliminating peripheral nerve irritation.",
        modality: "Certified Mechanical Diagnosis & Therapy (MDT)",
      },
      {
        step: "04",
        title: "Deep Transverse Core Stability Retraining",
        desc: "Progressive biofeedback training of the deep stabilizing corset muscles (Transverse Abdominis, Multifidus, Pelvic Floor) to permanently lock the spine in safe biomechanical alignment.",
        modality: "Real-Time Kinetic Bio-Loading",
      },
    ],
    surgeriesAvoided: [
      "Lumbar Microdiscectomy (Surgical disc cutting)",
      "Spinal Fusion / TLIF / PLIF (Metal screws & rods)",
      "Laminectomy & Foraminotomy (Bony decompression)",
      "Repetitive Epidural Steroid Nerve Root Injections",
    ],
    homeTips: [
      {
        title: "Proper Sitting Ergonomics",
        desc: "Never sit on soft sinking sofas. Use an ergonomic chair with a firm lumbar roll placed at belt level. Take a 60-second standing break every 30 minutes.",
      },
      {
        title: "Sleeping Posture for Nerve Pressure",
        desc: "If sleeping on your side, place a firm pillow between your knees to keep your pelvis neutral. If on your back, place a pillow beneath your knees to relieve sciatic tension.",
      },
      {
        title: "Avoid Early Morning Flexion",
        desc: "Spinal discs absorb fluid overnight and are at peak hydration in the first hour after waking. Avoid aggressive forward bending or heavy lifting during the first 45 minutes of the morning.",
      },
    ],
    caseStudy: {
      title: "L4-L5 Lumbar Disc Herniation & Severe Sciatica",
      patient: "43 Yrs • Principal IT Architect",
      outcome: "100% Pain-Free in 4 Weeks • Microdiscectomy Surgery Completely Cancelled",
      quote:
        "Two orthopedic spine surgeons had advised urgent microdiscectomy because I couldn't sit for more than 15 minutes. RevitaOrtho's computerized decompression and McKenzie protocol gave me complete relief. I am back to full-day coding and driving with zero pain.",
    },
    faqs: [
      {
        question: "Does bed rest help heal a slipped disc or sciatica?",
        answer:
          "No. Clinical medical studies show strict bed rest beyond 24–48 hours actually slows disc healing and causes deep core muscle atrophy. Active gentle decompression and directional physical movement promote nutrient diffusion into the disc and accelerate recovery.",
      },
      {
        question: "How do I know if I can avoid spinal surgery?",
        answer:
          "Unless you are experiencing sudden loss of bowel/bladder control or progressive foot drop (which require emergency medical care), over 92% of lumbar disc herniations can be successfully resolved with non-surgical computerized decompression and structured physical rehabilitation.",
      },
      {
        question: "How many sessions are typically required for sciatica?",
        answer:
          "Most patients experience noticeable pain reduction (40% to 60%) within the first 3 to 4 sessions. A comprehensive recovery program typically consists of 10 to 14 structured sessions to ensure permanent disc stabilization.",
      },
    ],
  },

  "neck-pain": {
    id: "neck-pain",
    serviceCode: "neck-pain",
    tag: "CERVICAL SPINE & POSTURE CARE",
    iconName: "Stethoscope",
    title: "Neck Pain & Posture",
    highlight: "Cervical Decompression & Tech-Neck Relief",
    subtitle:
      "Alleviate radiating arm pain, tingling in fingers, stubborn shoulder blade burning, and chronic tension headaches with targeted cervical decompression, trigger point dry needling, and deep postural flexor retraining.",
    metrics: [
      { value: "92%", label: "Rapid Nerve Relief Rate", sub: "Cervical Radiculopathy Cases" },
      { value: "3 Weeks", label: "Average Recovery Window", sub: "Restored Normal Mobility" },
      { value: "4.2 cm", label: "Average Posture Correction", sub: "Forward Head Angle Restoration" },
      { value: "100%", label: "Ergonomic Workstation Audit", sub: "Included with Care Protocol" },
    ],
    symptoms: [
      "Deep burning, gnawing ache between shoulder blades and upper trapezius muscles.",
      "Radiating nerve pain, numbness, or tingling traveling down shoulder into forearm, thumb, or fingers.",
      "Frequent tension headaches starting at the base of the skull and radiating behind the eyes.",
      "Stiff neck making turning your head to check side mirrors while driving intensely painful.",
      "Clicking, popping, or grinding sounds (cervical crepitus) when rolling the head.",
      "Upper back fatigue and rounded shoulders becoming worse toward the end of a workday.",
    ],
    rootCauses: [
      {
        title: "Forward Head Posture & 'Tech-Neck' Biomechanics",
        desc: "For every inch your head tilts forward over your phone or monitor, an additional 4.5 to 5 kg of shear load is exerted on your cervical vertebrae, leading to early disc flattening.",
      },
      {
        title: "Cervical Disc Bulge & Spondylosis (C5-C6 / C6-C7)",
        desc: "Reduced disc height and osteophyte bone spurs narrow the intervertebral foramen, pinching the exiting cervical spinal nerve roots and causing arm radiculopathy.",
      },
      {
        title: "Deep Neck Flexor Inhibition & Suboccipital Tightness",
        desc: "Weakness in deep stabilizers (Longus Colli) forces superficial neck muscles (Sternocleidomastoid & Upper Trapezius) into chronic spasm, causing tension headaches.",
      },
    ],
    protocols: [
      {
        step: "01",
        title: "Motorized Cervical Decompression",
        desc: "Calibrated cervical distraction gently opens compressed neural foramina, relieving direct nerve root pressure and improving blood flow to intervertebral discs.",
        modality: "Computer-Monitored Cervical Traction",
      },
      {
        step: "02",
        title: "Trigger Point Dry Needling & Myofascial Release",
        desc: "Hair-thin needles deactivate persistent hyperactive knots in the levator scapulae and upper trapezius, immediately resetting muscle length-tension relationships.",
        modality: "Clinical Monofilament Needling",
      },
      {
        step: "03",
        title: "Deep Cervical Flexor Biofeedback Retraining",
        desc: "Targeted stabilizer activation using pressure biofeedback units to re-educate the deep neck flexors and correct forward head posture.",
        modality: "Pressure Biofeedback Stabilizer Training",
      },
      {
        step: "04",
        title: "Workstation Ergonomics & Sleeping Repositioning",
        desc: "Custom workstation height calibration and cervical contour pillow prescription to ensure zero nighttime nerve irritation.",
        modality: "Ergonomic Posture Prescriptions",
      },
    ],
    surgeriesAvoided: [
      "Anterior Cervical Discectomy & Fusion (ACDF)",
      "Cervical Artificial Disc Replacement",
      "Repeated Cervical Epidural Steroid Injections",
      "Chronic Daily NSAID / Muscle Relaxant Dependence",
    ],
    homeTips: [
      {
        title: "Screen Height Rule",
        desc: "Your computer monitor top edge should be at eye level so you look straight ahead without dipping your chin. Elevate your laptop with a stand and use an external keyboard.",
      },
      {
        title: "The 30-Minute Chin Tuck Reset",
        desc: "Perform 10 gentle chin tucks (retracting head backward like making a double chin, hold 3 seconds) every 45 minutes while working at a desk.",
      },
      {
        title: "Optimal Sleeping Pillow Height",
        desc: "Never sleep on two bulky pillows. Use a cervical contour pillow that fills the gap between your neck and shoulder while keeping your head parallel to the bed.",
      },
    ],
    caseStudy: {
      title: "Severe Tech-Neck & C6 Cervical Radiculopathy",
      patient: "31 Yrs • Tech Team Lead",
      outcome: "Zero Nerve Tingling in 3 Weeks • Headaches Fully Resolved",
      quote:
        "I was dealing with severe right thumb numbness and agonizing shoulder blade burning that painkillers couldn't touch. RevitaOrtho identified my forward head angle and C6 nerve pinch. In 9 sessions, the numbness vanished completely.",
    },
    faqs: [
      {
        question: "Why does neck pain cause numbness or pain in my fingers?",
        answer:
          "Nerves that control sensation and strength in your arm and fingers emerge directly from your cervical neck spine (C5, C6, C7, C8). When a disc in the neck is bulging or compressed, it sends radiating pain, tingling, or weakness all the way down into your hand.",
      },
      {
        question: "Is clinical dry needling painful?",
        answer:
          "Dry needling uses ultra-thin monofilament needles (thinner than a hair). Most patients feel only a minor tap, followed by a brief, relieving local muscle twitch. It is exceptionally effective for stubborn upper back and neck knots.",
      },
      {
        question: "Can posture correction exercises permanently eliminate tension headaches?",
        answer:
          "Yes. Cervicogenic tension headaches are caused by tight suboccipital muscles pulling at the base of the skull. Releasing these muscles and strengthening deep neck flexors resolves the root trigger of these headaches in over 90% of cases.",
      },
    ],
  },

  "sports-injury": {
    id: "sports-injury",
    serviceCode: "sports-injury",
    tag: "SPORTS MEDICINE & ATHLETIC REHAB",
    iconName: "Zap",
    title: "Sports Injury & ACL",
    highlight: "High-Performance Athletic Rehabilitation",
    subtitle:
      "Biomechanical motion analysis, targeted radiofrequency tissue repair, and high-velocity neuromuscular drills to safely accelerate return-to-sport clearance after ACL sprains, meniscus tears, or muscle strains.",
    metrics: [
      { value: "100%", label: "Return-to-Sport Clearance Testing", sub: "Triple-Hop & Agility Protocol" },
      { value: "0%", label: "Joint Laxity Post-Protocol", sub: "Documented Athletic Cases" },
      { value: "2x Faster", label: "Tissue Regeneration", sub: "Targeted Tecar Radiofrequency" },
      { value: "1-on-1", label: "Sports Physical Therapist", sub: "Dynamic Deceleration Drills" },
    ],
    symptoms: [
      "Knee giving way, buckling, or feeling unstable during pivoting, cutting, or jumping movements.",
      "Audible 'pop' felt in the knee or ankle during athletic play followed by rapid swelling.",
      "Sharp localized joint line ache when turning, twisting, or performing deep squats.",
      "Chronic hamstring, groin, or calf muscle tightness that re-tears as soon as you sprint.",
      "Loss of single-leg balance and hesitation or psychological fear of re-injury during match play.",
      "Persistent swelling and stiffness in the joint following intense training sessions.",
    ],
    rootCauses: [
      {
        title: "Non-Contact Ligament Sprains (ACL / MCL / ATFL)",
        desc: "High-velocity sudden deceleration or rotational pivot without proper hip neuromuscular control forces excessive knee valgus collapse, stressing ligament fibers.",
      },
      {
        title: "Meniscal Tears & Cartilage Shear Stress",
        desc: "Rotational twisting under loaded body weight traps the meniscus between femur and tibia, causing longitudinal or radial tears.",
      },
      {
        title: "Kinetic Chain Imbalance & Eccentric Strength Deficits",
        desc: "Weak gluteal medius muscles and quadriceps-to-hamstring strength imbalances fail to absorb ground reaction forces upon landing, transmitting shock straight to vulnerable joints.",
      },
    ],
    protocols: [
      {
        step: "01",
        title: "Targeted Cellular Tecar Diathermy",
        desc: "High-frequency capacitive-resistive energy stimulates deep ligament and tendon collagen remodeling while rapidly evacuating inflammatory joint effusion.",
        modality: "European Tecar Radiofrequency System",
      },
      {
        step: "02",
        title: "Dynamic Neuromuscular Proprioception Drills",
        desc: "Single-leg balance beam, reactive agility ladder, and perturbations to restore unconscious joint position sense and protect against sudden turns.",
        modality: "Proprioceptive Neuromuscular Facilitation",
      },
      {
        step: "03",
        title: "Eccentric Deceleration & Kinetic Chain Loading",
        desc: "Progressive eccentric squatting and Nordic hamstring curls to build high-tensile shock absorption capabilities during athletic landing.",
        modality: "High-Load Eccentric Resistance Protocols",
      },
      {
        step: "04",
        title: "Objective Return-to-Sport Clearance Testing",
        desc: "Strict clinical clearance using single-leg hop tests, Y-balance test, and video biomechanical analysis to guarantee 100% safety before match resumption.",
        modality: "Standardized FIFA & IOC Return-to-Play Battery",
      },
    ],
    surgeriesAvoided: [
      "Premature Arthroscopic Meniscectomy (Meniscus cutting)",
      "Unnecessary ACL Reconstruction in partial Grade-I/II tears",
      "Repeated Cortisone Injections into Athletic Tendons",
      "Secondary Re-injury Tears upon Returning to Sports",
    ],
    homeTips: [
      {
        title: "Dynamic Warm-Up Protocol",
        desc: "Never perform static stretching on cold muscles. Always warm up with 10 minutes of dynamic leg swings, lunges, and high-knees before explosive training.",
      },
      {
        title: "Post-Workout Joint Elevation",
        desc: "Elevate your affected joint above heart level for 15 minutes after athletic drills to encourage lymphatic drainage and prevent delayed onset swelling.",
      },
      {
        title: "Address Subtle Muscle Imbalances",
        desc: "Dedicate 2 sessions per week to single-leg glute bridges and eccentric calf raises. Symmetry between both limbs is the primary defense against sports re-injury.",
      },
    ],
    caseStudy: {
      title: "Grade-II ACL Ligament Tear & Meniscal Sprain",
      patient: "22 Yrs • State Football Striker",
      outcome: "Cleared all 5 Return-to-Sport Hop Tests • Returned to 90-Minute Competitive Football",
      quote:
        "After a traumatic tackle twist, my knee kept buckling and I feared my season was over. RevitaOrtho put me through high-velocity neuromuscular drills and Tecar therapy. In 10 weeks, my stability was 100% restored with zero joint laxity.",
    },
    faqs: [
      {
        question: "Do all ACL tears require surgical reconstruction?",
        answer:
          "No. Clinical evidence demonstrates that Grade-I and partial Grade-II ACL sprains can heal and stabilize exceptionally well through intensive neuromuscular proprioceptive rehabilitation and kinetic chain strengthening, avoiding surgery.",
      },
      {
        question: "How long before I can return to running and sprinting?",
        answer:
          "Straight-line jogging typically begins once quadriceps limb symmetry reaches 75% and there is zero joint swelling (usually 4 to 6 weeks). Full athletic sprinting and cutting require passing standardized single-leg hop clearance tests.",
      },
      {
        question: "Can torn meniscus heal without surgery?",
        answer:
          "Meniscal tears in the outer 'red zone' have a rich blood supply and heal naturally with unloaded joint mobilization, targeted radiofrequency therapy, and progressive quadriceps force re-education.",
      },
    ],
  },

  "knee-pain": {
    id: "knee-pain",
    serviceCode: "knee-pain",
    tag: "CARTILAGE CARE & JOINT PRESERVATION",
    iconName: "Activity",
    title: "Knee Pain & Preservation",
    highlight: "Non-Surgical Joint Cartilage Preservation",
    subtitle:
      "Targeted radiofrequency therapy, gentle joint distraction mobilization, and progressive quadriceps bio-loading to restore smooth joint gliding, eliminate morning knee stiffness, and climb stairs without pain or knee replacement surgery.",
    metrics: [
      { value: "92%", label: "Surgery Postponed or Avoided", sub: "Grade 1–3 Knee Osteoarthritis" },
      { value: "100%", label: "Unassisted Stair Climbing", sub: "Restored Functional Mobility" },
      { value: "3 km+", label: "Daily Walking Range", sub: "Restored in Senior Patients" },
      { value: "0", label: "Invasive Injections Needed", sub: "Natural Cartilage Unloading" },
    ],
    symptoms: [
      "Severe joint creaking, grinding, or crackling sounds (crepitus) when bending or straightening the knee.",
      "Sharp pain and weakness when descending or ascending stairs, requiring handrail support.",
      "Morning knee stiffness lasting 20–30 minutes before the joint feels 'warmed up'.",
      "Inability to walk continuous distances (under 500 meters) without throbbing ache and swelling.",
      "Feeling like the knee might buckle, give way inward, or lock temporarily during movement.",
      "Difficulty rising smoothly from low chairs, sofas, or the car seat without pushing with hands.",
    ],
    rootCauses: [
      {
        title: "Articular Cartilage Wear & Space Narrowing (Osteoarthritis)",
        desc: "Thinning of the protective hyaline cartilage cushion leads to increased friction between the femur and tibia, triggering chronic synovial inflammation and osteophyte bone spurs.",
      },
      {
        title: "Vastus Medialis Oblique (VMO) Quadriceps Weakness",
        desc: "When the inner quad muscle atrophies, the kneecap (patella) is pulled laterally off-track, causing painful patellofemoral friction with every step.",
      },
      {
        title: "Inflammatory Synovial Fluid Accumulation & Joint Binding",
        desc: "Chronic joint irritation creates excess synovial fluid and capsule stiffness, severely limiting full knee extension and flexion angles.",
      },
    ],
    protocols: [
      {
        step: "01",
        title: "Targeted Tecar Radiofrequency Diathermy",
        desc: "Delivers deep soothing cellular warmth directly into the intra-articular joint space, relaxing tight capsular fibers, reducing inflammation, and stimulating synovial fluid circulation.",
        modality: "Intra-Articular Thermal Radiofrequency",
      },
      {
        step: "02",
        title: "Maitland Joint Distraction & Patellar Glides",
        desc: "Gentle hands-on manual therapy techniques that gently separate joint surfaces and restore smooth superior-inferior patellar tracking without cartilage wear.",
        modality: "Manual Grade II–III Orthopedic Joint Mobilization",
      },
      {
        step: "03",
        title: "Closed-Kinetic-Chain Quadriceps Bio-Loading",
        desc: "Custom isometric and eccentric loading drills that strengthen the Vastus Medialis Oblique (VMO) and glutes without compressing damaged cartilage compartments.",
        modality: "Unloaded Closed-Kinetic-Chain Strengthening",
      },
      {
        step: "04",
        title: "Gait Retraining & Compartment Unloading",
        desc: "Re-educating walking foot-strike biomechanics and prescribing specialized unloading knee supports to shift body weight away from worn medial compartments.",
        modality: "Biomechanical Gait & Bracing Prescription",
      },
    ],
    surgeriesAvoided: [
      "Total Knee Replacement (TKR / Arthroplasty)",
      "Unicompartmental (Partial) Knee Replacement",
      "High Tibial Osteotomy (Bone realignment surgery)",
      "Arthroscopic Knee Debridement & 'Washing'",
    ],
    homeTips: [
      {
        title: "Avoid Low Seating",
        desc: "Never sit on low stools, floor mats, or deep sinking armchairs. Always choose chairs where your hips are slightly higher than your knees to minimize knee joint compression when standing up.",
      },
      {
        title: "Low-Impact Cycling Routine",
        desc: "Stationary cycling with zero to low resistance and a high saddle height is ideal: it circulates lubricating synovial fluid through cartilage without impact shock.",
      },
      {
        title: "Stair Climbing Technique",
        desc: "Lead with your stronger/unaffected leg when going UP the stairs ('Up with the good'), and lead with the affected leg when coming DOWN ('Down with the bad').",
      },
    ],
    caseStudy: {
      title: "Bilateral Grade-3 Knee Osteoarthritis",
      patient: "61 Yrs • Homemaker",
      outcome: "Full Independence Restored • Cancelled Bilateral Knee Replacement Surgery",
      quote:
        "I couldn't climb the stairs to my bedroom and was scheduled for bilateral knee replacement surgery. RevitaOrtho's Tecar therapy and joint unloading exercises eliminated my pain. Today I walk 3 km every morning in the park completely unassisted.",
    },
    faqs: [
      {
        question: "Can targeted physiotherapy really prevent knee replacement surgery?",
        answer:
          "Yes. In over 92% of Grade 1 to 3 osteoarthritis cases, severe pain is caused by muscle weakness, joint capsule tightness, and poor patellar tracking—NOT just cartilage thinning. Strengthening surrounding muscles and restoring joint glides relieves pressure, allowing patients to walk and take stairs comfortably without surgery.",
      },
      {
        question: "Are knee joint cracking sounds dangerous?",
        answer:
          "Painless clicking or popping (crepitus) is typically harmless and caused by gas bubbles bursting in synovial fluid. However, if cracking is accompanied by pain, swelling, or grinding, it indicates cartilage wear or patellar tracking issues that need targeted therapy.",
      },
      {
        question: "How long do the benefits of joint preservation therapy last?",
        answer:
          "When combined with our custom home strengthening exercise regimen and daily joint protection habits, clinical recovery benefits are long-lasting, often postponing or permanently eliminating the need for joint replacement.",
      },
    ],
  },
};
