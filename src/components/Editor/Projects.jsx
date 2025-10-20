import { useState } from 'react'
import { usePortfolio } from '../../context/PortfolioContext'

const Projects = () => {
  const { portfolioData, addProject, removeProject, updateProjects } = usePortfolio()
  const { projects } = portfolioData

  const [editingId, setEditingId] = useState(null)

  const handleAddProject = () => {
    addProject({
      title: 'New Project',
      description: 'Project description',
      technologies: [],
      liveUrl: '',
      githubUrl: '',
      image: ''
    })
  }

  const handleUpdateProject = (id, field, value) => {
    const updated = projects.map(project =>
      project.id === id ? { ...project, [field]: value } : project
    )
    updateProjects(updated)
  }

  const handleTechChange = (id, techString) => {
    const technologies = techString.split(',').map(t => t.trim()).filter(t => t)
    handleUpdateProject(id, 'technologies', technologies)
  }

  return (
    <div className="editor-section">
      <h2 className="section-title">Projects</h2>

      <button onClick={handleAddProject} className="btn-add-large">
        + Add Project
      </button>

      <div className="items-list">
        {projects.map(project => (
          <div key={project.id} className="project-item card">
            <div className="card-header">
              <input
                type="text"
                value={project.title}
                onChange={(e) => handleUpdateProject(project.id, 'title', e.target.value)}
                className="project-title-input"
                placeholder="Project Title"
              />
              <button
                onClick={() => removeProject(project.id)}
                className="btn-remove"
              >
                ×
              </button>
            </div>

            <div className="form-grid">
              <div className="form-group full-width">
                <label>Description</label>
                <textarea
                  value={project.description}
                  onChange={(e) => handleUpdateProject(project.id, 'description', e.target.value)}
                  rows="3"
                  placeholder="Describe your project..."
                />
              </div>

              <div className="form-group full-width">
                <label>Technologies (comma-separated)</label>
                <input
                  type="text"
                  value={project.technologies.join(', ')}
                  onChange={(e) => handleTechChange(project.id, e.target.value)}
                  placeholder="React, Node.js, MongoDB"
                />
              </div>

              <div className="form-group">
                <label>Live URL</label>
                <input
                  type="url"
                  value={project.liveUrl}
                  onChange={(e) => handleUpdateProject(project.id, 'liveUrl', e.target.value)}
                  placeholder="https://example.com"
                />
              </div>

              <div className="form-group">
                <label>GitHub URL</label>
                <input
                  type="url"
                  value={project.githubUrl}
                  onChange={(e) => handleUpdateProject(project.id, 'githubUrl', e.target.value)}
                  placeholder="https://github.com/username/repo"
                />
              </div>

              <div className="form-group full-width">
                <label>Image URL (Optional)</label>
                <input
                  type="url"
                  value={project.image}
                  onChange={(e) => handleUpdateProject(project.id, 'image', e.target.value)}
                  placeholder="https://example.com/project-image.jpg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects