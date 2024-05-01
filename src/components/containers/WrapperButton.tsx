// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

// INTERFACE ------------------------------------------------

interface WrapperProps {
  className?:   string
  children:     ReactNode

  justifyItem?: 'start' | 'center' | 'end'
}

// PROPERTIES -----------------------------------------------

const justifyItems = {
  start:  'justify-start lg:justify-start ',
  center: 'justify-center lg:justify-start ',
  end:    'justify-end lg:justify-start '
}

// COMPONENT ------------------------------------------------

export function WrapperButton ({ children, className, justifyItem = 'center' } : WrapperProps ){
  return(
    <div className={twMerge('w-full max-w-[600px] xl:max-w-[656px] flex flex-col items-center md:flex-row gap-1 border ', justifyItems[justifyItem], className)}>
      {children}
    </div>
  )
}


