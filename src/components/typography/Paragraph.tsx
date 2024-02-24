// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// INTERFACE-------------------------------------------------

interface ParagraphProps {
  children: ReactNode
  
  color?:   'dark' | 'light'
  size?:    'subheadline' | 'paragraph'
  alignText?: 'allCenter' | 'lgStart' | 'mdStart'
}

// PROPERTIES -----------------------------------------------

const colors = {
  light:  'text-primary-white-100 opacity-60  font-light ',
  dark:   'text-primary-gray-100  ',
}

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

export function Paragraph ( { children, color = 'dark', size = 'subheadline', alignText = 'allCenter'} : ParagraphProps) {
  
  return(
    <p className={twMerge('w-full max-w-[600px] md:max-w-[650px] ', sizes[size], colors[color], alignTexts[alignText])}>{children}</p>
  )
  
}