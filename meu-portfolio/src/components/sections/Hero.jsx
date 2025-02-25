// src/components/sections/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        height: '100vh',
        position: 'relative',
        backgroundImage: "url('/assets/minha-imagem.jpg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay para escurecer a imagem e destacar o texto */}
      <div 
        style={{ 
          position: 'absolute',
          inset: 0, 
          backgroundColor: 'rgba(0,0,0,0.5)' 
        }}
      />
      {/* Conteúdo dentro do Hero */}
      <div 
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          color: '#fff'
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Olá, eu sou o Daniel</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', textAlign: 'center', marginBottom: '2rem' }}>
          Desenvolvedor Web apaixonado por criar experiências digitais incríveis.
        </p>
        <a className="btn" href="#projetos">Veja meus Projetos</a>
      </div>
    </section>
  );
};

export default Hero;
