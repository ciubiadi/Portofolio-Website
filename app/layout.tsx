import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/theme-context";

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
      <body
        className={`${inter.className} transition-all bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="colored-balls bg-[#e2fbfb] absolute top-[-6rem] blur-[10rem] -z-10 right-[11rem] 
        h-[31.25rem] w-[31.25rem] rounded-full sm:w-[68.75rem]
         dark:bg-[#629394]"></div>
        <div className="colored-balls bg-[#d7e5fb] absolute top-[-1rem] blur-[10rem] -z-10 left-[-35rem]
         h-[31.25rem] w-[50rem] rounded-full  sm:w-[68.75rem]
          md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
           dark:bg-[#4074a7]"></div>


        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-center" toastOptions={{ duration: 4000 }}/>
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
