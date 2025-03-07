export default function Dashboard() {
    return (
      <div className="container">
        <aside className="sidebar">
          <h2>Dashboard</h2>
          <a href="#">Home</a>
          <a href="#">Relatórios</a>
          <a href="#">Configurações</a>
        </aside>
  
        <main className="main-content">
          <h1>Bem-vindo ao Painel</h1>
          <div className="cards">
            <div className="card">
              <h3>Usuários</h3>
              <p>1.200 cadastrados</p>
            </div>
            <div className="card">
              <h3>Vendas</h3>
              <p>R$ 15.000 este mês</p>
            </div>
            <div className="card">
              <h3>Visitas</h3>
              <p>8.500 visitantes</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
  