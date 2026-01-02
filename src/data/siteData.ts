export type Internship = {
  company: string;
  role: string;
  date?: string;
  points?: string[];
  image?: string;
  website?: string;
};

export type Site = {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location?: string;
  resume: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
  education: {
    degree: string;
    college: string;
    cgpa?: string;
    year?: string;
  };
  internships: Internship[];
  certifications?: string[];
  skills?: string[];
};

export const site: Site = {
  name: "Neel Shah",
  title: "Computer Engineering Student · ML · Cybersecurity · Full-Stack",
  email: "neelshah644@gmail.com",
  resume: "/resume.pdf",
  github: "https://github.com/neelshah2409",
  linkedin: "https://www.linkedin.com/in/neelshah2409",
  portfolio: "https://neel-portfolio.vercel.app",

  education: {
    degree: "B.Tech in Computer Engineering",
    college: "K J Somaiya Institute of Technology",
    year: "2022 – 2026"
  },

  internships: [
    {
      company: "Cladroid Technologies",
      role: "Machine Learning Intern",
      date: "Dec 2024 – Jan 2025",
      points: [
        "Worked on ML model development and experimentation for prototype features.",
        "Performed data preprocessing, feature engineering and model evaluation.",
        "Collaborated with engineers to deploy fast prototypes and iterate on feedback."
      ],
      image: "/internships/cladroid-ml.jpg",
      website: "https://cladroid.io"
    },
    {
      company: "Cladroid Technologies",
      role: "Cybersecurity Intern",
      date: "May 2024 – Jun 2024",
      points: [
        "Assessed web application vulnerabilities and studied OWASP top issues.",
        "Performed penetration testing using Burp Suite and Kali Linux tooling.",
        "Documented findings and suggested remediation steps to the dev team."
      ],
      image: "/internships/cladroid-cyber.jpg",
      website: "https://cladroid.io"
    },
    {
      company: "Labmentix Pvt. Ltd.",
      role: "AI / Machine Learning Intern",
      date: "Apr 2024 – May 2024",
      points: [
        "Worked on ML model tuning and data pipeline improvements to reduce inference time.",
        "Conducted experiments to improve model accuracy and deployed evaluation scripts.",
        "Collaborated across teams to integrate ML prototypes into the application flow."
      ],
      image: "/internships/labmentix.jpg",
      website: "https://labmentix.com"
    }
  ],

  certifications: [
    "JavaScript & PHP Programming — Udemy",
    "Artificial Intelligence Course — Udemy",
    "Ethical Hacking Course — Udemy"
  ],

  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Flutter",
    "Node.js",
    "Firebase",
    "SQL",
    "Machine Learning",
    "TensorFlow",
    "Cybersecurity",
    "Ethical Hacking",
    "OWASP",
    "Burp Suite",
    "Full-Stack Development",
    "UI/UX Design",
    "Problem Solving",
    "Data Structures",
    "Algorithms"
  ]
};
