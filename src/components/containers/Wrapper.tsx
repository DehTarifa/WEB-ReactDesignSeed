// IMPORT ---------------------------------------------------

import { BackgroundColorThemes, VarBackgroundColorThemes } from "@/constants/colorPalette";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge"

// INTERFACE-------------------------------------------------

interface WrapperProps {
  className?:   string
  children:     ReactNode
  background?:  VarBackgroundColorThemes

  alignItem?: 'allCenter' | 'lgStart'
}

// PROPERTIES -----------------------------------------------

const alignItems = {
  allCenter: 'justify-center items-center ',
  lgStart:   'justify-center lg:justify-start lg:items-start '
}

// COMPONENT ------------------------------------------------

export function WrapperButton ({ children, className, alignItem = 'allCenter', background = 'transparent' } : WrapperProps ){
  return(
    <div className={twMerge('w-full max-w-[656px] flex flex-col items-center md:flex-row gap-1 ', alignItems[alignItem], BackgroundColorThemes[background], className)}>
      {children}
    </div>
  )
}

export function WrapperCommunicatory ({ children, className, alignItem = 'allCenter', background = 'transparent' } : WrapperProps ){
  return(
    <div className={twMerge('w-full max-w-[656px] flex flex-col gap-5 ', alignItems[alignItem], BackgroundColorThemes[background], className)}>
      {children}
    </div>
  )
}

