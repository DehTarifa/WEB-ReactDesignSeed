// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// INTERFACE-------------------------------------------------


interface CaptionProps {
  children: ReactNode
  className?: String
  
  style?: 'solid' | 'textded' | 'darkSolid'
}

// PROPERTIES -----------------------------------------------

const styles = {
  solid:   'bg-emphasis-color-4 px-5 py-2 text-emphasis-color-1 rounded-full ',
  textded: 'font-semibold text-primary-blue ',
  darkSolid: 'bg-emphasis-color-2 px-5 py-2 text-white rounded-full ',
}

// COMPONENT ------------------------------------------------

export function Caption ( { children, style = 'solid'} : CaptionProps) {
  return(
    <p className={twMerge('text-[12px] md:text-[14px] ', styles[style])}>
      {children}
    </p>
  )
}