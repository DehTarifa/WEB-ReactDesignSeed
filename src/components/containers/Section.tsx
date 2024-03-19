// IMPORT ---------------------------------------------------

import { BackgroundColorThemes, VarBackgroundColorThemes } from "@/constants/colorPalette";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

// INTERFACE ------------------------------------------------

interface SectionProps {
  className?:   string
  children:     ReactNode
  background?:  VarBackgroundColorThemes

  height?:      'fit'   | 'full'
  paddingY?:    'true'  | 'false'
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

// COMPONENT ------------------------------------------------

export function Section ({children, className, height = 'fit', paddingY = 'false', background = 'lightTheme3' } : SectionProps ){
  return(
    <section className={twMerge('w-full flex ',heights[height], paddingsY[paddingY], BackgroundColorThemes[background], className)}>
      {children}
    </section>
  )
}