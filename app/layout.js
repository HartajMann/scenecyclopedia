import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Providers from '../app/Providers';
import Navbar from '@/components/Navbar';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SceneCyclopedia',
  description: 'Movie Database project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>

          <Header />
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
