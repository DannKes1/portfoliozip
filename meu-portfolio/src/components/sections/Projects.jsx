import React from 'react';

/**
 * Seção "Projetos" para listar projetos e experiências relevantes.
 *
 * @component
 */
const Projects = () => {
  const projetos = [
    {
      nome: 'Site simples de Receitas',
      descricao: 'Descrição do projeto, tecnologias utilizadas e link para o repositório.',
      link: 'https://github.com/DannKes1/SiteReceitas/tree/8daa75cb240638e0a8fd1974ca908073fd05e044/SiteReceitas-main/SiteReceitas-main/TopicosEspeciaisTecnologia'
    },
    {
      nome: 'Site de Adoção Pets',
      descricao: 'Descrição do projeto, tecnologias utilizadas e link para o repositório.',
      link: 'https://github.com/DannKes1/backend-site-pets/tree/9286a4f555f7cf2e675d6db1996b5f255ed3ef10'
    }
    // Adicione quantos projetos quiser
  ];

  return (
    <section id="projetos" className="projects container">
      <h2>Projetos</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1rem',
        marginTop: '2rem'
      }}>
        {projetos.map((proj) => (
          <article
            key={proj.nome}
            style={{
              backgroundColor: '#1e1e1e',
              padding: '1.5rem',
              borderRadius: '4px'
            }}
          >
            <h3>{proj.nome}</h3>
            <p style={{ margin: '1rem 0' }}>{proj.descricao}</p>
            <a className="btn" href={proj.link} target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
