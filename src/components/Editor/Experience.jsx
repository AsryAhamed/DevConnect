import { usePortfolio } from '../../context/PortfolioContext'

const Experience = () => {
  const { portfolioData, addExperience, removeExperience, updateExperience } = usePortfolio()
  const { experience } = portfolioData

  const handleAddExperience = () => {
    addExperience({
      company: 'Company Name',
      position: 'Position',
      startDate: '',
      endDate: '',
      description: '',
      current: false
    })
  }

  const handleUpdateExperience = (id, field, value) => {
    const updated = experience.map(exp =>
      exp.id === id ? { ...exp, [field]: value } : exp
    )
    updateExperience(updated)
  }

  return (
    <div className="editor-section">
      <h2 className="section-title">Work Experience</h2>

      <button onClick={handleAddExperience} className="btn-add-large">
        + Add Experience
      </button>

      <div className="items-list">
        {experience.map(exp => (
          <div key={exp.id} className="experience-item card">
            <div className="card-header">
              <input
                type="text"
                value={exp.position}
                onChange={(e) => handleUpdateExperience(exp.id, 'position', e.target.value)}
                className="position-input"
                placeholder="Position"
              />
              <button
                onClick={() => removeExperience(exp.id)}
                className="btn-remove"
              >
                ×
              </button>
            </div>

            <div className="form-grid">
              <div className="form-group full-width">
                <label>Company</label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => handleUpdateExperience(exp.id, 'company', e.target.value)}
                  placeholder="Company Name"
                />
              </div>

              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="month"
                  value={exp.startDate}
                  onChange={(e) => handleUpdateExperience(exp.id, 'startDate', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>End Date</label>
                <input
                  type="month"
                  value={exp.endDate}
                  onChange={(e) => handleUpdateExperience(exp.id, 'endDate', e.target.value)}
                  disabled={exp.current}
                />
              </div>

              <div className="form-group full-width">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={exp.current}
                    onChange={(e) => {
                      handleUpdateExperience(exp.id, 'current', e.target.checked)
                      if (e.target.checked) {
                        handleUpdateExperience(exp.id, 'endDate', 'Present')
                      }
                    }}
                  />
                  Currently working here
                </label>
              </div>

              <div className="form-group full-width">
                <label>Description</label>
                <textarea
                  value={exp.description}
                  onChange={(e) => handleUpdateExperience(exp.id, 'description', e.target.value)}
                  rows="4"
                  placeholder="Describe your role and achievements..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience