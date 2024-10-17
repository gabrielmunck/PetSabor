import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pet Sabor',
  description: 'O melhor sabor para seu cãozinho!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}