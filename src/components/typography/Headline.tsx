// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

// INTERFACE-------------------------------------------------

interface HeadlineProps {
  children: ReactNode
  className?: string
  
  color?:   'dark' | 'light'
  heading?:  'h1' | 'h2' 
  size?:    'large' | 'medium'
  alignText?: 'allCenter' | 'lgStart' | 'mdStart'
}

// PROPERTIES -----------------------------------------------

const colors = {
  light:  'text-primary-white-100 ',
  dark:   'text-primary-gray-100 ',
}

const sizes = {
  large:  'text-[28px] leading-[1.2] md:text-[46px] lg:text-[40px] xl:text-[46px] max-w-[600px] md:max-w-[750px] ',
  medium: 'text-[24px] leading-[1.2] md:text-[32px] lg:text-[28px] lg:leading-[1.2] xl:text-[32px] max-w-[600px] md:max-w-[650px] '
}

const alignTexts = {
  allCenter: 'text-center ',
  lgStart: 'text-center | lg:text-start ',
  mdStart: 'text-center | md:text-start '
}

// COMPONENT ------------------------------------------------

export function Headline ( { children, className, color = 'dark', size = 'medium' ,heading = 'h2', alignText = 'allCenter'  } : HeadlineProps) {
  
  let stylization = 'font-semibold w-full bg-neutral-700 '
  stylization += sizes[size]
  stylization += colors[color]
  stylization += alignTexts[alignText]

  if(heading === 'h1'){
    return(
      <h1 className={twMerge(stylization, className)}>{children}</h1>
    )
  }

  if(heading === 'h2'){
    return(
      <h2 className={twMerge(stylization, className)}>{children}</h2>
    )
  }
}


