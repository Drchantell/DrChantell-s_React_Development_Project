import { useTheme } from '../context/useTheme'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  return <header className="site-header"><div className="header-title"><h1>Dr. Chantell's Country Explorer</h1></div><button className="theme-button" onClick={toggleTheme} type="button">{theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}</button></header>
}
