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
    repoLink: "https://github.com/michael2505byte/SeeForMe"
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
    repoLink: "https://github.com/michael2505byte/IoT-Based-Forest-Fire-Detection-System"
  },
  {
    slug: "animal-welfare-web",
    title: "Animal Welfare Web",
    short:
      "Web platform for tracking and supporting animal welfare initiatives with community engagement and resource management.",
    tech: ["React", "Tailwind CSS", "Firebase", "Google Maps API"],
    details: [
      "Designed and built responsive web interface for animal shelter management and adoption tracking.",
      "Integrated Google Maps API to display nearby shelters and rescue centers with real-time data.",
      "Implemented volunteer scheduling system and donation management features.",
      "Created community forum for sharing rescue stories and adoption success cases."
    ]
  }
];
