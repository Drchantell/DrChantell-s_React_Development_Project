import { useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from './ThemeContextValue'

type ThemeProviderProps = { children: ReactNode }

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light')
  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
