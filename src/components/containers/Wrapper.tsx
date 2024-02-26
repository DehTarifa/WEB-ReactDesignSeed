// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

// INTERFACE-------------------------------------------------

interface WrapperProps {
  children: ReactNode
  className?: string
}

// PROPERTIES -----------------------------------------------


// COMPONENT ------------------------------------------------

export function WrapperButton ({ children, className } : WrapperProps ){
  return(
    <div className={twMerge('w-full max-w-[650px] flex flex-col items-center md:flex-row gap-1 lg:mt-10   ', className)}>
      {children}
    </div>
  )
}

export function WrapperCommunicatory ({ children, className } : WrapperProps ){
  return(
    <div className={twMerge('w-full max-w-[650px] flex flex-col items-center lg:items-start gap-5 py-10', className)}>
      {children}
    </div>
  )
}

