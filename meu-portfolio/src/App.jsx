import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

import './styles/global.css';

/**
 * Componente raiz da aplicação.
 * Organiza todas as seções do portfólio em sequência.
 *
 * @component
 */
function App() {
  return (
    <>
      <Header />
      {/* Para evitar que o Header fique em cima do Hero, adicionamos um "offset" */}
      <div style={{ paddingTop: '10px' }}>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
