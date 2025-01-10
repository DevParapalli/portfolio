"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail } from 'lucide-react'
import localFont from "next/font/local"

const duneRise = localFont({src: "../lib/fonts/Dune_Rise.woff2"})

export default function Navbar() {
  const { scrollY } = useScroll()
  const width = useTransform(scrollY, [0, 100], ["100%", "50%"])
  const top = useTransform(scrollY, [0, 100], ["0px", "20px"])
  
  return (
    <motion.div
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full px-4 min-w-fit"
      style={{ width, top }}
    >
      <div className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg p-4 mt-4">
        <div className="flex justify-between items-center">
          <Link href="/" className={`text-lg font-bold pr-4 ${duneRise.className}`}>
            DP
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/DevParapalli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/devparapalli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:hey@parapalli.dev"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

