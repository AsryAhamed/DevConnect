import { createContext, useState, useContext } from 'react'

const PortfolioContext = createContext()

export const usePortfolio = () => {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error('usePortfolio must be used within PortfolioProvider')
  }
  return context
}

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState({
    personalInfo: {
      name: 'John Doe',
      title: 'Full Stack Developer',
      email: 'john@example.com',
      phone: '+1 234 567 8900',
      location: 'San Francisco, CA',
      bio: 'Passionate developer with 5+ years of experience building scalable web applications.',
      avatar: ''
    },
    skills: [
      { id: 1, name: 'React', level: 90 },
      { id: 2, name: 'Node.js', level: 85 },
      { id: 3, name: 'TypeScript', level: 80 },
      { id: 4, name: 'CSS/SASS', level: 88 }
    ],
    projects: [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Built a full-stack e-commerce platform with React and Node.js',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/example',
        image: ''
      }
    ],
    experience: [
      {
        id: 1,
        company: 'Tech Corp',
        position: 'Senior Developer',
        startDate: '2020-01',
        endDate: 'Present',
        description: 'Led development of core features and mentored junior developers.',
        current: true
      }
    ],
    education: [
      {
        id: 1,
        institution: 'University of Technology',
        degree: 'Bachelor of Computer Science',
        startDate: '2015-09',
        endDate: '2019-06',
        description: 'Focus on Software Engineering and Web Development'
      }
    ],
    socialLinks: {
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      website: 'https://johndoe.dev'
    }
  })

  const [theme, setTheme] = useState('modern')
  const [colorScheme, setColorScheme] = useState({
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#ec4899',
    background: '#ffffff',
    text: '#1f2937'
  })

  const updatePersonalInfo = (data) => {
    setPortfolioData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...data }
    }))
  }

  const updateSkills = (skills) => {
    setPortfolioData(prev => ({ ...prev, skills }))
  }

  const addSkill = (skill) => {
    setPortfolioData(prev => ({
      ...prev,
      skills: [...prev.skills, { id: Date.now(), ...skill }]
    }))
  }

  const removeSkill = (id) => {
    setPortfolioData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }))
  }

  const updateProjects = (projects) => {
    setPortfolioData(prev => ({ ...prev, projects }))
  }

  const addProject = (project) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: [...prev.projects, { id: Date.now(), ...project }]
    }))
  }

  const removeProject = (id) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: prev.projects.filter(project => project.id !== id)
    }))
  }

  const updateExperience = (experience) => {
    setPortfolioData(prev => ({ ...prev, experience }))
  }

  const addExperience = (exp) => {
    setPortfolioData(prev => ({
      ...prev,
      experience: [...prev.experience, { id: Date.now(), ...exp }]
    }))
  }

  const removeExperience = (id) => {
    setPortfolioData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }))
  }

  const updateEducation = (education) => {
    setPortfolioData(prev => ({ ...prev, education }))
  }

  const addEducation = (edu) => {
    setPortfolioData(prev => ({
      ...prev,
      education: [...prev.education, { id: Date.now(), ...edu }]
    }))
  }

  const removeEducation = (id) => {
    setPortfolioData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }))
  }

  const updateSocialLinks = (links) => {
    setPortfolioData(prev => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, ...links }
    }))
  }

  const value = {
    portfolioData,
    theme,
    setTheme,
    colorScheme,
    setColorScheme,
    updatePersonalInfo,
    updateSkills,
    addSkill,
    removeSkill,
    updateProjects,
    addProject,
    removeProject,
    updateExperience,
    addExperience,
    removeExperience,
    updateEducation,
    addEducation,
    removeEducation,
    updateSocialLinks
  }

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  )
}