import React from 'react';

/**
 * Componente Header do Portfólio.
 * Renderiza o cabeçalho fixo/minimalista com logo/nome e menu de navegação.
 *
 * @component
 */
const Header = () => {
  return (
    <header 
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        backgroundColor: '#151515',
        zIndex: 999
      }}
    >
      <nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Daniel Cristian</h2>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#formacao">Formação</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
