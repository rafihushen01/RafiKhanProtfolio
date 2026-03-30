export type SocialIcon = "github" | "linkedin" | "facebook" | "whatsapp";

export interface SocialLink {
  name: string;
  url: string;
  icon: SocialIcon;
}

export interface WhatIDoCard {
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
}

export interface TimelineEntry {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface ProjectEntry {
  id: string;
  title: string;
  category: string;
  tools: string[];
  description: string;
  link: string;
  image: string;
  comingSoon?: boolean;
}

export const personalInfo = {
  firstName: "RAFI",
  lastName: "KHAN",
  fullName: "Rafi Khan",
  shortName: "Rafi Khan",
  introLabel: "Hello! I am",
  landingTitle: "A Scalable",
  landingPrimaryRole: "Developer",
  landingSecondaryRole: "Engineer",
  about:
    "I engineer high-scale web and mobile ecosystems. From AI-powered EdTech to multi-vendor ecommerce platforms, I focus on performance, security, and cinematic user experience.",
  email: "nextjs061@gmail.com",
  phoneDisplay: "+880 1989-678448",
  phoneRaw: "+8801989678448",
  location: "Dhaka, Bangladesh",
  cvPath: "/Rafi_Khan_Cv.pdf.jpeg",
  profileImage: "/RafiKhanLogo.png.jpeg",
};

export const loadingWords = ["Fullstack Developer", "AI Engineer"];

export const whatIDoData: WhatIDoCard[] = [
  {
    title: "DEVELOP",
    subtitle: "High-performance products",
    description:
      "I build secure fullstack websites and mobile apps with scalable architecture, fast UX, and production-ready backend systems.",
    tools: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "React Native",
    ],
  },
  {
    title: "ARCHITECT",
    subtitle: "Systems and automation",
    description:
      "I design enterprise workflows, multi-panel ecommerce platforms, and AI-powered automation features that scale cleanly as traffic grows.",
    tools: [
      "AWS",
      "Docker",
      "Redis",
      "Socket.io",
      "OpenAI",
      "Gemini",
      "Python",
      "LLMs",
      "SEO",
    ],
  },
];

export const timelineData: TimelineEntry[] = [
  {
    year: "2018",
    role: "Frontend Specialist",
    company: "Independent",
    description:
      "Started with web fundamentals and built responsive, pixel-perfect interfaces that became the foundation for larger systems.",
  },
  {
    year: "2020",
    role: "MERN Stack Developer",
    company: "Freelance",
    description:
      "Shifted to fullstack engineering and built API-driven applications with React, Node.js, Express, and MongoDB.",
  },
  {
    year: "2022",
    role: "Mobile and DevOps Engineer",
    company: "Product Projects",
    description:
      "Expanded into mobile and cloud delivery with React Native, AWS, and containerized deployments.",
  },
  {
    year: "2023",
    role: "Lead Systems Architect",
    company: "Enterprise Builds",
    description:
      "Architected large multi-vendor platforms with role-based dashboards and reliable high-scale data flows.",
  },
  {
    year: "Present",
    role: "Senior AI Architect",
    company: "Rafi Khan Studio",
    description:
      "Combining AI with modern web architecture to build intelligent products, assistants, and automation pipelines.",
  },
];

export const projectsData: ProjectEntry[] = [
  {
    id: "khancosmetics",
    title: "KhanCosmetics",
    category: "Enterprise Ecommerce Ecosystem",
    tools: ["Next.js", "Fullstack", "High-Scale DB", "Multi-panel Architecture"],
    description:
      "A large commercial platform with multiple operational panels and scalable architecture for business growth. Coming soon.",
    link: "https://khancosmetics.vercel.app",
    image: "/images/placeholder.webp",
    comingSoon: true,
  },
  {
    id: "vingo",
    title: "Vingo",
    category: "Real-Time Food Delivery Network",
    tools: ["React.js", "Node.js", "Socket.io", "MongoDB"],
    description:
      "A real-time food delivery system with location-aware restaurant discovery and live order workflows.",
    link: "https://vingo-1.vercel.app",
    image: "/images/VingoWebPic.jpg",
  },
  {
    id: "rafi-khan-official-portfolio-website",
    title: "Rafi Khan Official Portfolio Website",
    category: "Fullstack Portfolio Platform",
    tools: ["Next.js", "MongoDB", "Express.js"],
    description:
      "An official portfolio website featuring a Next.js frontend with a MongoDB and Express backend setup.",
    link: "https://mdrafikhan.vercel.app",
    image: "/images/Protfoliowebsite.jpg",
  },
  {
    id: "onecart",
    title: "OneCart",
    category: "Secure Ecommerce Platform",
    tools: ["React.js", "Express.js", "MongoDB", "Redux", "Firebase Auth"],
    description:
      "A security-focused ecommerce build with encrypted data flow, authentication hardening, and admin separation.",
    link: "https://onecartt.vercel.app",
    image: "/images/OneCart.jpg",
  },
  {
    id: "elaundry",
    title: "E-Laundry",
    category: "Localized Service Platform",
    tools: ["React.js", "Framer Motion", "Socket.io", "i18n", "MongoDB"],
    description:
      "A localized online laundry service platform with animated UX and reliable cookie-based session management.",
    link: "https://elaundry-five.vercel.app",
    image: "/images/ElaundryWebsite.jpg",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/rafihushen01", icon: "github" },
  { name: "GitHub Alt", url: "https://github.com/MdRafiKhan738", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rafi-khan-25649a37b/",
    icon: "linkedin",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/rafi.hossian.71",
    icon: "facebook",
  },
  { name: "WhatsApp", url: "https://wa.me/8801989678448", icon: "whatsapp" },
];
