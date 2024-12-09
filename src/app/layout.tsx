import Providers from '@/components/Providers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Matri Care – Garbh Sanskar',
  description: 'Holistic wellness for pregnant women through yoga, nutrition, and Garbh Sanskar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        {children}
        </Providers>
      </body>
    </html>
  )
}
