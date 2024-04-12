// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

// INTERFACE ------------------------------------------------

interface ContainerProps {
  className?:   string
  children:     ReactNode

  width?:       'full'  | 'max'
  paddingX?:    'true'  | 'false'
  paddingY?:    'true'  | 'false'
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

// COMPONENT ------------------------------------------------

export function Container( {children, className, width = 'max', paddingX = 'false', paddingY = 'false' } : ContainerProps ){

  return(
    <div className={twMerge('grid grid-cols-12 gap-5 mx-auto ', widths[width], paddingsX[paddingX], paddingsY[paddingY], className)}>
      {children}
    </div>
  )
}