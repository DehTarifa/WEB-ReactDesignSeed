// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

// INTERFACE-------------------------------------------------

interface ContentProps {
  children: ReactNode
  className?: string

  padding?: 'true' | 'false'
  alignItemX?: 'allCenter' | 'lgStart'
  alignItemY?: 'top' | 'center' | 'bottom'
  gridCol?: 'default' | 'none'
}

interface ContentGridProps {
  children: ReactNode
  className?: string
  gridCol?: 'default' | 'none'
  padding?: 'true' | 'false'
}

// PROPERTIES -----------------------------------------------

const gridCols = {
  default: 'col-span-12 lg:col-span-6 ',
  none: ' '
}

const alignItemsX = {
  allCenter: 'justify-center ',
  lgStart:   'justify-center lg:items-start '
}

const alignItemsY = {
  top:    'items-start ',
  center: 'items-center ',
  bottom: 'items-end '
}

const paddings = {
  true:  'p-5 xl:p-10 ',
  false: 'p-0 '
}

// COMPONENT ------------------------------------------------

export function ContentImage({children, className, padding = 'false', alignItemY = 'center', gridCol = 'default'} : ContentProps ){
  return(
    <div className={twMerge('flex bg-primary-gray-300 justify-center ', alignItemsY[alignItemY], paddings[padding], gridCols[gridCol], className)}>
      {children}
    </div>
  )
}

export function ContentText({children, className, padding = 'false', alignItemX = 'allCenter', alignItemY = 'center', gridCol = 'default'} : ContentProps ){
  return(
    <div className={twMerge('flex flex-col gap-4 bg-primary-gray-300 rounded-lg ', alignItemsX[alignItemX], alignItemsY[alignItemY], paddings[padding], gridCols[gridCol], className)}>
      {children}
    </div>
  )
}

export function ContentGrid({children, className, padding = 'false', gridCol = 'default'} : ContentGridProps ){
  return(
    <div className={twMerge('gap-5 grid grid-cols-12 bg-primary-gray-300 rounded-lg ', gridCols[gridCol], paddings[padding], className)}>
      {children}
    </div>
  )
}