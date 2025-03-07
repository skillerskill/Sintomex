import Head from 'next/head';
import Header from '@/app/componets/header';

export default function Contato() {
  return (
    <div className="container">
      <Head>
        <title>Contacte-nos - Medicare</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main className="main">
        <div className="content">
          <h1>Contacte-nos</h1>
          <p>Se tiver alguma dúvida, sinta-se à vontade para entrar em contacto connosco preenchendo o formulário abaixo.</p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar Mensagem</button>
          </form>
        </div>
      </main>
    </div>
  );
}
