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
  title: "Computer Engineering Student · ML · Cybersecurity · GenAI",
  email: "neelshah644@gmail.com",
  phone: "+91 9892179954",
  location: "Andheri East, Mumbai, India",
  resume: "/resume.pdf",
  github: "https://github.com/michael2505byte",
  linkedin: "https://www.linkedin.com/in/neel-shah-729a99281/",
  portfolio: "https://neel-portfolio-8jj9lzurx-neel-s-projects-28628c32.vercel.app/",

  education: {
    degree: "B.Tech in Computer Engineering",
    college: "K J Somaiya Institute of Technology",
    year: "August 2023 - Pursuing"
  },

  internships: [
    {
      company: "Cladroid Technologies",
      role: "Intern - GenAI and Agentic AI",
      date: "Dec 2025 - Jan 2026",
      points: [
        "Built GenAI and agentic AI workflows for rapid proof-of-concept automation use cases.",
        "Improved output quality through prompt iteration, testing, and evaluation loops.",
        "Collaborated with the team to integrate AI-assisted features into internal prototypes."
      ],
      image: "/internships/cladroid-agentic.jpg",
      website: "https://cladroid.io"
    },
    {
      company: "Cladroid Technologies",
      role: "Intern - Machine Learning",
      date: "Dec 2024 - Jan 2025",
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
      role: "Intern - Cybersecurity",
      date: "May 2025 - Jun 2025",
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
      role: "Intern - Artificial Intelligence and Machine Learning",
      date: "May 2025 - Jun 2025",
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
    "2nd Prize (Software Category) - TECHSPARKS 2026, Fr. C. Rodrigues Institute of Technology",
    "3rd Prize (Software Category) - Tantragyan 2026, Lokmanya Tilak College of Engineering",
    "JavaScript and PHP Programming Course - Udemy (Dec 2024)",
    "Artificial Intelligence Course - Udemy (Jul 2022)",
    "Ethical Hacking Course - Udemy (Jul 2022)"
  ],

  skills: [
    "Java",
    "Communication",
    "Time Management",
    "Object-Oriented Programming",
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
