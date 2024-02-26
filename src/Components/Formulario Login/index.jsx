import { Link } from 'react-router-dom';
import styles from './Form.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ValidarEmail,ValidarSenha } from '../../Validador/validadores';
import { useState } from 'react';


function Form() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email.trim() || !senha.trim()) {
            
            toast.error('Email ou Senha não pode estar vazios!');
            return;
        }
        if (!ValidarEmail(email)) {
           
            toast.error('Email invalido!');
            return;
        }
        if (!ValidarSenha(senha)) {
            
            toast.error('Senha tem que ser acima de 6 caracteres');
            return;
        }
        if (ValidarEmail(email) && ValidarSenha(senha)) {
            let contas = JSON.parse(localStorage.getItem('contas'));

            if (!contas) {
                toast.error('Conta não cadastrada!');
            } else if (contas.find(conta => conta.email === email && conta.senha === senha)) {
                toast.success('Logado!👋');
            } else {
                toast.error('Usuário não encontrado!👋');
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
                        <label htmlFor="Email or username">Email or username</label>
                        <input type="email" id="Email or username" value={email}placeholder="Email or username" onChange={handleEmailChange}/>
                    </div>
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input type="password" id="Password" value={senha} placeholder="Password" className={styles.botao_senha} onChange={handleSenhaChange}/> 
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
