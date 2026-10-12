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
    relatedCards: [
      {
        id: "spine-card-1",
        title: "L4-L5 / L5-S1 Lumbar Disc Herniation",
        badge: "Non-Surgical Decompression",
        iconName: "Bone",
        shortDesc: "Targeted negative intradiscal distraction draws extruded disc gel back inside, eliminating sciatic nerve root compression.",
        symptoms: [
          "Electric shock pain shooting down leg",
          "Sharp pinch when bending forward",
          "Foot tingling or outer toe numbness"
        ],
        modality: "Computerized Traction + Class-IV Laser",
        recovery: "60-80% pain relief in 8–10 sessions",
        surgeryAvoided: "Microdiscectomy & Spinal Fusion",
        conditionParam: "L4-L5 Lumbar Disc Herniation",
      },
      {
        id: "spine-card-2",
        title: "Radiating Sciatica Nerve Decompression",
        badge: "Nerve Flossing & MDT",
        iconName: "Zap",
        shortDesc: "Specialized mechanical directional preference exercises and neural flossing that systematically retract and centralize peripheral sciatic pain.",
        symptoms: [
          "Burning nerve pain down buttock & hamstring",
          "Inability to sit longer than 15 minutes",
          "Morning calf tightness and heel numbness"
        ],
        modality: "McKenzie MDT + Neural Mobilization",
        recovery: "Walking comfort restored in 3–5 sessions",
        surgeryAvoided: "Epidural Steroid Nerve Injections",
        conditionParam: "Sciatica Nerve Compression",
      },
      {
        id: "spine-card-3",
        title: "Cervical Spondylosis & Arm Radiculopathy",
        badge: "Cervical Distraction",
        iconName: "Stethoscope",
        shortDesc: "Precision cervical spine distraction decompresses narrowed nerve foramina at C5-C6 / C6-C7, stopping painful arm radiculopathy and finger numbness.",
        symptoms: [
          "Gnawing ache between shoulder blades",
          "Shooting numbness down forearm into thumb",
          "Restricted painful neck turning while driving"
        ],
        modality: "Computer-Monitored Cervical Traction",
        recovery: "Full neck rotation restored in 2–3 weeks",
        surgeryAvoided: "Anterior Cervical Discectomy (ACDF)",
        conditionParam: "Cervical Spondylosis Radiculopathy",
      },
      {
        id: "spine-card-4",
        title: "Spinal Canal Stenosis & Neurogenic Claudication",
        badge: "Canal Opening Protocol",
        iconName: "Activity",
        shortDesc: "Targeted lumbar flexion-distraction therapies that gently widen intervertebral canal diameters, eliminating heaviness and cramping when walking.",
        symptoms: [
          "Heavy, crampy legs after 100 meters walking",
          "Relief when leaning forward on support",
          "Chronic lower back ache upon standing"
        ],
        modality: "Flexion-Distraction + Hydrocollator Heat",
        recovery: "Continuous walking range doubled in 3 weeks",
        surgeryAvoided: "Laminectomy & Bony Decompression",
        conditionParam: "Lumbar Spinal Canal Stenosis",
      },
      {
        id: "spine-card-5",
        title: "Facet Joint Arthropathy & Acute Lumbar Spasm",
        badge: "Manual Joint Mobilization",
        iconName: "Bone",
        shortDesc: "Maitland orthopedic joint glides unlock jammed facet joints and calm reflex muscle guarding without reliance on muscle relaxants.",
        symptoms: [
          "Severe catch in the back when standing up",
          "Localized sharp ache on one side of spine",
          "Morning stiffness taking 45 mins to loosen"
        ],
        modality: "Maitland Grade III-IV Glides + Tecar Therapy",
        recovery: "Acute muscle spasm calmed in 2–4 days",
        surgeryAvoided: "Radiofrequency Facet Rhizotomy",
        conditionParam: "Facet Joint Arthropathy & Spasm",
      },
      {
        id: "spine-card-6",
        title: "Tech-Neck & Postural Kyphotic Realignment",
        badge: "Deep Stabilizer Biofeedback",
        iconName: "Activity",
        shortDesc: "Biofeedback retraining of deep cervical flexors and thoracic extensors to permanently eliminate tech-neck slouch, hunching, and daily tension headaches.",
        symptoms: [
          "Upper back fatigue at end of workday",
          "Chronic occipital base tension headaches",
          "Hunched shoulders and forward head tilt"
        ],
        modality: "Pressure Biofeedback + Ergonomic Setup",
        recovery: "Postural balance restored in 3 weeks",
        surgeryAvoided: "Chronic NSAID Painkiller Dependence",
        conditionParam: "Tech-Neck & Postural Kyphosis",
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
    relatedCards: [
      {
        id: "neck-card-1",
        title: "Cervical Disc Bulge & Nerve Compression (C5-C7)",
        badge: "Cervical Decompression",
        iconName: "Stethoscope",
        shortDesc: "Precise computerized distraction expands narrowed cervical foramina to pull bulging disc material away from irritated nerves.",
        symptoms: [
          "Sharp shooting pain traveling into arm",
          "Numbness and pins-needles in thumb/index finger",
          "Pain relieved temporarily by placing hand on head"
        ],
        modality: "Motorized Cervical Traction + Class-IV Laser",
        recovery: "Nerve irritation reduced 70% in 2–3 weeks",
        surgeryAvoided: "Anterior Cervical Discectomy & Fusion (ACDF)",
        conditionParam: "Cervical Disc Bulge C5-C7",
      },
      {
        id: "neck-card-2",
        title: "Tech-Neck Posture & Forward Head Syndrome",
        badge: "Ergonomic Realignment",
        iconName: "Activity",
        shortDesc: "Re-educates inhibited deep cervical flexors (Longus Colli) to bring the head back over the thoracic cage and eliminate neck strain.",
        symptoms: [
          "Severe neck stiffness after computer/phone use",
          "Hunched upper back posture and rounded shoulders",
          "Upper trapezius burning sensation by 3 PM"
        ],
        modality: "Pressure Biofeedback + Ergonomic Setup",
        recovery: "Upright head angle restored in 3 weeks",
        surgeryAvoided: "Chronic Cervical Degenerative Wear",
        conditionParam: "Tech-Neck Forward Head Syndrome",
      },
      {
        id: "neck-card-3",
        title: "Cervicogenic Tension Headaches",
        badge: "Suboccipital Release",
        iconName: "Bone",
        shortDesc: "Targeted myofascial release of suboccipital muscular spasms at the base of skull to permanently shut down radiating ocular headache pain.",
        symptoms: [
          "Headache starting at neck base radiating behind eyes",
          "Throbbing skull pressure triggered by neck turn",
          "Unresponsive to standard paracetamol painkillers"
        ],
        modality: "Clinical Dry Needling + Suboccipital Release",
        recovery: "Headache frequency reduced 90% in 2 weeks",
        surgeryAvoided: "Chronic Prescription Painkiller Overuse",
        conditionParam: "Cervicogenic Tension Headaches",
      },
      {
        id: "neck-card-4",
        title: "Upper Trapezius Trigger Points & Knots",
        badge: "Myofascial Trigger Needling",
        iconName: "Zap",
        shortDesc: "Clinical monofilament dry needling immediately resets hyper-irritable taut bands in the trapezius and levator scapulae muscles.",
        symptoms: [
          "Hard painful rocks/knots in upper shoulder blades",
          "Sharp spasm when turning head to blind spot while driving",
          "Deep radiating ache between scapula and spine"
        ],
        modality: "Precision Dry Needling + Heat Therapy",
        recovery: "Immediate knot release in 1–2 visits",
        surgeryAvoided: "Cortisone Trigger Point Injections",
        conditionParam: "Trapezius Myofascial Trigger Points",
      },
      {
        id: "neck-card-5",
        title: "Whiplash & Acute Cervical Acceleration Sprain",
        badge: "Gentle Phase-Based Rehab",
        iconName: "Activity",
        shortDesc: "Safe gentle isometric stabilization and lymphatic mobilization to resolve sudden neck ligament strain following vehicular jerks or falls.",
        symptoms: [
          "Guarded neck stiffness unable to turn 20 degrees",
          "Dizziness and visual fatigue following neck jerk",
          "Generalized shoulder and neck hyper-sensitivity"
        ],
        modality: "Gentle Isometric Loading + Cryo-Laser",
        recovery: "Normal range restored in 3–4 weeks",
        surgeryAvoided: "Chronic Post-Traumatic Neck Instability",
        conditionParam: "Whiplash & Cervical Sprain",
      },
      {
        id: "neck-card-6",
        title: "Thoracic Outlet Syndrome & Arm Heaviness",
        badge: "Neurovascular Mobilization",
        iconName: "Stethoscope",
        shortDesc: "Pectoralis minor stretching and first-rib mobilization to decompress brachial plexus vessels causing heavy, tired, or cold hands.",
        symptoms: [
          "Arms feel heavy or fatigued when held overhead",
          "Coldness, paleness, or swelling in hands and fingers",
          "Numbness in ring and pinky fingers"
        ],
        modality: "First-Rib Mobilization + Scalene Release",
        recovery: "Full arm sensation in 4 weeks",
        surgeryAvoided: "First Rib Resection Surgery",
        conditionParam: "Thoracic Outlet Syndrome",
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
    relatedCards: [
      {
        id: "sports-card-1",
        title: "ACL & PCL Cruciate Ligament Sprain / Tear",
        badge: "Non-Surgical & Post-Op Protocol",
        iconName: "Zap",
        shortDesc: "High-velocity neuromuscular stabilization and hamstring-to-quad force rebalancing that prevents knee valgus collapse and restores high-level athletic stability.",
        symptoms: [
          "Knee buckling or giving way on pivot",
          "Rapid intra-articular swelling after match twist",
          "Inability to decelerate or sprint safely"
        ],
        modality: "Neuromuscular Proprioception + Tecar Therapy",
        recovery: "High-level athletic agility in 8–12 weeks",
        surgeryAvoided: "Unnecessary ACL Reconstruction (Grade I/II)",
        conditionParam: "ACL / PCL Cruciate Ligament Rehab",
      },
      {
        id: "sports-card-2",
        title: "Meniscus Tear Repair & Joint Line Care",
        badge: "Cartilage Preservation",
        iconName: "Activity",
        shortDesc: "Targeted joint distraction and unloaded rotation protocols that stimulate circulation in the vascular red-zone of the meniscus, avoiding surgical resection.",
        symptoms: [
          "Sharp joint line ache on squatting or twisting",
          "Clicking or temporary locking in the knee",
          "Pain when sitting cross-legged on floor"
        ],
        modality: "Unloaded Joint Gliding + Quadriceps Bio-Loading",
        recovery: "Deep knee bend comfort in 4–6 weeks",
        surgeryAvoided: "Arthroscopic Meniscectomy (Cutting)",
        conditionParam: "Meniscus Cartilage Tear Rehab",
      },
      {
        id: "sports-card-3",
        title: "Rotator Cuff Tendonitis & Shoulder Impingement",
        badge: "Overhead Athletic Freedom",
        iconName: "Bone",
        shortDesc: "German Matrix Rhythm Therapy and scapulohumeral rhythm correction to eliminate subacromial tendon friction and restore a pain-free 170° overhead reach arc.",
        symptoms: [
          "Sharp catch when lifting arm to side or overhead",
          "Throbbing ache at night when lying on shoulder",
          "Weakness when serving in tennis or badminton"
        ],
        modality: "Matrix Rhythm (MaRhyThe) + Scapular Glides",
        recovery: "160°+ overhead reach in 3–5 weeks",
        surgeryAvoided: "Subacromial Decompression Surgery",
        conditionParam: "Rotator Cuff & Shoulder Impingement",
      },
      {
        id: "sports-card-4",
        title: "Runner's Knee & Patellofemoral Tracking (PFPS)",
        badge: "Kinetic Chain Alignment",
        iconName: "Activity",
        shortDesc: "Real-time biomechanical gait assessment and targeted Vastus Medialis Oblique (VMO) loading to stop painful patellar friction during running and stair descents.",
        symptoms: [
          "Dull ache around or behind the kneecap",
          "Intense pain when jogging or running downhill",
          "Stiffness after sitting with bent knees (Movie Sign)"
        ],
        modality: "Biomechanical Motion Analysis + VMO Retraining",
        recovery: "Pain-free running clearance in 3–4 weeks",
        surgeryAvoided: "Lateral Retinacular Release Surgery",
        conditionParam: "Runner's Knee & Patellofemoral Syndrome",
      },
      {
        id: "sports-card-5",
        title: "Ankle Inversion Sprain & ATFL Ligament Instability",
        badge: "Proprioceptive Balance",
        iconName: "Zap",
        shortDesc: "Dynamic perturbation drills on wobble beams combined with kinesiology stability taping to strengthen peroneal muscles and eliminate chronic twisting fears.",
        symptoms: [
          "Swelling and bruising on outer ankle bone",
          "Fear of ankle rolling when stepping on uneven ground",
          "Persistent stiffness and weak push-off"
        ],
        modality: "Perturbation Platforms + Kinesio Taping",
        recovery: "Cutting and jumping clearance in 2–4 weeks",
        surgeryAvoided: "Brostrom Ligament Reconstruction Surgery",
        conditionParam: "Ankle Sprain & ATFL Ligament Care",
      },
      {
        id: "sports-card-6",
        title: "Hamstring, Groin & Calf Muscle Tears / Strains",
        badge: "High-Tensile Eccentric Loading",
        iconName: "Activity",
        shortDesc: "Nordic hamstring curls and high-load eccentric deceleration drills that reconstruct torn muscle fibers into organized high-tensile collagen, preventing re-tears.",
        symptoms: [
          "Sudden sharp pull while sprinting or kicking",
          "Painful tight knot in back of thigh or calf",
          "Inability to reach full stride speed without pulling"
        ],
        modality: "Nordic Eccentric Protocols + Tecar Diathermy",
        recovery: "Full sprint acceleration in 4–6 weeks",
        surgeryAvoided: "Chronic Fibrotic Scar Tissue Complications",
        conditionParam: "Hamstring & Groin Muscle Tear Rehab",
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
    relatedCards: [
      {
        id: "knee-card-1",
        title: "Knee Osteoarthritis (Grade 1–3) Preservation",
        badge: "Avoid Knee Replacement",
        iconName: "Activity",
        shortDesc: "Cartilage-unloading biomechanics and intra-articular cellular Tecar diathermy that eliminate bone-on-bone friction and restore smooth joint gliding.",
        symptoms: [
          "Creaking, grinding sounds (crepitus) on stairs",
          "Morning stiffness lasting 20–30 minutes",
          "Severe pain when walking more than 500 meters"
        ],
        modality: "Targeted Tecar Diathermy + Joint Distraction",
        recovery: "Independent stair climbing in 2–3 weeks",
        surgeryAvoided: "Total Knee Replacement (TKR / Arthroplasty)",
        conditionParam: "Knee Osteoarthritis Joint Preservation",
      },
      {
        id: "knee-card-2",
        title: "Patellar Maltracking & Subpatellar Friction",
        badge: "Patellofemoral Alignment",
        iconName: "Bone",
        shortDesc: "Gentle Maitland manual patellar glides and bio-loaded closed-chain quad exercises that center the kneecap in the femoral groove, stopping cartilage wear.",
        symptoms: [
          "Kneecap feels like it shifts or grinds painfully",
          "Sharp catching pain when standing up from low sofas",
          "Swelling around the front of knee after walking"
        ],
        modality: "Maitland Patellar Glides + VMO Bio-Loading",
        recovery: "Smooth knee bending without catch in 3 weeks",
        surgeryAvoided: "Patellar Chondroplasty & Debridement",
        conditionParam: "Patellar Maltracking & Friction",
      },
      {
        id: "knee-card-3",
        title: "Hip Joint Osteoarthritis & Trochanteric Bursitis",
        badge: "Deep Joint Decompression",
        iconName: "Activity",
        shortDesc: "Long-axis hip distraction manual mobilization and deep gluteal tendon re-education to eliminate severe groin pinching, hip stiffness, and night side-sleeping pain.",
        symptoms: [
          "Deep ache in groin or outer hip while walking",
          "Unable to sleep on the affected side due to pain",
          "Struggling to put on socks or cross legs"
        ],
        modality: "Long-Axis Hip Distraction + Tecar Diathermy",
        recovery: "Pain-free walking range in 4–6 weeks",
        surgeryAvoided: "Total Hip Replacement (THR Surgery)",
        conditionParam: "Hip Osteoarthritis & Trochanteric Bursitis",
      },
      {
        id: "knee-card-4",
        title: "Frozen Shoulder (Adhesive Capsulitis) Release",
        badge: "3-Phase Capsular Release",
        iconName: "Stethoscope",
        shortDesc: "German Matrix Rhythm Therapy combined with end-range glenohumeral glides to gently break tight fibrotic capsule bands and eliminate agonizing night spasms.",
        symptoms: [
          "Severe restriction reaching behind back or overhead",
          "Excruciating night pain when turning in bed",
          "Arm feels locked into side of chest"
        ],
        modality: "Matrix Rhythm Therapy (MaRhyThe) + Glenohumeral Glides",
        recovery: "160° overhead reach restored in 4–6 weeks",
        surgeryAvoided: "Arthroscopic Capsular Release / Manipulation",
        conditionParam: "Frozen Shoulder Capsular Release",
      },
      {
        id: "knee-card-5",
        title: "Ankle Joint Arthritic Stiffness & Post-Fracture Care",
        badge: "Talocrural Joint Mobilization",
        iconName: "Bone",
        shortDesc: "Mulligan Mobilization with Movement (MWM) and cellular thermal diathermy to restore dorsiflexion glide and eliminate limping after prolonged standing.",
        symptoms: [
          "Rigid ankle when stepping down off curbs",
          "Limping gait after sitting or resting",
          "Swelling around ankle malleolus in evening"
        ],
        modality: "Mulligan MWM + Thermal Diathermy",
        recovery: "Natural limp-free walking in 3–4 weeks",
        surgeryAvoided: "Ankle Joint Fusion (Arthrodesis)",
        conditionParam: "Ankle Arthritic Stiffness & Post-Fracture",
      },
      {
        id: "knee-card-6",
        title: "Non-Surgical Cartilage Regeneration & Offloading",
        badge: "Lifetime Joint Longevity",
        iconName: "Zap",
        shortDesc: "Custom compartment offloader mechanics, low-impact elliptical stimulation, and synovial fluid pumping drills that protect natural articular cartilage for decades.",
        symptoms: [
          "Fear of progressive joint wear and deformity",
          "Soreness after light household chores or walking",
          "Loss of joint shock-absorption cushion"
        ],
        modality: "Biomechanical Offloading + Closed-Kinetic Drills",
        recovery: "Cartilage wear halted; avoids surgery in 94% cases",
        surgeryAvoided: "High Tibial Osteotomy & Knee Surgery",
        conditionParam: "Non-Surgical Cartilage Offloading",
      },
    ],
  },
};
