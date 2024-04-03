// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// INTERFACE-------------------------------------------------


interface CaptionProps {
  children: ReactNode
  className?: string
  
  style?: 'emphasis' | 'ligth' | 'dark' | 'texted' | 'ghost'
}

// PROPERTIES -----------------------------------------------

const styles = {
  emphasis: 'px-8 py-3 bg-emphasis-color-1 text-emphasis-color-4',
  ligth:    'px-8 py-3 bg-emphasis-color-4 text-emphasis-color-1',
  dark:     'px-8 py-3 bg-dark-theme-2 text-emphasis-color-6',
  texted:   'text-emphasis-color-1 font-semibold',
  ghost:    'text-emphasis-color-3 font-semibold',
}

// COMPONENT ------------------------------------------------

export function Caption ( { children, style = 'dark'} : CaptionProps) {
  return(
    <p className={twMerge('text-[12px] md:text-[14px] rounded-full', styles[style])}>
      {children}
    </p>
  )
}