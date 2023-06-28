import './globals.css'
import { Roboto_Flex } from 'next/font/google'

const inter = Roboto_Flex({ subsets: ['latin'] })

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
