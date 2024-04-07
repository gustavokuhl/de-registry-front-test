import Navbar from "@/components/navbar"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Providers from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "De-Registry",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ minHeight: "100vh" }}>
      <Providers>
        <body className={`${inter.className} w-100 min-h-screen flex flex-col`}>
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  )
}
