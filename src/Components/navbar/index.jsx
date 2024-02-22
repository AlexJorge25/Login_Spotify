import React from 'react';
import styles from './Navbar.module.css'; // Importa o módulo CSS como um objeto
import spotifyLogo from '../../assets/img/spotify-logo.png';

function Navbar(){
    return (
        <>
        <header className={styles.header}> 
            <nav className={styles.nav}> 
                <img src={spotifyLogo} alt="spotify logo" className={styles.logo}/>
            </nav>
        </header>
        </>
    );
};

export default Navbar;
