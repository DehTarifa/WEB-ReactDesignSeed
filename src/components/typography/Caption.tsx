// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// INTERFACE-------------------------------------------------

interface CaptionProps {
  children: ReactNode
  className?: String
  
  style?: 'solid' | 'textded'
}

// PROPERTIES -----------------------------------------------

const styles = {
  solid:   'bg-primary-blue px-5 py-2 text-white rounded-full ',
  textded: 'font-semibold text-primary-blue '
}

// COMPONENT ------------------------------------------------

export function Caption ( { children, style = 'solid'} : CaptionProps) {
  return(
    <p className={twMerge('text-[12px] md:text-[14px] ', styles[style])}>
      {children}
    </p>
  )
}