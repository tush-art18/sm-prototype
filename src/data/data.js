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
    title: "Integrated Coaching",
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
    subtitle: "NEET / EAMCET",
    description: "Intensive coaching tailored for securing merit seats in prestigious medical colleges.",
    features: ["NEET Integrated Coaching", "Weekly Exams & Mock Tests", "Holistic Growth", "Result Oriented"],
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    color: "from-teal-900 to-primary",
  },
  {
    code: "MPC",
    title: "Engineering Stream",
    subtitle: "IIT / EAMCET",
    description: "Expert mentorship to guide students through the complexities of engineering entrance exams.",
    features: ["EAPCET Coaching", "Daily Practice Papers", "Highly Efficient Faculty", "Personal Attention"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
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
    caption: "Holistic Growth",
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
    subtitle: "NEET / EAMCET",
    description: "Mentor students and train them effectively to secure merit seats in Medical colleges.",
    features: [
      "Integrated NEET coaching",
      "Highly efficient faculty",
      "Weekly Exams, DPP & Mock Test",
      "Personal attention",
    ],
    icon: "🔬",
    color: "bg-primary-container",
    featured: true,
  },
  {
    id: "mpc-eapcet",
    badge: "ENGINEERING",
    title: "MPC",
    subtitle: "IIT / EAMCET",
    description: "Result-oriented teaching makes it a perfect platform for students to learn, grow and achieve success.",
    features: [
      "EAPCET intensive focus",
      "Result oriented teaching",
      "Spacious classrooms",
      "Holistic growth",
    ],
    icon: "⚙️",
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
      "Expert Commerce Faculty",
      "Affordable Fee",
      "Safe disciplined campus",
      "Confident individual focus",
    ],
    icon: "📊",
    color: "bg-white",
    featured: false,
  },
  {
    id: "long-term",
    badge: "SPECIALIZED",
    title: "LONG-TERM",
    subtitle: "NEET / EAMCET",
    description: "Dedicated long-term coaching for students aiming for top medical and engineering ranks.",
    features: [
      "Rigorous Mock Tests",
      "Daily Practice Papers (DPP)",
      "Mentorship and motivation",
      "Best results ensured",
    ],
    icon: "🎯",
    color: "bg-white",
    featured: false,
  },
];

export const coachingFeatures = [
  {
    title: "Integrated Coaching",
    description: "Comprehensive coaching for NEET/EAPCET seamlessly integrated with Intermediate syllabus.",
    icon: "📚",
  },
  {
    title: "Personal Attention",
    description: "Limited seats ensure every student receives the motivation and mentorship needed to tap their potential.",
    icon: "👥",
  },
  {
    title: "Result Oriented",
    description: "Weekly exams, Daily Practice Papers (DPP), and Mock Tests to ensure best results.",
    icon: "📈",
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
    name: "Ms. Nazia Parveen",
    role: "M.Sc Zoology",
    bio: "Highly efficient faculty dedicated to result-oriented teaching and personal attention.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Ms. Shabana Parveen",
    role: "M.Sc Botany",
    bio: "Ensuring holistic growth and motivating students to tap their potential.",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&q=80",
  },
  {
    name: "Ms. Asma Parveen",
    role: "M.Sc Chemistry",
    bio: "Providing integrated coaching with daily practice papers and mock tests.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "Mr. Mohammed Shoaib",
    role: "M.Sc Physics",
    bio: "Expert physics faculty committed to mentoring students for competitive success.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Mr. Mohammed Zubair",
    role: "M.Sc Mathematics",
    bio: "Focused on making learning a pleasure and teaching a passion.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Ms. Razia Sultana",
    role: "M.A English",
    bio: "Developing confident and independent individuals through excellent communication skills.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?w=400&q=80",
  },
  {
    name: "Mr. Syed Akhtar",
    role: "M.A Economics",
    bio: "Dedicated to the cause of education and shaping young minds.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Ms. Afreen Fatima",
    role: "M.Com",
    bio: "Result-oriented commerce educator bringing grace to student's personalities.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  },
];

// Admissions page
export const contactInfo = {
  address: "4th & 5th FLOOR, LIGHT HOUSE, OPP BALSHETTY KHETH, HYDERABAD - 500024",
  phones: ["91778 90581", "70938 30167"],
  email: "admissions@smacademy.com",
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
    description: "FREE ADMISSION for students with above 90% in SSC.",
  },
];
