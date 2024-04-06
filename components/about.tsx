"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("Conóceme", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Mi Historia</SectionHeading>
      <p className="mb-3">
        Después estudiar{" "}
        <span className="font-bold">Ingeniería en Informática</span> construí un
        sitio{" "}
        <Link href="https://cursostesi.tech">
          <span className="font-bold">web de cursos</span> para el{" "}
          <span className="font-bold text-green-600">
            TECNOLÓGICO DE ESTUDIOS SUPERIORES DE IXTAPALUCA
          </span>
          .
        </Link>
        <Link href="https://yellow-glacier-049b0c110.4.azurestaticapps.net/">
          {" "}
          Actualmente estoy construyendo un
          <span className="font-bold"></span> sitio web para la empresa{" "}
          <span className="font-bold text-red-700">Seminuevos Sabo Motors</span>
          .
        </Link>{" "}
        Mi parte favorita del desarrollo web
        <span className="italic"> es la programación:</span> me{" "}
        <span className="underline">gusta resolver problemas</span> a través de
        su correcta implementacion. Las tecnologías que más uso son{" "}
        <span className="font-medium">
          React, Next.js, Node.js, y PostgreSQL
        </span>
        . Utilizo también TypeScript y Prisma. Me gusta aprender tecnologías
        nuevas. Estoy abierto a ofertas como{" "}
        <span className="font-medium">desarrollador de software.</span>
      </p>
    </motion.section>
  );
}
