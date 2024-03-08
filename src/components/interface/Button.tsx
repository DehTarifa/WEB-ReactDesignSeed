// IMPORT ---------------------------------------------------

import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// INTERFACE-------------------------------------------------

interface ButtonProps {
  children: ReactNode
  className?: string
  
  style?: 'solid' | 'outline' | 'textded' | 'weak'
}

// PROPERTIES -----------------------------------------------

const styles = {
  solid:   'bg-green-palette-theme-1 text-white text-[14px] border-primary-blue hover:opacity-80 ',
  outline: 'bg-transparent text-green-palette-theme-1 border border-green-palette-theme-1 hover:bg-green-palette-theme-1 hover:text-white ',
  textded: 'bg-transparent border-transparent text-primary-blue hover:opacity-80 ',
  weak:    'bg-dark-theme-2 text-white text-[14px] border-primary-gray-200 hover:opacity-80 '
}

// COMPONENT ------------------------------------------------

export function Button ({children, className, style = 'solid'} :ButtonProps ){
  return(
    <Link href={''} className={twMerge('w-full max-w-[420px] flex items-center justify-center h-14 rounded-sm transition-all duration-500', styles[style], className)}>
      {children}
    </Link>
  )
}
