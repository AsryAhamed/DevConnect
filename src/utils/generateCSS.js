export const generateCSS = (theme, colors) => {
  const baseCSS = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #333;
      background: #f5f5f5;
    }

    .portfolio {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    .header {
      text-align: center;
      padding: 60px 20px;
      background: white;
      border-radius: 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      margin-bottom: 40px;
    }

    .avatar {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 20px;
      border: 4px solid ${colors.primary};
    }

    h1 {
      font-size: 3em;
      margin-bottom: 10px;
      color: ${colors.primary};
    }

    .title {
      font-size: 1.5em;
      color: ${colors.secondary};
      margin-bottom: 20px;
    }

    .bio {
      max-width: 600px;
      margin: 0 auto 30px;
      color: #666;
      font-size: 1.1em;
    }

    .contact {
      display: flex;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }

    .contact span {
      color: #666;
    }

    .social {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .social a {
      color: ${colors.primary};
      text-decoration: none;
      padding: 10px 20px;
      border: 2px solid ${colors.primary};
      border-radius: 25px;
      transition: all 0.3s;
    }

    .social a:hover {
      background: ${colors.primary};
      color: white;
    }

    .section {
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      margin-bottom: 30px;
    }

    .section h2 {
      font-size: 2em;
      margin-bottom: 30px;
      color: ${colors.primary};
      border-bottom: 3px solid ${colors.primary};
      padding-bottom: 10px;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .skill-item {
      padding: 15px;
      background: #f8f9fa;
      border-radius: 10px;
    }

    .skill-name {
      font-weight: 600;
      margin-bottom: 8px;
      display: block;
      color: ${colors.text};
    }

    .skill-bar {
      height: 8px;
      background: #e0e0e0;
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 5px;
    }

    .skill-fill {
      height: 100%;
      background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
      transition: width 0.3s;
    }

    .skill-level {
      font-size: 0.9em;
      color: #666;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .project-card {
      border: 1px solid #e0e0e0;
      border-radius: 15px;
      overflow: hidden;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }

    .project-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .project-card h3 {
      padding: 20px 20px 10px;
      color: ${colors.primary};
    }

    .project-card p {
      padding: 0 20px;
      color: #666;
      margin-bottom: 15px;
    }

    .tech-tags {
      padding: 0 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 15px;
    }

    .tag {
      background: ${colors.primary}20;
      color: ${colors.primary};
      padding: 5px 12px;
      border-radius: 15px;
      font-size: 0.85em;
    }

    .project-links {
      padding: 0 20px 20px;
      display: flex;
      gap: 15px;
    }

    .project-links a {
      color: ${colors.primary};
      text-decoration: none;
      font weight: 600;
      transition: color 0.3s;
    }

    .project-links a:hover {
      color: ${colors.secondary};
    }

    .experience-list, .education-list {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .exp-item, .edu-item {
      padding: 25px;
      background: #f8f9fa;
      border-radius: 15px;
      border-left: 4px solid ${colors.primary};
    }

    .exp-item h3, .edu-item h3 {
      color: ${colors.primary};
      font-size: 1.3em;
      margin-bottom: 5px;
    }

    .exp-item h4, .edu-item h4 {
      color: ${colors.secondary};
      font-size: 1.1em;
      margin-bottom: 10px;
    }

    .date {
      color: #888;
      font-size: 0.9em;
      margin-bottom: 10px;
      display: block;
    }

    .exp-item p, .edu-item p {
      color: #666;
      line-height: 1.7;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2em;
      }

      .title {
        font-size: 1.2em;
      }

      .contact {
        flex-direction: column;
        gap: 10px;
      }

      .section {
        padding: 25px;
      }

      .skills-grid, .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `

  return baseCSS
}