import { usePortfolio } from '../../context/PortfolioContext'
import ExportButton from '../Export/ExportButton'

const Header = () => {
  const { theme, setTheme, colorScheme, setColorScheme } = usePortfolio()

  const themes = ['modern', 'minimal', 'creative']
  
  const presetColors = [
    { name: 'Indigo', primary: '#6366f1', secondary: '#8b5cf6', accent: '#ec4899' },
    { name: 'Green', primary: '#10b981', secondary: '#059669', accent: '#3b82f6' },
    { name: 'Orange', primary: '#f59e0b', secondary: '#ef4444', accent: '#8b5cf6' },
    { name: 'Blue', primary: '#3b82f6', secondary: '#2563eb', accent: '#06b6d4' },
    { name: 'Purple', primary: '#8b5cf6', secondary: '#7c3aed', accent: '#ec4899' }
  ]

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="logo">
            <span className="logo-icon">⚡</span>
            DevConnect
          </h1>
          <p className="tagline">Build Your Perfect Portfolio</p>
        </div>

        <div className="header-controls">
          <div className="control-group">
            <label>Theme</label>
            <div className="theme-selector">
              {themes.map(t => (
                <button
                  key={t}
                  className={`theme-btn ${theme === t ? 'active' : ''}`}
                  onClick={() => setTheme(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="control-group">
            <label>Color Scheme</label>
            <div className="color-presets">
              {presetColors.map(preset => (
                <button
                  key={preset.name}
                  className="color-preset"
                  style={{ background: `linear-gradient(135deg, ${preset.primary}, ${preset.secondary})` }}
                  onClick={() => setColorScheme({
                    ...colorScheme,
                    primary: preset.primary,
                    secondary: preset.secondary,
                    accent: preset.accent
                  })}
                  title={preset.name}
                />
              ))}
            </div>
          </div>

          <ExportButton />
        </div>
      </div>
    </header>
  )
}

export default Header