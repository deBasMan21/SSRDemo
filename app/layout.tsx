import Header from '@/componentes/Header'
import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SSR demo',
  description: 'Made by Bas and Mattijn',
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
      <html>
        <body>
          {children}
        </body>
      </html>
    )
}