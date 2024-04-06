"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contáctame", 0.5);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      {/* <SectionHeading >Contácto:</SectionHeading> */}
      <h1 className="-mt-36 text-3xl font-bold">Contácto:</h1>
      <p className="text-gray-700 mt-2 text-lg dark:text-white/80">
        Por favor contáctame directamente con:{" "}
      </p>
      <div className="flex flex-col text-center">
        <p>
          LinkedIn:{" "}
          <a
            className="underline"
            href="https://www.linkedin.com/in/alonso-alarc%C3%B3n-aguilar-b57608296/"
          >
            {" "}
            Alonso Alarcón Aguilar
          </a>
        </p>
        <p>
          Número:{" "}
          <a className="underline" href="tel:+5215543200505">
            (+52 1) 56 1165 6986
          </a>{" "}
        </p>
        <p>
          Correo:{" "}
          <a className="underline" href="mailto:kreitos_05@outlook.com">
            kreitos_05@outlook.com
          </a>{" "}
        </p>
      </div>
    </motion.section>
  );
}
