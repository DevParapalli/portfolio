"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const categories = ["All", "AI/ML", "Web", "Systems"]

const projects = [
  {
    title: "AIKO",
    description: "AI-powered Knowledge Organizer",
    image: "/aiko.png?height=600&width=800",
    link: "https://aiko.parapalli.dev",
    category: "AI/ML",
    details: [
      "Custom NLP pipeline for content embedding",
      "Supports text, images, and audio formats",
      "Reduced information retrieval time by 75%",
      "90% user satisfaction rate",
    ],
  },
  {
    title: "ARA",
    description: "AI Research Assistant",
    image: "/ara.png?height=600&width=800",
    link: "https://ara.parapalli.dev",
    category: "AI/ML",
    details: [
      "Custom LLM flow for content summarization",
      "80% faster response times",
      "Reduced research time by 30% for 50 students",
      "Optimized LangChain implementation",
    ],
  },
  {
    title: "AutomaticResults",
    description: "Automated Result Scraping Tool",
    image: "/placeholder.svg?height=600&width=800",
    link: "https://github.com/DevParapalli/rtmnu-result-scraping",
    category: "Systems",
    details: [
      "Web scraping of university results",
      "PDF admit card parsing",
      "100% accurate rankings for 100+ students",
    ],
  },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const filteredProjects = projects.filter(
    project => selectedCategory === "All" || project.category === selectedCategory
  )

  return (
    <section className="py-20 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="text-blue-500 font-mono mb-4">{'<projects>'}</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Featured Work</h2>
          <div className="flex gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-mono transition-colors",
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-blue-500/10 text-blue-300 hover:bg-blue-500/20"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="group relative aspect-[4/3] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg overflow-hidden border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={hoveredIndex === index ? { y: 0, opacity: 1 } : {}}
                          className="text-center"
                        >
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <p className="text-blue-400 mb-4 font-mono">{project.description}</p>
                          <ul className="text-sm text-gray-300 list-disc list-inside text-left space-y-2">
                            {project.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-mono">
                      {project.category}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

