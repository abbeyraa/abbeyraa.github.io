// ===============================
// PORTFOLIO DATA
// ===============================
const portfolios = [
  {
    year: 2025,
    title:
      "Emotion Classification Based on Gender Using Machine Learning Models",
    desc: "A graduate-level research project focusing on the classification of human emotions using machine learning models with an additional gender-based analysis. The study explored differences in emotional expression patterns between male and female subjects and evaluated multiple classification algorithms across various feature sets. The project involved dataset preprocessing, feature extraction, model training, and comparative performance evaluation to identify the most accurate classification pipeline.",
    tech: ["Python", "Machine Learning", "Deep Learning"],
    role: "Researcher & Machine Learning Engineer",
    link: "#",
  },
  {
    year: 2023,
    title: "E-SKA Web Development – Full Stack Developer (Internship)",
    desc: "Developed core functionality for the E-SKA system at the Ministry of Trade, handling front-end to back-end processes. Contributed to form handling, database integration, debugging, and system optimization.",
    tech: ["HTML", "CSS", "JavaScript", "PostgreSQL"],
    role: "Full Stack Developer Intern",
    link: "#",
  },
  {
    year: 2023,
    title:
      "IoT-Based Smart Cat Feeder with 3D-Printed Mechanism and Remote Control",
    desc: "A smart pet feeder system designed using ESP32, 3D-printed components, and a motor-based dispensing mechanism. The system allows remote food dispensing via Wi-Fi, enabling owners to schedule or manually trigger feeding from any location. The feeder includes real-time status monitoring and stable motor control to ensure precise food output. The hardware casing, feed dispenser, and mechanical parts were custom-designed and modeled through 3D printing to achieve an optimized and reliable structure.",
    tech: ["ESP32", "Fusion 360", "Arduino IDE"],
    role: "Developer",
    link: "#",
  },
  {
    year: 2023,
    title: "Frontend Web Development – School Project",
    desc: "Developed a responsive website using native HTML and CSS, focusing on layout structure, styling, and clean UI.",
    tech: ["HTML", "CSS"],
    role: "Front-End Programmer",
    link: "#",
  },
  {
    year: 2023,
    title: "SQL Database System – School Project",
    desc: "Designed database schema, built relationships, and created complex SQL queries including joins and subqueries.",
    tech: ["SQL Server", "Database Design"],
    role: "Database Programmer",
    link: "#",
  },
  {
    year: 2022,
    title: "Research Methodology Project",
    desc: "Conducted an academic research project involving data collection, analysis, and structured documentation.",
    tech: ["Research", "Analysis"],
    role: "Researcher",
    link: "#",
  },
  {
    year: 2022,
    title: "2D Game Development – Object Oriented Programming",
    desc: "Created a 2D Java game by applying OOP principles to build modular and maintainable code. Designed game mechanics, movement, collision detection, scoring, and optimized performance.",
    tech: ["Java", "OOP", "Game Design"],
    role: "Java Game Developer",
    link: "#",
  },
  {
    year: 2022,
    title: "Skin Cancer Detection using Machine Learning",
    desc: "Implemented UNet model variations for image segmentation, processed datasets, and analyzed model behavior.",
    tech: ["Python", "Machine Learning", "UNet"],
    role: "ML Programmer",
    link: "#",
  },
];

function renderPortfolio() {
  const container = document.getElementById("exp");
  const groups = {};

  portfolios.forEach((p) => {
    if (!groups[p.year]) groups[p.year] = [];
    groups[p.year].push(p);
  });

  const sortedYears = Object.keys(groups).sort((a, b) => b - a);

  sortedYears.forEach((year) => {
    const yearTitle = document.createElement("h2");
    yearTitle.className = "year-heading";
    yearTitle.textContent = year;
    container.appendChild(yearTitle);

    groups[year].forEach((p) => {
      const card = document.createElement("div");
      card.className = "project-card";

      const techHTML = p.tech.map((t) => `<span>${t}</span>`).join("");

      card.innerHTML = `
        <h3>${p.title}</h3>
        <p class="project-desc">${p.desc}</p>

        <div class="tech-stack">${techHTML}</div>

        <p class="role"><strong>Role:</strong> ${p.role}</p>

        <a href="${p.link}" target="_blank" class="project-link">View Project</a>
      `;

      container.appendChild(card);
    });
  });
}

renderPortfolio();
