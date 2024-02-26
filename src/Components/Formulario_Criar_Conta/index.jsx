import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styles from './Form2.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ValidarEmail,ValidarSenha } from '../../Validador/validadores'

function Form2() {
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
            let contas = JSON.parse(localStorage.getItem('contas')) || [];


            const novaConta = { email, senha };

            contas.push(novaConta);

            localStorage.setItem('contas', JSON.stringify(contas));

            toast.success('Conta criada com sucesso!👋');
        }
        else{
            toast.error('Senha tem que ser acima ou igual a 6 digitos');
        }
    };

    return (
        <>
            <section className={styles.container_login}>
                <form className={styles.caixa_login} onSubmit={handleSubmit}>
                    <h1>Sign up to start listening</h1>
                    <div className={styles.risco}></div>
                    <div>
                        <label htmlFor="Email or username">Email or username</label>
                        <input type="email" id="Email or username" value={email} placeholder="Email or username" onChange={handleEmailChange} />
                    </div>
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input type="password" id="Password" value={senha} placeholder="Password" className="botao-senha" onChange={handleSenhaChange} />
                    </div>

                    <div className={styles.botao}>
                        <button type="submit">Create an account</button>
                    </div>

                    <div className={styles.risco}></div>
                    <p className={styles.logar}><span>Already have an account<Link to="/">Log in here.</Link></span></p>
                    <p>This site is protected by reCAPTCHA and the Google <span>Privacy Policy</span> and <span>Terms of Service</span> apply.</p>
                </form>
                <ToastContainer position='top-right' />
            </section>
        </>
    );
}

export default Form2;
