import type { Metadata } from "next"
import "./globals.css"


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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
