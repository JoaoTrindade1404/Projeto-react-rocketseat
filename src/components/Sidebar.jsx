import styles from './Sidebar.module.css'

function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img src="https://imgs.search.brave.com/uXgNRn2HdIJUAy4mMHtgAZ3jLTD2XsWDqvzK5EFJKn8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZ2FtZXItMTJ1/bDcyY21jcGppZms4/bS5qcGc" alt="guaxinim" />
            <div className={styles.profile}>
                <strong>Joao Vitor</strong>
                <span>web developer</span>
            </div>
            <footer>
                <a href="#">
                    editar seu perfil
                </a>
            </footer>
        </aside>
    )
}

export default Sidebar