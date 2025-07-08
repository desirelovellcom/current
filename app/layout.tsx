import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Current - Decentralized Messaging",
  description:
    "Offline-first peer-to-peer messaging with Bluetooth mesh networking. No servers, no surveillance, just pure connection.",
  keywords: ["messaging", "decentralized", "bluetooth", "privacy", "p2p", "mesh networking"],
  authors: [{ name: "#desirelovell" }],
  openGraph: {
    title: "Current - Decentralized Messaging",
    description: "Offline-first peer-to-peer messaging with Bluetooth mesh networking",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
