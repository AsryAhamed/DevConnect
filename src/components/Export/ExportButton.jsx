import { usePortfolio } from '../../context/PortfolioContext'
import { generateHTML } from '../../utils/exportHTML'

const ExportButton = () => {
  const { portfolioData, theme, colorScheme } = usePortfolio()

  const handleExport = () => {
    const html = generateHTML(portfolioData, theme, colorScheme)
    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${portfolioData.personalInfo.name.replace(/\s+/g, '-').toLowerCase()}-portfolio.html`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <button onClick={handleExport} className="btn-export">
      Export Portfolio
    </button>
  )
}

export default ExportButton