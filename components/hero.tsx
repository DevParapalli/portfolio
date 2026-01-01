"use client"

import { MapPin } from 'lucide-react'
import { motion } from "framer-motion"
import WaveBackground from './wave-background'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20">
      <WaveBackground className="absolute inset-0 opacity-90" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <div className="text-left text-xl md:text-2xl max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-blue-500 font-mono"
          >
            {'<developer>'}
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-7xl md:text-9xl font-bold mb-6 tracking-tighter"
          >
            Devansh Parapalli
          </motion.h1>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-xl mb-8 font-mono"
          >
            Solutions Architect specializing in Cloud & AI integrations
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center text-sm text-gray-300 font-mono"
          >
            <MapPin className="w-4 h-4 mr-2" />
            <p>Hyderabad, Telangana, India</p>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-300 font-mono text-sm">
        Scroll to explore
      </div>
    </section>
  )
}

