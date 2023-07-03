import './globals.css'
import { Be_Vietnam_Pro } from 'next/font/google'

const inter = Be_Vietnam_Pro({
  subsets: ['vietnamese'],
  weight: ['300', '400'],
})

export const metadata = {
  title: 'Hung Nguyen',
  description: 'Blog by Hung Nguyen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
