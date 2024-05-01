// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

// INTERFACE ------------------------------------------------

interface ContainerProps {
  children:     ReactNode
  className?:   string

  width?:       'max' | 'full'
}

// PROPERTIES -----------------------------------------------

const widths = {
  max:  'max-w-[1520px] xl:max-w-[1600px] ',
  full: ' ',
}

// COMPONENT ------------------------------------------------

export function Container ({children, className, width = 'max'} : ContainerProps ){
  return(
    <div className={twMerge('w-full mx-auto grid grid-cols-12 gap-5', widths[width], className)}>
      {children}
    </div>
  )
}



