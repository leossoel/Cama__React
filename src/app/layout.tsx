import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CAMASEDA',
  description: 'TIENDA DE CAMAS',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>
        <nav className='bg-black'>
          <a href="/cama/add">Agregar Cama</a><br></br>
          <a href="/camas">lista de camas</a>
        </nav>
        {children}
        </body>
    </html>
  )
}
