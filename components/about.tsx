"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("About Me", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>My Journey</SectionHeading>
      <p className="mb-3">
        After studying{" "}
        <span className="font-bold">Computer Science Engineering</span>, I built
        a{" "}
        <Link href="https://cursostesi.tech">
          <span className="font-bold">course website</span> for the{" "}
          <span className="font-bold text-green-600">
            TECHNOLOGICAL INSTITUTE OF HIGHER STUDIES OF IXTAPALUCA
          </span>
          .
        </Link>
        <Link href="https://yellow-glacier-049b0c110.4.azurestaticapps.net/">
          {" "}
          Currently, I am building a{" "}
          <span className="font-bold">website for the company </span>
          <span className="font-bold text-red-700">Seminuevos Sabo Motors</span>
          and also working in some projects as a Freelancer.
        </Link>{" "}
        My favorite part of web development{" "}
        <span className="italic">is programming:</span> I{" "}
        <span className="underline">enjoy solving problems</span> through proper
        implementation. The technologies I use the most are{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and PostgreSQL
        </span>
        . I also use TypeScript and Prisma. I like learning new technologies. I
        am open to offers as a{" "}
        <span className="font-medium">software developer.</span>
      </p>
    </motion.section>
  );
}
