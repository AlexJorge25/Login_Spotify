import styles from './Form.module.css';

function Form() {
    return (
        <>
            <section className={styles.container_login}> 
                <div className={styles.caixa_login}> 
                    <h1>Log in to Spotify</h1>
                    <div className={styles.risco}></div> 
                    <div>
                        <label htmlFor="emailUsername">Email or username</label>
                        <input type="email" placeholder="Email or username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" className={styles.botao_senha} /> 
                    </div>
                    <div className={styles.radio}> 
                        <label className={styles.switch}> 
                            <input type="checkbox" defaultChecked />
                            <span className={styles.slider}></span> 
                            <h1>Remember me</h1>
                        </label>
                    </div>
                    <div className={styles.botao}> 
                        <button>Log in</button>
                    </div>
                    <a className={styles.forget}>Forgot your password</a>
                    <div className={styles.risco}></div> 
                    <p className={styles.criar_conta}><span>Don't have an account?<a className={styles.criar_conta_link} href="/">Sign up for Spotify</a></span></p> 
                </div>
            </section>
        </>
    );
};

export default Form;
