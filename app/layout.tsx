import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MLGG - Premium Real Estate Lead Generation | MaVoid Lead Generation Group",
  description:
    "MLGG provides high-quality real estate investment leads for serious investors. Internationally verified across Oman, KSA, Egypt, and UAE with deep US market expertise.",
  keywords:
    "real estate leads, investment properties, distressed properties, absentee owners, off-market deals, real estate investors",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
