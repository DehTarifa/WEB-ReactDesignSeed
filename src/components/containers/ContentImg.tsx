// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

// INTERFACE ------------------------------------------------

interface ContentProps {
  className?:   string
  children:     ReactNode

  padding?:     'true'  | 'false'
  alignItem?:   'start' | 'center' | 'end'
  justifyItem?: 'start' | 'center' | 'end'
  gridCol?:     'true'  | 'false'
}

// PROPERTIES -----------------------------------------------

const paddings = {
  true:  'p-5 lg:p-8 ',
  false: ''
}

const alignItems = {
  start:  'items-start ',
  center: 'items-center ',
  end:    'items-end '
}

const justifyItems = {
  start:  'justify-start ',
  center: 'justify-center ',
  end:    'justify-end '
}

const gridCols = {
  true:  'col-span-12 lg:col-span-6 ',
  false: ' ',
}

// COMPONENT ------------------------------------------------

export function ContentImage ({children, className, alignItem = 'center', justifyItem = 'center', padding = 'true', gridCol = 'true' } : ContentProps ){
  return(
    <div className={twMerge('flex ', paddings[padding], alignItems[alignItem], justifyItems[justifyItem], gridCols[gridCol],className)}>
      {children}
    </div>
  )
}



