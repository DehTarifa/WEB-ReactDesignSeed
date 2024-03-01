// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

// INTERFACE-------------------------------------------------

interface ContainerProps {
  children: ReactNode
  className?: string

  width?: 'full' | 'max'
  paddingX?: 'true' | 'false'
  paddingY?: 'true' | 'false'
  background?: 'white' | 'dark' | 'blue'
}

// PROPERTIES -----------------------------------------------

const widths = {
  full: ' w-full ',
  max:  ' w-full max-w-[1450px] '
}

const paddingsX = {
  true:  'px-5 ',
  false: 'px-0 ',
}

const paddingsY = {
  true:  'py-5 ',
  false: 'py-0 ',
}

const backgrounds = {
  white:  'bg-primary-white-100 ',
  dark:   'bg-primary-gray-200 ',
  blue:   'bg-primary-blue ',
}

// COMPONENT ------------------------------------------------

export function Container( {children, className, width = 'max', paddingX = 'false', paddingY = 'false', background = 'dark' } : ContainerProps ){

  let stylization = 'grid grid-cols-12 gap-5 mx-auto '
  
  stylization += widths[width]
  stylization += paddingsX[paddingX]
  stylization += paddingsY[paddingY]
  stylization += backgrounds[background]

  return(
    <div className={twMerge(stylization, className)}>
      {children}
    </div>
  )
}