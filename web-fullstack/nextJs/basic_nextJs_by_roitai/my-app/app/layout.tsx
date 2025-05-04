import Navbar from "@/components/Navbar"
import Link from "next/link"
import './globals.css'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Camping App",
  description: "NextJS Basic Roitai",
  keywords: ["camping", "camping app", "camping app nextjs", "camping app nextjs tailwindcss"],
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>

      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
export default layout