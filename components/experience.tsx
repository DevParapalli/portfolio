"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "PolymathAI",
    location: "Nagpur, Maharashtra, India",
    period: "Jun 2024 — Aug 2024",
    description: [
      "Creating AI-powered web application, increasing content organization efficiency by 40%",
      "Leading development of full-stack applications using MERN stack and Next.js",
      "Implementing AI models to enhance product functionality",
      "Developed robust content scraping framework for multiple data formats",
      "Collaborating with founding team on feature development",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Gameathon",
    location: "Remote",
    period: "Mar 2023 — Apr 2023",
    description: [
      "Integrated Razorpay and Stripe payment gateways, reducing checkout friction by 80%",
      "Implemented e-commerce functionalities, increasing user retention by 20%",
      "Integrated Firebase for authentication and game request feature",
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
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
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

