import React from 'react';

/**
 * Seção "Formação", exibindo formação acadêmica e certificações.
 *
 * @component
 */
const Education = () => {
  return (
    <section id="formacao" className="education container">
      <h2>Formação Acadêmica e Certificações</h2>
      <div style={{ marginTop: '2rem' }}>
        <p><strong>Curso de Análise e Desenvolvimento de Sistemas</strong> - Instituto Federal de Rondônia</p>
        <p><strong>Certificação em formação incial em programador de Sistemas</strong> - Instituto Federal de Rondônia</p>
        <p><strong>Certificação em U.X designer</strong> - Origamid</p>
        {/* Adicione mais formações/certificações */}
      </div>
    </section>
  );
};

export default Education;
