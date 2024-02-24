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
}

// PROPERTIES -----------------------------------------------

const widths = {
  full: ' w-full ',
  max:  ' w-full max-w-[1400px] '
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

  let stylization = 'grid grid-cols-12 gap-5 mx-auto bg-primary-gray-200 '
  stylization += widths[width]
  stylization += paddingsX[paddingX]
  stylization += paddingsY[paddingY]

  return(
    <div className={twMerge(stylization, className)}>
      {children}
    </div>
  )
}