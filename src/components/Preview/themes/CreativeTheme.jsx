const CreativeTheme = ({ data, colors }) => {
  const { personalInfo, skills, projects, experience, education, socialLinks } = data

  return (
    <div className="theme-creative" style={{ 
      '--primary': colors.primary, 
      '--secondary': colors.secondary, 
      '--accent': colors.accent 
    }}>
      {/* Sidebar */}
      <aside className="creative-sidebar">
        {personalInfo.avatar && (
          <div className="creative-avatar-wrapper">
            <img src={personalInfo.avatar} alt={personalInfo.name} className="creative-avatar" />
          </div>
        )}
        <h1 className="creative-name">{personalInfo.name}</h1>
        <p className="creative-title">{personalInfo.title}</p>
        
        <div className="creative-contact-info">
          <div className="contact-item">
            <span className="icon">📧</span>
            <span>{personalInfo.email}</span>
          </div>
          <div className="contact-item">
            <span className="icon">📱</span>
            <span>{personalInfo.phone}</span>
          </div>
          <div className="contact-item">
            <span className="icon">📍</span>
            <span>{personalInfo.location}</span>
          </div>
        </div>

        <div className="creative-social-links">
          {socialLinks.github && (
            <a href={socialLinks.github} className="creative-social-btn">GitHub</a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} className="creative-social-btn">LinkedIn</a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} className="creative-social-btn">Twitter</a>
          )}
          {socialLinks.website && (
            <a href={socialLinks.website} className="creative-social-btn">Website</a>
          )}
        </div>

        {/* Skills in Sidebar */}
        {skills.length > 0 && (
          <div className="creative-skills-sidebar">
            <h3>Skills</h3>
            {skills.map(skill => (
              <div key={skill.id} className="creative-skill-item">
                <span>{skill.name}</span>
                <div className="creative-skill-dots">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`dot ${i < Math.ceil(skill.level / 20) ? 'filled' : ''}`}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="creative-main">
        {/* About */}
        <section className="creative-section">
          <div className="creative-section-header">
            <span className="section-number">01</span>
            <h2>About Me</h2>
          </div>
          <p className="creative-bio">{personalInfo.bio}</p>
        </section>

        {/* Projects */}
        {projects.length > 0 && (
          <section className="creative-section">
            <div className="creative-section-header">
              <span className="section-number">02</span>
              <h2>Featured Projects</h2>
            </div>
            <div className="creative-projects">
              {projects.map((project, index) => (
                <div key={project.id} className="creative-project">
                  {project.image && (
                    <div className="creative-project-image">
                      <img src={project.image} alt={project.title} />
                    </div>
                  )}
                  <div className="creative-project-content">
                    <span className="project-number">0{index + 1}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="creative-project-tech">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    <div className="creative-project-links">
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="project-link">View Live →</a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="project-link">Source Code →</a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section className="creative-section">
            <div className="creative-section-header">
              <span className="section-number">03</span>
              <h2>Experience</h2>
            </div>
            <div className="creative-experience">
              {experience.map(exp => (
                <div key={exp.id} className="creative-exp-item">
                  <div className="exp-timeline-dot"></div>
                  <div className="exp-content">
                    <div className="exp-header">
                      <h3>{exp.position}</h3>
                      <span className="exp-date">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <h4>{exp.company}</h4>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section className="creative-section">
            <div className="creative-section-header">
              <span className="section-number">04</span>
              <h2>Education</h2>
            </div>
            <div className="creative-education">
              {education.map(edu => (
                <div key={edu.id} className="creative-edu-item">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <span className="edu-date">
                    {edu.startDate} - {edu.endDate}
                  </span>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default CreativeTheme