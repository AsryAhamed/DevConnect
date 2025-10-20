import { usePortfolio } from '../../context/PortfolioContext'

const SocialLinks = () => {
  const { portfolioData, updateSocialLinks } = usePortfolio()
  const { socialLinks } = portfolioData

  const handleChange = (platform, value) => {
    updateSocialLinks({ [platform]: value })
  }

  return (
    <div className="editor-section">
      <h2 className="section-title">Social Links</h2>

      <div className="form-grid">
        <div className="form-group full-width">
          <label>
            <span className="social-icon">🐙</span>
            GitHub
          </label>
          <input
            type="url"
            value={socialLinks.github}
            onChange={(e) => handleChange('github', e.target.value)}
            placeholder="https://github.com/username"
          />
        </div>

        <div className="form-group full-width">
          <label>
            <span className="social-icon">💼</span>
            LinkedIn
          </label>
          <input
            type="url"
            value={socialLinks.linkedin}
            onChange={(e) => handleChange('linkedin', e.target.value)}
            placeholder="https://linkedin.com/in/username"
          />
        </div>

        <div className="form-group full-width">
          <label>
            <span className="social-icon">🐦</span>
            Twitter
          </label>
          <input
            type="url"
            value={socialLinks.twitter}
            onChange={(e) => handleChange('twitter', e.target.value)}
            placeholder="https://twitter.com/username"
          />
        </div>

        <div className="form-group full-width">
          <label>
            <span className="social-icon">🌐</span>
            Personal Website
          </label>
          <input
            type="url"
            value={socialLinks.website}
            onChange={(e) => handleChange('website', e.target.value)}
            placeholder="https://yourwebsite.com"
          />
        </div>
      </div>
    </div>
  )
}

export default SocialLinks