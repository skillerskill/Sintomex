import styles from './Cadastro.module.css';
import Link from 'next/link';

export default function Cadastro() {
    return (
        <div className={styles.container}>
            <div className={styles.signupBox}>
                <h1 className={styles.title}>WEBMED</h1>
                <h2 className={styles.subtitle}>Cadastro</h2>

                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="nome" className={styles.label}>Nome Completo</label>
                        <input
                            type="text"
                            id="nome"
                            className={styles.input}
                            placeholder="Digite seu nome completo"
                            required
                        />
                    </div>

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
                        <label htmlFor="telefone" className={styles.label}>Telefone</label>
                        <input
                            type="tel"
                            id="telefone"
                            className={styles.input}
                            placeholder="Digite seu telefone"
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="sexo" className={styles.label}>Sexo</label>
                        <select id="sexo" className={styles.input} required>
                            <option value="">Selecione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="idade" className={styles.label}>Idade</label>
                        <input
                            type="number"
                            id="idade"
                            className={styles.input}
                            placeholder="Digite sua idade"
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="senha" className={styles.label}>Senha</label>
                        <input
                            type="password"
                            id="senha"
                            className={styles.input}
                            placeholder="Digite sua senha"
                            required
                        />
                    </div>

                    <button type="submit" className={styles.signupButton}>CADASTRAR</button>
                </form>

                <p className={styles.loginText}>
                    Já tem uma conta? <Link href="/pages/auth/"><div className={styles.loginLink}>Faça login</div></Link> 
                </p>
            </div>
        </div>
    );
}