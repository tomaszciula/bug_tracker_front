import './globals.css'
import { Inter, Caveat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const caveat = Caveat({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
