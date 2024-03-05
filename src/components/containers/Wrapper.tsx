// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

// INTERFACE-------------------------------------------------

interface WrapperProps {
  children: ReactNode
  className?: string

  alignItem?: 'allCenter' | 'lgStart'
}

// PROPERTIES -----------------------------------------------

const alignItems = {
  allCenter: 'justify-center items-center ',
  lgStart:   'justify-center lg:justify-start lg:items-start '
}

// COMPONENT ------------------------------------------------

export function WrapperButton ({ children, className, alignItem = 'allCenter' } : WrapperProps ){
  return(
    <div className={twMerge('w-full max-w-[656px] flex flex-col items-center md:flex-row gap-1 ', alignItems[alignItem] , className)}>
      {children}
    </div>
  )
}

export function WrapperCommunicatory ({ children, className, alignItem = 'allCenter' } : WrapperProps ){
  return(
    <div className={twMerge('w-full max-w-[656px] flex flex-col gap-5 py-10 bg-neutral-700 ', alignItems[alignItem], className)}>
      {children}
    </div>
  )
}

