import React, { useState, useRef } from "react";
import axios from "axios";
import "./App.css"; // Importando o CSS externo

const OllamaInterface = () => {
  const [prompt, setPrompt] = useState(""); // Armazena o input do usuário
  const [response, setResponse] = useState(""); // Armazena a resposta completa da API
  const [displayedText, setDisplayedText] = useState(""); // Exibição gradual
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const [error, setError] = useState(null); // Mensagem de erro
  const [isStopped, setIsStopped] = useState(false); // Estado para parar carregamento
  const textIntervalRef = useRef(null); // Referência para o intervalo

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse("");
    setDisplayedText("");
    setIsStopped(false); // Reseta o estado de parada

    try {
      const res = await axios.post("http://localhost:11434/api/generate", {
        model: "llama3.2",
        prompt: prompt,
        stream: false,
      });

      const fullResponse = res.data.response;
      setResponse(fullResponse);
      displayTextGradually(fullResponse);
    } catch (err) {
      setError("Erro ao se conectar com a API. Verifique se o Ollama está ativo.");
      setLoading(false);
    }
  };

  const displayTextGradually = (text) => {
    const words = text.split(" ");
    let currentIndex = 0;

    textIntervalRef.current = setInterval(() => {
      if (currentIndex < words.length && !isStopped) {
        setDisplayedText((prev) => prev + (currentIndex > 0 ? " " : "") + words[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(textIntervalRef.current);
        setLoading(false); // Quando terminar, reativa o botão "Carregar"
      }
    }, 100);
  };

  const handleStop = () => {
    setIsStopped(true);
    clearInterval(textIntervalRef.current);
    setLoading(false); // Para exibição e reativa o botão "Carregar"
  };

  return (
    <div className="container">
      <div className="chat-box">
        <h1 className="title">Sintosmex ai.</h1>

        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="prompt" className="label">Insira o Prompt:</label>
          <input
            id="prompt"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="input"
            placeholder="Digite sua pergunta..."
            required
          />
          <div className="button-container">
            {!loading ? (
              <button type="submit" className="button">
                Enviar
              </button>
            ) : (
              <button type="button" onClick={handleStop} className="button stop-button">
                Parar
              </button>
            )}
          </div>
        </form>

        {error && <div className="error-message">{error}</div>}

        {response && (
          <div className="response-box">
            <h2 className="response-title">Resposta:</h2>
            <p className="response-text">{displayedText || "Carregando..."}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OllamaInterface;
