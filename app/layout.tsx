import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Personal Portfolio',
  description: 'A personal portfolio for Devansh Parapalli, created in Next.js',
  other: {"darkreader-lock": "true"}
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
