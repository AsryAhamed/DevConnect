import { useState } from 'react'

const Sidebar = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'personal', icon: '👤', label: 'Personal Info' },
    { id: 'skills', icon: '⚡', label: 'Skills' },
    { id: 'projects', icon: '💼', label: 'Projects' },
    { id: 'experience', icon: '🏢', label: 'Experience' },
    { id: 'education', icon: '🎓', label: 'Education' },
    { id: 'social', icon: '🔗', label: 'Social Links' }
  ]

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {sections.map(section => (
          <button
            key={section.id}
            className={`sidebar-btn ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="sidebar-icon">{section.icon}</span>
            <span className="sidebar-label">{section.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar