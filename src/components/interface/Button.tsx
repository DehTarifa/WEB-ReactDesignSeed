// IMPORT ---------------------------------------------------

import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// INTERFACE-------------------------------------------------

interface ButtonProps {
  children: ReactNode
  className?: string
  redirect: string
  
  style?: 'emphasis' | 'ligth' | 'dark' | 'outline' | 'texted' | 'weak' | 'ghost'
}

// PROPERTIES -----------------------------------------------

const styles = {
  emphasis: 'bg-emphasis-color-1 hover:bg-emphasis-color-2 text-white',
  ligth:    'bg-emphasis-color-4 text-emphasis-color-1',
  dark:     'bg-dark-theme-2 hover:bg-dark-theme-4 text-white',
  outline:  'bg-transparent hover:bg-emphasis-color-1 border border-emphasis-color-1 text-emphasis-color-1 hover:text-white',
  texted:   'text-emphasis-color-5',
  weak:     'text-emphasis-color-3 bg-light-theme-3',
  ghost:    'text-emphasis-color-4 hover:bg-dark-theme-2',
}


// COMPONENT ------------------------------------------------

export function Button ({children, className, redirect, style = 'emphasis'} :ButtonProps ){
  return(
    <Link href={redirect} className={twMerge('w-full max-w-[420px] flex items-center justify-center h-14 text-[14px] rounded-sm transition-all duration-500', styles[style], className)}>
      {children}
    </Link>
  )
}
