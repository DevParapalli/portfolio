"use client"

import { motion } from "framer-motion"

export default function Education() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
      >
        Education
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm"
      >
        <h3 className="text-2xl font-bold text-blue-400">
          Government College of Engineering, Nagpur
        </h3>
        <p className="text-lg text-gray-400 mb-2">
          Bachelor's of Technology, Computer Science and Mathematics
        </p>
        <p className="text-sm text-gray-500 mb-4">Dec 2021 — Present</p>
        <div className="space-y-4">
          <p className="text-gray-300">CGPA: 8.28/10.0</p>
          <div>
            <h4 className="text-lg font-semibold mb-2">Relevant Coursework:</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "AI/ML",
                "Deep Learning",
                "Data Structures and Algorithms",
                "Compiler Design",
                "Web Development",
                "Python Programming",
                "Java Fundamentals",
                "Data Science",
                "Abstract Mathematics",
                "Linear Algebra",
                "Calculus",
              ].map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

