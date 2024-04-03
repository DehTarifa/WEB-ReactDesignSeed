// PROPERTIES | BACKGROUND COLORS CONTAINERS ----------------

const BackgroundColorThemes = {
  darkTheme1: 'bg-dark-theme-1 ',
  darkTheme2: 'bg-dark-theme-2 ',
  darkTheme3: 'bg-dark-theme-3 ',
  darkTheme4: 'bg-dark-theme-4 ',

  lightTheme1: 'bg-light-theme-1 ',
  lightTheme2: 'bg-light-theme-2 ',
  lightTheme3: 'bg-light-theme-3 ',
  lightTheme4: 'bg-light-theme-4 ',

  featuredTheme1: 'bg-emphasis-color-1 ',
  featuredTheme2: 'bg-emphasis-color-4 ',
  featuredTheme3: 'bg-emphasis-color-5 ',
  featuredTheme4: 'bg-emphasis-color-8 ',

  transparent: 'bg-transparent'
}

export type VarBackgroundColorThemes =

  | 'darkTheme1'
  | 'darkTheme2'
  | 'darkTheme3'
  | 'darkTheme4'

  | 'lightTheme1'
  | 'lightTheme2'
  | 'lightTheme3'
  | 'lightTheme4'

  | 'featuredTheme1'
  | 'featuredTheme2'
  | 'featuredTheme3'
  | 'featuredTheme4'

  | 'transparent'

// PROPERTIES | MAIN COLORS TEXT ----------------------------

const MainTextColors = {
  mainTextColors1: 'text-emphasis-color-1 ',
  mainTextColors2: 'text-emphasis-color-3 ',
  mainTextColors3: 'text-emphasis-color-5 ',
  mainTextColors4: 'text-emphasis-color-6 ',
  mainTextColors5: 'text-[#9c9c9c] ',
  mainTextColors6: ' ',
}

export type VarMainTextColors = 
  | 'mainTextColors1' 
  | 'mainTextColors2' 
  | 'mainTextColors3' 
  | 'mainTextColors4' 
  | 'mainTextColors5'
  | 'mainTextColors6'

// COMPONENT EXPORT -----------------------------------------

export { BackgroundColorThemes, MainTextColors }
