import styles from './Footer.module.css'

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <p className={styles.texto}>This site is protected by reCAPTCHA and the Google <span>Privacy Policy</span> and <span>Terms of Service</span> apply.</p>
            </footer>
        </>
    );
};

export default Footer