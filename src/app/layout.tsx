import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { ReactNode } from 'react'

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'DreamingGate',
  description: 'A place to dream and create.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  )
}
