import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <i className="fas fa-plus logo-icon"></i>
                <span className="logo-text">Medicare</span>
            </div>
            <nav className="nav">
                <Link href="/">Início</Link >
                <Link href="/pages/service">Serviços</Link>
                <Link href="/find-doctor">Encontrar um Médico</Link>
                <Link href="/pages/contact">Contato</Link>
            </nav>
            <Link href="/pages/auth"><button className="login-button">Entrar</button></Link>
           
        </header>
    );
}
