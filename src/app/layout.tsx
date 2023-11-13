import type { Metadata } from 'next'
import './globals.css'
import Header from "../components/Header"

export const metadata: Metadata = {
  manifest: "/manifest.json", // we are accessing our manifest file here
  title: "PWA Next App",
  // ... other options    
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
      <Header />
        {children}
      </body>
    </html>
  )
}
