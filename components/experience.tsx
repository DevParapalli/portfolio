"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Solutions Architect - Cloud & AI",
    company: "Tata Consultancy Services Limited",
    location: "Hyderabad, Telangana, India",
    period: "Jul 2025 — Present",
    description: [
      "GenAI CoE: Developing novel Generative AI technologies including CloudOpsBot for automating CloudOps tasks and build failure summarizer with auto-fixing capabilities. Evaluated and deployed LLMs ranging from 7B to 70B parameters.",
      "Cisco Capital: Established AI adoption program and delivered 3 production use-cases. Developed AI-powered Report Generator for structured/transactional data supporting SQL and NoSQL databases. Implemented Agentic AI Automation workflow integrating OracleDB, Docker, Jenkins, OpenShift and Kubernetes.",
      "Nokia: Delivered end-to-end cloud migration of manufacturing processes from on-premises SAP ME to GCP using Assess-Migrate-Manage workflow with cloud-native scalable services.",
      "Zebra: Architected AI-workflows for large-scale PO and Invoice ingestion with source merging, automating processing of handwritten, scanned and digital documents.",
    ],
  },
  {
    title: "GenAI & Backend Development Intern",
    company: "PolymathAI",
    location: "Nagpur, Maharashtra, India",
    period: "Jun 2024 — Aug 2024",
    description: [
      "Architected parallelized video processing pipeline reducing processing time from 3 minutes to 10 seconds per video (95% improvement) using pipeline-parallel inference techniques.",
      "Scaled platform to support 100 concurrent users and successfully processed 14,600 videos.",
      "Built complete pipeline for video bite creation and multi-modal content understanding, enabling interactive educational content generation.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company: "Gameathon",
    location: "Remote",
    period: "Feb 2023 — Apr 2023",
    description: [
      "Developed e-commerce features including discount code engine and multi-processor payment integration using React, Express, MongoDB, and TailwindCSS.",
      "Resolved critical inventory management and order processing bottlenecks affecting platform scalability.",
    ],
  },
  {
    title: "Independent Technical Consultant",
    company: "Freelance Engagements",
    location: "Remote",
    period: "2020 — 2024",
    description: [
      "Delivered 10+ complete software solutions across web applications, mobile development, automation systems, and data migration projects.",
      "Built production systems including landing pages with Three.js animations, inventory management systems, e-commerce platforms, web scraping workflows, and RAG-powered conversational interfaces.",
      "Identified security vulnerabilities earning bug bounties for critical findings in 3 Android applications and 2 web platforms.",
    ],
  },
]

export default function Experience() {
  return (
    <section className="py-20 px-4 bg-blue-950">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center relative"
      >
        Experience
      </motion.h2>
      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 border-l-2 border-blue-500"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-blue-300">{experience.title}</h3>
              <p className="text-lg text-blue-200">{experience.company}</p>
              <p className="text-sm text-gray-400">{experience.location} | {experience.period}</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {experience.description.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

