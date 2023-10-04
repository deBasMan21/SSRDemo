import Header from '@/componentes/Header'

export default function ExampleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}
