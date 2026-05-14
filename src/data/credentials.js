import {
  BadgeCheck,
  Brain,
  BriefcaseBusiness,
  Code2,
  Megaphone,
  Palette,
  Video,
} from "lucide-react";

export const skillGroups = [
  {
    id: 1,
    title: "Design & Creative Tools",
    icon: Palette,
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
      "Canva",
      "Adobe Lightroom",
    ],
  },
  {
    id: 2,
    title: "Video & Media Tools",
    icon: Video,
    skills: [
      "Adobe Premiere Pro",
      "After Effects",
      "CapCut",
      "DaVinci Resolve",
      "OBS",
    ],
  },
  {
    id: 3,
    title: "Development & Technology",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Python",
      "Java",
      "C#",
      "SQL",
    ],
  },
  {
    id: 4,
    title: "Creative Expertise",
    icon: Megaphone,
    skills: [
      "Branding",
      "Typography",
      "Campaign Planning",
      "Visual Storytelling",
      "Social Media Design",
      "Event Publicity",
    ],
  },
  {
    id: 5,
    title: "Professional Skills",
    icon: BriefcaseBusiness,
    skills: [
      "Leadership",
      "Public Speaking",
      "Event Moderation",
      "Teamwork",
      "Communication",
      "Project Coordination",
    ],
  },
  {
    id: 6,
    title: "Learning Focus",
    icon: Brain,
    skills: [
      "Data Science",
      "AI",
      "Web Development",
      "Digital Marketing",
      "UI/UX",
      "Brand Strategy",
    ],
  },
];

export const certifications = [
  // Add your real certifications here later.
  // Example:
  // {
  //   id: 1,
  //   title: "Certificate Name",
  //   issuer: "Issuing Organization",
  //   year: "2026",
  //   category: "Web Development",
  //   link: "#",
  // },
];

export const certificationIcon = BadgeCheck;