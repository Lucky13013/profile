// src/App.js
import React from 'react';
import './App.css';
import profilePic from './assets/12225935.png';

// Componente principal do nosso "Linktree"
function Linktree() {
  // DADOS DOS LINKS: Edite aqui para adicionar, remover ou alterar seus links.
  const links = [
    {
      title: 'Meu Portfólio 🚀',
      url: 'https://github.com/Lucky13013'
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lucas-cabral-67ab89289'
    }
  ];

  // DADOS DO PERFIL: Edite aqui para alterar sua imagem e nome.
  const profile = {
    name: 'Lucas Cabral',
    // Coloque o link para sua foto de perfil aqui. Pode ser do GitHub, LinkedIn, etc.
    avatar: profilePic
  };

  return (
    <div className="linktree-container">
      <img src={profile.avatar} alt="Foto de Perfil" className="profile-pic" />
      <h1>{profile.name}</h1>
      <p>Bem-vindo(a) aos meus links! Me siga nas redes sociais e confira meus projetos.</p>
      <div className="links-list">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            {link.title}
          </a>
        ))}
      </div>
      <footer className="footer">
        <p>Feito com ❤️ usando ReactJS</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Linktree />
    </div>
  );
}

export default App;