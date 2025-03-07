import Head from 'next/head';
import Header from '@/app/componets/header';

export default function Servicos() {
  return (
    <div className="container">
      <Head>
        <title>Serviços - Medicare</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main className="main">
        <div className="content">
          <h1>Nossos Serviços</h1>
          <p>Oferecemos uma ampla gama de serviços médicos para atender às suas necessidades.</p>
          <div className="services-list">
            <div className="service-item">
              <i className="fas fa-stethoscope service-icon"></i>
              <h2>Check-up Geral</h2>
              <p>Exames regulares para garantir que você está em boa saúde.</p>
            </div>
            <div className="service-item">
              <i className="fas fa-heartbeat service-icon"></i>
              <h2>Cardiologia</h2>
              <p>Serviços completos de cuidados cardíacos para todas as idades.</p>
            </div>
            <div className="service-item">
              <i className="fas fa-x-ray service-icon"></i>
              <h2>Radiologia</h2>
              <p>Serviços avançados de imagem para um diagnóstico preciso.</p>
            </div>
            <div className="service-item">
              <i className="fas fa-syringe service-icon"></i>
              <h2>Vacinações</h2>
              <p>Proteja-se e à sua família com nossos serviços de vacinação.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
