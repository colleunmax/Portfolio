import type { Metadata } from "next"
import { jetBrainsMono } from "@/fonts/jetBrainsMono"
import "./globals.css"
import Footer from "@/widgets/footer"

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
    <html lang="en" className={`intermediate-md:h-full ${jetBrainsMono.className}`}>
      <body className=" bg-background text-primary flex flex-col h-full justify-between intermediate-md:flex-row">
        {children}
        <Footer />
      </body>
    </html>
  )
}
