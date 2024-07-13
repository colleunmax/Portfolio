import type { Metadata } from "next"
import "./globals.css"
import { JetBrains_Mono } from "next/font/google"
import Footer from "@/widgets/footer"

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["700", "300", "100"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: {
    default: "Colle Joulian",
    template: "Colle Joulian | %s"
  },
  description: "Colle Joulian. Hey, I am a computer science student who really enjoys coding, loves learning new things every day, and would like to create programs to help others."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`h-full ${jetBrainsMono.className}`}>
      <body className=" bg-background text-primary flex flex-col h-full justify-between">
        {children}
        <Footer />
      </body>
    </html>
  )
}
