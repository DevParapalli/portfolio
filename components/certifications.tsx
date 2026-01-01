"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"

const certifications = [
    {
        title: "Professional Cloud Architect",
        issuer: "Google Cloud Platform",
        credentialId: "e9709e75c5fb4491b383e0be91106499",
        period: "Dec 2025 — Dec 2028",
        color: "from-blue-500 to-cyan-500",
        verificationUrl: "https://www.credly.com/badges/02787035-495f-4f9f-b183-6dc2c8f69671/public_url",
    },
    {
        title: "Cloud Digital Leader",
        issuer: "Google Cloud Platform",
        credentialId: "247dd2671d194d66b3466a1702709631",
        period: "Sep 2025 — Sep 2028",
        color: "from-purple-500 to-pink-500",
        verificationUrl: "https://www.credly.com/badges/40b4cc7e-a689-4161-9c1e-f72c6a5cadcc/public_url",
    },
    {
        title: "Generative AI Leader",
        issuer: "Google Cloud Platform",
        credentialId: "c6d67c50865d41dab9a32452654340ee",
        period: "Sep 2025 — Sep 2028",
        color: "from-green-500 to-teal-500",
        verificationUrl: "https://www.credly.com/badges/e31f7f6c-701b-4327-9ea2-80c683e3f95d/public_url",
    },
]

export default function Certifications() {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-black to-blue-950/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto relative z-10"
            >
                <div className="text-blue-500 font-mono mb-4">{'<certifications>'}</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-16">Professional Certifications</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-lg`} />
                            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-500/50 transition-colors">
                                <Award className="w-12 h-12 text-blue-400 mb-4" />
                                <h3 className="text-xl font-bold mb-2 text-white">{cert.title}</h3>
                                <p className="text-blue-300 mb-3">{cert.issuer}</p>
                                <p className="text-sm text-gray-400 mb-2">{cert.period}</p>
                                <Link
                                    href={cert.verificationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 font-mono transition-colors group/link"
                                >
                                    <span>ID: {cert.credentialId}</span>
                                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
