// src/data/data.js
// Centralized data extracted from the SM Academy prototype

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Courses", path: "/courses" },
  { label: "Faculty", path: "/faculty" },
  { label: "Admissions", path: "/admissions" },
];

export const homeStats = [
  { value: "85+", label: "Years of Academic Excellence" },
  { value: "25M+", label: "Global Alumni Network" },
  { value: "30+", label: "Research-Driven Programs" },
  { value: "Top 1%", label: "National Rank" },
];

export const coreValues = [
  {
    icon: "🏛️",
    title: "Innovative Pedagogy",
    description: "Dynamic learning models that evolve with industry trends and technological shifts.",
  },
  {
    icon: "🌐",
    title: "Global Network",
    description: "Connect with international institutions and leaders through our expansive alumni network.",
  },
  {
    icon: "🏆",
    title: "Excellence Hub",
    description: "Consistently ranked among the top 1% nationally for academic results and competitive success.",
  },
  {
    icon: "🧠",
    title: "Holistic Mentorship",
    description: "Dedicated counseling for mental health, career paths, and personal development.",
  },
];

export const academicStreams = [
  {
    code: "MPC",
    title: "Engineering & Technology",
    subtitle: "Mathematics · Physics · Chemistry",
    description: "Integrated curriculum with intensive JEE Mains & Advanced coaching, focused on STEM excellence and robotics.",
    features: ["IIT Foundation", "Robotics Lab", "Coding Bootcamps", "Logic Mastery"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    color: "from-blue-900 to-primary",
  },
  {
    code: "BiPC",
    title: "Medical & Life Sciences",
    subtitle: "Biology · Physics · Chemistry",
    description: "Premier coaching for NEET and AIIMS, combining rigorous biology research with practical lab experience.",
    features: ["NEET Integration", "Anatomy Focus", "Bio-Tech Workshops", "Medical Ethics"],
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
    color: "from-teal-900 to-primary",
  },
];

export const bentoImages = [
  {
    key: "bento-1",
    alt: "Graduation 2024",
    caption: "Graduation 2024",
    subCaption: "Celebrating the success of our most ambitious cohort yet.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
  },
  {
    key: "bento-2",
    alt: "Collaborative Culture",
    caption: "Collaborative Culture",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    key: "bento-3",
    alt: "Seminars",
    caption: "Seminars",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  },
  {
    key: "bento-4",
    alt: "Student Life",
    caption: "Student Life",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  },
];

export const testimonials = [
  {
    quote:
      "The integrated coaching model at SM Academy was a game-changer. The faculty doesn't just teach subjects; they build the confidence needed to excel globally.",
    name: "Ananya R.",
    role: "Medical Aspirant, Class of '24",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    quote:
      "SM Academy's structured approach to JEE preparation combined with the mentorship I received transformed my academic journey completely.",
    name: "Rahul K.",
    role: "Engineering Student, IIT Bombay",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
];

// About page
export const aboutStats = [
  { value: "98%", label: "Academic Success" },
  { value: "15:1", label: "Student-Teacher Ratio" },
  { value: "32+", label: "Years of Legacy" },
  { value: "5k+", label: "Alumni Network" },
];

export const timeline = [
  {
    year: "1992",
    title: "The Foundation",
    description:
      "The Saint Mesum Education Society was established with the vision of providing accessible, high-quality education to the community, rooted in values of integrity and service.",
  },
  {
    year: "2005",
    title: "Expansion Era",
    description:
      "Recognizing the need for higher academic rigor, the society expanded its operations to include advanced secondary programs and vocational training centers.",
  },
  {
    year: "2020",
    title: "The Modern Academy",
    description:
      "Launch of SM Academy with state-of-the-art facilities, digital learning hubs, and a focus on international curricula standards.",
  },
];

// Courses page
export const courses = [
  {
    id: "bipc-neet",
    badge: "PREMIER PROGRAM",
    title: "BIPC – NEET",
    subtitle: "Medical Stream",
    description:
      "Comprehensive medical stream focused on the National Eligibility cum Entrance Test. Our curriculum blends standard board syllabus with advanced entrance modules.",
    features: [
      "Daily Physics & Chemistry Lab sessions",
      "Weekly Mock Entrance Tests",
      "Expert NEET coaching faculty",
      "Anatomy & Biology deep-dives",
    ],
    icon: "🔬",
    color: "bg-primary-container",
    featured: true,
  },
  {
    id: "mpc-eapcet",
    badge: "ENGINEERING",
    title: "MPC – EAPCET",
    subtitle: "Engineering Stream",
    description:
      "Engineered for success. This stream bridges the gap between Intermediate education and Engineering entrance excellence.",
    features: [
      "Intensive Calculus & Algebra",
      "Practical Mechanics & Optics",
      "JEE Mains & Advanced preparation",
      "Robotics & Coding workshops",
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
    description:
      "Commerce, Economics, and Civics. Designed for future business leaders, accountants, and public administrators.",
    features: [
      "Chartered Accountancy foundation tracks",
      "Business Communication workshops",
      "Economics & Policy studies",
      "Entrepreneurship modules",
    ],
    icon: "📊",
    color: "bg-white",
    featured: false,
  },
];

export const coachingFeatures = [
  {
    title: "Structured Timeline",
    description:
      "Phased learning approach starting from conceptual foundations to rigorous testing cycles.",
    icon: "📅",
  },
  {
    title: "Personal Mentorship",
    description:
      "Small batch sizes ensuring each student receives dedicated attention from our expert faculty.",
    icon: "👥",
  },
  {
    title: "Material & Resources",
    description:
      "Exclusive study modules, digitized libraries, and previous years' question bank analysis.",
    icon: "📚",
  },
];

// Faculty page
export const principal = {
  name: "Mrs. Sakina Marium",
  role: "Principal & Academic Director",
  qualification: "M.Ed, PhD in Educational Psychology",
  bio: "With over two decades of experience in educational leadership, Mrs. Sakina Marium oversees the academic excellence and holistic development programs at SM Academy. Her vision integrates traditional values with modern pedagogical techniques.",
  quote:
    "At SM Academy, we don't just teach subjects; we mentor souls. Our vision is to create a sanctuary of learning where tradition meets innovation, and where every child's potential is recognized as a unique gift to the world.",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80",
};

export const faculty = [
  {
    name: "Mrs. Saleha Fathema",
    role: "Head of Mathematics",
    bio: "Expert in advanced calculus and pedagogy with 15 years of teaching excellence.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Mr. Abdul Rahim",
    role: "Senior Faculty – Physics",
    bio: "Dedicated researcher specializing in quantum mechanics and experiential learning.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Ms. Zainab Mirza",
    role: "Head of Humanities",
    bio: "Passionate advocate for literature and social sciences with a focus on critical thinking.",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&q=80",
  },
  {
    name: "Mr. Sameer Ahmed",
    role: "Computer Science Lead",
    bio: "Tech innovator teaching coding, robotics, and artificial intelligence.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Mr. Ramesh Kumar",
    role: "Head of Information Technology",
    bio: "Expert in systems architecture and cybersecurity with a focus on modern education tech.",
    image: "https://images.unsplash.com/photo-1546961342-ea5f63813d7a?w=400&q=80",
  },
  {
    name: "Mr. David Wilson",
    role: "Senior Coordinator – Sports",
    bio: "Dedicated to athletic development and fostering team spirit through physical education.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
  {
    name: "Dr. Arthur Morgan",
    role: "Professor of Mathematics",
    bio: "Specializing in theoretical mathematics and curriculum development for higher education.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Mr. Robert Green",
    role: "Lecturer in History",
    bio: "Engaging students with global history and its impact on modern societal structures.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
];

// Admissions page
export const contactInfo = {
  address: "Light House, Hyderabad, Telangana",
  phones: ["91778 90581", "70938 30167"],
  email: "admissions@smacademy.edu.in",
  accreditation: "Ranked Top 10 in Hyderabad Region",
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
    description: "Important dates for the 2025–26 academic year.",
  },
  {
    icon: "🎓",
    title: "Scholarships",
    description: "Financial aid and merit-based scholarship information.",
  },
];
