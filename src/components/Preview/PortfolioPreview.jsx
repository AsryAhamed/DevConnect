import { usePortfolio } from '../../context/PortfolioContext'
import ModernTheme from './themes/ModernTheme'
import MinimalTheme from './themes/MinimalTheme'
import CreativeTheme from './themes/CreativeTheme'

const PortfolioPreview = () => {
  const { theme, colorScheme, portfolioData } = usePortfolio()

  const renderTheme = () => {
    switch (theme) {
      case 'modern':
        return <ModernTheme data={portfolioData} colors={colorScheme} />
      case 'minimal':
        return <MinimalTheme data={portfolioData} colors={colorScheme} />
      case 'creative':
        return <CreativeTheme data={portfolioData} colors={colorScheme} />
      default:
        return <ModernTheme data={portfolioData} colors={colorScheme} />
    }
  }

  return (
    <div className="preview-container">
      <div className="preview-header">
        <h3>Live Preview</h3>
        <span className="preview-badge">{theme} theme</span>
      </div>
      <div className="preview-content">
        {renderTheme()}
      </div>
    </div>
  )
}

export default PortfolioPreview