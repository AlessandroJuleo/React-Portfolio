const projects = [
  {
    title: "Sherlock-Numerical",
    image: "/images/project-1.jpg",
    github: "https://github.com/AlessandroJuleo/Sherlock-Numerical"
  },
  {
    title: "Vehicle-Builder",
    image: "/images/project-2.jpg",
    github: "https://github.com/AlessandroJuleo/Vehicle-Builder"
  },
  {
    title: "Weather-Dashboard",
    image: "/images/project-3.jpg",
    github: "https://github.com/AlessandroJuleo/Weather-Dashboard"
  },
  {
    title: "Professional-README-Generator",
    image: "/images/project-4.jpg",
    github: "https://github.com/AlessandroJuleo/Professional-README-Generator"
  }
];

function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.github} target="_blank" rel="noopener noreferrer" className="portfolio-item">
            <div className="overlay">
              <p>{project.title}</p>
            </div>
            <img src={project.image} alt={project.title} />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
