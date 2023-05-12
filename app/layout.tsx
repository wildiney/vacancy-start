import { useEffect, useState } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Férias',
  description: 'Contagem regressiva para as férias!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [background, setBackground] = useState("background-01.jpg")

  useEffect(() => {
    const random = Math.floor(Math.random() * (2 - 1 + 1) + 1)
    setBackground(`url('/images/background-0${random}.jpg')`)
  }, [])

  return (
    <html lang="en">
      <body className={[inter.className].join(' ')} style={{ "--bgImage": background } as React.CSSProperties}>
        {children}
      </body>
    </html >
  )
}
