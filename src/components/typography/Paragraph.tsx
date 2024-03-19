// IMPORT ---------------------------------------------------

import { MainTextColors, VarMainTextColors } from "@/constants/colorPalette";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// INTERFACE-------------------------------------------------

interface ParagraphProps {
  children:   ReactNode
  color?:     VarMainTextColors
  className?: string
  
  size?:      'subheadline' | 'paragraph'
  alignText?: 'allCenter' | 'lgStart' | 'mdStart'
}

// PROPERTIES -----------------------------------------------

const sizes = {
  subheadline:  'text-[14px] md:text-[16px] leading-[1.6] ',
  paragraph:    'text-[12px] | md:text-[14px] ',
}

const alignTexts = {
  allCenter: 'text-center ',
  lgStart: 'text-center | lg:text-start',
  mdStart: 'text-center | md:text-start'
}

// COMPONENT ------------------------------------------------

export function Paragraph ( { children, className, color = 'mainTextColors5', size = 'subheadline', alignText = 'allCenter'} : ParagraphProps) {
  return(
    <p className={twMerge('w-full max-w-[600px] md:max-w-[656px] ', sizes[size], MainTextColors[color], alignTexts[alignText], className)}>{children}</p>
  )
}