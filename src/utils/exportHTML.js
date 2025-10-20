import { generateCSS } from './generateCSS'

export const generateHTML = (data, theme, colors) => {
  const { personalInfo, skills, projects, experience, education, socialLinks } = data

  const skillsHTML = skills.map(skill => `
    <div class="skill-item">
      <span class="skill-name">${skill.name}</span>
      <div class="skill-bar">
        <div class="skill-fill" style="width: ${skill.level}%"></div>
      </div>
      <span class="skill-level">${skill.level}%</span>
    </div>
  `).join('')

  const projectsHTML = projects.map(project => `
    <div class="project-card">
      ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-img">` : ''}
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tech-tags">
        ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
      </div>
      <div class="project-links">
        ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank">Live Demo</a>` : ''}
        ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank">GitHub</a>` : ''}
      </div>
    </div>
  `).join('')

  const experienceHTML = experience.map(exp => `
    <div class="exp-item">
      <h3>${exp.position}</h3>
      <h4>${exp.company}</h4>
      <p class="date">${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}</p>
      <p>${exp.description}</p>
    </div>
  `).join('')

  const educationHTML = education.map(edu => `
    <div class="edu-item">
      <h3>${edu.degree}</h3>
      <h4>${edu.institution}</h4>
      <p class="date">${edu.startDate} - ${edu.endDate}</p>
      <p>${edu.description}</p>
    </div>
  `).join('')

  const socialHTML = Object.entries(socialLinks)
    .filter(([_, url]) => url)
    .map(([platform, url]) => `<a href="${url}" target="_blank">${platform}</a>`)
    .join('')

  const css = generateCSS(theme, colors)

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${personalInfo.name} - Portfolio</title>
  <style>${css}</style>
</head>
<body>
  <div class="portfolio">
    <header class="header">
      ${personalInfo.avatar ? `<img src="${personalInfo.avatar}" alt="${personalInfo.name}" class="avatar">` : ''}
      <h1>${personalInfo.name}</h1>
      <p class="title">${personalInfo.title}</p>
      <p class="bio">${personalInfo.bio}</p>
      <div class="contact">
        <span>📧 ${personalInfo.email}</span>
        <span>📱 ${personalInfo.phone}</span>
        <span>📍 ${personalInfo.location}</span>
      </div>
      <div class="social">${socialHTML}</div>
    </header>

    ${skills.length ? `
    <section class="section">
      <h2>Skills</h2>
      <div class="skills-grid">${skillsHTML}</div>
    </section>` : ''}

    ${projects.length ? `
    <section class="section">
      <h2>Projects</h2>
      <div class="projects-grid">${projectsHTML}</div>
    </section>` : ''}

    ${experience.length ? `
    <section class="section">
      <h2>Experience</h2>
      <div class="experience-list">${experienceHTML}</div>
    </section>` : ''}

    ${education.length ? `
    <section class="section">
      <h2>Education</h2>
      <div class="education-list">${educationHTML}</div>
    </section>` : ''}
  </div>
</body>
</html>`
}