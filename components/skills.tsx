"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C/C++", "JavaScript/TypeScript", "Rust", "SQL", "Shell Scripting", "Python", "C/C++", "JavaScript/TypeScript", "Rust", "SQL", "Shell Scripting", "Python", "C/C++", "JavaScript/TypeScript"],
    direction: 1,
    speed: 50,
  },
  {
    title: "Web Technologies",
    skills: ["React", "Svelte", "Next.js", "Node.js", "Django", "FastAPI", "HTML/CSS", "RESTful APIs", "Web Scraping", "React", "Svelte", "Next.js", "Node.js", "Django", "FastAPI", "HTML/CSS", "RESTful APIs", "Web Scraping", "React", "Svelte", "Next.js", "Node.js", "Django", "FastAPI", "HTML/CSS", "RESTful APIs", "Web Scraping"],
    direction: -1,
    speed: 45,
  },
  {
    title: "AI & ML",
    skills: ["NLP", "Machine Learning", "Deep Learning", "Generative AI", "PyTorch", "Large Language Models", "NLP", "Machine Learning", "Deep Learning", "Generative AI", "PyTorch", "Large Language Models", "NLP", "Machine Learning", "Deep Learning", "Generative AI", "PyTorch", "Large Language Models"],
    direction: 1,
    speed: 60,
  },
  {
    title: "Cloud & DevOps",
    skills: ["Docker/Docker-Compose", "AWS", "GCP", "Firebase", "Supabase", "CI/CD", "Terraform", "Docker/Docker-Compose", "AWS", "GCP", "Firebase", "Supabase", "CI/CD", "Terraform", "Docker/Docker-Compose", "AWS", "GCP", "Firebase", "Supabase", "CI/CD", "Terraform"],
    direction: -1,
    speed: 55,
  },
  {
    title: "Other",
    skills: ["Git", "Linux", "WebGL", "Three.js", "IoT (Arduino, ESP32, Raspberry Pi)", "Robotics Programming", "Git", "Linux", "WebGL", "Three.js", "IoT (Arduino, ESP32, Raspberry Pi)", "Robotics Programming", "Git", "Linux", "WebGL", "Three.js", "IoT (Arduino, ESP32, Raspberry Pi)", "Robotics Programming", ],
    direction: 1,
    speed: 50,
  },
]

function MarqueeRow({ skills, direction, speed }: { skills: string[], direction: number, speed: number }) {
  return (
    <div className="relative flex overflow-hidden items-center group">
      <motion.div
        initial={{ x: direction > 0 ? "0%" : "-100%" }}
        animate={{ x: direction > 0 ? "-100%" : "0%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-nowrap items-center gap-4 whitespace-nowrap"
      >
        {skills.map((skill, index) => (
          <span key={index} className="inline-flex items-center">
            <span className="text-white/80 text-lg">{skill}</span>
            <span className="mx-4 text-white/20">•</span>
          </span>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction > 0 ? "100%" : "0%" }}
        animate={{ x: direction > 0 ? "0%" : "100%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-nowrap items-center gap-4 whitespace-nowrap absolute top-0"
      >
        {skills.map((skill, index) => (
          <span key={index} className="inline-flex items-center">
            <span className="text-white/80 text-lg">{skill}</span>
            <span className="mx-4 text-white/20">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 mb-12"
      >
        <div className="text-blue-500 font-mono mb-4">{'<skills>'}</div>
        <h2 className="text-4xl md:text-5xl font-bold">Technical Expertise</h2>
      </motion.div>
      <div className="space-y-12">
        {skillCategories.map((category, index) => (
          <MarqueeRow
            key={index}
            skills={category.skills}
            direction={category.direction}
            speed={category.speed}
          />
        ))}
      </div>
    </section>
  )
}

