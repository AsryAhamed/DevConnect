import { useState } from 'react'
import { usePortfolio } from '../../context/PortfolioContext'

const Skills = () => {
  const { portfolioData, addSkill, removeSkill, updateSkills } = usePortfolio()
  const { skills } = portfolioData

  const [newSkill, setNewSkill] = useState({ name: '', level: 50 })

  const handleAddSkill = () => {
    if (newSkill.name.trim()) {
      addSkill(newSkill)
      setNewSkill({ name: '', level: 50 })
    }
  }

  const handleUpdateSkill = (id, field, value) => {
    const updated = skills.map(skill =>
      skill.id === id ? { ...skill, [field]: value } : skill
    )
    updateSkills(updated)
  }

  return (
    <div className="editor-section">
      <h2 className="section-title">Skills</h2>

      <div className="add-item-form">
        <div className="form-row">
          <input
            type="text"
            value={newSkill.name}
            onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
            placeholder="Skill name (e.g., React)"
            className="flex-1"
          />
          <div className="skill-level-input">
            <input
              type="range"
              min="0"
              max="100"
              value={newSkill.level}
              onChange={(e) => setNewSkill({ ...newSkill, level: parseInt(e.target.value) })}
            />
            <span className="level-value">{newSkill.level}%</span>
          </div>
          <button onClick={handleAddSkill} className="btn-add">
            Add Skill
          </button>
        </div>
      </div>

      <div className="items-list">
        {skills.map(skill => (
          <div key={skill.id} className="skill-item">
            <div className="skill-header">
              <input
                type="text"
                value={skill.name}
                onChange={(e) => handleUpdateSkill(skill.id, 'name', e.target.value)}
                className="skill-name-input"
              />
              <button
                onClick={() => removeSkill(skill.id)}
                className="btn-remove"
              >
                ×
              </button>
            </div>
            <div className="skill-level-control">
              <input
                type="range"
                min="0"
                max="100"
                value={skill.level}
                onChange={(e) => handleUpdateSkill(skill.id, 'level', parseInt(e.target.value))}
              />
              <span className="level-value">{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills