import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import StyledComponentsRegistry from './registry'

const noto_sans_kr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export const metadata: Metadata = {
  title: '세상에서 DM 제일 잘 보내는 방법',
  description: '당신의 모든 DM을 책임집니다. AI를 믿으세요.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={noto_sans_kr.className}><StyledComponentsRegistry>{children}</StyledComponentsRegistry></body>
    </html>
  )
}
