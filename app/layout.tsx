import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// necesarry for the tab
export const metadata = {
  title: 'Adrian | Personal Portofolio',
  description: 'Adrian is a full-stack developer with 3 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-950 relative 
      h-[5000px] pt-28 sm:pt-36`}>
        <div className='bg-[#e2fbf3] absolute top-[-6rem] -z-10 right-[11rem] h-[31rem]
        w-[50rem] rounded-full blur-[10rem] sm:w-[69rem]'></div>
        <div className='bg-[#d7e1fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31rem]
        w-[50rem] rounded-full blur-[10rem] sm:w-[69rem] md:left-[-33rem] lg:left-[-28rem] 
        xl:left-[-15rem] 2xl:left-[-5rem]'></div>

        <Header />
        {children}
      </body>
    </html>
  )
}
