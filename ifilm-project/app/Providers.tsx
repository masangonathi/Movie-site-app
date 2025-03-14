'use client';

import { ThemeProvider } from 'next-themes'


export default function Providers({ children }: {children:React.ReactNode}) {
  return (
    <ThemeProvider defaultTheme='system' attribute="class">
        <div className="text-gray-700 dark:text-gray-200 
        min-h-screen select-none transition-color duration-300">
            {children}
        </div>

    </ThemeProvider>
  )
}
