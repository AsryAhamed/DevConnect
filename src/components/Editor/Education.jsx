import { usePortfolio } from '../../context/PortfolioContext'

const Education = () => {
  const { portfolioData, addEducation, removeEducation, updateEducation } = usePortfolio()
  const { education } = portfolioData

  const handleAddEducation = () => {
    addEducation({
      institution: 'University Name',
      degree: 'Degree',
      startDate: '',
      endDate: '',
      description: ''
    })
  }

  const handleUpdateEducation = (id, field, value) => {
    const updated = education.map(edu =>
      edu.id === id ? { ...edu, [field]: value } : edu
    )
    updateEducation(updated)
  }

  return (
    <div className="editor-section">
      <h2 className="section-title">Education</h2>

      <button onClick={handleAddEducation} className="btn-add-large">
        + Add Education
      </button>

      <div className="items-list">
        {education.map(edu => (
          <div key={edu.id} className="education-item card">
            <div className="card-header">
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleUpdateEducation(edu.id, 'degree', e.target.value)}
                className="degree-input"
                placeholder="Degree"
              />
              <button
                onClick={() => removeEducation(edu.id)}
                className="btn-remove"
              >
                ×
              </button>
            </div>

            <div className="form-grid">
              <div className="form-group full-width">
                <label>Institution</label>
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => handleUpdateEducation(edu.id, 'institution', e.target.value)}
                  placeholder="University Name"
                />
              </div>

              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="month"
                  value={edu.startDate}
                  onChange={(e) => handleUpdateEducation(edu.id, 'startDate', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>End Date</label>
                <input type="month"
                  value={edu.endDate}
                  onChange={(e) => handleUpdateEducation(edu.id, 'endDate', e.target.value)}
                />
              </div>

              <div className="form-group full-width">
                <label>Description</label>
                <textarea
                  value={edu.description}
                  onChange={(e) => handleUpdateEducation(edu.id, 'description', e.target.value)}
                  rows="3"
                  placeholder="Additional details about your education..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education