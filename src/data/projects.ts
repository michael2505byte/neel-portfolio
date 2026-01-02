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
    slug: "see-for-me",
    title: "See For Me",
    short:
      "Cross-platform accessibility app that identifies objects and reads results aloud in multiple languages using OCR and TTS.",
    tech: ["Flutter", "Google TTS", "Claude API", "Python"],
    details: [
      "Built object detection pipeline and integrated multilingual TTS for natural audio output.",
      "Implemented OCR to read text aloud for visually impaired users with high accuracy.",
      "Optimized inference time and memory usage for better UX on mid-range devices.",
      "Designed accessible UI with screen reader support and keyboard navigation."
    ],
    repoLink: "https://github.com/neelshah2409/seeforme"
  },
  {
    slug: "forest-fire-detection-system",
    title: "Forest Fire Detection System",
    short:
      "IoT prototype monitoring temperature, humidity, CO levels & soil moisture with real-time alerts for early wildfire detection.",
    tech: ["Arduino Uno", "DHT11", "MQ-7", "ESP8266", "Python", "Firebase"],
    details: [
      "Built a distributed sensor network to detect environmental anomalies tied to wildfire risk.",
      "Used ESP8266 microcontroller to send real-time alerts to a web dashboard and SMS gateway.",
      "Calibrated sensor thresholds with machine learning to reduce false positives by 40%.",
      "Implemented data logging and visualization for historical analysis and trend detection."
    ],
    repoLink: "https://github.com/neelshah2409/iot-forest-fire-detection"
  },
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    short:
      "Full-stack platform for tracking inventory, managing stock levels, and generating reports with role-based access control.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    details: [
      "Designed and implemented RESTful APIs for inventory operations with proper authentication and authorization.",
      "Built responsive dashboard with real-time stock updates and low-inventory alerts.",
      "Integrated barcode scanning for quick product lookup and inventory adjustments.",
      "Created automated reporting system to track stock movements and generate business insights."
    ],
    repoLink: "https://github.com/neelshah2409/inventory-management"
  }
];
