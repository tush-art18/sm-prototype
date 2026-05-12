// src/data/data.js
// Centralized data for SM Academy

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Courses", path: "/courses" },
  { label: "Faculty", path: "/faculty" },
  { label: "Admissions", path: "/admissions" },
];

export const homeStats = [
  { value: "42", label: "Years of Legacy" },
  { value: "100%", label: "Result Oriented" },
  { value: "Best", label: "Learning Hub" },
  { value: "100+", label: "Merit Seats Target" },
];

export const coreValues = [
  {
    icon: "🎯",
    title: "Result Oriented Teaching",
    description: "Our goal is to mentor the students and train them effectively to excel.",
  },
  {
    icon: "🛡️",
    title: "Safe Disciplined Campus",
    description: "Located in the heart of the city, providing a safe and holistic environment.",
  },
  {
    icon: "📖",
    title: "Comprehensive Coaching",
    description: "We provide comprehensive coaching for NEET and EAPCET alongside Intermediate.",
  },
  {
    icon: "🤝",
    title: "Personal Attention",
    description: "Limited seats to ensure every student is motivated and their potential is tapped.",
  },
];

export const academicStreams = [
  {
    code: "BiPC",
    title: "Medical Sciences",
    subtitle: "NEET / EAPCET",
    description: "Intensive coaching tailored for securing merit seats in prestigious medical colleges.",
    features: ["NEET Intensive Coaching", "Weekly Exams & Mock Tests", "Overall personality development", "Result Oriented"],
    image: "/bipc.jpeg",
    color: "from-teal-900 to-primary",
  },
  {
    code: "MPC",
    title: "Engineering Stream",
    subtitle: "IIT / EAPCET",
    description: "Expert mentorship to guide students through the complexities of engineering entrance exams.",
    features: ["EAPCET Coaching", "Daily Practice Papers", "Highly Efficient Faculty", "Personal Attention"],
    image: "/Engineering Stream.jpeg",
    color: "from-blue-900 to-primary",
  },
];

export const bentoImages = [
  {
    key: "bento-1",
    alt: "Spacious Classrooms",
    caption: "Spacious Classrooms",
    subCaption: "Impressive infrastructure to facilitate focused learning.",
    image: "/image-04.jpeg",
  },
  {
    key: "bento-2",
    alt: "Mentorship",
    caption: "Personal Attention",
    image: "/image-02.jpeg",
  },
  {
    key: "bento-3",
    alt: "Focus",
    caption: "Discipline",
    image: "/image-03.jpeg",
  },
  {
    key: "bento-4",
    alt: "Student Life",
    caption: "Overall personality development",
    image: "/image-01.jpeg",
  },
];

export const testimonials = [
  {
    quote:
      "Saint Mesum Education Society has a remarkable 42-year legacy of shaping young minds. Their commitment to making students confident and independent is truly inspiring.",
    name: "Alumni Parent",
    role: "Saint Mesum Education Society",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    quote:
      "The dedication to serving the cause of education since 1984 is evident in their impressive infrastructure, dedicated faculty, and result-oriented teaching approach.",
    name: "Community Leader",
    role: "Hyderabad",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
];

// About page
export const aboutStats = [
  { value: "42", label: "Years of Service" },
  { value: "1984", label: "Year Established" },
  { value: "Best", label: "Learning Hub" },
  { value: "100%", label: "Dedication" },
];

export const timeline = [
  {
    year: "1984",
    title: "The Genesis",
    description:
      "Saint Mesum Education Society was established, dedicatedly serving the cause of education and shaping young minds for decades.",
  },
  {
    year: "2026",
    title: "A New Horizon",
    description:
      "Broadening its horizons, the society launches SM Junior College & Academy to help students in their careers with a vision to make them confident, independent individuals.",
  },
];

// Courses page
export const courses = [
  {
    id: "bipc-neet",
    badge: "MEDICAL",
    title: "BIPC",
    subtitle: "NEET / EAPCET",
    description: "Mentor students and train them effectively to secure merit seats in Medical colleges.",
    features: [
      "Intensive NEET coaching",
      "Highly efficient faculty",
      "Weekly Exams, DPP & Mock Test",
      "Personal attention",
    ],
    icon: "🔬",
    image: "bipc.jpeg",
    color: "bg-primary-container",
    featured: true,
  },
  {
    id: "mpc-eapcet",
    badge: "ENGINEERING",
    title: "MPC",
    subtitle: "IIT / EAPCET",
    description: "Result-oriented teaching makes it a perfect platform for students to learn, grow and achieve success.",
    features: [
      "EAPCET intensive focus",
      "Result oriented teaching",
      "Spacious classrooms",
      "Overall personality development",
    ],
    icon: "⚙️",
    image: "/Engineering Stream.jpeg",
    color: "bg-white",
    featured: false,
  },
  {
    id: "cec",
    badge: "COMMERCE",
    title: "CEC",
    subtitle: "Commerce Stream",
    description: "A solid foundation for careers in business, accountancy, and economics.",
    features: [
      "Expert Faculty",
      "Affordable Fee",
      "Safe disciplined campus",
      "Confident individual focus",
    ],
    icon: "📊",
    image: "cec.jpeg",
    color: "bg-white",
    featured: false,
  },
];

export const coachingFeatures = [
  {
    title: "Comprehensive Coaching",
    description: "Comprehensive coaching for NEET/EAPCET seamlessly aligned with the Intermediate syllabus.",
    icon: "📚",
  },
  {
    title: "Result Oriented",
    description: "Weekly exams, Daily Practice Papers (DPP), and Mock Tests to ensure best results.",
    icon: "📈",
  },
  {
    title: "Personal Attention",
    description: "Limited seats ensure every student receives the motivation and mentorship needed to tap their potential.",
    icon: "👥",
  },
];

// Faculty page
export const principal = {
  name: "Mrs. S. Sakina Marium",
  role: "Director & Principal - SM Jr College",
  qualification: "",
  bio: "Located in the heart of the city at LIGHT HOUSE, Balshetty Kheth, SM JUNIOR COLLEGE & ACADEMY strives to be the BEST LEARNING HUB in twin cities.",
  quote:
    "I strongly believe that LEARNING SHOULD BE A PLEASURE AND TEACHING, A PASSION. Education brings grace to a personality. To achieve the goals in life, we must encourage, motivate and mentor the students to be a better version of themselves everyday.",
  image: "/principal-photo.png",
};

export const faculty = [
  {
    name: "Mr. P. Devender",
    role: "M.Sc Botany, B.Ed, (PhD)",
    bio: "Senior faculty & resource person at Unacademy. Mentored hunderds of succesful students for MBBS through NEET. TOP FACULTY FOR PRESTIGIOUS COLLEGES",
    image: "/P-Devender.png",
  },
  {
    name: "Mr. HAMEED ALI KHAN",
    role: "M.Sc, Physics, B.Ed",
    bio: "Senior faculty at multiple colleges. Well versed in teaching PHYSICS",
    image: "/H-Alikhan.png",
  },
  {
    name: "Mrs. SALEHA FATMIMA",
    role: "M.Sc, Zoology, B.Ed",
    bio: "She has a proven track record of producing successful medical & academic professionals. She is among the MOST SORT-AFTER FACULTY at top corporate colleges.",
    image: "/S-Fatima.png",
  },
  {
    name: "Mr. S. VENKANNA",
    role: "M.Sc, Mathametics, B.Ed",
    bio: "Senior faculty at multiple colleges. Well versed in teaching MATHS A & MATHS B. Successfully coaching for EAMCET Students",
    image: "/S-Venkanna.png",
  },
  {
    name: "Mr. S. FARAAZ UDDIN ZAIN",
    role: "M.Com, B.Ed",
    bio: "Experienced faculty, Well versed in teaching ACCOUNTS & COMMERCE, Successfully mentoring Graduate Students",
    image: "/SFU-Zain.png",
  },
  {
    name: "Mr. SYED MASOOD MOHIUDDIN",
    role: "M.A Political science",
    bio: "Excellent faculty at multiple colleges. Well versed in teaching Civics",
    image: "/SM-Mohiuddin.png",
  },
  {
    name: "Mrs. SADAF NASERA",
    role: "M.A English",
    bio: "Experienced faculty. Well versed in teaching ENGLISH. Helping Students score Highest Marks in ENGLISH",
    image: "/S-Nasera.png",
  },
];

// Admissions page
export const contactInfo = {
  address: "4th & 5th FLOOR, LIGHT HOUSE, OPP BALSHETTY KHETH, HYDERABAD - 500024",
  phones: ["91778 90581", "70938 30167"],
  email: "smjr1272@gmail.com",
  accreditation: "Saint Mesum Education Society",
};

export const admissionFastTrack = [
  {
    icon: "📄",
    title: "Document Checklist",
    description: "Required documents for new student enrollment.",
  },
  {
    icon: "📅",
    title: "Key Deadlines",
    description: "Important dates for the 2026 academic year.",
  },
  {
    icon: "🎓",
    title: "Scholarships",
    description: "FREE ADMISSION IN INTERMEDIATE FOR MERIT STUDENTS.",
  },
];
