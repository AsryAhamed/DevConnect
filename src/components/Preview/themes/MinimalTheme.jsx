const MinimalTheme = ({ data, colors }) => {
  const { personalInfo, skills, projects, experience, education, socialLinks } = data

  return (
    <div className="theme-minimal" style={{ '--primary': colors.primary, '--secondary': colors.secondary }}>
      {/* Header */}
      <header className="minimal-header">
        <div className="minimal-name-section">
          <h1>{personalInfo.name}</h1>
          <p className="minimal-title">{personalInfo.title}</p>
        </div>
        
        <div className="minimal-contact">
          <p>{personalInfo.email}</p>
          <p>{personalInfo.phone}</p>
          <p>{personalInfo.location}</p>
        </div>
      </header>

      <div className="minimal-divider"></div>

      {/* About */}
      <section className="minimal-section">
        <h2>About</h2>
        <p>{personalInfo.bio}</p>
      </section>

      {/* Skills */}
      {skills.length > 0 && (
        <section className="minimal-section">
          <h2>Skills</h2>
          <div className="minimal-skills">
            {skills.map(skill => (
              <span key={skill.id} className="minimal-skill-tag">
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="minimal-section">
          <h2>Experience</h2>
          {experience.map(exp => (
            <div key={exp.id} className="minimal-item">
              <div className="minimal-item-header">
                <h3>{exp.position}</h3>
                <span className="minimal-date">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="minimal-section">
          <h2>Projects</h2>
          {projects.map(project => (
            <div key={project.id} className="minimal-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="minimal-tech">
                {project.technologies.join(' • ')}
              </div>
              <div className="minimal-links">
                {project.liveUrl && <a href={project.liveUrl}>Demo</a>}
                {project.githubUrl && <a href={project.githubUrl}>Code</a>}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="minimal-section">
          <h2>Education</h2>
          {education.map(edu => (
            <div key={edu.id} className="minimal-item">
              <div className="minimal-item-header">
                <h3>{edu.degree}</h3>
                <span className="minimal-date">
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
              <h4>{edu.institution}</h4>
              <p>{edu.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Links */}
      <section className="minimal-section">
        <h2>Links</h2>
        <div className="minimal-social">
          {socialLinks.github && <a href={socialLinks.github}>GitHub</a>}
          {socialLinks.linkedin && <a href={socialLinks.linkedin}>LinkedIn</a>}
          {socialLinks.twitter && <a href={socialLinks.twitter}>Twitter</a>}
          {socialLinks.website && <a href={socialLinks.website}>Website</a>}
        </div>
      </section>
    </div>
  )
}

export default MinimalTheme