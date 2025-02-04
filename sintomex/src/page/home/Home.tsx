import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Importando o CSS externo

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Bem-vindo ao <span className="highlight">Sintomex</span></h1>
        <p>Seu assistente médico virtual para responder suas dúvidas de saúde!</p>

        <div className="buttons">
          <Link to="/about" className="btn btn-primary">Saiba Mais</Link>
          <Link to="/sintomex" className="btn btn-secondary">Começar Chat</Link>
        </div>

        <div className="image-container">
          <img src="https://source.unsplash.com/600x400/?health,doctor" alt="Assistente de Saúde" />
        </div>
      </div>
    </div>
  );
};

export default Home;
