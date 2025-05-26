import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://imgs.search.brave.com/uXgNRn2HdIJUAy4mMHtgAZ3jLTD2XsWDqvzK5EFJKn8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZ2FtZXItMTJ1/bDcyY21jcGppZms4/bS5qcGc"
        alt="guaxinim"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfNjUepcJE63cHgBtiaamPY5bP9-EQ3l0S7w&s"
        />
        <strong>Joao Vitor</strong>
        <span>web developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

export default Sidebar;
