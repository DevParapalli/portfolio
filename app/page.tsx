import { Metadata } from "next"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Devansh Parapalli - Web and Systems Developer",
  description: "Computer Science Student specializing in Web and Systems Development",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <CustomCursor />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  )
}

