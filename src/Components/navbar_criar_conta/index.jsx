import styles from './Navbar.module.css'
import logo from '../../assets/img/spotify-logo.png'
function Navbar() {
    return (
        <>
            <header className={styles.header}>
                <nav>
                    <img src={logo} alt="spotify logo"/>
                </nav>
            </header>
        </>
    );
}

export default Navbar;