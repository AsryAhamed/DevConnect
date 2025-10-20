import { usePortfolio } from '../../context/PortfolioContext'

const PersonalInfo = () => {
  const { portfolioData, updatePersonalInfo } = usePortfolio()
  const { personalInfo } = portfolioData

  const handleChange = (field, value) => {
    updatePersonalInfo({ [field]: value })
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        handleChange('avatar', reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeAvatar = () => {
    handleChange('avatar', '')
  }

  return (
    <div className="editor-section">
      <div className="section-header">
        <h2 className="section-title">Personal Information</h2>
        <p className="section-subtitle">Let's start with your basic information</p>
      </div>

      {/* Avatar Upload Section */}
      <div className="avatar-upload-section">
        <div className="avatar-preview">
          {personalInfo.avatar ? (
            <img src={personalInfo.avatar} alt="Avatar" className="avatar-img" />
          ) : (
            <div className="avatar-placeholder">
              <span className="avatar-icon">👤</span>
            </div>
          )}
        </div>
        <div className="avatar-actions">
          <label className="btn-upload">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            <span className="upload-icon">📷</span>
            {personalInfo.avatar ? 'Change Photo' : 'Upload Photo'}
          </label>
          {personalInfo.avatar && (
            <button onClick={removeAvatar} className="btn-remove-avatar">
              Remove
            </button>
          )}
          <p className="upload-hint">or paste an image URL below</p>
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group full-width">
          <label htmlFor="name">
            Full Name <span className="required">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={personalInfo.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="e.g., John Doe"
            className="input-large"
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="title">
            Professional Title <span className="required">*</span>
          </label>
          <input
            id="title"
            type="text"
            value={personalInfo.title}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="e.g., Full Stack Developer, UI/UX Designer"
            className="input-large"
          />
          <span className="input-hint">This appears right below your name</span>
        </div>

        <div className="form-group">
          <label htmlFor="email">
            <span className="label-icon">📧</span>
            Email Address <span className="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={personalInfo.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="john@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            <span className="label-icon">📱</span>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={personalInfo.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="+1 234 567 8900"
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="location">
            <span className="label-icon">📍</span>
            Location
          </label>
          <input
            id="location"
            type="text"
            value={personalInfo.location}
            onChange={(e) => handleChange('location', e.target.value)}
            placeholder="e.g., San Francisco, CA"
          />
          <span className="input-hint">City and country/state</span>
        </div>

        <div className="form-group full-width">
          <label htmlFor="avatar-url">
            <span className="label-icon">🖼️</span>
            Avatar URL (Optional)
          </label>
          <input
            id="avatar-url"
            type="url"
            value={personalInfo.avatar}
            onChange={(e) => handleChange('avatar', e.target.value)}
            placeholder="https://example.com/avatar.jpg"
          />
          <span className="input-hint">Paste an image URL or upload above</span>
        </div>

        <div className="form-group full-width">
          <label htmlFor="bio">
            <span className="label-icon">✍️</span>
            Professional Bio <span className="required">*</span>
          </label>
          <textarea
            id="bio"
            value={personalInfo.bio}
            onChange={(e) => handleChange('bio', e.target.value)}
            placeholder="Tell visitors about yourself, your expertise, and what makes you unique..."
            rows="6"
            maxLength="500"
          />
          <div className="textarea-footer">
            <span className="input-hint">Keep it concise and engaging (2-3 sentences)</span>
            <span className="char-count">{personalInfo.bio.length}/500</span>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="tips-box">
        <h4 className="tips-title">💡 Tips for a Great Profile</h4>
        <ul className="tips-list">
          <li>Use a professional, high-quality photo</li>
          <li>Write a bio that highlights your unique skills and experience</li>
          <li>Make sure your contact information is current</li>
          <li>Use a title that clearly describes what you do</li>
        </ul>
      </div>
    </div>
  )
}

export default PersonalInfo