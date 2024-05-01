// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

// INTERFACE ------------------------------------------------

interface WrapperProps {
  className?:   string
  children:     ReactNode

  alignItem?: 'start' | 'center' | 'end'
}

// PROPERTIES -----------------------------------------------

const alignItems = {
  start:  'items-start lg:items-start ',
  center: 'items-center lg:items-start ',
  end:    'items-end lg:items-start '
}

// COMPONENT ------------------------------------------------

export function WrapperCommunicatory ({ children, className, alignItem = 'center' } : WrapperProps ){
  return(
    <div className={twMerge('w-full max-w-[600px] xl:max-w-[656px] flex flex-col gap-2 ', alignItems[alignItem], className)}>
      {children}
    </div>
  )
}