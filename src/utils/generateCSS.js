export const generateCSS = (theme, colors) => {
  const baseCSS = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --primary: ${colors.primary};
      --secondary: ${colors.secondary};
      --accent: ${colors.accent};
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #333;
      background: #f5f5f5;
    }
  `

  // Theme-specific CSS
  const modernThemeCSS = `
    .theme-modern {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 2rem;
    }

    .modern-hero {
      background: white;
      border-radius: 24px;
      padding: 3rem 2rem;
      margin-bottom: 2rem;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      position: relative;
      overflow: hidden;
    }

    .modern-hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 6px;
      background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.accent});
    }

    .hero-avatar {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      object-fit: cover;
      border: 5px solid ${colors.primary};
      margin-bottom: 1.5rem;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .hero-name {
      font-size: 2.75rem;
      color: ${colors.primary};
      margin-bottom: 0.5rem;
      font-weight: 800;
    }

    .hero-title {
      font-size: 1.4rem;
      color: ${colors.secondary};
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    .hero-bio {
      color: #555;
      line-height: 1.8;
      max-width: 650px;
      margin: 0 auto 2rem;
      font-size: 1.05rem;
    }

    .hero-contact {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1.5rem;
      margin-bottom: 2rem;
      font-size: 0.95rem;
      color: #666;
    }

    .hero-contact span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: #f8f9fa;
      border-radius: 20px;
    }

    .hero-social {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .hero-social a {
      padding: 0.75rem 2rem;
      background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
      color: white;
      text-decoration: none;
      border-radius: 25px;
      font-weight: 700;
      transition: all 0.3s;
    }

    .hero-social a:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
    }

    .modern-section {
      background: white;
      border-radius: 24px;
      padding: 2.5rem;
      margin-bottom: 2rem;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    }

    .section-heading {
      font-size: 2.25rem;
      color: ${colors.primary};
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 4px solid ${colors.primary};
      font-weight: 800;
      position: relative;
    }

    .section-heading::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 80px;
      height: 4px;
      background: ${colors.accent};
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 1.5rem;
    }

    .skill-card {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      padding: 1.5rem;
      border-radius: 16px;
    }

    .skill-name {
      font-weight: 700;
      margin-bottom: 0.75rem;
      color: #333;
      font-size: 1.05rem;
    }

    .skill-bar {
      height: 12px;
      background: #e0e0e0;
      border-radius: 20px;
      overflow: hidden;
      margin-bottom: 0.5rem;
    }

    .skill-progress {
      height: 100%;
      background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
      border-radius: 20px;
    }

    .skill-percentage {
      font-size: 0.9rem;
      color: ${colors.primary};
      font-weight: 700;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
    }

    .project-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      border: 2px solid #e9ecef;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    }

    .project-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .project-content {
      padding: 1.75rem;
    }

    .project-content h3 {
      color: ${colors.primary};
      margin-bottom: 0.75rem;
      font-size: 1.35rem;
      font-weight: 800;
    }

    .project-content p {
      color: #666;
      font-size: 0.95rem;
      margin-bottom: 1.25rem;
      line-height: 1.6;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.25rem;
    }

    .tag {
      background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
      color: white;
      padding: 0.4rem 1rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 700;
    }

    .project-links {
      display: flex;
      gap: 1.25rem;
    }

    .project-links a {
      color: ${colors.primary};
      text-decoration: none;
      font-weight: 700;
      font-size: 0.95rem;
    }

    .timeline {
      position: relative;
      padding-left: 2.5rem;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(180deg, ${colors.primary}, ${colors.secondary});
      border-radius: 2px;
    }

    .timeline-item {
      position: relative;
      padding-bottom: 2.5rem;
    }

    .timeline-marker {
      position: absolute;
      left: -3rem;
      top: 0.5rem;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: ${colors.primary};
      border: 4px solid white;
      box-shadow: 0 0 0 4px ${colors.primary};
    }

    .timeline-content h3 {
      color: ${colors.primary};
      font-size: 1.35rem;
      margin-bottom: 0.35rem;
      font-weight: 800;
    }

    .timeline-content h4 {
      color: ${colors.secondary};
      font-size: 1.15rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .timeline-date {
      color: #888;
      font-size: 0.9rem;
      margin-bottom: 0.75rem;
      font-weight: 600;
      display: inline-block;
      background: #f8f9fa;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
    }

    .timeline-description {
      color: #666;
      line-height: 1.7;
      font-size: 0.95rem;
    }

    .education-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .education-card {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      padding: 2rem;
      border-radius: 20px;
      border-left: 6px solid ${colors.primary};
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    }

    .education-card h3 {
      color: ${colors.primary};
      font-size: 1.35rem;
      margin-bottom: 0.5rem;
      font-weight: 800;
    }

    .education-card h4 {
      color: ${colors.secondary};
      font-size: 1.05rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .education-date {
      color: #888;
      font-size: 0.9rem;
      margin-bottom: 0.75rem;
      font-weight: 600;
      display: inline-block;
      background: white;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
    }

    .education-description {
      color: #666;
      line-height: 1.7;
      font-size: 0.95rem;
    }

    @media (max-width: 768px) {
      .theme-modern {
        padding: 1rem;
      }
      .modern-hero, .modern-section {
        padding: 1.5rem;
      }
      .hero-name {
        font-size: 2rem;
      }
      .skills-grid, .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `

  const minimalThemeCSS = `
    .theme-minimal {
      min-height: 100vh;
      background: #fafafa;
      padding: 3rem 2rem;
      font-family: 'Georgia', 'Times New Roman', serif;
      color: #2d2d2d;
      max-width: 850px;
      margin: 0 auto;
    }

    .minimal-header {
      border-bottom: 3px solid #2d2d2d;
      padding-bottom: 2rem;
      margin-bottom: 3rem;
    }

    .minimal-name-section h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: ${colors.primary};
    }

    .minimal-title {
      font-size: 1.3rem;
      color: #666;
      font-style: italic;
    }

    .minimal-contact {
      margin-top: 1.5rem;
      font-size: 0.95rem;
      color: #666;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .minimal-contact p {
      margin: 0.35rem 0;
    }

    .minimal-section {
      margin-bottom: 3.5rem;
    }

    .minimal-section h2 {
      font-size: 1.6rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: ${colors.primary};
      text-transform: uppercase;
      letter-spacing: 3px;
      position: relative;
      padding-bottom: 0.75rem;
    }

    .minimal-section h2::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background: ${colors.primary};
    }

    .minimal-section p {
      line-height: 1.9;
      color: #555;
      font-size: 1.05rem;
    }

    .minimal-skills {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .minimal-skill-tag {
      padding: 0.6rem 1.25rem;
      background: white;
      border: 2px solid #2d2d2d;
      border-radius: 6px;
      font-size: 0.95rem;
      color: #2d2d2d;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-weight: 600;
    }

    .minimal-item {
      margin-bottom: 2.5rem;
      padding-bottom: 2.5rem;
      border-bottom: 1px solid #e0e0e0;
    }

    .minimal-item:last-child {
      border-bottom: none;
    }

    .minimal-item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 0.75rem;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .minimal-item h3 {
      font-size: 1.35rem;
      font-weight: 700;
      color: #2d2d2d;
    }

    .minimal-item h4 {
      font-size: 1.1rem;
      font-weight: 600;
      color: ${colors.primary};
      margin-bottom: 0.5rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .minimal-date {
      font-size: 0.9rem;
      color: #999;
      font-style: italic;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .minimal-tech {
      margin-top: 1rem;
      color: #777;
      font-size: 0.95rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-style: italic;
    }

    .minimal-links {
      margin-top: 1rem;
      display: flex;
      gap: 2rem;
    }

    .minimal-links a,
    .minimal-social a {
      color: ${colors.primary};
      text-decoration: none;
      font-weight: 700;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .minimal-social {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }

    @media (max-width: 768px) {
      .theme-minimal {
        padding: 2rem 1.5rem;
      }
      .minimal-name-section h1 {
        font-size: 2.25rem;
      }
    }
  `

  const creativeThemeCSS = `
    .theme-creative {
      min-height: 100vh;
      display: grid;
      grid-template-columns: 360px 1fr;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: #f5f5f5;
    }

    .creative-sidebar {
      background: linear-gradient(180deg, ${colors.primary}, ${colors.secondary});
      color: white;
      padding: 3rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .creative-avatar-wrapper {
      text-align: center;
    }

    .creative-avatar {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      object-fit: cover;
      border: 6px solid rgba(255, 255, 255, 0.3);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    }

    .creative-name {
      font-size: 2.25rem;
      font-weight: 900;
      text-align: center;
      margin: 0;
      text-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    }

    .creative-title {
      text-align: center;
      font-size: 1.15rem;
      opacity: 0.95;
      font-weight: 400;
    }

    .creative-contact-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 2px solid rgba(255, 255, 255, 0.2);
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 0.95rem;
    }

    .contact-item .icon {
      font-size: 1.3rem;
      width: 30px;
      text-align: center;
    }

    .creative-social-links {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding-top: 1rem;
      border-top: 2px solid rgba(255, 255, 255, 0.2);
    }

    .creative-social-btn {
      padding: 0.85rem;
      background: rgba(255, 255, 255, 0.15);
      color: white;
      text-decoration: none;
      text-align: center;
      border-radius: 12px;
      font-weight: 700;
      border: 2px solid rgba(255, 255, 255, 0.2);
    }

    .creative-skills-sidebar {
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 2px solid rgba(255, 255, 255, 0.2);
    }

    .creative-skills-sidebar h3 {
      font-size: 1.3rem;
      margin-bottom: 1.25rem;
      font-weight: 800;
    }

    .creative-skill-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.25rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    }

    .creative-skill-item span {
      font-size: 0.95rem;
      font-weight: 600;
    }

    .creative-skill-dots {
      display: flex;
      gap: 0.35rem;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.25);
    }

    .dot.filled {
      background: white;
    }

    .creative-main {
      padding: 3.5rem;
      background: white;
    }

    .creative-section {
      margin-bottom: 4.5rem;
    }

    .creative-section-header {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: 2.5rem;
      padding-bottom: 1.25rem;
      border-bottom: 4px solid ${colors.primary};
    }

    .section-number {
      font-size: 3.5rem;
      font-weight: 900;
      color: ${colors.primary};
      opacity: 0.25;
    }

    .creative-section-header h2 {
      font-size: 2.25rem;
      font-weight: 900;
      color: #2d2d2d;
      margin: 0;
    }

    .creative-bio {
      font-size: 1.15rem;
      line-height: 1.9;
      color: #555;
    }

    .creative-projects {
      display: flex;
      flex-direction: column;
      gap: 3.5rem;
    }

    .creative-project {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 2.5rem;
    }

    .creative-project-image {
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    }

    .creative-project-image img {
      width: 100%;
      height: 280px;
      object-fit: cover;
    }

    .creative-project-content {
      padding: 1.5rem 0;
    }

    .project-number {
      font-size: 1.1rem;
      font-weight: 900;
      color: ${colors.primary};
      opacity: 0.4;
      display: block;
      margin-bottom: 0.75rem;
    }

    .creative-project-content h3 {
      font-size: 2rem;
      font-weight: 900;
      color: #2d2d2d;
      margin-bottom: 1.25rem;
    }

    .creative-project-content p {
      color: #666;
      line-height: 1.8;
      margin-bottom: 1.75rem;
      font-size: 1.05rem;
    }

    .creative-project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 1.75rem;
    }

    .tech-badge {
      padding: 0.6rem 1.25rem;
      background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
      color: white;
      border-radius: 25px;
      font-size: 0.9rem;
      font-weight: 700;
    }

    .creative-project-links {
      display: flex;
      gap: 2rem;
    }

    .project-link {
      color: ${colors.primary};
      text-decoration: none;
      font-weight: 800;
      font-size: 1.05rem;
    }

    .creative-experience {
      position: relative;
      padding-left: 3.5rem;
    }

    .creative-experience::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 5px;
      background: linear-gradient(180deg, ${colors.primary}, ${colors.secondary});
      border-radius: 3px;
    }

    .creative-exp-item {
      position: relative;
      margin-bottom: 3.5rem;
      padding-bottom: 2.5rem;
      border-bottom: 2px solid #f0f0f0;
    }

    .creative-exp-item:last-child {
      border-bottom: none;
    }

    .exp-timeline-dot {
      position: absolute;
      left: -4.25rem;
      top: 0.5rem;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: ${colors.primary};
      border: 5px solid white;
      box-shadow: 0 0 0 5px ${colors.primary};
    }

    .exp-content {
      padding-left: 1.5rem;
    }

    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 0.75rem;
      flex-wrap: wrap;
      gap: 1.5rem;
    }

    .exp-header h3 {
      font-size: 1.65rem;
      font-weight: 900;
      color: #2d2d2d;
    }

    .exp-date {
      font-size: 0.95rem;
      color: #999;
      font-weight: 700;
      background: #f8f9fa;
      padding: 0.4rem 1rem;
      border-radius: 15px;
    }

    .exp-content h4 {
      font-size: 1.3rem;
      color: ${colors.primary};
      font-weight: 700;
      margin-bottom: 1.25rem;
    }

    .exp-content p {
      color: #666;
      line-height: 1.8;
      font-size: 1.05rem;
    }

    .creative-education {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2.5rem;
    }

    .creative-edu-item {
      background: linear-gradient(135deg, #f8f9fa, #ffffff);
      padding: 2.5rem;
      border-radius: 20px;
      border-left: 6px solid ${colors.primary};
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    .creative-edu-item h3 {
      font-size: 1.45rem;
      font-weight: 900;
      color: #2d2d2d;
      margin-bottom: 0.75rem;
    }

    .creative-edu-item h4 {
      font-size: 1.15rem;
      color: ${colors.primary};
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .edu-date {
      font-size: 0.9rem;
      color: #999;
      font-weight: 700;
      display: inline-block;
      background: white;
      padding: 0.4rem 1rem;
      border-radius: 15px;
      margin-bottom: 1.25rem;
    }

    .creative-edu-item p {
      color: #666;
      line-height: 1.7;
      font-size: 1rem;
    }

    @media (max-width: 1200px) {
      .theme-creative {
        grid-template-columns: 1fr;
      }
      .creative-project {
        grid-template-columns: 1fr;
      }
      .creative-education {
        grid-template-columns: 1fr;
      }
    }
  `

  // Return appropriate theme CSS based on selection
  if (theme === 'minimal') {
    return baseCSS + minimalThemeCSS
  } else if (theme === 'creative') {
    return baseCSS + creativeThemeCSS
  } else {
    return baseCSS + modernThemeCSS
  }
}