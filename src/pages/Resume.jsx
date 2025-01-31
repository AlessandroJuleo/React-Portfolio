import React from "react";
import { FaDownload } from "react-icons/fa"; // Ícono de descarga
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa"; // Íconos de contacto
import "../assets/styles.css"; // Asegurar que se importan los estilos

function Resume() {
  return (
    <section className="resume-section">
      <h2 className="resume-title">Resume</h2>

      {/* Botón de descarga */}
      <div className="download-container">
        <a href="/CV.pdf" download="Mi_CV.pdf" className="download-btn">
          Descargar CV <FaDownload />
        </a>
      </div>

      {/* Lista de habilidades */}
      <div className="skills-container">
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>

        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
        </ul>

        <h3>Additional Skills</h3>
        <ul>
          <li>Diseño Web</li>
          <li>Python</li>
          <li>SQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
