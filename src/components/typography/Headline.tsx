// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge"
import { MainTextColors, VarMainTextColors } from "@/constants/colorPalette";

// INTERFACE-------------------------------------------------

interface HeadlineProps {
  children:   ReactNode
  className?: string
  color?:     VarMainTextColors
  
  heading?:   'h1' | 'h2' 
  size?:      'large' | 'medium'
  alignText?: 'allCenter' | 'lgStart' | 'mdStart'
}

// PROPERTIES -----------------------------------------------

const sizes = {
  large:  'text-[28px] leading-[1.2] md:text-[46px] lg:text-[40px] xl:text-[46px] max-w-[600px] md:max-w-[752px] ',
  medium: 'text-[24px] leading-[1.2] md:text-[32px] lg:text-[28px] lg:leading-[1.2] xl:text-[32px] max-w-[600px] md:max-w-[656px] '
}

const alignTexts = {
  allCenter: 'text-center ',
  lgStart: 'text-center | lg:text-start ',
  mdStart: 'text-center | md:text-start '
}

// COMPONENT ------------------------------------------------

export function Headline ( { children, className, color = 'mainTextColors1', size = 'medium' ,heading = 'h2', alignText = 'allCenter'  } : HeadlineProps) {
  
  let stylization = 'font-semibold w-full '
  stylization += sizes[size]
  stylization += MainTextColors[color]
  stylization += alignTexts[alignText]

  if(heading === 'h1'){
    return(
      <h1 className={twMerge(stylization + className)}>{children}</h1>
    )
  }

  if(heading === 'h2'){
    return(
      <h2 className={twMerge(stylization + className)}>{children}</h2>
    )
  }
}