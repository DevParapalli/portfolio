"use client"

import { motion } from "framer-motion"
import { FileText, ExternalLink } from "lucide-react"
import Link from "next/link"

const publications = [
    {
        title: "Artificial Intelligence based Knowledge Organizer for diverse data formats",
        venue: "IJTE - ISTE India",
        details: "Vol. 48, Special Issue No. 2, Page 261-265",
        date: "March 2025",
        type: "Journal Article",
        color: "from-blue-500 to-purple-500",
        link: "/ijte-aiko-paper.pdf", // Place your PDF in the public folder
    },
    {
        title: "ARA: AI-powered Research Assistant",
        venue: "ResearchGate",
        details: "https://doi.org/10.13140/RG.2.2.28162.90567/1",
        date: "April 2024",
        link: "https://doi.org/10.13140/RG.2.2.28162.90567/1",
        type: "Research Paper",
        color: "from-purple-500 to-pink-500",
    },
]

export default function Publications() {
    return (
        <section className="py-20 px-4 bg-blue-950/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto relative z-10"
            >
                <div className="text-blue-500 font-mono mb-4">{'<publications>'}</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-16">Research & Publications</h2>

                <div className="space-y-6">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${pub.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-lg`} />
                            <Link
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-500/50 transition-colors cursor-pointer"
                            >
                                <div className="flex items-start gap-4">
                                    <FileText className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between gap-4 mb-2">
                                            <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{pub.title}</h3>
                                            <ExternalLink className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                        </div>
                                        <p className="text-blue-300 mb-2">{pub.venue}</p>
                                        <p className="text-sm text-gray-400 mb-2">{pub.details}</p>
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                                                {pub.type}
                                            </span>
                                            <span className="text-sm text-gray-500">{pub.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
