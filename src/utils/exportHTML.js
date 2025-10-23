import { generateCSS } from './generateCSS'

export const generateHTML = (data, theme, colors) => {
  const { personalInfo, skills, projects, experience, education, socialLinks } = data

  const css = generateCSS(theme, colors)

  // Generate content based on theme
  let bodyContent = ''

  if (theme === 'modern') {
    bodyContent = generateModernHTML(data)
  } else if (theme === 'minimal') {
    bodyContent = generateMinimalHTML(data)
  } else if (theme === 'creative') {
    bodyContent = generateCreativeHTML(data)
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${personalInfo.bio}">
  <meta name="author" content="${personalInfo.name}">
  <title>${personalInfo.name} - Portfolio</title>
  <style>${css}</style>
</head>
<body>
  ${bodyContent}
</body>
</html>`
}

// Modern Theme HTML Generator
function generateModernHTML(data) {
  const { personalInfo, skills, projects, experience, education, socialLinks } = data

  const skillsHTML = skills.map(skill => `
    <div class="skill-card">
      <span class="skill-name">${skill.name}</span>
      <div class="skill-bar">
        <div class="skill-progress" style="width: ${skill.level}%"></div>
      </div>
      <span class="skill-percentage">${skill.level}%</span>
    </div>
  `).join('')

  const projectsHTML = projects.map(project => `
    <div class="project-card">
      ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-image">` : ''}
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
          ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
        </div>
      </div>
    </div>
  `).join('')

  const experienceHTML = experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <h3>${exp.position}</h3>${exp.position}</h3>
        <h4>${exp.company}</h4>
        <p class="timeline-date">${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}</p>
        <p class="timeline-description">${exp.description}</p>
      </div>
    </div>
  `).join('')

  const educationHTML = education.map(edu => `
    <div class="education-card">
      <h3>${edu.degree}</h3>
      <h4>${edu.institution}</h4>
      <p class="education-date">${edu.startDate} - ${edu.endDate}</p>
      <p class="education-description">${edu.description}</p>
    </div>
  `).join('')

  const socialHTML = Object.entries(socialLinks)
    .filter(([_, url]) => url)
    .map(([platform, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${platform.charAt(0).toUpperCase() + platform.slice(1)}</a>`)
    .join('')

  return `
  <div class="theme-modern">
    <section class="modern-hero">
      <div class="hero-content">
        ${personalInfo.avatar ? `<img src="${personalInfo.avatar}" alt="${personalInfo.name}" class="hero-avatar">` : ''}
        <h1 class="hero-name">${personalInfo.name}</h1>
        <p class="hero-title">${personalInfo.title}</p>
        <p class="hero-bio">${personalInfo.bio}</p>
        
        <div class="hero-contact">
          <span>📧 ${personalInfo.email}</span>
          <span>📱 ${personalInfo.phone}</span>
          <span>📍 ${personalInfo.location}</span>
        </div>

        <div class="hero-social">
          ${socialHTML}
        </div>
      </div>
    </section>

    ${skills.length > 0 ? `
    <section class="modern-section">
      <h2 class="section-heading">Skills</h2>
      <div class="skills-grid">
        ${skillsHTML}
      </div>
    </section>` : ''}

    ${projects.length > 0 ? `
    <section class="modern-section">
      <h2 class="section-heading">Projects</h2>
      <div class="projects-grid">
        ${projectsHTML}
      </div>
    </section>` : ''}

    ${experience.length > 0 ? `
    <section class="modern-section">
      <h2 class="section-heading">Experience</h2>
      <div class="timeline">
        ${experienceHTML}
      </div>
    </section>` : ''}

    ${education.length > 0 ? `
    <section class="modern-section">
      <h2 class="section-heading">Education</h2>
      <div class="education-list">
        ${educationHTML}
      </div>
    </section>` : ''}
  </div>
  `
}

// Minimal Theme HTML Generator
function generateMinimalHTML(data) {
  const { personalInfo, skills, projects, experience, education, socialLinks } = data

  const skillsHTML = skills.map(skill => `
    <span class="minimal-skill-tag">${skill.name}</span>
  `).join('')

  const projectsHTML = projects.map(project => `
    <div class="minimal-item">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="minimal-tech">
        ${project.technologies.join(' • ')}
      </div>
      <div class="minimal-links">
        ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">Demo</a>` : ''}
        ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">Code</a>` : ''}
      </div>
    </div>
  `).join('')

  const experienceHTML = experience.map(exp => `
    <div class="minimal-item">
      <div class="minimal-item-header">
        <h3>${exp.position}</h3>
        <span class="minimal-date">${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}</span>
      </div>
      <h4>${exp.company}</h4>
      <p>${exp.description}</p>
    </div>
  `).join('')

  const educationHTML = education.map(edu => `
    <div class="minimal-item">
      <div class="minimal-item-header">
        <h3>${edu.degree}</h3>
        <span class="minimal-date">${edu.startDate} - ${edu.endDate}</span>
      </div>
      <h4>${edu.institution}</h4>
      <p>${edu.description}</p>
    </div>
  `).join('')

  const socialHTML = Object.entries(socialLinks)
    .filter(([_, url]) => url)
    .map(([platform, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${platform.charAt(0).toUpperCase() + platform.slice(1)}</a>`)
    .join('')

  return `
  <div class="theme-minimal">
    <header class="minimal-header">
      <div class="minimal-name-section">
        <h1>${personalInfo.name}</h1>
        <p class="minimal-title">${personalInfo.title}</p>
      </div>
      
      <div class="minimal-contact">
        <p>${personalInfo.email}</p>
        <p>${personalInfo.phone}</p>
        <p>${personalInfo.location}</p>
      </div>
    </header>

    <section class="minimal-section">
      <h2>About</h2>
      <p>${personalInfo.bio}</p>
    </section>

    ${skills.length > 0 ? `
    <section class="minimal-section">
      <h2>Skills</h2>
      <div class="minimal-skills">
        ${skillsHTML}
      </div>
    </section>` : ''}

    ${experience.length > 0 ? `
    <section class="minimal-section">
      <h2>Experience</h2>
      ${experienceHTML}
    </section>` : ''}

    ${projects.length > 0 ? `
    <section class="minimal-section">
      <h2>Projects</h2>
      ${projectsHTML}
    </section>` : ''}

    ${education.length > 0 ? `
    <section class="minimal-section">
      <h2>Education</h2>
      ${educationHTML}
    </section>` : ''}

    <section class="minimal-section">
      <h2>Links</h2>
      <div class="minimal-social">
        ${socialHTML}
      </div>
    </section>
  </div>
  `
}

// Creative Theme HTML Generator
function generateCreativeHTML(data) {
  const { personalInfo, skills, projects, experience, education, socialLinks } = data

  const skillsHTML = skills.map(skill => {
    const filledDots = Math.ceil(skill.level / 20)
    const dots = [...Array(5)].map((_, i) => 
      `<span class="dot ${i < filledDots ? 'filled' : ''}"></span>`
    ).join('')
    
    return `
    <div class="creative-skill-item">
      <span>${skill.name}</span>
      <div class="creative-skill-dots">
        ${dots}
      </div>
    </div>
    `
  }).join('')

  const projectsHTML = projects.map((project, index) => `
    <div class="creative-project">
      ${project.image ? `
      <div class="creative-project-image">
        <img src="${project.image}" alt="${project.title}">
      </div>` : ''}
      <div class="creative-project-content">
        <span class="project-number">0${index + 1}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="creative-project-tech">
          ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
        </div>
        <div class="creative-project-links">
          ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">View Live →</a>` : ''}
          ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">Source Code →</a>` : ''}
        </div>
      </div>
    </div>
  `).join('')

  const experienceHTML = experience.map(exp => `
    <div class="creative-exp-item">
      <div class="exp-timeline-dot"></div>
      <div class="exp-content">
        <div class="exp-header">
          <h3>${exp.position}</h3>
          <span class="exp-date">${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}</span>
        </div>
        <h4>${exp.company}</h4>
        <p>${exp.description}</p>
      </div>
    </div>
  `).join('')

  const educationHTML = education.map(edu => `
    <div class="creative-edu-item">
      <h3>${edu.degree}</h3>
      <h4>${edu.institution}</h4>
      <span class="edu-date">${edu.startDate} - ${edu.endDate}</span>
      <p>${edu.description}</p>
    </div>
  `).join('')

  const socialHTML = Object.entries(socialLinks)
    .filter(([_, url]) => url)
    .map(([platform, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer" class="creative-social-btn">${platform.charAt(0).toUpperCase() + platform.slice(1)}</a>`)
    .join('')

  return `
  <div class="theme-creative">
    <aside class="creative-sidebar">
      ${personalInfo.avatar ? `
      <div class="creative-avatar-wrapper">
        <img src="${personalInfo.avatar}" alt="${personalInfo.name}" class="creative-avatar">
      </div>` : ''}
      <h1 class="creative-name">${personalInfo.name}</h1>
      <p class="creative-title">${personalInfo.title}</p>
      
      <div class="creative-contact-info">
        <div class="contact-item">
          <span class="icon">📧</span>
          <span>${personalInfo.email}</span>
        </div>
        <div class="contact-item">
          <span class="icon">📱</span>
          <span>${personalInfo.phone}</span>
        </div>
        <div class="contact-item">
          <span class="icon">📍</span>
          <span>${personalInfo.location}</span>
        </div>
      </div>

      <div class="creative-social-links">
        ${socialHTML}
      </div>

      ${skills.length > 0 ? `
      <div class="creative-skills-sidebar">
        <h3>Skills</h3>
        ${skillsHTML}
      </div>` : ''}
    </aside>

    <main class="creative-main">
      <section class="creative-section">
        <div class="creative-section-header">
          <span class="section-number">01</span>
          <h2>About Me</h2>
        </div>
        <p class="creative-bio">${personalInfo.bio}</p>
      </section>

      ${projects.length > 0 ? `
      <section class="creative-section">
        <div class="creative-section-header">
          <span class="section-number">02</span>
          <h2>Featured Projects</h2>
        </div>
        <div class="creative-projects">
          ${projectsHTML}
        </div>
      </section>` : ''}

      ${experience.length > 0 ? `
      <section class="creative-section">
        <div class="creative-section-header">
          <span class="section-number">03</span>
          <h2>Experience</h2>
        </div>
        <div class="creative-experience">
          ${experienceHTML}
        </div>
      </section>` : ''}

      ${education.length > 0 ? `
      <section class="creative-section">
        <div class="creative-section-header">
          <span class="section-number">04</span>
          <h2>Education</h2>
        </div>
        <div class="creative-education">
          ${educationHTML}
        </div>
      </section>` : ''}
    </main>
  </div>
  `
}