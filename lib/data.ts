import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cursostesi from "@/public/cursostesi.png";
import sabomotors from "@/public/sabomotors_image.png";

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Conóceme",
    hash: "#about",
  },
  {
    name: "Trabajo",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Contáctame",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Ingeniería Informática",
    location: "Coatepec, Estado de México",
    description:
      "Terminé el último año de Ingeniería en Informática en el Tecnológico de Estudios Superiores de Ixtapaluca.  ",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Sitio web de cursos TESI",
    location: "Ixtapaluca, Estado de México",
    description:
      "Construí un sitio web de E-learning que me permitió desarrollar habilidades Frontend y Backend. El proyecto duró 1 año.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Desarrollador Full-Stack",
    location: "Tlacpacoya, Estado de México",
    description:
      "Actualmente estoy desarrollando la página institucional de la agencia de autos Seminuevos Sabo Motors. El proyecto lleva 1 mes.",
    icon: React.createElement(FaReact),
    date: "2024 - presente",
  },
] as const;

export const projectsData = [
  {
    title: "Cursos TESI",
    description:
      "Trabajé con el Tecnológico de Estudios Superiores de Ixtapaluca para construir un sitio web de cursos: www.cursostesi.tech. Fue un proyecto de 1 año.",
    tags: ["React", "Next.js", "Prisma", "Tailwind", "Git"],
    imageUrl: cursostesi,
    projectURL: "https://cursostesi.tech",
  },
  {
    title: "Sabo Motors",
    description:
      "Estoy desarrollando un sitio web para la agencia de autos Seminuevos Sabo Motors. Es un proyecto de 1 mes, aún sigue en curso.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Git"],
    imageUrl: sabomotors,
    projectURL: "https://yellow-glacier-049b0c110.4.azurestaticapps.net",
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
