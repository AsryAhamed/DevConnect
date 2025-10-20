import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import PersonalInfo from '../Editor/PersonalInfo'
import Skills from '../Editor/Skills'
import Projects from '../Editor/Projects'
import Experience from '../Editor/Experience'
import Education from '../Editor/Education'
import SocialLinks from '../Editor/SocialLinks'
import PortfolioPreview from '../Preview/PortfolioPreview'

const EditorLayout = () => {
  const [activeSection, setActiveSection] = useState('personal')

  const renderEditor = () => {
    switch (activeSection) {
      case 'personal':
        return <PersonalInfo />
      case 'skills':
        return <Skills />
      case 'projects':
        return <Projects />
      case 'experience':
        return <Experience />
      case 'education':
        return <Education />
      case 'social':
        return <SocialLinks />
      default:
        return <PersonalInfo />
    }
  }

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className="editor-panel">
          <div className="editor-content">
            {renderEditor()}
          </div>
        </div>
        <div className="preview-panel">
          <PortfolioPreview />
        </div>
      </div>
    </div>
  )
}

export default EditorLayout