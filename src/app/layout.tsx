import { Noto_Sans_KR } from 'next/font/google'
import type { Metadata } from 'next'
import '@/styles/globals.css'

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
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  )
}
