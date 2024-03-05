// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

// INTERFACE-------------------------------------------------

interface SectionProps {
  children: ReactNode
  className?: string

  height?: 'fit' | 'full'
  paddingY?: 'true' | 'false'
  background?: 'white' | 'dark' | 'blue'
}

// PROPERTIES -----------------------------------------------

const heights = {
  fit:  'h-fit ',
  full: 'min-h-screen lg:min-h-[700px] '
}

const paddingsY = {
  true:  'py-10 ',
  false: 'py-0 '
}

const backgrounds = {
  white:  'bg-primary-white-100 ',
  dark:   'bg-gray-primary ',
  blue:   'bg-primary-blue ',
}

// COMPONENT ------------------------------------------------

export function Section ({children, className, height = 'fit', paddingY = 'false', background = 'white' } : SectionProps ){
  return(
    <section className={twMerge('w-full flex ',heights[height], paddingsY[paddingY], backgrounds[background], className)}>
      {children}
    </section>
  )
}