import { Metadata } from "next"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Publications from "@/components/publications"
import Contact from "@/components/contact"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Devansh Parapalli - Solutions Architect | Cloud & AI",
  description: "Solutions Architect specializing in Cloud & AI integrations with 5+ years of experience",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <CustomCursor />

      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Publications />
      <Contact />
    </main>
  )
}

