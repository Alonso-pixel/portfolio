import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cursostesi from "@/public/cursostesi.png";
import sabomotors from "@/public/sabomotors_image.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About Me",
    hash: "#about",
  },
  {
    name: "Work",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact Me",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science Engineering",
    location: "Coatepec, State of Mexico",
    description:
      "I completed the final year of Computer Science Engineering at the Technological Institute of Higher Studies of Ixtapaluca.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "TESI Courses Website",
    location: "Ixtapaluca, State of Mexico",
    description:
      "I built an E-learning website that allowed me to develop Frontend and Backend skills. The project lasted 1 year.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Tlacpacoya, State of Mexico",
    description:
      "I am currently developing the institutional website for the used car agency Seminuevos Sabo Motors. The project has been ongoing for 1 month.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "TESI Courses",
    description:
      "I worked with the Technological Institute of Higher Studies of Ixtapaluca to build a course website: www.cursostesi.tech. It was a 1-year project.",
    tags: ["React", "Next.js", "Prisma", "Tailwind", "Git"],
    imageUrl: cursostesi,
    projectURL: "https://cursostesi.tech",
  },
  {
    title: "Sabo Motors",
    description:
      "I am developing a website for the used car agency Seminuevos Sabo Motors: www.seminuevossabomotors.com. It is a 5-month project, still ongoing.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Git"],
    imageUrl: sabomotors,
    projectURL: "https://www.seminuevossabomotors.com",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "SQL",
  "Framer Motion",
] as const;
