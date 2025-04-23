import styles from './Header.module.css'
import ignitelogo from '../assets/ignite-logo.svg'

function Header(){
    return(
        <header className={styles.header}>
            <img src={ ignitelogo } alt="logo ignite" />
            <strong>Ignite Feed</strong>
        </header>
    )
}

export default Header