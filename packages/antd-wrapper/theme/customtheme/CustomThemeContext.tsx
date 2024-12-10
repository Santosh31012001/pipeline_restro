// CustomThemeContext.tsx
import React, { createContext, useContext, ReactNode } from 'react'
import { defaultTheme, Theme } from '..'

// Define the type for the ThemeContext
interface ThemeContextProps {
  token: typeof defaultTheme.token
}

// Create a context with default values
const ThemeContext = createContext<ThemeContextProps>({
  token: defaultTheme.token,
})

// Export the useContext hook for ease of use
export const useCustomTheme = () => useContext(ThemeContext)

// Define props type for CustomThemeProvider
interface CustomThemeProviderProps {
  children: ReactNode
  theme: Theme // Accept the complete `Theme` type
}

// Create a provider component that accepts the `theme` prop
export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
  theme,
}) => (
  <ThemeContext.Provider value={{ token: theme.token }}>
    {children}
  </ThemeContext.Provider>
)
