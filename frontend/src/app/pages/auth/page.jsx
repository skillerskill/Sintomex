import styles from './Login.module.css';
import Link from 'next/link';

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <h1 className={styles.title}>WEBMED</h1>
                <h2 className={styles.subtitle}>Login</h2>

                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>E-mail</label>
                        <input
                            type="email"
                            id="email"
                            className={styles.input}
                            placeholder="Digite seu e-mail"
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>Senha</label>
                        <input
                            type="password"
                            id="password"
                            className={styles.input}
                            placeholder="Digite sua senha"
                            required
                        />
                    </div>

                    <a href="#" className={styles.forgotPassword}>Esqueceu a senha?</a>

                    <button type="submit" className={styles.loginButton}>LOGIN</button>
                </form>

                <p className={styles.signupText}>
                    Você não tem uma conta? <Link href="/pages/cadastro"> <div  className={styles.signupLink}>Cadastre-se</div></Link>
                </p>
            </div>
        </div>
    );
}