"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Link from "next/link"

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-indigo-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16 relative"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Connect with Me</h2>
        <p className="text-lg text-gray-300 mb-8">Let's build something amazing together.</p>

        <div className="flex justify-center gap-8 mb-12">
          <Link href="tel:+918793150182" className="flex items-center gap-2 text-gray-300 hover:text-blue-300 transition-colors">
            <Phone className="w-5 h-5" />
            <span>+91 87931 50182</span>
          </Link>

          <Link href="mailto:hello@parapalli.dev" className="flex items-center gap-2 text-gray-300 hover:text-blue-300 transition-colors">
            <Mail className="w-5 h-5" />
            <span>hey@parapalli.dev</span>
          </Link>
        </div>

        <div className="flex justify-center gap-6">
          <Link href="https://github.com/DevParapalli" target="_blank" className="text-gray-300 hover:text-blue-300 transition-colors">
            <Github className="w-6 h-6" />
          </Link>
          <Link href="https://linkedin.com/in/devparapalli" target="_blank" className="text-gray-300 hover:text-blue-300 transition-colors">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link href="https://instagram.com/dev_parapalli" target="_blank" className="text-gray-300 hover:text-blue-300 transition-colors">
            <Instagram className="w-6 h-6" />
          </Link>
        </div>
      </motion.div>

      <div className="mt-16 text-center relative">
        <p className="text-gray-300 flex items-center justify-center">
          <MapPin className="w-5 h-5 mr-2" />
          Hyderabad, Telangana, India - 500032
        </p>
      </div>
    </section>
  )
}
