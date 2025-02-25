import React from 'react';

/**
 * Seção "Sobre Mim", com breve descrição pessoal/profissional.
 *
 * @component
 */
const About = () => {
  return (
    <section 
    id="sobre"
    style={{
      paddingTop: '150px',
      marginTop: '-10px'
    }}
  
    className="about container"
    data-aos="fade-up"        // Tipo de animação (ex.: fade-up, fade-down, etc.)
    data-aos-duration="1000"  // Duração em milissegundos (ex.: 1000 = 1 segundo)
    data-aos-delay="200"      // Atraso antes de iniciar a animação (em ms)    
>
      <h2>Sobre Mim</h2>
      <p style={{ maxWidth: '700px', margin: '1rem auto' }}>
      Sou um desenvolvedor web com conhecimento em React e Node.js, em constante aprimoramento em tecnologias modernas como C#. 
      Gosto de resolver problemas complexos e transformar ideias em soluções reais, sempre prezando por código limpo e alto desempenho.
      </p>
    </section>
  );
};

export default About;
