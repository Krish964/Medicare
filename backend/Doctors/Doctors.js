const doctors = [
  {
    id: 1,
    name: "Dr. Radheshyam Sharma",
    speciality: "Cardiologist",
    hospital: "MediCare Heart Institute",
    experience: 12,
    fee: 700,
    rating: 4.9,
    reviews: 324,
    availability: "Available Today",
    timing: "10:00 AM - 2:00 PM",
    languages: ["Hindi", "English"],
    location: "Delhi",
    patients: "2.4k+",
    image: "https://ui-avatars.com/api/?name=Dr+Radheshyam+Sharma&background=0D8ABC&color=fff&size=512",
    degree: "MBBS, MD Cardiology",
    consultationMode: ["In Clinic", "Video Consultation"],
    address: "12, Ring Road, Lajpat Nagar, New Delhi",
    about:
      "Dr. Radheshyam Sharma is a highly trusted cardiologist known for treating heart rhythm disorders, hypertension, chest pain, and preventive cardiac health. He focuses on combining clinical precision with patient-friendly consultation so that every patient clearly understands their condition and treatment plan.",
    description:
      "With more than 12 years of experience in advanced cardiac care, Dr. Sharma has worked with reputed multi-speciality hospitals and helped thousands of patients manage heart-related conditions effectively. He is especially known for detailed risk evaluation, non-invasive heart care guidance, and long-term treatment planning for lifestyle-related cardiac diseases.",
    education: [
      "MBBS - Maulana Azad Medical College",
      "MD - Internal Medicine",
      "DM - Cardiology"
    ],
    services: [
      "ECG & cardiac evaluation",
      "Hypertension treatment",
      "Chest pain consultation",
      "Heart failure management",
      "Preventive heart screening"
    ],
    achievements: [
      "12+ years of cardiac practice",
      "Handled 2,000+ heart consultations",
      "Known for patient-friendly treatment plans"
    ],
    slots: ["10:00 AM", "11:30 AM", "01:00 PM"],
  },
  {
    id: 2,
    name: "Dr. Priya Mehta",
    speciality: "Dermatologist",
    hospital: "SkinCare Clinic",
    experience: 8,
    fee: 500,
    rating: 4.8,
    reviews: 278,
    availability: "Available Tomorrow",
    timing: "11:00 AM - 4:00 PM",
    languages: ["Hindi", "English"],
    location: "Noida",
    patients: "1.8k+",
    image: "https://ui-avatars.com/api/?name=Dr+Priya+Mehta&background=14B8A6&color=fff&size=512",
    degree: "MBBS, MD Dermatology",
    consultationMode: ["In Clinic", "Video Consultation"],
    address: "Sector 62, Noida, Uttar Pradesh",
    about:
      "Dr. Priya Mehta specializes in acne treatment, pigmentation care, hair fall solutions, and advanced skin consultation. She is appreciated for creating simple skincare routines that are realistic and effective for everyday life.",
    description:
      "She has extensive experience in treating chronic skin concerns, cosmetic dermatology cases, and adolescent skin issues. Her approach balances evidence-based dermatology with personalized treatment planning, helping patients gain confidence along with healthier skin.",
    education: [
      "MBBS - Lady Hardinge Medical College",
      "MD - Dermatology"
    ],
    services: [
      "Acne treatment",
      "Pigmentation care",
      "Hair fall consultation",
      "Skin allergy treatment",
      "Cosmetic dermatology guidance"
    ],
    achievements: [
      "8+ years of dermatology experience",
      "Trusted by young adults for acne care",
      "High patient satisfaction in skin consultations"
    ],
    slots: ["11:00 AM", "01:30 PM", "03:30 PM"],
  },
  {
    id: 3,
    name: "Dr. Arjun Patel",
    speciality: "Orthopedic",
    hospital: "Ortho Plus Hospital",
    experience: 10,
    fee: 650,
    rating: 4.7,
    reviews: 241,
    availability: "Available Today",
    timing: "2:00 PM - 6:00 PM",
    languages: ["Hindi", "English", "Gujarati"],
    location: "Ahmedabad",
    patients: "2.1k+",
    image: "https://ui-avatars.com/api/?name=Dr+Arjun+Patel&background=6366F1&color=fff&size=512",
    degree: "MBBS, MS Orthopedics",
    consultationMode: ["In Clinic"],
    address: "Satellite Road, Ahmedabad, Gujarat",
    about:
      "Dr. Arjun Patel treats joint pain, fracture recovery, sports injuries, and mobility-related issues with a focus on long-term functional improvement.",
    description:
      "He has helped patients across all age groups recover from bone injuries, knee problems, posture issues, and chronic musculoskeletal pain. He is especially valued for explaining rehabilitation steps clearly and guiding patients toward faster and safer recovery.",
    education: [
      "MBBS - B.J. Medical College",
      "MS - Orthopedics"
    ],
    services: [
      "Joint pain treatment",
      "Fracture follow-up",
      "Sports injury consultation",
      "Knee and shoulder pain care",
      "Bone health guidance"
    ],
    achievements: [
      "10+ years in orthopedic care",
      "Special interest in sports injury recovery",
      "Strong rehabilitation-focused treatment style"
    ],
    slots: ["02:00 PM", "04:00 PM", "05:30 PM"],
  },
  {
    id: 4,
    name: "Dr. Neha Kapoor",
    speciality: "Pediatrician",
    hospital: "Sunrise Children Hospital",
    experience: 9,
    fee: 550,
    rating: 4.9,
    reviews: 390,
    availability: "Available Today",
    timing: "9:00 AM - 1:00 PM",
    languages: ["Hindi", "English"],
    location: "Delhi",
    patients: "3k+",
    image: "https://ui-avatars.com/api/?name=Dr+Neha+Kapoor&background=EC4899&color=fff&size=512",
    degree: "MBBS, MD Pediatrics",
    consultationMode: ["In Clinic", "Video Consultation"],
    address: "Rohini, New Delhi",
    about:
      "Dr. Neha Kapoor is a caring pediatrician known for child wellness checkups, fever care, nutrition guidance, and growth monitoring.",
    description:
      "Parents appreciate her calm communication style and her ability to explain treatment clearly for newborns, toddlers, and school-age children. She regularly handles vaccination planning, common infections, digestive issues, and developmental health queries.",
    education: [
      "MBBS - UCMS Delhi",
      "MD - Pediatrics"
    ],
    services: [
      "Child fever consultation",
      "Vaccination guidance",
      "Growth and nutrition monitoring",
      "Newborn care",
      "General child health checkup"
    ],
    achievements: [
      "9+ years in pediatric care",
      "3000+ young patients guided",
      "Highly rated by parents for child-friendly consultation"
    ],
    slots: ["09:00 AM", "10:30 AM", "12:30 PM"],
  },
  {
    id: 5,
    name: "Dr. Aman Verma",
    speciality: "Neurologist",
    hospital: "Metro Neuro Care",
    experience: 14,
    fee: 900,
    rating: 4.6,
    reviews: 187,
    availability: "Available Tomorrow",
    timing: "1:00 PM - 5:00 PM",
    languages: ["Hindi", "English"],
    location: "Gurugram",
    patients: "2.9k+",
    image: "https://ui-avatars.com/api/?name=Dr+Aman+Verma&background=8B5CF6&color=fff&size=512",
    degree: "MBBS, MD Medicine, DM Neurology",
    consultationMode: ["In Clinic", "Video Consultation"],
    address: "DLF Phase 2, Gurugram, Haryana",
    about:
      "Dr. Aman Verma handles migraine, nerve pain, seizure disorders, and neurological consultation with a detailed diagnostic approach.",
    description:
      "He has built a reputation for carefully evaluating symptoms, reviewing patient history in depth, and suggesting structured neurological care plans. He frequently manages chronic headaches, neuropathy, dizziness, and neurological follow-up cases.",
    education: [
      "MBBS - King George's Medical University",
      "MD - General Medicine",
      "DM - Neurology"
    ],
    services: [
      "Migraine evaluation",
      "Neuropathy treatment",
      "Seizure disorder consultation",
      "Brain and nerve health follow-up",
      "Long-term neurological monitoring"
    ],
    achievements: [
      "14+ years in neuro care",
      "Known for detailed diagnosis",
      "Handled 2500+ neurological cases"
    ],
    slots: ["01:00 PM", "02:30 PM", "04:30 PM"],
  },
  {
    id: 6,
    name: "Dr. Sana Khan",
    speciality: "Gynecologist",
    hospital: "Care Women Clinic",
    experience: 11,
    fee: 600,
    rating: 4.8,
    reviews: 332,
    availability: "Available Today",
    timing: "12:00 PM - 6:00 PM",
    languages: ["Hindi", "English", "Urdu"],
    location: "Lucknow",
    patients: "2.2k+",
    image: "https://ui-avatars.com/api/?name=Dr+Sana+Khan&background=F97316&color=fff&size=512",
    degree: "MBBS, MS Gynecology",
    consultationMode: ["In Clinic", "Video Consultation"],
    address: "Hazratganj, Lucknow, Uttar Pradesh",
    about:
      "Dr. Sana Khan provides expert consultation for women's health, PCOS, menstrual issues, pregnancy guidance, and preventive gynecological care.",
    description:
      "She is known for her empathetic consultations and structured treatment plans for reproductive health, hormonal imbalance, prenatal care, and routine women's wellness. Her patients value her practical advice and respectful communication.",
    education: [
      "MBBS - Aligarh Muslim University",
      "MS - Obstetrics & Gynecology"
    ],
    services: [
      "PCOS consultation",
      "Pregnancy checkup",
      "Menstrual disorder treatment",
      "Women's wellness consultation",
      "Hormonal health guidance"
    ],
    achievements: [
      "11+ years in gynecology",
      "Trusted for compassionate consultations",
      "Excellent ratings in women’s wellness care"
    ],
    slots: ["12:00 PM", "02:00 PM", "05:00 PM"],
  },
  {
  id: 7,
  name: "Dr. Rohit Malhotra",
  speciality: "ENT Specialist",
  hospital: "Hearing & Sinus Center",
  experience: 7,
  fee: 450,
  rating: 4.5,
  reviews: 164,
  availability: "Available Today",
  timing: "3:00 PM - 7:00 PM",
  languages: ["Hindi", "English"],
  location: "Delhi",
  patients: "1.4k+",
  image: "https://ui-avatars.com/api/?name=Dr+Rohit+Malhotra&background=0EA5E9&color=fff&size=512",
  degree: "MBBS, MS ENT",
  consultationMode: ["In Clinic"],
  address: "Karol Bagh, New Delhi",
  about:
    "Dr. Rohit Malhotra specializes in ear, nose, and throat disorders including sinus issues, throat infection, hearing concerns, and allergy-related ENT problems.",
  description:
    "With practical experience in routine and chronic ENT care, Dr. Malhotra is known for giving clear consultations and treatment plans that patients can follow comfortably. He regularly manages sinus blockage, ear pain, throat irritation, tonsil concerns, and seasonal allergy-linked ENT complaints.",
  education: [
    "MBBS - Delhi University",
    "MS - ENT"
  ],
  services: [
    "Sinus treatment",
    "Throat infection care",
    "Ear pain consultation",
    "ENT allergy management",
    "Hearing issue evaluation"
  ],
  achievements: [
    "7+ years in ENT care",
    "Strong patient trust in routine ENT treatment",
    "Known for easy-to-understand consultation style"
  ],
  slots: ["03:00 PM", "05:00 PM", "06:30 PM"],
},
{
  id: 8,
  name: "Dr. Kavita Joshi",
  speciality: "Psychiatrist",
  hospital: "Mind Wellness Center",
  experience: 13,
  fee: 800,
  rating: 4.9,
  reviews: 286,
  availability: "Available Tomorrow",
  timing: "10:30 AM - 3:30 PM",
  languages: ["Hindi", "English"],
  location: "Chandigarh",
  patients: "2.5k+",
  image: "https://ui-avatars.com/api/?name=Dr+Kavita+Joshi&background=10B981&color=fff&size=512",
  degree: "MBBS, MD Psychiatry",
  consultationMode: ["In Clinic", "Video Consultation"],
  address: "Sector 34, Chandigarh",
  about:
    "Dr. Kavita Joshi offers expert support for anxiety, stress, mood disorders, sleep issues, and emotional well-being with a calm and structured consultation approach.",
  description:
    "She has guided a large number of patients dealing with work stress, panic symptoms, mood imbalance, and long-term emotional health concerns. Patients appreciate her non-judgmental interaction style, detailed listening, and balanced treatment recommendations for better mental wellness.",
  education: [
    "MBBS - Government Medical College",
    "MD - Psychiatry"
  ],
  services: [
    "Anxiety consultation",
    "Depression support",
    "Sleep disorder guidance",
    "Stress management",
    "Mental wellness follow-up"
  ],
  achievements: [
    "13+ years in psychiatric care",
    "Highly rated for empathetic consultation",
    "Trusted by working professionals and young adults"
  ],
  slots: ["10:30 AM", "12:30 PM", "02:30 PM"],
},
{
  id: 9,
  name: "Dr. Vivek Singh",
  speciality: "General Physician",
  hospital: "Health First Clinic",
  experience: 6,
  fee: 400,
  rating: 4.4,
  reviews: 145,
  availability: "Available Today",
  timing: "8:00 AM - 12:00 PM",
  languages: ["Hindi", "English"],
  location: "Kanpur",
  patients: "1.2k+",
  image: "https://ui-avatars.com/api/?name=Dr+Vivek+Singh&background=EF4444&color=fff&size=512",
  degree: "MBBS, MD General Medicine",
  consultationMode: ["In Clinic", "Video Consultation"],
  address: "Civil Lines, Kanpur, Uttar Pradesh",
  about:
    "Dr. Vivek Singh handles fever, weakness, infections, cough, cold, and routine health concerns with practical diagnosis and treatment advice.",
  description:
    "He is often the first point of consultation for patients looking for quick and reliable care for day-to-day health problems. His treatment style focuses on accurate diagnosis, essential medication support, and lifestyle guidance for faster recovery and better routine health management.",
  education: [
    "MBBS - GSVM Medical College",
    "MD - General Medicine"
  ],
  services: [
    "Fever consultation",
    "Cold and cough treatment",
    "General weakness evaluation",
    "Routine health checkup",
    "Basic infection treatment"
  ],
  achievements: [
    "6+ years in general medicine",
    "Fast and practical treatment plans",
    "Trusted family physician for routine concerns"
  ],
  slots: ["08:00 AM", "09:30 AM", "11:30 AM"],
},
{
  id: 10,
  name: "Dr. Isha Arora",
  speciality: "Ophthalmologist",
  hospital: "Vision Eye Centre",
  experience: 10,
  fee: 650,
  rating: 4.7,
  reviews: 219,
  availability: "Available Today",
  timing: "11:00 AM - 2:00 PM",
  languages: ["Hindi", "English"],
  location: "Delhi",
  patients: "2k+",
  image: "https://ui-avatars.com/api/?name=Dr+Isha+Arora&background=3B82F6&color=fff&size=512",
  degree: "MBBS, MS Ophthalmology",
  consultationMode: ["In Clinic"],
  address: "South Extension, New Delhi",
  about:
    "Dr. Isha Arora provides consultation for eye irritation, blurred vision, routine eye checkups, and long-term eye health management.",
  description:
    "She is known for careful eye examination and practical treatment guidance for patients with vision discomfort, screen-related eye strain, and age-related eye concerns. Her consultations are thorough, patient-friendly, and focused on preventive as well as corrective eye care.",
  education: [
    "MBBS - VMMC Delhi",
    "MS - Ophthalmology"
  ],
  services: [
    "Eye checkup",
    "Vision assessment",
    "Eye strain consultation",
    "Redness and irritation treatment",
    "Preventive eye care"
  ],
  achievements: [
    "10+ years in eye care",
    "Strong patient feedback for detailed examination",
    "Experienced in preventive and corrective vision support"
  ],
  slots: ["11:00 AM", "12:00 PM", "01:30 PM"],
},
{
  id: 11,
  name: "Dr. Deepak Nair",
  speciality: "Urologist",
  hospital: "Renal Care Hospital",
  experience: 15,
  fee: 950,
  rating: 4.8,
  reviews: 266,
  availability: "Available Tomorrow",
  timing: "4:00 PM - 8:00 PM",
  languages: ["English", "Hindi", "Malayalam"],
  location: "Bengaluru",
  patients: "3.2k+",
  image: "https://ui-avatars.com/api/?name=Dr+Deepak+Nair&background=06B6D4&color=fff&size=512",
  degree: "MBBS, MS Surgery, MCh Urology",
  consultationMode: ["In Clinic", "Video Consultation"],
  address: "Indiranagar, Bengaluru, Karnataka",
  about:
    "Dr. Deepak Nair treats urinary issues, kidney-related discomfort, prostate concerns, and male urological health with a highly experienced clinical approach.",
  description:
    "He has worked extensively in complex and routine urological consultation, helping patients with urinary tract symptoms, stone-related issues, and long-term urology follow-up. He is appreciated for his precise diagnosis and calm explanation of treatment choices.",
  education: [
    "MBBS - Government Medical College",
    "MS - General Surgery",
    "MCh - Urology"
  ],
  services: [
    "UTI consultation",
    "Kidney stone follow-up",
    "Prostate care",
    "Urinary issue treatment",
    "Male urology consultation"
  ],
  achievements: [
    "15+ years in urology",
    "Handled 3000+ patient consultations",
    "Highly experienced in urinary and renal support"
  ],
  slots: ["04:00 PM", "06:00 PM", "07:30 PM"],
},
{
  id: 12,
  name: "Dr. Meenakshi Rao",
  speciality: "Endocrinologist",
  hospital: "Diabetes & Hormone Clinic",
  experience: 9,
  fee: 700,
  rating: 4.6,
  reviews: 204,
  availability: "Available Today",
  timing: "1:00 PM - 5:00 PM",
  languages: ["Hindi", "English"],
  location: "Pune",
  patients: "1.9k+",
  image: "https://ui-avatars.com/api/?name=Dr+Meenakshi+Rao&background=9333EA&color=fff&size=512",
  degree: "MBBS, MD Medicine, DM Endocrinology",
  consultationMode: ["In Clinic", "Video Consultation"],
  address: "Shivaji Nagar, Pune, Maharashtra",
  about:
    "Dr. Meenakshi Rao focuses on diabetes, thyroid imbalance, hormonal issues, weight-related metabolic concerns, and endocrine health monitoring.",
  description:
    "She regularly helps patients manage sugar control, thyroid symptoms, hormonal fluctuations, and metabolism-linked conditions through structured treatment and follow-up care. Her consultations are valued for clarity, balance, and long-term health planning.",
  education: [
    "MBBS - B.J. Medical College",
    "MD - Medicine",
    "DM - Endocrinology"
  ],
  services: [
    "Diabetes management",
    "Thyroid consultation",
    "Hormonal disorder treatment",
    "Metabolic health support",
    "Weight-related endocrine care"
  ],
  achievements: [
    "9+ years in endocrine care",
    "Strong patient trust in diabetes guidance",
    "Known for long-term health monitoring plans"
  ],
  slots: ["01:00 PM", "03:00 PM", "04:30 PM"],
},
{
  id: 13,
  name: "Dr. Nitin Yadav",
  speciality: "Dentist",
  hospital: "Smile Dental Care",
  experience: 5,
  fee: 350,
  rating: 4.3,
  reviews: 132,
  availability: "Available Today",
  timing: "9:30 AM - 1:30 PM",
  languages: ["Hindi", "English"],
  location: "Jaipur",
  patients: "980+",
  image: "https://ui-avatars.com/api/?name=Dr+Nitin+Yadav&background=2563EB&color=fff&size=512",
  degree: "BDS, MDS",
  consultationMode: ["In Clinic"],
  address: "Vaishali Nagar, Jaipur, Rajasthan",
  about:
    "Dr. Nitin Yadav provides consultation for tooth pain, cleaning, gum care, cavity treatment, and everyday dental wellness.",
  description:
    "He is known for approachable consultation and gentle dental care for patients who may feel nervous about treatment. His practice covers preventive dentistry, basic restorative procedures, oral hygiene guidance, and pain-focused dental support.",
  education: [
    "BDS - Rajasthan University",
    "MDS - Conservative Dentistry"
  ],
  services: [
    "Tooth pain consultation",
    "Dental cleaning",
    "Cavity treatment",
    "Gum care",
    "Oral hygiene guidance"
  ],
  achievements: [
    "5+ years in dental care",
    "Popular for gentle consultation style",
    "Trusted for basic and preventive dental treatment"
  ],
  slots: ["09:30 AM", "11:00 AM", "01:00 PM"],
},
{
  id: 14,
  name: "Dr. Pooja Bansal",
  speciality: "Gynecologist",
  hospital: "Mother Care Hospital",
  experience: 12,
  fee: 750,
  rating: 4.8,
  reviews: 311,
  availability: "Available Tomorrow",
  timing: "10:00 AM - 1:00 PM",
  languages: ["Hindi", "English"],
  location: "Faridabad",
  patients: "2.7k+",
  image: "https://ui-avatars.com/api/?name=Dr+Pooja+Bansal&background=DB2777&color=fff&size=512",
  degree: "MBBS, MS Obstetrics & Gynecology",
  consultationMode: ["In Clinic", "Video Consultation"],
  address: "Sector 15, Faridabad, Haryana",
  about:
    "Dr. Pooja Bansal supports women’s wellness, pregnancy checkups, hormonal issues, menstrual health, and reproductive care with a patient-first approach.",
  description:
    "She has extensive experience in handling routine and sensitive gynecological concerns with empathy and clinical confidence. Patients appreciate her clear explanations, respectful communication, and balanced advice for both preventive and active treatment needs.",
  education: [
    "MBBS - PGIMS Rohtak",
    "MS - Obstetrics & Gynecology"
  ],
  services: [
    "Pregnancy consultation",
    "Period-related issues",
    "PCOS guidance",
    "Women’s health checkup",
    "Hormonal care"
  ],
  achievements: [
    "12+ years in women's healthcare",
    "Highly trusted for pregnancy consultations",
    "Strong patient loyalty in Faridabad region"
  ],
  slots: ["10:00 AM", "11:30 AM", "12:30 PM"],
},
{
  id: 15,
  name: "Dr. Harsh Vardhan",
  speciality: "Pulmonologist",
  hospital: "Lung Care Center",
  experience: 11,
  fee: 850,
  rating: 4.7,
  reviews: 223,
  availability: "Available Today",
  timing: "3:00 PM - 6:00 PM",
  languages: ["Hindi", "English"],
  location: "Delhi",
  patients: "2.3k+",
  image: "https://ui-avatars.com/api/?name=Dr+Harsh+Vardhan&background=0891B2&color=fff&size=512",
  degree: "MBBS, MD Pulmonary Medicine",
  consultationMode: ["In Clinic", "Video Consultation"],
  address: "Dwarka, New Delhi",
  about:
    "Dr. Harsh Vardhan specializes in cough, asthma, breathing difficulty, chest infection, and long-term respiratory care.",
  description:
    "He helps patients manage both routine and chronic breathing concerns through detailed consultation and careful follow-up planning. He is especially trusted for asthma guidance, seasonal breathing issues, post-infection respiratory recovery, and preventive lung health advice.",
  education: [
    "MBBS - AIIMS",
    "MD - Pulmonary Medicine"
  ],
  services: [
    "Asthma consultation",
    "Chronic cough treatment",
    "Breathing issue evaluation",
    "Chest infection care",
    "Respiratory wellness follow-up"
  ],
  achievements: [
    "11+ years in lung care",
    "Known for structured respiratory treatment",
    "Trusted for chronic breathing condition support"
  ],
  slots: ["03:00 PM", "04:30 PM", "05:30 PM"],
}
];

export default doctors;