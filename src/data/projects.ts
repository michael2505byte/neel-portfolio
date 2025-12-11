export type Project = {
  slug: string;
  title: string;
  short: string;
  tech: string[];
  details: string[];
  repoLink?: string;
};

export const projects: Project[] = [
  {
    slug: "animal-welfare-web",
    title: "Animal Welfare Web",
    short:
      "Full-stack platform for reporting sick animals, searching by pincode and connecting NGOs for adoption & help.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    details: [
      "Designed a clean, mobile-first UI for reporting sick animals with description & location.",
      "Developed backend APIs to store cases and notify NGOs.",
      "Implemented pincode-based filtering, secure NGO auth, and adoption workflow.",
      "Improved reporting speed and usability by focusing on accessibility."
    ]
  },
  {
    slug: "see-for-me",
    title: "See For Me",
    short:
      "Cross-platform accessibility app that identifies objects and reads results aloud in multiple languages.",
    tech: ["Flutter", "Google TTS", "Claude API"],
    details: [
      "Built object detection pipeline and integrated multilingual TTS for natural audio.",
      "Implemented OCR to read text aloud for visually impaired users.",
      "Optimized inference time for better user experience on mid-range devices."
    ],
    repoLink: "https://github.com/yourusername/seeforme"
  },
  {
    slug: "forest-fire-detection-system",
    title: "Forest Fire Detection System",
    short:
      "IoT prototype monitoring temp, humidity, CO & soil moisture and sending real-time alerts for early detection.",
    tech: ["Arduino Uno", "DHT11", "MQ-7", "ESP8266-01"],
    details: [
      "Built a sensor network to detect environmental anomalies tied to wildfire risk.",
      "Used ESP8266 to send alerts to a web dashboard and SMS gateway.",
      "Calibrated sensor thresholds and reduced false positives with smoothing logic."
    ],
    repoLink: "https://github.com/yourusername/iot-forest-fire"
  }
];
