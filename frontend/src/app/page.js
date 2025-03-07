import Head from 'next/head';
import Header from './componets/header';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Medicare</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main className="main">
        <div className="content">
          <h1>Ajudamos pacientes a viverem uma vida saudável e longa.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quaerat cumque fugit, perspiciatis cum nemo aperiam, aut quia earum amet architecto, modi dolo. Soluta unde ducimus perferendis?
          </p>
          <button className="appointment-button">Solicitar uma Consulta</button>
          <div className="stats">
            <div className="stat">
              <span className="stat-number">30+</span>
              <p>Anos de Experiência</p>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <p>Localizações da Clínica</p>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <p>Satisfação dos Pacientes</p>
            </div>
          </div>
        </div>
        <div className="images">
          <img src="https://storage.googleapis.com/a1aa/image/4ETUVycNPKay8b_t-CvEXmFKeHBCTF0Bcecd09lV-eU.jpg" alt="Doutor com fundo laranja" />
          <img src="https://storage.googleapis.com/a1aa/image/tBQ9UsqEP4W5ekcS3jRBFyZ4O_v4S_kYSQpR9Gh_BB4.jpg" alt="Doutor com fundo roxo" />
          <img src="https://storage.googleapis.com/a1aa/image/GmrhMGzZOF1cBj5iamGeRv1jJTJ6EV8DGjjgGah9fpM.jpg" alt="Doutor com fundo azul" />
        </div>
      </main>
    </div>
  );
}
