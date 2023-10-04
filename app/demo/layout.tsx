"use client"

import Header from "@/componentes/Header"

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
