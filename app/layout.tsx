import type { Metadata } from 'next'

import './globals.css'



export const metadata: Metadata = {
  title: 'Fit Shoes',
  description: 'buy shoes with best price!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
