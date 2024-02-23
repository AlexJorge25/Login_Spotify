import { Link } from 'react-router-dom';
import styles from './Form.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ValidarEmail,ValidarSenha } from '../../Validador/validadores';
import { useState } from 'react';


function Form() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // Funções de tratamento de mudança nos campos de email e senha
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };
    
    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();
        if (ValidarEmail(email) && ValidarSenha(senha)) {
            let contas = JSON.parse(localStorage.getItem('contas'));

            if(contas.find(contas => contas.email === email && contas.senha === senha)){
                toast.success('Logado!👋');
            }
            else{
                toast.error('Usuario não encontrado!👋');

            }

        }
        else{
            toast.error('Email ou Senha invalidos');
        }
    };
    
    return (
        <>
            <section className={styles.container_login}> 
                <form className={styles.caixa_login} onSubmit={handleSubmit}> 
                    <h1>Log in to Spotify</h1>
                    <div className={styles.risco}></div> 
                    <div>
                        <label htmlFor="emailUsername">Email or username</label>
                        <input type="email" value={email}placeholder="Email or username" onChange={handleEmailChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={senha} placeholder="Password" className={styles.botao_senha} onChange={handleSenhaChange}/> 
                    </div>
                    <div className={styles.radio}> 
                        <label className={styles.switch}> 
                            <input type="checkbox" defaultChecked />
                            <span className={styles.slider}></span> 
                            <h1>Remember me</h1>
                        </label>
                    </div>
                    <div className={styles.botao}> 
                        <button type="submit">Log in</button>
                    </div>
                    <a className={styles.forget}>Forgot your password</a>
                    <div className={styles.risco}></div> 
                    <p className={styles.criar_conta}><span>Don't have an account?<Link className={styles.criar_conta_link} to="Criar_Conta">Sign up for Spotify</Link></span></p> 
                </form>
            <ToastContainer position='top-right' />
            </section>
        </>
    );
};

export default Form;
