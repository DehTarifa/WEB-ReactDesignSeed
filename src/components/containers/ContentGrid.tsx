// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

// INTERFACE ------------------------------------------------

interface ContentProps {
  className?:   string
  children:     ReactNode

  padding?:     'true'  | 'false'
  gridCol?:     'true'  | 'false'
}

// PROPERTIES -----------------------------------------------

const paddings = {
  true:  'p-5 lg:p-8 ',
  false: ''
}

const gridCols = {
  true:  'col-span-12 lg:col-span-6 ',
  false: ' ',
}

// COMPONENT ------------------------------------------------

export function ContentGrid ({children, className, padding = 'true', gridCol = 'true' } : ContentProps ){
  return(
    <div className={twMerge('grid grid-cols-12 gap-5 ', paddings[padding], gridCols[gridCol],className)}>
      {children}
    </div>
  )
}



