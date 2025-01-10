"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
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
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-300 mb-8">
          Let's collaborate on something amazing together.
        </p>
        <div className="flex justify-center gap-8 mb-12">
          <Link
            href="tel:+918793150182"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-300 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>+91 87931 50182</span>
          </Link>
          <Link
            href="mailto:hey@parapalli.dev"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-300 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>hey@parapalli.dev</span>
          </Link>
        </div>
      </motion.div>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-xl mx-auto space-y-6 relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            placeholder="Name"
            className="bg-indigo-900/50 border-indigo-800"
          />
          <Input
            type="email"
            placeholder="Email"
            className="bg-indigo-900/50 border-indigo-800"
          />
        </div>
        <Input
          placeholder="Subject"
          className="bg-indigo-900/50 border-indigo-800"
        />
        <Textarea
          placeholder="Message"
          className="bg-indigo-900/50 border-indigo-800 min-h-[150px]"
        />
        <Button
          size="lg"
          className="w-full bg-purple-600 hover:bg-purple-700"
        >
          Send Message
        </Button>
      </motion.form>
      <div className="mt-16 text-center relative">
        <p className="text-gray-300 flex items-center justify-center">
          <MapPin className="w-5 h-5 mr-2" />
          Nagpur, Maharashtra, India - 440001
        </p>
      </div>
    </section>
  )
}

