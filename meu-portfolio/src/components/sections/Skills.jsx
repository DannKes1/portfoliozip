import React from 'react';

/**
 * Seção "Habilidades", listando principais competências.
 *
 * @component
 */
const Skills = () => {
  const skillList = [
    'HTML5, CSS3, JavaScript',
    'React (Hooks, Context API)',
    'Node.js e Express',
    'Banco de Dados (SQL/NoSQL)',
    'Git e GitHub',
    'Linguagem C#'
  ];

  return (
    <
      section
      id="habilidades"
  className="skills container"
  data-aos="fade-left"
  data-aos-duration="1200"
    >
      <h2>Principais Habilidades</h2>
      <ul style={{ marginTop: '2rem', listStyle: 'none', paddingLeft: 0 }}>
        {skillList.map((skill) => (
          <li 
            key={skill}
            style={{
              background: '#1e1e1e',
              padding: '0.8rem 1rem',
              marginBottom: '0.5rem',
              borderRadius: '4px'
            }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
