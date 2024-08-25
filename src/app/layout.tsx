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
    <html lang="en" className={`intermediate-md:h-full flex items-center justify-center ${jetBrainsMono.className}`}>
      <body className="
      selection:bg-primary
      selection:text-secondary-background
      bg-background text-primary 
      flex justify-between
      flex-col intermediate-md:flex-row
      h-full intermediate-md:min-h-[600px] intermediate-md:max-h-[900px] intermediate-md:max-w-[1920px]
      intermediate-md:p-16">
        {children}
        <Footer />
      </body>
    </html>
  )
}
