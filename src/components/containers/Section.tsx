// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

// INTERFACE ------------------------------------------------

interface SectionProps {
  children:     ReactNode
  className?:   string

  height?:      'vh' | 'fit'
  paddingY?:    'true' | 'false'
}

// PROPERTIES -----------------------------------------------

const heights = {
  vh:   'min-h-[700px] ',
  fit:  ' ',
}

const paddingsY = {
  true:  'py-20 ',
  false: ' '
}

// COMPONENT ------------------------------------------------

export function Section ({children, className, height = 'vh', paddingY = 'true'} : SectionProps){
  return(
    <section className={twMerge('flex ', heights[height], paddingsY[paddingY] ,className)}>
      {children}
    </section>
  )
}