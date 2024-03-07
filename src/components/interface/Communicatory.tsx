// IMPORT ---------------------------------------------------

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// INTERFACE-------------------------------------------------

interface CommunicatoryProps {
  children: ReactNode
  className?: string
  headline: String
  subHeadline: String
  
  styleType?: 'simple' | 'complete' | 'highlightIcon'
  colorHeadline?: 'white' | 'black'
  colorParagraph?: 'white' | 'black'
}

// PROPERTIES -----------------------------------------------

const colorsHeadline = {
  white: 'text-white font-semibold ',
  black: 'text-primary-gray-100 font-semibold '
}

const colorsParagraph = {
  white: 'text-white opacity-60 ',
  black: 'text-primary-gray-100 opacity-60 '
}

// COMPONENT ------------------------------------------------

export function Communicatory ({children, className, styleType = 'simple', headline, subHeadline, colorHeadline = 'black', colorParagraph = 'black'} :CommunicatoryProps ){
  
  if(styleType === 'simple'){
    return(
      <div className={"flex items-center gap-5 w-full max-w-[450px] " + className}>
  
        <div>
          {children}
        </div>
  
        <div className="flex flex-col gap-2">
          <h3 className={colorsHeadline[colorHeadline]}>{headline}</h3>
        </div>
  
      </div>
    )
  }

  if(styleType === 'complete'){
    return(
      <div className={"flex gap-3 w-full max-w-[450px] " + className}>
  
        <div>
          {children}
        </div>
  
        <div className="flex flex-col gap-2">
          <p className={colorsHeadline[colorHeadline]}>{headline}</p>
          <p className={'text-[14px] ' + colorsParagraph[colorParagraph]}>{subHeadline}</p>
        </div>
  
      </div>
    )
  }

  if(styleType === 'highlightIcon'){
    return(
      <div className={"flex items-start gap-5 w-full max-w-[450px] " + className}>
  
        <div className="p-4 bg-[#3f8cff29] rounded-md">
          {children}
        </div>
  
        <div className="flex flex-col gap-2">
          <p className={colorsHeadline[colorHeadline]}>{headline}</p>
          <p className={'text-[14px] ' + colorsParagraph[colorParagraph]}>{subHeadline}</p>
        </div>
  
      </div>
    )
  }
  
}
