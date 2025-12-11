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
  phone: "+91 9892179954",
  location: "Andheri East, Mumbai, India",
  resume: "/resume.pdf",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourname",
  portfolio: "https://yourdomain.com",

  education: {
    degree: "B.Tech in Computer Engineering",
    college: "K J Somaiya Institute of Technology",
    cgpa: "7.89 CGPA",
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
      website: "https://cladroid.example.com"
    },
    {
      company: "Cladroid Technologies",
      role: "Cybersecurity Intern",
      date: "May 2025 – Jun 2025",
      points: [
        "Assessed web application vulnerabilities and studied OWASP top issues.",
        "Performed penetration testing using Burp Suite and Kali Linux tooling.",
        "Documented findings and suggested remediation steps to the dev team."
      ],
      image: "/internships/cladroid-cyber.jpg",
      website: "https://cladroid.example.com"
    },
    {
      company: "Labmentix Pvt. Ltd.",
      role: "AI / Machine Learning Intern",
      date: "May 2025 – Jun 2025",
      points: [
        "Worked on ML model tuning and data pipeline improvements to reduce inference time.",
        "Conducted experiments to improve model accuracy and deployed evaluation scripts.",
        "Collaborated across teams to integrate ML prototypes into the application flow."
      ],
      image: "/internships/labmentix.jpg",
      website: "https://labmentix.example.com"
    }
  ],

  certifications: [
    "JavaScript & PHP Programming — Udemy (Dec 2024)",
    "Artificial Intelligence Course — Udemy (Jul 2022)",
    "Ethical Hacking Course — Udemy (Jul 2022)"
  ],

  skills: [
    "Python", "JavaScript", "PHP", "SQL",
    "Flutter", "Firebase", "React",
    "Machine Learning", "Cybersecurity", "Ethical Hacking",
    "UI/UX", "OOPS", "Problem Solving"
  ]
};
