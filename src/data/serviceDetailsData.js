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
        title: "L4-L5 / L5-S1 Lumbar Disc Herniation & Sciatica",
        badge: "Spine Surgery Avoided",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80",
        duration: "10–12 Sessions",
        categoryMeta: "Spine & Sciatica • Non-Surgical Decompression",
        presentation: "Severe electric radiating nerve pain down right buttock to foot. Sitting tolerance under 15 minutes. Advised microdiscectomy surgery.",
        protocol: "Computerized logarithmic spinal decompression + Class-IV deep cold laser + McKenzie extension & deep transverse abdominal stabilization.",
        outcome: "100% pain-free. Herniated disc nucleus drawn away from nerve root. Microdiscectomy surgery completely cancelled.",
        surgeryAvoided: "Microdiscectomy Surgery Avoided",
        conditionParam: "L4-L5 Lumbar Disc Herniation",
      },
      {
        id: "spine-card-2",
        title: "Radiating Sciatica Nerve Decompression",
        badge: "Nerve Pain Deactivated",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80",
        duration: "8–10 Sessions",
        categoryMeta: "Sciatica Care • Neural Mobilization",
        presentation: "Constant burning numbness and pins-and-needles down outer calf and foot. Unable to walk more than 200 meters without resting.",
        protocol: "Targeted neural flossing & neurodynamic glides + European Tecar diathermy + spinal facet decompression traction.",
        outcome: "Normal walking range fully restored without leg pain. Epidural steroid injections avoided.",
        surgeryAvoided: "Epidural Injections Avoided",
        conditionParam: "Sciatica Nerve Compression",
      },
      {
        id: "spine-card-3",
        title: "Cervical Spondylosis & Arm Radiculopathy",
        badge: "Full Neck Mobility",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80",
        duration: "9 Sessions",
        categoryMeta: "Cervical Spine • Calibrated Traction",
        presentation: "Severe burning ache between shoulder blades and electric tingling traveling down arm into thumb. Restricted neck rotation while driving.",
        protocol: "Motorized cervical decompression traction + trigger point dry needling + deep cervical flexor pressure biofeedback.",
        outcome: "Full 80° neck rotation restored. Zero arm tingling. Averted cervical spinal fusion (ACDF).",
        surgeryAvoided: "Cervical Fusion (ACDF) Avoided",
        conditionParam: "Cervical Spondylosis Radiculopathy",
      },
      {
        id: "spine-card-4",
        title: "Spinal Canal Stenosis & Neurogenic Claudication",
        badge: "Walking Restored",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80",
        duration: "12–14 Sessions",
        categoryMeta: "Lumbar Stenosis • Flexion-Distraction",
        presentation: "Heavy, cramping legs and lower back aching after 5 minutes of standing. Relieved only by sitting or bending forward.",
        protocol: "Cox flexion-distraction intervertebral canal decompression + hydrocollator therapy + unloaded pelvic tilt stabilization.",
        outcome: "Continuous walking tolerance increased from 100 meters to 2.5 km. Bony laminectomy surgery averted.",
        surgeryAvoided: "Laminectomy Surgery Avoided",
        conditionParam: "Lumbar Spinal Canal Stenosis",
      },
      {
        id: "spine-card-5",
        title: "Facet Joint Arthropathy & Acute Lumbar Spasm",
        badge: "Acute Spasm Relieved",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80",
        duration: "6–8 Sessions",
        categoryMeta: "Orthopedic Manual Therapy • Joint Glides",
        presentation: "Severe locked spasm in lower back when standing up from chair. Inability to bend forward to tie shoes. Intense morning stiffness.",
        protocol: "Maitland Grade III–IV oscillatory facet joint mobilization + deep cellular thermal therapy + core corset re-education.",
        outcome: "Full spinal flexion restored with zero sharp catches. Off all prescription muscle relaxants.",
        surgeryAvoided: "Facet Rhizotomy Avoided",
        conditionParam: "Facet Joint Arthropathy & Spasm",
      },
      {
        id: "spine-card-6",
        title: "Tech-Neck & Postural Kyphotic Realignment",
        badge: "Posture Corrected",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=700&q=80",
        duration: "6 Sessions",
        categoryMeta: "Ergonomics • Deep Stabilizer Retraining",
        presentation: "Chronic forward head posture, rounded shoulders, upper trapezius fatigue, and daily occipital tension headaches by evening.",
        protocol: "Cervical postural biofeedback + suboccipital release + thoracic extension mobility + ergonomic workstation audit.",
        outcome: "Forward head angle corrected by 4.2 cm. Tension headaches completely eradicated.",
        surgeryAvoided: "Painkiller Dependence Ended",
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
        badge: "Athletic Return",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=80",
        duration: "10–12 Weeks",
        categoryMeta: "Sports Medicine • Neuromuscular Proprioception",
        presentation: "Grade-II ACL sprain with knee giving-way episodes during rotational cuts. Joint effusion and fear of re-injury during football.",
        protocol: "High-velocity neuromuscular reactive perturbation drills + Tecar collagen remodeling + eccentric kinetic chain loading.",
        outcome: "Passed all 5 FIFA single-leg hop clearance tests. Cleared for 90-minute tournament match play.",
        surgeryAvoided: "Reconstruction Surgery Avoided",
        conditionParam: "ACL / PCL Cruciate Ligament Rehab",
      },
      {
        id: "sports-card-2",
        title: "Meniscus Tear Repair & Joint Line Care",
        badge: "Cartilage Preserved",
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80",
        duration: "6–8 Weeks",
        categoryMeta: "Knee Cartilage • Non-Surgical Loading",
        presentation: "Medial joint line pinching and clicking during squats. Deep twisting pain. Advised arthroscopic meniscal resection.",
        protocol: "Targeted joint distraction glides + vascular red-zone tecar thermal stimulation + unloaded closed-kinetic chain quad retraining.",
        outcome: "Squatting and pivoting pain-free. Meniscectomy surgery completely cancelled.",
        surgeryAvoided: "Meniscectomy Surgery Avoided",
        conditionParam: "Meniscus Cartilage Tear Rehab",
      },
      {
        id: "sports-card-3",
        title: "Rotator Cuff Tendonitis & Shoulder Impingement",
        badge: "Full 170° Reach",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=700&q=80",
        duration: "5 Weeks",
        categoryMeta: "Shoulder Rehab • Matrix Rhythm Therapy",
        presentation: "Sharp catch when lifting arm to side or overhead. Agonizing night throbbing while sleeping on shoulder. Inability to serve in tennis.",
        protocol: "German Matrix Rhythm Therapy (MaRhyThe®) + glenohumeral end-range glides + scapulohumeral rhythm correction.",
        outcome: "170° pain-free overhead vertical reach restored. Returned to competitive tennis serves.",
        surgeryAvoided: "Subacromial Decompression Avoided",
        conditionParam: "Rotator Cuff & Shoulder Impingement",
      },
      {
        id: "sports-card-4",
        title: "Runner's Knee & Patellofemoral Tracking (PFPS)",
        badge: "Marathon Cleared",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=700&q=80",
        duration: "4 Weeks",
        categoryMeta: "Running Medicine • Motion Analysis",
        presentation: "Severe retro-patellar burning ache after 2 km of running and during downhill stair descent. Patellar tracking deviation.",
        protocol: "High-speed video gait motion analysis + Vastus Medialis Oblique (VMO) targeted bio-loading + gluteus medius stabilization.",
        outcome: "Completed 10 km half-marathon simulation with zero knee pain or swelling.",
        surgeryAvoided: "Lateral Retinacular Release Avoided",
        conditionParam: "Runner's Knee & Patellofemoral Syndrome",
      },
      {
        id: "sports-card-5",
        title: "Ankle Inversion Sprain & ATFL Instability",
        badge: "Stability Restored",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=700&q=80",
        duration: "3–4 Weeks",
        categoryMeta: "Ankle Rehab • Proprioceptive Balance",
        presentation: "Recurrent rolling of ankle on uneven ground. Outer lateral ankle malleolus edema and weak eversion strength.",
        protocol: "Multi-axis wobble beam balance training + kinesiology ligament taping + high-tensile fibular muscle strengthening.",
        outcome: "100% subconscious joint position stability restored. Zero hesitation during athletic cuts.",
        surgeryAvoided: "Brostrom Ligament Surgery Avoided",
        conditionParam: "Ankle Sprain & ATFL Ligament Care",
      },
      {
        id: "sports-card-6",
        title: "Hamstring, Groin & Calf Muscle Tears / Strains",
        badge: "Zero Re-Tear Rate",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=700&q=80",
        duration: "4–6 Weeks",
        categoryMeta: "Muscle Kinetics • High-Load Eccentrics",
        presentation: "Sudden sharp muscle tear while sprinting. Dense scar knot in biceps femoris with recurring pulls upon acceleration.",
        protocol: "Nordic eccentric hamstring protocol + targeted radiofrequency scar mobilization + high-speed deceleration mechanics.",
        outcome: "Full sprint velocity achieved without muscle tightness. High tensile collagen remodeling complete.",
        surgeryAvoided: "Fibrotic Scar Complications Avoided",
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
        title: "Knee Osteoarthritis (Grade 1–3) Cartilage Preservation",
        badge: "Knee Surgery Avoided",
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80",
        duration: "6 Weeks (18 Sessions)",
        categoryMeta: "Joint Preservation • Cartilage Unloading",
        presentation: "Severe joint creaking, morning stiffness, and intense pain when climbing stairs. Advised bilateral knee replacement (TKR).",
        protocol: "Targeted Tecar Radiofrequency + Maitland Joint Glides + VMO Bio-Loading + Compartment Unloading Knee Support.",
        outcome: "Climbs stairs unassisted without pain. Daily walking range restored to 3 km. Cancelled knee replacement surgery.",
        surgeryAvoided: "Knee Replacement (TKR) Cancelled",
        conditionParam: "Knee Osteoarthritis Joint Preservation",
      },
      {
        id: "knee-card-2",
        title: "Patellar Maltracking & Subpatellar Friction",
        badge: "Smooth Glide Restored",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80",
        duration: "3–4 Weeks",
        categoryMeta: "Patellofemoral • Glide Alignment",
        presentation: "Kneecap feels like it shifts painfully when standing from low sofa. Audible crunching and swelling around anterior knee.",
        protocol: "Maitland patellar glide mobilizations + closed-kinetic-chain VMO loading + IT-band myofascial release.",
        outcome: "Kneecap tracks centrally in trochlear groove. Painless sit-to-stand transitions without knee crunching.",
        surgeryAvoided: "Patellar Chondroplasty Avoided",
        conditionParam: "Patellar Maltracking & Friction",
      },
      {
        id: "knee-card-3",
        title: "Hip Joint Osteoarthritis & Trochanteric Bursitis",
        badge: "Hip Mobility Unlocked",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80",
        duration: "5–6 Weeks",
        categoryMeta: "Hip Joint • Long-Axis Distraction",
        presentation: "Deep groin ache while walking and severe inability to sleep on affected hip side. Restricted internal rotation range.",
        protocol: "Long-axis manual hip joint distraction + Tecar thermal bursa deactivation + deep gluteal stabilizer strengthening.",
        outcome: "Sleeps soundly on both sides. Pain-free continuous walking for over 45 minutes.",
        surgeryAvoided: "Hip Replacement (THR) Avoided",
        conditionParam: "Hip Osteoarthritis & Trochanteric Bursitis",
      },
      {
        id: "knee-card-4",
        title: "Frozen Shoulder (Adhesive Capsulitis) Release",
        badge: "Full Mobility Restored",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=700&q=80",
        duration: "5 Weeks (15 Sessions)",
        categoryMeta: "Upper Extremity • 3-Phase Capsular Release",
        presentation: "Overhead arm elevation locked at 65°. Inability to comb hair or touch lower back. Severe night throbbing preventing sleep.",
        protocol: "German Matrix Rhythm Therapy (MaRhyThe®) + glenohumeral end-range glides + hydrocollator heat packs.",
        outcome: "Full 170° vertical arm reach restored. Zero night pain. Completely off painkillers.",
        surgeryAvoided: "Surgical Capsular Release Avoided",
        conditionParam: "Frozen Shoulder Capsular Release",
      },
      {
        id: "knee-card-5",
        title: "Ankle Arthritic Stiffness & Post-Fracture Rigidity",
        badge: "Limp-Free Gait",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80",
        duration: "4 Weeks",
        categoryMeta: "Talocrural Joint • Mulligan Mobilization",
        presentation: "Rigid ankle joint following plaster cast removal. Limping gait and inability to step down stairs smoothly.",
        protocol: "Mulligan Mobilization with Movement (MWM) + cellular diathermy + progressive weight-bearing dorsiflexion glides.",
        outcome: "Full 20° dorsiflexion restored. Walks with smooth natural roll-over and zero limp.",
        surgeryAvoided: "Ankle Fusion (Arthrodesis) Avoided",
        conditionParam: "Ankle Arthritic Stiffness & Post-Fracture",
      },
      {
        id: "knee-card-6",
        title: "Non-Surgical Cartilage Regeneration & Offloading",
        badge: "Lifetime Cartilage Care",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=700&q=80",
        duration: "Ongoing Joint Care",
        categoryMeta: "Cartilage Preservation • Biomechanical Offloading",
        presentation: "Progressive joint space narrowing on standing X-rays. Fear of premature joint replacement surgery.",
        protocol: "Unloading joint braces + low-impact synovial fluid pumping drills + closed-kinetic chain shock-absorption drills.",
        outcome: "Cartilage wear halted. Functional mobility score improved by 85%. Surgery avoided in 94% of cases.",
        surgeryAvoided: "High Tibial Osteotomy Avoided",
        conditionParam: "Non-Surgical Cartilage Offloading",
      },
    ],
  },
};
