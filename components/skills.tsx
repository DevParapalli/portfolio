"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python (5+ years)", "JavaScript/TypeScript (4+ years)", "C/C++ (3+ years)", "Rust", "Go", "Java", "Zig", "SQL", "Shell Scripting", "Python (5+ years)", "JavaScript/TypeScript (4+ years)", "C/C++ (3+ years)", "Rust", "Go", "Java", "Zig", "SQL", "Shell Scripting", "Python (5+ years)", "JavaScript/TypeScript (4+ years)", "C/C++ (3+ years)", "Rust", "Go", "Java", "Zig", "SQL", "Shell Scripting",],
    direction: 1,
    speed: 50,
  },
  {
    title: "Web Technologies",
    skills: ["React", "Svelte", "Next.js", "Node.js", "Express", "Django", "FastAPI", "HTML/CSS", "TailwindCSS", "Three.js", "PWA", "RESTful APIs", "WebSockets", "Web Scraping", "React", "Svelte", "Next.js", "Node.js", "Express", "Django", "FastAPI", "HTML/CSS", "TailwindCSS", "Three.js", "PWA", "RESTful APIs", "WebSockets", "Web Scraping", "React", "Svelte", "Next.js", "Node.js", "Express", "Django", "FastAPI", "HTML/CSS", "TailwindCSS", "Three.js", "PWA", "RESTful APIs", "WebSockets", "Web Scraping",],
    direction: -1,
    speed: 45,
  },
  {
    title: "AI & ML",
    skills: ["LangChain", "RAG Architectures", "Vector Databases", "NLP", "NLP Pipelines", "LLM Integration", "Machine Learning", "Deep Learning", "vLLM", "Ollama", "PyTorch", "Generative AI", "Large Language Models", "Azure OpenAI", "Vertex AI", "AWS Bedrock", "LangChain", "RAG Architectures", "Vector Databases", "NLP", "NLP Pipelines", "LLM Integration", "Machine Learning", "Deep Learning", "vLLM", "Ollama", "PyTorch", "Generative AI", "Large Language Models", "Azure OpenAI", "Vertex AI", "AWS Bedrock", "LangChain", "RAG Architectures", "Vector Databases", "NLP", "NLP Pipelines", "LLM Integration", "Machine Learning", "Deep Learning", "vLLM", "Ollama", "PyTorch", "Generative AI", "Large Language Models", "Azure OpenAI", "Vertex AI", "AWS Bedrock",],
    direction: 1,
    speed: 60,
  },
  {
    title: "Cloud & DevOps",
    skills: ["GCP (Certified)", "AWS", "Docker", "Docker-Compose", "Kubernetes", "Firebase", "Supabase", "Terraform", "Jenkins", "GitHub Actions", "CI/CD", "Cloud Run", "Compute Engine", "EC2", "S3", "EKS", "ECS", "OpenShift", "GCP (Certified)", "AWS", "Docker", "Docker-Compose", "Kubernetes", "Firebase", "Supabase", "Terraform", "Jenkins", "GitHub Actions", "CI/CD", "Cloud Run", "Compute Engine", "EC2", "S3", "EKS", "ECS", "OpenShift", "GCP (Certified)", "AWS", "Docker", "Docker-Compose", "Kubernetes", "Firebase", "Supabase", "Terraform", "Jenkins", "GitHub Actions", "CI/CD", "Cloud Run", "Compute Engine", "EC2", "S3", "EKS", "ECS", "OpenShift",],
    direction: -1,
    speed: 55,
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "pgVector", "MongoDB", "SQLite", "OracleDB", "Query Optimization", "Schema Design", "PostgreSQL", "pgVector", "MongoDB", "SQLite", "OracleDB", "Query Optimization", "Schema Design", "PostgreSQL", "pgVector", "MongoDB", "SQLite", "OracleDB", "Query Optimization", "Schema Design",],
    direction: 1,
    speed: 50,
  },
  {
    title: "Other",
    skills: ["Git", "Linux", "WebGL", "Three.js", "Selenium", "Web Scraping", "IoT (Arduino, ESP32, Raspberry Pi)", "Robotics Programming", "Git", "Linux", "WebGL", "Three.js", "Selenium", "Web Scraping", "IoT (Arduino, ESP32, Raspberry Pi)", "Robotics Programming", "Git", "Linux", "WebGL", "Three.js", "Selenium", "Web Scraping", "IoT (Arduino, ESP32, Raspberry Pi)", "Robotics Programming",],
    direction: -1,
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
        <h2 className="text-4xl md:text-5xl font-bold">Technical Acumen</h2>
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

