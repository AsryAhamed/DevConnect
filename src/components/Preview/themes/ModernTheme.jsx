const ModernTheme = ({ data, colors }) => {
  const { personalInfo, skills, projects, experience, education, socialLinks } = data

  return (
    <div className="theme-modern" style={{ '--primary': colors.primary, '--secondary': colors.secondary, '--accent': colors.accent }}>
      {/* Hero Section */}
      <section className="modern-hero">
        <div className="hero-content">
          {personalInfo.avatar && (
            <img src={personalInfo.avatar} alt={personalInfo.name} className="hero-avatar" />
          )}
          <h1 className="hero-name">{personalInfo.name}</h1>
          <p className="hero-title">{personalInfo.title}</p>
          <p className="hero-bio">{personalInfo.bio}</p>
          
          <div className="hero-contact">
            <span>📧 {personalInfo.email}</span>
            <span>📱 {personalInfo.phone}</span>
            <span>📍 {personalInfo.location}</span>
          </div>

          <div className="hero-social">
            {socialLinks.github && <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
            {socialLinks.linkedin && <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
            {socialLinks.twitter && <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
            {socialLinks.website && <a href={socialLinks.website} target="_blank" rel="noopener noreferrer">Website</a>}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {skills.length > 0 && (
        <section className="modern-section">
          <h2 className="section-heading">Skills</h2>
          <div className="skills-grid">
            {skills.map(skill => (
              <div key={skill.id} className="skill-card">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
                <div className="skill-percentage">{skill.level}%</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <section className="modern-section">
          <h2 className="section-heading">Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                {project.image && (
                  <img src={project.image} alt={project.title} className="project-image" />
                )}
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                    {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience Section */}
      {experience.length > 0 && (
        <section className="modern-section">
          <h2 className="section-heading">Experience</h2>
          <div className="timeline">
            {experience.map(exp => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{exp.position}</h3>
                  <h4>{exp.company}</h4>
                  <p className="timeline-date">
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </p>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education Section */}
      {education.length > 0 && (
        <section className="modern-section">
          <h2 className="section-heading">Education</h2>
          <div className="education-list">
            {education.map(edu => (
              <div key={edu.id} className="education-card">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p className="education-date">
                  {edu.startDate} - {edu.endDate}
                </p>
                <p className="education-description">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default ModernTheme