function Project({ title, image, link, repo }) {
    return (
      <div>
        <h3>{title}</h3>
        <img src={image} alt={title} width="200px" />
        <p>
          <a href={link} target="_blank">Ver Proyecto</a> | 
          <a href={repo} target="_blank">Código</a>
        </p>
      </div>
    );
  }
  
  export default Project;
  