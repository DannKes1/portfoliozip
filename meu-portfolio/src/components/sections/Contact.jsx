import React from 'react';

/**
 * Seção "Contato", com informações de contato e redes sociais.
 *
 * @component
 */
const Contact = () => {
  return (
    <section id="contato" className="contact container">
      <h2>Contato</h2>
      <p style={{ marginTop: '1rem', maxWidth: '700px' }}>
        Caso queira conversar sobre projetos, oportunidades ou compartilhar ideias,
        sinta-se à vontade para me contatar pelos canais abaixo:
      </p>
      <ul style={{ listStyle: 'none', marginTop: '2rem' }}>
        <li>Email: <a href="https://accounts.google.com/v3/signin/challenge/pwd?TL=ADgdZ7Q-l_z-9aa8PAQpgS0QJnVfS-ec34L1ZnR0DxOVQLogjqlQrfKENX7LaG68&checkConnection=youtube%3A179&checkedDomains=youtube&cid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ddm=1&dsh=S-1877333818%3A1740448401914339&emr=1&flowEntry=ServiceLogin&flowName=GlifWebSignIn&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ASSHykoQGEBubvFcPCqOLa4rHs28OGbcr-Huij76vPK9d2uzSUvmyHUGKxFDlp9X8Q-TMTygF4tx_Q&osid=1&pstMsg=1&service=mail&authuser=0">danielcristian0706@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/daniel-rocha-046204247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">meu-perfil</a></li>
        <li>GitHub: <a href="https://github.com/DannKes1" target="_blank" rel="noopener noreferrer">meu-usuario</a></li>
      </ul>
    </section>
  );
};

export default Contact;
