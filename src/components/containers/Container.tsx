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
  max:  ' w-full max-w-[1456px] '
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
  dark:   'bg-gray-primary ',
  blue:   'bg-primary-blue ',
}

// COMPONENT ------------------------------------------------

export function Container( {children, className, width = 'max', paddingX = 'false', paddingY = 'false', background = 'dark' } : ContainerProps ){

  return(
    <div className={twMerge('grid grid-cols-12 gap-5 mx-auto ', widths[width], paddingsX[paddingX], paddingsY[paddingY], backgrounds[background], className)}>
      {children}
    </div>
  )
}