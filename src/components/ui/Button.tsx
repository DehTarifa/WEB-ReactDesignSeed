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
  solid:   'bg-blue-500 text-white text-[14px] border-primary-blue ',
  outline: 'bg-transparent text-primary-blue border-primary-blue ',
  textded: 'bg-transparent border-transparent text-primary-blue ',
  weak:    'bg-gray-secondary text-white text-[14px] border-primary-gray-200 '
}

// COMPONENT ------------------------------------------------

export function Button ({children, className, style = 'solid'} :ButtonProps ){

  return(
    <Link href={''} className={twMerge('w-full max-w-[420px] flex items-center justify-center h-14 rounded-sm ', styles[style], className)}>
      {children}
    </Link>
  )
}
