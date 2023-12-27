import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Ghani',
  description: `Crafting Code for a Digital Future: A Programmer's Story.``,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
