import React from 'react';

/**
 * Componente Footer que exibe informações de copyright.
 *
 * @component
 */
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#151515', padding: '2rem 0' }}>
      <div className="container" style={{ textAlign: 'center', fontSize: '0.9rem', color: '#777' }}>
        <p>&copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
